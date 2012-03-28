/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ComboBox.
jQuery.sap.declare("sap.ui.commons.ComboBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");

/**
 * Constructor for a new ComboBox.
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
 * <li>maxPopupItems : int</li>
 * <li>displaySecondaryValues : boolean</li>
 * <li>selectedKey : string</li>
 * <li>selectedItemId : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>items : sap.ui.core.ListItem</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>listBox : sap.ui.commons.ListBox</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.commons.TextField#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * 
 * The control provides a field that allows end users to either enter some text, or to choose an entry out of a list of pre-defined items. The choosable items can be provided in the form of complete list boxes, single listbox items, or text strings defined for the current application.
 * 
 * @extends sap.ui.commons.TextField
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.ComboBox = function (sId, mSettings) {
	sap.ui.commons.TextField.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.ComboBox.prototype = jQuery.sap.newObject(sap.ui.commons.TextField.prototype);

/*
 * Describe the sap.ui.commons.ComboBox. 
 * Resulting metadata can be obtained via sap.ui.commons.ComboBox.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.ComboBox", {

  // ---- object ----
  baseType : "sap.ui.commons.TextField",
  interfaces : ["sap.ui.commons.ToolbarItem"],
  publicMethods : [
    // properties 
    "getMaxPopupItems", "setMaxPopupItems", "getDisplaySecondaryValues", "setDisplaySecondaryValues", "getSelectedKey", "setSelectedKey", "getSelectedItemId", "setSelectedItemId", 
    // aggregations
    "getItems", "insertItem", "addItem", "removeItem", "removeAllItems", "indexOfItem", "destroyItems", "bindItems", "unbindItems", 
    // associations
    "getListBox", "setListBox"
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "maxPopupItems" : {name : "maxPopupItems", type : "int", group : "Behavior", defaultValue : 10},
    "displaySecondaryValues" : {name : "displaySecondaryValues", type : "boolean", group : "Misc", defaultValue : false},
    "selectedKey" : {name : "selectedKey", type : "string", group : "Data", defaultValue : null},
    "selectedItemId" : {name : "selectedItemId", type : "string", group : "Data", defaultValue : null}
  },
  defaultAggregation : "items",
  aggregations : {
    "items" : {name : "items", type : "sap.ui.core.ListItem", multiple : true, singularName : "item"}
  },
  associations : {
    "listBox" : {name : "listBox", type : "sap.ui.commons.ListBox", multiple : false}
  },
  events : {}

});	


/**
 * Getter for property <code>maxPopupItems</code>.
 * 
 * Defines the number of items that shall be displayed at once. If the overall number of list items is higher than the setting, a scrollbar is provided.
 * 
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>maxPopupItems</code>
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getMaxPopupItems = function() {
	return this.getProperty("maxPopupItems");
};

/**
 * Setter for property <code>maxPopupItems</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iMaxPopupItems  new value for property <code>maxPopupItems</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.setMaxPopupItems = function(iMaxPopupItems) {
	this.setProperty("maxPopupItems", iMaxPopupItems);
	return this;
};


/**
 * Getter for property <code>displaySecondaryValues</code>.
 * Indicates whether the "additionalText" property that is available for sap.ui.core.ListItem shall be displayed in the list.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>displaySecondaryValues</code>
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getDisplaySecondaryValues = function() {
	return this.getProperty("displaySecondaryValues");
};

/**
 * Setter for property <code>displaySecondaryValues</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisplaySecondaryValues  new value for property <code>displaySecondaryValues</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.setDisplaySecondaryValues = function(bDisplaySecondaryValues) {
	this.setProperty("displaySecondaryValues", bDisplaySecondaryValues);
	return this;
};


/**
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item.
 * If the value has no corresponding item the key is empty.
 * If douplicate keys exists the first item matching the key is used.
 * If the key is set to a not existing value it will not be changed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getSelectedKey = function() {
	return this.getProperty("selectedKey");
};

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedKey  new value for property <code>selectedKey</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.setSelectedKey = function(sSelectedKey) {
	this.setProperty("selectedKey", sSelectedKey);
	return this;
};


/**
 * Getter for property <code>selectedItemId</code>.
 * Id of Selected item. If the value has no corresponding item, the selected item id is empty.
 * If the selected item id is set to an not existing item, it will not be changed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedItemId</code>
 * @public
 * 
 */
sap.ui.commons.ComboBox.prototype.getSelectedItemId = function() {
	return this.getProperty("selectedItemId");
};

/**
 * Setter for property <code>selectedItemId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedItemId  new value for property <code>selectedItemId</code>
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.setSelectedItemId = function(sSelectedItemId) {
	this.setProperty("selectedItemId", sSelectedItemId);
	return this;
};

	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * 
 * Getter for aggregation items. Allows setting ListItems (see sap.ui.core.ListBox) that shall be displayed in the list.
 * 
 * 
 * @return {sap.ui.core.ListItem[]}
 * @public
 */
