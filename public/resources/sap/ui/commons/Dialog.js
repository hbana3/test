/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Dialog.
jQuery.sap.declare("sap.ui.commons.Dialog");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Dialog.
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
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>scrollLeft : int</li>
 * <li>scrollTop : int</li>
 * <li>title : string</li>
 * <li>applyContentPadding : boolean</li>
 * <li>showCloseButton : boolean</li>
 * <li>resizable : boolean</li>
 * <li>minWidth : sap.ui.core.CSSSize</li>
 * <li>minHeight : sap.ui.core.CSSSize</li>
 * <li>maxWidth : sap.ui.core.CSSSize</li>
 * <li>maxHeight : sap.ui.core.CSSSize</li>
 * <li>contentBorderDesign : sap.ui.commons.enums.BorderDesign</li>
 * <li>modal : boolean</li>
 * <li>accessibleRole : sap.ui.core.AccessibleRole</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>buttons : sap.ui.core.Control</li>
 * <li>content : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>defaultButton : sap.ui.commons.Button</li>
 * <li>initialFocus : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>closed : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * An interactive window appearing on request displaying information to the user. The API supports features such as popups with fixed sizes, popups with unlimited width, scrolling bars for large windows, and control nesting (for example, a drop-down list can be included in the window).
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Dialog = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Dialog.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.Dialog. 
 * Resulting metadata can be obtained via sap.ui.commons.Dialog.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Dialog", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getWidth", "setWidth", "getHeight", "setHeight", "getScrollLeft", "setScrollLeft", "getScrollTop", "setScrollTop", "getTitle", "setTitle", "getApplyContentPadding", "setApplyContentPadding", "getShowCloseButton", "setShowCloseButton", "getResizable", "setResizable", "getMinWidth", "setMinWidth", "getMinHeight", "setMinHeight", "getMaxWidth", "setMaxWidth", "getMaxHeight", "setMaxHeight", "getContentBorderDesign", "setContentBorderDesign", "getModal", "setModal", "getAccessibleRole", "setAccessibleRole", 
    // aggregations
    "getButtons", "insertButton", "addButton", "removeButton", "removeAllButtons", "indexOfButton", "destroyButtons", "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", 
    // associations
    "getDefaultButton", "setDefaultButton", "getInitialFocus", "setInitialFocus", 
    // events
    "attachClosed", "detachClosed", 
    // methods
    "open", "close", "isOpen", "getOpenState"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "scrollLeft" : {name : "scrollLeft", type : "int", group : "Behavior", defaultValue : 0},
    "scrollTop" : {name : "scrollTop", type : "int", group : "Behavior", defaultValue : 0},
    "title" : {name : "title", type : "string", group : "Misc", defaultValue : ''},
    "applyContentPadding" : {name : "applyContentPadding", type : "boolean", group : "Appearance", defaultValue : true},
    "showCloseButton" : {name : "showCloseButton", type : "boolean", group : "Behavior", defaultValue : true},
    "resizable" : {name : "resizable", type : "boolean", group : "Behavior", defaultValue : true},
    "minWidth" : {name : "minWidth", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "minHeight" : {name : "minHeight", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "maxWidth" : {name : "maxWidth", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "maxHeight" : {name : "maxHeight", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "contentBorderDesign" : {name : "contentBorderDesign", type : "sap.ui.commons.enums.BorderDesign", group : "Appearance", defaultValue : sap.ui.commons.enums.BorderDesign.None},
    "modal" : {name : "modal", type : "boolean", group : "Misc", defaultValue : false},
    "accessibleRole" : {name : "accessibleRole", type : "sap.ui.core.AccessibleRole", group : "Accessibility", defaultValue : sap.ui.core.AccessibleRole.Dialog}
  },
  defaultAggregation : "content",
  aggregations : {
    "buttons" : {name : "buttons", type : "sap.ui.core.Control", multiple : true, singularName : "button"}, 
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}
  },
  associations : {
    "defaultButton" : {name : "defaultButton", type : "sap.ui.commons.Button", multiple : false}, 
    "initialFocus" : {name : "initialFocus", type : "sap.ui.core.Control", multiple : false}
  },
  events : {
    "closed" : "closed"
  }

});	

