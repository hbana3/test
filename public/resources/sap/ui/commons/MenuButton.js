/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MenuButton.
jQuery.sap.declare("sap.ui.commons.MenuButton");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.Button");

/**
 * Constructor for a new MenuButton.
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
 * <li>dockButton : string</li>
 * <li>dockMenu : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>menu : sap.ui.commons.Menu</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>itemSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.commons.Button#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Common button control that opens a menu when clicked by the user. The control provides an API for configuring the docking position
 * of the menu.
 * 
 * @extends sap.ui.commons.Button
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.MenuButton = function (sId, mSettings) {
	sap.ui.commons.Button.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.MenuButton.prototype = jQuery.sap.newObject(sap.ui.commons.Button.prototype);

/*
 * Describe the sap.ui.commons.MenuButton. 
 * Resulting metadata can be obtained via sap.ui.commons.MenuButton.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.MenuButton", {

  // ---- object ----
  baseType : "sap.ui.commons.Button",
  publicMethods : [
    // properties 
    "getDockButton", "setDockButton", "getDockMenu", "setDockMenu", 
    // aggregations
    "getMenu", "setMenu", "destroyMenu", 
    // associations
    
    // events
    "attachItemSelected", "detachItemSelected"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "dockButton" : {name : "dockButton", type : "string", group : "Misc", defaultValue : null},
    "dockMenu" : {name : "dockMenu", type : "string", group : "Misc", defaultValue : null}
  },
  defaultAggregation : "menu",
  aggregations : {
    "menu" : {name : "menu", type : "sap.ui.commons.Menu", multiple : false}
  },
  associations : {},
  events : {
    "itemSelected" : "itemSelected"
  }

});	

sap.ui.commons.MenuButton.M_EVENTS = {'itemSelected':'itemSelected'};


/**
 * Getter for property <code>dockButton</code>.
 * The position / edge (see sap.ui.core.Popup.Dock) of the button where the menu is docked. Default is 'begin bottom'.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>dockButton</code>
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.getDockButton = function() {
	return this.getProperty("dockButton");
};

/**
 * Setter for property <code>dockButton</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDockButton  new value for property <code>dockButton</code>
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.setDockButton = function(sDockButton) {
	this.setProperty("dockButton", sDockButton);
	return this;
};


/**
 * Getter for property <code>dockMenu</code>.
 * The position / edge (see sap.ui.core.Popup.Dock) of the menu which is docked to the button. Default is 'begin top'.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>dockMenu</code>
 * @public
 * 
 */
sap.ui.commons.MenuButton.prototype.getDockMenu = function() {
	return this.getProperty("dockMenu");
};

/**
 * Setter for property <code>dockMenu</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDockMenu  new value for property <code>dockMenu</code>
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.setDockMenu = function(sDockMenu) {
	this.setProperty("dockMenu", sDockMenu);
	return this;
};

	
/**
 * Getter for aggregation <code>menu</code>.<br/>
 * Menu that shall be opened when the button is clicked
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 */
sap.ui.commons.MenuButton.prototype.getMenu = function() {
	return this.getAggregation("menu", null);
};


/**
 * Setter for the aggregated <code>menu</code>.
 * @param oMenu {sap.ui.commons.Menu}
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.setMenu = function(oMenu) {
	this.setAggregation("menu", oMenu);
	return this;
};
	

/**
 * Destroys the menu in the aggregation 
 * named <code>menu</code>.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.destroyMenu = function() {
	this.destroyAggregation("menu");
	return this;
};


/**
 * Event that is fired when a menu item is selected by the user 
 *
 * @name sap.ui.commons.MenuButton#itemSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId The ID of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'itemSelected' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 * Event that is fired when a menu item is selected by the user 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.attachItemSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("itemSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'itemSelected' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.detachItemSelected = function(fnFunction, oListener) {
	this.detachEvent("itemSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event itemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The ID of the selected item</li>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.MenuButton.prototype.fireItemSelected = function(mArguments) {
	this.fireEvent("itemSelected", mArguments);
	return this;
};


// Start of sap/ui/commons/MenuButton.js
(function() {

sap.ui.commons.MenuButton.prototype.init = function() {
	this.addStyleClass("sapUiMenuButton");
	this.bWithKeyboard = false;
};

/**
 * Function is called when button is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onclick = function(oEvent) {
	if(this.getEnabled()){
		var sDockButton = this.getDockButton() ? this.getDockButton() : sap.ui.core.Popup.Dock.BeginBottom;
		var sDockMenu = this.getDockMenu() ? this.getDockMenu() : sap.ui.core.Popup.Dock.BeginTop;
		this.getMenu().open(this.bWithKeyboard, this.getDomRef(), sDockMenu, sDockButton, this.getDomRef());
	}
	this.bWithKeyboard = false;
	oEvent.preventDefault();
};

/**
 * Function is called when enter key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onsapenter = function(oEvent){
	//It is sufficient to set this flag here only. A click event to open the menu will follow.
	this.bWithKeyboard = true;
};

/**
 * Function is called when space key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onsapspace = function(oEvent){
	//It is sufficient to set this flag here only. A click event to open the menu will follow.
	this.bWithKeyboard = true;
};

/**
 * Function is called when down key is pressed with a modifier key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
//Requested by UX, see CSN 0120061532 0001379793 2011
sap.ui.commons.MenuButton.prototype.onsapdownmodifiers = function(oEvent){
	if(oEvent.altKey){
		this.bWithKeyboard = true;
		this.onclick(oEvent);
	}
};

/**
 * Setter for the aggregated <code>menu</code>.
 * @param oMenu {sap.ui.commons.Menu}
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.setMenu = function(oMenu) {
	updateMenuEventRegistration(this, oMenu);
	this.setAggregation("menu", oMenu);
	return this;
};

/**
 * Destroys the menu in the aggregation
 * named <code>menu</code>.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.destroyMenu = function() {
	updateMenuEventRegistration(this, null);
	this.destroyAggregation("menu");
	return this;
};

//********** Private **********

// Detaches the select event handler from the current menu and attaches it to the new menu
var updateMenuEventRegistration = function(oThis, oNewMenu){
	var oMenu = oThis.getMenu();
	if(oMenu) {
		oMenu.detachItemSelect(oThis._fItemSelectHandler);
	}
	oThis._fItemSelectHandler = jQuery.proxy(onItemSelected, oThis);
	if(oNewMenu) {
		oNewMenu.attachItemSelect(oThis._fItemSelectHandler);
	}
};

//Function is called when an item in the menu was selected.
var onItemSelected = function(oEvent){
	var oItem = oEvent.getParameter("item");
	this.fireItemSelected({itemId: oItem.getId(), item: oItem});
	this.firePress({itemId: oItem.getId(), item: oItem});
	//Forces menu closing
	this.getMenu().close();
};

}());

// to overwrite JS doc for inherited press event

/**
 * Fired when an item from the menu was selected.
 * 
 * @see sap.ui.commons.MenuButton#itemSelected
 *
 * @name sap.ui.commons.MenuButton#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * 
 * @param {string} oControlEvent.getParameters.itemId The id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 * 
 * Event is fired when an item from the menu was selected.
 * 
 * @see sap.ui.commons.MenuButton#attachItemSelected
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 *
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */

/**
 * Detach event-handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 * 
 * @see sap.ui.commons.MenuButton#detachItemSelected
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */

/**
 * Fire event press to attached listeners.
 * 
 * @see sap.ui.commons.MenuButton#fireItemSelected
 * 
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @protected
 */