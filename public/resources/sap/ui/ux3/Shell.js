/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Shell.
jQuery.sap.declare("sap.ui.ux3.Shell");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Shell.
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
 * <li>appTitle : string</li>
 * <li>appIcon : string</li>
 * <li>appIconTooltip : string</li>
 * <li>showLogoutButton : boolean</li>
 * <li>showSearchTool : boolean</li>
 * <li>showInspectorTool : boolean</li>
 * <li>showFeederTool : boolean</li>
 * <li>paneWidth : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>worksetItems : sap.ui.ux3.NavigationItem</li>
 * <li>paneBarItems : sap.ui.core.Item</li>
 * <li>paneContent : sap.ui.core.Control</li>
 * <li>content : sap.ui.core.Control</li>
 * <li>toolPopups : sap.ui.ux3.ToolPopup</li>
 * <li>headerItems : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>selectedWorksetItem : sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>worksetItemSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>paneBarItemSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>logout : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>search : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>feedSubmit : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * The Ux3 GoldReflection Shell, which is an application frame with navigation capabilities.
 * It is supposed to be added to a direct child of the BODY tag of a page and there should be no other parts of the page consuming space outside the Shell.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.Shell = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.Shell.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.Shell. 
 * Resulting metadata can be obtained via sap.ui.ux3.Shell.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.Shell", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getAppTitle", "setAppTitle", "getAppIcon", "setAppIcon", "getAppIconTooltip", "setAppIconTooltip", "getShowLogoutButton", "setShowLogoutButton", "getShowSearchTool", "setShowSearchTool", "getShowInspectorTool", "setShowInspectorTool", "getShowFeederTool", "setShowFeederTool", "getPaneWidth", "setPaneWidth", 
    // aggregations
    "getWorksetItems", "insertWorksetItem", "addWorksetItem", "removeWorksetItem", "removeAllWorksetItems", "indexOfWorksetItem", "destroyWorksetItems", "getPaneBarItems", "insertPaneBarItem", "addPaneBarItem", "removePaneBarItem", "removeAllPaneBarItems", "indexOfPaneBarItem", "destroyPaneBarItems", "getPaneContent", "insertPaneContent", "addPaneContent", "removePaneContent", "removeAllPaneContent", "indexOfPaneContent", "destroyPaneContent", "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", "getToolPopups", "insertToolPopup", "addToolPopup", "removeToolPopup", "removeAllToolPopups", "indexOfToolPopup", "destroyToolPopups", "getHeaderItems", "insertHeaderItem", "addHeaderItem", "removeHeaderItem", "removeAllHeaderItems", "indexOfHeaderItem", "destroyHeaderItems", 
    // associations
    "getSelectedWorksetItem", "setSelectedWorksetItem", 
    // events
    "attachWorksetItemSelected", "detachWorksetItemSelected", "attachPaneBarItemSelected", "detachPaneBarItemSelected", "attachLogout", "detachLogout", "attachSearch", "detachSearch", "attachFeedSubmit", "detachFeedSubmit", 
    // methods
    "setContent", "setPaneContent", "openPersonalizationDialog", "initializePersonalization", "getSearchField"
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "appTitle" : {name : "appTitle", type : "string", group : "Misc", defaultValue : null},
    "appIcon" : {name : "appIcon", type : "string", group : "Misc", defaultValue : null},
    "appIconTooltip" : {name : "appIconTooltip", type : "string", group : "Misc", defaultValue : null},
    "showLogoutButton" : {name : "showLogoutButton", type : "boolean", group : "Misc", defaultValue : true},
    "showSearchTool" : {name : "showSearchTool", type : "boolean", group : "Misc", defaultValue : true},
    "showInspectorTool" : {name : "showInspectorTool", type : "boolean", group : "Misc", defaultValue : true},
    "showFeederTool" : {name : "showFeederTool", type : "boolean", group : "Misc", defaultValue : true},
    "paneWidth" : {name : "paneWidth", type : "int", group : "Misc", defaultValue : 250}
  },
  defaultAggregation : "content",
  aggregations : {
    "worksetItems" : {name : "worksetItems", type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "worksetItem"}, 
    "paneBarItems" : {name : "paneBarItems", type : "sap.ui.core.Item", multiple : true, singularName : "paneBarItem"}, 
    "paneContent" : {name : "paneContent", type : "sap.ui.core.Control", multiple : true, singularName : "paneContent"}, 
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    "toolPopups" : {name : "toolPopups", type : "sap.ui.ux3.ToolPopup", multiple : true, singularName : "toolPopup"}, 
    "headerItems" : {name : "headerItems", type : "sap.ui.core.Control", multiple : true, singularName : "headerItem"}
  },
  associations : {
    "selectedWorksetItem" : {name : "selectedWorksetItem", type : "sap.ui.ux3.NavigationItem", multiple : false}
  },
  events : {
    "worksetItemSelected" : "worksetItemSelected", 
    "paneBarItemSelected" : "paneBarItemSelected", 
    "logout" : "logout", 
    "search" : "search", 
    "feedSubmit" : "feedSubmit"
  }

});	

sap.ui.ux3.Shell.M_EVENTS = {'worksetItemSelected':'worksetItemSelected','paneBarItemSelected':'paneBarItemSelected','logout':'logout','search':'search','feedSubmit':'feedSubmit'};


/**
 * Getter for property <code>appTitle</code>.
 * The application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>appTitle</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppTitle = function() {
	return this.getProperty("appTitle");
};

/**
 * Setter for property <code>appTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAppTitle  new value for property <code>appTitle</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setAppTitle = function(sAppTitle) {
	this.setProperty("appTitle", sAppTitle);
	return this;
};


/**
 * Getter for property <code>appIcon</code>.
 * The URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
 * If the appIcon is set, for accessibility reasons the appIconTooltip must also be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>appIcon</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppIcon = function() {
	return this.getProperty("appIcon");
};

/**
 * Setter for property <code>appIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAppIcon  new value for property <code>appIcon</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setAppIcon = function(sAppIcon) {
	this.setProperty("appIcon", sAppIcon);
	return this;
};


/**
 * Getter for property <code>appIconTooltip</code>.
 * The tooltip of the application icon in the header
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>appIconTooltip</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getAppIconTooltip = function() {
	return this.getProperty("appIconTooltip");
};

/**
 * Setter for property <code>appIconTooltip</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAppIconTooltip  new value for property <code>appIconTooltip</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setAppIconTooltip = function(sAppIconTooltip) {
	this.setProperty("appIconTooltip", sAppIconTooltip);
	return this;
};


/**
 * Getter for property <code>showLogoutButton</code>.
 * Whether the Logoff button in the header should be displayed or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLogoutButton</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowLogoutButton = function() {
	return this.getProperty("showLogoutButton");
};

/**
 * Setter for property <code>showLogoutButton</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLogoutButton  new value for property <code>showLogoutButton</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setShowLogoutButton = function(bShowLogoutButton) {
	this.setProperty("showLogoutButton", bShowLogoutButton);
	return this;
};


/**
 * Getter for property <code>showSearchTool</code>.
 * Whether the "Global Search" tool should be displayed or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSearchTool</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowSearchTool = function() {
	return this.getProperty("showSearchTool");
};

/**
 * Setter for property <code>showSearchTool</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSearchTool  new value for property <code>showSearchTool</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setShowSearchTool = function(bShowSearchTool) {
	this.setProperty("showSearchTool", bShowSearchTool);
	return this;
};


/**
 * Getter for property <code>showInspectorTool</code>.
 * Whether the "Inspector" tool should be displayed or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showInspectorTool</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowInspectorTool = function() {
	return this.getProperty("showInspectorTool");
};

/**
 * Setter for property <code>showInspectorTool</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowInspectorTool  new value for property <code>showInspectorTool</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setShowInspectorTool = function(bShowInspectorTool) {
	this.setProperty("showInspectorTool", bShowInspectorTool);
	return this;
};


/**
 * Getter for property <code>showFeederTool</code>.
 * Whether the "Feeder" tool should be displayed or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showFeederTool</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getShowFeederTool = function() {
	return this.getProperty("showFeederTool");
};

/**
 * Setter for property <code>showFeederTool</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowFeederTool  new value for property <code>showFeederTool</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setShowFeederTool = function(bShowFeederTool) {
	this.setProperty("showFeederTool", bShowFeederTool);
	return this;
};


/**
 * Getter for property <code>paneWidth</code>.
 * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).
 *
 * Default value is <code>250</code>
 *
 * @return {int} the value of property <code>paneWidth</code>
 * @public
 * 
 */
