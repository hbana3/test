/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ToolbarSeparator.
jQuery.sap.declare("sap.ui.commons.ToolbarSeparator");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new ToolbarSeparator.
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
 * <li>displayVisualSeparator : boolean</li></ul>
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
 * An element that is added to the toolbar between items to separate them visually.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.ToolbarSeparator = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.ToolbarSeparator.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.ToolbarSeparator. 
 * Resulting metadata can be obtained via sap.ui.commons.ToolbarSeparator.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.ToolbarSeparator", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  interfaces : ["sap.ui.commons.ToolbarItem"],
  publicMethods : [
    // properties 
    "getDisplayVisualSeparator", "setDisplayVisualSeparator"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "displayVisualSeparator" : {name : "displayVisualSeparator", type : "boolean", group : "Appearance", defaultValue : true}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>displayVisualSeparator</code>.
 * When set to "false", there is no visual indication of separation by a vertical line but by a wider space.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>displayVisualSeparator</code>
 * @public
 * 
 */
sap.ui.commons.ToolbarSeparator.prototype.getDisplayVisualSeparator = function() {
	return this.getProperty("displayVisualSeparator");
};

/**
 * Setter for property <code>displayVisualSeparator</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDisplayVisualSeparator  new value for property <code>displayVisualSeparator</code>
 * @return {sap.ui.commons.ToolbarSeparator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ToolbarSeparator.prototype.setDisplayVisualSeparator = function(bDisplayVisualSeparator) {
	this.setProperty("displayVisualSeparator", bDisplayVisualSeparator);
	return this;
};


// Start of sap/ui/commons/ToolbarSeparator.js
sap.ui.commons.ToolbarSeparator.prototype.getFocusDomRef = function() {
	return undefined;
};