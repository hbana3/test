/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.ElementMetadata
jQuery.sap.declare("sap.ui.core.ElementMetadata");
jQuery.sap.require("sap.ui.base.Metadata");
jQuery.sap.require("sap.ui.base.DataType");

/**
 * Creates a new metadata object for a UIElement subclass.
 *
 * @param {string} sClassName fully qualified name of the class that is described by this metadata object
 * @param {object} oStaticInfo static info to construct the metadata from
 *
 * @class
 * @author Frank Weigel
 * @version 1.2.0
 * @since 0.8.6
 */
sap.ui.core.ElementMetadata = function(sClassName, oStaticInfo) {

	// call super constructor
	sap.ui.base.Metadata.apply(this, arguments);

	// init basic metadata from static infos and fallback to defaults
	this._mEvents = oStaticInfo.events || {};
	this._mProperties = oStaticInfo.properties || {};
	this._sDefaultAggregation = oStaticInfo.defaultAggregation || null;
	this._mAggregations = oStaticInfo.aggregations || {};
	this._mAssociations = oStaticInfo.associations || {};
	this._sLibraryName = oStaticInfo.library;
	this._bAbstract = oStaticInfo["abstract"];

	// convert events to info objects
	for(var s in this._mEvents) {
		if ( typeof this._mEvents[s] == "string" ) {
			this._mEvents[s] = { name : this._mEvents[s] };
		}
	}
	this._bEnriched = false;

	// if there is a parent class, produce the flattened "all" views for the element specific metadata
	// PERFOPT: this could be done lazily
	var oParent = this.getParent();
	if ( oParent && oParent instanceof sap.ui.core.ElementMetadata ) {
		this._mAllEvents = jQuery.extend({},oParent._mAllEvents, this._mEvents);
		this._mAllProperties = jQuery.extend({},oParent._mAllProperties, this._mProperties);
		this._mAllAggregations = jQuery.extend({},oParent._mAllAggregations, this._mAggregations);
		this._mAllAssociations = jQuery.extend({},oParent._mAllAssociations, this._mAssociations);
		this._sDefaultAggregation = this._sDefaultAggregation || oParent._sDefaultAggregation;
	} else {
		this._mAllEvents = this._mEvents;
		this._mAllProperties = this._mProperties;
		this._mAllAggregations = this._mAggregations;
		this._mAllAssociations = this._mAssociations;
	}

};

sap.ui.core.ElementMetadata.Kind = {
  PROPERTY :0, SINGLE_AGGREGATION : 1, MULTIPLE_AGGREGATION : 2, SINGLE_ASSOCIATION : 3, MULTIPLE_ASSOCIATION : 4, EVENT : 5
};

// chain the prototypes
sap.ui.core.ElementMetadata.prototype = jQuery.sap.newObject(sap.ui.base.Metadata.prototype);

/**
 * By default, the element name is equal to the class name
 * @return {string} the qualified name of the UIElement class
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getElementName = function() {
	return this._sClassName;
};

/**
 * Returns the name of the library that contains the described UIElement.
 * @return {string} the name of the library
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getLibraryName = function() {
	return this._sLibraryName;
};

/**
 * Returns whether the class/control is abstract
 * @return {boolean} whether the class/control is abstract
 * @public
 */
sap.ui.core.ElementMetadata.prototype.isAbstract = function() {
	return this._bAbstract;
};

/**
 * Declares an additional property for the UIElement class described by this metadata.
 *
 * Any property declaration via this method must happen before the described class
 * is subclassed, or the added property will not be visible in the subclass.
 *
 * Typically used to enrich UIElement classes in an aspect oriented manner.
 * @public
 * @see sap.ui.core.EnabledPropagator
 */
sap.ui.core.ElementMetadata.prototype.addProperty = function(sName, oInfo) {
	oInfo.name = sName;
	this._mProperties[sName] = oInfo;
	if(!this._mAllProperties[sName]) {// ensure extended AllProperties meta-data is also enriched
		this._mAllProperties[sName] = oInfo;
	}

	if ( this._bEnriched ) { // does not seem right! this is the 'drop out' condition for _enrichChildInfos() -> senseless
		this._enrichChildInfos();
	}
	// TODO notify listeners (subclasses) about change
};

