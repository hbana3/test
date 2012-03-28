/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.NavigationItem.
jQuery.sap.declare("sap.ui.ux3.NavigationItem");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Item");

/**
 * Constructor for a new NavigationItem.
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
 * <li>subItems : sap.ui.ux3.NavigationItem</li></ul>
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
 * Is the item to be used within the NavigationBar
 * @extends sap.ui.core.Item
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.NavigationItem = function (sId, mSettings) {
	sap.ui.core.Item.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.NavigationItem.prototype = jQuery.sap.newObject(sap.ui.core.Item.prototype);

/*
 * Describe the sap.ui.ux3.NavigationItem. 
 * Resulting metadata can be obtained via sap.ui.ux3.NavigationItem.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.NavigationItem", {

  // ---- object ----
  baseType : "sap.ui.core.Item",
  publicMethods : [
    // properties 
    
    // aggregations
    "getSubItems", "insertSubItem", "addSubItem", "removeSubItem", "removeAllSubItems", "indexOfSubItem", "destroySubItems"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {},
  defaultAggregation : "subItems",
  aggregations : {
    "subItems" : {name : "subItems", type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "subItem"}
  },
  associations : {},
  events : {}

});	

	
/**
 * Getter for aggregation <code>subItems</code>.<br/>
 * Any NavigationItems on the next hierarchy level connected to this NavigationItem
 * 
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 */
sap.ui.ux3.NavigationItem.prototype.getSubItems = function() {
	return this.getAggregation("subItems", []);
};


/**
 * Inserts a subItem into the aggregation named <code>subItems</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *          oSubItem the subItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the subItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the subItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the subItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.NavigationItem.prototype.insertSubItem = function(oSubItem, iIndex) {
	this.insertAggregation("subItems", oSubItem, iIndex);
	return this;
};

/**
 * Adds some subItem <code>oSubItem</code> 
 * to the aggregation named <code>subItems</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oSubItem the subItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.NavigationItem.prototype.addSubItem = function(oSubItem) {
	this.addAggregation("subItems", oSubItem);
	return this;
};

/**
 * Removes an subItem from the aggregation named <code>subItems</code>.
 *
 * @param {int | string | sap.ui.ux3.NavigationItem} vSubItem the subItem to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed subItem or null
 * @public
 */
sap.ui.ux3.NavigationItem.prototype.removeSubItem = function(vSubItem) {
	return this.removeAggregation("subItems", vSubItem);
};

/**
 * Removes all the controls in the aggregation named <code>subItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.NavigationItem.prototype.removeAllSubItems = function() {
	return this.removeAllAggregation("subItems");
};

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>subItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oSubItem the subItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.NavigationItem.prototype.indexOfSubItem = function(oSubItem) {
	return this.indexOfAggregation("subItems", oSubItem);
};
	

/**
 * Destroys all the subItems in the aggregation 
 * named <code>subItems</code>.
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.NavigationItem.prototype.destroySubItems = function() {
	this.destroyAggregation("subItems");
	return this;
};


// Start of sap/ui/ux3/NavigationItem.js
