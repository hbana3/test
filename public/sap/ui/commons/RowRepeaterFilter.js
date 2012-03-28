/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RowRepeaterFilter.
jQuery.sap.declare("sap.ui.commons.RowRepeaterFilter");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new RowRepeaterFilter.
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
 * <li>text : string</li>
 * <li>icon : string</li>
 * <li>filters : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
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
 * This element is used by the RowRepeater and allows to define a filter in this context along with the related data such as a text and an icon.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.RowRepeaterFilter = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.RowRepeaterFilter.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.RowRepeaterFilter. 
 * Resulting metadata can be obtained via sap.ui.commons.RowRepeaterFilter.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.RowRepeaterFilter", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getText", "setText", "getIcon", "setIcon", "getFilters", "setFilters"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "text" : {name : "text", type : "string", group : "Appearance", defaultValue : null},
    "icon" : {name : "icon", type : "string", group : "Appearance", defaultValue : null},
    "filters" : {name : "filters", type : "object", group : "Data", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>text</code>.
 * The filter title if needed for display.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RowRepeaterFilter.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * The filter icon if needed for display.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RowRepeaterFilter.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


/**
 * Getter for property <code>filters</code>.
 * The set of filter objects.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>filters</code>
 * @public
 * 
 */
sap.ui.commons.RowRepeaterFilter.prototype.getFilters = function() {
	return this.getProperty("filters");
};

/**
 * Setter for property <code>filters</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} sFilters  new value for property <code>filters</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RowRepeaterFilter.prototype.setFilters = function(sFilters) {
	this.setProperty("filters", sFilters);
	return this;
};


// Start of sap/ui/commons/RowRepeaterFilter.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.commons.RowRepeaterFilter.prototype.init = function(){
//   // do something for initialization...
//};