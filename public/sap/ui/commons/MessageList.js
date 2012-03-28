/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MessageList.
jQuery.sap.declare("sap.ui.commons.MessageList");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new MessageList.
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
 * <li>visible : boolean</li>
 * <li>anchorId : string</li>
 * <li>maxListed : string</li></ul>
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
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Instantiated by the "MessageBar" Control if the user ever requests to generate the corresponding "MessageList".
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.MessageList = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.MessageList.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.MessageList. 
 * Resulting metadata can be obtained via sap.ui.commons.MessageList.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.MessageList", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getVisible", "setVisible", "getAnchorId", "setAnchorId", "getMaxListed", "setMaxListed", 
    // aggregations
    
    // associations
    
    // events
    
    // methods
    "setMessages"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : false},
    "anchorId" : {name : "anchorId", type : "string", group : "Appearance", defaultValue : null},
    "maxListed" : {name : "maxListed", type : "string", group : "Misc", defaultValue : '7'}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>visible</code>.
 * To open or close the Control.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MessageList.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>anchorId</code>.
 * Id of the anchor under which the MessageList is to render.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>anchorId</code>
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.getAnchorId = function() {
	return this.getProperty("anchorId");
};

/**
 * Setter for property <code>anchorId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAnchorId  new value for property <code>anchorId</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MessageList.prototype.setAnchorId = function(sAnchorId) {
	this.setProperty("anchorId", sAnchorId);
	return this;
};


/**
 * Getter for property <code>maxListed</code>.
 * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
 *
 * Default value is <code>7</code>
 *
 * @return {string} the value of property <code>maxListed</code>
 * @public
 * 
 */
sap.ui.commons.MessageList.prototype.getMaxListed = function() {
	return this.getProperty("maxListed");
};

/**
 * Setter for property <code>maxListed</code>.
 *
 * Default value is <code>7</code> 
 *
 * @param {string} sMaxListed  new value for property <code>maxListed</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MessageList.prototype.setMaxListed = function(sMaxListed) {
	this.setProperty("maxListed", sMaxListed);
	return this;
};


/**
 * Sets the message list to be displayed.
 *
 * @name sap.ui.commons.MessageList.prototype.setMessages
 * @function
 * @param {sap.ui.commons.Message[]} 
 *         aMessages
 *         Message list.

 * @type void
 * @public
 */


// Start of sap/ui/commons/MessageList.js
jQuery.sap.require("sap.ui.core.Popup");
///**
// * This file defines behavior for the control,
// */
sap.ui.commons.MessageList.prototype.init = function(){
	// Defining some private data:
	this.aMessages = [];
	this.iItemHeight = 0;

	// Popup(oContent, bModal, bShadow, bAutoClose) container initialization:
	// - bModal: "true/false" : For blocking the background window.
	this.oPopup   = new sap.ui.core.Popup(this, false, true, false);
};

/**
 * Destroys this Control instance, called by Element#destroy()
 * @private
 */
sap.ui.commons.MessageList.prototype.exit = function() {
  this.close();

	this.oPopup.destroy();
	this.oPopup = null;
};

/**
 * Re-initializes the measurements, so all sizes are recalculated after a theme switch.
 * @private
 */
sap.ui.commons.MessageList.prototype.onThemeChanged = function () {
	this.iItemHeight = 0;
};

/**
 * This utility checks to see if a scrollbar has to be rendered.
 */
sap.ui.commons.MessageList.prototype.onAfterRendering = function () {
	var oList = this.getDomRef();
	var jList = jQuery(oList);

  // A scrollbar is only required over 7 items:
  var maxVisibleItems = this.getMaxListed();
  var len = this.aMessages.length;
  if (len <= maxVisibleItems) {
	// By default, css height was set to "20px" to make sure List would fit, for Popup to open.
	jList.height("auto");
	return;
  }

	// Calculating 1 item height:
	if (this.iItemHeight == 0) {
		var oItem = oList.firstChild;
		var jItem = jQuery(oItem);
		this.iItemHeight = jItem.height();
	}

  oList.style.overflowY = "scroll";
  oList.style.overflowX = "hidden";
	var desiredHeight = (maxVisibleItems * this.iItemHeight) + "px";
	jList.height(desiredHeight);
};

// #############################################################################
// Internal Utilities
// #############################################################################
/**
 * This utility opens the MessageList Popup.
 */
sap.ui.commons.MessageList.prototype.open = function() {
  var rtl = sap.ui.getCore().getConfiguration().getRTL();

	// Defining or fetching the Popup attributes:
  var animationDuration = 200;
  var msgListSnapPoint = rtl ? sap.ui.core.Popup.Dock.RightTop    : sap.ui.core.Popup.Dock.LeftTop;
  var anchorSnapPoint  = rtl ? sap.ui.core.Popup.Dock.RightBottom : sap.ui.core.Popup.Dock.LeftBottom;
  var relativeAnchorPosition = "0 0";
  var anchor = null;
  var anchorId = this.getAnchorId();
  if (anchorId) {
	anchor = jQuery.sap.domById(anchorId);
  }
  if (!anchor) {
	anchor = document.body;
  }
  // Invoking the MsgBar Popup open function(iDuration, my, at, of, offset):
  this.oPopup.open(animationDuration, msgListSnapPoint, anchorSnapPoint, anchor, relativeAnchorPosition);
};

/**
 * This utility closes the MessageList Popup.
 */
sap.ui.commons.MessageList.prototype.close = function() {
  // Invoking the MsgBar Popup close = function(iDuration):
  var animationDuration = 200;
  this.oPopup.close(animationDuration);
};

/**
 * This public API receives the list of Messages to be displayed,
 * and re-render this Control if visible.
 */
sap.ui.commons.MessageList.prototype.setMessages = function(aMessages) {
  // Storing the Messages:
  this.aMessages = aMessages;

  // Re-rendering this MessageList if visible:
  if (this.getVisible()) {
	sap.ui.getCore().getRenderManager().render(this, sap.ui.getCore().getStaticAreaRef(), true);
  }

  return this;
};


// #############################################################################
// Overwriting auto-generated methods of MessageList.API.js
// #############################################################################

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code>
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 *
 * The MessageBar.API.js "setVisible" function is overwritten in order to
 * invoke the open() and close() the MessageList Popup.
 */
sap.ui.commons.MessageList.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);

  // Opening or closing the MessageBar, as requested:
  if (bVisible) {
	// Re-rendering, in case content is new.
	sap.ui.getCore().getRenderManager().render(this, sap.ui.getCore().getStaticAreaRef(), true);
		this.open();
  } else {
	  this.close();
  }

	return this;
};