sap.ui.ux3.Shell.prototype.getPaneWidth = function() {
	return this.getProperty("paneWidth");
};

/**
 * Setter for property <code>paneWidth</code>.
 *
 * Default value is <code>250</code> 
 *
 * @param {int} iPaneWidth  new value for property <code>paneWidth</code>
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setPaneWidth = function(iPaneWidth) {
	this.setProperty("paneWidth", iPaneWidth);
	return this;
};

	
/**
 * Getter for aggregation <code>worksetItems</code>.<br/>
 * The workset items.
 * 
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 */
sap.ui.ux3.Shell.prototype.getWorksetItems = function() {
	return this.getAggregation("worksetItems", []);
};


/**
 * Inserts a worksetItem into the aggregation named <code>worksetItems</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *          oWorksetItem the worksetItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the worksetItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the worksetItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the worksetItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.insertWorksetItem = function(oWorksetItem, iIndex) {
	this.insertAggregation("worksetItems", oWorksetItem, iIndex);
	return this;
};

/**
 * Adds some worksetItem <code>oWorksetItem</code> 
 * to the aggregation named <code>worksetItems</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oWorksetItem the worksetItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Shell.prototype.addWorksetItem = function(oWorksetItem) {
	this.addAggregation("worksetItems", oWorksetItem);
	return this;
};

/**
 * Removes an worksetItem from the aggregation named <code>worksetItems</code>.
 *
 * @param {int | string | sap.ui.ux3.NavigationItem} vWorksetItem the worksetItem to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed worksetItem or null
 * @public
 */
sap.ui.ux3.Shell.prototype.removeWorksetItem = function(vWorksetItem) {
	return this.removeAggregation("worksetItems", vWorksetItem);
};

/**
 * Removes all the controls in the aggregation named <code>worksetItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Shell.prototype.removeAllWorksetItems = function() {
	return this.removeAllAggregation("worksetItems");
};

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>worksetItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oWorksetItem the worksetItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Shell.prototype.indexOfWorksetItem = function(oWorksetItem) {
	return this.indexOfAggregation("worksetItems", oWorksetItem);
};
	

/**
 * Destroys all the worksetItems in the aggregation 
 * named <code>worksetItems</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.destroyWorksetItems = function() {
	this.destroyAggregation("worksetItems");
	return this;
};

	
/**
 * Getter for aggregation <code>paneBarItems</code>.<br/>
 * The items to appear in the PaneBar.
 * 
 * @return {sap.ui.core.Item[]}
 * @public
 */
sap.ui.ux3.Shell.prototype.getPaneBarItems = function() {
	return this.getAggregation("paneBarItems", []);
};


/**
 * Inserts a paneBarItem into the aggregation named <code>paneBarItems</code>.
 *
 * @param {sap.ui.core.Item}
 *          oPaneBarItem the paneBarItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the paneBarItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the paneBarItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the paneBarItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.insertPaneBarItem = function(oPaneBarItem, iIndex) {
	this.insertAggregation("paneBarItems", oPaneBarItem, iIndex);
	return this;
};

/**
 * Adds some paneBarItem <code>oPaneBarItem</code> 
 * to the aggregation named <code>paneBarItems</code>.
 *
 * @param {sap.ui.core.Item}
 *            oPaneBarItem the paneBarItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Shell.prototype.addPaneBarItem = function(oPaneBarItem) {
	this.addAggregation("paneBarItems", oPaneBarItem);
	return this;
};

/**
 * Removes an paneBarItem from the aggregation named <code>paneBarItems</code>.
 *
 * @param {int | string | sap.ui.core.Item} vPaneBarItem the paneBarItem to remove or its index or id
 * @return {sap.ui.core.Item} the removed paneBarItem or null
 * @public
 */
sap.ui.ux3.Shell.prototype.removePaneBarItem = function(vPaneBarItem) {
	return this.removeAggregation("paneBarItems", vPaneBarItem);
};

/**
 * Removes all the controls in the aggregation named <code>paneBarItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Shell.prototype.removeAllPaneBarItems = function() {
	return this.removeAllAggregation("paneBarItems");
};

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>paneBarItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Item}
 *            oPaneBarItem the paneBarItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Shell.prototype.indexOfPaneBarItem = function(oPaneBarItem) {
	return this.indexOfAggregation("paneBarItems", oPaneBarItem);
};
	

/**
 * Destroys all the paneBarItems in the aggregation 
 * named <code>paneBarItems</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.destroyPaneBarItems = function() {
	this.destroyAggregation("paneBarItems");
	return this;
};

	
/**
 * Getter for aggregation <code>paneContent</code>.<br/>
 * The content to appear in the pane area.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.ux3.Shell.prototype.getPaneContent = function() {
	return this.getAggregation("paneContent", []);
};


/**
 * Inserts a paneContent into the aggregation named <code>paneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oPaneContent the paneContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the paneContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the paneContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.insertPaneContent = function(oPaneContent, iIndex) {
	this.insertAggregation("paneContent", oPaneContent, iIndex);
	return this;
};

/**
 * Adds some paneContent <code>oPaneContent</code> 
 * to the aggregation named <code>paneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Shell.prototype.addPaneContent = function(oPaneContent) {
	this.addAggregation("paneContent", oPaneContent);
	return this;
};

/**
 * Removes an paneContent from the aggregation named <code>paneContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vPaneContent the paneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed paneContent or null
 * @public
 */
sap.ui.ux3.Shell.prototype.removePaneContent = function(vPaneContent) {
	return this.removeAggregation("paneContent", vPaneContent);
};

/**
 * Removes all the controls in the aggregation named <code>paneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Shell.prototype.removeAllPaneContent = function() {
	return this.removeAllAggregation("paneContent");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>paneContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Shell.prototype.indexOfPaneContent = function(oPaneContent) {
	return this.indexOfAggregation("paneContent", oPaneContent);
};
	

/**
 * Destroys all the paneContent in the aggregation 
 * named <code>paneContent</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.destroyPaneContent = function() {
	this.destroyAggregation("paneContent");
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering of the content area - but not to a re-rendering of the complete Shell.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.ux3.Shell.prototype.getContent = function() {
	return this.getAggregation("content", []);
};


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Shell.prototype.addContent = function(oContent) {
	this.addAggregation("content", oContent);
	return this;
};

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 */
sap.ui.ux3.Shell.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Shell.prototype.removeAllContent = function() {
	return this.removeAllAggregation("content");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Shell.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};

	
/**
 * Getter for aggregation <code>toolPopups</code>.<br/>
 * The items which appear in the ToolPalette and are opened as popup when clicked.
 * 
 * @return {sap.ui.ux3.ToolPopup[]}
 * @public
 */
sap.ui.ux3.Shell.prototype.getToolPopups = function() {
	return this.getAggregation("toolPopups", []);
};


/**
 * Inserts a toolPopup into the aggregation named <code>toolPopups</code>.
 *
 * @param {sap.ui.ux3.ToolPopup}
 *          oToolPopup the toolPopup to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the toolPopup should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the toolPopup is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the toolPopup is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.insertToolPopup = function(oToolPopup, iIndex) {
	this.insertAggregation("toolPopups", oToolPopup, iIndex);
	return this;
};

/**
 * Adds some toolPopup <code>oToolPopup</code> 
 * to the aggregation named <code>toolPopups</code>.
 *
 * @param {sap.ui.ux3.ToolPopup}
 *            oToolPopup the toolPopup to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Shell.prototype.addToolPopup = function(oToolPopup) {
	this.addAggregation("toolPopups", oToolPopup);
	return this;
};

/**
 * Removes an toolPopup from the aggregation named <code>toolPopups</code>.
 *
 * @param {int | string | sap.ui.ux3.ToolPopup} vToolPopup the toolPopup to remove or its index or id
 * @return {sap.ui.ux3.ToolPopup} the removed toolPopup or null
 * @public
 */
sap.ui.ux3.Shell.prototype.removeToolPopup = function(vToolPopup) {
	return this.removeAggregation("toolPopups", vToolPopup);
};