sap.ui.commons.ComboBox.prototype.getItems = function() {
	return this.getAggregation("items", []);
};


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.ListItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	return this;
};

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.ListItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.ComboBox.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	return this;
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.ListItem} vItem the item to remove or its index or id
 * @return {sap.ui.core.ListItem} the removed item or null
 * @public
 */
sap.ui.commons.ComboBox.prototype.removeItem = function(vItem) {
	return this.removeAggregation("items", vItem);
};

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.ListItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.ComboBox.prototype.removeAllItems = function() {
	return this.removeAllAggregation("items");
};

/**
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.ListItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.ComboBox.prototype.indexOfItem = function(oItem) {
	return this.indexOfAggregation("items", oItem);
};
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.destroyItems = function() {
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
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.bindItems = function(sPath, oTemplate, oSorter, aFilters) {
	this.bindAggregation("items", sPath, oTemplate, oSorter, aFilters);
	return this;
};

/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.unbindItems = function() {
	this.unbindAggregation("items");
	return this;
};


/**
 * 
 * Using this method, you provide a listbox control. This allows reuse of item lists in different controls. Either a control id can be used as new target, or a control instance.
 * 
 *
 * @return {string} Id of the element which is the current target of the <code>listBox</code> association, or null
 * @public
 */
sap.ui.commons.ComboBox.prototype.getListBox = function() {
	return this.getAssociation("listBox", null);
};

/**
 * 
 * Using this method, you provide a listbox control. This allows reuse of item lists in different controls. Either a control id can be used as new target, or a control instance.
 * 
 *
 * @param {string | sap.ui.commons.ListBox} vListBox 
 *    Id of an element which becomes the new target of this <code>listBox</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ComboBox.prototype.setListBox = function(vListBox) {
	this.setAssociation("listBox", vListBox);
	return this;
};


	
// Start of sap/ui/commons/ComboBox.js
jQuery.sap.require("jquery.sap.strings");
jQuery.sap.require("sap.ui.core.Popup");

/**
 * Initializes the control.
 * It is called from the constructor.
 * @private
 */
sap.ui.commons.ComboBox.prototype.init = function(){
	this._iClosedUpDownIdx = -1;
	this._sCloseId = null;
	this.setAccessibleRole(sap.ui.core.AccessibleRole.Combobox);
};

/**
 * Destroy the private ListBox if it exists.
 * @private
 */
sap.ui.commons.ComboBox.prototype.exit = function() {
	if ( this._oListBox ) {
		this._oListBoxDelegate && this._oListBox.removeDelegate(this._oListBoxDelegate);
		if (this.getAggregation("myListBox")) {
			this.destroyAggregation("myListBox", true);			
		}else{
			this._oListBox.destroy();
		}
		this._oListBox = null;
	}
}

//***********************************************************
// Mouse handling...
//***********************************************************

/**
 * Handle click events triggered on the control and if triggered on F4-button open or close the proposal list
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */;
sap.ui.commons.ComboBox.prototype.onclick = function(oEvent){
	if(this.getEnabled && this.getEnabled() && this.getEditable() && oEvent.target === this.getF4ButtonDomRef()){
		if(this.oPopup && this.oPopup.isOpen()){
			this._close();
		} else if(!this._F4ForClose) {
			this._open();
		}
		this.focus();
	}
	this._F4ForClose = false;
};

/**
 * Handle mousedown events triggered on the control
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onmousedown = function(oEvent){
	if(oEvent.target !== this.getF4ButtonDomRef()) {
		return;
	}

	if(this.oPopup && this.oPopup.isOpen()){
		this._F4ForClose = true;
	} else {
		this._F4ForOpen = true;
	}
};


//***********************************************************
// Keyboard handling...
//***********************************************************

/**
 * Handle sapshow pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapshow = function(oEvent){
	if(this.oPopup && this.oPopup.isOpen()) {
		this._close();
	}
	else {
		this._open();
	}
	oEvent.preventDefault();
	oEvent.stopImmediatePropagation();
};

/**
 * Handle sapnextmodifiers pseudo events on the control
 * if in toolbar prevent item navigation if popup is opened.
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapnextmodifiers = function(oEvent){
	if( oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_DOWN && oEvent.altKey ){
		this.onsapshow(oEvent);
		oEvent.stopPropagation();
	}
};

/**
 * Handle saphide pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsaphide = function(oEvent){
	this._close();
	oEvent.stopPropagation(); // prevent item navigation in toolbar
};

/**
 * Handle sapescape pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapescape = function(oEvent) {
	this._close();
	// standard behavior of TextField
	sap.ui.commons.TextField.prototype.onsapescape.apply(this, arguments);
};

/**
 * Handle sapenter pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapenter = function(oEvent) {
	this._close();
	this._checkChange(oEvent, true);
};


//***********************************************************
//Focus handling...
//***********************************************************

/**
 * Handle the sapfocusleave pseudo event and ensure that when the focus moves to the list box,
 * the check change functionality (incl. fireChange) is not triggered.
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onsapfocusleave = function(oEvent) {
	this._resetCheck();
	var oLB = this._getListBox();
	if(oEvent.relatedControlId === oLB.getId()){
		this.focus();
	} else {
		// we left the ComboBox to another (unrelated) control and thus have to fire the change (if needed).
		this._checkChange(oEvent, true);
	}
};


//***********************************************************
// Change handling and related event firing
//***********************************************************

/**
 * Compares the previous value with the current value and fires the "Change" event
 * if the ComboBox is editable and the value has changed or whether the value has been changed
 * e.g. via up/down or auto-complete feature
 *
 * @param {jQuery.Event} oEvent
 * @param {boolean} [bImmediate] indicate whether the check should happen immediately or delayed (e.g. to avoid focusout / click double event processing)
 * @protected
 */
