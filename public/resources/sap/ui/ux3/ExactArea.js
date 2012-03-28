/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ExactArea.
jQuery.sap.declare("sap.ui.ux3.ExactArea");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ExactArea.
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
 * <li>toolbarVisible : boolean</li>
 * <li>visible : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>content : sap.ui.core.Control</li>
 * <li>toolbarItems : sap.ui.commons.ToolbarItem</li></ul>
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
 * Consists of two sections: A tool bar and a content area where arbitrary controls can be added.
 * The ExactArea is intended to be used for the Exact design approach but alternatively also in a stand alone version.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.ExactArea = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.ExactArea.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.ExactArea. 
 * Resulting metadata can be obtained via sap.ui.ux3.ExactArea.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.ExactArea", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getToolbarVisible", "setToolbarVisible", "getVisible", "setVisible", 
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", "getToolbarItems", "insertToolbarItem", "addToolbarItem", "removeToolbarItem", "removeAllToolbarItems", "indexOfToolbarItem", "destroyToolbarItems"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "toolbarVisible" : {name : "toolbarVisible", type : "boolean", group : "Appearance", defaultValue : true},
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true}
  },
  defaultAggregation : "content",
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    "toolbarItems" : {name : "toolbarItems", type : "sap.ui.commons.ToolbarItem", multiple : true, singularName : "toolbarItem"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>toolbarVisible</code>.
 * Specifies whether the tool bar shall be visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>toolbarVisible</code>
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getToolbarVisible = function() {
	return this.getProperty("toolbarVisible");
};

/**
 * Setter for property <code>toolbarVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bToolbarVisible  new value for property <code>toolbarVisible</code>
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactArea.prototype.setToolbarVisible = function(bToolbarVisible) {
	this.setProperty("toolbarVisible", bToolbarVisible);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Specifies whether the control shall be visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.ux3.ExactArea.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactArea.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Arbitrary child controls of the content area
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.ux3.ExactArea.prototype.getContent = function() {
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
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactArea.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ExactArea.prototype.addContent = function(oContent) {
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
sap.ui.ux3.ExactArea.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ExactArea.prototype.removeAllContent = function() {
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
sap.ui.ux3.ExactArea.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactArea.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};

	
/**
 * Getter for aggregation <code>toolbarItems</code>.<br/>
 * Tool bar items which shall be shown in the tool bar.
 * 
 * @return {sap.ui.commons.ToolbarItem[]}
 * @public
 */
sap.ui.ux3.ExactArea.prototype.getToolbarItems = function() {
	return this.getAggregation("toolbarItems", []);
};


/**
 * Inserts a toolbarItem into the aggregation named <code>toolbarItems</code>.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *          oToolbarItem the toolbarItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the toolbarItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the toolbarItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the toolbarItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactArea.prototype.insertToolbarItem = function(oToolbarItem, iIndex) {
	this.insertAggregation("toolbarItems", oToolbarItem, iIndex);
	return this;
};

/**
 * Adds some toolbarItem <code>oToolbarItem</code> 
 * to the aggregation named <code>toolbarItems</code>.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *            oToolbarItem the toolbarItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ExactArea.prototype.addToolbarItem = function(oToolbarItem) {
	this.addAggregation("toolbarItems", oToolbarItem);
	return this;
};

/**
 * Removes an toolbarItem from the aggregation named <code>toolbarItems</code>.
 *
 * @param {int | string | sap.ui.commons.ToolbarItem} vToolbarItem the toolbarItem to remove or its index or id
 * @return {sap.ui.commons.ToolbarItem} the removed toolbarItem or null
 * @public
 */
sap.ui.ux3.ExactArea.prototype.removeToolbarItem = function(vToolbarItem) {
	return this.removeAggregation("toolbarItems", vToolbarItem);
};

/**
 * Removes all the controls in the aggregation named <code>toolbarItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ToolbarItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ExactArea.prototype.removeAllToolbarItems = function() {
	return this.removeAllAggregation("toolbarItems");
};

/**
 * Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation named <code>toolbarItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *            oToolbarItem the toolbarItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ExactArea.prototype.indexOfToolbarItem = function(oToolbarItem) {
	return this.indexOfAggregation("toolbarItems", oToolbarItem);
};
	

/**
 * Destroys all the toolbarItems in the aggregation 
 * named <code>toolbarItems</code>.
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactArea.prototype.destroyToolbarItems = function() {
	this.destroyAggregation("toolbarItems");
	return this;
};


// Start of sap/ui/ux3/ExactArea.js
jQuery.sap.require("sap.ui.commons.Toolbar");

(function() {

//*************************************************************
//Define a private element to enable titles tin the toolbar
//*************************************************************

sap.ui.ux3.ExactAreaToolbarTitle = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

sap.ui.ux3.ExactAreaToolbarTitle.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

sap.ui.core.Element.defineClass("sap.ui.ux3.ExactAreaToolbarTitle", {
  baseType : "sap.ui.core.Element",
  interfaces : ["sap.ui.commons.ToolbarItem"],
  publicMethods : ["getText", "setText"],
  library : "sap.ui.ux3",
  properties : {
	text : {name : "text", type : "string", group : "Appearance", defaultValue : ''}
  },
  aggregations : {},
  associations : {},
  events : {}
});

sap.ui.ux3.ExactAreaToolbarTitle.prototype.getText = function() {
	return this.getProperty("text");
};

sap.ui.ux3.ExactAreaToolbarTitle.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};

//*************************************************************

}());