/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RadioButtonGroup.
jQuery.sap.declare("sap.ui.commons.RadioButtonGroup");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new RadioButtonGroup.
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
 * <li>columns : int</li>
 * <li>visible : boolean</li>
 * <li>editable : boolean</li>
 * <li>valueState : sap.ui.core.ValueState</li>
 * <li>selectedIndex : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>items : sap.ui.core.Item</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>select : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * a group of RadioButtons to hande as one UI element.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.RadioButtonGroup = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.RadioButtonGroup.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.RadioButtonGroup. 
 * Resulting metadata can be obtained via sap.ui.commons.RadioButtonGroup.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.RadioButtonGroup", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getWidth", "setWidth", "getColumns", "setColumns", "getVisible", "setVisible", "getEditable", "setEditable", "getValueState", "setValueState", "getSelectedIndex", "setSelectedIndex", 
    // aggregations
    "getItems", "insertItem", "addItem", "removeItem", "removeAllItems", "indexOfItem", "destroyItems", "bindItems", "unbindItems", 
    // associations
    
    // events
    "attachSelect", "detachSelect", 
    // methods
    "getSelectedItem", "setSelectedItem"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "columns" : {name : "columns", type : "int", group : "Appearance", defaultValue : 1},
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true},
    "editable" : {name : "editable", type : "boolean", group : "Behavior", defaultValue : true},
    "valueState" : {name : "valueState", type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
    "selectedIndex" : {name : "selectedIndex", type : "int", group : "Data", defaultValue : 0}
  },
  defaultAggregation : "items",
  aggregations : {
    "items" : {name : "items", type : "sap.ui.core.Item", multiple : true, singularName : "item"}
  },
  associations : {},
  events : {
    "select" : "select"
  }

});	

sap.ui.commons.RadioButtonGroup.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>width</code>.
 * Width of the RadioButtonGroup.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>columns</code>.
 * Number of RadioButtons displayed in one Line.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>columns</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getColumns = function() {
	return this.getProperty("columns");
};

/**
 * Setter for property <code>columns</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iColumns  new value for property <code>columns</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setColumns = function(iColumns) {
	this.setProperty("columns", iColumns);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Visibility of Group
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user can choose a radio button.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getEditable = function() {
	return this.getProperty("editable");
};

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setEditable = function(bEditable) {
	this.setProperty("editable", bEditable);
	return this;
};


/**
 * Getter for property <code>valueState</code>.
 * The value state to be displayed.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getValueState = function() {
	return this.getProperty("valueState");
};

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setValueState = function(oValueState) {
	this.setProperty("valueState", oValueState);
	return this;
};


/**
 * Getter for property <code>selectedIndex</code>.
 * Index of the selected/checked RadioButton.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * 
 */
sap.ui.commons.RadioButtonGroup.prototype.getSelectedIndex = function() {
	return this.getProperty("selectedIndex");
};

/**
 * Setter for property <code>selectedIndex</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iSelectedIndex  new value for property <code>selectedIndex</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setSelectedIndex = function(iSelectedIndex) {
	this.setProperty("selectedIndex", iSelectedIndex);
	return this;
};

	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * RadioButtons of this RadioButtonGroup
 * 
 * @return {sap.ui.core.Item[]}
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.getItems = function() {
	return this.getAggregation("items", []);
};


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	return this;
};

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.RadioButtonGroup.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	return this;
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.removeItem = function(vItem) {
	return this.removeAggregation("items", vItem);
};

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.removeAllItems = function() {
	return this.removeAllAggregation("items");
};

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.indexOfItem = function(oItem) {
	return this.indexOfAggregation("items", oItem);
};
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.destroyItems = function() {
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
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.bindItems = function(sPath, oTemplate, oSorter, aFilters) {
	this.bindAggregation("items", sPath, oTemplate, oSorter, aFilters);
	return this;
};

/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.unbindItems = function() {
	this.unbindAggregation("items");
	return this;
};


/**
 * Event is fired when selection is changed by user interaction. 
 *
 * @name sap.ui.commons.RadioButtonGroup#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.selectedIndex Index of the selected RadioButton.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.RadioButtonGroup</code>.<br/>
 * Event is fired when selection is changed by user interaction. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.attachSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("select", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.RadioButtonGroup</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.detachSelect = function(fnFunction, oListener) {
	this.detachEvent("select", fnFunction, oListener);
	return this;	
};

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedIndex' of type <code>int</code> Index of the selected RadioButton.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.RadioButtonGroup.prototype.fireSelect = function(mArguments) {
	this.fireEvent("select", mArguments);
	return this;
};


/**
 * Returns selected item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned.
 *
 * @name sap.ui.commons.RadioButtonGroup.prototype.getSelectedItem
 * @function

 * @type sap.ui.core.Item
 * @public
 */