sap.ui.commons.ComboBox.prototype._checkChange = function(oEvent, bImmediate) {
	this._resetCheck();
	if(!bImmediate){
		// in case there is no sapfocusleave (i.e. core does not know where the focus went to)
		// we still fire this event (as obviously it cannot be in the Combo and related control(s) anymore)
		this._sCheckId = jQuery.sap.delayedCall(50,this, "_checkChange", [oEvent, true]);
		return;
	}
	var oInput = this.getInputDomRef(),
		newVal = jQuery(oInput).val(),
		oldVal = this.getValue();

	if(!this._F4ForOpen && (
			this.getEditable() && this.getEnabled() && (oldVal != newVal))){
		this.setValue(newVal, true);
		var aItems = this.getItems(),
			oItem = null,
			oText,
			sKey,
			sId;
		for(var i = 0, l = aItems.length; i < l; i++){
			oText = aItems[i].getText();
			if(oText === newVal) {
				oItem = aItems[i];
				sKey = oItem.getKey();
				sId  = oItem.getId();
				break;
			}
		}
		this.setProperty("selectedKey", sKey, true); // no rerendering needed
		this.setProperty("selectedItemId", sId, true); // no rerendering needed	
		this.fireChange({newValue:newVal, selectedItem: oItem});
	}
};


/**
 * Resets check for changes in case there is a delayed one pending.
 * @private
 */
sap.ui.commons.ComboBox.prototype._resetCheck = function() {
	if(!this._sCheckId) {
		return;
	}
	jQuery.sap.clearDelayedCall(this._sCheckId);
	this._sCheckId = null;
};

//***********************************************************
// Advanced keyboard handling... type ahead, up / down navigation, ...
//***********************************************************

/**
 * Handle the keypress event
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype.onkeypress = function(oEvent) {
	if(this._sTypeAhead) {
		jQuery.sap.clearDelayedCall(this._sTypeAhead);
	}

	var oKC = jQuery.sap.KeyCodes;
	if(sap.ui.commons.ComboBox._isHotKey(oEvent) || oEvent.keyCode === oKC.F4 && oEvent.which === 0 /*this is the Firefox case and ensures 's' with same charCode is accepted*/) {
		return;
	}

	var iKC = oEvent.which || oEvent.keyCode;
	if(iKC !== oKC.DELETE && iKC !== oKC.BACKSPACE && iKC !== oKC.ESCAPE){
		this._sTypeAhead = jQuery.sap.delayedCall(200, this, "_doTypeAhead");
	} else{
		// standard behavior of TextField
		sap.ui.commons.TextField.prototype.onkeypress.apply(this, arguments);
	}
	// Do not cancel the event as this would prevent typing in the field.
};

/**
 * Handle the sapup event
 * TODO How do we enable switching this off? e.g. in table case, arrow keys might trigger
 *      cell navigation instead of this one? is there a special key to 're-enable' again? like right-Alt key?
 *
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype.onsapup = function(oEvent) {
	if(!this.getEditable()) {
		return;
	}
	var oListBox = this._getListBox(),
		aItems = oListBox.getItems(),
		oDomRef = this.getInputDomRef(),
		oValue = jQuery(oDomRef).val();

	var i = this._prepareUpDown(aItems, oValue);
	i = this._updateIdx(aItems, oDomRef, i-1, i);
	oListBox.setSelectedIndex(i);
	oListBox.scrollToIndex(i, true);

	oEvent.preventDefault();
	oEvent.stopPropagation(); // prevent itemNavigation if ComboBox is in toolbar
};

/**
 * Handle the sapdown event.
 * TODO How do we enable switching this off? e.g. in table case, arrow keys might trigger
 *      cell navigation instead of this one? is there a special key to 're-enable' again? like right-Alt key?
 *
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype.onsapdown = function(oEvent) {
	if(!this.getEditable()) {
		return;
	}
	var oListBox = this._getListBox(),
		aItems = oListBox.getItems(),
		oDomRef = this.getInputDomRef(),
		oValue = jQuery(oDomRef).val();

	var i = this._prepareUpDown(aItems, oValue);
	i = this._updateIdx(aItems, oDomRef, i+1, i);
	oListBox.setSelectedIndex(i);
	oListBox.scrollToIndex(i, true);

	oEvent.preventDefault();
	oEvent.stopPropagation(); // prevent itemNavigation if ComboBox is in toolbar
};

/**
 * Handle the saphome event.
 * TODO How do we enable switching this off? e.g. in table case, arrow keys might trigger
 *      cell navigation instead of this one? is there a special key to 're-enable' again? like right-Alt key?
 *
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */

