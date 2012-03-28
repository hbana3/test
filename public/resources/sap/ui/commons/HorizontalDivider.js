/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.HorizontalDivider.
jQuery.sap.declare("sap.ui.commons.HorizontalDivider");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new HorizontalDivider.
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
 * <li>visible : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>type : sap.ui.commons.HorizontalDividerType</li>
 * <li>height : sap.ui.commons.HorizontalDividerHeight</li></ul>
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
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Divides the screen in visual areas.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.HorizontalDivider = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.HorizontalDivider.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.HorizontalDivider. 
 * Resulting metadata can be obtained via sap.ui.commons.HorizontalDivider.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.HorizontalDivider", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getVisible", "setVisible", "getWidth", "setWidth", "getType", "setType", "getHeight", "setHeight"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'},
    "type" : {name : "type", type : "sap.ui.commons.HorizontalDividerType", group : "Appearance", defaultValue : sap.ui.commons.HorizontalDividerType.Area},
    "height" : {name : "height", type : "sap.ui.commons.HorizontalDividerHeight", group : "Appearance", defaultValue : sap.ui.commons.HorizontalDividerHeight.Medium}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>visible</code>.
 * Invisible dividers are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.HorizontalDivider.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Defines the width of the divider.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.HorizontalDivider.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>type</code>.
 * Defines the type of the divider.
 *
 * Default value is <code>Area</code>
 *
 * @return {sap.ui.commons.HorizontalDividerType} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.getType = function() {
	return this.getProperty("type");
};

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Area</code> 
 *
 * @param {sap.ui.commons.HorizontalDividerType} oType  new value for property <code>type</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.HorizontalDivider.prototype.setType = function(oType) {
	this.setProperty("type", oType);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * Defines the height of the divider.
 *
 * Default value is <code>Medium</code>
 *
 * @return {sap.ui.commons.HorizontalDividerHeight} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.HorizontalDivider.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>Medium</code> 
 *
 * @param {sap.ui.commons.HorizontalDividerHeight} oHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.HorizontalDivider.prototype.setHeight = function(oHeight) {
	this.setProperty("height", oHeight);
	return this;
};


// Start of sap/ui/commons/HorizontalDivider.js
// No Behaviour