sap.ui.commons.Dialog.M_EVENTS = {'closed':'closed'};


/**
 * Getter for property <code>width</code>.
 * 
 * Outer width of dialog window. When not set and not constrained by one of the width parameters (minWidth/maxWidth), the window size is automatically adapted to the content.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * 
 * Outer height of dialog window. When not set and not constrained by one of the height parameters (minHeight/maxHeight), the window size is automatically adapted to the content.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>scrollLeft</code>.
 * 
 * Scroll position from left to right. "0" means leftmost position.
 * 
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>scrollLeft</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getScrollLeft = function() {
	return this.getProperty("scrollLeft");
};

/**
 * Setter for property <code>scrollLeft</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iScrollLeft  new value for property <code>scrollLeft</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setScrollLeft = function(iScrollLeft) {
	this.setProperty("scrollLeft", iScrollLeft);
	return this;
};


/**
 * Getter for property <code>scrollTop</code>.
 * 
 * Scroll position from top to buttom. "0" means topmost position.
 * 
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>scrollTop</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getScrollTop = function() {
	return this.getProperty("scrollTop");
};

/**
 * Setter for property <code>scrollTop</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iScrollTop  new value for property <code>scrollTop</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setScrollTop = function(iScrollTop) {
	this.setProperty("scrollTop", iScrollTop);
	return this;
};


/**
 * Getter for property <code>title</code>.
 * 
 * Dialog title displayed in the header.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};


/**
 * Getter for property <code>applyContentPadding</code>.
 * 
 * Padding is theme-dependent. When set to "false", the content extends to the dialog borders.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getApplyContentPadding = function() {
	return this.getProperty("applyContentPadding");
};

/**
 * Setter for property <code>applyContentPadding</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bApplyContentPadding  new value for property <code>applyContentPadding</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setApplyContentPadding = function(bApplyContentPadding) {
	this.setProperty("applyContentPadding", bApplyContentPadding);
	return this;
};


/**
 * Getter for property <code>showCloseButton</code>.
 * 
 * Displays a close button in the title bar.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showCloseButton</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getShowCloseButton = function() {
	return this.getProperty("showCloseButton");
};

/**
 * Setter for property <code>showCloseButton</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowCloseButton  new value for property <code>showCloseButton</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setShowCloseButton = function(bShowCloseButton) {
	this.setProperty("showCloseButton", bShowCloseButton);
	return this;
};


/**
 * Getter for property <code>resizable</code>.
 * 
 * Specifies whether the dialog window can be resized by the user. The dialog frame contains the visual symbol.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>resizable</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getResizable = function() {
	return this.getProperty("resizable");
};

/**
 * Setter for property <code>resizable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bResizable  new value for property <code>resizable</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setResizable = function(bResizable) {
	this.setProperty("resizable", bResizable);
	return this;
};


/**
 * Getter for property <code>minWidth</code>.
 * 
 * Minimum outer width of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getMinWidth = function() {
	return this.getProperty("minWidth");
};

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setMinWidth = function(sMinWidth) {
	this.setProperty("minWidth", sMinWidth);
	return this;
};


/**
 * Getter for property <code>minHeight</code>.
 * 
 * Minimum outer height of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minHeight</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getMinHeight = function() {
	return this.getProperty("minHeight");
};

/**
 * Setter for property <code>minHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinHeight  new value for property <code>minHeight</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setMinHeight = function(sMinHeight) {
	this.setProperty("minHeight", sMinHeight);
	return this;
};


/**
 * Getter for property <code>maxWidth</code>.
 * 
 * Maximum outer width of the dialog window. If set, neither the user nor some layout settings can make the window larger.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getMaxWidth = function() {
	return this.getProperty("maxWidth");
};

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setMaxWidth = function(sMaxWidth) {
	this.setProperty("maxWidth", sMaxWidth);
	return this;
};


/**
 * Getter for property <code>maxHeight</code>.
 * 
 * Maximum outer height of the dialog window. If set, neither the user nor some layout settings can make the window larger.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxHeight</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getMaxHeight = function() {
	return this.getProperty("maxHeight");
};

/**
 * Setter for property <code>maxHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxHeight  new value for property <code>maxHeight</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setMaxHeight = function(sMaxHeight) {
	this.setProperty("maxHeight", sMaxHeight);
	return this;
};


/**
 * Getter for property <code>contentBorderDesign</code>.
 * 
 * Border design is theme-dependent.
 * 
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.commons.enums.BorderDesign} the value of property <code>contentBorderDesign</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getContentBorderDesign = function() {
	return this.getProperty("contentBorderDesign");
};

/**
 * Setter for property <code>contentBorderDesign</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.commons.enums.BorderDesign} oContentBorderDesign  new value for property <code>contentBorderDesign</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setContentBorderDesign = function(oContentBorderDesign) {
	this.setProperty("contentBorderDesign", oContentBorderDesign);
	return this;
};


/**
 * Getter for property <code>modal</code>.
 * 
 * Specify whether the dialog should be modal, or not. In case of <code>true</code> the focus is kept inside the dialog.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>modal</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getModal = function() {
	return this.getProperty("modal");
};

/**
 * Setter for property <code>modal</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bModal  new value for property <code>modal</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setModal = function(bModal) {
	this.setProperty("modal", bModal);
	return this;
};


/**
 * Getter for property <code>accessibleRole</code>.
 * The ARIA role for the control. E.g. for alert-style Dialogs this can be set to "AlertDialog".
 *
 * Default value is <code>Dialog</code>
 *
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * 
 */