sap.ui.commons.ComboBox.prototype.onsaphome = function(oEvent) {
	if(!this.getEditable() || !this.oPopup || !this.oPopup.isOpen()) {
		return;
	}
	var oListBox = this._getListBox(),
		aItems = oListBox.getItems(),
		oDomRef = this.getInputDomRef();

	var i = this._updateIdx(aItems, oDomRef,0);
	oListBox.setSelectedIndex(i);
	oListBox.scrollToIndex(0, true);

	oEvent.preventDefault();
};

/**
 * Handle the sapend event.
 * TODO How do we enable switching this off? e.g. in table case, arrow keys might trigger
 *      cell navigation instead of this one? is there a special key to 're-enable' again? like right-Alt key?
 *
 * @param {jQuery.Event} oEvent the event that occurred on the ComboBox
 * @private
 */

sap.ui.commons.ComboBox.prototype.onsapend = function(oEvent) {
	if(!this.getEditable() || !this.oPopup || !this.oPopup.isOpen()) {
		return;
	}
	var oListBox = this._getListBox(),
		aItems = oListBox.getItems(),
		oDomRef = this.getInputDomRef();

	var i = aItems.length - 1;
	i = this._updateIdx(aItems, oDomRef, i);
	oListBox.setSelectedIndex(i);
	oListBox.scrollToIndex(i, true);

	oEvent.preventDefault();
};

/**
 * method for delayed handle of type ahead in closed combobox
 * @private
 */
sap.ui.commons.ComboBox.prototype._doTypeAhead = function(){
	this._sTypeAhead = null;
	var oLB = this._getListBox(),
		aItems = oLB.getItems(),
		oItem,
		oText,
		$Ref = jQuery(this.getInputDomRef()),
		oValue = $Ref.val(),
		startsWith = jQuery.sap.startsWithIgnoreCase;
	this._sTypedChars = oValue;
	var i = 0;
	for (var l = aItems.length; i < l; i++){
		oItem = aItems[i];
		oText = "" + oItem.getText();
		if(startsWith(oText, oValue) && oItem.getEnabled()) {
			$Ref.val(oText);
			this._doSelect(oValue.length, oText.length);

			oLB.setSelectedIndex(i);
			oLB.scrollToIndex(i, true);
			return;
		}
	}
	oLB.clearSelection();
	oLB.scrollToIndex(i, true);
};

/**
 * Prepares for the up and down arrow handling.
 * Checks whether there is a set index and this still matches the given value
 * @param {sap.ui.core.ListItem[]} aItems array of listitems that should be used.
 * @param {string} oValue
 * @type int
 * @return the new index
 * @private
 */
sap.ui.commons.ComboBox.prototype._prepareUpDown = function(aItems, oValue){
	var oText,
		startsWith = jQuery.sap.startsWithIgnoreCase;
	if(this._iClosedUpDownIdx >= 0 && aItems[this._iClosedUpDownIdx] && aItems[this._iClosedUpDownIdx].getText() !== oValue) {
		this._iClosedUpDownIdx = -1;
	}

	if(this._iClosedUpDownIdx === -1){
		for(var i = 0, l = aItems.length; i < l; i++){
			oText = aItems[i].getText();
			if(oText === oValue) {
				this._iClosedUpDownIdx = i;
				break;
			}
		}
	}
	return this._iClosedUpDownIdx;
};

/**
 * Updates the value of the comboBox taking the given idx into account.
 *
 * @param {sap.ui.core.ListItem[]} aItems the items belonging to this ComboBox
 * @param {string} oDomRef the dom ref of the inputField to update
 * @param {int} iNewIdx the index to set
 * @param {int} [iCurIdx] The index to 'fall back to'.
 * 						  Leave blank in case of navigation to 'first' (home-key) or 'last' (end-key). Will ensure 'first' or 'last' selectable item will be selected.
 * @return {int} the actually set index (which might have been corrected)
 * @private
 */
