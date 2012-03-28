/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.DataSetItem.
jQuery.sap.declare("sap.ui.ux3.DataSetItem");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new DataSetItem.
 * 
 * It accepts one JSON-like object (object literal) as parameter <code>mSettings</code> that can define values for any property, 
 * aggregation, association or event.<br/> 
 * If for a control a specific name is ambiguous (a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order.<br/> 
 * To resolve ambiguities, add an "aggregation:", "association:" or "event:" prefix to the key in the JSON object.<br/>
 * Allowed values are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>iconSrc : string</li>
 * <li>title : string</li>
 * <li>checkable : boolean</li>
 * <li>subtitle : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>template : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>selected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.core.Element#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * DataSet Item
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.DataSetItem = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.DataSetItem.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.ux3.DataSetItem. 
 * Resulting metadata can be obtained via sap.ui.ux3.DataSetItem.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.DataSetItem", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getIconSrc", "setIconSrc", "getTitle", "setTitle", "getCheckable", "setCheckable", "getSubtitle", "setSubtitle", 
    // aggregations
    "getTemplate", "insertTemplate", "addTemplate", "removeTemplate", "removeAllTemplate", "indexOfTemplate", "destroyTemplate", 
    // associations
    
    // events
    "attachSelected", "detachSelected"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "iconSrc" : {name : "iconSrc", type : "string", group : "Misc", defaultValue : null},
    "title" : {name : "title", type : "string", group : "Misc", defaultValue : 'Title'},
    "checkable" : {name : "checkable", type : "boolean", group : "Misc", defaultValue : true},
    "subtitle" : {name : "subtitle", type : "string", group : "Misc", defaultValue : 'Subtitle'}
  },
  
  aggregations : {
    "template" : {name : "template", type : "sap.ui.core.Control", multiple : false}
  },
  associations : {},
  events : {
    "selected" : "selected"
  }

});	

sap.ui.ux3.DataSetItem.M_EVENTS = {'selected':'selected'};


/**
 * Getter for property <code>iconSrc</code>.
 * image
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>iconSrc</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getIconSrc = function() {
	return this.getProperty("iconSrc");
};

/**
 * Setter for property <code>iconSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.setIconSrc = function(sIconSrc) {
	this.setProperty("iconSrc", sIconSrc);
	return this;
};


/**
 * Getter for property <code>title</code>.
 * title
 *
 * Default value is <code>Title</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is <code>Title</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};


/**
 * Getter for property <code>checkable</code>.
 * checkable
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>checkable</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getCheckable = function() {
	return this.getProperty("checkable");
};

/**
 * Setter for property <code>checkable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bCheckable  new value for property <code>checkable</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.setCheckable = function(bCheckable) {
	this.setProperty("checkable", bCheckable);
	return this;
};


/**
 * Getter for property <code>subtitle</code>.
 * subtitle
 *
 * Default value is <code>Subtitle</code>
 *
 * @return {string} the value of property <code>subtitle</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetItem.prototype.getSubtitle = function() {
	return this.getProperty("subtitle");
};

/**
 * Setter for property <code>subtitle</code>.
 *
 * Default value is <code>Subtitle</code> 
 *
 * @param {string} sSubtitle  new value for property <code>subtitle</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.setSubtitle = function(sSubtitle) {
	this.setProperty("subtitle", sSubtitle);
	return this;
};

	
/**
 * Getter for aggregation <code>template</code>.<br/>
 * template for item rendering
 * 
 * @return {sap.ui.core.Control}
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.getTemplate = function() {
	return this.getAggregation("template", null);
};


/**
 * Setter for the aggregated <code>template</code>.
 * @param oTemplate {sap.ui.core.Control}
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.setTemplate = function(oTemplate) {
	this.setAggregation("template", oTemplate);
	return this;
};
	

/**
 * Destroys  in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.destroyTemplate = function() {
	this.destroyAggregation("template");
	return this;
};


/**
 * Event Fired when Datset item is selected.
 *  
 *
 * @name sap.ui.ux3.DataSetItem#selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId Id of the selected Datset item
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'selected' event of this <code>sap.ui.ux3.DataSetItem</code>.<br/>
 * Event Fired when Datset item is selected.
 *  
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.attachSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("selected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'selected' event of this <code>sap.ui.ux3.DataSetItem</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetItem.prototype.detachSelected = function(fnFunction, oListener) {
	this.detachEvent("selected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event selected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> Id of the selected Datset item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.DataSetItem.prototype.fireSelected = function(mArguments) {
	this.fireEvent("selected", mArguments);
	return this;
};


// Start of sap/ui/ux3/DataSetItem.js
///**
// * This file defines behavior for the control, 
// */
//sap.ui.ux3.DataSetItem.prototype.init = function(){
//   // do something for initialization...
//};

/** 
 * Handle onclick event. Fires selected Event.
 * @param {sap.ui.base.Event} oEvent click event 	
 * @private
 */
sap.ui.ux3.DataSetItem.prototype.onclick = function(oEvent) {
	oEvent.stopPropagation();
	this.fireSelected({
		itemId: this.getId()
	});
}