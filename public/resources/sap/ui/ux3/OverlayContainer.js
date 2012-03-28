/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.OverlayContainer.
jQuery.sap.declare("sap.ui.ux3.OverlayContainer");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.ux3.Overlay");

/**
 * Constructor for a new OverlayContainer.
 * 
 * It accepts one JSON-like object (object literal) as parameter <code>mSettings</code> that can define values for any property, 
 * aggregation, association or event.<br/> 
 * If for a control a specific name is ambiguous (a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order.<br/> 
 * To resolve ambiguities, add an "aggregation:", "association:" or "event:" prefix to the key in the JSON object.<br/>
 * Allowed values are:
 * <ul>
 * <li>Properties
 * <ul></ul>
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
 * For further parameters see {@link sap.ui.ux3.Overlay#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Is to be embedded into the Overlay control as content container
 * @extends sap.ui.ux3.Overlay
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.OverlayContainer = function (sId, mSettings) {
	sap.ui.ux3.Overlay.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.OverlayContainer.prototype = jQuery.sap.newObject(sap.ui.ux3.Overlay.prototype);

/*
 * Describe the sap.ui.ux3.OverlayContainer. 
 * Resulting metadata can be obtained via sap.ui.ux3.OverlayContainer.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.OverlayContainer", {

  // ---- object ----
  baseType : "sap.ui.ux3.Overlay",
  publicMethods : [
    // properties 
    
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {},
  defaultAggregation : "content",
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}
  },
  associations : {},
  events : {}

});	

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregation for content
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.ux3.OverlayContainer.prototype.getContent = function() {
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
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.OverlayContainer.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.OverlayContainer.prototype.addContent = function(oContent) {
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
sap.ui.ux3.OverlayContainer.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.OverlayContainer.prototype.removeAllContent = function() {
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
sap.ui.ux3.OverlayContainer.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.OverlayContainer.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};


// Start of sap/ui/ux3/OverlayContainer.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.ux3.OverlayContainer.prototype.init = function(){
//   // do something for initialization...
//};