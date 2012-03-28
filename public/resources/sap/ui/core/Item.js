/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.Item.
jQuery.sap.declare("sap.ui.core.Item");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new Item.
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
 * <li>enabled : boolean</li>
 * <li>textDirection : sap.ui.core.TextDirection</li>
 * <li>key : string</li></ul>
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
 * A control base type.
 * 
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.Item = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.Item.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.core.Item. 
 * Resulting metadata can be obtained via sap.ui.core.Item.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.Item", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getText", "setText", "getEnabled", "setEnabled", "getTextDirection", "setTextDirection", "getKey", "setKey"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.core",
  properties : {
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : ""},
    "enabled" : {name : "enabled", type : "boolean", group : "Misc", defaultValue : true},
    "textDirection" : {name : "textDirection", type : "sap.ui.core.TextDirection", group : "Misc", defaultValue : sap.ui.core.TextDirection.Inherit},
    "key" : {name : "key", type : "string", group : "Data", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>text</code>.
 * The text to be displayed for the item.
 *
 * Default value is <code>""</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.core.Item.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>""</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.Item} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Item.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * Enabled items can be selected.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.core.Item.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.core.Item} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Item.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>textDirection</code>.
 * Options are RTL and LTR. Alternatively, an item can inherit its text direction from its parent control.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.core.Item.prototype.getTextDirection = function() {
	return this.getProperty("textDirection");
};

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.core.Item} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Item.prototype.setTextDirection = function(oTextDirection) {
	this.setProperty("textDirection", oTextDirection);
	return this;
};


/**
 * Getter for property <code>key</code>.
 * Can be used as input for subsequent actions.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.core.Item.prototype.getKey = function() {
	return this.getProperty("key");
};

/**
 * Setter for property <code>key</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.core.Item} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.Item.prototype.setKey = function(sKey) {
	this.setProperty("key", sKey);
	return this;
};


// Start of sap/ui/core/Item.js
