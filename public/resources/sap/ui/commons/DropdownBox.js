/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.DropdownBox.
jQuery.sap.declare("sap.ui.commons.DropdownBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.ComboBox");

/**
 * Constructor for a new DropdownBox.
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
 * <li>searchHelpEnabled : boolean</li>
 * <li>searchHelpText : string</li>
 * <li>searchHelpAdditionalText : string</li>
 * <li>searchHelpIcon : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>searchHelp : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.commons.ComboBox#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * The control provides a field that allows end users to an entry out of a list of pre-defined items. The choosable items can be provided in the form of complete list boxes or single list items.
 * Binding (see DataBinding) is also supported for list items.
 * @extends sap.ui.commons.ComboBox
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.DropdownBox = function (sId, mSettings) {
	sap.ui.commons.ComboBox.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.DropdownBox.prototype = jQuery.sap.newObject(sap.ui.commons.ComboBox.prototype);

/*
 * Describe the sap.ui.commons.DropdownBox. 
 * Resulting metadata can be obtained via sap.ui.commons.DropdownBox.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.DropdownBox", {

  // ---- object ----
  baseType : "sap.ui.commons.ComboBox",
  publicMethods : [
    // properties 
    "getSearchHelpEnabled", "setSearchHelpEnabled", "getSearchHelpText", "setSearchHelpText", "getSearchHelpAdditionalText", "setSearchHelpAdditionalText", "getSearchHelpIcon", "setSearchHelpIcon", 
    // aggregations
    
    // associations
    
    // events
    "attachSearchHelp", "detachSearchHelp"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "searchHelpEnabled" : {name : "searchHelpEnabled", type : "boolean", group : "Behavior", defaultValue : false},
    "searchHelpText" : {name : "searchHelpText", type : "string", group : "Appearance", defaultValue : null},
    "searchHelpAdditionalText" : {name : "searchHelpAdditionalText", type : "string", group : "Appearance", defaultValue : null},
    "searchHelpIcon" : {name : "searchHelpIcon", type : "string", group : "Appearance", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "searchHelp" : "searchHelp"
  }

});	

sap.ui.commons.DropdownBox.M_EVENTS = {'searchHelp':'searchHelp'};


/**
 * Getter for property <code>searchHelpEnabled</code>.
 * Whether the DropdownBox's search help should be enabled.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>searchHelpEnabled</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getSearchHelpEnabled = function() {
	return this.getProperty("searchHelpEnabled");
};

/**
 * Setter for property <code>searchHelpEnabled</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSearchHelpEnabled  new value for property <code>searchHelpEnabled</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpEnabled = function(bSearchHelpEnabled) {
	this.setProperty("searchHelpEnabled", bSearchHelpEnabled);
	return this;
};


/**
 * Getter for property <code>searchHelpText</code>.
 * (optional) The text to use for the search help entry.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>searchHelpText</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getSearchHelpText = function() {
	return this.getProperty("searchHelpText");
};

/**
 * Setter for property <code>searchHelpText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSearchHelpText  new value for property <code>searchHelpText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpText = function(sSearchHelpText) {
	this.setProperty("searchHelpText", sSearchHelpText);
	return this;
};


/**
 * Getter for property <code>searchHelpAdditionalText</code>.
 * (optional) The additional Text to use for the search help entry.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>searchHelpAdditionalText</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getSearchHelpAdditionalText = function() {
	return this.getProperty("searchHelpAdditionalText");
};

/**
 * Setter for property <code>searchHelpAdditionalText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSearchHelpAdditionalText  new value for property <code>searchHelpAdditionalText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpAdditionalText = function(sSearchHelpAdditionalText) {
	this.setProperty("searchHelpAdditionalText", sSearchHelpAdditionalText);
	return this;
};


/**
 * Getter for property <code>searchHelpIcon</code>.
 * (optional) The src of the icon to use for the search help entry.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>searchHelpIcon</code>
 * @public
 * 
 */
sap.ui.commons.DropdownBox.prototype.getSearchHelpIcon = function() {
	return this.getProperty("searchHelpIcon");
};

/**
 * Setter for property <code>searchHelpIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSearchHelpIcon  new value for property <code>searchHelpIcon</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpIcon = function(sSearchHelpIcon) {
	this.setProperty("searchHelpIcon", sSearchHelpIcon);
	return this;
};


/**
 * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and F4 key is pressed. 
 *
 * @name sap.ui.commons.DropdownBox#searchHelp
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.value The current value of the DropdownBox.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'searchHelp' event of this <code>sap.ui.commons.DropdownBox</code>.<br/>
 * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and F4 key is pressed. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.attachSearchHelp = function(oData, fnFunction, oListener) {
	this.attachEvent("searchHelp", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'searchHelp' event of this <code>sap.ui.commons.DropdownBox</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.detachSearchHelp = function(fnFunction, oListener) {
	this.detachEvent("searchHelp", fnFunction, oListener);
	return this;	
};

/**
 * Fire event searchHelp to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code> The current value of the DropdownBox.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.fireSearchHelp = function(mArguments) {
	this.fireEvent("searchHelp", mArguments);
	return this;
};


// Start of sap/ui/commons/DropdownBox.js
jQuery.sap.require("jquery.sap.storage");
jQuery.sap.require("sap.ui.core.SeparatorItem");

/**
 * Initialization method.
 * @private
 */