/**
 * Removes all the controls in the aggregation named <code>toolPopups</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ToolPopup[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Shell.prototype.removeAllToolPopups = function() {
	return this.removeAllAggregation("toolPopups");
};

/**
 * Checks for the provided <code>sap.ui.ux3.ToolPopup</code> in the aggregation named <code>toolPopups</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ToolPopup}
 *            oToolPopup the toolPopup whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Shell.prototype.indexOfToolPopup = function(oToolPopup) {
	return this.indexOfAggregation("toolPopups", oToolPopup);
};
	

/**
 * Destroys all the toolPopups in the aggregation 
 * named <code>toolPopups</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.destroyToolPopups = function() {
	this.destroyAggregation("toolPopups");
	return this;
};

	
/**
 * Getter for aggregation <code>headerItems</code>.<br/>
 * Controls to appear in the header next to the logout button. It is recommended to only use controls of type Button, MenuButton and TextView.
 * The respective UI guidelines need to be enforced on a higher level.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.ux3.Shell.prototype.getHeaderItems = function() {
	return this.getAggregation("headerItems", []);
};


/**
 * Inserts a headerItem into the aggregation named <code>headerItems</code>.
 *
 * @param {sap.ui.core.Control}
 *          oHeaderItem the headerItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.insertHeaderItem = function(oHeaderItem, iIndex) {
	this.insertAggregation("headerItems", oHeaderItem, iIndex);
	return this;
};

/**
 * Adds some headerItem <code>oHeaderItem</code> 
 * to the aggregation named <code>headerItems</code>.
 *
 * @param {sap.ui.core.Control}
 *            oHeaderItem the headerItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Shell.prototype.addHeaderItem = function(oHeaderItem) {
	this.addAggregation("headerItems", oHeaderItem);
	return this;
};

/**
 * Removes an headerItem from the aggregation named <code>headerItems</code>.
 *
 * @param {int | string | sap.ui.core.Control} vHeaderItem the headerItem to remove or its index or id
 * @return {sap.ui.core.Control} the removed headerItem or null
 * @public
 */
sap.ui.ux3.Shell.prototype.removeHeaderItem = function(vHeaderItem) {
	return this.removeAggregation("headerItems", vHeaderItem);
};

/**
 * Removes all the controls in the aggregation named <code>headerItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Shell.prototype.removeAllHeaderItems = function() {
	return this.removeAllAggregation("headerItems");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>headerItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oHeaderItem the headerItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Shell.prototype.indexOfHeaderItem = function(oHeaderItem) {
	return this.indexOfAggregation("headerItems", oHeaderItem);
};
	

/**
 * Destroys all the headerItems in the aggregation 
 * named <code>headerItems</code>.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.destroyHeaderItems = function() {
	this.destroyAggregation("headerItems");
	return this;
};


/**
 * The ID of the Item that is currently selected.
 * When setting, the NavigationItem itself can be given instead of its ID. There will not be a worksetItemSelected event, the application is responsible to show the proper content according to the newly selected WorksetItem. If the set WorksetItem does not exist in this Shell, the first item (and first sub-item) will be selected after the call.
 * When getting, always the ID is returned, by which the NavigationItem instance can be retrieved.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedWorksetItem</code> association, or null
 * @public
 */
sap.ui.ux3.Shell.prototype.getSelectedWorksetItem = function() {
	return this.getAssociation("selectedWorksetItem", null);
};

/**
 * The ID of the Item that is currently selected.
 * When setting, the NavigationItem itself can be given instead of its ID. There will not be a worksetItemSelected event, the application is responsible to show the proper content according to the newly selected WorksetItem. If the set WorksetItem does not exist in this Shell, the first item (and first sub-item) will be selected after the call.
 * When getting, always the ID is returned, by which the NavigationItem instance can be retrieved.
 *
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedWorksetItem 
 *    Id of an element which becomes the new target of this <code>selectedWorksetItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.setSelectedWorksetItem = function(vSelectedWorksetItem) {
	this.setAssociation("selectedWorksetItem", vSelectedWorksetItem);
	return this;
};


	
/**
 * Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected. 
 *
 * @name sap.ui.ux3.Shell#worksetItemSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given.
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key The key of the selected NavigationItem (or null if there is no key)
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'worksetItemSelected' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.attachWorksetItemSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("worksetItemSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'worksetItemSelected' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.detachWorksetItemSelected = function(fnFunction, oListener) {
	this.detachEvent("worksetItemSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event worksetItemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given.</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The selected NavigationItem</li>
 * <li>'key' of type <code>string</code> The key of the selected NavigationItem (or null if there is no key)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Shell.prototype.fireWorksetItemSelected = function(mArguments) {
	this.fireEvent("worksetItemSelected", mArguments);
	return this;
};


/**
 * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements. 
 *
 * @name sap.ui.ux3.Shell#paneBarItemSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The ID of the selected PaneBarItem.
 * @param {sap.ui.core.Item} oControlEvent.getParameters.item The selected Item
 * @param {string} oControlEvent.getParameters.key The key of the selected Item (or null if there is no key)
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'paneBarItemSelected' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.attachPaneBarItemSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("paneBarItemSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'paneBarItemSelected' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.detachPaneBarItemSelected = function(fnFunction, oListener) {
	this.detachEvent("paneBarItemSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event paneBarItemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The ID of the selected PaneBarItem.</li>
 * <li>'item' of type <code>sap.ui.core.Item</code> The selected Item</li>
 * <li>'key' of type <code>string</code> The key of the selected Item (or null if there is no key)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Shell.prototype.firePaneBarItemSelected = function(mArguments) {
	this.fireEvent("paneBarItemSelected", mArguments);
	return this;
};


/**
 * Fired when the user clicks the "Log-off" button 
 *
 * @name sap.ui.ux3.Shell#logout
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'logout' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * Fired when the user clicks the "Log-off" button 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.attachLogout = function(oData, fnFunction, oListener) {
	this.attachEvent("logout", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'logout' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.detachLogout = function(fnFunction, oListener) {
	this.detachEvent("logout", fnFunction, oListener);
	return this;	
};

/**
 * Fire event logout to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Shell.prototype.fireLogout = function(mArguments) {
	this.fireEvent("logout", mArguments);
	return this;
};


/**
 * Fired when search has been triggered. 
 *
 * @name sap.ui.ux3.Shell#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * Fired when search has been triggered. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.attachSearch = function(oData, fnFunction, oListener) {
	this.attachEvent("search", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.detachSearch = function(fnFunction, oListener) {
	this.detachEvent("search", fnFunction, oListener);
	return this;	
};

/**
 * Fire event search to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Shell.prototype.fireSearch = function(mArguments) {
	this.fireEvent("search", mArguments);
	return this;
};


/**
 * Fired when a new feed entry is submitted. 
 *
 * @name sap.ui.ux3.Shell#feedSubmit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 * Fired when a new feed entry is submitted. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.attachFeedSubmit = function(oData, fnFunction, oListener) {
	this.attachEvent("feedSubmit", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.Shell</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Shell.prototype.detachFeedSubmit = function(fnFunction, oListener) {
	this.detachEvent("feedSubmit", fnFunction, oListener);
	return this;	
};

/**
 * Fire event feedSubmit to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Shell} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Shell.prototype.fireFeedSubmit = function(mArguments) {
	this.fireEvent("feedSubmit", mArguments);
	return this;
};


/**
 * Replaces the existing Shell content with the given Control(-Tree). Only leads to a re-rendering of the content area (not the complete Shell).
 * This method may be more convenient than a series of calls to "removeContent" and "addContent", which each lead to a re-rendering of the content area (but again not of the complete Shell).
 * 
 * By default the old content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
 *
 * @name sap.ui.ux3.Shell.prototype.setContent
 * @function
 * @param {sap.ui.core.Control} 
 *         oContent
 *         The new Content. In this method it must be exactly one control (-tree). Use addContent() to add more control (-trees) to the main content area of the Shell.
 * @param {boolean} 
 *         bDestroyOldContent
 *         If set, the controls previously contained in the Shell will be destroyed, to avoid memory leaks.

 * @type sap.ui.core.Control[]
 * @public
 */


/**
 * Replaces the existing side pane content with the given Control(-Tree). This method is optimized to only re-render the pane content (and not the shell) which is faster and smoother than any other way of changing the "paneContent" aggregation.
 * 
 * By default, the old pane content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
 *
 * @name sap.ui.ux3.Shell.prototype.setPaneContent
 * @function
 * @param {sap.ui.core.Control} 
 *         oContent
 *         The new Pane content. In this method it must be exactly one control (-tree). This could likely be a layout or a specific ux3 Pane control. Use addPaneContent() to add more control (-trees) to the Pane.
 * @param {boolean} 
 *         bDestroyOldContent
 *         If set, the controls previously contained in the pane will be destroyed, to avoid memory leaks.

 * @type sap.ui.core.Control[]
 * @public
 */


