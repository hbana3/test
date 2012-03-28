/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Tab.
jQuery.sap.declare("sap.ui.commons.Tab");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.Panel");

/**
 * Constructor for a new Tab.
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
 * <li>verticalScrolling : sap.ui.core.Scrolling</li>
 * <li>horizontalScrolling : sap.ui.core.Scrolling</li>
 * <li>closable : boolean</li>
 * <li>selected : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.commons.Panel#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * A single page in a TabStrip control.
 * @extends sap.ui.commons.Panel
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Tab = function (sId, mSettings) {
	sap.ui.commons.Panel.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Tab.prototype = jQuery.sap.newObject(sap.ui.commons.Panel.prototype);

/*
 * Describe the sap.ui.commons.Tab. 
 * Resulting metadata can be obtained via sap.ui.commons.Tab.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Tab", {

  // ---- object ----
  baseType : "sap.ui.commons.Panel",
  publicMethods : [
    // properties 
    "getVerticalScrolling", "setVerticalScrolling", "getHorizontalScrolling", "setHorizontalScrolling", "getClosable", "setClosable", "getSelected", "setSelected"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "verticalScrolling" : {name : "verticalScrolling", type : "sap.ui.core.Scrolling", group : "Behavior", defaultValue : sap.ui.core.Scrolling.None},
    "horizontalScrolling" : {name : "horizontalScrolling", type : "sap.ui.core.Scrolling", group : "Behavior", defaultValue : sap.ui.core.Scrolling.None},
    "closable" : {name : "closable", type : "boolean", group : "Misc", defaultValue : false},
    "selected" : {name : "selected", type : "boolean", group : "Behavior", defaultValue : false}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>verticalScrolling</code>.
 * Set the height property.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.Scrolling} the value of property <code>verticalScrolling</code>
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.getVerticalScrolling = function() {
	return this.getProperty("verticalScrolling");
};

/**
 * Setter for property <code>verticalScrolling</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.Scrolling} oVerticalScrolling  new value for property <code>verticalScrolling</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setVerticalScrolling = function(oVerticalScrolling) {
	this.setProperty("verticalScrolling", oVerticalScrolling);
	return this;
};


/**
 * Getter for property <code>horizontalScrolling</code>.
 * Set the width property.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.Scrolling} the value of property <code>horizontalScrolling</code>
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.getHorizontalScrolling = function() {
	return this.getProperty("horizontalScrolling");
};

/**
 * Setter for property <code>horizontalScrolling</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.Scrolling} oHorizontalScrolling  new value for property <code>horizontalScrolling</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setHorizontalScrolling = function(oHorizontalScrolling) {
	this.setProperty("horizontalScrolling", oHorizontalScrolling);
	return this;
};


/**
 * Getter for property <code>closable</code>.
 * Defines whether the tab contains a close button.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>closable</code>
 * @public
 * 
 */
sap.ui.commons.Tab.prototype.getClosable = function() {
	return this.getProperty("closable");
};

/**
 * Setter for property <code>closable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bClosable  new value for property <code>closable</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setClosable = function(bClosable) {
	this.setProperty("closable", bClosable);
	return this;
};


/**
 * Getter for property <code>selected</code>.
 * Defines whether the tab is the active one.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 * @deprecated Since version 0.17.0. 
 * This property is not used. To indentify the selected tab in a TabStrip selectedIndex is used.
 */
sap.ui.commons.Tab.prototype.getSelected = function() {
	jQuery.sap.log.warning("Using deprecated property 'selected'.");
	return this.getProperty("selected");
};

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 0.17.0. 
 * This property is not used. To indentify the selected tab in a TabStrip selectedIndex is used.
 */
sap.ui.commons.Tab.prototype.setSelected = function(bSelected) {
	jQuery.sap.log.warning("Using deprecated property 'selected'.");
	this.setProperty("selected", bSelected);
	return this;
};


// Start of sap/ui/commons/Tab.js
/**
 * Initialize the Tab
 * @private
 */
