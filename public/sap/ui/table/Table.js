/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.Table.
jQuery.sap.declare("sap.ui.table.Table");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Table.
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
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>rowHeight : int</li>
 * <li>columnHeaderHeight : int</li>
 * <li>visibleRowCount : int</li>
 * <li>firstVisibleRow : int</li>
 * <li>selectionMode : sap.ui.table.SelectionMode</li>
 * <li>selectedIndex : int</li>
 * <li>allowColumnReordering : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>title : sap.ui.core.Control</li>
 * <li>footer : sap.ui.core.Control</li>
 * <li>toolbar : sap.ui.commons.Toolbar</li>
 * <li>columns : sap.ui.table.Column</li>
 * <li>rows : sap.ui.table.Row</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>rowSelectionChange : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>columnSelect : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * The Table Control.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.table.Table = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.table.Table.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.table.Table. 
 * Resulting metadata can be obtained via sap.ui.table.Table.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.table.Table", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getWidth", "setWidth", "getRowHeight", "setRowHeight", "getColumnHeaderHeight", "setColumnHeaderHeight", "getVisibleRowCount", "setVisibleRowCount", "getFirstVisibleRow", "setFirstVisibleRow", "getSelectionMode", "setSelectionMode", "getSelectedIndex", "setSelectedIndex", "getAllowColumnReordering", "setAllowColumnReordering", 
    // aggregations
    "getTitle", "setTitle", "destroyTitle", "getFooter", "setFooter", "destroyFooter", "getToolbar", "setToolbar", "destroyToolbar", "getColumns", "insertColumn", "addColumn", "removeColumn", "removeAllColumns", "indexOfColumn", "destroyColumns", "bindColumns", "unbindColumns", "getRows", "insertRow", "addRow", "removeRow", "removeAllRows", "indexOfRow", "destroyRows", "bindRows", "unbindRows", 
    // associations
    
    // events
    "attachRowSelectionChange", "detachRowSelectionChange", "attachColumnSelect", "detachColumnSelect", 
    // methods
    "getSelectedIndices", "addSelectionInterval", "setSelectionInterval", "removeSelectionInterval", "isIndexSelected", "clearSelection", "selectAll", "getContextByIndex"
  ],

  // ---- control specific ----
  library : "sap.ui.table",
  properties : {
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "", defaultValue : 'auto'},
    "rowHeight" : {name : "rowHeight", type : "int", group : "", defaultValue : 22},
    "columnHeaderHeight" : {name : "columnHeaderHeight", type : "int", group : "", defaultValue : 22},
    "visibleRowCount" : {name : "visibleRowCount", type : "int", group : "", defaultValue : 10},
    "firstVisibleRow" : {name : "firstVisibleRow", type : "int", group : "", defaultValue : 0},
    "selectionMode" : {name : "selectionMode", type : "sap.ui.table.SelectionMode", group : "", defaultValue : sap.ui.table.SelectionMode.Multi},
    "selectedIndex" : {name : "selectedIndex", type : "int", group : "", defaultValue : -1},
    "allowColumnReordering" : {name : "allowColumnReordering", type : "boolean", group : "", defaultValue : true}
  },
  defaultAggregation : "columns",
  aggregations : {
    "title" : {name : "title", type : "sap.ui.core.Control", multiple : false}, 
    "footer" : {name : "footer", type : "sap.ui.core.Control", multiple : false}, 
    "toolbar" : {name : "toolbar", type : "sap.ui.commons.Toolbar", multiple : false}, 
    "columns" : {name : "columns", type : "sap.ui.table.Column", multiple : true, singularName : "column"}, 
    "rows" : {name : "rows", type : "sap.ui.table.Row", multiple : true, singularName : "row"}
  },
  associations : {},
  events : {
    "rowSelectionChange" : "rowSelectionChange", 
    "columnSelect" : "columnSelect"
  }

});	

sap.ui.table.Table.M_EVENTS = {'rowSelectionChange':'rowSelectionChange','columnSelect':'columnSelect'};


/**
 * Getter for property <code>width</code>.
 * Width of the Table.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>rowHeight</code>.
 * Height of a row of the Table in pixel.
 *
 * Default value is <code>22</code>
 *
 * @return {int} the value of property <code>rowHeight</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getRowHeight = function() {
	return this.getProperty("rowHeight");
};

/**
 * Setter for property <code>rowHeight</code>.
 *
 * Default value is <code>22</code> 
 *
 * @param {int} iRowHeight  new value for property <code>rowHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setRowHeight = function(iRowHeight) {
	this.setProperty("rowHeight", iRowHeight);
	return this;
};


/**
 * Getter for property <code>columnHeaderHeight</code>.
 * Height of the column header of the Table in pixel.
 *
 * Default value is <code>22</code>
 *
 * @return {int} the value of property <code>columnHeaderHeight</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getColumnHeaderHeight = function() {
	return this.getProperty("columnHeaderHeight");
};

/**
 * Setter for property <code>columnHeaderHeight</code>.
 *
 * Default value is <code>22</code> 
 *
 * @param {int} iColumnHeaderHeight  new value for property <code>columnHeaderHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setColumnHeaderHeight = function(iColumnHeaderHeight) {
	this.setProperty("columnHeaderHeight", iColumnHeaderHeight);
	return this;
};


/**
 * Getter for property <code>visibleRowCount</code>.
 * Count of visible rows (will overwrite the height property).
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>visibleRowCount</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getVisibleRowCount = function() {
	return this.getProperty("visibleRowCount");
};

/**
 * Setter for property <code>visibleRowCount</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iVisibleRowCount  new value for property <code>visibleRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setVisibleRowCount = function(iVisibleRowCount) {
	this.setProperty("visibleRowCount", iVisibleRowCount);
	return this;
};


/**
 * Getter for property <code>firstVisibleRow</code>.
 * First visible row.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>firstVisibleRow</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getFirstVisibleRow = function() {
	return this.getProperty("firstVisibleRow");
};

/**
 * Setter for property <code>firstVisibleRow</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstVisibleRow  new value for property <code>firstVisibleRow</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setFirstVisibleRow = function(iFirstVisibleRow) {
	this.setProperty("firstVisibleRow", iFirstVisibleRow);
	return this;
};


/**
 * Getter for property <code>selectionMode</code>.
 * Selection mode of the Table.
 *
 * Default value is <code>Multi</code>
 *
 * @return {sap.ui.table.SelectionMode} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectionMode = function() {
	return this.getProperty("selectionMode");
};

/**
 * Setter for property <code>selectionMode</code>.
 *
 * Default value is <code>Multi</code> 
 *
 * @param {sap.ui.table.SelectionMode} oSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setSelectionMode = function(oSelectionMode) {
	this.setProperty("selectionMode", oSelectionMode);
	return this;
};


/**
 * Getter for property <code>selectedIndex</code>.
 * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the first selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getSelectedIndex = function() {
	return this.getProperty("selectedIndex");
};

/**
 * Setter for property <code>selectedIndex</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iSelectedIndex  new value for property <code>selectedIndex</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setSelectedIndex = function(iSelectedIndex) {
	this.setProperty("selectedIndex", iSelectedIndex);
	return this;
};


/**
 * Getter for property <code>allowColumnReordering</code>.
 * Flag to enable or disable column reordering
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>allowColumnReordering</code>
 * @public
 * 
 */