/**
 * Sets the item as seleced and removs the selection from the old one.
 *
 * @name sap.ui.commons.RadioButtonGroup.prototype.setSelectedItem
 * @function
 * @param {sap.ui.core.Item} 
 *         oItem
 *         Selected item.

 * @type void
 * @public
 */


// Start of sap/ui/commons/RadioButtonGroup.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

sap.ui.commons.RadioButtonGroup.prototype.exit = function() {
	this.destroyItems(); // or Element.exit should call the typed destroyXYZ methods?
	// sap.ui.core.Control.prototype.exit.apply(this); // does not exist!
};

sap.ui.commons.RadioButtonGroup.prototype.onBeforeRendering = function() {
	if(this.getSelectedIndex() > this.getItems().length){
		// SelectedIndex is > than number of items -> select the first one
		this.setSelectedIndex(0);
	};
};

sap.ui.commons.RadioButtonGroup.prototype.onAfterRendering = function() {

	this.initItemNavigation();

	// update ARIA information of RadioButtons
	for(var i = 0; i < this.aRBs.length; i++){
		jQuery.sap.byId(this.aRBs[i].getId()).attr("aria-posinset", i+1).attr("aria-setsize", this.aRBs.length);
	}
};

/**
 * initialize ItemNavigation. Transfer RadioButtons to ItemNavigation.
 * TabIndexes are set by ItemNavigation
 * @private
*/
sap.ui.commons.RadioButtonGroup.prototype.initItemNavigation = function(){

	// Collect items for ItemNavigation
	var	aDomRefs = [];
	this._aActiveItems = [];
	var aActiveItems = this._aActiveItems;
	for (var i=0; i < this.aRBs.length; i++) {
		aActiveItems[aDomRefs.length] = i;
		aDomRefs.push(jQuery.sap.domById(this.aRBs[i].getId()));
	}

	// init ItemNavigation
	if (!this.oItemNavigation) {
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, this._handleAfterFocus, this);
		this.addDelegate(this.oItemNavigation);
	}
	this.oItemNavigation.setRootDomRef(this.getDomRef());
	this.oItemNavigation.setItemDomRefs(aDomRefs);
	this.oItemNavigation.setCycling(true);
	this.oItemNavigation.setColumns(this.getColumns());
	this.oItemNavigation.setSelectedIndex(this.getSelectedIndex());
	this.oItemNavigation.setFocusedIndex(this.getSelectedIndex());
};