sap.ui.commons.Dialog.prototype.getAccessibleRole = function() {
	return this.getProperty("accessibleRole");
};

/**
 * Setter for property <code>accessibleRole</code>.
 *
 * Default value is <code>Dialog</code> 
 *
 * @param {sap.ui.core.AccessibleRole} oAccessibleRole  new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setAccessibleRole = function(oAccessibleRole) {
	this.setProperty("accessibleRole", oAccessibleRole);
	return this;
};

	
/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * Aggregating the buttons to display at the bottom of the dialog, for example OK and Cancel. Association defaultButton can be used for one of the defined buttons.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.commons.Dialog.prototype.getButtons = function() {
	return this.getAggregation("buttons", []);
};


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.insertButton = function(oButton, iIndex) {
	this.insertAggregation("buttons", oButton, iIndex);
	return this;
};

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.Dialog.prototype.addButton = function(oButton) {
	this.addAggregation("buttons", oButton);
	return this;
};

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.core.Control} vButton the button to remove or its index or id
 * @return {sap.ui.core.Control} the removed button or null
 * @public
 */
sap.ui.commons.Dialog.prototype.removeButton = function(vButton) {
	return this.removeAggregation("buttons", vButton);
};

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.Dialog.prototype.removeAllButtons = function() {
	return this.removeAllAggregation("buttons");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.Dialog.prototype.indexOfButton = function(oButton) {
	return this.indexOfAggregation("buttons", oButton);
};
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.destroyButtons = function() {
	this.destroyAggregation("buttons");
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregating the content of the dialog (one or more controls).
 * 
 * Caveat: when content is added with width given as a percentage, the Dialog itself should have a width set.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.commons.Dialog.prototype.getContent = function() {
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
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.Dialog.prototype.addContent = function(oContent) {
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
sap.ui.commons.Dialog.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.Dialog.prototype.removeAllContent = function() {
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
sap.ui.commons.Dialog.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};


/**
 * 
 * Defines one of the buttons that have been provided via button aggregation to be the default button. This default button is initially selected, if no control is set via the initialFocus association explicitly. The default button is activated when Enter is pressed in the context of the dialog and when the currently selected element does not handle the Enter event itself.
 *
 * @return {string} Id of the element which is the current target of the <code>defaultButton</code> association, or null
 * @public
 */
sap.ui.commons.Dialog.prototype.getDefaultButton = function() {
	return this.getAssociation("defaultButton", null);
};

/**
 * 
 * Defines one of the buttons that have been provided via button aggregation to be the default button. This default button is initially selected, if no control is set via the initialFocus association explicitly. The default button is activated when Enter is pressed in the context of the dialog and when the currently selected element does not handle the Enter event itself.
 *
 * @param {string | sap.ui.commons.Button} vDefaultButton 
 *    Id of an element which becomes the new target of this <code>defaultButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setDefaultButton = function(vDefaultButton) {
	this.setAssociation("defaultButton", vDefaultButton);
	return this;
};


	
/**
 * 
 * Defines the control that shall get the focus when the dialog is opened.
 *
 * @return {string} Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * @public
 */
sap.ui.commons.Dialog.prototype.getInitialFocus = function() {
	return this.getAssociation("initialFocus", null);
};

/**
 * 
 * Defines the control that shall get the focus when the dialog is opened.
 *
 * @param {string | sap.ui.core.Control} vInitialFocus 
 *    Id of an element which becomes the new target of this <code>initialFocus</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.setInitialFocus = function(vInitialFocus) {
	this.setAssociation("initialFocus", vInitialFocus);
	return this;
};


	
/**
 * 
 * Event is fired when the user closes the dialog window. Event parameters provide information about last position and last size.
 *  
 *
 * @name sap.ui.commons.Dialog#closed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.width the width of the dialog when closed
 * @param {int} oControlEvent.getParameters.height the height of the dialog when closed
 * @param {int} oControlEvent.getParameters.top the top position of the dialog when closed
 * @param {int} oControlEvent.getParameters.left the left position of the dialog when closed
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.commons.Dialog</code>.<br/>
 * 
 * Event is fired when the user closes the dialog window. Event parameters provide information about last position and last size.
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
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.attachClosed = function(oData, fnFunction, oListener) {
	this.attachEvent("closed", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.commons.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Dialog.prototype.detachClosed = function(fnFunction, oListener) {
	this.detachEvent("closed", fnFunction, oListener);
	return this;	
};

/**
 * Fire event closed to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'width' of type <code>int</code> the width of the dialog when closed</li>
 * <li>'height' of type <code>int</code> the height of the dialog when closed</li>
 * <li>'top' of type <code>int</code> the top position of the dialog when closed</li>
 * <li>'left' of type <code>int</code> the left position of the dialog when closed</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.Dialog.prototype.fireClosed = function(mArguments) {
	this.fireEvent("closed", mArguments);
	return this;
};


/**
 * Opens the dialog control instance.
 *
 * @name sap.ui.commons.Dialog.prototype.open
 * @function

 * @type void
 * @public
 */


/**
 * Closes the dialog control instance.
 *
 * @name sap.ui.commons.Dialog.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * Returns whether the Dialog is open (this includes opening and closing animations). For more detailed information about the current state check Dialog.getOpenState().
 *
 * @name sap.ui.commons.Dialog.prototype.isOpen
 * @function

 * @type boolean
 * @public
 */


/**
 * Returns whether the Dialog is currently open, closed, or transitioning between these states.
 *
 * @name sap.ui.commons.Dialog.prototype.getOpenState
 * @function

 * @type sap.ui.core.OpenState
 * @public
 */


// Start of sap/ui/commons/Dialog.js
jQuery.sap.require("sap.ui.core.Popup");

/**
 * Initialization hook for the dialog.
 * It creates the instance of the Popup helper service and does some basic configuration for it.
 * 
 * @private
 */
sap.ui.commons.Dialog.prototype.init = function() {
   // do something for initialization...
   this.oPopup = new sap.ui.core.Popup(this, true, true);
   var eDock = sap.ui.core.Popup.Dock;
   this.oPopup.setPosition(eDock.CenterCenter, eDock.CenterCenter, window);

   this._minWidth = 64; // the technical minWidth, not the one set via API; will be calculated after rendering
   this._minHeight = 48; // the technical minHeight, not the one set via API; will be calculated after rendering
   // TODO: re-calculate after theme switch?!!

   this.allowTextSelection(false);
};

sap.ui.commons.Dialog.prototype.setInitialFocus = function(sId) {
	if (sId != null && typeof(sId) != "string") {
		sId = sId.getId();
	}
	this.oPopup.setInitialFocusId(sId);
	this.setAssociation("initialFocus", sId, true);
};

/**
 * Required adaptations after rendering.
 * @private
 */
sap.ui.commons.Dialog.prototype.onAfterRendering = function() {
	var $content = jQuery.sap.byId(this.getId() + "-cont");

	// if content has 100% width, but Dialog has no width, set content width to auto
	if (!sap.ui.commons.Dialog._isSizeSet(this.getWidth()) && !sap.ui.commons.Dialog._isSizeSet(this.getMaxWidth())) {
		$content.children().each(function(index, element) {
			if (jQuery.trim(this.style.width) == "100%") {
				this.style.width = "auto";
			}
		});
	}
	
	// IE9+10 fix where subpixel font rendering may lead to rounding errors in RTL mode when the content has a width of "xyz.5px"
	if (jQuery.browser.msie && (jQuery.browser.version == 9 || jQuery.browser.version == 10) && ($content.length > 0)) {
		var elm = $content[0];
		if (sap.ui.getCore().getConfiguration().getRTL() && !sap.ui.commons.Dialog._isSizeSet(this.getWidth())) {
			if (elm.ownerDocument && elm.ownerDocument.defaultView && elm.ownerDocument.defaultView.getComputedStyle) {
				var width = elm.ownerDocument.defaultView.getComputedStyle(elm).getPropertyValue("width");
				if (width) {
					var fWidth = parseFloat(width, 10);
					if (fWidth % 1 == 0.5) {
						$content[0].style.width = (fWidth + 0.01) + "px"; // if aaaalll these conditions are fulfilled, the Dialog must be a LITTLE bit wider to avoid rounding errors
					}
				}
			}
		}
	}

	// Calculate min size
	var _minSize = this.getMinSize();
	this._minWidth = _minSize.width;
	this._minHeight = _minSize.height;
};

/**
 * Handle the click event happening on the dialog instance.
 *
 * TODO also raise some event when click on 'x'
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onclick = function(oEvent) {
	switch(oEvent.target.id) {
	case this.getId() + "-close":
		this.close();
		// What do we do here?
//		this.fireClose({id:this.getId(),result:sap.ui.commons.DialogResult.Close});
		break;
	};
};

/**
 * Opens this instance of dialog
 * @public
 */
sap.ui.commons.Dialog.prototype.open = function() {

	if ( !this.oPopup ) {
		// TODO discuss behavior of destroyed controls in general
		jQuery.sap.log.fatal("This dialog instance has been destroyed already");
		return;
	}
	if ( this._bOpen ) {
		return;
	}

	// Save current focused element to restore the focus after closing the dialog
	var focusedControlId = sap.ui.getCore().getCurrentFocusedControlId();
	this.oPreviousFocus = null;
	if(focusedControlId){
		var oFocusedControl = sap.ui.getCore().getControl(focusedControlId);
		this.oPreviousFocus = {'sFocusId':focusedControlId,'oFocusInfo': oFocusedControl ? oFocusedControl.getFocusInfo() : null};
	}

	this.oPopup.attachEvent("opened", this.handleOpened, this);
	this.oPopup.setModal(this.getModal());
	this.oPopup.open(400);
	this._bOpen = true;
};

sap.ui.commons.Dialog.prototype.handleOpened = function() {
	this.oPopup.detachEvent("opened", this.handleOpened, this);

	var sInitFocus = this.getInitialFocus(),
		oFocusCtrl;
	if(sInitFocus && (oFocusCtrl = sap.ui.getCore().getControl(sInitFocus))){ // an additional previous check was  oFocusCtrl.getParent() === this  which prevented nested children from being focused
		oFocusCtrl.focus();

	} else {
		sInitFocus = this.getDefaultButton();
		if(sInitFocus && (oFocusCtrl = sap.ui.getCore().getControl(sInitFocus)) && oFocusCtrl.getParent() === this){
			oFocusCtrl.focus();

		} else if (this.getButtons().length > 0) {
			this.getButtons()[0].focus();// TODO is this wanted?

		} else if(this.getContent().length > 0){
			// let's at least focus something in the Dialog
			this.getContent()[0].focus();
		}
	}
};

/**
 * Closes this Dialog
 * @public
 */
sap.ui.commons.Dialog.prototype.close = function() {

	if ( !this._bOpen ) {
		return;
	}

	var oRect = this.$().rect();

	this._bOpen = false;
	this.oPopup.close(400);

	// do this delayed or it possible won't work because of popup closing animations
	jQuery.sap.delayedCall(400,this,"restorePreviousFocus");

	jQuery.each(oRect, function(key, val){
		oRect[key] = parseInt(val, 10);
	});
	// It could become required to do this decoupled via jQuery.sap.delayedCall(...
	this.fireClosed(oRect);
};

/** *
 * restore the focus when the dialog was closed to the control which opened the dialog.
 * This is independent of the dialogs modal state. The popup also restores focus when using modal popups/dialogs.
 * @private
 */
sap.ui.commons.Dialog.prototype.restorePreviousFocus = function() {
	if (this.oPreviousFocus) {
		var oFocusedControl = sap.ui.getCore().getControl(
				this.oPreviousFocus.sFocusId);
		if (oFocusedControl != null) {
			oFocusedControl.applyFocusInfo(this.oPreviousFocus.oFocusInfo);
		}
		this.oPreviousFocus = null;
	}
};


sap.ui.commons.Dialog.prototype.setTitle = function (sText) {
	this.setProperty("title", sText, true); // last parameter avoids invalidation
	jQuery.sap.byId(this.getId() + "-lbl").html(sText);
	return this;
};

/**
 * Destroys this instance of dialog, called by Element#destroy()
 * @private
 */
sap.ui.commons.Dialog.prototype.exit = function() {
	this.close();
	this.oPopup.destroy();
	this.oPopup = null;
};

/**
 * Checks whether the given sCssSize is an explicit value, or not (e.g. auto, inherit).
 *
 * @param {string} sCssSize The CSS string to check for being explicit value.
 * @return {boolean} whether The given sCssSize is an explicit value, or not (e.g. auto, inherit).
 * @private
 */
sap.ui.commons.Dialog._isSizeSet = function(sCssSize) {
	return (sCssSize && !(sCssSize == "auto") && !(sCssSize == "inherit"));
};

/**
 * Handles the sapescape event, triggers closing of the window.
 * TODO also raise some event like with the click on 'x'
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onsapescape = function(oEvent) {
	this.close();

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Handles the sapenter event, triggers the default button of the dialog.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onsapenter = function(oEvent) {
	// See open-method
	var oFocusCtrl,
	    sInitFocus = this.getDefaultButton();
	    
	// trigger the default button if it exists and is inside the Dialog
	if(sInitFocus && (oFocusCtrl = sap.ui.getCore().byId(sInitFocus)) && jQuery.contains(this.getDomRef(), oFocusCtrl.getDomRef())) {
		// Okay, we have the control
		if (oFocusCtrl instanceof sap.ui.commons.Button) {
			oFocusCtrl.onclick(oEvent);
		} // FIXME is this really the way it should be?
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Event handler for the focusin event.
 * If it occurs on the focus handler elements at the beginning of the dialog, the focus is set to the end, and vice versa.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onfocusin = function(oEvent){
	this.sLastRelevantNavigation = null;

	var oSourceDomRef = oEvent.target;

	if (oSourceDomRef.id === this.getId() + "-fhfe") {
		// the FocusHandlingFirstElement was focused and thus the focus should move to the last element.
		var aButtons = this.getButtons();
		if (aButtons.length > 0) {
			aButtons[aButtons.length-1].focus();
		} else {
			jQuery.sap.focus(jQuery.sap.byId(this.getId() + "-cont").lastFocusableDomRef());
		}
	} else if (oSourceDomRef.id === this.getId() + "-fhee") {
		// the FocusHandlingEndElement was focused and thus the focus should move to the first element.
		// if the title should be 'tab-able' change the id of the element to focus here!
		var oFirst = jQuery.sap.byId(this.getId() + "-cont").firstFocusableDomRef();
		if(oFirst) {
			jQuery.sap.focus(oFirst);
			return;
		}//	else
		var aButtons = this.getButtons();
		if (aButtons.length > 0) {
			aButtons[0].focus();
		}
	} else if(!oEvent.srcControl || !jQuery.sap.containsOrEquals(this.getDomRef(), oEvent.srcControl.getDomRef())){
		this.handleOpened();
	}
};

/**
 * Restores the focus in case it got lost beforehand e.g. by leaving the dialog or the whole window.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.restoreFocus = function() {
	if (this.oRestoreFocusInfo && this.oPopup.bOpen) { // do not restore the focus if Dialog is no longer open  TODO: where is the focus going, then? The Toolbar testpage at least works fine.
		var oCtrl = sap.ui.getCore().getControl(this.oRestoreFocusInfo.sFocusId);
		if (oCtrl) {
			oCtrl.applyFocusInfo(this.oRestoreFocusInfo.oFocusInfo);
		}
	}
};

/**
 * Handles or cancels the selectstart event when occuring in parts of the dialog.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onselectstart = function(oEvent) {
	if(jQuery(oEvent.target).control(0) === this) {
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Get minimal reasonable size of the dialog given its inner elements. Call is recommended after rendering.
 *
 * @return {Object} An object with inner structure {width:{int}, height:{int}}
 * @private
 */
sap.ui.commons.Dialog.prototype.getMinSize = function () {

	var oDialog = jQuery.sap.domById(this.sId), oTitle = jQuery.sap.domById(this.sId + "-hdr"), oFooter = jQuery.sap.domById(this.sId + "-footer"),
		heightTitle=0, widthFooter=0, heightFooter=0;

	var oFooterBtns = jQuery(oFooter).children("DIV").get(0);
	widthFooter = oFooterBtns.offsetWidth;

	var addValue = 0;
	// add border and padding of footer...not margin
	addValue += jQuery(oFooter).outerWidth(false) - jQuery(oFooter).width();
	// add border and padding of footer...not margin
	addValue += jQuery(oDialog).outerWidth(false) - jQuery(oDialog).width();

	// if there is a too small specific border value add +20 for certainty to avoid wrapping
	if (addValue <= 20) {
	 addValue = 20;
	}

	widthFooter += addValue;

	if (isNaN(widthFooter) || widthFooter < 100) {
		widthFooter = 100;
	}

	heightTitle = oTitle.offsetHeight;
	heightFooter = oFooter.offsetHeight;
	return {
		width: widthFooter,
		height: heightTitle + heightFooter + 36 /* min. height content */
	};
};


// Implementation of API method isOpen
sap.ui.commons.Dialog.prototype.isOpen = function(){
	return this.oPopup.isOpen();
};

// Implementation of API method isOpen
sap.ui.commons.Dialog.prototype.getOpenState = function(){
	return this.oPopup.getOpenState();
};

// **************************************************
// 'Legacy' Resize and Move handling including jQuery-UI parts for that would bring in 70k (uncompressed)
// **************************************************

/**
* Handles the dragstart event.
* In case of resize currently ongoing, this cancels the dragstart.
* @param {sap.ui.core.BroserEvent} oEvent The forwarded browser event
* @private
*/
sap.ui.commons.Dialog.prototype.ondragstart = function(oEvent){
	if(this.sDragMode == "resize" || this.sDragMode == "move") {
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Initializes drag and move capabilities.

 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */ // Copied from LS
sap.ui.commons.Dialog.prototype.onmousedown = function (oEvent) {

	var oSource = oEvent.target,
		sId = this.getId();
	if(jQuery.sap.containsOrEquals(jQuery.sap.domById(sId + "-hdr"), oSource)) {
		if (oSource.id != (sId + "-close")) {
			this.sDragMode = "move";
		}
	} else if(oSource.id == sId + "-grip") {
		this.sDragMode = "resize";
		this._bRtlMode = sap.ui.getCore().getConfiguration().getRTL(); // remember the RTL mode for the starting resize operation

		// Now the dialog is fixed-width and fixed-height; write them to the element and adapt its classes to switch positioning
		var oDomRef = this.getDomRef();
		var sWidth = oDomRef.offsetWidth + "px";
		oDomRef.style.width = sWidth;
		var sHeight = oDomRef.offsetHeight + "px";
		oDomRef.style.height = sHeight;
		jQuery(oDomRef).removeClass("sapUiDlgFlexHeight sapUiDlgFlexWidth");
		// ...also remember the dimensions for the future (e.g. for after rerendering) - but do not cause rerendering now
		this.setProperty("width", sWidth, true);
		this.setProperty("height", sHeight, true);
	}

	if (this.sDragMode == null) {
		return;
	}

	// save current focused control for restoring later in restore focus
	var oActElement = document.activeElement;
	if (oActElement && oActElement.id){
		var oCtrl = jQuery.sap.byId(oActElement.id).control(0);
		if(oCtrl) {
			this.oRestoreFocusInfo = {sFocusId: oCtrl.getId(), oFocusInfo: oCtrl.getFocusInfo()};
		}
	}

	// Calculate event X,Y coordinates
	this.startDragX = oEvent.screenX;
	this.startDragY = oEvent.screenY;

	this.originalRectangle = this.$().rect();

	jQuery(window.document).bind("selectstart", jQuery.proxy(this.ondragstart, this));
	jQuery(window.document).bind("mousemove", jQuery.proxy(this.handleMove, this));
	jQuery(window.document).bind("mouseup", jQuery.proxy(this.handleMouseUp, this));

	if(window.parent && (window.parent != window)) {
		jQuery(window.parent.document).bind("selectstart", jQuery.proxy(this.ondragstart, this), true);
		jQuery(window.parent.document).bind("mousemove", jQuery.proxy(this.handleMove, this), true);
		jQuery(window.parent.document).bind("mouseup", jQuery.proxy(this.handleMouseUp, this), true);
//		//fix for 438834 2010
//		//app runs in a frame and without blocklayer
//		if (jQuery.browser.firefox){
//			var oOpenerLS = this.getPopupManager().oGetOpenerLSByPopupId(this.sId);
//			//don't attach twice to the same window
//			if (oOpenerLS.oGetWindow() != parent)
//				UCF_DomUtil.attachEvent(oOpenerLS.oGetWindow().document, "mousemove", this.handleMoveCall);
//		}
	}

};

/**
 * Handles the move event taking the current dragMode into account.
 * @param {DOMEvent} event The event raised by the browser.
 * @private
 */
sap.ui.commons.Dialog.prototype.handleMove = function (event) {

	if (!this.sDragMode) {
		return;
	}

	event = event || window.event;

	if (this.sDragMode == "resize") {

		var deltaX = event.screenX - this.startDragX;
		var deltaY = event.screenY - this.startDragY;

		var w = (this._bRtlMode ? this.originalRectangle.width - deltaX : this.originalRectangle.width + deltaX);
		var h = this.originalRectangle.height + deltaY;

		w = Math.max(w, this._minWidth);
		h = Math.max(h, this._minHeight);

		// The dimension constraints set via API could be in any CSS unit, so just set the size and do checks
		// (min/max override what was set here)
		var oDomRef = this.getDomRef();
		oDomRef.style.width = w + "px";
		oDomRef.style.height = h + "px";

		// Now use the actual size of the dialog, which might have been constrained by min-*/max-* for resizing the popup and the shadow
		w = this.getDomRef().offsetWidth;
		h = this.getDomRef().offsetHeight;
		
		// In IE8, style.width/height will still have the old values - possibly outside this Dialog's size constraints.
		// The Dialog box itself will stay correctly constrained, but its child elements will be positioned as if the style.width/height
		// values were the actual size, so for this browser - and to be cleaner - explicitly set these sizes. This is an IE8 bug.
		oDomRef.style.width = w + "px";
		oDomRef.style.height = h + "px";

		// Also remember the dimensions for the future (e.g. for after rerendering) - but do not cause rerendering now
		this.setProperty("width", w+"px", true);
		this.setProperty("height", h+"px", true);

	} else if (this.sDragMode == "move") {
		var iLeft = this.originalRectangle.left + event.screenX - this.startDragX;
		var iTop = this.originalRectangle.top + event.screenY - this.startDragY;
		this.oPopup.setPosition(sap.ui.core.Popup.Dock.LeftTop, {left:iLeft, top:iTop});
	}

	event.cancelBubble = true;
	return false;
};

/**
 * Handle onmouseup event.
 * This does the cleanup after drag and move handling.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.handleMouseUp = function (oEvent) {

	if (this.sDragMode == null) {
		return;
	}

	jQuery(window.document).unbind("selectstart", this.ondragstart);
	jQuery(window.document).unbind("mousemove", this.handleMove);
	jQuery(window.document).unbind("mouseup", this.handleMouseUp);

	if (window.parent) {
		jQuery(window.parent.document).unbind("selectstart", this.ondragstart);
		jQuery(window.parent.document).unbind("mousemove", this.handleMove);
		jQuery(window.parent.document).unbind("mouseup", this.handleMouseUp);
	}

	// Set back focus to previously focused element
	this.restoreFocus();
	this.sDragMode = null;

};