sap.ui.table.Table.prototype.getAllowColumnReordering = function() {
	return this.getProperty("allowColumnReordering");
};

/**
 * Setter for property <code>allowColumnReordering</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAllowColumnReordering  new value for property <code>allowColumnReordering</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setAllowColumnReordering = function(bAllowColumnReordering) {
	this.setProperty("allowColumnReordering", bAllowColumnReordering);
	return this;
};

	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Control or text of title section of the Table (if not set/empty) the title will be hidden)
 * 
 * @return {sap.ui.core.Control}
 * @public
 */
sap.ui.table.Table.prototype.getTitle = function() {
	return this.getAggregation("title", null);
};


/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.ui.core.Control}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setTitle = function(oTitle) {
	this.setAggregation("title", oTitle);
	return this;
};
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.destroyTitle = function() {
	this.destroyAggregation("title");
	return this;
};

	
/**
 * Getter for aggregation <code>footer</code>.<br/>
 * Control or text of footer section of the Table (if not set/empty) the footer will be hidden)
 * 
 * @return {sap.ui.core.Control}
 * @public
 */
sap.ui.table.Table.prototype.getFooter = function() {
	return this.getAggregation("footer", null);
};


/**
 * Setter for the aggregated <code>footer</code>.
 * @param oFooter {sap.ui.core.Control}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setFooter = function(oFooter) {
	this.setAggregation("footer", oFooter);
	return this;
};
	

/**
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.destroyFooter = function() {
	this.destroyAggregation("footer");
	return this;
};

	
/**
 * Getter for aggregation <code>toolbar</code>.<br/>
 * Toolbar of the Table (if not set it will be hidden)
 * 
 * @return {sap.ui.commons.Toolbar}
 * @public
 */
sap.ui.table.Table.prototype.getToolbar = function() {
	return this.getAggregation("toolbar", null);
};


/**
 * Setter for the aggregated <code>toolbar</code>.
 * @param oToolbar {sap.ui.commons.Toolbar}
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.setToolbar = function(oToolbar) {
	this.setAggregation("toolbar", oToolbar);
	return this;
};
	

/**
 * Destroys the toolbar in the aggregation 
 * named <code>toolbar</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.destroyToolbar = function() {
	this.destroyAggregation("toolbar");
	return this;
};

	
/**
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns of the Table
 * 
 * @return {sap.ui.table.Column[]}
 * @public
 */
sap.ui.table.Table.prototype.getColumns = function() {
	return this.getAggregation("columns", []);
};


/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.ui.table.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.insertColumn = function(oColumn, iIndex) {
	this.insertAggregation("columns", oColumn, iIndex);
	return this;
};

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.ui.table.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.table.Table.prototype.addColumn = function(oColumn) {
	this.addAggregation("columns", oColumn);
	return this;
};

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.ui.table.Column} vColumn the column to remove or its index or id
 * @return {sap.ui.table.Column} the removed column or null
 * @public
 */
