/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Panel.
jQuery.sap.declare("sap.ui.commons.Panel");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Panel.
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
 * <li>enabled : boolean</li>
 * <li>visible : boolean</li>
 * <li>scrollLeft : int</li>
 * <li>scrollTop : int</li>
 * <li>applyContentPadding : boolean</li>
 * <li>collapsed : boolean</li>
 * <li>areaDesign : sap.ui.commons.enums.AreaDesign</li>
 * <li>borderDesign : sap.ui.commons.enums.BorderDesign</li>
 * <li>showCollapseIcon : boolean</li>
 * <li>text : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>content : sap.ui.core.Control</li>
 * <li>title : sap.ui.commons.Title</li>
 * <li>buttons : sap.ui.commons.Button</li></ul>
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
 * A scrollable container for text and/or controls. The panel does not layout the contained controls.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Panel = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Panel.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.Panel. 
 * Resulting metadata can be obtained via sap.ui.commons.Panel.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Panel", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getWidth", "setWidth", "getHeight", "setHeight", "getEnabled", "setEnabled", "getVisible", "setVisible", "getScrollLeft", "setScrollLeft", "getScrollTop", "setScrollTop", "getApplyContentPadding", "setApplyContentPadding", "getCollapsed", "setCollapsed", "getAreaDesign", "setAreaDesign", "getBorderDesign", "setBorderDesign", "getShowCollapseIcon", "setShowCollapseIcon", "getText", "setText", 
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", "getTitle", "setTitle", "destroyTitle", "getButtons", "insertButton", "addButton", "removeButton", "removeAllButtons", "indexOfButton", "destroyButtons", 
    // associations
    
    // events
    
    // methods
    "setDimensions"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true},
    "scrollLeft" : {name : "scrollLeft", type : "int", group : "Behavior", defaultValue : 0},
    "scrollTop" : {name : "scrollTop", type : "int", group : "Behavior", defaultValue : 0},
    "applyContentPadding" : {name : "applyContentPadding", type : "boolean", group : "Appearance", defaultValue : true},
    "collapsed" : {name : "collapsed", type : "boolean", group : "Behavior", defaultValue : false},
    "areaDesign" : {name : "areaDesign", type : "sap.ui.commons.enums.AreaDesign", group : "Appearance", defaultValue : sap.ui.commons.enums.AreaDesign.Fill},
    "borderDesign" : {name : "borderDesign", type : "sap.ui.commons.enums.BorderDesign", group : "Appearance", defaultValue : sap.ui.commons.enums.BorderDesign.Box},
    "showCollapseIcon" : {name : "showCollapseIcon", type : "boolean", group : "Behavior", defaultValue : true},
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : null}
  },
  defaultAggregation : "content",
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    "title" : {name : "title", type : "sap.ui.commons.Title", multiple : false}, 
    "buttons" : {name : "buttons", type : "sap.ui.commons.Button", multiple : true, singularName : "button"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>width</code>.
 * The width of the Panel.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * When not set, the panel height is automatically adjusted to the content.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * The enabled state of the Panel.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible panels are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>scrollLeft</code>.
 * Specifies the scroll position from left to right. Value "0" means leftmost position.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>scrollLeft</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getScrollLeft = function() {
	return this.getProperty("scrollLeft");
};

/**
 * Setter for property <code>scrollLeft</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iScrollLeft  new value for property <code>scrollLeft</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setScrollLeft = function(iScrollLeft) {
	this.setProperty("scrollLeft", iScrollLeft);
	return this;
};


/**
 * Getter for property <code>scrollTop</code>.
 * Specifies the scroll position from top to bottom. Value "0" means topmost position.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>scrollTop</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getScrollTop = function() {
	return this.getProperty("scrollTop");
};

/**
 * Setter for property <code>scrollTop</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iScrollTop  new value for property <code>scrollTop</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setScrollTop = function(iScrollTop) {
	this.setProperty("scrollTop", iScrollTop);
	return this;
};


/**
 * Getter for property <code>applyContentPadding</code>.
 * Padding is theme-dependent.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getApplyContentPadding = function() {
	return this.getProperty("applyContentPadding");
};

/**
 * Setter for property <code>applyContentPadding</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bApplyContentPadding  new value for property <code>applyContentPadding</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setApplyContentPadding = function(bApplyContentPadding) {
	this.setProperty("applyContentPadding", bApplyContentPadding);
	return this;
};


/**
 * Getter for property <code>collapsed</code>.
 * A collapsed panel consumes minimal space. When initially collapsed, its contents are not rendered.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>collapsed</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getCollapsed = function() {
	return this.getProperty("collapsed");
};

/**
 * Setter for property <code>collapsed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCollapsed  new value for property <code>collapsed</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setCollapsed = function(bCollapsed) {
	this.setProperty("collapsed", bCollapsed);
	return this;
};


/**
 * Getter for property <code>areaDesign</code>.
 * Defines the background color. Depending on the current theme, this setting may or may not have any effect.
 *
 * Default value is <code>Fill</code>
 *
 * @return {sap.ui.commons.enums.AreaDesign} the value of property <code>areaDesign</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getAreaDesign = function() {
	return this.getProperty("areaDesign");
};

/**
 * Setter for property <code>areaDesign</code>.
 *
 * Default value is <code>Fill</code> 
 *
 * @param {sap.ui.commons.enums.AreaDesign} oAreaDesign  new value for property <code>areaDesign</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setAreaDesign = function(oAreaDesign) {
	this.setProperty("areaDesign", oAreaDesign);
	return this;
};


/**
 * Getter for property <code>borderDesign</code>.
 * The panel can have a box as frame. Depending on the current theme, this setting may or may not have any effect.
 *
 * Default value is <code>Box</code>
 *
 * @return {sap.ui.commons.enums.BorderDesign} the value of property <code>borderDesign</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getBorderDesign = function() {
	return this.getProperty("borderDesign");
};

/**
 * Setter for property <code>borderDesign</code>.
 *
 * Default value is <code>Box</code> 
 *
 * @param {sap.ui.commons.enums.BorderDesign} oBorderDesign  new value for property <code>borderDesign</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setBorderDesign = function(oBorderDesign) {
	this.setProperty("borderDesign", oBorderDesign);
	return this;
};


/**
 * Getter for property <code>showCollapseIcon</code>.
 * Determines whether the Panel should have an icon for collapsing/expanding.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showCollapseIcon</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getShowCollapseIcon = function() {
	return this.getProperty("showCollapseIcon");
};

/**
 * Setter for property <code>showCollapseIcon</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowCollapseIcon  new value for property <code>showCollapseIcon</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setShowCollapseIcon = function(bShowCollapseIcon) {
	this.setProperty("showCollapseIcon", bShowCollapseIcon);
	return this;
};


/**
 * Getter for property <code>text</code>.
 * The Panel title text - for the simple case where no icon is required (use the "title" aggregation in that case). Using this property will create and use a Title object under the hood.
 * Be aware that when using both the "text" property and the "title" aggregation modifying one will affect the other.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Panel.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregates the controls that are contained in the panel where the control layouting is browser-dependent.
 * For a stable content layout, it is recommended to use a layout control as single direct child.
 * When the panel dimensions are set, the child control may have width and height of 100%.
 * when the dimensions are not set, the child defines the panel size.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.commons.Panel.prototype.getContent = function() {
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
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.Panel.prototype.addContent = function(oContent) {
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
sap.ui.commons.Panel.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.Panel.prototype.removeAllContent = function() {
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
sap.ui.commons.Panel.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};

	
/**
 * Getter for aggregation <code>title</code>.<br/>
 * Aggregates the title element of the panel. For text titles only, you alternatively could use setText() which also creates a Title in the background.
 * Be aware that when using both the "text" property and the "title" aggregation modifying one will affect the other.
 * 
 * @return {sap.ui.commons.Title}
 * @public
 */
sap.ui.commons.Panel.prototype.getTitle = function() {
	return this.getAggregation("title", null);
};


/**
 * Setter for the aggregated <code>title</code>.
 * @param oTitle {sap.ui.commons.Title}
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setTitle = function(oTitle) {
	this.setAggregation("title", oTitle);
	return this;
};
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.destroyTitle = function() {
	this.destroyAggregation("title");
	return this;
};

	
/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * The Buttons to be displayed in the Panel header
 * 
 * @return {sap.ui.commons.Button[]}
 * @public
 */
sap.ui.commons.Panel.prototype.getButtons = function() {
	return this.getAggregation("buttons", []);
};


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.commons.Button}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.insertButton = function(oButton, iIndex) {
	this.insertAggregation("buttons", oButton, iIndex);
	return this;
};

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.commons.Button}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.Panel.prototype.addButton = function(oButton) {
	this.addAggregation("buttons", oButton);
	return this;
};

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.commons.Button} vButton the button to remove or its index or id
 * @return {sap.ui.commons.Button} the removed button or null
 * @public
 */