/**
 * Set selected RadioButton via Index
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.setSelectedIndex = function(iSelectedIndex) {

	var iIndexOld = this.getSelectedIndex();

	this.setProperty("selectedIndex", iSelectedIndex, true); // no re-rendering

	// deselect old RadioButton
	if( !isNaN(iIndexOld) && this.aRBs && this.aRBs[iIndexOld]){
		this.aRBs[iIndexOld].setSelected(false);
	}

	// select new one
	if(this.aRBs && this.aRBs[iSelectedIndex]){
		this.aRBs[iSelectedIndex].setSelected(true);
	}

	if(this.oItemNavigation){
		this.oItemNavigation.setSelectedIndex(iSelectedIndex);
		this.oItemNavigation.setFocusedIndex(iSelectedIndex);
	}

};

/**
 * Set selected RadioButton via Item
 * @param {sap.ui.core.Item} oSelectedItem the item to be selected.
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.setSelectedItem = function(iSelectedItem) {

	for (var i = 0; i < this.getItems().length; i++){
		if(iSelectedItem.getId() == this.getItems()[i].getId()){
			this.setSelectedIndex(i);
			break;
		}
	}
};

/**
 * Get item of selected RadioButton
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.getSelectedItem = function() {

	return this.getItems()[this.getSelectedIndex()];

};

/**
 * Adds a new Item
 * If an item is added a new RadioButton must be added
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.addItem = function(oItem) {

	this.myChange = true;
	this.addAggregation("items", oItem);
	this.myChange = undefined;

	if(this.getSelectedIndex() === undefined){
		// if not defined -> select first one
		this.setSelectedIndex(0);
	}
	if(!this.aRBs){
		this.aRBs = [];
	}

	var iIndex = this.aRBs.length;

	this.aRBs[iIndex] = this.createRadioButton(oItem, iIndex);

	return this;
};

/**
 * Inserts a new Item
 * If an item is inserted a new RadioButton must be inserted
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.insertItem = function(oItem, iIndex) {

	this.myChange = true;
	this.insertAggregation("items", oItem, iIndex);
	this.myChange = undefined;

	if(!this.aRBs){
		this.aRBs = [];
	}

	var iLength = this.aRBs.length;

	if(this.getSelectedIndex() === undefined || iLength == 0){
		// if not defined -> select first one
		this.setSelectedIndex(0);
	}else if(this.getSelectedIndex() >= iIndex){
		// If inserted before selected one, move selection index (only change parameter, not RadioButton)
		this.setProperty("selectedIndex", this.getSelectedIndex() + 1, true); // no re-rendering
	}

	if( iIndex >= iLength){
		this.aRBs[iIndex] = this.createRadioButton(oItem, iIndex);
	}else{
		// Insert RadioButton: loop backwards over Array and shift everything
		for (var i = (iLength); i > iIndex; i--) {
			this.aRBs[i] = this.aRBs[i-1];
			if((i-1) == iIndex){
				this.aRBs[i-1] = this.createRadioButton(oItem, iIndex);
			}
		}
	}

	return this;

};

/**
 * create RadioButton for an item
 * @private
*/
sap.ui.commons.RadioButtonGroup.prototype.createRadioButton = function(oItem, iIndex){

	if(this.iIDCount == undefined){
		this.iIDCount = 0;
	}else{
		this.iIDCount++;
	}

	var oRadioButton = new sap.ui.commons.RadioButton(this.getId() + "-" + this.iIDCount);
	oRadioButton.setText(oItem.getText());
	oRadioButton.setTooltip(oItem.getTooltip());
	oRadioButton.setEnabled(oItem.getEnabled());
	oRadioButton.setKey(oItem.getKey());
	oRadioButton.setTextDirection(oItem.getTextDirection());
	oRadioButton.setEditable(this.getEditable());
	oRadioButton.setGroupName(this.getId());
	oRadioButton.setValueState(this.getValueState());
	oRadioButton.setParent(this);

	if( iIndex == this.getSelectedIndex() ){
		oRadioButton.setSelected(true);
	}

	oRadioButton.attachEvent('select', this.handleRBSelect, this);

	return(oRadioButton);
};