sap.ui.table.Table.prototype.removeColumn = function(vColumn) {
	return this.removeAggregation("columns", vColumn);
};

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Column[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.table.Table.prototype.removeAllColumns = function() {
	return this.removeAllAggregation("columns");
};

/**
 * Checks for the provided <code>sap.ui.table.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.table.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.table.Table.prototype.indexOfColumn = function(oColumn) {
	return this.indexOfAggregation("columns", oColumn);
};
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.destroyColumns = function() {
	this.destroyAggregation("columns");
	return this;
};


/**
 * Binder for aggregation <code>columns</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.bindColumns = function(sPath, oTemplate, oSorter, aFilters) {
	this.bindAggregation("columns", sPath, oTemplate, oSorter, aFilters);
	return this;
};

/**
 * Unbinder for aggregation <code>columns</code>.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.unbindColumns = function() {
	this.unbindAggregation("columns");
	return this;
};

	
/**
 * Getter for aggregation <code>rows</code>.<br/>
 * Rows of the Table
 * 
 * @return {sap.ui.table.Row[]}
 * @public
 */
sap.ui.table.Table.prototype.getRows = function() {
	return this.getAggregation("rows", []);
};


/**
 * Inserts a row into the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.table.Row}
 *          oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the row should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the row is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.insertRow = function(oRow, iIndex) {
	this.insertAggregation("rows", oRow, iIndex);
	return this;
};

/**
 * Adds some row <code>oRow</code> 
 * to the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.table.Row}
 *            oRow the row to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.table.Table.prototype.addRow = function(oRow) {
	this.addAggregation("rows", oRow);
	return this;
};

/**
 * Removes an row from the aggregation named <code>rows</code>.
 *
 * @param {int | string | sap.ui.table.Row} vRow the row to remove or its index or id
 * @return {sap.ui.table.Row} the removed row or null
 * @public
 */
sap.ui.table.Table.prototype.removeRow = function(vRow) {
	return this.removeAggregation("rows", vRow);
};

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Row[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.table.Table.prototype.removeAllRows = function() {
	return this.removeAllAggregation("rows");
};

/**
 * Checks for the provided <code>sap.ui.table.Row</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.table.Row}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.table.Table.prototype.indexOfRow = function(oRow) {
	return this.indexOfAggregation("rows", oRow);
};
	

/**
 * Destroys all the rows in the aggregation 
 * named <code>rows</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.destroyRows = function() {
	this.destroyAggregation("rows");
	return this;
};


/**
 * Binder for aggregation <code>rows</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.bindRows = function(sPath, oTemplate, oSorter, aFilters) {
	this.bindAggregation("rows", sPath, oTemplate, oSorter, aFilters);
	return this;
};

/**
 * Unbinder for aggregation <code>rows</code>.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.unbindRows = function() {
	this.unbindAggregation("rows");
	return this;
};


/**
 * fired when the row selection of the table has been changed 
 *
 * @name sap.ui.table.Table#rowSelectionChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.rowIndex index of the lead selected row
 * @param {object} oControlEvent.getParameters.rowContext binding context of the lead selected row
 * @param {int[]} oControlEvent.getParameters.rowIndices indices of other selected rows
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>
 * fired when the row selection of the table has been changed 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.attachRowSelectionChange = function(oData, fnFunction, oListener) {
	this.attachEvent("rowSelectionChange", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.detachRowSelectionChange = function(fnFunction, oListener) {
	this.detachEvent("rowSelectionChange", fnFunction, oListener);
	return this;	
};

/**
 * Fire event rowSelectionChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> index of the lead selected row</li>
 * <li>'rowContext' of type <code>object</code> binding context of the lead selected row</li>
 * <li>'rowIndices' of type <code>int[]</code> indices of other selected rows</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.table.Table.prototype.fireRowSelectionChange = function(mArguments) {
	this.fireEvent("rowSelectionChange", mArguments);
	return this;
};


/**
 * fired when a column of the table has been selected 
 *
 * @name sap.ui.table.Table#columnSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the selected column
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>
 * fired when a column of the table has been selected 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.attachColumnSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("columnSelect", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Table.prototype.detachColumnSelect = function(fnFunction, oListener) {
	this.detachEvent("columnSelect", fnFunction, oListener);
	return this;	
};

/**
 * Fire event columnSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> reference to the selected column</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.table.Table.prototype.fireColumnSelect = function(mArguments) {
	this.fireEvent("columnSelect", mArguments);
	return this;
};


/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 *
 * @name sap.ui.table.Table.prototype.getSelectedIndices
 * @function

 * @type int[]
 * @public
 */


/**
 * Adds the given selection interval to the selection. In case of single selection the "indexTo" value will be used for as selected index.
 *
 * @name sap.ui.table.Table.prototype.addSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Sets the given selection interval as selection. In case of single selection the "indexTo" value will be used for as selected index.
 *
 * @name sap.ui.table.Table.prototype.setSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Removes the given selection interval from the selection. In case of single selection this call removeSelectedIndex with the "indexTo" value.
 *
 * @name sap.ui.table.Table.prototype.removeSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Returns whether the given index is selected.
 *
 * @name sap.ui.table.Table.prototype.isIndexSelected
 * @function
 * @param {int} 
 *         iIndex
 *         Index which is checked for selection state.

 * @type boolean
 * @public
 */


/**
 * Removes complete selection.
 *
 * @name sap.ui.table.Table.prototype.clearSelection
 * @function

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Add all rows to the selection.
 *
 * @name sap.ui.table.Table.prototype.selectAll
 * @function

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Returns the context of a row by its index.
 *
 * @name sap.ui.table.Table.prototype.getContextByIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index of the row to return the context from.

 * @type object
 * @public
 */


// Start of sap/ui/table/Table.js
jQuery.sap.require("sap.ui.model.SelectionModel");
jQuery.sap.require("sap.ui.core.theming.Parameters");

/*

Things to consider:
  - what happens when changing/adding/removing a column? Recreate?
    -> call rerender(true);

Open Points:
  - Keyboard Navigation
  - Tests
  - Hierarchical Table (separate control?)

*/ 

// =============================================================================
// BASIC CONTROL API
// =============================================================================

/**
 * Initialization of the Table control
 * @private
 */
sap.ui.table.Table.prototype.init = function() {

	// create an information object which contains always required infos
	this._oInfo = {
		oResBundle: sap.ui.getCore().getLibraryResourceBundle("sap.ui.table"),
		bAccMode: sap.ui.getCore().getConfiguration().getAccessibility(),
		bRtlMode: sap.ui.getCore().getConfiguration().getRTL()
	};
	
	// basic selection model
	this._oSelection = new sap.ui.model.SelectionModel();
	this._oSelection.attachSelectionChanged(this._onSelectionChange, this);
	
	// minimum width of a table column in pixel:
	// should at least be larger than the paddings for cols and cells!
	this._iColMinWidth = 20; 

	// read the row height from CSS
	this.onThemeChanged();
	
	// first & last visible columns
	this._iFirstCol = undefined;
	this._iLastCol = undefined;

	// scrollbars (configure by default for the pixel mode)
	this._oVSb = new sap.ui.core.ScrollBar(this.getId() + "-vsb", {size: "100%"});
	this._oVSb.attachScroll(this.onvscroll, this);
	this._oHSb = new sap.ui.core.ScrollBar(this.getId() + "-hsb", {size: "100%", contentSize: "0px", vertical: false});
	this._oHSb.attachScroll(this.onhscroll, this);
	
	// rendered or not
	this._bRendered = false;
	
	// custom heights
	this._bCustomRowHeight = false;
	this._bCustomColHdrHeight = false;

};


/**
 * Termination of the DataTable control
 * @private
 */
sap.ui.table.Table.prototype.exit = function() {
	// destroy the child controls
	this._oVSB.destroy();
	this._oHSB.destroy();
	// cleanup
	this._cleanUpTimers();
	this._detachEvents();
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.Table.prototype.onThemeChanged = function() {
	
	if (!this._bCustomRowHeight) {
		// read the value of the row height parameter
		var sRowHeightParamName = "sap.ui.table.Table:sapUiTableRowHeight";
		this.setProperty("rowHeight", parseInt(sap.ui.core.theming.Parameters.get(sRowHeightParamName), 10), false);
	}
	if (!this._bCustomColHdrHeight) {
		// read the value of the column header height parameter
		var sColHdrHeightParamName = "sap.ui.table.Table:sapUiTableColHdrHeight";
		this.setProperty("columnHeaderHeight", parseInt(sap.ui.core.theming.Parameters.get(sColHdrHeightParamName), 10), false);
	}
	
	if (this._bRendered) {
		this.invalidate();
	}
	
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.Table.prototype.onBeforeRendering = function() {
	this._bRendered = false;
	this._cleanUpTimers();
	this._detachEvents();
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.Table.prototype.onAfterRendering = function() {
	this._bRendered = true;

	this._bOnAfterRendering = true;

	var $this = this.$();
	
	this._updateVSb();
	this._updateSelection();

	this._handleResize();

	//this._oHSb._doScroll(); // TODO: HACK (to apply the scrollPosition to the scrollbar!)
	
	this._attachEvents();
	
	// restore the column icons
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		aCols[i]._restoreIcons();
	}

	this._bOnAfterRendering = false;

};


// =============================================================================
// PUBLIC TABLE API
// =============================================================================


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.rerender = function(bRecreateColumns) {
	if (bRecreateColumns) {
		this._createRows();
	}
	sap.ui.core.Control.prototype.rerender.apply(this, arguments);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setTitle = function(vTitle) {
	var oTitle = vTitle;
	if (typeof (vTitle) === "string") {
		oTitle = new sap.ui.commons.TextView({
			text: vTitle,
			design: sap.ui.commons.TextViewDesign.H1
		});
	}
	this.setAggregation("title", oTitle);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setFooter = function(vFooter) {
	var oFooter = vFooter;
	if (typeof (vFooter) === "string") {
		oFooter = new sap.ui.commons.TextView({
			text: vFooter
		});
	}
	this.setAggregation("footer", oFooter);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectionMode = function(oSelectionMode) {
	this._oSelection.clearSelection();
	if (oSelectionMode === sap.ui.table.SelectionMode.Single) {
		this._oSelection.setSelectionMode(sap.ui.model.SelectionModel.SINGLE_SELECTION);
	} else {
		this._oSelection.setSelectionMode(sap.ui.model.SelectionModel.MULTI_SELECTION);
	}
	this.setProperty("selectionMode", oSelectionMode);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setRowHeight = function(iHeight) {
	this._bCustomRowHeight = true;
	this.setProperty("rowHeight", iHeight);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setColumnHeaderHeight = function(iHeight) {
	this._bCustomColHdrHeight = true;
	this.setProperty("columnHeaderHeight", iHeight);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setFirstVisibleRow = function(iRowIndex, bOnScroll) {
	if (this._bRendered && !bOnScroll && this.$().hasClass("sapUiTableVScr")) {
		// update the scroll position => calls this function again by the event
		this._oVSb.setScrollPosition(iRowIndex);
	} else {
		// update the bindings
		this.setProperty("firstVisibleRow", this._oVSb.getScrollPosition(), true);
		if (this.isBound("rows")) {
			this.updateAggregation("rows");
		}
	}
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setVisibleRowCount = function(iRowCount) {
	this.setProperty("visibleRowCount", iRowCount);
	if (iRowCount >= this._getRowCount()) {
		// when we have more visible rows than rows we reset the first 
		// visible row to the first one!
		this.setProperty("firstVisibleRow", 0);
	}
	this._createRows();
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.bindRows = function(sPath, oTemplate, oSorter, aFilters) {
	// bind the aggregation and return (we ignore the template!!)
	return this.bindAggregation("rows", sPath, {}, oSorter, aFilters);
};


/**
 * updates the rows - called internally by the updateAggregation function when
 * anything in the model has been changed.
 * @private
 */
sap.ui.table.Table.prototype.updateRows = function(oBindingInfo, iStartIndex, iLength) {
		
	jQuery.sap.log.warning("updateRows");
		
	// by default the start index is the first visible row
	iStartIndex = iStartIndex === undefined ? this.getFirstVisibleRow() : iStartIndex;

	// in case of the table is not being rendered (or in case of recreation) 
	// it will create the rows for the rows aggregation based on the columns 
	if (!this._bRendered) {
		this._createRows(iStartIndex);
	} else {
		// update the bindings
		this.updateRowsAfterOutput(oBindingInfo, iStartIndex, iLength);
	}

};


/**
 * updates the rows - called internally by the updateAggregation function when
 * anything in the model has been changed.
 * @private
 */
sap.ui.table.Table.prototype.updateRowsAfterOutput = function(oBindingInfo, iStartIndex, iLength) {

	// update the bindings by using a delayed mechanism to avoid to many update
	// requests: by using the mechanism below it will trigger an update each 
	// 50ms 
	var that = this,
	    $this = this.$(),
	    oBinding = oBindingInfo.binding;

	// delayed update mechanism
	this._sBindingTimer = this._sBindingTimer || jQuery.sap.delayedCall(50, this, function() {
	
		this._determineVisibleCols();
		this._updateBindingContexts();
		this._updateSelection();
		this._sBindingTimer = undefined;
		
	});
		
};


// =============================================================================
// EVENT HANDLING & CLEANUP
// =============================================================================

/**
 * attaches the required native event handlers
 */
sap.ui.table.Table.prototype._attachEvents = function() {

	var $this = this.$();

	// listen to the scroll events of the containers (for keyboard navigation)
	$this.find(".sapUiTableRowHdrScr").scroll(jQuery.proxy(this._onrowscroll, this));
	$this.find(".sapUiTableColHdrScr").scroll(jQuery.proxy(this._oncolscroll, this));

	// sync row header > content
	$this.find(".sapUiTableRowHdr > tbody > tr").hover(function() {
		jQuery(this).addClass("sapUiTableRowHvr");
		var iIndex = jQuery(".sapUiTableRowHdr > tbody > tr").index(this) + 2;
		jQuery(".sapUiTableCtrl > tbody > tr").filter(":nth-child(" + iIndex + ")").addClass("sapUiTableRowHvr");
	}, function() {
		jQuery(this).removeClass("sapUiTableRowHvr");
		jQuery(".sapUiTableCtrl > tbody > tr").removeClass("sapUiTableRowHvr");
	});

	// sync content > row header
	$this.find(".sapUiTableCtrl > tbody > tr").hover(function() {
		jQuery(this).addClass("sapUiTableRowHvr");
		var iIndex = jQuery(".sapUiTableCtrl > tbody > tr").index(this);
		jQuery(".sapUiTableRowHdr > tbody > tr").filter(":nth-child(" + iIndex + ")").addClass("sapUiTableRowHvr");
	}, function() {
		jQuery(this).removeClass("sapUiTableRowHvr");
		jQuery(".sapUiTableRowHdr > tbody > tr").removeClass("sapUiTableRowHvr");
	});
		
	// listen to the resize handlers 
	$this.find(".sapUiTableColRsz").mousedown(jQuery.proxy(this._onColumnResizeStart, this));

	// listen to resize events of the browser (or surrounding DOM elements)
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));
	
	// the vertical scrollbar listens to the mousewheel on the content section
	this._oVSb.bind($this.find(".sapUiTableCtrlScr").get(0));
	
};

/**
 * detaches the required native event handlers
 */
sap.ui.table.Table.prototype._detachEvents = function() {

	var $this = this.$();

	$this.find(".sapUiTableRowHdrScr").unbind();
	$this.find(".sapUiTableColHdrScr").unbind();
	
	$this.find(".sapUiTableCtrl > tbody > tr").unbind();
	$this.find(".sapUiTableRowHdr > tbody > tr").unbind();

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	$this.find(".sapUiTableColRsz").unbind();

	this._oVSb.unbind($this.find(".sapUiTableCtrlScr").get(0));
	
};

/**
 * cleanup the timers when not required anymore
 */
sap.ui.table.Table.prototype._cleanUpTimers = function() {

	if (this._sBindingTimer) {
		jQuery.sap.clearDelayedCall(this._sBindingTimer);
		this._sBindingTimer = undefined;
	}
	
	if (this._sRenderingTimer) {
		jQuery.sap.clearDelayedCall(this._sRenderingTimer);
		this._sRenderingTimer = undefined;
	}
	
	if (this._sDelayedActionTimer) {
		jQuery.sap.clearDelayedCall(this._sDelayedActionTimer);
		this._sDelayedActionTimer = undefined;
	}
	
	if (this._sColHdrPosTimer) {
		jQuery.sap.clearDelayedCall(this._sColHdrPosTimer);
		this._sColHdrPosTimer = undefined;
	}
	
};


// =============================================================================
// PRIVATE TABLE STUFF
// =============================================================================


/**
 * creates the rows for the rows aggregation
 */
sap.ui.table.Table.prototype._createRows = function(iStartIndex) {

	// by default the start index is the first visible row
	iStartIndex = iStartIndex === undefined ? this.getFirstVisibleRow() : iStartIndex;

	// create the new template
	var oTemplate = new sap.ui.table.Row();
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		oTemplate.addCell(aCols[i].getTemplate().clone());
	}
	
	// initially called without iStartIndex and iLength
	this.destroyRows();
	var aRows = []; 
	var aContexts = undefined;
	if (this.isBound("rows")) {
		aContexts = this.getBinding("rows").getContexts(iStartIndex, iStartIndex + this.getVisibleRowCount());
	}
	for (var i = 0; i < this.getVisibleRowCount(); i++) {
		var oClone = oTemplate.clone(this.getId() + "-row-" + i);
		if (aContexts && aContexts[i]) {
			oClone.setBindingContext(aContexts[i]);
			oClone._bHidden = false;
		} else {
			oClone._bHidden = true;
		}
		this.addRow(oClone);
	}
	
};


/**
 * updates the horizontal scrollbar
 */
sap.ui.table.Table.prototype._updateHSb = function() {

	// get the width of the container 
	var $this = this.$();

	// apply the new content size
	var iColsWidth = $this.find(".sapUiTableCtrl").width();
	this._oHSb.setContentSize(iColsWidth + "px");
	
	// add the horizontal scrollbar
	if (iColsWidth > $this.find(".sapUiTableCtrlScr").width()) {
		// show the scrollbar
		$this.addClass("sapUiTableHScr");
	} else {
		// hide the scrollbar
		$this.removeClass("sapUiTableHScr");
	}

};


/**
 * updates the vertical scrollbar
 */
sap.ui.table.Table.prototype._updateVSb = function() {
	var $this = this.$();
	var bDoResize = false;
	if (this.isBound("rows")) {
		var iSteps = Math.max(0, this.getBinding("rows").getLength() - this.getVisibleRowCount());
		if (iSteps) {
			if (!$this.hasClass("sapUiTableVScr")) {
				$this.addClass("sapUiTableVScr");
				bDoResize = true;
			}
		} else {
			if ($this.hasClass("sapUiTableVScr")) {
				$this.removeClass("sapUiTableVScr");
				bDoResize = true;
			}
		}
		this._oVSb.setSteps(iSteps);
		this._oVSb.setScrollPosition(this.getFirstVisibleRow());
		this._oVSb.rerender();
	}
	if (bDoResize && !this._bOnAfterRendering) {
		this._handleResize();
	}
};


/**
 * updates the binding contexts of the currently visible controls
 */ 
sap.ui.table.Table.prototype._updateBindingContexts = function(aContexts) {

	var aRows = this.getRows();
	var aContexts = this.getBinding("rows").getContexts(this.getFirstVisibleRow(), aRows.length);
	
	// update the binding contexts only for the visible columns
	for (var iIndex = 0, iLength = this.getRows().length; iIndex < iLength; iIndex++) {
	//for (var iIndex = aRows.length - 1; iIndex >= 0; iIndex--) {
		var oContext = aContexts[iIndex];
		var oRow = aRows[iIndex];
		if (oRow) {
			var aCells = oRow.getCells();
			var $row = aCells[0].$().parents("tr").first();
			if (oContext) {
				for (var col = this._iFirstCol, l = this._iLastCol + 1; col < l; col++) {
					aCells[col].setBindingContext(oContext);
					//if (col == 0) jQuery.sap.log.warning(aCells[col].getId() + "  => " + aCells[col].getDomRef().innerHTML); 
				}
				if ($row.hasClass("sapUiTableRowHidden")) {
					$row.removeClass("sapUiTableRowHidden");
				}
				oRow._bHidden = false;
			} else {
				if (!$row.hasClass("sapUiTableRowHidden")) {
					$row.addClass("sapUiTableRowHidden");
				}
				oRow._bHidden = true;
			}
		}
	}
	
	// since webkit browsers have an optimized painting mechanism we need to force
	// the rerendering of the complete element (reconsider if this would be ok)
	// Google for: "Force-redraw DOM technique for WebKit-based browsers" to find the page!
	if (jQuery.browser.webkit && this.$().css("-webkit-transform") === "none") {
		this.$().css("-webkit-transform", "scale(1)");
	}

};


/**
 * determines the currently visible columns (used for simply updating only the
 * controls of the visible columns instead of the complete row!)t
 */
sap.ui.table.Table.prototype._determineVisibleCols = function() {

	// determine the visible colums
	var $this = this.$();

	if ($this.hasClass("sapUiTableHScr")) {
	
		// calculate the view port
		var iScrollLeft = this._getScrollLeft();
		var iScrollRight = iScrollLeft + this._getScrollWidth();
	
		// has the view port changed?
		if (this._iOldScrollLeft !== iScrollLeft || this._iOldScrollRight !== iScrollRight) {
		
			// calculate the first and last visible column
			var bRtl = this._oInfo.bRtlMode;
			var iLeft = bRtl ? $this.find(".sapUiTableCtrl").width() : 0;
			this._iFirstCol = undefined;
			this._iLastCol = undefined;
			var that = this;
			$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
				var iWidth = jQuery(oElement).width();
				if (bRtl) {
					iLeft -= iWidth;
				}
				if (iLeft + iWidth >= iScrollLeft && iLeft <= iScrollRight) {
					if (that._iFirstCol === undefined) {
						that._iFirstCol = iIndex;
					}
					that._iLastCol = iIndex; 
				}
				if (!bRtl) {
					iLeft += iWidth;
				} 
			});
			this._iLastCol = Math.min(this._iLastCol, this.getColumns().length);
			
			// keep the view port information (performance!!)
			this._iOldScrollLeft = iScrollLeft;
			this._iOldScrollRight = iScrollRight;
			
		}
	
	} else {
	
		this._iFirstCol = 0;
		this._iLastCol = this.getColumns().length - 1;
			
	}

};

sap.ui.table.Table.prototype._getRowCount = function() {
	if (this.isBound("rows")) {
		return this.getBinding("rows").getLength();
	} else {
		return 0;
	}
};


sap.ui.table.Table.prototype._getScrollLeft = function() {
	if (this.$().hasClass("sapUiTableHScr")) {
		return this._oHSb.getScrollPosition() || 0;
	} else {
		return 0;
	}
};

sap.ui.table.Table.prototype._getScrollTop = function() {
	if (this.$().hasClass("sapUiTableVScr")) {
		return this._oVSb.getScrollPosition() || 0;
	} else {
		return 0;
	}
};

sap.ui.table.Table.prototype._getScrollWidth = function() {
	return this.$().find(".sapUiTableCtrlScr").width();
};

sap.ui.table.Table.prototype._getScrollHeight = function() {
	return this.$().find(".sapUiTableCtrlScr").height();
};


/**
 * calculates the width of the columns by using the browsers calculation
 * mechanism and setting a fix width to the columns
 */
sap.ui.table.Table.prototype._handleResize = function() {

	//var millis = new Date();
	var $this = this.$();

	// reset the table width to the maximal width without scrollbar
	var iTableWidth = $this.find(".sapUiTableCtrl").width();
	
	// first calculate the min width of the table for all columns
	var aCols = this.getColumns();
	var iColsWidth = 0;
	for (var i = 0, l = aCols.length; i < l; i++) {
		var sWidth = aCols[i].getWidth();
		var fWidth = parseFloat(sWidth);
		if (jQuery.sap.endsWith(sWidth, "px")) {
			iColsWidth += fWidth;
		} else if (jQuery.sap.endsWith(sWidth, "%")) {
			iColsWidth += fWidth * iTableWidth / 100;
		} else {
			// for unknown width we use the min width
			iColsWidth += /* aCols[i].getMinWidth() || */ this._iColMinWidth;
		}
	}
	
	// performance optimization! when the screen is smaller than the columns 
	// total width we do not recalculate the width anymore!! not needed!!
	if (!this._bOnAfterRendering && iColsWidth > window.screen.width) {
		return;
	}
	
	// reset the table width to the maximal width without scrollbar
	iTableWidth = $this.find(".sapUiTableCtrlScr").width();
	
	// FYI: table-layout: fixed => allows overflow: hidden for TD's!
	//      but for the determination of the width we need table-layout: auto!
	
	// we have two options now (columns are wider than the possible table width)
	if (iColsWidth > iTableWidth) {

		// HORIZONTAL SCROLLING:
		// if the columns are wider the table control will get this width
		$this.find(".sapUiTableCtrl").width(iColsWidth);
		
		// set the width of the columns in the first invisible row of the table
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			jQuery(oElement).width(aCols[iIndex].getWidth() || /* aCols[iIndex].getMinWidth() || */ "auto");
		});

		// calculate and apply the real width
		iColsWidth = 0;
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			iColsWidth += jQuery(oElement).width();
		});

	} else {
	
		// "NO" HORIZONTAL SCROLLING:
		// if the table is wider than the columns - the cells will define the length
		$this.find(".sapUiTableCtrl").width(iTableWidth);
		
		// set the width of the columns in the first invisible row of the table
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			// columns with a fixed with and beeing flexible will also get the auto size
			// to expand dynamically their width!
			if (aCols[iIndex].getWidth() && !aCols[iIndex].getFlexible()) {
				jQuery(oElement).width(aCols[iIndex].getWidth());
			} else {
				jQuery(oElement).width("auto");
			}
		});

		// we set the width of the columns to guarantee pixel perfect alignment
		// of the columns - especially for IE this is important!!
		iColsWidth = 0;
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			iColsWidth += jQuery(oElement).width();
			jQuery(oElement).width(jQuery(oElement).width());
		});
	}
	
	// apply the total width of all columns to the table again 
	$this.find(".sapUiTableCtrl").width(iColsWidth);

	// update the horizontal scrollbar
	this._updateHSb();

	// finally we take the width of the columns and apply them to the column headers
	var iNewTableWidth = Math.max(iColsWidth, iTableWidth) + $this.find(".sapUiTableVSb").width();
	$this.find(".sapUiTableColHdr").width(iNewTableWidth);
	
	// update the positions of the resize handlers
	this._updateColumnHeader();
	//jQuery.sap.log.warning("_handleResize: " + (new Date() - millis) + "ms");

};