sap.ui.commons.DropdownBox.prototype.init = function() {
	sap.ui.commons.ComboBox.prototype.init.apply(this, arguments);
	this._oValueBeforePaste = null;
	this._oValueBeforeOpen = null;
	this.__aItems = null;
	this._iCursorPosBeforeBackspace = null;
	/** {sap.ui.core.ListItem[]} Array of ListItems containing SearchHelp followed by Separator @private */
	this._searchHelpItem = null;
	this._iItemsForHistory = 10; // UX defined history shall appear if there are more than 10 items
};

/**
 * Cleanup instance.
 * @private
 */
sap.ui.commons.DropdownBox.prototype.exit = function() {
	var sIdPrefix = this.getId() + "-h-",i;
	// destroys searchHelpItems
	if ( this._searchHelpItem ) {
		this._searchHelpItem[0].destroy();
		this._searchHelpItem[1].destroy();
		this._searchHelpItem = null;
	}
	
	sap.ui.commons.ComboBox.prototype.exit.apply(this, arguments);
	// check for and remaining history items and destroy them
	function remove(id) {
	  var oItem = sap.ui.getCore().byId(sIdPrefix + i);
	  oItem && oItem.destroy();
	}
	for(var i = 0; i < 5; i++) {
	  remove(sIdPrefix+i);
	}
	remove(sIdPrefix+"separator");
};

