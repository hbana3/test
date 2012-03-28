/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.DataSet.
jQuery.sap.declare("sap.ui.ux3.DataSet");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new DataSet.
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
 * <li>selectedView : int</li>
 * <li>filterValue : string</li>
 * <li>enableSorting : boolean</li>
 * <li>enableFiltering : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>items : sap.ui.ux3.DataSetItem</li>
 * <li>views : sap.ui.ux3.DataSetView</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>selectionChanged : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>filter : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>sort : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * DataSet
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.DataSet = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.DataSet.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.DataSet. 
 * Resulting metadata can be obtained via sap.ui.ux3.DataSet.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.DataSet", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getSelectedView", "setSelectedView", "getFilterValue", "setFilterValue", "getEnableSorting", "setEnableSorting", "getEnableFiltering", "setEnableFiltering", 
    // aggregations
    "getItems", "insertItem", "addItem", "removeItem", "removeAllItems", "indexOfItem", "destroyItems", "bindItems", "unbindItems", "getViews", "insertView", "addView", "removeView", "removeAllViews", "indexOfView", "destroyViews", 
    // associations
    
    // events
    "attachSelectionChanged", "detachSelectionChanged", "attachFilter", "detachFilter", "attachSort", "detachSort", 
    // methods
    "setLeadSelection", "getLeadSelection"
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "selectedView" : {name : "selectedView", type : "int", group : "Misc", defaultValue : 0},
    "filterValue" : {name : "filterValue", type : "string", group : "Misc", defaultValue : null},
    "enableSorting" : {name : "enableSorting", type : "boolean", group : "Misc", defaultValue : true},
    "enableFiltering" : {name : "enableFiltering", type : "boolean", group : "Misc", defaultValue : true}
  },
  
  aggregations : {
    "items" : {name : "items", type : "sap.ui.ux3.DataSetItem", multiple : true, singularName : "item"}, 
    "views" : {name : "views", type : "sap.ui.ux3.DataSetView", multiple : true, singularName : "view"}
  },
  associations : {},
  events : {
    "selectionChanged" : "selectionChanged", 
    "filter" : "filter", 
    "sort" : "sort"
  }

});	

sap.ui.ux3.DataSet.M_EVENTS = {'selectionChanged':'selectionChanged','filter':'filter','sort':'sort'};


/**
 * Getter for property <code>selectedView</code>.
 * Index of the selected view
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>selectedView</code>
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getSelectedView = function() {
	return this.getProperty("selectedView");
};

/**
 * Setter for property <code>selectedView</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iSelectedView  new value for property <code>selectedView</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.setSelectedView = function(iSelectedView) {
	this.setProperty("selectedView", iSelectedView);
	return this;
};


/**
 * Getter for property <code>filterValue</code>.
 * Filter Value for the DataSet
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getFilterValue = function() {
	return this.getProperty("filterValue");
};

/**
 * Setter for property <code>filterValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterValue  new value for property <code>filterValue</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.setFilterValue = function(sFilterValue) {
	this.setProperty("filterValue", sFilterValue);
	return this;
};


/**
 * Getter for property <code>enableSorting</code>.
 * Enable sorting
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableSorting</code>
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getEnableSorting = function() {
	return this.getProperty("enableSorting");
};

/**
 * Setter for property <code>enableSorting</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableSorting  new value for property <code>enableSorting</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.setEnableSorting = function(bEnableSorting) {
	this.setProperty("enableSorting", bEnableSorting);
	return this;
};


/**
 * Getter for property <code>enableFiltering</code>.
 * Enable filtering
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableFiltering</code>
 * @public
 * 
 */
sap.ui.ux3.DataSet.prototype.getEnableFiltering = function() {
	return this.getProperty("enableFiltering");
};

/**
 * Setter for property <code>enableFiltering</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableFiltering  new value for property <code>enableFiltering</code>
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.setEnableFiltering = function(bEnableFiltering) {
	this.setProperty("enableFiltering", bEnableFiltering);
	return this;
};

	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of DataSetItems
 * 
 * @return {sap.ui.ux3.DataSetItem[]}
 * @public
 */
sap.ui.ux3.DataSet.prototype.getItems = function() {
	return this.getAggregation("items", []);
};


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	return this;
};

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.DataSet.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	return this;
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.ux3.DataSetItem} vItem the item to remove or its index or id
 * @return {sap.ui.ux3.DataSetItem} the removed item or null
 * @public
 */
sap.ui.ux3.DataSet.prototype.removeItem = function(vItem) {
	return this.removeAggregation("items", vItem);
};

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.DataSetItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.DataSet.prototype.removeAllItems = function() {
	return this.removeAllAggregation("items");
};