sap.ui.commons.ComboBox.prototype._updateIdx = function(aItems, oDomRef, iNewIdx, iCurIdx){
	var l = aItems.length,
		bFirst = iNewIdx === 0 && iCurIdx === undefined,
		bLast = iNewIdx === l-1 && iCurIdx === undefined,
		bDown = iCurIdx !== undefined && iCurIdx < iNewIdx || bFirst,
		i = (iNewIdx < 0 ? 0 : (iNewIdx < l ? iNewIdx: l - 1)),
		$Ref = jQuery(oDomRef);
	var oItem,
		bValid = false;
	do {
		iNewIdx = bDown ? i++ : i--;
		oItem = aItems[iNewIdx];
		bValid = oItem && oItem.getEnabled() && !(oItem instanceof sap.ui.core.SeparatorItem) && oItem.getId() !== this.getId() + "_shi";
	} while(!bValid && i < l && i >= 0);
	if(bValid){
		var oText = oItem.getText();
		$Ref.val(oText);
		this._doSelect();
	} else {
		iNewIdx = iCurIdx;
	}
	this._iClosedUpDownIdx = iNewIdx;
	return iNewIdx;
};

/**
 * Selects the text of the InputDomRef in the given range
 * @param {int} [iStart=0] start position of the text selection
 * @param {int} [iEnd=<length of text>] end position of the text selection
 * @return {sap.ui.commons.ComboBox} this DropdownBox instance
 * @private
 */
sap.ui.commons.ComboBox.prototype._doSelect = function(iStart, iEnd){
	var oDomRef =this.getInputDomRef(),
		$Ref = jQuery(oDomRef);
	oDomRef.focus();
	$Ref.selectText(iStart?iStart:0, iEnd?iEnd:$Ref.val().length);
	return this;
};


//***********************************************************
// DOM Ref handling
//***********************************************************

/**
 * Returns the DomRef that should get the focus.
 * @see sap.ui.core.Element#getDomRef
 * @return {DOMNode} The element's DOM reference or null
 * @protected
 */
sap.ui.commons.ComboBox.prototype.getFocusDomRef = function() {
	return this.getInputDomRef();
};

/**
 * Returns the DomRef that allows input.
 * Could be overwritten in child-classes
 *
 * @return {DOMNode} The input element's DOM reference or null
 * @protected
 */
sap.ui.commons.ComboBox.prototype.getInputDomRef = function() {
//	return this.$().find("input").get(0);
	return jQuery.sap.domById(this.getId() + "-input");
};

/**
 * Returns the DomRef which represents the icon for value help.
 * Could be overwritten in child-classes
 *
 * @return {DOMNode} The F4-element's DOM reference or null
 * @protected
 */
sap.ui.commons.ComboBox.prototype.getF4ButtonDomRef = function() {
	return jQuery("#" + this.getId() + "-icon").get(0);
};


//***********************************************************
// List Box handling (incl. creation of 'private one')
//***********************************************************

/**
 * Returns the private listbox.
 * Creates a new one if not yet done.
 * @type sap.ui.commons.ListBox
 * @return the private listbox
 * @private
 */
sap.ui.commons.ComboBox.prototype._getPrivateListBox = function(){
	if(this._oListBox) {
		return this._oListBox;
	}
	// else
	this._oListBox = new sap.ui.commons.ListBox(this.getId() + "-lb", {allowMultiSelect:false});
	this.setAggregation("myListBox", this._oListBox, true);

	return this._oListBox;
};

/**
 * Returns the listbox that should be used.
 * This is either the one set from outside or the one created as 'private'
 * @type sap.ui.commons.ListBox
 * @param {boolean} bUpdateListBox indicate whether the ListBox should be updated for rerendering
 * @return the listbox that should be used
 * @private
 */
sap.ui.commons.ComboBox.prototype._getListBox = function(bUpdateListBox){
	var sListBox = this.getListBox(),
		oListBox;
	if(sListBox) {
		oListBox = sap.ui.getCore().getControl(sListBox);
	} else {
		oListBox = this._getPrivateListBox();
	}
	if(bUpdateListBox){
		oListBox.setAllowMultiSelect(false);
		oListBox.setDisplaySecondaryValues(this.getDisplaySecondaryValues());

		var oDomRef = this.getDomRef();
		if(oDomRef) {
			oListBox.setMinWidth(jQuery(oDomRef).rect().width + "px");
		}
	}
	return oListBox;
};


//***********************************************************
// Closing and opening the drop down
//***********************************************************

