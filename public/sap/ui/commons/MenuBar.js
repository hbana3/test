/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MenuBar.
jQuery.sap.declare("sap.ui.commons.MenuBar");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new MenuBar.
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
 * <li>visible : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>design : sap.ui.commons.MenuBarDesign</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>items : sap.ui.commons.MenuItem</li></ul>
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
 * Represents a user interface area which is the entry point for menus with their menu items. MenuBar is useful for applications which shall offer a
 * set of actions that shall be provided in a structured way. The MenuBar contains the menu titles from where users navigate to the single items. The control supports
 * for example long menu item texts, automated scrolling for menu items when the browser space is not large enough to display all items, defining images for single
 * or all items in a menu, automated layouting of items with or w/o image, and active/non-active items.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.MenuBar = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.MenuBar.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.MenuBar. 
 * Resulting metadata can be obtained via sap.ui.commons.MenuBar.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.MenuBar", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getEnabled", "setEnabled", "getVisible", "setVisible", "getWidth", "setWidth", "getDesign", "setDesign", 
    // aggregations
    "getItems", "insertItem", "addItem", "removeItem", "removeAllItems", "indexOfItem", "destroyItems"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
    "design" : {name : "design", type : "sap.ui.commons.MenuBarDesign", group : "Appearance", defaultValue : sap.ui.commons.MenuBarDesign.Standard}
  },
  defaultAggregation : "items",
  aggregations : {
    "items" : {name : "items", type : "sap.ui.commons.MenuItem", multiple : true, singularName : "item"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>enabled</code>.
 * When the MenuBar is not enabled, automatically all single menu items are also displayed as 'disabled'.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuBar.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuBar.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Specifies the width of the MenuBar
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuBar.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>design</code>.
 * Available design options are Header and Standard. Note that design settings are theme-dependent.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.ui.commons.MenuBarDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.MenuBar.prototype.getDesign = function() {
	return this.getProperty("design");
};

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.ui.commons.MenuBarDesign} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuBar.prototype.setDesign = function(oDesign) {
	this.setProperty("design", oDesign);
	return this;
};

	
/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of menu items.
 * 
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 */
sap.ui.commons.MenuBar.prototype.getItems = function() {
	return this.getAggregation("items", []);
};


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuBar.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", oItem, iIndex);
	return this;
};

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.MenuBar.prototype.addItem = function(oItem) {
	this.addAggregation("items", oItem);
	return this;
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItem} vItem the item to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed item or null
 * @public
 */
sap.ui.commons.MenuBar.prototype.removeItem = function(vItem) {
	return this.removeAggregation("items", vItem);
};

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.MenuBar.prototype.removeAllItems = function() {
	return this.removeAllAggregation("items");
};

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.MenuBar.prototype.indexOfItem = function(oItem) {
	return this.indexOfAggregation("items", oItem);
};
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuBar.prototype.destroyItems = function() {
	this.destroyAggregation("items");
	return this;
};


// Start of sap/ui/commons/MenuBar.js
jQuery.sap.require("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.MenuItem");
jQuery.sap.declare("sap.ui.commons._DelegatorMenuItem");

sap.ui.commons._DelegatorMenuItem = function(oAlterEgoItm){
	sap.ui.commons.MenuItem.apply(this);
	this.oAlterEgoItm = oAlterEgoItm;
};
sap.ui.commons._DelegatorMenuItem.prototype = jQuery.sap.newObject(sap.ui.commons.MenuItem.prototype);
sap.ui.core.Element.defineClass("sap.ui.commons._DelegatorMenuItem", {
	baseType : "sap.ui.commons.MenuItem",
	publicMethods : [],
	library : "sap.ui.commons",
	properties : {},
	aggregations : {},
	associations : {},
	events : {}
});
sap.ui.commons._DelegatorMenuItem.prototype.exit = function (){
	this.oAlterEgoItm = null;
};
sap.ui.commons._DelegatorMenuItem.prototype.getText = function() {
	return this.oAlterEgoItm.getText();
};
sap.ui.commons._DelegatorMenuItem.prototype.getIcon = function() {
	return this.oAlterEgoItm.getIcon();
};
sap.ui.commons._DelegatorMenuItem.prototype.getEnabled = function() {
	return this.oAlterEgoItm.getEnabled();
};
sap.ui.commons._DelegatorMenuItem.prototype.getVisible = function() {
	return this.oAlterEgoItm.getVisible();
};
sap.ui.commons._DelegatorMenuItem.prototype.getSubmenu = function() {
	return this.oAlterEgoItm.getSubmenu();
};


