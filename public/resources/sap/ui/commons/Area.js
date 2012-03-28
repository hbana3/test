/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Area.
jQuery.sap.declare("sap.ui.commons.Area");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new Area.
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
 * <li>shape : string</li>
 * <li>coords : string</li>
 * <li>href : string</li>
 * <li>alt : string</li></ul>
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
 * Add your documentation for the new Area
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Area = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Area.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.Area. 
 * Resulting metadata can be obtained via sap.ui.commons.Area.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Area", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getShape", "setShape", "getCoords", "setCoords", "getHref", "setHref", "getAlt", "setAlt"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "shape" : {name : "shape", type : "string", group : "Misc", defaultValue : null},
    "coords" : {name : "coords", type : "string", group : "Misc", defaultValue : null},
    "href" : {name : "href", type : "string", group : "Misc", defaultValue : null},
    "alt" : {name : "alt", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>shape</code>.
 * Shape desription. The value is a string and can be rect for rectangle, poly for poligon, circle or defalt.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>shape</code>
 * @public
 * 
 */
sap.ui.commons.Area.prototype.getShape = function() {
	return this.getProperty("shape");
};

/**
 * Setter for property <code>shape</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sShape  new value for property <code>shape</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Area.prototype.setShape = function(sShape) {
	this.setProperty("shape", sShape);
	return this;
};


/**
 * Getter for property <code>coords</code>.
 * Coordinates of the area
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>coords</code>
 * @public
 * 
 */
sap.ui.commons.Area.prototype.getCoords = function() {
	return this.getProperty("coords");
};

/**
 * Setter for property <code>coords</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCoords  new value for property <code>coords</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Area.prototype.setCoords = function(sCoords) {
	this.setProperty("coords", sCoords);
	return this;
};


/**
 * Getter for property <code>href</code>.
 * hyper link that is excuted if clicking the area
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>href</code>
 * @public
 * 
 */
sap.ui.commons.Area.prototype.getHref = function() {
	return this.getProperty("href");
};

/**
 * Setter for property <code>href</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sHref  new value for property <code>href</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Area.prototype.setHref = function(sHref) {
	this.setProperty("href", sHref);
	return this;
};


/**
 * Getter for property <code>alt</code>.
 * Alt Text - the text that comes over the Image
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>alt</code>
 * @public
 * 
 */
sap.ui.commons.Area.prototype.getAlt = function() {
	return this.getProperty("alt");
};

/**
 * Setter for property <code>alt</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAlt  new value for property <code>alt</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Area.prototype.setAlt = function(sAlt) {
	this.setProperty("alt", sAlt);
	return this;
};


// Start of sap/ui/commons/Area.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.dev.Area.prototype.init = function(){
//   // do something for initialization...
//};

/**
 * Function is called when Link is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Area.prototype.onclick = function(oEvent) {
	   
	// The Element or Control that initiated the event. For example the id of the area if image map is defined for the current image.
	var oEventSource = jQuery(oEvent.target).control(0);

    // Fire event on Image Map
	this.getParent().firePress({areaId: oEventSource.getId()});
};