/**
 * Experimental method! Do not use!
 *
 * @name sap.ui.ux3.Shell.prototype.openPersonalizationDialog
 * @function

 * @type void
 * @public
 */


/**
 * Experimental method! Do not use!
 * 
 * Makes Shell personalization available and injects the given personalization settings. This should be called before the user can do any adaptations per drag&drop or using the personalization dialog. Otherwise it may override the user's new settings.
 *
 * @name sap.ui.ux3.Shell.prototype.initializePersonalization
 * @function
 * @param {object} 
 *         sSettings
 *         Personalization settings object

 * @type void
 * @public
 */


/**
 * Returns the SearchField control which is used in the Search Tool.
 *
 * @name sap.ui.ux3.Shell.prototype.getSearchField
 * @function

 * @type sap.ui.commons.SearchField
 * @public
 */


// Start of sap/ui/ux3/Shell.js
sap.ui.ux3.Shell.WSI_MENU_DELAY = 200;
sap.ui.ux3.Shell.WSI_OVERFLOW_SCROLL_STEP = 250; // how many pixels to scroll with every overflow arrow click
sap.ui.ux3.Shell.TOOL_PREFIX = "-tool-";
sap.ui.ux3.Shell.FIRST_RENDERING = true; // used for detecting the single very first rendering of any Shell on the page

sap.ui.ux3.Shell.prototype.init = function() {
   this._iOpenPaneIndex = -1;
   this._sOpenWsiId = null;

   this._bPreviousScrollRight = false; // remember the workset item overflow state
   this._bPreviousScrollLeft = false;

   this._sSelectedWorksetId = null;
   this._sSelectedFacetId= null;
   this._oWorksetBar = new sap.ui.ux3.NavigationBar(this.getId() + "-wsBar", {toplevelVariant:true,select:[this._handleWorksetBarSelect,this]}).setParent(this);
   this._oFacetBar = new sap.ui.ux3.NavigationBar(this.getId() + "-facetBar", {select:[this._handleFacetBarSelect,this]}).setParent(this);
};

sap.ui.ux3.Shell.prototype.exit = function() {
	if (this._oWorksetBar) {
		this._oWorksetBar.destroy();
	}
	if (this._oFacetBar) {
		this._oFacetBar.destroy();
	}
	this._oSearchField = null;
};

sap.ui.ux3.Shell.prototype.onBeforeRendering = function() {
	var sId = this.getId();

	// unbind the tool palette mouse (hover effect) handlers
	this._beforeRenderingToolPalette();
	
	// drag&drop for images with local file API
	if (window.FileReader) {
		var $hdr = jQuery.sap.byId(sId + "-hdr");
		$hdr.unbind('dragover', this._handleDragover)
			.unbind('dragend', this._handleDragend)
			.unbind('drop', this._handleDrop);
		var $bg = jQuery.sap.byId(sId + "-bgImg");
		$bg.unbind('dragover', jQuery.proxy(this._handleDragover))
			.unbind('dragend', this._handleDragend)
			.unbind('drop', this._handleDrop);
	}
};

sap.ui.ux3.Shell.prototype.onAfterRendering = function() {
	var sId = this.getId();

	// register hover effect handlers for application-provided tool icons
	this._afterRenderingToolPalette();
	
	// drag&drop for images with local file API
	if (window.FileReader) {
		var $hdr = jQuery.sap.byId(sId + "-hdr");
		$hdr.bind('dragover', jQuery.proxy(this._handleDragover, this))
			.bind('dragend',jQuery.proxy(this._handleDragend, this))
			.bind('drop', jQuery.proxy(this._handleDrop, this));
		var $bg = jQuery.sap.byId(sId + "-bgImg");
		$bg.bind('dragover', jQuery.proxy(this._handleDragover, this))
			.bind('dragend',jQuery.proxy(this._handleDragend, this))
			.bind('drop', jQuery.proxy(this._handleDrop, this));
	}

	// hide or show the facet bar depending on whether the current workset item has sub-items
	var bShowFacetBar = (this._oFacetBar.getAssociatedItems().length > 0);
	jQuery.sap.byId(this.getId() + "-facetBar").css("display", (bShowFacetBar ? "block" : "none"));

	// remember RTL mode to avoid repeated checks
	this._bRtl = sap.ui.getCore().getConfiguration().getRTL();

	if (this._getPersonalization().hasChanges()) {
		this._getPersonalization().applySettings(this._getPersonalization().oSettings);
	}
	
	// ItemNavigation for PaneBar items
	if (!this._oPaneItemNavigation) {
		this._oPaneItemNavigation = new sap.ui.core.delegate.ItemNavigation().setCycling(false);
		this.addDelegate(this._oPaneItemNavigation);
	}
	var $PaneListRef = jQuery.sap.byId(this.getId() + "-paneBar").find(".sapUiUx3ShellPaneEntries");
	this._updatePaneBarItemNavigation($PaneListRef);

	sap.ui.ux3.Shell.FIRST_RENDERING = false;
};

/**
 * Updates the ItemNavigation for the PaneBarItems after the HTML has changed due to re-rendering
 * 
 * @param $PaneListRef
 */
sap.ui.ux3.Shell.prototype._updatePaneBarItemNavigation = function($PaneListRef) {
	this._oPaneItemNavigation.setRootDomRef($PaneListRef[0]);
	var aPaneItems = $PaneListRef.children().toArray();
	this._oPaneItemNavigation.setItemDomRefs(aPaneItems);
	
	if (this._oPaneItemNavigation.getFocusedIndex() > aPaneItems.length) { // if items have been removed
		this._oPaneItemNavigation.setFocusedIndex(-1);
	}
};


/**
 *
 * @private
 * @static
 */
sap.ui.ux3.Shell._hoverTool = function(oDomRef, bMouseover) {
	if (oDomRef && oDomRef.firstChild) {
		var toolId = oDomRef.id.substr(oDomRef.id.indexOf(sap.ui.ux3.Shell.TOOL_PREFIX) + 6);
		var tool = sap.ui.getCore().byId(toolId);
		if (tool && tool.willBeClosed()) {
			oDomRef.firstChild.src = (bMouseover ? tool.getIconHover() : tool.getIcon());
		}
	}
};


sap.ui.ux3.Shell.prototype.onclick = function(oEvent) {
	this.onUserActivation(oEvent);
};
sap.ui.ux3.Shell.prototype.onsapspace = function(oEvent) {
	this.onUserActivation(oEvent);
};
sap.ui.ux3.Shell.prototype.onsapenter = function(oEvent) {
	this.onUserActivation(oEvent);
};

sap.ui.ux3.Shell.prototype.onUserActivation = function(oEvent) {
	var sTargetId = oEvent.target.id;
	var iIdLength = this.getId().length;
	var parent = oEvent.target.parentNode;

	if (oEvent.target.className && oEvent.target.className.indexOf("sapUiUx3ShellHeader-logout") > -1) { // logout button clicked
		this.fireLogout();

	} else if (parent && parent.parentNode 
				&& parent.parentNode.className 
				&& parent.parentNode.className.indexOf("sapUiUx3ShellToolPaletteArea") > -1) {  // tool item clicked
			this._handleToolItemClick(sTargetId);

	} else if (parent && parent.parentNode
				&& parent.parentNode.parentNode
				&& parent.parentNode.parentNode.className
				&& parent.parentNode.parentNode.className.indexOf("sapUiUx3ShellToolPaletteArea") > -1) {  // image in tool item clicked
			this._handleToolItemClick(parent.id);

	} else if (sTargetId) {
		if (jQuery.sap.startsWith(sTargetId, this.getId() + "-pb_")) {  // paneBar item clicked
			var paneId = sTargetId.substr(iIdLength+4);
			this._handlePaneBarItemClick(paneId);
		}
	}
};




/******** WORKSET ITEMS *********/


sap.ui.ux3.Shell.prototype._handleWorksetBarSelect = function(oEvent) {
	this._handleWorksetItemClick(oEvent.getParameter("item"));
};

sap.ui.ux3.Shell.prototype._handleFacetBarSelect = function(oEvent) {
	this._handleWorksetItemClick(oEvent.getParameter("item"));
};