/**
 * Checks for the provided <code>sap.ui.ux3.DataSetItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.DataSetItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.DataSet.prototype.indexOfItem = function(oItem) {
	return this.indexOfAggregation("items", oItem);
};
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.destroyItems = function() {
	this.destroyAggregation("items");
	return this;
};


/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.bindItems = function(sPath, oTemplate, oSorter, aFilters) {
	this.bindAggregation("items", sPath, oTemplate, oSorter, aFilters);
	return this;
};

/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.unbindItems = function() {
	this.unbindAggregation("items");
	return this;
};

	
/**
 * Getter for aggregation <code>views</code>.<br/>
 * views
 * 
 * @return {sap.ui.ux3.DataSetView[]}
 * @public
 */
sap.ui.ux3.DataSet.prototype.getViews = function() {
	return this.getAggregation("views", []);
};


/**
 * Inserts a view into the aggregation named <code>views</code>.
 *
 * @param {sap.ui.ux3.DataSetView}
 *          oView the view to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the view should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the view is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the view is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.insertView = function(oView, iIndex) {
	this.insertAggregation("views", oView, iIndex);
	return this;
};

/**
 * Adds some view <code>oView</code> 
 * to the aggregation named <code>views</code>.
 *
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.DataSet.prototype.addView = function(oView) {
	this.addAggregation("views", oView);
	return this;
};

/**
 * Removes an view from the aggregation named <code>views</code>.
 *
 * @param {int | string | sap.ui.ux3.DataSetView} vView the view to remove or its index or id
 * @return {sap.ui.ux3.DataSetView} the removed view or null
 * @public
 */
sap.ui.ux3.DataSet.prototype.removeView = function(vView) {
	return this.removeAggregation("views", vView);
};

/**
 * Removes all the controls in the aggregation named <code>views</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.DataSetView[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.DataSet.prototype.removeAllViews = function() {
	return this.removeAllAggregation("views");
};

/**
 * Checks for the provided <code>sap.ui.ux3.DataSetView</code> in the aggregation named <code>views</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.DataSetView}
 *            oView the view whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.DataSet.prototype.indexOfView = function(oView) {
	return this.indexOfAggregation("views", oView);
};
	

/**
 * Destroys all the views in the aggregation 
 * named <code>views</code>.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.destroyViews = function() {
	this.destroyAggregation("views");
	return this;
};


/**
 * selection Changed 
 *
 * @name sap.ui.ux3.DataSet#selectionChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.oldLeadSelectedIndex Old lead selected index
 * @param {int} oControlEvent.getParameters.newLeadSelectedIndex New lead selected index
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 * selection Changed 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.attachSelectionChanged = function(oData, fnFunction, oListener) {
	this.attachEvent("selectionChanged", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.detachSelectionChanged = function(fnFunction, oListener) {
	this.detachEvent("selectionChanged", fnFunction, oListener);
	return this;	
};

/**
 * Fire event selectionChanged to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oldLeadSelectedIndex' of type <code>int</code> Old lead selected index</li>
 * <li>'newLeadSelectedIndex' of type <code>int</code> New lead selected index</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.DataSet.prototype.fireSelectionChanged = function(mArguments) {
	this.fireEvent("selectionChanged", mArguments);
	return this;
};


/**
 * Event fired when filtering is triggered. 
 *
 * @name sap.ui.ux3.DataSet#filter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.filterValue Filter string 
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'filter' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 * Event fired when filtering is triggered. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.attachFilter = function(oData, fnFunction, oListener) {
	this.attachEvent("filter", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'filter' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.detachFilter = function(fnFunction, oListener) {
	this.detachEvent("filter", fnFunction, oListener);
	return this;	
};

/**
 * Fire event filter to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'filterValue' of type <code>string</code> Filter string </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.DataSet.prototype.fireFilter = function(mArguments) {
	this.fireEvent("filter", mArguments);
	return this;
};


/**
 * Event fired when sorting is triggered. 
 *
 * @name sap.ui.ux3.DataSet#sort
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'sort' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 * Event fired when sorting is triggered. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.attachSort = function(oData, fnFunction, oListener) {
	this.attachEvent("sort", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'sort' event of this <code>sap.ui.ux3.DataSet</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSet.prototype.detachSort = function(fnFunction, oListener) {
	this.detachEvent("sort", fnFunction, oListener);
	return this;	
};

/**
 * Fire event sort to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSet} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.DataSet.prototype.fireSort = function(mArguments) {
	this.fireEvent("sort", mArguments);
	return this;
};


/**
 * Set LeadSelection index
 *
 * @name sap.ui.ux3.DataSet.prototype.setLeadSelection
 * @function
 * @param {int} 
 *         iIIndex
 *         

 * @type void
 * @public
 */


/**
 * Get LeadSelection index
 *
 * @name sap.ui.ux3.DataSet.prototype.getLeadSelection
 * @function

 * @type int
 * @public
 */