/**
 * Ensure that handed in ListBoxes are taken from the visible UI immediately.
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onAfterRendering = function(oEvent){
	sap.ui.commons.ComboBox.prototype.onAfterRendering.apply(this, arguments);
	
	this.checkValueInItems();
};


//***********************************************************
//Mouse handling...
//***********************************************************

/**
 * Handle the click event happening in the DropdownBox
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onclick = function(oEvent) {
	// as a click in the input field requires selection update, do not handle click in this case
	if(oEvent.target !== this.getInputDomRef()) {
		return sap.ui.commons.ComboBox.prototype.onclick.apply(this, arguments);
	}
};

/**
 * Handle mouseup event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onmouseup = function(oEvent) {
	if(oEvent.target === this.getInputDomRef() && this.oPopup && this.oPopup.isOpen()) {
		jQuery.sap.delayedCall(0, this, "_updateSelection", [0]); // or let the cursor be positioned and update the selection
	} else {
		this._doSelect();
	}
};


//***********************************************************
//Keyboard handling...
//***********************************************************

/**
 * Handle sapshow pseudo events on the control
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapshow = function(oEvent){
	if(oEvent.which === jQuery.sap.KeyCodes.F4 && this._searchHelpItem){
		this._close();
		this.fireSearchHelp({value: jQuery(this.getInputDomRef()).val()});
		oEvent.preventDefault();
		oEvent.stopImmediatePropagation();
		return;
	}
	if(this.oPopup && this.oPopup.isOpen()) {
		this._close();
	} else {
		this._open();
		var oLB = this._getListBox();
		oLB.scrollToIndex(oLB.getSelectedIndex());
		this._doSelect();
	}
	oEvent.preventDefault();
	oEvent.stopImmediatePropagation();
};

/**
 * Handle keydown event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onkeydown = function(oEvent) {
	if(!jQuery.browser.msie || oEvent.which !== jQuery.sap.KeyCodes.BACKSPACE) {
		return;
	}

	// Quite a trick to solve the issue with 'delete from last cursorPos' vs. 'delete last (proposed / auto-completed) character in IE
	this._iCursorPosBeforeBackspace = jQuery(this.getInputDomRef()).cursorPos();
};

/**
 * Handle paste event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onpaste = function(oEvent) {
	//prevent 'multiple-pastes' by e.g. holding down paste combination.
	if(this._oValueBeforePaste === null) {
		this._oValueBeforePaste = jQuery(this.getInputDomRef()).val();
	}
};

/**
 * Handle keyup event
 * This must only be considered if it is from Backspace-key in IE or after paste.
 * In case there is a keyup with a tab this results from being entered via tabbing and can be ignored, too.
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onkeyup = function(oEvent) {
	var iKC = oEvent.which,
		oKC = jQuery.sap.KeyCodes;

	// call keyup function of TextField to get liveChange event
	sap.ui.commons.TextField.prototype.onkeyup.apply(this, arguments);

	if(!(jQuery.browser.msie && iKC === oKC.BACKSPACE) && this._oValueBeforePaste === null || iKC === oKC.TAB) {
		return;
	}
	// it's either backspace in IE or after paste (cumulating potentially multiple pastes, too)

	// as it is keyboard interaction, open the proposal list (if not yet done)
	if(!this.oPopup || !this.oPopup.isOpen()){
		this._open();
	}
	var $Ref = jQuery(this.getInputDomRef()),
		bValid = false;
	// the first case (backspace-handling) could only be true in IE. For FF we do this (less 'tricky') in keypress handler
	if(iKC === oKC.BACKSPACE && this._iCursorPosBeforeBackspace !== null) {
		var iCursorPos = $Ref.cursorPos();
		if(this._iCursorPosBeforeBackspace !== iCursorPos) {
			iCursorPos++;
		} // 'normalize' cursor position for upcoming handling... especially IE8
		this._iCursorPosBeforeBackspace = null; // forget being called by backspace handling
		bValid = this._doTypeAhead($Ref.val().substr(0, iCursorPos-1), "");
	}
	// this must happen to check for valid entry after paste and if required -> rollback
	else if(!(bValid = this._doTypeAhead("", $Ref.val()))){
		$Ref.val(this._oValueBeforePaste);
	}
	// Ensure visibility as well as filtering and new height is applied
	if(bValid) {
		this._getListBox().rerender();
	}

	this._oValueBeforePaste = null;
};

/**
 * Handle pseudo event onsaphome
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsaphome = function(oEvent) {
	if(!this.oPopup || !this.oPopup.isOpen()) {
		this._updateSelection();
		oEvent.preventDefault();
	} else {
		sap.ui.commons.ComboBox.prototype.onsaphome.apply(this, arguments);
	}
};

/**
 * Handle pseudo event onsapdelete.
 * If triggered with open dropdown and current item provided by history feature,
 * removes the selected item from this instance's history.
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapdelete = function(oEvent) {
	if(!this.oPopup || !this.oPopup.isOpen()) {
		return;
	}
	var oLB = this._getListBox(),
		oItem = oLB.getSelectedItem(),
		aMatches = oItem.getId().match(/\-h\-([0-4])/),
		iIdx = oLB.getSelectedIndex();
	if(aMatches && aMatches.length === 2){
		this._aHistory.splice(iIdx,1);
		this._getStorage().put(this._getHistoryId(), this._aHistory);
		oLB.removeItem(iIdx);
		if(this._aHistory.length === 0) {// remove separator element, too
			oLB.removeItem(0);
		}
		oLB.rerender();
		var iNewIndex = iIdx + (this._searchHelpItem?2:0);
		if (iNewIndex == this._aHistory.length) {
			// seperator item can not selected
			iNewIndex++;
		}
		oLB.setSelectedIndex(iNewIndex);
		this.setValue(oLB.getSelectedItem().getText());
	}
};

/**
 * Handle keypress event
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onkeypress = function(oEvent) {
	var iKC = oEvent.which,
		iKeyCode = oEvent.keyCode,
		oKC = jQuery.sap.KeyCodes;
	if(sap.ui.commons.ComboBox._isHotKey(oEvent) 
	      /*|| iKeyCode === oKC.DELETE*/ || iKeyCode === oKC.HOME ||
			iKeyCode === oKC.F4 && oEvent.which === 0 /*this is the Firefox case and ensures 's' with same charCode is accepted*/) {
		return;
	}else if(iKeyCode == oKC.ESCAPE){
		var sValue = this.getProperty("value");
		var oInput = this.getInputDomRef();
		if(oInput && oInput.value !== sValue) {
			jQuery(oInput).val(sValue);
		}
		return;
	}

	var oNewChar = String.fromCharCode(iKC),
		$Ref = jQuery(this.getInputDomRef()),
		iCursorPos = $Ref.cursorPos(),
		sVal = $Ref.val();
	//jQuery.sap.log.debug("current value is: " + sVal + " with cursorPos: " + iCursorPos + " and newChar is: " + oNewChar);

	if(!this.oPopup || !this.oPopup.isOpen()){
		this._open();
	}
	var bValid = false;
	if(iKC === oKC.BACKSPACE) {// only happens in FF or other non-IE-browsers. IE does not support BACKSPACE in keypress
		bValid = this._doTypeAhead(sVal.substr(0, iCursorPos-1), "");
	} else {
		bValid = this._doTypeAhead(sVal.substr(0, iCursorPos), oNewChar);
	}

	// Ensure visibility as well as filtering and new height is applied
	if(bValid) {
		this._getListBox().rerender();
	}

	oEvent.preventDefault();
};

