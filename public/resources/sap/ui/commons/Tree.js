/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Tree.
jQuery.sap.declare("sap.ui.commons.Tree");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Tree.
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
 * <li>title : string</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>showHeader : boolean</li>
 * <li>showHeaderIcons : boolean</li>
 * <li>showHorizontalScrollbar : boolean</li>
 * <li>minWidth : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>nodes : sap.ui.commons.TreeNode</li></ul>
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
 * Simple tree to display item in a hierarchical way
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Tree = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Tree.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.Tree. 
 * Resulting metadata can be obtained via sap.ui.commons.Tree.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Tree", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getTitle", "setTitle", "getWidth", "setWidth", "getHeight", "setHeight", "getShowHeader", "setShowHeader", "getShowHeaderIcons", "setShowHeaderIcons", "getShowHorizontalScrollbar", "setShowHorizontalScrollbar", "getMinWidth", "setMinWidth", 
    // aggregations
    "getNodes", "insertNode", "addNode", "removeNode", "removeAllNodes", "indexOfNode", "destroyNodes", 
    // associations
    
    // events
    "attachSelect", "detachSelect", 
    // methods
    "expandAll", "collapseAll"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "title" : {name : "title", type : "string", group : "Misc", defaultValue : null},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : 'auto'},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : 'auto'},
    "showHeader" : {name : "showHeader", type : "boolean", group : "Misc", defaultValue : true},
    "showHeaderIcons" : {name : "showHeaderIcons", type : "boolean", group : "Misc", defaultValue : true},
    "showHorizontalScrollbar" : {name : "showHorizontalScrollbar", type : "boolean", group : "Misc", defaultValue : false},
    "minWidth" : {name : "minWidth", type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null}
  },
  defaultAggregation : "nodes",
  aggregations : {
    "nodes" : {name : "nodes", type : "sap.ui.commons.TreeNode", multiple : true, singularName : "node"}
  },
  associations : {},
  events : {
    "select" : "select"
  }

});	

sap.ui.commons.Tree.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>title</code>.
 * Tree title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Tree width
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * Tree height
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>showHeader</code>.
 * Tree Header is display. If false, the tree will be in a transparent mode
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getShowHeader = function() {
	return this.getProperty("showHeader");
};

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.setShowHeader = function(bShowHeader) {
	this.setProperty("showHeader", bShowHeader);
	return this;
};


/**
 * Getter for property <code>showHeaderIcons</code>.
 * Show Header icons (e.g. Expand/Collapse all). Only consider if showHeader is true
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeaderIcons</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getShowHeaderIcons = function() {
	return this.getProperty("showHeaderIcons");
};

/**
 * Setter for property <code>showHeaderIcons</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeaderIcons  new value for property <code>showHeaderIcons</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.setShowHeaderIcons = function(bShowHeaderIcons) {
	this.setProperty("showHeaderIcons", bShowHeaderIcons);
	return this;
};


/**
 * Getter for property <code>showHorizontalScrollbar</code>.
 * Display horizontal scrollbar. If false, the overflow content will be hidden
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showHorizontalScrollbar</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getShowHorizontalScrollbar = function() {
	return this.getProperty("showHorizontalScrollbar");
};

/**
 * Setter for property <code>showHorizontalScrollbar</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowHorizontalScrollbar  new value for property <code>showHorizontalScrollbar</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.setShowHorizontalScrollbar = function(bShowHorizontalScrollbar) {
	this.setProperty("showHorizontalScrollbar", bShowHorizontalScrollbar);
	return this;
};


/**
 * Getter for property <code>minWidth</code>.
 * Minimal width for the Tree. Can be useful when, for example, the width is specified in percentage, to avoid the tree to become too narrow when container is resize
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.commons.Tree.prototype.getMinWidth = function() {
	return this.getProperty("minWidth");
};

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.setMinWidth = function(sMinWidth) {
	this.setProperty("minWidth", sMinWidth);
	return this;
};

	
/**
 * Getter for aggregation <code>nodes</code>.<br/>
 * First level nodes
 * 
 * @return {sap.ui.commons.TreeNode[]}
 * @public
 */
sap.ui.commons.Tree.prototype.getNodes = function() {
	return this.getAggregation("nodes", []);
};