sap.ui.commons.Panel.prototype.removeButton = function(vButton) {
	return this.removeAggregation("buttons", vButton);
};

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Button[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.Panel.prototype.removeAllButtons = function() {
	return this.removeAllAggregation("buttons");
};

/**
 * Checks for the provided <code>sap.ui.commons.Button</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.Button}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.Panel.prototype.indexOfButton = function(oButton) {
	return this.indexOfAggregation("buttons", oButton);
};
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.destroyButtons = function() {
	this.destroyAggregation("buttons");
	return this;
};


/**
 * Sets panel dimensions width and height.
 *
 * @name sap.ui.commons.Panel.prototype.setDimensions
 * @function
 * @param {sap.ui.core.CSSSize} 
 *         sWidth
 *         
 * Panel width as CSS size.
 * 
 * @param {sap.ui.core.CSSSize} 
 *         sHeight
 *         
 * Panel height as CSS size.
 * 

 * @type void
 * @public
 */


// Start of sap/ui/commons/Panel.js
/**
 * Initialization
 * @private
 */
sap.ui.commons.Panel.prototype.init = function() {
	this._oScrollDomRef = null;     // points to the content area
	this._iMaxTbBtnWidth = -1;      // the maximum width of all toolbar buttons (when there are any, else -1)
	this._iTbMarginsAndBorders = 0;
	this._iMinTitleWidth = 30;      // the minimum width of the title span
	this._iOptTitleWidth = 30;
	this._iTitleMargin = 0;
	this._bFocusCollapseIcon = false; // indicates whether the collapse icon should be focused after the next rendering
};


/**
 * Called after the theme has been switched: adjust sizes
 * @private
 */
sap.ui.commons.Panel.prototype.onThemeChanged = function () {
	if (this.getDomRef() && this._oTitleDomRef) { // only if already rendered and if a real Panel (no subclass like Tab)
		
		// reset size settings done for previous theme, so elements take their optimum space
		this.getDomRef().style.minWidth = "auto";
		if (this._oToolbarDomRef) this._oToolbarDomRef.style.width = "auto";
		this._oTitleDomRef.style.width = "auto";
		
		// adapt sizes
		this._initializeSizes(); // TODO: delay this for Safari?
		if (!jQuery.support.flexBoxLayout ||
				(sap.ui.commons.Panel._isSizeSet(this.getHeight()) && (this._hasIcon() || (this.getButtons().length > 0)))) {
			this.onresize();
		}
	}
};


/**
 * Event unbinding
 * @private
 */
sap.ui.commons.Panel.prototype.onBeforeRendering = function() {
	// Deregister resize event before re-rendering
	if(this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};


/**
 * Adapts size settings of the rendered HTML
 * @private
 */
sap.ui.commons.Panel.prototype.onAfterRendering = function () {
	var id = this.getId();
	this._oScrollDomRef = jQuery.sap.domById(id + "-cont");
	if (!this._oScrollDomRef) {
		return;
	} // BugFix for TwoGo where the DomRefs where not there after rendering
	this._oHeaderDomRef = jQuery.sap.domById(id + "-hdr");
	this._oTitleDomRef = jQuery.sap.domById(id + "-title");
	this._oToolbarDomRef = jQuery.sap.domById(id + "-tb");

	// restore focus if required
	if (this._bFocusCollapseIcon) {
		this._bFocusCollapseIcon = false;
		var $collArrow = jQuery.sap.byId(id + "-collArrow");
		if($collArrow.is(":visible") && ($collArrow.css("visibility") == "visible" || $collArrow.css("visibility") == "inherit")) {
			$collArrow.focus();
		} else {
			var $collIco = jQuery.sap.byId(id + "-collIco");
			if ($collIco.is(":visible") && ($collIco.css("visibility") == "visible" || $collIco.css("visibility") == "inherit")) {
				$collIco.focus();
			}
		}
	}

	this._initializeSizes(); // TODO: delay this for Safari?

	// in browsers not supporting the FlexBoxLayout we need to listen to resizing
	if (!jQuery.support.flexBoxLayout ||
			(sap.ui.commons.Panel._isSizeSet(this.getHeight()) && (this._hasIcon() || (this.getButtons().length > 0)))) {
		this.onresize();
		this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));
	}
};