/**
 * Move the cursor one step to the right (and adapt selection)
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapright = function(oEvent) {
	this._updateSelection(1);
	oEvent.preventDefault();
};

/**
 * Move the cursor one step to the left (and adapt selection)
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onsapleft = function(oEvent) {
	this._updateSelection(-1);
	oEvent.preventDefault();
};


//***********************************************************
// Focus handling...
//***********************************************************

/**
 * Handle focusin event
 * Ensures the text gets selected when focus gets into the field
 * @param {jQuery.Event} oEvent the occuring event
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onfocusin = function(oEvent) {
	var $Ref = jQuery(this.getInputDomRef()),
		l = $Ref.val().length;
	if(l > 0){
		this._doSelect(0, l);
	}
};


//***********************************************************
// Text selection handling...
//***********************************************************

/**
 * Handle the select event happening in the DropdownBox
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.DropdownBox.prototype.onselect = function(oEvent) {
	if(this._bIgnoreSelect) {
		this._bIgnoreSelect = false;
		return;
	}

	var $Ref = jQuery(this.getInputDomRef()),
		iNewCursor = $Ref.cursorPos(),
		sVal = $Ref.val();
	if(sVal.length > 0) {
		this._doTypeAhead(sVal.substr(0,iNewCursor), "");
	}
	oEvent.preventDefault();
};

/**
 * Selects the text of the InputDomRef in the given range
 * @param {int} [iStart=0] start position of the text selection
 * @param {int} [iEnd=<length of text>] end position of the text selection
 * @return {sap.ui.commons.DropdownBox} this DropdownBox instance
 * @private
 */
sap.ui.commons.DropdownBox.prototype._doSelect = function(iStart, iEnd){
	this._bIgnoreSelect = true;
	var oDomRef = this.getInputDomRef(),
		$Ref = jQuery(oDomRef);
	// do not call focus in DropdownBox
	$Ref.selectText(iStart ? iStart : 0, iEnd ? iEnd : $Ref.val().length);
	return this;
};

/**
 * Adapt the selection to the cursor position and move the curser beforehand (if parameter iMoveBy is given)
 * @param {integer} iMoveBy the number of places the cursor should move (can be positive (move right) or negative (move left))
 * @private
 */
sap.ui.commons.DropdownBox.prototype._updateSelection = function(iMoveBy) {
	var $Ref = jQuery(this.getInputDomRef()),
		iNewCursor = $Ref.cursorPos() + (iMoveBy || 0),
		sVal = $Ref.val();
	this._doTypeAhead(sVal.substr(0,iNewCursor), "");
	this._getListBox().rerender();
};


//***********************************************************
// Type ahead and list box related
//***********************************************************

/**
 * Returns whether the new value is a valid one
 * @param {object} oValue the value before the event
 * @param {string} oNewChar the newly added character
 * @param {boolean} bNoFilter omit the filtering (e.g. when opening the listbox)
 * @returns {boolean} whether the new value is a valid one
 * @private
 */
