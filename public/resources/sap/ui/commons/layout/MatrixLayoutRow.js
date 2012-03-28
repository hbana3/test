/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.MatrixLayoutRow.
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayoutRow");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new layout/MatrixLayoutRow.
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
 * <li>height : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>cells : sap.ui.commons.layout.MatrixLayoutCell</li></ul>
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
 * 
 * Non-control element used as part of a matrix layout's inner structure.
 * 
 * @extends sap.ui.core.Element
 *
 * @author d029921 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.layout.MatrixLayoutRow = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.layout.MatrixLayoutRow.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.layout.MatrixLayoutRow. 
 * Resulting metadata can be obtained via sap.ui.commons.layout.MatrixLayoutRow.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.layout.MatrixLayoutRow", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getHeight", "setHeight", 
    // aggregations
    "getCells", "insertCell", "addCell", "removeCell", "removeAllCells", "indexOfCell", "destroyCells", 
    // associations
    
    // events
    
    // methods
    "addStyleClass", "removeStyleClass", "hasStyleClass"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  aggregatingType : "MatrixLayout",
  properties : {
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
  },
  defaultAggregation : "cells",
  aggregations : {
    "cells" : {name : "cells", type : "sap.ui.commons.layout.MatrixLayoutCell", multiple : true, singularName : "cell"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>height</code>.
 * Height of the row.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};

	
/**
 * Getter for aggregation <code>cells</code>.<br/>
 * 
 * The matrix layout row's individual cells.
 * 
 * 
 * @return {sap.ui.commons.layout.MatrixLayoutCell[]}
 * @public
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.getCells = function() {
	return this.getAggregation("cells", []);
};


/**
 * Inserts a cell into the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.insertCell = function(oCell, iIndex) {
	this.insertAggregation("cells", oCell, iIndex);
	return this;
};

/**
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.addCell = function(oCell) {
	this.addAggregation("cells", oCell);
	return this;
};

/**
 * Removes an cell from the aggregation named <code>cells</code>.
 *
 * @param {int | string | sap.ui.commons.layout.MatrixLayoutCell} vCell the cell to remove or its index or id
 * @return {sap.ui.commons.layout.MatrixLayoutCell} the removed cell or null
 * @public
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.removeCell = function(vCell) {
	return this.removeAggregation("cells", vCell);
};

/**
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.layout.MatrixLayoutCell[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.removeAllCells = function() {
	return this.removeAllAggregation("cells");
};

/**
 * Checks for the provided <code>sap.ui.commons.layout.MatrixLayoutCell</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.indexOfCell = function(oCell) {
	return this.indexOfAggregation("cells", oCell);
};
	

/**
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutRow.prototype.destroyCells = function() {
	this.destroyAggregation("cells");
	return this;
};


/**
 * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML element.
 * 
 * This method is intended to be used to mark controls as being of a special type for which
 * special styling can be provided using CSS selectors that reference this style class name.
 * 
 * <pre>
 * Example:
 * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
 * 
 * ...and in CSS:
 * .myRedTextButton {
 * color: red;
 * }
 * </pre>
 * 
 * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then
 * make the text in this particular button red.
 * 
 * Only characters allowed inside HTML attributes are allowed.
 * Quotes are not allowed and this method will ignore any strings containing quotes.
 * Strings containing spaces are interpreted as ONE custom style class (even though CSS selectors interpret them
 * as different classes) and can only removed later by calling removeStyleClass() with exactly the
 * same (space-containing) string as parameter.
 * Multiple calls with the same sStyleClass will have no different effect than calling once.
 * If sStyleClass is null, the call is ignored.
 * 
 * Returns <code>this</code> to allow method chaining
 *
 * @name sap.ui.commons.layout.MatrixLayoutRow.prototype.addStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the CSS class name to be added

 * @type sap.ui.commons.layout.MatrixLayoutRow
 * @public
 */


/**
 * Removes the given string from the list of custom style classes that have been set previously.
 * Regular style classes like "sapUiBtn" cannot be removed.
 * 
 * Returns <code>this</code> to allow method chaining
 *
 * @name sap.ui.commons.layout.MatrixLayoutRow.prototype.removeStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the style to be removed

 * @type sap.ui.commons.layout.MatrixLayoutRow
 * @public
 */


/**
 * Returns true if the given style class string is valid and if this Element has this style class set via a previous call to addStyleClass().
 *
 * @name sap.ui.commons.layout.MatrixLayoutRow.prototype.hasStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the style to check for

 * @type boolean
 * @public
 */


// Start of sap/ui/commons/layout/MatrixLayoutRow.js
jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");
sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.layout.MatrixLayoutRow.prototype);