/**
 * updates the column headers (width and position of the resize handles)
 */
sap.ui.table.Table.prototype._updateColumnHeader = function () {
	if (this._sColHdrPosTimer) {
		jQuery.sap.clearDelayedCall(this._sColHdrPosTimer);
	}
	var bRtl = this._oInfo.bRtlMode;
	this._sColHdrPosTimer = jQuery.sap.delayedCall(this._bOnAfterRendering ? 0 : 100, this, function() {
		var that = this, $this = this.$();
		var $cols = $this.find(".sapUiTableColHdrScr .sapUiTableCol");
		$this.find(".sapUiTableCtrlCol > th").each(function(iIndex, oElement) {
			var iWidth = jQuery(oElement).width();
			var $col = jQuery($cols.get(iIndex));
			// apply the width of the column (here we need to do a pixel correction)
			if (iIndex === 0 && !jQuery.browser.mozilla && !that._oInfo.bRtlMode) {
				iWidth += 1;
			}
			$col.width(iWidth);
			// the left position is calculated from the sapUiTableCnt element (therefore we need the offset!)
			jQuery.sap.byId($col.attr("id") + "-rsz").css({
				"left": $col.position().left + (bRtl ? -2 : iWidth - 3)
			});
		});
		this._sColHdrPosTimer = undefined;
	});
};