sap.ui.commons.DropdownBox.prototype._doTypeAhead = function(oValue, oNewChar, bNoFilter){
	if(this.__doTypeAhead === true){
		return; // recursive from opening the Popup and the _prepareOpen-method
	}
	this.__doTypeAhead = true;

	var oLB = this._getListBox(),
		//oSelectedItem = oLB.getSelectedItem(),
		iMaxPopupItems = this.getMaxPopupItems(),
		aItems = this.__aItems || oLB.getItems(),
		iVisibleItemsCnt = aItems.length,
		// filtering and history only apply when more than a certain number of items is there
		bHistory = aItems.length > this._iItemsForHistory,
		bFilter = !bNoFilter && bHistory,
		oNewValue = oValue + oNewChar,
		rValFilter = RegExp("^" + oNewValue.toLowerCase() + ".*$"),
		iMove = oNewChar && oNewChar.length || 0,
		$Ref = jQuery(this.getInputDomRef());

	this.__aItems = aItems;

	var aCurrentItems,
		// identify items matching already entered value (for autocomplete, item selection)
		aFilteredItems = this._getFilteredItems(aItems, rValFilter),
		bValid = aFilteredItems.length > 0;
	
	if (bValid) {
		// in case we have to filter, only the matching subset of the current items (the configured set) is relevant for display
		if(bFilter) {
			aCurrentItems = aFilteredItems;
		}
		else {
			aCurrentItems = aItems.slice(0);
		}

		var aHistoryItems = [];
		if(bHistory) {
			aHistoryItems = this._addHistoryItems(aCurrentItems, bFilter && rValFilter);
			oLB.setItems(aCurrentItems);
			iVisibleItemsCnt = aCurrentItems.length;
		}
		oLB.setVisibleItems(iMaxPopupItems < iVisibleItemsCnt ? iMaxPopupItems : iVisibleItemsCnt);

		var oItem,
			iHistLength = aHistoryItems.length;
		// if there is no filter (e.g. when opening) but a history, try to find the current value in the history
		if(!bFilter && iHistLength > 0) {
			aHistoryItems = this._getFilteredItems(aHistoryItems, rValFilter);
			oItem = aHistoryItems[0];
		}
		// in case there is filtering in place, select the first (valid) item
		if(bFilter) {
			oItem = aFilteredItems[0];
		} else if(!oItem) {
			// in case there was no filtering and no valid item from history
			// select the first of the filtered non-history items
			if(aFilteredItems.length > 0) {
				oItem = aFilteredItems[0];
			}
			else {// or if nothing else worked out, the first of the available items
				oItem = aCurrentItems[0];
			}
		}
		// OK, we know what to select, let's insert search help if required
		var oSHI = this._searchHelpItem;
		if(oSHI){
			oLB.insertItem(oSHI[0], iHistLength++).insertItem(oSHI[1],iHistLength);
		}
		// find and select the item and update the text and the selection in the inputfield
		var i = oLB.indexOfItem(oItem),
			oText = oItem.getText();
		$Ref.val(oText);
		this._sTypedChars = oNewValue;
		this._doSelect(oValue.length + iMove, oText.length);

		oLB.setSelectedIndex(i);
		oLB.scrollToIndex(i);
	} else {
		// as this was no valid input shortly show some visual hint.
		$Ref = this.$();
		$Ref.addClass("sapUiTfErr");
		jQuery.sap.delayedCall(300, $Ref, "removeClass", ["sapUiTfErr"]);

		// however set the visible items
		oLB.setVisibleItems(iMaxPopupItems < iVisibleItemsCnt ? iMaxPopupItems : iVisibleItemsCnt);
	}
	this.__doTypeAhead = false;
	return bValid;
};

/**
 * Walks over the list of available items in the given oListBox and updates the visual selection.
 * Also updates the Popup to show the right content.
 *
 * @param {sap.ui.commons.ListBox} oListBox listBox belonging to this ComboBox instance.
 * @param {sap.ui.core.Popup} oPopup the instance of the Popup functionality used for opening the proposal list
 * @returns {sap.ui.commons.DropdownBox}
 * @private
 */
sap.ui.commons.DropdownBox.prototype._prepareOpen = function(oListBox, oPopup){
	this._oValueBeforeOpen = this.$().val();
	this._doTypeAhead("", jQuery(this.getInputDomRef()).val(), true);
	return this;
};

/**
 * Ensures the given listbox is 'cleaned-up'.
 * @param {sap.ui.commons.ListBox} oListBox the listBox to clean up
 * @returns {sap.ui.commons.DropdownBox} this instance of DropdownBox
 * @private
 */
sap.ui.commons.DropdownBox.prototype._cleanupClose = function(oListBox){
	if(this.__aItems) {
		oListBox.setItems(this.__aItems);
		this.__aItems = undefined;
	}
	this._oValueBeforeOpen = null;
	return this;
};

/**
 * Returns an array of ListItems matching given rValFilter.
 *
 * @param {sap.ui.core.ListItem[]} aItems array of list items to be filtered
 * @param {RegExp} rValFilter filter expression that can be used to identify valid items
 * @returns {sap.ui.core.ListItem[]} array of list items matching given rValFilter
 * @private
 */
sap.ui.commons.DropdownBox.prototype._getFilteredItems = function(aItems, rValFilter){
	var aTmpItems = aItems.slice(0),
		oItem;
	for (var i = aTmpItems.length - 1; i >= 0; i--){
		oItem = aTmpItems[i];
		if(!rValFilter.test(oItem.getText().toLowerCase()) || !oItem.getEnabled()) {
			aTmpItems.splice(i,1);
		}
	}
	return aTmpItems;
};

/**
 * Enriches provided array of listitems with history if history entries matching given rFilter exist.
 *
 * @param {sap.ui.core.ListItem[]} aItems array of list items to be enriched by history
 * @param {RegExp} rFilter filter expression that can be used to identify valid history items
 * @returns {sap.ui.core.ListItem[]} array of new 'history-list-items' (comprising separator)
 * @private
 */