/**
 * Adds a new Item
 * If an item is removed the corresponding RadioButton must be deleted
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.removeItem = function(vElement) {
	var iIndex = vElement;
	if (typeof(vElement) == "string") { // ID of the element is given
		vElement = sap.ui.getCore().byId(vElement);
	}
	if (typeof(vElement) == "object") { // the element itself is given or has just been retrieved
		iIndex = this.indexOfItem(vElement);
	}

	this.myChange = true;
	var oItem = this.removeAggregation("items", iIndex);
	this.myChange = undefined;

	if(!this.aRBs){
		this.aRBs = [];
	}

	if(!this.aRBs[iIndex]){
		// RadioButton not exists
		return null;
	}

	this.aRBs[iIndex].destroy();
	this.aRBs.splice(iIndex, 1);

	if(this.aRBs.length == 0){
		this.setSelectedIndex(undefined);
	}else if(this.getSelectedIndex() == iIndex){
		// selected one is removed -> select first one
		this.setSelectedIndex(0);
	}else{
		if(this.getSelectedIndex() > iIndex){
			// If removed before selected one, move selection index (only change parameter, not RadioButton)
			this.setProperty("selectedIndex", this.getSelectedIndex() - 1, true); // no re-rendering
		}
	}

	return oItem;
};

/**
 * Adds a new Item
 * If all items are removed all RadioButtons must be deleted
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.removeAllItems = function() {

	this.myChange = true;
	var aItems = this.removeAllAggregation("items");
	this.myChange = undefined;

	this.setSelectedIndex(undefined);

	if(this.aRBs){
		while(this.aRBs.length > 0){
			this.aRBs[0].destroy();
			this.aRBs.splice(0, 1);
		};
		return aItems;
	}else{
		return null;
	}

};

/**
 * Adds a new Item
 * If all items are destroyed all RadioButtons must be deleted
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.destroyItems = function() {

	this.myChange = true;
	this.destroyAggregation("items");
	this.myChange = undefined;

	this.setSelectedIndex(undefined);

	if(this.aRBs){
		while(this.aRBs.length > 0){
			this.aRBs[0].destroy();
			this.aRBs.splice(0, 1);
		};
	}

	return this;

};

/**
 * if invalid -> synchronize radio buttons
 * @protected
*/
sap.ui.commons.RadioButtonGroup.prototype.invalidate = function(oOrigin){

	if(oOrigin instanceof sap.ui.core.Item && this.aRBs && !this.myChange){
		// change was not done by RadioButtonGroup itself
		var aItems = this.getItems();
		for (var i = 0; i < aItems.length; i++) {
			if( aItems[i] == oOrigin){
				if(this.aRBs[i]){
					this.aRBs[i].setText(aItems[i].getText());
					this.aRBs[i].setTooltip(aItems[i].getTooltip());
					this.aRBs[i].setEnabled(aItems[i].getEnabled());
					this.aRBs[i].setKey(aItems[i].getKey());
					this.aRBs[i].setTextDirection(aItems[i].getTextDirection());
				}
				break;
			}
		}
		if(this.getDomRef()){
			this.initItemNavigation();
		}
	}
	var oParent = this.getParent();
	if(oParent) {
		oParent.invalidate(this);
	}

};

/**
 * On SELECT event of single Radio Buttons fire Select Event for group
 * @private
*/
sap.ui.commons.RadioButtonGroup.prototype.handleRBSelect = function(oControlEvent){
	// find RadioButton in Array to get Index
	for (var i = 0; i < this.aRBs.length; i++) {
		if(this.aRBs[i].getId() == oControlEvent.getParameter("id")){
			this.setSelectedIndex(i);
			this.oItemNavigation.setSelectedIndex(i);
			this.oItemNavigation.setFocusedIndex(i);
			this.fireSelect({selectedIndex: i});
			break;
		}
	}

};

/**
 * Set all RadioButtons to Editable/ReadOnly
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.setEditable = function(bEditable){

	this.setProperty("editable", bEditable, false); // re-rendering to update ItemNavigation

	if(this.aRBs){
		for (var i = 0; i < this.aRBs.length; i++) {
			this.aRBs[i].setEditable(bEditable);
		}
	}
};

/**
 * Set ValueState for all RadioButtons
 * @public
*/
sap.ui.commons.RadioButtonGroup.prototype.setValueState = function(sValueState){

	this.setProperty("valueState", sValueState, false); // re-rendering to update ItemNavigation

	if(this.aRBs){
		for (var i = 0; i < this.aRBs.length; i++) {
			this.aRBs[i].setValueState(sValueState);
		}
	}
};

/**
 * Handles the event that gets fired by the {@link sap.ui.core.delegate.ItemNavigation} delegate.
 * Ensures that focused element is selected
 *
 * @param {sap.ui.base.Event} oControlEvent The event that gets fired by the {@link sap.ui.core.delegate.ItemNavigation} delegate.
 * @private
 */
sap.ui.commons.RadioButtonGroup.prototype._handleAfterFocus = function(oControlEvent){

	var iIndex = oControlEvent.getParameter("index");
	var oEvent = oControlEvent.getParameter("event");

	if(iIndex != this.getSelectedIndex() && !oEvent.metaKey && this.aRBs[iIndex].getEditable() && this.aRBs[iIndex].getEnabled()){
		// if CTRL key is used do not switch selection
		this.setSelectedIndex(iIndex);
		this.oItemNavigation.setSelectedIndex(iIndex);
		this.fireSelect({selectedIndex:iIndex});
	}
};