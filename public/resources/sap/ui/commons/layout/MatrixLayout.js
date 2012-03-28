/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.MatrixLayout.
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new layout/MatrixLayout.
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
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>layoutFixed : boolean</li>
 * <li>columns : int</li>
 * <li>widths : sap.ui.core.CSSSize[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>rows : sap.ui.commons.layout.MatrixLayoutRow</li></ul>
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
 * 
 * <p>
 * A matrix layout arranges controls in a grid structure, using rows which
 * need not have the same number of cells.
 * </p>
 * 
 * <p>
 * It uses predefined cell classes that guarantee appropriate distances
 * between cells in the grid. The cell's <code>vGutter</code> property lets
 * you specify additional horizontal distances easily. You can set these
 * additional distances (known as gutters) with or without separators.
 * The distance for each cell is specified by assigning a specific
 * enumeration value of the class <code>LayoutCellSeparator</code> of the
 * matrix data object.
 * </p>
 * 
 * <p>
 * You should <b>avoid nesting</b> matrix layouts. You should only use a
 * matrix layout if you need to align controls horizontally across rows.
 * </p>
 * 
 * @extends sap.ui.core.Control
 *
 * @author d029921 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.layout.MatrixLayout = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.layout.MatrixLayout.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.layout.MatrixLayout. 
 * Resulting metadata can be obtained via sap.ui.commons.layout.MatrixLayout.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.layout.MatrixLayout", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getVisible", "setVisible", "getWidth", "setWidth", "getHeight", "setHeight", "getLayoutFixed", "setLayoutFixed", "getColumns", "setColumns", "getWidths", "setWidths", 
    // aggregations
    "getRows", "insertRow", "addRow", "removeRow", "removeAllRows", "indexOfRow", "destroyRows", 
    // associations
    
    // events
    
    // methods
    "createRow"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : true},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "layoutFixed" : {name : "layoutFixed", type : "boolean", group : "Appearance", defaultValue : true},
    "columns" : {name : "columns", type : "int", group : "Appearance", defaultValue : null},
    "widths" : {name : "widths", type : "sap.ui.core.CSSSize[]", group : "Appearance", defaultValue : null}
  },
  defaultAggregation : "rows",
  aggregations : {
    "rows" : {name : "rows", type : "sap.ui.commons.layout.MatrixLayoutRow", multiple : true, singularName : "row"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>visible</code>.
 * 
 * Determines whether the matrix layout, including all its content, is
 * visible. An invisible control will not be rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * CSS width of the matrix layout.
 * If the LayoutFixed = true a adequate width should be provided.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * 
 * CSS height of the matrix layout.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>layoutFixed</code>.
 * Sets the table layout. If fixed the width parameter of a column has priority, if not the width of the content of the colums has priority.
 * The default is "fixed".
 * If the fixed layout is used a adequate width of the MatrixLayout should be provided. Otherwise the column width displayed could be different than the given ones because of browser dependend optimazations.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>layoutFixed</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getLayoutFixed = function() {
	return this.getProperty("layoutFixed");
};

/**
 * Setter for property <code>layoutFixed</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bLayoutFixed  new value for property <code>layoutFixed</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.setLayoutFixed = function(bLayoutFixed) {
	this.setProperty("layoutFixed", bLayoutFixed);
	return this;
};


/**
 * Getter for property <code>columns</code>.
 * Number of columns. If not specified, the number of columns will be determined from the given cells.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>columns</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getColumns = function() {
	return this.getProperty("columns");
};

/**
 * Setter for property <code>columns</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iColumns  new value for property <code>columns</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.setColumns = function(iColumns) {
	this.setProperty("columns", iColumns);
	return this;
};


/**
 * Getter for property <code>widths</code>.
 * Widths of the columns. Use an array to define the widths of the columns.
 * If a column shall have an automatical sizing enter "auto" for this column width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize[]} the value of property <code>widths</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayout.prototype.getWidths = function() {
	return this.getProperty("widths");
};

/**
 * Setter for property <code>widths</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize[]} aWidths  new value for property <code>widths</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.setWidths = function(aWidths) {
	this.setProperty("widths", aWidths);
	return this;
};

	
/**
 * Getter for aggregation <code>rows</code>.<br/>
 * 
 * The matrix layout's individual rows.
 * 
 * 
 * @return {sap.ui.commons.layout.MatrixLayoutRow[]}
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.getRows = function() {
	return this.getAggregation("rows", []);
};


/**
 * Inserts a row into the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *          oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the row should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the row is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.insertRow = function(oRow, iIndex) {
	this.insertAggregation("rows", oRow, iIndex);
	return this;
};

/**
 * Adds some row <code>oRow</code> 
 * to the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *            oRow the row to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.layout.MatrixLayout.prototype.addRow = function(oRow) {
	this.addAggregation("rows", oRow);
	return this;
};

/**
 * Removes an row from the aggregation named <code>rows</code>.
 *
 * @param {int | string | sap.ui.commons.layout.MatrixLayoutRow} vRow the row to remove or its index or id
 * @return {sap.ui.commons.layout.MatrixLayoutRow} the removed row or null
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.removeRow = function(vRow) {
	return this.removeAggregation("rows", vRow);
};

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.layout.MatrixLayoutRow[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.removeAllRows = function() {
	return this.removeAllAggregation("rows");
};

/**
 * Checks for the provided <code>sap.ui.commons.layout.MatrixLayoutRow</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.indexOfRow = function(oRow) {
	return this.indexOfAggregation("rows", oRow);
};
	

/**
 * Destroys all the rows in the aggregation 
 * named <code>rows</code>.
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.destroyRows = function() {
	this.destroyAggregation("rows");
	return this;
};


/**
 * Creates a new matrix layout row and appends it to this matrix layout.
 *
 * @name sap.ui.commons.layout.MatrixLayout.prototype.createRow
 * @function
 * @param {sap.ui.core.Control} 
 *         oControls
 *         Each argument must be either a matrix layout cell, which is added to the row "as is", or an arbitrary content control, which is wrapped with a new (default) matrix layout cell first and then added to the row.
 * Supports a variable number of arguments!

 * @type sap.ui.commons.layout.MatrixLayout
 * @public
 */


// Start of sap/ui/commons/layout/MatrixLayout.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.commons.layout.MatrixLayoutCell");
jQuery.sap.require("sap.ui.commons.layout.MatrixLayoutRow");

///**
// * Initialization... here with some Propagator-Behavior
// */
//sap.ui.commons.layout.MatrixLayout.prototype.init = function() {
//	// how do we ensure, parent behavior could be inherited, too?
//	// Option:
//	//this.getMetadata().baseType.prototype.init.apply(this);
//
//	debugger;
//	sap.ui.core.EnabledPropagator.call(this, true);
//};
sap.ui.core.EnabledPropagator.apply(sap.ui.commons.layout.MatrixLayout.prototype, [true]);

/**
 * Creates a new matrix layout row and appends it to this matrix layout.
 * Each argument must be either a matrix layout cell, which is added to the row
 * "as is", or an arbitrary content control, which is wrapped with a new
 * (default) matrix layout cell first and then added to the row.
 * @param {sap.ui.commons.layout.MatrixLayoutCell|sap.ui.core.Control|string} rowContent to add
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.createRow = function() {
	var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
	this.addRow(oRow);
	for (var i = 0; i < arguments.length; i++) {
		var oContent = arguments[i];
		var oCell;
		if (oContent instanceof sap.ui.commons.layout.MatrixLayoutCell) {
			// matrix layout cell given, use as is
			oCell = oContent;
		} else if (oContent instanceof sap.ui.core.Control) {
			// any control given, wrap with matrix layout cell first
			   oCell = new sap.ui.commons.layout.MatrixLayoutCell({content : oContent});
		} else if (oContent instanceof Object && oContent.height) {
			oRow.setHeight(oContent.height);
		} else {
			// any string(?) given, display it
			var sText = oContent ? oContent.toString() : "";
				oCell = new sap.ui.commons.layout.MatrixLayoutCell({
					content : new sap.ui.commons.TextView({text : sText})});
		}
			oRow.addCell(oCell);
	}
	return this;
};

/*
 * Overwrites Setter for property <code>widths</code>.
 * Sets the widths of the columns. The values must be stored in an array to be used in renderer.
 * to be compatible with previous version also allow list of values.
 * @param {sap.ui.core.CSSSize[]} aWidths new value for property <code>widths</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.setWidths = function( aWidths ) {

	var aSetWidths;

	if(!jQuery.isArray(aWidths)){
		// a list of values is used instead of an array -> use this as array
		aSetWidths = jQuery.makeArray(arguments);
	}else{
		aSetWidths = aWidths;
	}

	// set "auto" for empty values
	for ( var i = 0; i < aSetWidths.length; i++) {
		if (aSetWidths[i] == "" || !aSetWidths[i]) {
			aSetWidths[i] = "auto";
		}
	}

	this.setProperty("widths", aSetWidths);

	return this;
};