sap.ui.commons.DropdownBox.prototype._addHistoryItems = function(aItems, rFilter) {
	var sIdPrefix = this.getId() + "-h-",
		oItem,
		aHistory = this._doHistory(),
		l = aHistory.length,
		aNewItems = [];
	// add items from history still matching given set of items
	for(var i = 0; i < 5 && i < l; i++){
		oItem = (oItem = sap.ui.getCore().byId(sIdPrefix + i)) && oItem.setText(aHistory[i]) || new sap.ui.core.ListItem(sIdPrefix + i, {text: aHistory[i]});
		if(!rFilter || rFilter.test(oItem.getText())) {
			aNewItems.push(oItem);
		}
	}
	if(aNewItems.length > 0) {
		var sSepId = sIdPrefix + "separator",
			oSeparator = this._getSeparator(sSepId);
		aNewItems.push(oSeparator);
	}
	aItems.unshift.apply(aItems, aNewItems);
	return aNewItems;
};

/**
 * Returns the separator instance for this DropdownBox.
 * If sSepId is given, this id will be used to either find or create the Separator.
 * If sSepId is omitted, only previously found separator will be returned but no new Separator would be created.
 *
 * @param {sap.ui.core/string} [sSepId] id of the separator to find or create. If omitted, only previously found separator will be returned.
 * @returns {sap.ui.core.SeparatorItem} separator item if found or created or null.
 */
sap.ui.commons.DropdownBox.prototype._getSeparator = function(sSepId){
	if(!this.__oSeparator && sSepId){
		this.__oSeparator = sap.ui.getCore().byId(sSepId) || new sap.ui.core.SeparatorItem(sSepId);
	}
	return this.__oSeparator || null;
};


//***************************************************
// Overwritten methods from API
//***************************************************

/* overwrite standard generated fireChange method */
sap.ui.commons.DropdownBox.prototype.fireChange = function(mArguments) {
	this.fireEvent("change", mArguments);
	if(mArguments.newValue){
		this._doHistory(mArguments.newValue);
	}

	return this;
};

/* overrides generated setValue-method */
sap.ui.commons.DropdownBox.prototype.setValue = function(sValue) {
	// normalize 'empty'  values
	sValue = (sValue === undefined || sValue === null || sValue === "") ? "" : sValue;
	var aItems = this.getItems(),
		oText,
		bValueOK = sValue === ""; //in case this is empty, reset the DropdownBox... TODO: But is this expected behavior?

	// it might be necessary to also check for history... but as this should only contain valid entries, don't worry.
	for (var i = 0, l = aItems.length; i < l && !bValueOK; i++){
		oText = aItems[i].getText();
		bValueOK = oText === sValue;
	}

	// only set the value in case the given one is valid
	if(bValueOK) {
		sap.ui.commons.ComboBox.prototype.setValue.call(this, sValue);
	}

	return this;
};


//***********************************************************
//Focus information handling and rendering related
//***********************************************************

/**
 * Applies the focus info and ensures the typeAhead feature is re-established again.
 *
 * @param {object} oFocusInfo the focus information belonging to this dropdown
 * @private
 */
sap.ui.commons.DropdownBox.prototype.applyFocusInfo = function(oFocusInfo){
 var $Inp = jQuery(this.getInputDomRef());
 if(jQuery.sap.startsWithIgnoreCase(this.getValue(), oFocusInfo.sTypedChars)) {
	 $Inp.val(oFocusInfo.sTypedChars);
	 this.focus();
	 this._doTypeAhead(oFocusInfo.sTypedChars, "");
 } else {
	 oFocusInfo.sTypedChars = "";
//	 $Inp.val(this.getValue()); // enable if really needed
	 this.focus();
	 this._doSelect();
 }
 return this;
};

/**
 * Extends the method inherited from sap.ui.core.Element by providing information on Search Help access (if needed)
 *
 * @return {string} string tooltip or undefined
 * @public
 */
sap.ui.commons.DropdownBox.prototype.getTooltip_AsString = function() {
	var sTooltipString = sap.ui.commons.ComboBox.prototype.getTooltip_AsString.apply(this, arguments);
	if(!this._searchHelpItem) {
		return sTooltipString;
	} else {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
		// ResourceBundle always returns the key if the text is not found
		var sSearchHelp = rb.getText("DDBX_SHI_ARIA");
		sSearchHelp = sSearchHelp === "DDBX_SHI_ARIA"?"Open search help via {0}":sSearchHelp;
		var sAdditionalText = this._searchHelpItem[0] && this._searchHelpItem[0].getAdditionalText() || rb.getText("DDBX_SHIF4");
		sAdditionalText = sAdditionalText === "DDBX_SHIF4"?"F4":sAdditionalText;
		sSearchHelp = sSearchHelp.replace("{0}", sAdditionalText);
		return (sTooltipString?sTooltipString + " - ":"") + sSearchHelp;
	}
};


//***************************************************
// Handling of list events
//***************************************************