/**
 * Inserts a node into the aggregation named <code>nodes</code>.
 *
 * @param {sap.ui.commons.TreeNode}
 *          oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the node should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the node is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.insertNode = function(oNode, iIndex) {
	this.insertAggregation("nodes", oNode, iIndex);
	return this;
};

/**
 * Adds some node <code>oNode</code> 
 * to the aggregation named <code>nodes</code>.
 *
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.Tree.prototype.addNode = function(oNode) {
	this.addAggregation("nodes", oNode);
	return this;
};

/**
 * Removes an node from the aggregation named <code>nodes</code>.
 *
 * @param {int | string | sap.ui.commons.TreeNode} vNode the node to remove or its index or id
 * @return {sap.ui.commons.TreeNode} the removed node or null
 * @public
 */
sap.ui.commons.Tree.prototype.removeNode = function(vNode) {
	return this.removeAggregation("nodes", vNode);
};

/**
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.TreeNode[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.Tree.prototype.removeAllNodes = function() {
	return this.removeAllAggregation("nodes");
};

/**
 * Checks for the provided <code>sap.ui.commons.TreeNode</code> in the aggregation named <code>nodes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.Tree.prototype.indexOfNode = function(oNode) {
	return this.indexOfAggregation("nodes", oNode);
};
	

/**
 * Destroys all the nodes in the aggregation 
 * named <code>nodes</code>.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.destroyNodes = function() {
	this.destroyAggregation("nodes");
	return this;
};


/**
 * Event is fired when a tree node is selected. 
 *
 * @name sap.ui.commons.Tree#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.commons.TreeNode} oControlEvent.getParameters.node The node which has been selected.
 * @param {object} oControlEvent.getParameters.nodeContext The binding context of the selected node.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.Tree</code>.<br/>
 * Event is fired when a tree node is selected. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.attachSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("select", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.Tree</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.Tree} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tree.prototype.detachSelect = function(fnFunction, oListener) {
	this.detachEvent("select", fnFunction, oListener);
	return this;	
};

/**
 * Fire event select to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'node' of type <code>sap.ui.commons.TreeNode</code> The node which has been selected.</li>
 * <li>'nodeContext' of type <code>object</code> The binding context of the selected node.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 */
sap.ui.commons.Tree.prototype.fireSelect = function(mArguments) {
	return this.fireEvent("select", mArguments, true);
};


/**
 * Expands all nodes in the tree
 *
 * @name sap.ui.commons.Tree.prototype.expandAll
 * @function

 * @type void
 * @public
 */


/**
 * Collapses all nodes in the tree
 *
 * @name sap.ui.commons.Tree.prototype.collapseAll
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/Tree.js
sap.ui.commons.Tree.prototype.resizeListenerId;

sap.ui.commons.Tree.prototype.init = function(){
   this.bAllCollapsed = false;
   this.allowTextSelection(false);

   this.oSelectedNode = null;
   this.oSelectedContext = null;
   
   //Create Buttons for Header
	var sIconPrefix		= jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme();

	if(!sap.ui.getCore().getConfiguration().getRTL()){
		sIconPrefix		+= "/img/tree/";
	}
	else{
		sIconPrefix		+= "/img-RTL/tree/";
	}

	var oResourceBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
	this.oCollapseAllButton = new sap.ui.commons.Button(this.getId() + "-CollapseAll", { icon: sIconPrefix + "CollapseAll.png", tooltip: oResourceBundle.getText("TREE_COLLAPSE_ALL"), lite: true });
	this.oExpandAllButton	= new sap.ui.commons.Button(this.getId() + "-ExpandAll", { icon: sIconPrefix + "ExpandAll.png", tooltip: oResourceBundle.getText("TREE_EXPAND_ALL"), lite: true });
	this.oCollapseAllButton.attachPress(this.onCollapseAll,this);
	this.oExpandAllButton.attachPress(this.onExpandAll,this);
	this.oCollapseAllButton.addStyleClass("sapUiTreeCol");
	this.oExpandAllButton.addStyleClass("sapUiTreeExp");
};

/**
 * Does all the cleanup when the Tree is to be destroyed.
 * Called from the element's destroy() method.
 * @private
 */
sap.ui.commons.Tree.prototype.exit = function(){
	if ( this.oCollapseAllButton ) {
		this.oCollapseAllButton.destroy();
		this.oCollapseAllButton = null;
	}
	if ( this.oExpandAllButton ) {
		this.oExpandAllButton.destroy();
		this.oExpandAllButton = null;
	}
};

/***********************************************************************************
* EVENTS HANDLING
***********************************************************************************/


/** Handler for "Expand All" button.
 * @private
 */
sap.ui.commons.Tree.prototype.onExpandAll = function(){
	this.expandAll();
};

/**Handler for "Collapse All" button.
 * @private
 */
sap.ui.commons.Tree.prototype.onCollapseAll = function(){
	this.collapseAll();
};