sap.ui.ux3.Shell.prototype._handleWorksetItemClick = function(oElement) {
	var parent = oElement.getParent();
	var id = oElement.getId();

	if (parent instanceof sap.ui.ux3.Shell) { // 1st-level
		if (id != this._sSelectedWorksetId) {   // it's actually a change
			this._sSelectedWorksetId = id;
			var aSubItems = oElement.getSubItems();
			if (aSubItems.length > 0) {
				this._sSelectedFacetId = aSubItems[0].getId();
				id = this._sSelectedFacetId; // the user clicked first-level, but if the first-level has children there must be one of them selected
			} else {
				this._sSelectedFacetId = null;
			}

			// tell the application what the user has done and give the chance to supply new/more/changed subitems
			this._fireWorksetItemSelected(id);

			// if the application modifies/sets the selected subId, this should work, as long as this._sSelectedFacetId is updated

			// application has received the event and potentially modified the subitems
			var aSubItems = oElement.getSubItems();
			this._oFacetBar.setAssociatedItems(aSubItems); // exchange the items in the second-level navigation

			// hide/show the second-level navigation
			if (aSubItems.length > 0) {
				if (!this._oFacetBar.isSelectedItemValid()) {
					this._oFacetBar.setSelectedItem(aSubItems[0]);
					this._sSelectedFacetId = aSubItems[0].getId();
				}
				jQuery.sap.byId(this.getId() + "-facetBar").slideDown();
			} else {
				this._oFacetBar.setSelectedItem(null);
				jQuery.sap.byId(this.getId() + "-facetBar").slideUp();
			}
		}

	} else {                                	 // 2nd-level - it is a sub-item
		if (id != this._sSelectedFacetId) { // it's actually a change
			this._sSelectedFacetId = id;

			this._fireWorksetItemSelected(id);
		}
	}
};


sap.ui.ux3.Shell.prototype._fireWorksetItemSelected = function(sId) {
	var item = sap.ui.getCore().byId(sId);
	var key = (item ? item.getKey() : null);
	this.setAssociation("selectedWorksetItem", sId, true); // update the internal and publicly available knowledge about which item is selected
	this.fireWorksetItemSelected({id:sId,item:item,key:key});
};





/******** TOOL PALETTE *********/



sap.ui.ux3.Shell.prototype._handleToolItemClick = function(sId) {

	// close any previously open tool
	var sAlreadyOpenId = undefined;
	if (this._oOpenToolPopup) {
		sAlreadyOpenId = this._oOpenToolPopup.getId(); // remember ID of open tool, so it does not get opened again below
		jQuery.sap.byId(this.getId() + sap.ui.ux3.Shell.TOOL_PREFIX + this._oOpenToolPopup.getId()).removeClass("sapUiUx3ShellToolSelected").attr("aria-pressed", "false");
		this._oOpenToolPopup.close();
		this._oOpenToolPopup = null;
	}

	// identify new tool
	var tool;
	var toolId = sId.substr(sId.indexOf(sap.ui.ux3.Shell.TOOL_PREFIX) + 6);
	if (toolId == (this.getId() + "-searchTool")) {
		tool = this._getSearchTool();
	} else if (toolId == (this.getId() + "-inspectorTool")) {
		tool = this._getInspectorTool();
	} else if (toolId == (this.getId() + "-feederTool")) {
		tool = this._getFeederTool();
	} else  {
		// application tool clicked
		tool = sap.ui.getCore().byId(toolId);
	}

	// open the new tool
	if (tool && (tool.getId() != sAlreadyOpenId)) {
		sap.ui.ux3.Shell._hoverTool(jQuery.sap.domById(this.getId() + sap.ui.ux3.Shell.TOOL_PREFIX + sAlreadyOpenId), false); // unset hover state on other, closed tool icon
		this._oOpenToolPopup = tool;
		tool.setPosition(sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.EndTop, jQuery.sap.domById(sId), "13 -6", "none");
		tool.open();

		// mark icon as "tool opened"
		jQuery.sap.byId(sId).addClass("sapUiUx3ShellToolSelected").attr("aria-pressed", "true");
		// need to reset the icon also when the tool is closed by the application
		var that = this;
		tool.attachClose(function(oEvt){
			jQuery.sap.byId(sId).removeClass("sapUiUx3ShellToolSelected");
			that._oOpenToolPopup = null;
			sap.ui.ux3.Shell._hoverTool(jQuery.sap.domById(sId), false); // unset hover state in case it was closed by app
		});
		
	} else if (tool.getId() == sAlreadyOpenId) {
		sap.ui.ux3.Shell._hoverTool(jQuery.sap.domById(this.getId() + sap.ui.ux3.Shell.TOOL_PREFIX + sAlreadyOpenId), true); // set hover state, as the mouse is still there
	}
};

sap.ui.ux3.Shell.prototype._getSearchTool = function() {
	if (!this._oSearchPopup) {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
		this._oSearchPopup = new sap.ui.ux3.ToolPopup(this.getId() + "-searchTool", {tooltip:rb.getText("SHELL_SEARCH")}).addStyleClass("sapUiUx3TP-search");
		var that = this;
		var sf = new sap.ui.commons.SearchField(this.getId() + "-searchField", {
			enableListSuggest: false,
			search: function(oEvent) {
				that.fireSearch({text:oEvent.getParameter("query")});
				sf.setValue("");
			}
		});
		var label = new sap.ui.commons.Label({text:"Search:"}).setLabelFor(sf);
		this._oSearchPopup.addContent(label).addContent(sf);
		this._oSearchPopup.attachOpen(function(){
			window.setTimeout(function(){sf.focus();},100);
		});
		this._oSearchPopup.attachClose(function(){
			sf.setValue("");
		});
		this._oSearchField = sf;
	}
	return this._oSearchPopup;
};

sap.ui.ux3.Shell.prototype.getSearchField = function() {
	if(!this._oSearchField){
		this._getSearchTool();
	}
	return this._oSearchField;
};

sap.ui.ux3.Shell.prototype._getInspectorTool = function() {
	if (!this._oInspectorPopup) {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
		this._oInspectorPopup = new sap.ui.ux3.ToolPopup(this.getId() + "-inspectorTool", {tooltip:rb.getText("SHELL_TI")}).addStyleClass("sapUiUx3TP-inspector");
		var label = new sap.ui.commons.Label({text:"[Once finished, the ThingInspector will open here.]"});
		this._oInspectorPopup.addContent(label);
	}
	return this._oInspectorPopup;
};

sap.ui.ux3.Shell.prototype._getFeederTool = function() {
	if (!this._oFeederPopup) {
		var that = this;
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
		this._oFeederPopup = new sap.ui.ux3.ToolPopup(this.getId() + "-feederTool", {tooltip:rb.getText("SHELL_FEEDER")}).addStyleClass("sapUiUx3TP-feeder");
		var f = new sap.ui.ux3.feed.Feeder({mode:sap.ui.ux3.feed.FeederMode.FeederComment,submitPress:function(oEvent){
			var text = oEvent.getParameter("content");
			that.fireFeedSubmit({text:text});
			f.setText("");
			that._oFeederPopup.close();
		}});
		this._oFeederPopup.attachOpen(function(){
			// TODO: does not work... window.setTimeout(function(){f.focus();},100);
		});
		this._oFeederPopup.attachClose(function(){
			// maybe the text should stay when closing f.setText("");
		});
		var label = new sap.ui.commons.Label({text:"New Feed:"});
		label.setLabelFor(f);
		this._oFeederPopup.addContent(label).addContent(f);
	}
	return this._oFeederPopup;
};




/******** PANE BAR *********/




sap.ui.ux3.Shell.prototype._handlePaneBarItemClick = function(sPaneId) {
	if (sPaneId == this._sOpenPaneId) { // close currently opened pane area
		this._closePane(sPaneId);
		jQuery.sap.byId(this.getId() + "-pb_" + sPaneId).removeClass("sapUiUx3ShellPaneEntrySelected");//.attr("tabindex", "-1");
		this._sOpenPaneId = null;

	} else { // a pane needs to be displayed
		var item = sap.ui.getCore().byId(sPaneId);
		var key = (item ? (item.getKey() == "" ? null : item.getKey()) : null);
		this.firePaneBarItemSelected({"id":sPaneId,"item":item,"key":key});

		jQuery.sap.byId(this.getId() + "-pb_" + sPaneId).addClass("sapUiUx3ShellPaneEntrySelected");//.attr("tabindex", "0");
		if (!this._sOpenPaneId) {
			// pane area not open yet, open it
		  this._openPane();
		} else {
			// pane area already open for a different pane bar item - unselect that one
			jQuery.sap.byId(this.getId() + "-pb_" + this._sOpenPaneId).removeClass("sapUiUx3ShellPaneEntrySelected");//.attr("tabindex", "-1");
		}

		this._sOpenPaneId = sPaneId;
	}
};