/**
 * This method is attached to the ListBox instance when it is open
 * to handle the click event occurring in the ListBox.
 * It additionally closes the Popup.
 * If clicked on SearchHelp entry triggers the appropriate handling
 *
 * @param {sap.ui.base.Event} oControlEvent The event that was raised by the Listbox
 * @private
 */
sap.ui.commons.DropdownBox.prototype._handleSelect = function(oControlEvent) {
	if(this._searchHelpItem && oControlEvent.getParameter("selectedItem") === this._searchHelpItem[0]){
		var oEvent = jQuery.Event("sapshow");
		oEvent.which = jQuery.sap.KeyCodes.F4;
		this.onsapshow(oEvent);
	} else {
		// if history item is selected search for corresponding real item in list
		var oItem = oControlEvent.getParameter("selectedItem");
		if(!oItem){
			// not from ListBox, from ComboBox _open
			oItem = sap.ui.getCore().byId(oControlEvent.getParameter("selectedId"));
		}
		if (oItem.getId().search(this.getId() + "-h-") != -1) {
			// history item selected
			var oLB = this._getListBox(),
				aItems = oLB.getItems();
			for ( var iIndex = this._aHistory.length; iIndex < aItems.length; iIndex++) {
				if (aItems[iIndex].getText() == oItem.getText()) {
					// Item found -> set in event data
					oControlEvent.mParameters.selectedIndex = iIndex;
					if(!oControlEvent.getParameter("selectedIndices")){
						//create arrays
						oControlEvent.mParameters.selectedIndices = new Array(1);
						oControlEvent.mParameters.aSelectedIndices = new Array(1);
					}
					oControlEvent.mParameters.selectedIndices[0] = iIndex;
					oControlEvent.mParameters.aSelectedIndices[0] = iIndex;
					oControlEvent.mParameters.selectedItem = aItems[iIndex];
					break;
				}
			}
		}
		
		return sap.ui.commons.ComboBox.prototype._handleSelect.apply(this, arguments);
	}
};


//***************************************************
// History and Storage related
//***************************************************

/**
 * Handles the history feature of this DropdownBox.
 * Initializes the history of this instance (if not yet done) and if a new value <code>sValue</code> is given
 * the latter one is added to the list of history entries.
 *
 * @param {string} [sValue] the new value to add to this instance's history or null if only history initialization should be done
 * @returns {Array} the value history
 * @private
 */
sap.ui.commons.DropdownBox.prototype._doHistory = function(sValue) {
	var sHistoryId = this._getHistoryId();

	var aHistory = this._aHistory;
	var oStorage = this._getStorage();
	if(!aHistory) {
		// try to get the history from the local storage
		aHistory = oStorage.get(sHistoryId);
		if(typeof(aHistory) === "string") {
			// in case it is a string, convert it to an array
			aHistory = aHistory.split(",");
		} else if(!aHistory){
			// or create a new one in case of non existence
			aHistory = [];
		} // else assume that there is the means for serializing JSON used, returning an array directly
		this._aHistory = aHistory;

		// it is necessary to check for valid history here (i.e. all history entries still in list of items)
		var oItemMap = {},
			aItems = this.getItems();
		// ensure performance -> O(n)... short-cut knowledge about existing item texts
		for(var i = 0, l = aItems.length; i<l;i++){
			oItemMap[aItems[i].getText()] = true;
		}
		// now, check every entry in history -> O(m) and 'random access' into previously created map
		for(var i = aHistory.length -1; i >= 0; i--){
			if(!oItemMap[aHistory[i]]) {
				aHistory.splice(i,1);
			}
		}
	}

	// if there is a value to add
	if(sValue){
		for (var i = 0, l = aHistory.length; i <l; i++) {
			if(aHistory[i] === sValue){
				// ensure it is not contained twice -> remove
				aHistory.splice(i,1);
				break;
			}
		}
		// and put it to the 'very top'
		aHistory.unshift(sValue);
		// but do not store more than specified
		if(aHistory.length > 5) {
			aHistory.splice(5);
		}

		oStorage.put(sHistoryId, aHistory);
	}
	return aHistory;
};

/**
 * Returns a prefixed id for storing this instance's value history.
 * @returns
 * @private
 */
sap.ui.commons.DropdownBox.prototype._getHistoryId = function() {
//	return this.getId();// TODO: Should this also comprise the URL or other information?
	if(!this._sHistPrefix) {
		this._sHistPrefix = document.location.pathname;
	} // path is sufficient as host should be ensured by browser's security means
	return this._sHistPrefix + this.getId();
};

/**
 * Returns the storage helper used for this instance
 * @returns {jQuery.sap.storage} the storage helper used for this instance
 * @private
 */
sap.ui.commons.DropdownBox.prototype._getStorage = function() {
	if(!this._oStorage){
		this._oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
//		this._oStorage = jQuery.sap.storage;
	}
	return this._oStorage;
};


