/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.HorizontalLayout.
jQuery.sap.declare("sap.ui.commons.layout.HorizontalLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new layout/HorizontalLayout.
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
 * <li>allowWrapping : boolean</li>
 * <li>visible : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>content : sap.ui.core.Control</li></ul>
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
 * A simple HorizontalLayout
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.layout.HorizontalLayout = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.layout.HorizontalLayout.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.layout.HorizontalLayout. 
 * Resulting metadata can be obtained via sap.ui.commons.layout.HorizontalLayout.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.layout.HorizontalLayout", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getAllowWrapping", "setAllowWrapping", "getVisible", "setVisible", 
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "allowWrapping" : {name : "allowWrapping", type : "boolean", group : "Misc", defaultValue : false},
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true}
  },
  
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>allowWrapping</code>.
 * Determines whether the elements inside the HorizontalLayout should line-wrap when there is insufficient horizontal space.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>allowWrapping</code>
 * @public
 * 
 */
sap.ui.commons.layout.HorizontalLayout.prototype.getAllowWrapping = function() {
	return this.getProperty("allowWrapping");
};

/**
 * Setter for property <code>allowWrapping</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAllowWrapping  new value for property <code>allowWrapping</code>
 * @return {sap.ui.commons.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.HorizontalLayout.prototype.setAllowWrapping = function(bAllowWrapping) {
	this.setProperty("allowWrapping", bAllowWrapping);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Whether this HorizontalLayout is visible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.layout.HorizontalLayout.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.HorizontalLayout.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * The controls inside this layout.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.commons.layout.HorizontalLayout.prototype.getContent = function() {
	return this.getAggregation("content", []);
};


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.HorizontalLayout.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.layout.HorizontalLayout.prototype.addContent = function(oContent) {
	this.addAggregation("content", oContent);
	return this;
};

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 */
sap.ui.commons.layout.HorizontalLayout.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.layout.HorizontalLayout.prototype.removeAllContent = function() {
	return this.removeAllAggregation("content");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.layout.HorizontalLayout.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.layout.HorizontalLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.HorizontalLayout.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};


// Start of sap/ui/commons/layout/HorizontalLayout.js