/**
 * 
 * @protected
 */
sap.ui.commons.Panel.prototype.getFocusInfo = function () {
	var collId = null;
	var id = this.getId();
	
	// if collapse icon needs to be focused, find out which one - if any - is currently visible
	if (this._bFocusCollapseIcon) {
		var $collArrow = jQuery.sap.byId(id + "-collArrow");
		if($collArrow.is(":visible") && ($collArrow.css("visibility") == "visible" || $collArrow.css("visibility") == "inherit")) {
			collId = $collArrow[0].id;
		} else {
			var $collIco = jQuery.sap.byId(id + "-collIco");
			if ($collIco.is(":visible") && ($collIco.css("visibility") == "visible" || $collIco.css("visibility") == "inherit")) {
				collId = $collIco[0].id;
			}
		}
	
	}
	
	// if a collapse icon is visible and to be focused, return its ID, otherwise just the control ID
	return {id:(collId ? collId : id)};
};


/**
 * 
 * @private
 */
sap.ui.commons.Panel.prototype.applyFocusInfo = function (oFocusInfo) {
	var $DomRef;
	if (oFocusInfo && oFocusInfo.id && ($DomRef = jQuery.sap.byId(oFocusInfo.id)) && ($DomRef.length > 0)) {
		$DomRef.focus();
	} else {
		this.focus();
	}
	return this;
}; 


