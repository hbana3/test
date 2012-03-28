/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ThingGroup.
jQuery.sap.declare("sap.ui.ux3.ThingGroup");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new ThingGroup.
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
 * <li>title : string</li>
 * <li>colspan : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>content : sap.ui.core.Control</li>
 * <li>actions : sap.ui.ux3.ThingGroup</li></ul>
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
 * Thing Group Area
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.ThingGroup = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.ThingGroup.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.ux3.ThingGroup. 
 * Resulting metadata can be obtained via sap.ui.ux3.ThingGroup.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.ThingGroup", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getTitle", "setTitle", "getColspan", "setColspan", 
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", "getActions", "insertAction", "addAction", "removeAction", "removeAllActions", "indexOfAction", "destroyActions"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "title" : {name : "title", type : "string", group : "Misc", defaultValue : null},
    "colspan" : {name : "colspan", type : "boolean", group : "Misc", defaultValue : false}
  },
  defaultAggregation : "content",
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    "actions" : {name : "actions", type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "action"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>title</code>.
 * Title of Group
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};


/**
 * Getter for property <code>colspan</code>.
 * If Group is used in a column layout the groups spans the all columns if set to true.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>colspan</code>
 * @public
 * 
 */
sap.ui.ux3.ThingGroup.prototype.getColspan = function() {
	return this.getProperty("colspan");
};

/**
 * Setter for property <code>colspan</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bColspan  new value for property <code>colspan</code>
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.setColspan = function(bColspan) {
	this.setProperty("colspan", bColspan);
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content of Group
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.getContent = function() {
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
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ThingGroup.prototype.addContent = function(oContent) {
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
sap.ui.ux3.ThingGroup.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.removeAllContent = function() {
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
sap.ui.ux3.ThingGroup.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};

	
/**
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of the groups content
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.getActions = function() {
	return this.getAggregation("actions", []);
};


/**
 * Inserts a action into the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.insertAction = function(oAction, iIndex) {
	this.insertAggregation("actions", oAction, iIndex);
	return this;
};

/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ThingGroup.prototype.addAction = function(oAction) {
	this.addAggregation("actions", oAction);
	return this;
};

/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed action or null
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.removeAction = function(vAction) {
	return this.removeAggregation("actions", vAction);
};

/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.removeAllActions = function() {
	return this.removeAllAggregation("actions");
};

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.indexOfAction = function(oAction) {
	return this.indexOfAggregation("actions", oAction);
};
	

/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingGroup.prototype.destroyActions = function() {
	this.destroyAggregation("actions");
	return this;
};


// Start of sap/ui/ux3/ThingGroup.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.ux3.ThingContent.prototype.init = function(){
//   // do something for initialization...
//};