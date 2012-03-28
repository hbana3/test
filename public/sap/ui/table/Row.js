/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.Row.
jQuery.sap.declare("sap.ui.table.Row");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new Row.
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
 * <li>cells : sap.ui.core.Control</li></ul>
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
 * The row.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.table.Row = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.table.Row.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.table.Row. 
 * Resulting metadata can be obtained via sap.ui.table.Row.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.table.Row", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    
    // aggregations
    "getCells", "insertCell", "addCell", "removeCell", "removeAllCells", "indexOfCell", "destroyCells"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.table",
  properties : {},
  defaultAggregation : "cells",
  aggregations : {
    "cells" : {name : "cells", type : "sap.ui.core.Control", multiple : true, singularName : "cell"}
  },
  associations : {},
  events : {}

});	

	
/**
 * Getter for aggregation <code>cells</code>.<br/>
 * The controls for the cells.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.table.Row.prototype.getCells = function() {
	return this.getAggregation("cells", []);
};


/**
 * Inserts a cell into the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.core.Control}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Row.prototype.insertCell = function(oCell, iIndex) {
	this.insertAggregation("cells", oCell, iIndex);
	return this;
};

/**
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.core.Control}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.table.Row.prototype.addCell = function(oCell) {
	this.addAggregation("cells", oCell);
	return this;
};

/**
 * Removes an cell from the aggregation named <code>cells</code>.
 *
 * @param {int | string | sap.ui.core.Control} vCell the cell to remove or its index or id
 * @return {sap.ui.core.Control} the removed cell or null
 * @public
 */
sap.ui.table.Row.prototype.removeCell = function(vCell) {
	return this.removeAggregation("cells", vCell);
};

/**
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.table.Row.prototype.removeAllCells = function() {
	return this.removeAllAggregation("cells");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.table.Row.prototype.indexOfCell = function(oCell) {
	return this.indexOfAggregation("cells", oCell);
};
	

/**
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Row.prototype.destroyCells = function() {
	this.destroyAggregation("cells");
	return this;
};


// Start of sap/ui/table/Row.js