// Start of sap/ui/ux3/DataSet.js
///**
//* This file defines behavior for the DataSet control, 
//*/

sap.ui.ux3.DataSet.prototype.init = function() {
	//each DS needs a selectionModel for its items
	jQuery.sap.require("sap.ui.model.SelectionModel");
	this.selectionModel = new sap.ui.model.SelectionModel(sap.ui.model.SelectionModel.SINGLE_SELECTION);
	this.prepareToolbar();
};

sap.ui.ux3.DataSet.prototype.exit = function() {
	this._oFilterButton.destroy();
	this._oFilterString.destroy();
	this._oSortButton.destroy();
}

sap.ui.ux3.DataSet.prototype.prepareToolbar = function() {
	// create some filter button + some sort button for testing
	var that = this;
	this._oFilterButton = new sap.ui.commons.Button({
		id : this.getId()+"-filter",
		text : "filter"
	});
	this._oSortButton = new sap.ui.commons.Button({
		id : this.getId()+"-sort",
		text : "sort"
	});
	this._oFilterButton.attachPress(this.filter, this);
	this._oSortButton.attachPress(this.sort, this);
	this._oFilterString = new sap.ui.commons.TextField({id : this.getId()+"-filterValue"});
	this._oFilterString.attachChange(function(oEvent)
			{
		that.setFilterValue(oEvent.getParameters().newValue);
			});
}

/**
 * Press handler for the view selection buttons
 * 
 * @param {sap.ui.base.Event} oEvent Press event 	
 * @private
*/
sap.ui.ux3.DataSet.prototype.press = function(oEvent,iSelectedViewIndex) {
	var but = oEvent.oSource,
		viewIndex = but._viewIndex;
	this._oldRendering = this.getViews()[this.getSelectedView()];
	this._oldRendering.exitView();
	this.setSelectedView(viewIndex);
}

/**
 * Fire filter event
 *  	
 * @private
*/
sap.ui.ux3.DataSet.prototype.filter = function() {
	this.fireFilter({
					filterValue : this.getFilterValue()
				});
}
/**
 * Fire sort event
 *  	
 * @private
*/
sap.ui.ux3.DataSet.prototype.sort = function() {
	this.fireSort();
}

/**
 * Selection handler for the DataSetItem selection event.
 * 
 * @param {string} sItemId Id of the selected DataSetItem  	
 * @private
*/
sap.ui.ux3.DataSet.prototype.selectItem = function(oEvent) {
	var sItemId = oEvent.getParameters().itemId;
	var oItem = sap.ui.getCore().byId(sItemId);
	var oldSelectedIndex = this.selectionModel.getLeadSelectedIndex();
	if (oldSelectedIndex == oItem._index) {
		this.selectionModel.setLeadSelectedIndex(-1);
	} else {
		this.selectionModel.setLeadSelectedIndex(oItem._index);
	}
	var newSelectedIndex = this.selectionModel.getLeadSelectedIndex();
	this.fireSelectionChanged({
				oldLeadSelectedIndex: oldSelectedIndex,
				newLeadSelectedIndex: newSelectedIndex});
}

/**
 * Prepare rendering: Calls init end exit hooks on the selected view instance. Necessary to keep the view   
 * consistent to the DataSet state.
 *
 * @param {string} sItemId Id of the selected DataSetItem  	
 * @private
*/
sap.ui.ux3.DataSet.prototype.prepareRendering = function() {
	if (this.getViews().length == 0) {
		return;
	}
	if (this.getViews()[this.getSelectedView()].exitView) {
		this.getViews()[this.getSelectedView()].exitView();
	}  
	if (this.getViews()[this.getSelectedView()].initView) {
		this.getViews()[this.getSelectedView()].initView(this.getItems());
	} 
}

/*** Selection Model methods ***/

/**
 * Returns the LeadSelection index
 *
 * @param {string} sItemId Id of the selected DataSetItem  	
 * @return {int} selected index
 * @protected
*/
sap.ui.ux3.DataSet.prototype.getLeadSelection = function() {
	return this.selectionModel.getLeadSelectedIndex();
}
 
/**
 * Set the LeadSelection index
 *
 * @param {int} iIndex set LeadSelection index   	
 * @protected
*/
sap.ui.ux3.DataSet.prototype.setLeadSelection = function(iIndex) {
	this.selectionModel.setLeadSelectedIndex(iIndex);
}

/**
 * Returns true if iIndex is selected
 *
 * @param {int} iIndex index of selection  	
 * @return {boolean} index selected true/false
 * @protected
*/
sap.ui.ux3.DataSet.prototype.isSelectedIndex = function(iIndex) {
	return (this.selectionModel.getLeadSelectedIndex() == iIndex);
};