/*"*********************************************************************************
* PUBLIC METHODS
***********************************************************************************/
sap.ui.commons.Tree.prototype.expandAll = function(){
	var aNodes = this.getNodes();
	for(var i=0;i<aNodes.length;i++){
		aNodes[i].expand(true);
	}
};

sap.ui.commons.Tree.prototype.collapseAll = function(){
	var aNodes = this.getNodes();
	for(var i=0;i<aNodes.length;i++){
		aNodes[i].collapse(true);
	}
};

/***********************************************************************************
* KEYBOARD NAVIGATION
***********************************************************************************/
/**
* DOWN key behavior
* Opens the section or activates the UI element on DOWN key
* @private
* @param oEvent Browser event
*/
sap.ui.commons.Tree.prototype.onsapdown = function(oEvent){
	this.moveFocus(false);
	oEvent.preventDefault();
};

/**
* UP key behavior
* Opens the section or activates the UI element on UP key
* @private
* @param oEvent Browser event
*/
sap.ui.commons.Tree.prototype.onsapup = function(oEvent){
	this.moveFocus(true);
	oEvent.preventDefault();
};

/**
* LEFT key behavior
* Opens the section or activates the UI element on LEFT key
* @private
* @param oEvent Browser event
*/
sap.ui.commons.Tree.prototype.onsapleft = function(oEvent){
	this.moveFocus(true);
	oEvent.preventDefault();
};

/**
* RIGHT key behavior
* Opens the section or activates the UI element on RIGHT key
* @private
* @param oEvent Browser event
*/
sap.ui.commons.Tree.prototype.onsapright = function(oEvent){
	this.moveFocus(false);
	oEvent.preventDefault();
};



/**
 * The general HOME key event of the tree
 * @private
 * @param {event} oEvent The saphome event object
 */
sap.ui.commons.Tree.prototype.onsaphome = function(oEvent) {
	var oDomNode = oEvent.srcElement ?  oEvent.srcElement : oEvent.target;
	this.placeFocus(this.getFirstSibling(oDomNode));
	oEvent.preventDefault();
};

/**
 * The general CTRL+HOME key event of the tree
 * @private
 * @param {event} oEvent The saphome event object
 */
sap.ui.commons.Tree.prototype.onsaphomemodifiers = function(oEvent) {
	this.placeFocus(this.getFirst());
	oEvent.preventDefault();
};

/**
 * The general END key event of the tree
 * @private
 * @param {event} oEvent The sapend event object
 */
sap.ui.commons.Tree.prototype.onsapend = function(oEvent) {
	var oDomNode = oEvent.srcElement ?  oEvent.srcElement : oEvent.target;
	this.placeFocus(this.getLastSibling(oDomNode));
	oEvent.preventDefault();
};

/**
 * The general CTRL+END key event of the tree
 * @private
 * @param {event} oEvent The sapend event object
 */
sap.ui.commons.Tree.prototype.onsapendmodifiers = function(oEvent) {
	this.placeFocus(this.getLast());
	oEvent.preventDefault();
};

/**
 * The numpad STAR(*) key event of the tree
 * @private
 * @param {event} oEvent The sapcollapseall event object
 */
sap.ui.commons.Tree.prototype.onsapcollapseall = function(oEvent) {

	if(this.bAllCollapsed ){
		this.expandAll();
	}
	else{
		this.collapseAll();
	}

	this.bAllCollapsed = !this.bAllCollapsed;
};

/***********************************************************************************
* HELPER METHODS - DOM NAVIGATION
***********************************************************************************/

/**Returns the first Sibling tree node based on DOM Tree node provided
 * @param oDomNode The DOM Tree node from which calculate the first sibling
 * @returns The first sibling tree node
 * @private
*/
sap.ui.commons.Tree.prototype.getFirstSibling = function(oDomNode) {
	var aDomFirstSiblingNode	= jQuery(oDomNode).siblings(".sapUiTreeNode:visible").first();

	if(aDomFirstSiblingNode.length){
		return aDomFirstSiblingNode[0];
	}
	return null;
};

/**Returns the last Sibling tree node based on DOM Tree node provided
 * @param oDomNode The DOM Tree node from which calculate the last sibling
 * @returns The last sibling tree node
 * @private
*/
sap.ui.commons.Tree.prototype.getLastSibling= function(oDomNode) {
	var aDomLastSiblingNode	= jQuery(oDomNode).siblings(".sapUiTreeNode:visible").last();

	if(aDomLastSiblingNode.length){
		return aDomLastSiblingNode[0];
	}
	return null;
};