/**
 * Opens the proposal list of the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype._open = function(iDuration){
	
	if(iDuration === undefined){
		iDuration = -1;
	}

	if(!this.getEditable()) {
		return;
	}

	if(!this.oPopup) {
		this.oPopup = new sap.ui.core.Popup();
	}

	this._F4ForOpen = false;

	var oListBox = this._getListBox(!this.oPopup.isOpen());
	var oPopup = this.oPopup;
	this._prepareOpen(oListBox);
	if(!this._oListBoxDelegate) {
		this._oListBoxDelegate = {oCombo: this, onclick: function(oEvent){
			// cover also the case of 'confirm initial proposal'
			var itemId = jQuery(oEvent.target).closest("[data-sap-ui-id]").attr("data-sap-ui-id");
			// could also be done via EventPool... but whose to use? Combo's? ListBox'?
			var oEvent = new sap.ui.base.Event("_internalSelect", this, {selectedId: itemId});
			this.oCombo._handleSelect(oEvent);
		}};
	}
	oListBox.addDelegate(this._oListBoxDelegate);

	// and update the given popup instance
	oPopup.setContent(oListBox);
	oPopup.setAutoClose(true);
	oPopup.setAutoCloseAreas([this.getDomRef()]);
	oPopup.setDurations(0, 0); // no animations
	oPopup.setInitialFocusId(this.getId()+'-input'); // to prevent popup to set focus to the ListBox -> stay in input field
	
	// now, as everything is set, ensure HTML is up-to-date
	// This is separated in a function because controls which inherit the Combobox (e.g. SearchField) might overriden this
	// Here is also the possibility to interrupt the open procedure of the list (e.g. when the list is empty)
	var bSkipOpen = this._rerenderListBox(oListBox);
	if(bSkipOpen) {
		return;
	}
	
	oPopup.attachOpened(this._handleOpened, this);
	// attachClosed moved to _handleOpened

	var eDock = sap.ui.core.Popup.Dock;
	oPopup.open(iDuration, eDock.LeftTop, eDock.LeftBottom, this/*.getDomRef()*/);
	jQuery(oListBox.getFocusDomRef()).attr("tabIndex", "-1");
	//attachSelect moved to _handleOpened

	jQuery(this.getDomRef()).attr("aria-expanded", true);

};

/**
 * Rerenders the attached Listbox
 * @private
 */
sap.ui.commons.ComboBox.prototype._rerenderListBox = function(oListBox){
	oListBox.rerender();
	return false;
};

/**
 * Walks over the list of available items in the given oListBox and updates the visual selection.
 * Also updates the Popup to show the right content.
 *
 * @param {sap.ui.commons.ListBox} oListBox listBox belonging to this ComboBox instance.
 * @private
 */
sap.ui.commons.ComboBox.prototype._prepareOpen = function(oListBox) {
	// update the list and the input field
	var $Ref = jQuery(this.getInputDomRef()),
		oValue = $Ref.val(),
		aItems = oListBox.getItems(),
		oText,
		startsWith = jQuery.sap.startsWithIgnoreCase,
		bSelected = false,
		bEmptyString = oValue === "",
		oItem;
	var i = 0;
	for (var l = aItems.length; i < l; i++){
		oItem = aItems[i];
		if(!oItem.getEnabled()) {
			continue;
		}
		oText = "" + oItem.getText();
		if(bEmptyString || startsWith(oText, oValue)) {
			bSelected = true;
			// ensure to mark pending only when set anew
			this._iClosedUpDownIdx = i;
			$Ref.val(oText);
			this._doSelect();
			break;
		}
	}
	if(!bSelected){
		i = -1;
	}
	var iItemsLength = oListBox.getItems().length;
	var iMaxPopupItems = this.getMaxPopupItems();
	oListBox.setVisibleItems(iMaxPopupItems < iItemsLength ? iMaxPopupItems : iItemsLength);
	oListBox.setSelectedIndex(i);

	// preparation of Popup moved to _open method again to allow cleaner implementation in dropdown box
};

/**
 * Once the ListBox is opened, we can update the scroll position
 * @private
 */
sap.ui.commons.ComboBox.prototype._handleOpened = function(){
	this.oPopup.detachOpened(this._handleOpened, this);
	var oListBox = this._getListBox();
	oListBox.scrollToIndex(this._iClosedUpDownIdx, true);
	oListBox.attachSelect(this._handleSelect, this);
	// and also ensure we get to know it closes / gets closed via automatic-close again
	this.oPopup.attachClosed(this._handleClosed, this);
};

/**
 * Closes  the proposal list of the ComboBox
 * @private
 */
sap.ui.commons.ComboBox.prototype._close = function(oEvent){
	if(this.oPopup) { // only if there is a Popup, the list box might have been used
		this.oPopup.close(0);
	}
};

/**
 * As there might also be situation where the auto-close functionality triggers the close,
 * ensure to handle everything in the event listener
 * @private
 */
sap.ui.commons.ComboBox.prototype._handleClosed = function(){
	this.oPopup.detachClosed(this._handleClosed, this);
	var oListBox = this._getListBox();
	oListBox.removeDelegate(this._oListBoxDelegate);
	oListBox.detachSelect(this._handleSelect, this);
	jQuery(this.getDomRef()).attr("aria-expanded", false);

	if(this._cleanupClose) {
		this._cleanupClose(oListBox);
	}
};

/**
 * This method is attached to the ListBox instance when it is open
 * to handle the click event occurring in the ListBox.
 * It additionally closes the Popup.
 * @param {sap.ui.base.Event} oControlEvent The event that was raised by the Listbox
 * @private
 */