/**
 * Returns infos about the properties declared by the UIElement class
 * described by this metadata object. Properties from ancestor classes
 * are not returned.
 *
 * The returned map contains property info objects keyed by the property name.
 *
 * @return {map} Map of property infos keyed by property names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getProperties = function() {
	return this._mProperties;
};

/**
 * Returns infos about all properties declared by the UIElement class
 * described by this metadata object as well as properties from base classes.
 *
 * The returned map contains property info objects keyed by the property name.
 *
 * @return {map} Map of property infos keyed by property names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getAllProperties = function() {
	return this._mAllProperties;
};

/**
 * Returns infos about the aggregations declared by the UIElement class
 * described by this metadata object. Aggregations from ancestor classes
 * are not returned.
 *
 * The returned map contains aggregation info objects keyed by the aggregation name.
 * In case of 0..1 aggregations this is the singular name, otherwise it is the plural
 * name.
 *
 * @return {map} Map of aggregation infos keyed by aggregation names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getAggregations = function() {
	return this._mAggregations;
};

/**
 * Returns infos about all aggregations declared by the UIElement class
 * described by this metadata object as well as aggregations from base classes.
 *
 * The returned map contains aggregation info objects keyed by the aggregation name.
 * In case of 0..1 aggregations this is the singular name, otherwise it is the plural
 * name.
 *
 * @return {map} Map of aggregation infos keyed by aggregation names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getAllAggregations = function() {
	return this._mAllAggregations;
};

/**
 * Returns the name of the default aggregation of this control.
 * If the control itself does not define a default aggregation, then the
 * default aggregation of the parent is returned. If no control in the
 * hierarchy defines a default aggregation, null is returned.
 *
 * @return {string} Name of the default aggregation for this class
 */
sap.ui.core.ElementMetadata.prototype.getDefaultAggregationName = function() {
	return this._sDefaultAggregation;
};

/**
 * Returns the name of the default aggregation of this control.
 * If the control itself does not define a default aggregation, then the
 * default aggregation of the parent is returned.
 *
 * @return {string} Name of the default aggregation for this class
 */
sap.ui.core.ElementMetadata.prototype.getDefaultAggregation = function() {
	return this._sDefaultAggregation && this.getAllAggregations()[this._sDefaultAggregation];
};

/**
 * Returns infos about the associations declared by the UIElement class
 * described by this metadata object. Associations from ancestor classes
 * are not returned.
 *
 * The returned map contains association info objects keyed by the association name.
 * In case of 0..1 associations this is the singular name, otherwise it is the plural
 * name.
 *
 * @return {map} Map of association infos keyed by association names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getAssociations = function() {
	return this._mAssociations;
};

/**
 * Returns infos about all associations declared by the UIElement class
 * described by this metadata object as well as associations from base classes.
 *
 * The returned map contains association info objects keyed by the association name.
 * In case of 0..1 associations this is the singular name, otherwise it is the plural
 * name.
 *
 * @return {map} Map of association infos keyed by association names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getAllAssociations = function() {
	return this._mAllAssociations;
};

/**
 * Returns infos about the events declared by the UIElement class
 * described by this metadata object. Events from ancestor classes
 * are not returned.
 *
 * The returned map contains events info objects keyed by the events name.
 *
 * @return {map} Map of event infos keyed by event names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getEvents = function() {
	return this._mEvents;
};

/**
 * Returns infos about all events declared by the UIElement class
 * described by this metadata object as well as events from base classes.
 *
 * The returned map contains event info objects keyed by the event name.
 *
 * @return {map} Map of event infos keyed by event names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getAllEvents = function() {
	return this._mAllEvents;
};

/**
 * Returns a map of default values for all properties declared by the
 * described class and its ancestors, keyed by the property name.
 *
 * @return {map} Map of default values keyed by property names
 * @public
 */
sap.ui.core.ElementMetadata.prototype.getPropertyDefaults = function() {

	var mDefaults = this._mDefaults,
		oType;
	if ( mDefaults ) {
		return mDefaults;
	}

	if ( this.getParent() instanceof sap.ui.core.ElementMetadata ) {
		mDefaults = jQuery.sap.newObject(this.getParent().getPropertyDefaults());
	} else {
		mDefaults = {};
	}

	for(var s in this._mProperties) {
		if ( this._mProperties[s].defaultValue !== null ) {
			mDefaults[s] = this._mProperties[s].defaultValue;
		} else {
			oType = sap.ui.base.DataType.getType(this._mProperties[s].type);
			if (oType instanceof sap.ui.base.DataType) {
				mDefaults[s] = oType.getDefaultValue();
			} else { // Enumeration
				for (var i in oType) {
					mDefaults[s] = oType[i];
					break;
				}
			}
		}
	}
	return (this._mDefaults = mDefaults);
};

sap.ui.core.ElementMetadata.prototype.createPropertyBag = function() {
	if ( !this._fnPropertyBagFactory ) {
		this._fnPropertyBagFactory = jQuery.sap.factory(this.getPropertyDefaults());
	}
	return new (this._fnPropertyBagFactory)();
};

/**
 * Helper method that enriches the (generated) information objects for children
 * (e.g. properties, aggregations, ...) of this Element.
 *
 * Also ensures that the parent metadata is enriched.
 *
 * @private
 */
