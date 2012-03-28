/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.base.Metadata
jQuery.sap.declare("sap.ui.base.Metadata");
jQuery.sap.require("jquery.sap.script");

/**
 * Creates a new metadata object from the given static infos.
 *
 * @param {string} sClassName fully qualified name of the class that is described by this metadata object
 * @param {object} oStaticInfo static info to construct the metadata from
 *
 * @class Metadata for a class.
 * @author Frank Weigel
 * @version 1.2.0
 * @since 0.8.6
 * @public
 */
sap.ui.base.Metadata = function(sClassName, oStaticInfo) {

	jQuery.sap.assert(typeof sClassName === "string" && sClassName, "Metadata: sClassName must be a non-empty string");
	jQuery.sap.assert(!oStaticInfo || typeof oStaticInfo === "object", "Metadata: oStaticInfo must be empty or an object");

	// retrieve class by its name. Using a lookup costs time but avoids the need for redundant arguments to this function
	var oClass = jQuery.sap.getObject(sClassName);
	if ( typeof oClass !== "function" ) {
		jQuery.sap.log.fatal("constructor for class " + sClassName + " must have been declared before calling defineClass");
	}

	this._sClassName = sClassName;
	this._oClass = oClass;

	oStaticInfo = oStaticInfo || {};
	if ( oStaticInfo.baseType ) {
		// lookup base class by its name - same reasoning as above
		var oParentClass = jQuery.sap.getObject(oStaticInfo.baseType);
		if ( typeof oParentClass !== "function" ) {
			jQuery.sap.log.fatal("base class '" + oStaticInfo.baseType + "' does not exist");
		}
		// link metadata with base metadata
		if ( oParentClass.getMetadata ) {
			this._oParent = oParentClass.getMetadata();
			jQuery.sap.assert(oParentClass === oParentClass.getMetadata().getClass(), "Metadata: oParentClass must match the class in the parent metadata");
		} else {
			// fallback, if base class has no metadata
			this._oParent = new sap.ui.base.Metadata(oStaticInfo.baseType, {});
		}
	} else {
		this._oParent = undefined;
	}

	// handle interfaces
	this._aInterfaces = jQuery.sap.unique(oStaticInfo.interfaces || []);

	// take over metadata from static info
	this._aPublicMethods = jQuery.sap.unique(oStaticInfo.publicMethods || []);

	// create the flattened "all" view
	if ( this._oParent ) {
		//this._aAllInterfaces = jQuery.sap.unique(this._oParent._aAllInterfaces.concat(this._aInterfaces));
		this._aAllPublicMethods = jQuery.sap.unique(this._oParent._aAllPublicMethods.concat(this._aPublicMethods));
	} else {
		//this._aAllInterfaces = this._aInterfaces;
		this._aAllPublicMethods = this._aPublicMethods;
	}
};

/**
 * Returns the fully qualified name of the class that is described by this metadata object
 * @return {string} name of the described class
 * @public
 */
sap.ui.base.Metadata.prototype.getName = function() {
	return this._sClassName;
};

/**
 * Returns the (constructor of the) class described by this metadata object.
 * @return {function} class described by this metadata
 * @public
 */
sap.ui.base.Metadata.prototype.getClass = function() {
	return this._oClass;
};

/**
 * Returns the metadata object of the base class of the class described by this metadata object
 * or null if the class has no (documented) base class.
 *
 * @return {sap.ui.base.Metadata} metadata of the base class
 * @public
 */
sap.ui.base.Metadata.prototype.getParent = function() {
	return this._oParent;
};

/**
 * Returns an array with the names of the public methods declared by this class.
 *
 * @return {string[]} array with names of public methods declared by this class
 * @public
 */
sap.ui.base.Metadata.prototype.getPublicMethods = function() {
	return this._aPublicMethods;
};

/**
 * Returns an array with the names of all public methods declared by this class
 * and its ancestors.
 *
 * @return {string[]} array with names of all public methods provided by this class and its ancestors
 * @public
 */
sap.ui.base.Metadata.prototype.getAllPublicMethods = function() {
	return this._aAllPublicMethods;
};

/**
 * Returns the names of interfaces implemented by this class.
 * As the representation of interfaces is not clear yet, this method is still private.
 *
 * @return {string} array of names of implemented interfaces
 * @private
 */
sap.ui.base.Metadata.prototype.getInterfaces = function() {
	return this._aInterfaces;
};

/**
 * Checks whether the class described by this object or one of its ancestors
 * implements the given interface.
 *
 * @param {string} sInterface name of the interface to test for (in dot notation)
 * @return {boolean} whether this class implements the interface
 * @public
 */
sap.ui.base.Metadata.prototype.isInstanceOf = function(sInterface) {
	if ( this._oParent ) {
		if ( this._oParent.isInstanceOf(sInterface) ) {
			return true;
		}
	};

	var a=this._aInterfaces;
	for(var i=0,l=a.length; i<l; i++) {
		// FIXME doesn't handle interface inheritance (requires object representation for interfaces)
		if ( a[i] === sInterface ) {
			return true;
		}
	}

	return false;
};

/**
 * Adds one or more new methods to the list of API methods.
 *
 * Can be used by contributer classes (like the EnabledPropagator) to enrich the declared set of methods.
 * The method can either be called with multiple names (strings) or with one array of strings.
 *
 * <b>Note</b>: the newly added method(s) will only be visible in {@link sap.ui.base.Interface interface}
 * objects that are created <i>after</i> this method has been called.
 *
 * @param {string||string[]} sMethod name(s) of the new method(s)
 */
sap.ui.base.Metadata.prototype.addPublicMethods = function(sMethod /* ... */) {
	var aNames = (sMethod instanceof Array) ? sMethod : arguments;
	function upush(a,v) {
		Array.prototype.push.apply(a, v); // appends "inplace"
		jQuery.sap.unique(a);
	}
	upush(this._aPublicMethods, aNames);
	upush(this._aAllPublicMethods, aNames);
};