(function() {


/**
 * Initialize this control.
 * @private
 */
sap.ui.commons.MenuBar.prototype.init = function() {
	this.oOvrFlwMnu = null;
	this.sCurrentFocusedItemRefId = null;
};


/**
 * Does all the cleanup when the control is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.MenuBar.prototype.exit = function (){
	if(this.oOvrFlwMnu) {
		this.oOvrFlwMnu.destroy();
	}
	this.oOvrFlwMnu = null;
	// Cleanup resize event registration
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};


/**
 * Called before rendering starts by the renderer
 * (This is not the onBeforeRendering method which would be not called for the first rendering)
 * @private
 */
sap.ui.commons.MenuBar.prototype.doBeforeRendering = function() {
	var aItems = this.getItems();
	for(var i=0; i<aItems.length; i++){
		var oMenu = aItems[i].getSubmenu();
		if(oMenu) {
			oMenu.setRootMenuTopStyle(this.getDesign() == sap.ui.commons.MenuBarDesign.Header);
		}
	}

	if(this.oOvrFlwMnu) {
		this.oOvrFlwMnu.setRootMenuTopStyle(this.getDesign() == sap.ui.commons.MenuBarDesign.Header);
	}

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
sap.ui.commons.MenuBar.prototype.onAfterRendering = function() {
	//Listen to resizing
	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));

	//Calculate the overflow
	this.onresize();
};


/**
 * Called when the control is resized
 * @private
 */
sap.ui.commons.MenuBar.prototype.onresize = function(oEvent) {
	updateAfterResize(this);
};


/**
 * Behavior implementation which is executed when the focus comes into the control or on one of its children.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onfocusin = function(oEvent){
	var jTarget = jQuery(oEvent.target);
	var jTargetId = jTarget.attr("id");
	if(!jTargetId || jTargetId == this.getId() || jTargetId == this.getId()+"-area"){
		var jItems = jQuery.sap.byId(this.getId()+"-area").children();
		this.sCurrentFocusedItemRefId = jItems.length == 0 ? null : jQuery(jItems.get(0)).attr("id");
		if(this.sCurrentFocusedItemRefId) {
			jQuery.sap.byId(this.sCurrentFocusedItemRefId).get(0).focus();
		}
	}
	jQuery.sap.byId(this.getId()).attr("tabindex", "-1");
};


/**
 * Behavior implementation which is executed when the focus leaves the control or one of its children.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onfocusout = function(oEvent){
	//Add the control to tab chain again to make tab in working (see onfocusin)
	jQuery.sap.byId(this.getId()).attr("tabindex", "0");
};


/**
 * Behavior implementation which is executed when the user clicks.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onclick = function(oEvent) {
	openItemMenu(this, oEvent, false);
};


/**
 * Behavior implementation which is executed when the user presses the space or enter key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapselect = function(oEvent){
	openItemMenu(this, oEvent, true);
};


/**
 * Function is called when down key is pressed without a modifier key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapdown = function(oEvent){
	openItemMenu(this, oEvent, true);
};


/**
 * Function is called when down key is pressed with a modifier key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapdownmodifiers = function(oEvent){
	if(oEvent.altKey) {
		openItemMenu(this, oEvent, true);
	}
};


/**
 * Behavior implementation which is executed when the user presses the arrow left (RTL: arrow right) key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapprevious = function(oEvent){
	if(oEvent.keyCode != jQuery.sap.KeyCodes.ARROW_UP) {//Ignore arrow up
		focusStep(this, oEvent, "prev");
	}
};


/**
 * Behavior implementation which is executed when the user presses the arrow right (RTL: arrow left) key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapnext = function(oEvent){
	if(oEvent.keyCode != jQuery.sap.KeyCodes.ARROW_DOWN) {//Ignore arrow down
		focusStep(this, oEvent, "next");
	}
};


/**
 * Behavior implementation which is executed when the user presses the home/pos1 key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsaphome = function(oEvent){
	focusStep(this, oEvent, "first");
};


/**
 * Behavior implementation which is executed when the user presses the end key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapend = function(oEvent){
	focusStep(this, oEvent, "last");
};


//********* Private *********


//Opens the corresponding menu of the selected menu item
var openItemMenu = function(oThis, oEvent, bWithKeyboard) {
	oEvent.preventDefault();
	oEvent.stopPropagation();

	var jRef = jQuery(oEvent.target);
	if(!jRef.attr("itemidx")) {
		jRef = jRef.parent();
	}

	var sItemIdx = jRef.attr("itemidx");

	if(!sItemIdx || !oThis.getEnabled()) {
		return;
	}

	//Overflow item selected -> Open the overflow menu
	if(sItemIdx == "ovrflw"){
		if(oThis.oOvrFlwMnu){
			var eDock = sap.ui.core.Popup.Dock;
			oThis.oOvrFlwMnu.open(bWithKeyboard, jRef.get(0), eDock.EndTop, eDock.EndBottom, jRef.get(0));
		}
		return;
	}

	//Open the menu of the selected item
	var iIdx = parseInt(sItemIdx, 10);
	var oMenuItem = oThis.getItems()[iIdx];
	if(!oMenuItem || !oMenuItem.getEnabled()) {
		return;
	}
	var oMenu = oMenuItem.getSubmenu();
	if(oMenu){
		var eDock = sap.ui.core.Popup.Dock;
		oMenu.open(bWithKeyboard, jRef.get(0), eDock.BeginTop, eDock.BeginBottom, jRef.get(0));
	}
};


//Compute actual number of items currently hidden due to overflow
var getVisibleItemCount = function(oThis){
	var iVisibleItems = 0;

	var jAreaRef = jQuery.sap.byId(oThis.getId()+"-area");
	var jItems = jAreaRef.children();

	var bRtl = sap.ui.getCore().getConfiguration().getRTL();
	var lastOffsetLeft = (bRtl ? 100000 : 0);

	jItems.each(function(iIdx) {
		if(iIdx == 0) {
			return true;
		}

		var currentOffsetLeft = this.offsetLeft;
		var bLineBreak = (bRtl ? (currentOffsetLeft >= lastOffsetLeft) : (currentOffsetLeft <= lastOffsetLeft));

		if(bLineBreak){
			iVisibleItems = iIdx;
			return false;
		}else if(jQuery(this).attr("id") == oThis.getId()+"-ovrflw"){
			// This is the overflow button, there was no line break
			iVisibleItems = iIdx;
			return false;
		}else{
			// Regular item, to the right of the last one, so just proceed
			lastOffsetLeft = currentOffsetLeft;
			return true;
		}
	});

	return iVisibleItems;
};


//Handle the resize of the menubar
var updateAfterResize = function(oThis){
	var iVisibleItems = getVisibleItemCount(oThis);
	var _iVisibleItems = iVisibleItems;

	var jAreaRef = jQuery.sap.byId(oThis.getId()+"-area");
	var jItems = jAreaRef.children();
	var jOvrFlwRef = jQuery.sap.byId(oThis.getId()+"-ovrflw");

	var bUpdateFocus = false;

	if(iVisibleItems < jItems.length-1){
		jOvrFlwRef.attr("style", "display:block;");
		if(!oThis.oOvrFlwMnu){
			oThis.oOvrFlwMnu = new sap.ui.commons.Menu(oThis.getId()+"-ovrflwmnu");
			oThis.oOvrFlwMnu.bUseTopStyle = oThis.getDesign() == sap.ui.commons.MenuBarDesign.Header;
		}
		oThis.oOvrFlwMnu.destroyItems();
		var aItems = oThis.getItems();
		for(var i=0; i<aItems.length; i++){
			var oItem = aItems[i];
			if(iVisibleItems != 0){
				if(oItem.getVisible()) {
					iVisibleItems--;
				}
				if(iVisibleItems == 0) {
					oThis.sLastVisibleItemId = oItem.getId();
				}
			}else{
				oThis.oOvrFlwMnu.addItem(new sap.ui.commons._DelegatorMenuItem(oItem));
				if(oItem.getId() == oThis.sCurrentFocusedItemRefId){
					bUpdateFocus = true;
				}
			}
		}
		if(sap.ui.getCore().getConfiguration().getAccessibility()){
			jItems.attr("aria-setsize", _iVisibleItems+1);
			jOvrFlwRef.attr("aria-posinset", _iVisibleItems+1);
		}
	}else{
		jOvrFlwRef.attr("style", "display:none;");
		if(oThis.oOvrFlwMnu) {
			oThis.oOvrFlwMnu.destroyItems();
		}
		oThis.sLastVisibleItemId = null;
		if(sap.ui.getCore().getConfiguration().getAccessibility()){
			jItems.attr("aria-setsize", _iVisibleItems);
			jOvrFlwRef.attr("aria-posinset", 0);
		}
	}

	jAreaRef.scrollTop(0);

	if(bUpdateFocus){
		oThis.sCurrentFocusedItemRefId = oThis.sLastVisibleItemId;
		jQuery.sap.byId(oThis.sLastVisibleItemId).get(0).focus();
	}
};


//Focus the next (depending on the given direction) step
var focusStep = function(oThis, oEvent, sDir){
	oEvent.stopPropagation();
	oEvent.preventDefault();

	if(!oThis.sCurrentFocusedItemRefId) {
		return;
	}

	var sFollowingFocusItemId = null;
	if(oThis.sLastVisibleItemId && ((oThis.sCurrentFocusedItemRefId == oThis.sLastVisibleItemId && sDir == "next") || sDir == "last")){
		sFollowingFocusItemId = oThis.getId()+"-ovrflw";
	}else if(oThis.sLastVisibleItemId && oThis.sCurrentFocusedItemRefId == oThis.getId()+"-ovrflw" && sDir == "prev"){
		sFollowingFocusItemId = oThis.sLastVisibleItemId;
	}else{
		var sFoo = sDir+"All";
		var bIsJumpToEnd = false;
		if(sDir == "first"){
			sFoo = "prevAll";
			bIsJumpToEnd = true;
		}else if(sDir == "last"){
			sFoo = "nextAll";
			bIsJumpToEnd = true;
		}

		var jCurrentFocusItem = jQuery.sap.byId(oThis.sCurrentFocusedItemRefId);
		var jFollowingItems = jCurrentFocusItem[sFoo](":visible");

		sFollowingFocusItemId = jQuery(jFollowingItems.get(bIsJumpToEnd ? jFollowingItems.length-1 : 0)).attr("id");
	}
	if(sFollowingFocusItemId){
		oThis.sCurrentFocusedItemRefId = sFollowingFocusItemId;
		jQuery.sap.byId(sFollowingFocusItemId).get(0).focus();
	}
};


}());