/**
 * Measures and calculates/sets sizes as soon as the CSS has been applied after rendering or a theme switch
 * @private
 */
sap.ui.commons.Panel.prototype._initializeSizes = function() {
	var bRtl = sap.ui.getCore().getConfiguration().getRTL();

	// maximum width of a toolbar item -> min toolbar width
	var aButtons = this.getButtons();
	if (aButtons && aButtons.length > 0) {
		var maxWidth = 0;
		jQuery(this._oToolbarDomRef).children().each(function(){
			var width = this.offsetWidth;
			if (width > maxWidth) {
				maxWidth = width;
			}
		});
		this._iMaxTbBtnWidth = maxWidth;

		if (this._oToolbarDomRef) {
			this._oToolbarDomRef.style.minWidth = maxWidth + "px";

			// calculate the toolbar borders and margins
			var $tb = jQuery(this._oToolbarDomRef);
			this._iTbMarginsAndBorders = $tb.outerWidth(true) - $tb.width();
		}
	}

	// calculate available space between left- and right-aligned items with static width
	var beginBorderOfTitle = this._oTitleDomRef.offsetLeft; // displacement of the beginning of the title from the Panel border
	var totalWidth = this.getDomRef().offsetWidth;
	if (bRtl) {
		beginBorderOfTitle = totalWidth - (beginBorderOfTitle + this._oTitleDomRef.offsetWidth); // RTL case
	}
	var $title = jQuery(this._oTitleDomRef);
	this._iOptTitleWidth = $title.width();
	this._iTitleMargin = $title.outerWidth(true) - $title.outerWidth();
	var beginBorderOfRightItems = 10000;
	jQuery(this._oHeaderDomRef).children(".sapUiPanelHdrRightItem").each(function(){
		var begin = this.offsetLeft;
		if (bRtl) {
			begin = totalWidth - (begin + this.offsetWidth); // RTL case
		}
		if ((begin < beginBorderOfRightItems) && (begin > 0)) {
			beginBorderOfRightItems = begin;
		}
	});


	// set minimum Panel width as sum of minimum sizes
	var minWidth = beginBorderOfTitle;
	minWidth += this._iMinTitleWidth; // 30px is ok even if there is no title
	minWidth += this._iMaxTbBtnWidth + 1; // -1 if there is no toolbar... 1px more or less is no problem here
	minWidth += (beginBorderOfRightItems == 10000) ? 10 : (totalWidth - beginBorderOfRightItems); // use 10 as hardcoded right border
	this.getDomRef().style.minWidth = minWidth + 10 + "px";


	// restore scroll positions
	if (this._oScrollDomRef) {
		var scrollTop = this.getProperty("scrollTop");
		if (scrollTop > 0) {
			this._oScrollDomRef.scrollTop = scrollTop;
		}
		var scrollLeft = this.getProperty("scrollLeft");
		if (scrollLeft > 0) {
			this._oScrollDomRef.scrollLeft = scrollLeft;
		}

	}

};