(function() {

	var PANE_OUTER_DISTANCE = 42; // make this private, using the closure
	


	sap.ui.ux3.Shell.prototype._closePane = function() {

		var id = this.getId();
		if (this._bRtl) {
			jQuery.sap.byId(id+"-canvas").animate({left: PANE_OUTER_DISTANCE + "px"});
			jQuery(this._aSizeSyncRef).animate({left: PANE_OUTER_DISTANCE + "px"});
			jQuery.sap.byId(id+"-wBar").animate({marginLeft: (PANE_OUTER_DISTANCE + 14) + "px"});
			jQuery.sap.byId(id+"-canvasBackground").removeClass("sapUiUx3ShellCanvasBackgroundOpen").addClass("sapUiUx3ShellCanvasBackgroundClosed");
			jQuery.sap.byId(id+"-canvasBackground").animate({left: PANE_OUTER_DISTANCE + "px"}, function() {
				jQuery.sap.byId(id+"-paneBar").removeClass("sapUiUx3ShellPaneBarOpen");
			});
		} else {
			jQuery.sap.byId(id+"-canvas").animate({right: PANE_OUTER_DISTANCE + "px"});
			jQuery(this._aSizeSyncRef).animate({right: PANE_OUTER_DISTANCE + "px"});
			jQuery.sap.byId(id+"-wBar").animate({marginRight: (PANE_OUTER_DISTANCE + 14) + "px"});
			jQuery.sap.byId(id+"-canvasBackground").removeClass("sapUiUx3ShellCanvasBackgroundOpen").addClass("sapUiUx3ShellCanvasBackgroundClosed");
			jQuery.sap.byId(id+"-canvasBackground").animate({right: PANE_OUTER_DISTANCE + "px"}, function() {
				jQuery.sap.byId(id+"-paneBar").removeClass("sapUiUx3ShellPaneBarOpen");
			});
		}

	};

	sap.ui.ux3.Shell.prototype._openPane = function() {
		var PANE_WIDTH = this.getPaneWidth();
	
		var id = this.getId();
		if (this._bRtl) {
			jQuery.sap.byId(id+"-paneBar").addClass("sapUiUx3ShellPaneBarOpen");
			jQuery.sap.byId(id+"-wBar").animate({marginLeft: (PANE_WIDTH + PANE_OUTER_DISTANCE + 22) + "px"});
			jQuery.sap.byId(id+"-canvas").animate({left: (PANE_WIDTH + PANE_OUTER_DISTANCE) + "px"});
			jQuery(this._aSizeSyncRef).animate({left: (PANE_WIDTH + PANE_OUTER_DISTANCE) + "px"});
			jQuery.sap.byId(id+"-canvasBackground").animate({left: (PANE_WIDTH + PANE_OUTER_DISTANCE) + "px"}, function() {
				jQuery.sap.byId(id+"-canvasBackground").removeClass("sapUiUx3ShellCanvasBackgroundClosed").addClass("sapUiUx3ShellCanvasBackgroundOpen");
			});
		} else {
			jQuery.sap.byId(id+"-paneBar").addClass("sapUiUx3ShellPaneBarOpen");
			jQuery.sap.byId(id+"-wBar").animate({marginRight: (PANE_WIDTH + PANE_OUTER_DISTANCE + 22) + "px"});
			jQuery.sap.byId(id+"-canvas").animate({right: (PANE_WIDTH + PANE_OUTER_DISTANCE) + "px"});
			jQuery(this._aSizeSyncRef).animate({right: (PANE_WIDTH + PANE_OUTER_DISTANCE) + "px"});
			jQuery.sap.byId(id+"-canvasBackground").animate({right: (PANE_WIDTH + PANE_OUTER_DISTANCE) + "px"}, function() {
				jQuery.sap.byId(id+"-canvasBackground").removeClass("sapUiUx3ShellCanvasBackgroundClosed").addClass("sapUiUx3ShellCanvasBackgroundOpen");
			});
		}
	};

	sap.ui.ux3.Shell.prototype.setPaneWidth = function (iWidth) {
		if (typeof iWidth == "number" && (iWidth > 0)) {
			iWidth = Math.max(iWidth, 50);

			// apply width
			if (this.getDomRef()) {
				var id = this.getId();
				jQuery.sap.byId(id + "-paneContent").css("width", iWidth + "px");

				if (!!this._sOpenPaneId) { // pane area is open
					if (this._bRtl) {
						jQuery.sap.byId(id+"-wBar").css("marginLeft", (iWidth + PANE_OUTER_DISTANCE + 22) + "px");
						jQuery.sap.byId(id+"-canvas").css("left", (iWidth + PANE_OUTER_DISTANCE) + "px");
						jQuery(this._aSizeSyncRef).css("left", (iWidth + PANE_OUTER_DISTANCE) + "px");
						jQuery.sap.byId(id+"-canvasBackground").css("left", (iWidth + PANE_OUTER_DISTANCE) + "px");
					} else {
						jQuery.sap.byId(id+"-wBar").css("marginRight", (iWidth + PANE_OUTER_DISTANCE + 22) + "px");
						jQuery.sap.byId(id+"-canvas").css("right", (iWidth + PANE_OUTER_DISTANCE) + "px");
						jQuery(this._aSizeSyncRef).css("right", (iWidth + PANE_OUTER_DISTANCE) + "px");
						jQuery.sap.byId(id+"-canvasBackground").css("right", (iWidth + PANE_OUTER_DISTANCE) + "px");
					}
				}
			}

			this.setProperty("paneWidth", iWidth, true);
		}
		
		return this;
	};

}());


/**
 * Used to hand a DomRef to the Shell which should always cover the canvas area and also be animated with PaneBar opening/closing.
 * When nothing is given or the next DomRef is given or the DomRef is not found when the Shell tries to adapt it,
 * the Shell stops syncing this DomRef's size.
 *
 * Only to be used internally (by the ThingInspector)! Marking as "private", but actually is "package" visibility.
 * @private
 */
sap.ui.ux3.Shell.prototype.syncWithCanvasSize = function(oDomRef) {
	this._aSizeSyncRef = oDomRef;

	// set the initial size correctly
	if (oDomRef) {
		var oCanvas = jQuery.sap.domById(this.getId() + "-canvas");
		oDomRef.style.left = oCanvas.offsetLeft + "px";
		oDomRef.style.right = (jQuery(document).width() - oCanvas.offsetLeft - oCanvas.offsetWidth) + "px";
		oDomRef.style.top = jQuery.sap.domById(this.getId() + "-hdrLine").offsetHeight + "px";
		oDomRef.style.bottom = "0";
	}
};


// invalidation avoiding code

sap.ui.ux3.Shell.prototype.setAppTitle = function(sAppTitle) {
	this.setProperty("appTitle", sAppTitle, true);
	this._rerenderHeader();
	return this;
};

sap.ui.ux3.Shell.prototype.setAppIcon = function(sAppIcon) {
	this.setProperty("appIcon", sAppIcon, true);
	this._rerenderHeader();
	return this;
};

sap.ui.ux3.Shell.prototype.setShowLogoutButton = function(bShowLogoutButton) {
	this.setProperty("showLogoutButton", bShowLogoutButton, true);
	this._rerenderHeader();
	return this;
};

sap.ui.ux3.Shell.prototype.insertHeaderItem = function(oHeaderItem, iIndex) {
	if (sap.ui.commons && sap.ui.commons.Button && (oHeaderItem instanceof sap.ui.commons.Button)) {
		oHeaderItem.setStyled(false);
	}
	this.insertAggregation("headerItems", oHeaderItem, iIndex, true);
	this._rerenderHeader();
	return this;
};
sap.ui.ux3.Shell.prototype.addHeaderItem = function(oHeaderItem) {
	if (sap.ui.commons && sap.ui.commons.Button && (oHeaderItem instanceof sap.ui.commons.Button)) {
		oHeaderItem.setStyled(false);
	}
	this.addAggregation("headerItems", oHeaderItem, true);
	this._rerenderHeader();
	return this;
};
sap.ui.ux3.Shell.prototype.removeHeaderItem = function(vIndex) {
	var result = this.removeAggregation("headerItems", vIndex, true);
	this._rerenderHeader();
	return result;
};
sap.ui.ux3.Shell.prototype.removeAllHeaderItems = function() {
	var result = this.removeAllAggregation("headerItems", true);
	this._rerenderHeader();
	return result;
};
sap.ui.ux3.Shell.prototype.destroyHeaderItems = function() {
	this.destroyAggregation("headerItems", true);
	this._rerenderHeader();
	return this;
};