/**Returns the first tree node of the tree. Children of collapsed nodes (hidden) are not considered.
 * @returns The first tree node
 * @private
*/
sap.ui.commons.Tree.prototype.getFirst = function() {
	var aDomFirstNode		= jQuery.sap.byId(this.getId()).find(".sapUiTreeNode:visible").first();

	if(aDomFirstNode.length){
		return aDomFirstNode[0];
	}
	return null;
};

/**Returns the last tree node of the tree. Children of collapsed nodes (hidden) are not considered.
 * @returns The last tree node
 * @private
*/
sap.ui.commons.Tree.prototype.getLast = function() {
	var aDomLastNode		= jQuery.sap.byId(this.getId()).find(".sapUiTreeNode:visible").last();

	if(aDomLastNode.length){
		return aDomLastNode[0];
	}
	return null;

};

/***********************************************************************************
* HELPER METHODS - FOCUS MANAGEMENT
***********************************************************************************/

/**
 * Move the focus by one position, either UP or DOWN depending of "bMoveUp"
 * @param bMoveUp When true the focus is move up. Otherwise, it's moved down
 * @private
 */
sap.ui.commons.Tree.prototype.moveFocus = function(bMoveUp){
   var afocusedNodeDom	= jQuery(".sapUiTreeNode:focus");
   if(afocusedNodeDom.length){

	   var oCurrNode = sap.ui.getCore().getControl(afocusedNodeDom[0].id)
;
	   var aDomAllNodes = jQuery.sap.byId(this.getId()).find(".sapUiTreeNode:visible");
	   var currIndex	= aDomAllNodes.index(afocusedNodeDom[0]);

	   var nextIndex = currIndex;
	   if(bMoveUp){
		   nextIndex--;
	   }
	   else{
		   nextIndex++;
	   }

	   if(nextIndex >= 0 && nextIndex < aDomAllNodes.length){
			var oDomNextNode	= aDomAllNodes.eq( nextIndex );
			var oNextNode = sap.ui.getCore().getControl(oDomNextNode[0].id);
			oCurrNode.blur();
			oNextNode.focus();
	   }
	}

};

/**Adjusts the focus after a node is collapsed. This is necessary as the currently focused node can then be hidden,
 * leading the tree not being focusable anymore.
 *
 * When the focusable is being hid by the collapsing of its parent, the focus is then set on this parent.
 *
 * @private
 */
sap.ui.commons.Tree.prototype.adjustFocus = function(){

	var oFocusableNode = jQuery.sap.byId(this.getId()).find('.sapUiTreeNode[tabIndex="0"]');

	if(!oFocusableNode.is(':visible')){


		var aDomAllNodes		= jQuery.sap.byId(this.getId()).find(".sapUiTreeNode");
		var focusIndex			= aDomAllNodes.index(oFocusableNode[0]);
		var aDomPrecedingNodes	= aDomAllNodes.filter(":lt("+focusIndex+")");
		var aDomVisiblePrecedingNodes = aDomPrecedingNodes.filter(":visible");
		var oNewFocusNode		= aDomVisiblePrecedingNodes[aDomVisiblePrecedingNodes.length-1];

		oNewFocusNode.setAttribute("tabindex", "0");

		if( jQuery(".sapUiTreeNode:focus").is(":not(:visible)")){
			oNewFocusNode.focus();
		}

	}

};

/**Places the focus on the node corresponding to given DOM Tree Node
 * @param oDomTargetNode The DOM Tree Node corresponding to the node to focus
 * @private
 */
sap.ui.commons.Tree.prototype.placeFocus = function(oDomTargetNode){

	if(!oDomTargetNode){
		return; //No Target node provided!
	}

	var oDomfocusedNode	= jQuery.sap.byId(this.getId()).find(".sapUiTreeNode[tabIndex='0']");
	if(oDomfocusedNode.length){
		oDomfocusedNode[0].setAttribute("tabindex", "-1");
	}

	oDomTargetNode.setAttribute("tabindex", "0");
	var oTargetNode = sap.ui.getCore().getControl(oDomTargetNode.id);
	oTargetNode.focus();
};

/***********************************************************************************
* HELPER METHODS - SELECTION MANAGEMENT
***********************************************************************************/
/**Adjusts the selection, when expanding, by re-selecting a children node when the expanded node was
   selected only to reprensented the selection of a children node
 * @param oExpandingDomNode The Node being expanded
 * @private
 */