/**
 * Adapts the absolute position of the content when height is set.
 * @private
 */
sap.ui.commons.Panel.prototype._fixContentHeight = function() {
	//if height is set and an icon or at least one toolbar button is present (which *could* inflate the header height), the cont top must be set to the header height
	if (sap.ui.commons.Panel._isSizeSet(this.getHeight()) && (this._hasIcon() || (this.getButtons().length > 0))) { // TODO: what if the icon is not yet loaded?
		this._iContTop = this._oHeaderDomRef.offsetHeight;
		if (this._oScrollDomRef) {
			this._oScrollDomRef.style.top = this._iContTop + "px";
		}
	}
};


/**
 * Called in browsers not supporting the FlexBox layout whenever the Panel size changes.
 * Basically this method imitates that layout's behavior.
 * @private
 */
sap.ui.commons.Panel.prototype.onresize = function() {
	// in IE8 (maybe also IE9) the sizes of the flexible items (title and toolbar) need to be adjusted
	// whenever the Panel width changes
	if (!jQuery.support.flexBoxLayout && this.getDomRef()) {
		var bRtl = sap.ui.getCore().getConfiguration().getRTL();

		/* Algorithm:
		 * 1. calculate space available for the two elements
		 * 2. if no toolbar is present, apply this width to the title, else:
		 * 3.   reduce toolbar width until maxBtnSize is reached, then reduce title width until minimum (do not make either any smaller; the Panel has a min-width anyway)
		 * 4.   apply these widths
		 */

		// begin of Panel to begin of Title
		var beginBorderOfTitle = this._oTitleDomRef.offsetLeft; // displacement of the beginning of the title from the Panel border
		var totalWidth = this.getDomRef().offsetWidth;
		if (bRtl) {
			beginBorderOfTitle = totalWidth - (beginBorderOfTitle + this._oTitleDomRef.offsetWidth); // RTL case
		}

		// begin of Panel to begin if "RightItems"
		var beginBorderOfRightItems = 10000;
		jQuery(this._oHeaderDomRef).children(".sapUiPanelHdrRightItem").each(function(){
			var begin = this.offsetLeft;
			if (bRtl) {
				begin = totalWidth - (begin + this.offsetWidth); // RTL case
			}
			if ((begin < beginBorderOfRightItems) && (begin > 0)) {
				beginBorderOfRightItems = begin;
			}
		});

		var availableSpace = (beginBorderOfRightItems == 10000) ?
					this.$().width() - beginBorderOfTitle - 20
				: beginBorderOfRightItems - beginBorderOfTitle - 10;

		var aButtons = this.getButtons();
		if (aButtons && aButtons.length > 0) { // there are title and toolbar; calculate and set both sizes
			// differentiate between two cases: 1. there is enough space for title plus minimum toolbar width
			//                                  2. both need to be reduced in size
			if ((availableSpace - this._iOptTitleWidth - this._iTitleMargin) > (this._iMaxTbBtnWidth - this._iTbMarginsAndBorders)) {
				// if available width minus optimum title width is still more than the minimum toolbar width,
				// give all remaining width to the toolbar
				this._oToolbarDomRef.style.width = (availableSpace - this._iOptTitleWidth - this._iTitleMargin - this._iTbMarginsAndBorders) + "px";
				this._oTitleDomRef.style.width = this._iOptTitleWidth + "px";
			} else {
				// both are affected => set toolbar to minimum and reduce title width, but not smaller than minimum
				this._oToolbarDomRef.style.width = this._iMaxTbBtnWidth + "px";
				this._oTitleDomRef.style.width = Math.max((availableSpace - this._iMaxTbBtnWidth - this._iTbMarginsAndBorders), this._iMinTitleWidth) + "px";
			}

		} else {
			// no toolbar
			this._oTitleDomRef.style.width = Math.max(availableSpace, this._iMinTitleWidth);
		}
	}

	// in case the resizing caused button wrapping, adapt content height -- FOR ALL BROWSERS!
	this._fixContentHeight();
};