sap.ui.ux3.Shell.prototype.setShowSearchTool = function(bShowSearchTool) {
	this.setProperty("showSearchTool", bShowSearchTool, true);
	this._rerenderToolPalette();
	return this;
};

sap.ui.ux3.Shell.prototype.setShowInspectorTool = function(bShowInspectorTool) {
	this.setProperty("showInspectorTool", bShowInspectorTool, true);
	this._rerenderToolPalette();
	return this;
};

sap.ui.ux3.Shell.prototype.setShowFeederTool = function(bShowFeederTool) {
	this.setProperty("showFeederTool", bShowFeederTool, true);
	this._rerenderToolPalette();
	return this;
};

sap.ui.ux3.Shell.prototype.insertToolPopup = function(oToolPopup, iIndex) {
	this.insertAggregation("toolPopups", oToolPopup, iIndex, true);
	oToolPopup.attachIconChanged(this._rerenderToolPalette, this);
	this._rerenderToolPalette();
	return this;
};
sap.ui.ux3.Shell.prototype.addToolPopup = function(oToolPopup) {
	this.addAggregation("toolPopups", oToolPopup, true);
	oToolPopup.attachIconChanged(this._rerenderToolPalette, this);
	this._rerenderToolPalette();
	return this;
};
sap.ui.ux3.Shell.prototype.removeToolPopup = function(vIndex) {
	var result = this.removeAggregation("toolPopups", vIndex, true);
	this._rerenderToolPalette();
	return result;
};
sap.ui.ux3.Shell.prototype.removeAllToolPopups = function() {
	var result = this.removeAllAggregation("toolPopups", true);
	this._rerenderToolPalette();
	return result;
};
sap.ui.ux3.Shell.prototype.destroyToolPopups = function() {
	this.destroyAggregation("toolPopups", true);
	this._rerenderToolPalette();
	return this;
};

sap.ui.ux3.Shell.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex, true);
	this._rerenderContent();
	return this;
};
sap.ui.ux3.Shell.prototype.addContent = function(oContent) {
	this.addAggregation("content", oContent, true);
	this._rerenderContent();
	return this;
};
sap.ui.ux3.Shell.prototype.removeContent = function(vIndex) {
	var result = this.removeAggregation("content", vIndex, true);
	this._rerenderContent();
	return result;
};
sap.ui.ux3.Shell.prototype.removeAllContent = function() {
	var result = this.removeAllAggregation("content", true);
	this._rerenderContent();
	return result;
};
sap.ui.ux3.Shell.prototype.destroyContent = function() {
	this.destroyAggregation("content", true);
	this._rerenderContent();
	return this;
};

sap.ui.ux3.Shell.prototype.addPaneBarItem = function(oPaneBarItem) {
	this.addAggregation("paneBarItems", oPaneBarItem, true);
	this._rerenderPaneBarItems();
	return this;
}; 
sap.ui.ux3.Shell.prototype.insertPaneBarItem = function(oPaneBarItem, iIndex) {
	this.insertAggregation("paneBarItems", oPaneBarItem, iIndex, true);
	this._rerenderPaneBarItems();
	return this;
}; 
sap.ui.ux3.Shell.prototype.removePaneBarItem = function(vPaneBarItem) {
	var result = this.removeAggregation("paneBarItems", vPaneBarItem, true);
	this._rerenderPaneBarItems();
	return result;
}; 
sap.ui.ux3.Shell.prototype.removeAllPaneBarItems = function() {
	var result = this.removeAllAggregation("paneBarItems", true);
	this._rerenderPaneBarItems();
	return result;
}; 
sap.ui.ux3.Shell.prototype.destroyPaneBarItems = function() {
	this.destroyAggregation("paneBarItems", true);
	this._rerenderPaneBarItems();
	return this;
};


sap.ui.ux3.Shell.prototype._rerenderHeader = function() {
	var $hdr = jQuery.sap.byId(this.getId() + "-hdr");
	if ($hdr.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ShellRenderer.renderHeader(rm, this);
		rm.flush($hdr[0], true);
		rm.destroy();
	}
};

sap.ui.ux3.Shell.prototype._rerenderToolPalette = function() {
	var $tp = jQuery.sap.byId(this.getId() + "-tp");
	if ($tp.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		this._beforeRenderingToolPalette();
		sap.ui.ux3.ShellRenderer.renderToolPalette(rm, this);
		rm.flush($tp[0], true);
		this._afterRenderingToolPalette();
		rm.destroy();
	}
};

sap.ui.ux3.Shell.prototype._beforeRenderingToolPalette = function() {
	// unbind the tool palette mouse (hover effect) handlers
	jQuery.sap.byId(this.getId() + "-toolPalette").children(".sapUiUx3ShellTool").unbind("mouseenter mouseleave");
};

sap.ui.ux3.Shell.prototype._afterRenderingToolPalette = function() {
	// register hover effect handlers for application-provided tool icons
	var sIdPrefix = this.getId() + sap.ui.ux3.Shell.TOOL_PREFIX;
	var aToolItems = this.getToolPopups();
	for (var i = 0; i < aToolItems.length; i++) {
		var oToolItem = aToolItems[i];
		if (oToolItem instanceof sap.ui.ux3.ToolPopup) { 	// regular item
			jQuery.sap.byId(sIdPrefix + oToolItem.getId()).hover(
				function() {
					sap.ui.ux3.Shell._hoverTool(this, true);
				},
				function() {
					sap.ui.ux3.Shell._hoverTool(this, false);
				}
			);
		}
	}
};

sap.ui.ux3.Shell.prototype._rerenderContent = function(bPreventPreserve) {
	var $content = jQuery.sap.byId(this.getId() + "-content");
	if ($content.length > 0) {
		var aContent = this.getContent(),
		rm = sap.ui.getCore().createRenderManager();
		for (var i = 0; i < aContent.length; i++) {
			rm.renderControl(aContent[i]);
		}
		rm.flush($content[0], bPreventPreserve);
		rm.destroy();
	}
};

sap.ui.ux3.Shell.prototype._rerenderPane = function(bPreventPreserve) {
	var $paneContent = jQuery.sap.byId(this.getId() + "-paneContent");
	if ($paneContent.length > 0) {
		var aPaneContent = this.getPaneContent(),
		rm = sap.ui.getCore().createRenderManager();
		for (var i = 0; i < aPaneContent.length; i++) {
			rm.renderControl(aPaneContent[i]);
		}
		rm.flush($paneContent[0], bPreventPreserve);
		rm.destroy();
	}
};

sap.ui.ux3.Shell.prototype._rerenderPaneBarItems = function() {
	var $PaneListRef = jQuery.sap.byId(this.getId() + "-paneBar").find(".sapUiUx3ShellPaneEntries");

	if ($PaneListRef.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ShellRenderer.renderPaneBarItems(rm, this);
		rm.flush($PaneListRef[0]);
		rm.destroy();
		
		this._updatePaneBarItemNavigation($PaneListRef);
	}
};




/* DEBUG code for tracking invalidation */

/**
 * Forces invalidation and rerendering (.invalidate() is disabled)
 * @private
 */
sap.ui.ux3.Shell.prototype.forceInvalidation = sap.ui.core.Control.prototype.invalidate;

/**
 * Hack that prevents Shell invalidation by default.
 * Later, invalidation should return to normal, but be prevented in all typical cases by bSuppressRerendering with explicit change handling.
 *
 * @private
 */
sap.ui.ux3.Shell.prototype.invalidate = function(oSource) {

	if (oSource == this) {
		// does not happen because the source is only given when propagating to a parent

	} else if (!oSource) {
		// direct invalidation of the Shell; this means a property has been modified
		this.forceInvalidation(); // let invalidation occur

	} else if (oSource instanceof sap.ui.ux3.NavigationItem) {
		// a workset item was changed/renamed or, more likely, subitems were added/exchanged
		// TODO let the app change workset items at any time!  this._bWorksetItemsInvalidated = true;
		this._oWorksetBar.setAssociatedItems(this.getWorksetItems());
		var wsi = this.getSelectedWorksetItem();
		if (wsi) {
			var sel = sap.ui.getCore().byId(wsi);
			if (sel && sel.getParent() instanceof sap.ui.ux3.NavigationItem) {
				this._oFacetBar.setAssociatedItems(sel.getParent().getSubItems());
			}
		}
		
	} else if ((oSource instanceof sap.ui.core.Item) && (oSource.getParent() == this)) {
		// a PaneBarItem was changed/added/removed
		this.forceInvalidation();

	} else if (oSource instanceof sap.ui.ux3.ToolPopup) {
		// do nothing: icon is rendered by listener to iconChanged event

	} else if (this.indexOfHeaderItem(oSource) >= 0) {
		// a header item was invalidated - rerender the header
		this._rerenderHeader();

	} else {
		// a child was invalidated - TODO: check what kind of child and either handle directly or re-render
	}
};