sap.ui.commons.ComboBox.prototype._handleSelect = function(oControlEvent) {
	this._resetCheck();
	var iSelected = oControlEvent.getParameter("selectedIndex"), 
		iSelectedId = oControlEvent.getParameter("selectedId"),
		oItem = oControlEvent.getParameter("selectedItem");
	
	if(!oItem && iSelectedId){
		oItem = sap.ui.getCore().byId(iSelectedId);
		if(oItem.getParent() !== this._getListBox(false)) {// can this happen?
			oItem = null;
		}
		iSelected = jQuery.inArray(oItem, this._getListBox().getItems());
	}
	if(oItem && oItem.getEnabled()) {
		this._close();
		var oTmpValue = oItem.getText();
		this._iClosedUpDownIdx = iSelected;
		this.setValue(oTmpValue, true);
		this.setProperty("selectedKey", oItem.getKey(), true); // no rerendering needed
		this.setProperty("selectedItemId", oItem.getId(), true); // no rerendering needed	
		this._sTypedChars = oTmpValue;
		this.fireChange({newValue: oTmpValue, selectedItem: oItem});
	}
	this._doSelect();
	return oItem;
};


//***********************************************************
// Handle aggregation and association
//***********************************************************

//Handle items aggregation
sap.ui.commons.ComboBox.prototype.getItems = function(){
	return this._getListBox()?this._getListBox().getItems():[];
};
sap.ui.commons.ComboBox.prototype.insertItem = function(oItem, iIndex){
	this._getListBox().insertItem(oItem, iIndex);
	return this;
};
sap.ui.commons.ComboBox.prototype.addItem = function(oItem){
	this._getListBox().addItem(oItem);
	return this;
};
sap.ui.commons.ComboBox.prototype.removeItem = function(vElement) {
	return this._getListBox().removeItem(vElement);
};
sap.ui.commons.ComboBox.prototype.removeAllItems = function() {
	return this._getListBox().removeAllItems();
};
sap.ui.commons.ComboBox.prototype.indexOfItem = function(oItem){
	return this._getListBox().indexOfItem(oItem);
};
sap.ui.commons.ComboBox.prototype.destroyItems = function(){
	this._getListBox().destroyItems();
	return this;
};

// handle listBox association
sap.ui.commons.ComboBox.prototype.setListBox = function(sListBox) {
	// if we created our own listBox beforehand, destroy it as the newly set one should win.
	if (this._oListBox) {
		if (this.getAggregation("myListBox")) {
			this.destroyAggregation("myListBox", true);			
		}else{
			this._oListBox.destroy();
		}
		this._oListBox = null;
	}
	this.setAssociation("listBox", sListBox);
	return this;
};


//***********************************************************
// Focus information handling and rendering related
//***********************************************************

/**
 * Returns an object representing the serialized focus information
 * To be overwritten by the specific control method
 * @return {object} an object representing the serialized focus information
 * @private
 */
sap.ui.commons.ComboBox.prototype.getFocusInfo = function(){
	return {id: this.getId(), sTypedChars: this._sTypedChars};
};

/**
 * Applies the focus info
 * To be overwritten by the specific control method
 * @param {object} oFocusInfo
 * @private
 */
sap.ui.commons.ComboBox.prototype.applyFocusInfo = function(oFocusInfo){
	jQuery(this.getInputDomRef()).val(oFocusInfo.sTypedChars);
	this._doTypeAhead();
	return this;
};

/**
 * Ensure that handed in ListBoxes are taken from the visible UI immediately.
 * @protected
 */
sap.ui.commons.ComboBox.prototype.onAfterRendering = function(oEvent){
	this._getListBox().$().appendTo(sap.ui.getCore().getStaticAreaRef());
};


//***********************************************************
// Misc.
//***********************************************************

/**
 * Figure out whether the triggered key was a hotkey
 * @param {jQuery.Event} oEvent the event fired on the ComboBox
 * @private
 * @static
 */
sap.ui.commons.ComboBox._isHotKey = function(oEvent){
	if(oEvent.altKey || oEvent.ctrlKey || oEvent.metaKey) {
		return true;
	}

	var iKeyCode = oEvent.keyCode || oEvent.which,
		eKC = jQuery.sap.KeyCodes;

	switch(iKeyCode){
		// some keys can be identified as hotkey 'all alone'
		case eKC.ENTER:
		case eKC.SHIFT:
		case eKC.TAB:
		case eKC.ALT:
		case eKC.CONTROL:
		case eKC.END:
		case eKC.HOME:
		case eKC.ARROW_LEFT:
		case eKC.ARROW_UP:
		case eKC.ARROW_RIGHT:
		case eKC.ARROW_DOWN:
			return true;
		// as F-keys share the keycode with standard characters, ensure that which equals 0
		case eKC.F1:
		case eKC.F2:
		case eKC.F3:
		case eKC.F4:
		case eKC.F5:
		case eKC.F6:
		case eKC.F7:
		case eKC.F8:
		case eKC.F9:
		case eKC.F10:
		case eKC.F11:
		case eKC.F12:
			return oEvent.which === 0;
		default:
			return false;
	}
};