/**
 * Returns id of selected Item from given index
 *
 * @param {int} iIndex index of selection  	
 * @return {string} id of selected item
 * @protected
*/
sap.ui.ux3.DataSet.prototype.getSelectedItemId = function(iIndex) {
	 return this.getItems()[iIndex].getId();
}

/**
 * Creates a view switch button
 *
 * @param {object} oView View
 * @param {int} iIndex Index of view
 * @return {object} viewSwitch instance
 * @protected
*/
sap.ui.ux3.DataSet.prototype.createViewSwitch = function(oView, iIndex) {
	 var that = this, oViewSwitch;
	 
	 if (oView.getIcon()) {
		 oViewSwitch = new sap.ui.commons.Image({
			 id : this.getId()+"-view"+oView.getId(),
			 src:oView.getIcon()
		 });
	 } else if (oView.getName()) {
		 oViewSwitch = new sap.ui.commons.Button({
			 id : this.getId()+"-view"+oView.getId(),
			 text : oView.getName()
		 });
	 } else {
		 oViewSwitch = new sap.ui.commons.Button({
			 id : this.getId()+"-view"+oView.getId(),
			 text : oView.getId()
		 });
	 }
	 oViewSwitch._viewIndex = iIndex;
	 oViewSwitch.attachPress(function(oEvent){that.press(oEvent,iIndex);}, that);
	 return oViewSwitch;
}

/**
 * Rerendering of the Toolbar
 *
 * @protected
*/
sap.ui.ux3.DataSet.prototype._rerenderToolbar = function() {
	var $content = jQuery.sap.byId(this.getId() + "-toolbar");
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.DataSetRenderer.renderToolbar(rm, this);
		rm.flush($content[0]);
		rm.destroy();
	}
};

/*** override API methods ***/

sap.ui.ux3.DataSet.prototype.removeItem = function(oItem) {
	var result = this.removeAggregation("items", oItem);
	oItem.detachSelected(this.selectItem,this);
	return result;
}

sap.ui.ux3.DataSet.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	oItem.attachSelected(this.selectItem,this);
	oItem._index = this.getItems().length - 1;
	return this;
}

sap.ui.ux3.DataSet.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	oItem.attachSelected(this.selectItem,this);
	oItem._index = iIndex;
	return this;
}

sap.ui.ux3.DataSet.prototype.setFilterValue = function(sFilterValue) {
	this.setProperty("filterValue",sFilterValue, true);
	return this;
}

sap.ui.ux3.DataSet.prototype.getFilterValue = function() {
	return this.getProperty("filterValue");
}

sap.ui.ux3.DataSet.prototype.insertView = function(oView, iIndex) {
	var oViewSwitch = this.createViewSwitch(oView,iIndex);
	this.insertAggregation("views", oView, iIndex);
	this.insertAggregation("_viewSwitches", oViewSwitch, iIndex, true);
	return this;
};

sap.ui.ux3.DataSet.prototype.addView = function(oView) {
	var iIndex = this.getViews().length, 
		oViewSwitch = this.createViewSwitch(oView,iIndex);
	this.addAggregation("views", oView);
	this.addAggregation("_viewSwitches", oViewSwitch, true);
	return this;
};

sap.ui.ux3.DataSet.prototype.removeView = function(vView) {
	var oViewId; 
	if (typeof(vView) == "string") { // ID of the element is given
		oViewId = this.getId()+"-view"+vView;
		this.removeAggregation("_viewSwitches", oViewId, true).destroy();
	}
	else if (typeof(vView) == "object") { // the element itself is given or has just been retrieved
		oViewId = this.getId()+"-view"+vView.getId();
		this.removeAggregation("_viewSwitches", oViewId, true).destroy();
	}
	else if (typeof(vView) == "number") { // "vElement" is the index now
		this.removeAggregation("_viewSwitches", vView, true).destroy();
	}
	return this.removeAggregation("views", vView);
};

sap.ui.ux3.DataSet.prototype.destroyViews = function() {
	this.destroyAggregation("_viewSwitches");
	this.destroyAggregation("views");
	return this;
};

sap.ui.ux3.DataSet.prototype.removeAllViews = function() {
	this.removeAllAggregation("_viewSwitches");
	return this.removeAllAggregation("views");
};

sap.ui.ux3.DataSet.prototype.setEnableSorting = function(bEnableSorting) {
	//suppress rerendering ofDataSet. Rerender only the toolbar.
	this.setProperty("enableSorting", bEnableSorting, true);
	this._rerenderToolbar();
	return this;
};

sap.ui.ux3.DataSet.prototype.setEnableFiltering = function(bEnableFiltering) {
	//suppress rerendering ofDataSet. Rerender only the toolbar.
	this.setProperty("enableFiltering", bEnableFiltering, true);
	this._rerenderToolbar();
	return this;
};