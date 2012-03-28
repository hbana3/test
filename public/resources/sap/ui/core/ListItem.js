/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.ListItem.
jQuery.sap.declare("sap.ui.core.ListItem");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Item");

/**
 * Constructor for a new ListItem.
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
 * <li>icon : string</li>
 * <li>additionalText : string</li></ul>
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
 * For further parameters see {@link sap.ui.core.Item#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * An item that is used in lists or list-similar controls.
 * 
 * @extends sap.ui.core.Item
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.ListItem = function (sId, mSettings) {
	sap.ui.core.Item.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.ListItem.prototype = jQuery.sap.newObject(sap.ui.core.Item.prototype);

/*
 * Describe the sap.ui.core.ListItem. 
 * Resulting metadata can be obtained via sap.ui.core.ListItem.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.ListItem", {

  // ---- object ----
  baseType : "sap.ui.core.Item",
  publicMethods : [
    // properties 
    "getIcon", "setIcon", "getAdditionalText", "setAdditionalText"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.core",
  properties : {
    "icon" : {name : "icon", type : "string", group : "Appearance", defaultValue : null},
    "additionalText" : {name : "additionalText", type : "string", group : "Data", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>icon</code>.
 * Icon belonging to this instance of <code>ListItem</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.core.ListItem.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.core.ListItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ListItem.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


/**
 * Getter for property <code>additionalText</code>.
 * Additional text of type string, optionally to be displayed along with this item.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>additionalText</code>
 * @public
 * 
 */
sap.ui.core.ListItem.prototype.getAdditionalText = function() {
	return this.getProperty("additionalText");
};

/**
 * Setter for property <code>additionalText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAdditionalText  new value for property <code>additionalText</code>
 * @return {sap.ui.core.ListItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ListItem.prototype.setAdditionalText = function(sAdditionalText) {
	this.setProperty("additionalText", sAdditionalText);
	return this;
};


// Start of sap/ui/core/ListItem.js