/**
 * Helper method to find out whether the Panel has an icon.
 * @private
 */
sap.ui.commons.Panel.prototype._hasIcon = function() {
	return (this.getTitle() && this.getTitle().getIcon());
};



/**
 * Property setter for the "enabled" state
 *
 * @param bEnabled whether the Panel should be enabled or not
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled, true); // no re-rendering!
	// if already rendered, adapt rendered control without complete re-rendering
	jQuery(this.getDomRef()).toggleClass("sapUiPanelDis", !bEnabled);
	return this;
};


/**
 * Property setter for the padding
 *
 * @param bPadding whether the Panel should have padding
 * @returns {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setApplyContentPadding = function(bPadding) {
	this.setProperty("applyContentPadding", bPadding, true); // no re-rendering!
	jQuery(this.getDomRef()).toggleClass("sapUiPanelWithPadding", bPadding);
	return this;
};


/**
 * Property setter for the "collapsed" state
 *
 * @param bCollapsed whether the Panel should be collapsed or not
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setCollapsed = function(bCollapsed) {
	this.setProperty("collapsed", bCollapsed, true); // no re-rendering!
	this._setCollapsedState(bCollapsed); // adapt rendered control without complete re-rendering
	return this;
};


/**
 * Internal method for applying a (non-)"collapsed" state to the rendered HTML
 *
 * @param bCollapsed whether the Panel should be collapsed or not
 * @private
 */
sap.ui.commons.Panel.prototype._setCollapsedState = function(bCollapsed) {
	var oDomRef = this.getDomRef();
	var accessibility = sap.ui.getCore().getConfiguration().getAccessibility();
	if (oDomRef) {
		// after Panel has been rendered
		if (bCollapsed) {
			// collapsing
			if (!this.getWidth()) {
				oDomRef.style.width = this.getDomRef().offsetWidth + "px"; // maintain the current width
			}
			jQuery(oDomRef).addClass("sapUiPanelColl");
			if (accessibility) {
				oDomRef.setAttribute("aria-expanded", "false");
			}
			if (this.getHeight()) {
				// if there is a height set, the Panel would still consume the respective space, so remove the height setting
				oDomRef.style.height = "auto";
			}
			// update tooltips
			jQuery.sap.byId(this.getId() + "-collArrow").attr("title", "Expand"); // TODO: translate
			jQuery.sap.byId(this.getId() + "-collIco").attr("title", "Expand"); // TODO: translate

		} else {
			// expanding
			if (!jQuery.sap.domById(this.getId() + "-cont")) {
				// content has not been rendered yet, so render it now
				this._bFocusCollapseIcon = true; // restore focus to collapse icon/button after rendering
				this.rerender();
			} else {
				// content exists already, just make it visible again
				jQuery(oDomRef).removeClass("sapUiPanelColl");
				if (accessibility) {
					oDomRef.setAttribute("aria-expanded", "true");
				}
				if (!this.getWidth()) {
					oDomRef.style.width = "auto"; // restore the automatic width behavior
				}
				if (this.getHeight()) {
					oDomRef.style.height = this.getHeight(); // restore the set height
				}
				// update tooltips
				jQuery.sap.byId(this.getId() + "-collArrow").attr("title", "Collapse"); // TODO: translate
				jQuery.sap.byId(this.getId() + "-collIco").attr("title", "Collapse"); // TODO: translate
			}
		}
	}
};