sap.ui.core.ElementMetadata.prototype._enrichChildInfos = function() {

	if ( this._bEnriched ) {
		return;
	}

	if ( this.getParent() instanceof sap.ui.core.ElementMetadata ) {
		this.getParent()._enrichChildInfos();
	}

	var m,sName,oInfo;
	function method(sPrefix, sName) {
		return sPrefix + sName.substring(0,1).toUpperCase() + sName.substring(1);
	}

	// adapt properties
	m=this._mProperties;
	for(sName in m) {
		oInfo = m[sName];
		oInfo._sName = sName;
		oInfo._sUID = sName;
		oInfo._oParent = this;
		oInfo._iKind = sap.ui.core.ElementMetadata.Kind.PROPERTY;
		oInfo._sMutator = method("set", sName);
		oInfo._sGetter = method("get", sName);
	}

	// adapt aggregations
	m=this._mAggregations;
	for(sName in m) {
		oInfo = m[sName];
		oInfo._sName = sName;
		oInfo._sUID = "aggregation:" + sName;
		oInfo._oParent = this;
		oInfo._sDestructor = method("destroy", sName);
		if ( oInfo.multiple ) {
			oInfo._iKind = sap.ui.core.ElementMetadata.Kind.MULTIPLE_AGGREGATION;
			oInfo._sMutator = method("add", oInfo.singularName);
			oInfo._sRemoveMutator = method("remove", oInfo.singularName);
		} else {
			oInfo._iKind = sap.ui.core.ElementMetadata.Kind.SINGLE_AGGREGATION;
			oInfo._sMutator = method("set", sName);
			oInfo._sGetter = method("get", sName);
		}
	}

	// adapt associations
	m=this._mAssociations;
	for(sName in m) {
		oInfo = m[sName];
		oInfo._sName = sName;
		oInfo._sUID = "association:" + sName;
		oInfo._oParent = this;
		if ( oInfo.multiple ) {
			oInfo._iKind = sap.ui.core.ElementMetadata.Kind.MULTIPLE_ASSOCIATION;
			oInfo._sMutator = method("add", oInfo.singularName);
		} else {
			oInfo._iKind = sap.ui.core.ElementMetadata.Kind.SINGLE_ASSOCIATION;
			oInfo._sMutator = method("set", sName);
			oInfo._sGetter = method("get", sName);
		}
	}

	// adapt events
	m=this._mEvents;
	for(sName in m) {
		oInfo = m[sName];
		oInfo._sName = sName;
		oInfo._sUID = "event:" + sName;
		oInfo._oParent = this;
		oInfo._iKind = sap.ui.core.ElementMetadata.Kind.EVENT;
		oInfo._sMutator = method("attach", sName);
	}

	this._bEnriched = true;
};

/**
 * Builds a "reflection like" map of setters/type infos keyed by the possible JSON names.
 * Mainly used for the {@link sap.ui.core.Element.applySettings} method.
 *
 * @see sap.ui.core.Element.prototype.applySettings
 * @private
 */
sap.ui.core.ElementMetadata.prototype.getJSONKeys = function() {

	if ( this._mJSONKeys ) {
		return this._mJSONKeys;
	}

	this._enrichChildInfos();

	var mJSONKeys = {};
	function addKeys(m) {
		var sName, oInfo;
		for(sName in m) {
			oInfo = m[sName];
			if ( !mJSONKeys[sName] || oInfo._iKind < mJSONKeys[sName]._iKind ) {
				mJSONKeys[sName] = oInfo;
			};
			mJSONKeys[oInfo._sUID] = oInfo;
		};
	}

	addKeys(this.getAllProperties());
	addKeys(this.getAllAggregations());
	addKeys(this.getAllAssociations());
	addKeys(this.getAllEvents());

	return (this._mJSONKeys = mJSONKeys);
};

(function() {

	/**
	 * Usage counters for the different UID tokens
	 */
	var mUIDCounts = {};

	function uid(sId) {
		jQuery.sap.assert(!/[0-9]+$/.exec(sId), "AutoId Prefixes must not end with numbers");
		
		sId = sap.ui.getCore().getConfiguration().getUIDPrefix() + sId;
		
		// initialize counter
		mUIDCounts[sId] = mUIDCounts[sId] || 0;
		
		// combine prefix + counter
		// concatenating sId and a counter is only safe because we don't allow trailing numbers in sId!
		return (sId + mUIDCounts[sId]++);
	}

	/**
	 * Calculates a new id based on a prefix.
	 *
	 * @return {string} A (hopefully unique) control id
	 * @public
	 * @function
	 */
	sap.ui.core.ElementMetadata.uid = uid;
	
	/**
	 * Calculates a new id for an instance of this class.
	 *
	 * Note that the calculated short name part is usually not unique across
	 * all classes, but doesn't have to be. It might even be empty when the
	 * class name consists of invalid characters only.
	 *
	 * @return {string} A (hopefully unique) control id
	 * @public
	 */
	sap.ui.core.ElementMetadata.prototype.uid = function() {
	
		var sId = this._sUIDToken;
		if ( typeof sId !== "string" ) {
			// start with qualified class name
			sId  = this.getName();
			// reduce to unqualified name
			sId = sId.slice(sId.lastIndexOf('.')+1);
			// reduce a camel case, multi word name to the last word
			sId = sId.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").slice(-1)[0];
			// remove unwanted chars (and no trailing digits!) and convert to lower case
			sId = this._sUIDToken = sId.replace(/([^A-Za-z0-9-_.:])|([0-9]$)/g,"").toLowerCase();
		}
	
		return uid(sId);
	};

}());