sap.ui.commons.Tree.prototype.adjustSelectionOnExpanding = function(oExpandingDomNode) {

	var $Tree = this.$(),
		$ExpandingDomNode = jQuery(oExpandingDomNode),
		$DomSelectedNode,
		$DomParent;

	//Current node is a fake selection, remove it. A child will be either another fake selection or an actual one.
	if($ExpandingDomNode.hasClass("sapUiTreeNodeSelectedParent")) {
		$ExpandingDomNode.removeClass("sapUiTreeNodeSelectedParent");
	}

	//If the actual selection now visible, remove all fake ones
	var $DomActualSelection = $Tree.find(".sapUiTreeNodeSelected:visible");
	if ($DomActualSelection.length){
		$Tree.find(".sapUiTreeNodeSelectedParent").removeClass("sapUiTreeNodeSelectedParent");
	}
	else {
		$DomSelectedNode = $Tree.find(".sapUiTreeNodeSelected");

		//Find first visible parent node
		$DomParent = $DomSelectedNode.parent(".sapUiTreeChildrenNodes").prev(".sapUiTreeNode");

		while ($DomParent.length && !$DomParent.is(":visible")) {
			$DomParent = $DomParent.parent(".sapUiTreeChildrenNodes").prev(".sapUiTreeNode");
		}
		$DomParent.addClass("sapUiTreeNodeSelectedParent");
	}
};

/**Adjusts the selection, when collapsing, selecting a parent when the actual selected node is
 * not visible.
 * @param oDomCollapsingNode The Node being expanded
 * @private
 */
sap.ui.commons.Tree.prototype.adjustSelectionOnCollapsing = function(oDomCollapsingNode){

	var $DomCollapsingNode = jQuery(oDomCollapsingNode),
		sChildrenId = "#" + $DomCollapsingNode.attr("id") + "-children",
		$DomActualSelSubNode = $DomCollapsingNode.siblings(sChildrenId).find(".sapUiTreeNodeSelected"),
		$DomParentSelSubNode = $DomCollapsingNode.siblings(sChildrenId).find(".sapUiTreeNodeSelectedParent");
	
	if($DomActualSelSubNode.length || $DomParentSelSubNode.length){
		$DomCollapsingNode.addClass("sapUiTreeNodeSelectedParent");

		if($DomParentSelSubNode.length){
			$DomParentSelSubNode.removeClass("sapUiTreeNodeSelectedParent");
		}
	}

};

/**
 * override this method on Element.js and return true if tree binding
 * @private
 */
sap.ui.commons.Tree.prototype.isTreeBinding = function(sName) {
	return (sName == "nodes");
};

/**
 * override element updateAggregation method with this one and update the tree node bindings
 * @private
 */
sap.ui.commons.Tree.prototype.updateNodes = function(oBindingInfo){
	var oBinding = oBindingInfo.binding,
		oTemplate = oBindingInfo.template,
		aContexts = oBinding.getRootContexts(),
		oSelection = this.oSelectedContext;
	this.oSelectedNode = null;
	this.oSelectedContext = null;
	this.updateNodesRecursively(aContexts, oTemplate, oBinding, oSelection, this);
};

/**
 * method used by updateNodes method to iterate through the tree
 * @private
 */
sap.ui.commons.Tree.prototype.updateNodesRecursively = function(aContexts, oTemplate, oBinding, oSelection, oParent){
	oParent.destroyNodes();
	var aNodes = oParent.getNodes();
	var oNode,
		that = this;
	jQuery.each(aContexts, function(iIndex, oContext) {
		oNode = aNodes[iIndex];
		if (!oNode) {
		  // use unique ids so we add the oContext as suffix
			oNode = oTemplate.clone(oContext.replace(/\//g,"-"));
		}
		oNode.setBindingContext(oContext);
		oParent.addNode(oNode); // also sets the Parent
		if (oContext == oSelection) {
			oNode.setProperty("isSelected", true, true);
			that.oSelectedNode = oNode;
			that.oSelectedContext = oContext;
		}
		that.updateNodesRecursively(oBinding.getNodeContexts(oContext), oTemplate, oBinding, oSelection, oNode);
	});
};

/**Returns the selected node in the tree. If not selection, returns false.
 * @returns The selected node
 * @private
 */
sap.ui.commons.Tree.prototype.getSelection = function(){
	return this.oSelectedNode;
};

/**Sets the selected node reference of the Tree
 * @private
 */ 
sap.ui.commons.Tree.prototype.setSelection = function(oNode){
	var bDoSelect;
	
	bDoSelect = this.fireSelect({
		node: oNode,
		nodeContext: oNode && oNode.getBindingContext()
	});
	
	if (bDoSelect) {
		if (this.oSelectedNode) {
			this.oSelectedNode.deselect();
		}
		if (oNode) {
			oNode.select();
		}
		this.oSelectedNode = oNode;
		this.oSelectedContext = oNode && oNode.getBindingContext();
	}
};