/**
 * disables text selection on the document (disabled fro Dnd)
 */
sap.ui.table.Table.prototype._disableTextSelection = function () {
	jQuery(document.body).
		attr("unselectable", "on").
		css({
			"cursor": "col-resize",
        	"-moz-user-select": "none",
        	"-webkit-user-select": "none",
        	"user-select": "none"
        }).
		bind("selectstart", function() { 
			return false; 
		});
};

/**
 * enables text selection on the document (disabled fro Dnd)
 */
sap.ui.table.Table.prototype._enableTextSelection = function () {
	jQuery(document.body).
		attr("unselectable", "off").
		css({
			"cursor": "",
        	"-moz-user-select": "",
        	"-webkit-user-select": "",
        	"user-select": ""
        }).
		unbind("selectstart");
};


// =============================================================================
// CONTROL EVENT HANDLING
// =============================================================================

sap.ui.table.Table.prototype.onresize = function(oEvent) {
	this._handleResize();
	if (this.isBound("rows")) {
		this.updateAggregation("rows");
	}
};

sap.ui.table.Table.prototype.onvscroll = function(oEvent) {
	this.setFirstVisibleRow(this._getScrollTop(), true);
};

sap.ui.table.Table.prototype.onhscroll = function(oEvent) {

	if (!this._bOnAfterRendering) {
	
		var $this = this.$();
		
		// synchronize the scroll areas
		var iScrollLeft = this._getScrollLeft();
		$this.find(".sapUiTableColHdrScr").scrollLeft(iScrollLeft);
		$this.find(".sapUiTableCtrlScr").scrollLeft(iScrollLeft);
		
		// update the column headers (resize handles)
		this._updateColumnHeader();
	
		// update the bindings
		if (this.isBound("rows")) {
			this.updateAggregation("rows");
		}
		
	}

};