//***************************************************
// API method implementation
//***************************************************

/**
 * Overwrite of Setter for property <code>searchHelpEnabled</code>.
 * This method accepts additional parameter to be compatiple with the
 * previous functionality
 *
 * Default value is <code>false</code>
 *
 * @param {boolean} bEnabled new value for property <code>searchHelpEnabled</code>
 * @param {string} sText new value for property <code>searchHelpText</code>
 * @param {string} sAdditionalText new value for property <code>searchHelpAdditionalText</code>
 * @param {string} sIcon new value for property <code>searchHelpIcon</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpEnabled = function(bEnabled, sText, sAdditionalText, sIcon) {

	this.setProperty("searchHelpEnabled", bEnabled);
	
	// set additional optional properties
	if (sText) {
		this.setProperty("searchHelpText", sText);		
	}else{
		sText = this.getSearchHelpText();
	}
	if (sAdditionalText) {
		this.setProperty("searchHelpAdditionalText", sAdditionalText);		
	}else{
		sAdditionalText = this.getSearchHelpAdditionalText();
	}
	if (sIcon) {
		this.setProperty("searchHelpIcon", sIcon);		
	}else{
		sIcon = this.getSearchHelpIcon();
	}
	
	if(bEnabled) {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
		if ( rb ) {
			// ResourceBundle always returns the key if the text is not found
			sText = sText || rb.getText("DDBX_SHI");
			sText = sText === "DDBX_SHI"?"Search Help":sText;
			sAdditionalText = sAdditionalText || rb.getText("DDBX_SHIF4");
			sAdditionalText = sAdditionalText === "DDBX_SHIF4"?"F4":sAdditionalText;
		}
		sIcon = sIcon || sap.ui.resource("sap.ui.commons", "img/dropdown/ico12_f4.gif");
		if(!this._searchHelpItem) {
			this._searchHelpItem = [new sap.ui.core.ListItem(this.getId() + "_shi", {
				text: sText,
				additionalText: sAdditionalText,
				enabled: true,
				icon: sIcon
				}),
				new sap.ui.core.SeparatorItem()];
		} else {
			this._searchHelpItem[0].setText(sText).setAdditionalText(sAdditionalText).setIcon(sIcon);
		}
	} else {
		if ( this._searchHelpItem ) {
			this._searchHelpItem[0].destroy();
			this._searchHelpItem[1].destroy();
			this._searchHelpItem = null;
		}
	}
	
	return this;
};

/**
 * Overwrite of Setter for property <code>searchHelpText</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sSearchHelpText new value for property <code>searchHelpText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpText = function(sSearchHelpText) {
 this.setProperty("searchHelpText", sSearchHelpText);

 this.setSearchHelpEnabled(this.getSearchHelpEnabled(), sSearchHelpText, this.getSearchHelpAdditionalText(), this.getSearchHelpIcon());

 return this;
};

/**
 * Overwrite of Setter for property <code>searchHelpAdditionalText</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sSearchHelpAdditionalText new value for property <code>searchHelpAdditionalText</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpAdditionalText = function(sSearchHelpAdditionalText) {
 this.setProperty("searchHelpAdditionalText", sSearchHelpAdditionalText);

 this.setSearchHelpEnabled(this.getSearchHelpEnabled(), this.getSearchHelpText(), sSearchHelpAdditionalText, this.getSearchHelpIcon());

 return this;
};

/**
 * Overwrite of Setter for property <code>searchHelpIcon</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sSearchHelpIcon new value for property <code>searchHelpIcon</code>
 * @return {sap.ui.commons.DropdownBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DropdownBox.prototype.setSearchHelpIcon = function(sSearchHelpIcon) {
 this.setProperty("searchHelpIcon", sSearchHelpIcon);

 this.setSearchHelpEnabled(this.getSearchHelpEnabled(), this.getSearchHelpText(), this.getSearchHelpAdditionalText(), sSearchHelpIcon);

 return this;
};

/**
 * Check if value fits to items. If not, set to first item
 * @private
 */
sap.ui.commons.DropdownBox.prototype.checkValueInItems = function() {

	var sValue = this.getValue();
	var aItems = this.getItems();
	
	// only check the value in the items when items are available
	// TODO: reset the value?
	if (aItems && aItems.length > 0) {
	
		var bValueOK = false; 
	
		for (var i = 0, l = aItems.length; i < l && !bValueOK; i++){
			bValueOK = aItems[i].getText() === sValue;
		}
	
		if(!bValueOK) {
			sValue = aItems[0].getText();
			sap.ui.commons.ComboBox.prototype.setValue.call(this, sValue);
		}
		
	}
	
	return sValue;
	
}; 