/*
 * Overwrite of standard function
 */
sap.ui.commons.ComboBox.prototype.setSelectedKey = function(sSelectedKey) {

	if (this.getSelectedKey() == sSelectedKey) {
		// not changed
		return this;
	}

	//	find corresponding item
	var aItems = this._getListBox().getItems();
	var bNotFound = true;
	var sSelectedItemId;
	
	for ( var i = 0; i < aItems.length; i++) {
		if (aItems[i].getKey() == sSelectedKey && aItems[i].getEnabled()) {
			// key found -> set corresponding value
			var oSelectedItem = aItems[i];
			sSelectedItemId = oSelectedItem.getId();
			var sValue = oSelectedItem.getText();
			this.setValue(sValue, true);
			this._sTypedChars = sValue;

			bNotFound = false;
			break;
		}
	} 
	if (!bNotFound) {
		this.setProperty("selectedKey", sSelectedKey, true); // no rerendering needed	
		this.setProperty("selectedItemId", sSelectedItemId, true); // no rerendering needed	
	}
	return this;
}; 

/*
 * Overwrite of standard function
 */
sap.ui.commons.ComboBox.prototype.setSelectedItemId = function(sSelectedItemId) {

	if (this.getSelectedItemId() == sSelectedItemId) {
		// not changed
		return this;
	}

	//	find corresponding item
	var aItems = this._getListBox().getItems();
	var bNotFound = true;
	var sKey;
	
	for ( var i = 0; i < aItems.length; i++) {
		if (aItems[i].getId() == sSelectedItemId && aItems[i].getEnabled()) {
			// key found -> set corresponding value
			var oSelectedItem = aItems[i];
			sKey = oSelectedItem.getKey();
			var sValue = oSelectedItem.getText();
			this.setValue(sValue, true);
			this._sTypedChars = sValue;

			bNotFound = false;
			break;
		}
	} 
	if (!bNotFound) {
		this.setProperty("selectedItemId", sSelectedItemId, true); // no rerendering needed	
		this.setProperty("selectedKey", sKey, true); // no rerendering needed	
	}
	return this;
}; 

/*
 * Overwrite of TextField function
 * additional parameter bNotSetSelectedKey to not set selected key because set 
 * from calling function
 */
sap.ui.commons.ComboBox.prototype.setValue = function(sValue, bNotSetSelectedKey) {

	if (!bNotSetSelectedKey) {
		// find key for value
		var aItems = this._getListBox().getItems();
		var sKey;
		var sSelectedItemId;

		for ( var i = 0; i < aItems.length; i++) {
			if (aItems[i].getText() == sValue && aItems[i].getEnabled()) {
				// Value found -> set corresponding key
				var oSelectedItem = aItems[i];
				sSelectedItemId = oSelectedItem.getId();
				sKey = oSelectedItem.getKey();
				break;
			}
		} 
		this.setProperty("selectedKey", sKey, true); // no rerendering needed	
		this.setProperty("selectedItemId", sSelectedItemId, true); // no rerendering needed	
	}

	// call standard TextField function
	sap.ui.commons.TextField.prototype.setValue.apply(this, [sValue]);
	this._sTypedChars = this.getValue();
	return this;
};

/* 
 * Overwite of INVALIDATE
 * do not invalidate ComboBox if only ListBox is changed
*/
sap.ui.commons.ComboBox.prototype.invalidate = function(oOrigin) {

	if(!oOrigin || oOrigin != this._getListBox()){
		sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
	}else{	
		// register ListBox as invalidatet
		if(this.getUIArea()){
			this.getUIArea().addInvalidatedControl(oOrigin);
		}
	}

};

/*
 * Overwrite CLONE to set aggregation of ListBox
 */
sap.ui.commons.ComboBox.prototype.clone = function(sIdSuffix){

	var oClone = sap.ui.core.Element.prototype.clone.apply(this, arguments);
	
	// check if listbox is cloned
	var oListBox = sap.ui.getCore().getControl(this.getId()+"-lb-"+(sIdSuffix || jQuery.sap.uid()));
	if (oListBox) {
		oClone.setAggregation("myListBox", oListBox, true);
		oClone._oListBox = oListBox;
	}
	
	return oClone;

}; 

// to overwrite JS doc with new event parameter

/**
 * Fire event change to attached listeners.
 *
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the textfield.</li>
 * <li>'selectedItem' of type <code>sap.ui.core/ListItem</code> selected item </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ComboBox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ComboBox#fireChange
 * @function
 */ 
 
 /**
 * Event is fired when the text in the field has changed AND the focus leaves the ComboBox or the Enter key is pressed. 
 *
 * @name sap.ui.commons.ComboBox#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the ComboBox.
 * @param {sap.ui.core/ListItem} oControlEvent.getParameters.selectedItem The new / changed item of the ComboBox.
 * @public
 */
 