sap.ui.table.Table.prototype._onrowscroll = function(oEvent) {
	var $Row = this.$().find(".sapUiTableRowHdrScr");
	this._oVSb.setScrollPosition($Row.scrollTop());
};

sap.ui.table.Table.prototype._oncolscroll = function(oEvent) {
	var $Col = this.$().find(".sapUiTableColHdrScr");
	this._oHSb.setScrollPosition($Col.scrollLeft());
};


sap.ui.table.Table.prototype.onmousedown = function(oEvent) {
	
	this._bShowMenu = true;

	if (this.getAllowColumnReordering()) {
		var $target = jQuery(oEvent.target);
		var $col = $target.closest(".sapUiTableCol");
		if ($col.length === 1) {
	
			var iIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);
			var oColumn = this.getColumns()[iIndex];
	
			this._sDelayedActionTimer = jQuery.sap.delayedCall(200, this, function() {
			
				this._bShowMenu = false;
				
				this._onColumnMoveStart(oColumn);
			
			});
			
		}
	}

};

sap.ui.table.Table.prototype.onclick = function(oEvent) {
	// clean up the timer
	jQuery.sap.clearDelayedCall(this._sDelayedActionTimer);
	// forward the event
	this._onSelect(oEvent);
};


// =============================================================================
// SELECT HANDLING
// =============================================================================

sap.ui.table.Table.prototype._onSelect = function(oEvent) {

	var $this = this.$();

	// trigger column menu
	var $target = jQuery(oEvent.target);
	
	// column header?
	var $col = $target.closest(".sapUiTableCol");
	if (this._bShowMenu && $col.length === 1) {
		var iIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);
		var oColumn = this.getColumns()[iIndex];
		this._onColumnSelect(oColumn);
		return;
	}
	
	// row header?
	var $row = $target.closest(".sapUiTableRowHdr tr");
	if ($row.length === 1) {
		var iIndex = $this.find(".sapUiTableRowHdr tr").index($row.get(0));
		this._onRowSelect(this.getFirstVisibleRow() + iIndex);
		return;
	}
	
	// select all?
	if ($target.attr("id") === this.getId() + "-selall") {
		if (this._getRowCount() === this.getSelectedIndices().length) {
			this.clearSelection();
		} else {
			this.selectAll();
		}
		return;
	}
	
};


// =============================================================================
// ROW EVENT HANDLING
// =============================================================================