sap.ui.ux3.Shell.prototype._setParent = sap.ui.core.Control.prototype.setParent;
sap.ui.ux3.Shell.prototype.setParent = function(oParent, sAggregationName, bSuppressRerendering) {
	this._setParent(oParent, sAggregationName, bSuppressRerendering);
	this.forceInvalidation(); // TODO: temporary hack to force invalidation when the Shell is added to a UiArea
};


/*  METHODS  */

sap.ui.ux3.Shell.prototype.setContent = function(vContent, bDestruct) {
	jQuery.sap.assert(vContent === null 
			|| (vContent instanceof sap.ui.core.Control) 
			|| ((jQuery.isArray(vContent) && ((vContent.length > 0) ? (vContent[0] instanceof sap.ui.core.Control) : true))), 
			"vContent must be a control or array of controls or null"); // only the first array element is checked
	jQuery.sap.assert((bDestruct === undefined || bDestruct === true || bDestruct === false), "bDestruct must be true, false, or undefined");
	
	var oldContent = [];
	var $content = jQuery.sap.byId(this.getId() + "-content");
	var bPreventPreserve = false;

	if (!bDestruct) {
		oldContent = this.removeAllAggregation("content", true);

		if ($content.length > 0) {
			sap.ui.core.RenderManager.preserveContent($content[0]);
			bPreventPreserve = true;
			$content.empty();
		}
	} else {
		this.destroyAggregation("content", true);
	}

	// add new control(s) to aggregation
	if (vContent instanceof sap.ui.core.Control) { // one single control
		this.addAggregation("content", vContent, true);
	} else if (vContent && typeof(vContent) == "object" && vContent.length) { // an array of (hopefully) controls
		for (var i = 0; i < vContent.length; i++) {
			this.addAggregation("content", vContent[i], true);
		}
	}

	// if Shell is already rendered, update the UI
	this._rerenderContent(bPreventPreserve);

	return oldContent;
};


sap.ui.ux3.Shell.prototype.setPaneContent = function(vContent, bDestruct) {
	jQuery.sap.assert((vContent instanceof sap.ui.core.Control) 
			|| ((jQuery.isArray(vContent) && ((vContent.length > 0) ? (vContent[0] instanceof sap.ui.core.Control) : true))), 
			"vContent must be a control or array of controls"); // only the first array element is checked
	jQuery.sap.assert((bDestruct === undefined || bDestruct === true || bDestruct === false), "bDestruct must be true, false, or undefined");
	
	var oldContent = [];
	var $paneContent = jQuery.sap.byId(this.getId() + "-paneContent");
	var bPreventPreserve = false;

	if (!bDestruct) {
		oldContent = this.removeAllAggregation("paneContent", true);

		if ($paneContent.length > 0) {
			sap.ui.core.RenderManager.preserveContent($paneContent[0]);
			bPreventPreserve = true; // HTML content is already preserved; do not do it again in the RenderManager
			$paneContent.empty();
		}
	} else {
		this.destroyAggregation("paneContent", true);
	}

	// add new control(s) to aggregation
	if (vContent instanceof sap.ui.core.Control) { // one single control
		this.addAggregation("paneContent", vContent, true);
	} else if (vContent && typeof(vContent) == "object" && vContent.length) { // an array of (hopefully) controls
		for (var i = 0; i < vContent.length; i++) {
			this.addAggregation("paneContent", vContent[i], true);
		}
	}

	// if Shell is already rendered, update the UI
	this._rerenderPane(bPreventPreserve);

	return oldContent;
};



sap.ui.ux3.Shell.prototype.getSelectedWorksetItem = function() {
	/* Initially, this is null
	 * There is a value as soon as:
	 * 1. The application sets a value
	 * 2. The Shell is rendered without a value (the first toplevel item will be used then (respectively its first child, if present))
	 */
	return this.getAssociation("selectedWorksetItem");
};

sap.ui.ux3.Shell.prototype.setSelectedWorksetItem = function(selectedWorksetItem) {
	var oldSelectedId = this.getSelectedWorksetItem();
	this.setAssociation("selectedWorksetItem", selectedWorksetItem, true);
	var newSelectedId = this.getSelectedWorksetItem();

	if (oldSelectedId != newSelectedId) { // only do something if selected item really changed
		var newSelectedItem = sap.ui.getCore().byId(newSelectedId);
		
		if (newSelectedItem) {

			this._sSelectedWorksetId = newSelectedId;
			this._sSelectedFacetId = null;

			var sub = newSelectedItem.getSubItems();
			if (sub.length > 0) { // app set a parent item that has children, so select automatically the first child
				newSelectedItem = sub[0];
			}

			if (newSelectedItem && (newSelectedItem.getParent() instanceof sap.ui.ux3.NavigationItem)) { // if selected item is sub-item
				var newParentItem = newSelectedItem.getParent();
				this._sSelectedWorksetId = newParentItem.getId();
				this._sSelectedFacetId = newSelectedId;

				this._oWorksetBar.setSelectedItem(newParentItem);
				this._oFacetBar.setAssociatedItems(newParentItem.getSubItems());
				this._oFacetBar.setSelectedItem(newSelectedItem);

				if (this.getDomRef()) {
					jQuery.sap.byId(this.getId() + "-facetBar").slideDown();
				}

			} else if (newSelectedItem) {
				this._oWorksetBar.setSelectedItem(newSelectedItem);
				this._oFacetBar.setAssociatedItems([]);
				this._oFacetBar.setSelectedItem(null);

				if (this.getDomRef()) {
					jQuery.sap.byId(this.getId() + "-facetBar").slideUp();
				}

			} else {
				// newSelectedItem == null  after selecting the child
			}
		} else {
			// newSelectedItem == null
			throw new Error("WorksetItem with ID " + newSelectedId + " cannot be found.");
		}
	}

	return this;
};




/* Drag&Drop personalization */

sap.ui.ux3.Shell.prototype._handleDragover = function(evt) {
	var id = evt.target.id;
	if (!this._dragOverBlinking) {
		var $bg = jQuery.sap.byId(id);
		$bg.css("opacity", "0.5");
		this._dragOverBlinking = true;
		var that = this;
		window.setTimeout(function(){
			$bg.css("opacity", "1");
			window.setTimeout(function(){
				that._dragOverBlinking = null;
			}, 300);
		}, 300);
	}
  return false;
};
sap.ui.ux3.Shell.prototype._handleDragend = function(evt) {
	return false;
};
sap.ui.ux3.Shell.prototype._handleDrop = function(evt) {
	var id = evt.target.id;
	evt.preventDefault();
	var e = evt.originalEvent;
	var file = e.dataTransfer.files[0];
	if(file) {
		// read file content
		var reader = new window.FileReader();
		reader.onload = jQuery.proxy(function(event) {
			var dataUrl = event.target.result;
			if (id == this.getId() + "-bgImg") {
				this._getPersonalization()._handleBackgroundImageChange(dataUrl, true);
			} else if (id == this.getId() + "-hdr") {
				this._getPersonalization()._handleHeaderImageChange(dataUrl, true);
			} else if (id == this.getId() + "-logoImg") {
				this._getPersonalization()._handleLogoImageChange(dataUrl, true);
			}
			reader = null;
		}, this);
		reader.readAsDataURL(file);
	}
};



sap.ui.ux3.Shell.prototype._getPersonalization = function() {
	if (!this.oPersonalization) {
		jQuery.sap.require("sap.ui.ux3.ShellPersonalization");
		this.oPersonalization = new sap.ui.ux3.ShellPersonalization(this);
	}
	return this.oPersonalization;
};

sap.ui.ux3.Shell.prototype.openPersonalizationDialog = function() {
	this._getPersonalization().openDialog();
};

sap.ui.ux3.Shell.prototype.initializePersonalization = function(oSettings) {
	this._getPersonalization().initializeSettings(oSettings);
};