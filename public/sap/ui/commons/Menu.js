/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Menu.
jQuery.sap.declare("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Menu.
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
 * <li>enabled : boolean</li>
 * <li>ariaDescription : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>items : sap.ui.commons.MenuItemBase</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>itemSelect : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * A container for menu items. When the space in the browser is not large enough to display all defined items, a scroll bar is provided.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Menu = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Menu.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.Menu. 
 * Resulting metadata can be obtained via sap.ui.commons.Menu.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Menu", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getEnabled", "setEnabled", "getAriaDescription", "setAriaDescription", 
    // aggregations
    "getItems", "insertItem", "addItem", "removeItem", "removeAllItems", "indexOfItem", "destroyItems", 
    // associations
    
    // events
    "attachItemSelect", "detachItemSelect", 
    // methods
    "open", "close"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "ariaDescription" : {name : "ariaDescription", type : "string", group : "Accessibility", defaultValue : null}
  },
  defaultAggregation : "items",
  aggregations : {
    "items" : {name : "items", type : "sap.ui.commons.MenuItemBase", multiple : true, singularName : "item"}
  },
  associations : {},
  events : {
    "itemSelect" : "itemSelect"
  }

});	

sap.ui.commons.Menu.M_EVENTS = {'itemSelect':'itemSelect'};


/**
 * Getter for property <code>enabled</code>.
 * 
 * Disabled menus have other colors than enabled ones, depending on customer settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.Menu.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Menu.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>ariaDescription</code>.
 * 
 * The label/description provided for screen readers
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>ariaDescription</code>
 * @public
 * 
 */
sap.ui.commons.Menu.prototype.getAriaDescription = function() {
	return this.getProperty("ariaDescription");
};

/**
 * Setter for property <code>ariaDescription</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAriaDescription  new value for property <code>ariaDescription</code>
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Menu.prototype.setAriaDescription = function(sAriaDescription) {
	this.setProperty("ariaDescription", sAriaDescription);
	return this;
};

	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of menu items
 * 
 * @return {sap.ui.commons.MenuItemBase[]}
 * @public
 */
sap.ui.commons.Menu.prototype.getItems = function() {
	return this.getAggregation("items", []);
};


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.MenuItemBase}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Menu.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	return this;
};

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.MenuItemBase}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.Menu.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	return this;
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItemBase} vItem the item to remove or its index or id
 * @return {sap.ui.commons.MenuItemBase} the removed item or null
 * @public
 */