sap.ui.table.Table.prototype._onRowSelect = function(iRowIndex) {
	
	var oSelMode = this.getSelectionMode();
	if (oSelMode !== sap.ui.table.SelectionMode.None) {
		if (oSelMode === sap.ui.table.SelectionMode.Single) {
			if (!this.isIndexSelected(iRowIndex)) {
				this.setSelectedIndex(iRowIndex);
			} else {
				this.clearSelection();
			}
		} else {
			if (!this.isIndexSelected(iRowIndex)) {
				this.addSelectionInterval(iRowIndex, iRowIndex);
			} else {
				this.removeSelectionInterval(iRowIndex, iRowIndex);
			}
		}
	}
		
};


// =============================================================================
// COLUMN EVENT HANDLING
// =============================================================================

sap.ui.table.Table.prototype._onColumnSelect = function(oColumn) {

	// forward the event
	var bExecuteDefault = this.fireEvent("columnSelect", {
		column: oColumn
	}, true /* allow preventDefault() */);
	
	// if the default behavior should be prevented we suppress to open
	// the column menu! 
	if (bExecuteDefault) {
		oColumn._openMenu();
	}
	
};

sap.ui.table.Table.prototype._onColumnMoveStart = function(oColumn) {

	this._disableTextSelection();

	var $col = oColumn.$();
	
	this._$colGhost = $col.clone().removeAttr("id");
	
	$col.css({
		"backgroundColor": "white",
		"backgroundImage": "none",
		"opacity": ".5"
	});

	this._$colGhost.css({
		"position": "absolute",
		"width": "auto",
		"border": "1px solid red",
		"backgroundColor": "white",
		"left": -10000,
		"top": -10000,
		"cursor": "pointer"
	});
	
	this.$().find(".sapUiTableCol").each(function(iIndex, oElement) {
	
		var $col = jQuery(this);
		$col.css({position: "relative"});
		
		$col.data("pos", {
			left: $col.position().left,
			center: $col.position().left + $col.outerWidth() / 2,
			right:  $col.position().left + $col.outerWidth()
		});
	
	});
	
	this._$colGhost.appendTo(document.body);

	jQuery(document.body).
		mousemove(jQuery.proxy(this._onColumnMove, this)).
		mouseup(jQuery.proxy(this._onColumnMoved, this));
	
};

sap.ui.table.Table.prototype._onColumnMove = function(oEvent) {
	
	var $this = this.$();
	var bRtl = this._oInfo.bRtlMode;
	var iRelX = oEvent.pageX - $this.offset().left;
	var iDnDColIndex = parseInt(this._$colGhost.attr("data-sap-ui-colindex"), 10);
	var $DnDCol = this.getColumns()[iDnDColIndex].$();
	
	// find out the new col position
	var iOldColPos = this._iNewColPos;
	this._iNewColPos = iDnDColIndex;
	var that = this;
	$this.find(".sapUiTableCol").each(function(iIndex, oCol) {
	
		var $col = jQuery(oCol);
		var iColIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);
		
		if ($col.get(0) !== $DnDCol.get(0)) {
		
			var oPos = $col.data("pos");
		
			var bBefore = iRelX >= oPos.left && iRelX <= oPos.center;
			var bAfter = iRelX >= oPos.center && iRelX <= oPos.right;
			
			if (!bRtl) {
				that._iNewColPos = bBefore ? iColIndex : bAfter ? iColIndex + 1 : that._iNewColPos;
			} else {
				that._iNewColPos = bAfter ? iColIndex : bBefore ? iColIndex + 1 : that._iNewColPos;
			}
			
			if ((bBefore || bAfter) && iColIndex > iDnDColIndex) {
				that._iNewColPos--;
			}
			
		} 
			
	}); 
	
	// position has been changed => reorder
	if (iOldColPos !== this._iNewColPos) {
	
		for (var i = Math.min(iOldColPos, this._iNewColPos), l = Math.max(iOldColPos, this._iNewColPos); i <= l; i++) {
			if (i !== iDnDColIndex) {
				this.getColumns()[i].$().stop(true, true).animate({left: "0px"});
			}
		}
		
		var iOffsetLeft = 0;
		if (this._iNewColPos < iDnDColIndex) {
			for (var i = this._iNewColPos; i < iDnDColIndex; i++) {
				var $col = this.getColumns()[i].$()
				iOffsetLeft -= $col.outerWidth();
				$col.stop(true, true).animate({left: $DnDCol.outerWidth() * (bRtl ? -1 : 1) + "px"});
			}
		} else {
			for (var i = iDnDColIndex + 1, l = this._iNewColPos + 1; i < l; i++) {
				var $col = this.getColumns()[i].$()
				iOffsetLeft += $col.outerWidth();
				$col.stop(true, true).animate({left: $DnDCol.outerWidth() * (bRtl ? 1 : -1) + "px"});
			}
		}
		$DnDCol.stop(true, true).animate({left: iOffsetLeft * (bRtl ? -1 : 1) + "px"});
		
	}
	
	this._$colGhost.css({
		"left": oEvent.pageX - 1,
		"top": oEvent.pageY - 1
	});
	
};

sap.ui.table.Table.prototype._onColumnMoved = function(oEvent) {
	
	var iDnDColIndex = parseInt(this._$colGhost.attr("data-sap-ui-colindex"), 10);
	var oDnDCol = this.getColumns()[iDnDColIndex];
	
	jQuery(document.body).
		unbind("mousemove", this._onColumnMove).
		unbind("mouseup", this._onColumnMoved);
	
	this._$colGhost.remove();
	this._$colGhost = undefined;
	
	this._enableTextSelection();
		
	if (this._iNewColPos !== undefined && this._iNewColPos !== iDnDColIndex) {
		this.removeColumn(oDnDCol);
		this.insertColumn(oDnDCol, this._iNewColPos);
		this._iNewColPos = undefined;
		this._createRows();
	} else {
		oDnDCol.$().css({
			"backgroundColor": "",
			"backgroundImage": "",
			"opacity": ""
		});
	}

};

sap.ui.table.Table.prototype._onColumnResizeStart = function(oEvent) {

	this._disableTextSelection();
	this._$colResize = jQuery(oEvent.target).addClass("sapUiTableColRszActive");
	
	jQuery(document.body).
		mousemove(jQuery.proxy(this._onColumnResize, this)).
		mouseup(jQuery.proxy(this._onColumnResized, this));
	
};

sap.ui.table.Table.prototype._onColumnResize = function(oEvent) {
	
	var $this = this.$();
	
	var bRtl = this._oInfo.bRtlMode;
	var iColIndex = parseInt(this._$colResize.attr("data-sap-ui-colindex"), 10);
	var oColumn = this.getColumns()[iColIndex];
	var $col = oColumn.$();
	
	// find the total left offset from the document (required for pageX info)
	var iOffsetLeft = $this.find(".sapUiTableCnt").offset().left;
	
	// relative left position within the table scroll container
	var iRelLeft = oEvent.pageX - iOffsetLeft;
	
	// get the left position of the column to calculate the new width
	// relative to the parent container (sapUiTableCnt)!
	var iColLeft = $col.position().left;
	
	// calculate the new width
	var iPos = iRelLeft - iColLeft;
	
	// check the boundaries for the column width
	var iWidth = bRtl ? $col.outerWidth() - iPos : iPos;
	iWidth = Math.max(iWidth, /* oColumn.getMinWidth() || */ this._iColMinWidth);
	//iWidth = Math.min(iWidth, oColumn.getMaxWidth() || iWidth);
	
	// calculate and set the position of the resize handle
	var iRszLeft = iColLeft + (bRtl ? $col.outerWidth() - iWidth : iWidth);
	iRszLeft -= (this._$colResize.width() - 2) / 2;
	this._$colResize.css("left", iRszLeft);
	
	// store the width of the column
	oColumn.setProperty("width", iWidth + "px", true);
		
};