/**
 * Static method that finds out whether the given CSS size is actually set.
 * Returns "true" for absolute and relative sizes, returns "false" if "null", "inherit" or "auto" is given.
 *
 * @static
 * @param sCssSize a css size string (must be a valid CSS size, or null)
 * @private
 */
sap.ui.commons.Panel._isSizeSet = function(sCssSize) {
	return (sCssSize && !(sCssSize =="auto") && !(sCssSize == "inherit"));
};

// API method
sap.ui.commons.Panel.prototype.setText = function(sText) {
	if (!this.getTitle()) {
		this.setTitle(new sap.ui.commons.Title(this.getId() + "-tit",{text:sText}));
	} else {
		this.getTitle().setText(sText);
	}
	return this;
};

// API method
sap.ui.commons.Panel.prototype.getText = function () {
	if (!this.getTitle()) {
		return null;
	} else {
		return this.getTitle().getText();
	}
};


/**
 * Returns the scroll position of the panel in pixels from the left. Returns 0 if not rendered yet.
 * Also internally updates the control property.
 *
 * @return the scroll position
 * @public
 */
sap.ui.commons.Panel.prototype.getScrollLeft = function () {
	var scrollLeft = 0;
	if (this._oScrollDomRef) {
		scrollLeft = this._oScrollDomRef.scrollLeft;
		jQuery.sap.assert(typeof scrollLeft == "number", "scrollLeft read from DOM should be a number");
		this.setProperty("scrollLeft", scrollLeft, true);
	}

	return scrollLeft;
};


/**
 * Sets the scroll position of the panel in pixels from the left.
 *
 * @param {int} iPosition the position to scroll to
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setScrollLeft = function (iPosition) {
	this.setProperty("scrollLeft", iPosition, true);
	if (this._oScrollDomRef) {
		this._oScrollDomRef.scrollLeft = iPosition;
	}
	return this;
};


/**
 * Returns the scroll position of the panel in pixels from the top. Returns 0 if not rendered yet.
 * Also internally updates the control property.
 *
 * @return the scroll position
 * @public
 */
sap.ui.commons.Panel.prototype.getScrollTop = function () {
	var scrollTop = 0;
	if (this._oScrollDomRef) {
		scrollTop = this._oScrollDomRef.scrollTop;
		this.setProperty("scrollTop", scrollTop, true);
	}

	return scrollTop;
};


/**
 * Sets the scrolls position of the panel in pixels from the top.
 *
 * @param {int} iPosition the position to scroll to
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setScrollTop = function (iPosition) {
	this.setProperty("scrollTop", iPosition, true);
	if (this._oScrollDomRef) {
		this._oScrollDomRef.scrollTop = iPosition;
	}
	return this;
};


/**
 * Sets the dimensions of the panel.
 *
 * @param {string} sWidth the width of the panel as CSS size
 * @param {string} sHeight the height of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setDimensions = function (sWidth, sHeight) {
	jQuery.sap.assert(typeof sWidth == "string" && typeof sHeight == "string", "sWidth and sHeight must be strings");
	this.setWidth(sWidth); // does not rerender
	this.setHeight(sHeight);
	return this;
};


/**
 * Sets the width of the panel.
 *
 * @param {string} sWidth the width of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setWidth = function (sWidth) {
	this.setProperty("width", sWidth, true); // don't rerender
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.width = sWidth;
	}
	return this;
};


/**
 * Sets the height of the panel.
 *
 * @param {string} sHeight the height of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setHeight = function (sHeight) {
	this.setProperty("height", sHeight, true); // don't rerender
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.height = sHeight;
	}
	return this;
};



/*   Event Handling   */

/**
 * Handles mouse clicks
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Panel.prototype.onclick = function(oEvent) {
	this._handleTrigger(oEvent);
};

/**
 * Handles "space" presses
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Panel.prototype.onsapspace = function(oEvent) {
	this._handleTrigger(oEvent);
};

/**
 * Handles any "triggering" actions like click and space
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Panel.prototype._handleTrigger = function(oEvent) {
	// minimize button toggled
	if((oEvent.target.id === this.getId() + "-collArrow") ||
			(oEvent.target.id === this.getId() + "-collIco")) {
		this.setCollapsed(!this.getProperty("collapsed"));
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};