sap.ui.commons.Menu.prototype.removeItem = function(vItem) {
	return this.removeAggregation("items", vItem);
};

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItemBase[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.Menu.prototype.removeAllItems = function() {
	return this.removeAllAggregation("items");
};

/**
 * Checks for the provided <code>sap.ui.commons.MenuItemBase</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItemBase}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.Menu.prototype.indexOfItem = function(oItem) {
	return this.indexOfAggregation("items", oItem);
};
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Menu.prototype.destroyItems = function() {
	this.destroyAggregation("items");
	return this;
};


/**
 * 
 * Provides the application an alternative option to listen to select events. This event is only fired on the root menu of a menu hierarchy.
 * Note that there is also a select event available for MenuItem; if the current event is used, the select event of a MenuItem becomes redundant.
 *  
 *
 * @name sap.ui.commons.Menu#itemSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'itemSelect' event of this <code>sap.ui.commons.Menu</code>.<br/>
 * 
 * Provides the application an alternative option to listen to select events. This event is only fired on the root menu of a menu hierarchy.
 * Note that there is also a select event available for MenuItem; if the current event is used, the select event of a MenuItem becomes redundant.
 *  
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Menu.prototype.attachItemSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("itemSelect", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'itemSelect' event of this <code>sap.ui.commons.Menu</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Menu.prototype.detachItemSelect = function(fnFunction, oListener) {
	this.detachEvent("itemSelect", fnFunction, oListener);
	return this;	
};

/**
 * Fire event itemSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.Menu.prototype.fireItemSelect = function(mArguments) {
	this.fireEvent("itemSelect", mArguments);
	return this;
};


/**
 * Opens the menu
 *
 * @name sap.ui.commons.Menu.prototype.open
 * @function
 * @param {boolean} 
 *         bWithKeyboard
 *         
 * An indicator whether the first item shall be highlighted, or not. It is highlighted in the case that the menu is opened via keyboard.
 * 
 * @param {object} 
 *         sOpenerRef
 *         
 * DOMNode that opens the menu; the DOMNode will be focused again after the menu is closed. This parameter is optional.
 * 
 * @param {string} 
 *         sMy
 *         
 * The popup content's reference position for docking.
 * See also sap.ui.core.Popup.Dock and sap.ui.core.Popup.open.
 * 
 * @param {string} 
 *         sAt
 *         
 * The 'of' element's reference point for docking to.
 * See also sap.ui.core.Popup.Dock and sap.ui.core.Popup.open.
 * 
 * @param {string} 
 *         sOf
 *         
 * The DOM element or control to dock to.
 * See also sap.ui.core.Popup.open.
 * 
 * @param {string} 
 *         sOffset
 *         
 * The offset relative to the docking point, specified as a string with space-separated pixel values (e.g. "0 10" to move the popup 10 pixels to the right).
 * See also sap.ui.core.Popup.open.
 * 

 * @type void
 * @public
 */


/**
 * Closes the menu
 *
 * @name sap.ui.commons.Menu.prototype.close
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/Menu.js
jQuery.sap.require("sap.ui.commons.MenuItemBase");
jQuery.sap.require("sap.ui.core.Popup");

sap.ui.commons.Menu.prototype.init = function(){
	this.bOpen = false;
	this.oOpenedSubMenu = null;
	this.oHoveredItem = null;
	this.oPopup = null; // Will be created lazily
	this.fAnyEventHandlerProxy = jQuery.proxy(this.onAnyEvent, this);
	this.bUseTopStyle = false;
};

/**
 * Does all the cleanup when the Menu is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.Menu.prototype.exit = function(){
	if(this.oPopup){
		this.oPopup.destroy();
	}
	if(this.fAnyEventHandlerProxy){
		jQuery.sap.unbindAnyEvent(this.fAnyEventHandlerProxy);
	}
	// Cleanup resize event registration
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

//TODO: Should the static UI Area be able to rerender invalid controls -> maybe extend popup/static UIArea
sap.ui.commons.Menu.prototype._invalidate = sap.ui.commons.Menu.prototype.invalidate;

/**
 * @protected
 */
sap.ui.commons.Menu.prototype.invalidate = function() {
	var oParent = this.getParent();
	if(!oParent && this.getDomRef()){
		//Control is used without being attached to the control tree
		jQuery.sap.delayedCall(0, this, "rerender");
	}else{
		this._invalidate();
	}
};

/**
 * Called before rendering starts by the renderer
 * @private
 */
sap.ui.commons.Menu.prototype.onBeforeRendering = function() {
	// Cleanup resize event registration before re-rendering
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

/**
 * Called when the rendering is complete
 * @private
 */
sap.ui.commons.Menu.prototype.onAfterRendering = function() {
	//Might be in the end not a good idea to listen for resizing the body / window because the body might change its size
	//during a menu is opened (which then closes the menu again):

	//Listen to resizing of the document
	//if(this.getRootMenu() == this)
	//	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(jQuery.browser.msie ? window : jQuery("body").get(0), jQuery.proxy(this.onresize, this));
};

///**
// * Called when the control is resized
// * @private
// */
//sap.ui.commons.Menu.prototype.onresize = function(oEvent) {
//	if(!this.bOpen) return;
//	this.close();
//};


//****** API Methods ******

sap.ui.commons.Menu.prototype.open = function(bWithKeyboard, oOpenerRef, my, at, of, offset){
	if(this.bOpen) {
		return;
	}

	this.bOpen = true;
	this.oOpenerRef = oOpenerRef;

	// Open the sap.ui.core.Popup
	this.getPopup().open(0, my, at, of, offset);

	// Mark the first item when using the keyboard
	if (bWithKeyboard) {
		this.setHoveredItem(this.getNextVisibleItem(-1));
	}

	// Set the tab index of the menu and focus
	var oDomRef = this.getDomRef();
	jQuery(oDomRef).attr("tabIndex", 0).focus();
	jQuery.sap.bindAnyEvent(this.fAnyEventHandlerProxy);
};

sap.ui.commons.Menu.prototype.close = function() {
	if(!this.bOpen) {
		return;
	}

	if(this.fAnyEventHandlerProxy){
		jQuery.sap.unbindAnyEvent(this.onAnyEvent);
	}

	this.bOpen = false;
	// Close all sub menus if there are any
	if(this.oOpenedSubMenu) {
		this.oOpenedSubMenu.close();
	}

	// Reset the hover state
	this.setHoveredItem();

	// Reset the tab index of the menu and focus the opener (if there is any)
	jQuery(this.getDomRef()).attr("tabIndex", -1);
	if(this.oOpenerRef && !this.ignoreOpenerDOMRef) {
		this.oOpenerRef.focus();
	}
	this.oOpenerRef = undefined;

	// Close the sap.ui.core.Popup
	this.getPopup().close(0);

	if(this.isSubMenu()){
		this.getParent().getParent().oOpenedSubMenu = null;
	}
};

//****** Event Handlers ******

sap.ui.commons.Menu.prototype.onclick = function(oEvent){
	this.selectItem(this.getItemByDomRef(oEvent.target), false);
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapnext = function(oEvent){
	//right or down (RTL: left or down)
	if(oEvent.keyCode != jQuery.sap.KeyCodes.ARROW_DOWN){
		//Go to sub menu if available
		if(this.oHoveredItem && this.oHoveredItem.getSubmenu() && this.checkEnabled(this.oHoveredItem)){
			this.openSubmenu(this.oHoveredItem, true);
			return;
		}
	}

	//Go to the next visible item
	var iIdx = this.oHoveredItem ? this.indexOfAggregation("items", this.oHoveredItem) : -1;
	this.setHoveredItem(this.getNextVisibleItem(iIdx));
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapprevious = function(oEvent){
	//left or up (RTL: right or up)
	if(oEvent.keyCode != jQuery.sap.KeyCodes.ARROW_UP){
		//Go to parent menu if this is a sub menu
		if(this.isSubMenu()){
			this.close();
			oEvent.preventDefault();
			oEvent.stopPropagation();
			return;
		}
	}

	//Go to the previous visible item
	var iIdx = this.oHoveredItem ? this.indexOfAggregation("items", this.oHoveredItem) : -1;
	this.setHoveredItem(this.getPreviousVisibleItem(iIdx));
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsaphome = function(oEvent){
	//Go to the first visible item
	var aItems = this.getItems();
	var oItem = null;
	for(var i=0; i<aItems.length; i++){
		if(aItems[i].getVisible()){
			oItem = aItems[i];
			break;
		}
	}

	this.setHoveredItem(oItem);
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapend = function(oEvent){
	//Go to the last visible item
	var aItems = this.getItems();
	var oItem = null;
	for(var i=aItems.length-1; i>=0; i--){
		if(aItems[i].getVisible()){
			oItem = aItems[i];
			break;
		}
	}

	this.setHoveredItem(oItem);
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapselect = function(oEvent){
	this._sapSelectOnKeyDown = true;
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onkeyup = function(oEvent){
	//like sapselect but on keyup:
	//Using keydown has the following side effect:
	//If the selection leads to a close of the menu and the focus is restored to the caller (e.g. a button)
	//the keyup is fired on the caller (in case of a button a click event is fired there in FF -> Bad!)
	//The attribute _sapSelectOnKeyDown is used to avoid the problem the other way round (Space is pressed
	//on Button which opens the menu and the space keyup immediately selects the first item)
	if(!this._sapSelectOnKeyDown){
		return;
	}else{
		this._sapSelectOnKeyDown = false;
	}
	if(!jQuery.sap.PseudoEvents.sapselect.fnCheck(oEvent)) {
		return;
	}
	this.selectItem(this.oHoveredItem, true);
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapescape = function(oEvent){
	this.close();
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onmouseover = function(oEvent){
	var oItem = this.getItemByDomRef(oEvent.target);
	if(!this.bOpen || !oItem || oItem == this.oHoveredItem) {
		return;
	}

	if(this.oOpenedSubMenu && jQuery.sap.containsOrEquals(this.oOpenedSubMenu.getDomRef(), oEvent.target)) {
		return;
	}

	this.setHoveredItem(oItem);

	if (this.oOpenedSubMenu) {
		this.oOpenedSubMenu.close();
		this.oOpenedSubMenu = null;
	}

	this.getDomRef().focus();

	if(this.checkEnabled(oItem)) {
		this.openSubmenu(oItem, false);
	}
};

sap.ui.commons.Menu.prototype.onmouseout = function(oEvent){
	if(jQuery.sap.checkMouseEnterOrLeave(oEvent, this.getDomRef())){
		if(!this.oOpenedSubMenu || !this.oOpenedSubMenu.getParent() === this.oHoveredItem) {
			this.setHoveredItem(null);
		}
	}
};

/**
 * Handles the outer event of the popup.
 * @param {sap.ui.core.Event} oControlEvent The event
 * @private
 */
sap.ui.commons.Menu.prototype.onAnyEvent = function(oEvent){
	if(!this.bOpen || oEvent.type != "mousedown") {
		return;
	}
	var oSource = oEvent.target, oDomRef = this.getDomRef();
	if(!jQuery.sap.containsOrEquals(oDomRef, oSource) || oSource.tagName=="BODY"){
		this.getRootMenu().handleOuterEvent(this.getId(), oEvent);
	}
};

/**
 * Handles the onsapfocusleave event
 * @param {jQuery.Event} oEvent The browser event
 * @private
 */
sap.ui.commons.Menu.prototype.onsapfocusleave = function(oEvent){
	// Only the deepest opened sub menu should handle the event or ignore the event from an item
	if(this.oOpenedSubMenu || !this.bOpen) {
		return;
	}
	this.getRootMenu().handleOuterEvent(this.getId(), oEvent);
};

//****** Helper Methods ******

sap.ui.commons.Menu.prototype.handleOuterEvent = function(oMenuId, oEvent){
	var isInMenuHierarchy = false;
	if (oEvent.type == "mousedown"){
		var currentMenu = this;
		while(currentMenu){
			if(jQuery.sap.containsOrEquals(currentMenu.getDomRef(), oEvent.target)){
				isInMenuHierarchy = true;
			}
			currentMenu = currentMenu.oOpenedSubMenu;
		}
	}else if (oEvent.type == "sapfocusleave"){
		if(oEvent.relatedControlId){
			var currentMenu = this;
			while(currentMenu){
				if((currentMenu.oOpenedSubMenu && currentMenu.oOpenedSubMenu.getId() == oEvent.relatedControlId)
						|| jQuery.sap.containsOrEquals(currentMenu.getDomRef(), jQuery.sap.byId(oEvent.relatedControlId).get(0))){
					isInMenuHierarchy = true;
				}
				currentMenu = currentMenu.oOpenedSubMenu;
			}
		}
	}

	if(!isInMenuHierarchy) {
		this.ignoreOpenerDOMRef = true;
		this.close();
		this.ignoreOpenerDOMRef = false;
	}
};

sap.ui.commons.Menu.prototype.getItemByDomRef = function(oDomRef){
	var oItems = this.getItems(),
		iLength = oItems.length;
	for(var i=0;i<iLength;i++){
		var oItem = oItems[i],
			oItemRef = oItem.getDomRef();
		if(jQuery.sap.containsOrEquals(oItemRef, oDomRef)) {
			return oItem;
		}
	}
	return null;
};

sap.ui.commons.Menu.prototype.selectItem = function(oItem, bWithKeyboard){
	if(!oItem || !(oItem instanceof sap.ui.commons.MenuItemBase && this.checkEnabled(oItem))) {
		return;
	}

	var oSubMenu = oItem.getSubmenu();

	if(!oSubMenu){
		// This is a normal item -> Close all menus and fire event.
		this.getRootMenu().close();
	}else{
		// Item with sub menu was triggered -> Open sub menu and fire event.
		this.openSubmenu(oItem, bWithKeyboard);
	}

	oItem.fireSelect({item: oItem});
	this.getRootMenu().fireItemSelect({item: oItem});
};

sap.ui.commons.Menu.prototype.isSubMenu = function(){
	return this.getParent() && this.getParent().getParent && this.getParent().getParent() instanceof sap.ui.commons.Menu;
};

sap.ui.commons.Menu.prototype.getRootMenu = function(){
	var oMenu = this;
	while(oMenu.isSubMenu()){
		oMenu = oMenu.getParent().getParent();
	}
	return oMenu;
};

sap.ui.commons.Menu.prototype.getMenuLevel = function(){
	var iLevel = 1;
	var oMenu = this;
	while(oMenu.isSubMenu()){
		oMenu = oMenu.getParent().getParent();
		iLevel++;
	}
	return iLevel;
};

sap.ui.commons.Menu.prototype.getPopup = function (){
	if(!this.oPopup){
		this.oPopup = new sap.ui.core.Popup(this, false, true); // content, modal, shadow
	}
	return this.oPopup;
};

sap.ui.commons.Menu.prototype.setHoveredItem = function(oItem){
	if(this.oHoveredItem) {
		this.oHoveredItem.hover(false, this);
	}

	if(!oItem){
		this.oHoveredItem = null;
		jQuery(this.getDomRef()).removeAttr("aria-activedescendant");
		return;
	}

	this.oHoveredItem = oItem;
	oItem.hover(true, this);
	if(sap.ui.getCore().getConfiguration().getAccessibility()) {
		jQuery(this.getDomRef()).attr("aria-activedescendant", this.oHoveredItem.getId());
	}
};

sap.ui.commons.Menu.prototype.openSubmenu = function(oItem, bWithKeyboard){
	var oSubMenu = oItem.getSubmenu();
	if(!oSubMenu) {
		return;
	}

	if(this.oOpenedSubMenu === oSubMenu){
		// Sub menu is already open. Close it.
		this.oOpenedSubMenu = null;
		oSubMenu.close();
	}else{
		if(this.oOpenedSubMenu){
			// Another sub menu is open. Close it at first.
			this.oOpenedSubMenu.close();
			this.oOpenedSubMenu = null;
		}
		// Open the sub menu
		this.oOpenedSubMenu = oSubMenu;
		var eDock = sap.ui.core.Popup.Dock;
		oSubMenu.open(bWithKeyboard, this.getDomRef(), eDock.BeginTop, eDock.EndTop, oItem.getDomRef(), "0 0");
	}
};

sap.ui.commons.Menu.prototype.checkEnabled = function(oItem){
	return oItem && oItem.getEnabled() && this.getEnabled();
};

sap.ui.commons.Menu.prototype.getNextVisibleItem = function(iIdx){
	var oItem = null;
	var aItems = this.getItems();

	// At first, start with the next index
	for(var i=iIdx+1; i<aItems.length; i++){
		if(aItems[i].getVisible()){
			oItem = aItems[i];
			break;
		}
	}

	// If nothing found, start from the beginning
	if(!oItem){
		for(var i=0; i<=iIdx; i++){
			if(aItems[i].getVisible()){
				oItem = aItems[i];
				break;
			}
		}
	}

	return oItem;
};

sap.ui.commons.Menu.prototype.getPreviousVisibleItem = function(iIdx){
	var oItem = null;
	var aItems = this.getItems();

	// At first, start with the previous index
	for(var i=iIdx-1; i>=0; i--){
		if(aItems[i].getVisible()){
			oItem = aItems[i];
			break;
		}
	}

	// If nothing found, start from the end
	if(!oItem){
		for(var i=aItems.length-1; i>=iIdx; i--){
			if(aItems[i].getVisible()){
				oItem = aItems[i];
				break;
			}
		}
	}

	return oItem;
};

sap.ui.commons.Menu.prototype.setRootMenuTopStyle = function(bUseTopStyle){
	this.getRootMenu().bUseTopStyle = bUseTopStyle;
	sap.ui.commons.Menu.rerenderMenu(this.getRootMenu());
};


sap.ui.commons.Menu.rerenderMenu = function(oMenu){
	var aItems = oMenu.getItems();
	for(var i=0; i<aItems.length; i++){
		var oSubMenu = aItems[i].getSubmenu();
		if(oSubMenu) {
			sap.ui.commons.Menu.rerenderMenu(oSubMenu);
		}
	}

	oMenu.invalidate();
	oMenu.rerender();
};