sap.ui.table.Table.prototype._onColumnResized = function(oEvent) {
	
	this._onColumnResize(oEvent);
	
	jQuery(document.body).
		unbind("mousemove", this._onColumnResize).
		unbind("mouseup", this._onColumnResized);
	
	this._$colResize.removeClass("sapUiTableColRszActive");
	this._$colResize = undefined;
	this._enableTextSelection();
		
	this.invalidate();
	
};


// =============================================================================
// SELECTION HANDLING
// =============================================================================

/**
 * updates the visual selection in the HTML markup 
 */
sap.ui.table.Table.prototype._updateSelection = function() {
	var $this = this.$();
	var iFirstRow = this.getFirstVisibleRow();
	var that = this;
	var oResBundle = this._oInfo.oResBundle;
	$this.find(".sapUiTableRowHdr tr").each(function(iIndex, oElement) {
		if (that.isIndexSelected(iFirstRow + iIndex)) {
			jQuery(this).addClass("sapUiTableRowSel").
				attr("title", oResBundle.getText("TBL_ROW_DESELECT")).
				attr("aria-selected", "true");
			jQuery($this.find(".sapUiTableCtrl tr").get(iIndex + 1)).addClass("sapUiTableRowSel");
		} else {
			jQuery(this).removeClass("sapUiTableRowSel").
				attr("title", oResBundle.getText("TBL_ROW_SELECT")).
				attr("aria-selected", "false");
			jQuery($this.find(".sapUiTableCtrl tr").get(iIndex + 1)).removeClass("sapUiTableRowSel");
		}
	});
};


/**
 * handles and delegates the selection events
 */
sap.ui.table.Table.prototype._onSelectionChange = function(oEvent) {
	if (this._oSelection) {
		var iLeadIndex = this._oSelection.getLeadSelectedIndex();
		this.fireRowSelectionChange({
			rowIndex: iLeadIndex,
			rowContext: this.getContextByIndex(iLeadIndex),
			rowIndices: this._oSelection.getSelectedIndices()
		});
	}
}; 
 

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getContextByIndex = function(iIndex) {
	// TODO: ODataListBinding needs to make sure to prevent loading multiple times
	return this.isBound("rows") ? this.getBinding("rows").getContexts(iIndex, 1)[0] : undefined;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getSelectedIndex = function() {
	return this._oSelection.getLeadSelectedIndex();
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectedIndex = function(iIndex) {
	this._oSelection.setSelectionInterval(iIndex, iIndex);
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.clearSelection = function() {
	this._oSelection.clearSelection();
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.selectAll = function() {
	if (this.isBound("rows")) {
		this._oSelection.setSelectionInterval(0, this.getBinding("rows").getLength() - 1);
	}
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getSelectedIndices = function() {
	return this._oSelection.getSelectedIndices();
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.addSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.addSelectionInterval(iIndexFrom, iIndexTo);
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.setSelectionInterval(iIndexFrom, iIndexTo);
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.removeSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.removeSelectionInterval(iIndexFrom, iIndexTo);
	this._updateSelection();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.isIndexSelected = function(iIndex) {
	return this._oSelection.isSelectedIndex(iIndex);
};


// =============================================================================
// KEYBOARD HANDLING
// =============================================================================

sap.ui.table.Table.prototype.onkeypress = function(oEvent) {

	if (oEvent.keyCode == jQuery.sap.KeyCodes.SPACE ||
	    oEvent.keyCode == jQuery.sap.KeyCodes.ENTER) {
	    // handle selection events
		this._onSelect(oEvent);
	} else if (oEvent.keyCode == jQuery.sap.KeyCodes.F2) {
		jQuery.sap.log.info(this.getId() + ": F2");
	}

};

sap.ui.table.Table.prototype.onkeydown = function(oEvent) {
	if (jQuery(oEvent.target).closest(".sapUiTableCnt").length > 0) {
		if (oEvent.keyCode == jQuery.sap.KeyCodes.TAB) {
			oEvent.preventDefault();
		} else {
			this._handleNavigation(oEvent);
		}
	}
};

sap.ui.table.Table.prototype.onsappageup = function(oEvent) {
	this.setFirstVisibleRow(this.getFirstVisibleRow() - this.getVisibleRowCount())
};

sap.ui.table.Table.prototype.onsappagedown = function(oEvent) {
	this.setFirstVisibleRow(this.getFirstVisibleRow() + this.getVisibleRowCount())
};



sap.ui.table.Table.prototype._handleNavigation = function(oEvent) {

	// row header
	var $this = this.$(), $target = jQuery(oEvent.target); 
	var $row = $target.closest(".sapUiTableRowHdr tr");
	if ($row.length === 1) {
		
		var $rowHdrs = $this.find(".sapUiTableRowHdr tr");
		var iIndex = $rowHdrs.index($row.get(0));
		
		if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_UP) {
			iIndex -= 1;
		} else if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_DOWN) {
			iIndex += 1;
		} else if (oEvent.keyCode == jQuery.sap.KeyCodes.HOME && !!oEvent.metaKey) {
			this.setFirstVisibleRow(0);
			iIndex = 0;
		} else if (oEvent.keyCode == jQuery.sap.KeyCodes.END && !!oEvent.metaKey) {
			this.setFirstVisibleRow(this._oVSb.getSteps());
			iIndex = $rowHdrs.length - 1;
		}
		
		if (iIndex === -1) {
			if (this.getFirstVisibleRow() > 0) {
				this.setFirstVisibleRow(this.getFirstVisibleRow() - 1);
			}
		} else if (iIndex === this.getVisibleRowCount()) {
			if (this.getFirstVisibleRow() < this._oVSb.getSteps()) {
				this.setFirstVisibleRow(this.getFirstVisibleRow() + 1);
			}
		} else {
			jQuery($rowHdrs.get(iIndex)).find("td").focus();
		}
		
	}
	
	// TODO: table control
	/*
	var $this = this.$(), $target = jQuery(oEvent.target); 
	var $td = $target.closest(".sapUiTableCtrl td[role=gridcell]");
	if ($td.length === 1) {
	
		var $tr = $td.parent();
		
		var rowIndex = $tr.parent().children().index($tr);
		var colIndex = $tr.children().index($td);

		jQuery.sap.log.warning(rowIndex + "/" + colIndex);

		// TODO: RTL
		if (oEvent.keyCode == jQuery.sap.KeyCodes.TAB) {
			oEvent.preventDefault();
		} else if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_UP) {
			rowIndex++;
		} else if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_DOWN) {
			rowIndex--;
		} else if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_LEFT) {
			colIndex--;
		} else if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_RIGHT) {
			colIndex++;
		}

		$tr.parent().find("tr:nth-child(" + rowIndex + ") td:nth-child(" + (colIndex + 1) + ")").get(0).focus();
		
	}
*/

}; 