sap.ui.commons.Tab.prototype.init = function() {
	// Setting this to role Tabpanel instead of its container basically worked.
	// However, the role is set one level higher to get better output in screen reader.

	this.oScrollDomRef = null;      // Points to the content area
};

sap.ui.commons.Tab.prototype.rerender = function() {
	// as Tab has no own renderer call renderer of TabStrip
	this.getParent().rerender();
};

/**
 * Called after rendering from the TabStrip control
 */
sap.ui.commons.Tab.prototype.onAfterRendering = function () {
	this.oScrollDomRef = jQuery.sap.domById(this.getId() + "-panel");

	// Restore scroll positions
	if (this.oScrollDomRef) {
		var scrollTop = this.getProperty("scrollTop");
		if (scrollTop > 0) {
			this.oScrollDomRef.scrollTop = scrollTop;
		}
		var scrollLeft = this.getProperty("scrollLeft");
		if (scrollLeft > 0) {
			this.oScrollDomRef.scrollLeft = scrollLeft;
		}
	}

	// TODO: this must also be done for tabs where the contents are not rendered initially
};

/**
 * Returns the scroll position of the tab in pixel from the left. Returns "0" if not rendered yet.
 * Also updates the control property internally.
 *
 * @return The scroll position
 * @public
 */
sap.ui.commons.Tab.prototype.getScrollLeft = function () {
	var scrollLeft = 0;
	if (this.oScrollDomRef) {
		scrollLeft = this.oScrollDomRef.scrollLeft;
		this.setProperty("scrollLeft", scrollLeft, true);
	}

	return scrollLeft;
};

/**
 * Sets the scroll position of the tab in pixel from the left.
 * @param {int} iPosition The position to scroll to
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setScrollLeft = function (iPosition) {
	this.setProperty("scrollLeft", iPosition, true);
	if (this.oScrollDomRef) {                        // TODO: what if called before rendering?
		this.bIgnoreScrollEvent = true;
		this.oScrollDomRef.scrollLeft = iPosition;
	}
	return this;
};

/**
 * Returns the scroll position of the tab in pixel from the top. Returns "0" if not rendered yet.
 * Also updates the control property internally.
 *
 * @return The scroll position
 * @public
 */
sap.ui.commons.Tab.prototype.getScrollTop = function () {
	var scrollTop = 0;
	if (this.oScrollDomRef) {
		scrollTop = this.oScrollDomRef.scrollTop;
		this.setProperty("scrollTop", scrollTop, true);
	}

	return scrollTop;
};

/**
 * Sets the scroll position of the tab in pixel from the top.
 * @param {int} iPosition The position to scroll to
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setScrollTop = function (iPosition) {
	this.setProperty("scrollTop", iPosition, true);
	if (this.oScrollDomRef) {                       // TODO: what if called before rendering?
		this.bIgnoreScrollEvent = true;
		this.oScrollDomRef.scrollTop = iPosition;
	}
	return this;
};

/**
 * Property setter for the "enabled" state (overwrite method from panel)
 *
 * @param bEnabled whether the tab should be enabled or not
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled, true); // no re-rendering!
	// if already rendered, adapt rendered control without complete re-rendering
	jQuery(this.getDomRef()).toggleClass("sapUiTab", bEnabled).toggleClass("sapUiTabDsbl", !bEnabled).attr("aria-disabled",!bEnabled);
	return this;
};

/**
 * Setter of the width property. As it has no effect on a tab and is
 * only inherited from panel, noting to do. Just overwrite panel implementation
 *
 * @param {string} sWidth the width of the panel as CSS size
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setWidth = function (sWidth) {
	this.setProperty("width", sWidth, true); // don't rerender
	// do nothing
	return this;
};

/**
 * Property setter for the padding.As it has no effect on a tab and is
 * only inherited from panel, noting to do. Just overwrite panel implementation
 *
 * @param bPadding whether the Panel should have padding
 * @returns {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setApplyContentPadding = function(bPadding) {
	this.setProperty("applyContentPadding", bPadding, true); // no re-rendering!
	// do nothing
	return this;
};