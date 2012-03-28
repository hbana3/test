/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/**
 * SAPUI5 base classes
 *
 * @namespace
 * @name sap.ui.base
 * @public
 */

// Provides class sap.ui.base.Object
jQuery.sap.declare("sap.ui.base.Object");
jQuery.sap.require("sap.ui.base.Interface");
jQuery.sap.require("sap.ui.base.Metadata");

/**
 * Constructor for a sap.ui.base.Object.
 *
 * @class Base class for all SAPUI5 Objects
 * @abstract
 * @author Malte Wedel
 * @version 1.2.0
 * @public
 */
sap.ui.base.Object = function() {
	if ( !(this instanceof sap.ui.base.Object) ) {
		throw Error("Cannot instantiate object: \"new\" is missing!");
	}
};

/**
 * Creates metadata for a given class and attaches it to the constructor and prototype of that class.
 *
 * After creation, metadata can be retrieved with getMetadata().
 *
 * The static info can at least contain the following entries:
 * <ul>
 * <li>baseType: {string} fully qualified name of a base class or empty
 * <li>publicMethods: {string} an array of method names that will be visible in the interface proxy returned by {@link #getInterface}
 * </ul>
 *
 * @param {string} sClassName name of an (already declared) constructor function
 * @param {object} oStaticInfo static info used to create the metadata object
 * @param {string} oStaticInfo.baseType qualified name of a base class
 * @param {string[]} oStaticInfo.publicMethods array of names of public methods
 * @param {function} [xMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.
 *
 * @return {sap.ui.base.Metadata} the created metadata object
 * @public
 * @static
 */
sap.ui.base.Object.defineClass = function(sClassName, oStaticInfo, xMetaImpl) {

	// create Metadata object
	var oMetadata = new (xMetaImpl || sap.ui.base.Metadata)(sClassName, oStaticInfo);

	// attach the metadata to the class (ctor) and to its prototype
	var oClass = oMetadata.getClass();
	oClass.getMetadata = oClass.prototype.getMetadata = jQuery.sap.getter(oMetadata);

	jQuery.sap.log.debug("defined class '" + sClassName + "'" + (oMetadata.getParent() ? " as subclass of " + oMetadata.getParent().getName() : "") );

	return oMetadata;
};

sap.ui.base.Object.defineClass("sap.ui.base.Object");


/**
 * Destructor method for objects
 * @public
 */
sap.ui.base.Object.prototype.destroy = function() {
	// this.oInterface = null;
};

/**
 * Returns the public interface of the object.
 *
 * @return {sap.ui.base.Interface} the public interface of the object
 * @public
 */
sap.ui.base.Object.prototype.getInterface = function() {
	// New implementation that avoids the overhead of a dedicated member for the interface
	// initially, an Object instance has no associated Interface and the getInterface
	// method is defined only in the prototype. So the code here will be executed.
	// It creates an interface (basically the same code as in the old implementation)
	var oInterface = new sap.ui.base.Interface(this, this.getMetadata().getAllPublicMethods());
	// Now this Object instance gets a new, private implementation of getInterface
	// that returns the newly created oInterface. Future calls of getInterface on the
	// same Object therefore will return the already created interface
	this.getInterface = jQuery.sap.getter(oInterface);
	// as the first caller doesn't benefit from the new method implementation we have to
	// return the created interface as well.
	return oInterface;
	/**
	if (!this.oInterface) {
		this.oInterface = new sap.ui.base.Interface(this, this.getMetadata().getAllPublicMethods());
	}
	return this.oInterface;
	*/
};

/**
 * Returns the metadata for the class that this object belongs to.
 * This method is only defined when metadata has been declared by using {@link #defineClass}.
 *
 * @name sap.ui.base.Object.prototype#getMetadata
 * @function
 * @abstract
 * @public
 */