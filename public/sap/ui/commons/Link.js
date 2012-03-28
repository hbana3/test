/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Link.
jQuery.sap.declare("sap.ui.commons.Link");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Link.
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
 * <li>text : string</li>
 * <li>enabled : boolean</li>
 * <li>visible : boolean</li>
 * <li>helpId : string</li>
 * <li>href : string</li>
 * <li>target : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>press : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * 
 * Using this control, you provide an absolute or relative reference to an internal or external URL. The classical target parameters are supported. Another usage scenario is triggering an action, for example to open a popup window. In both cases, the link is a hypertext link.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Link = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Link.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.Link. 
 * Resulting metadata can be obtained via sap.ui.commons.Link.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Link", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getText", "setText", "getEnabled", "setEnabled", "getVisible", "setVisible", "getHelpId", "setHelpId", "getHref", "setHref", "getTarget", "setTarget", 
    // aggregations
    
    // associations
    
    // events
    "attachPress", "detachPress", 
    // methods
    "focus"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "text" : {name : "text", type : "string", group : "Appearance", defaultValue : ''},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "visible" : {name : "visible", type : "boolean", group : "", defaultValue : true},
    "helpId" : {name : "helpId", type : "string", group : "Behavior", defaultValue : ''},
    "href" : {name : "href", type : "string", group : "Data", defaultValue : null},
    "target" : {name : "target", type : "string", group : "Data", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "press" : "press"
  }

});	

sap.ui.commons.Link.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>text</code>.
 * 
 * Link text to be displayed.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Link.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * 
 * Disabled controls have different colors, depending on customer settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Link.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * 
 * Invisible links are not rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Link.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>helpId</code>.
 * 
 * Unique identifier used for help service.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>helpId</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getHelpId = function() {
	return this.getProperty("helpId");
};

/**
 * Setter for property <code>helpId</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sHelpId  new value for property <code>helpId</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Link.prototype.setHelpId = function(sHelpId) {
	this.setProperty("helpId", sHelpId);
	return this;
};


/**
 * Getter for property <code>href</code>.
 * 
 * Supports standard hyperlink behavior.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>href</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getHref = function() {
	return this.getProperty("href");
};

/**
 * Setter for property <code>href</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sHref  new value for property <code>href</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Link.prototype.setHref = function(sHref) {
	this.setProperty("href", sHref);
	return this;
};


/**
 * Getter for property <code>target</code>.
 * 
 * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>target</code>
 * @public
 * 
 */
sap.ui.commons.Link.prototype.getTarget = function() {
	return this.getProperty("target");
};

/**
 * Setter for property <code>target</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTarget  new value for property <code>target</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Link.prototype.setTarget = function(sTarget) {
	this.setProperty("target", sTarget);
	return this;
};


/**
 * 
 * Event is fired when the user clicks the control.
 *  
 *
 * @name sap.ui.commons.Link#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Link</code>.<br/>
 * 
 * Event is fired when the user clicks the control.
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
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Link.prototype.attachPress = function(oData, fnFunction, oListener) {
	this.attachEvent("press", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Link</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Link.prototype.detachPress = function(fnFunction, oListener) {
	this.detachEvent("press", fnFunction, oListener);
	return this;	
};

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.Link.prototype.firePress = function(mArguments) {
	this.fireEvent("press", mArguments);
	return this;
};


/**
 * Puts the focus to the link.
 *
 * @name sap.ui.commons.Link.prototype.focus
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/Link.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");

sap.ui.core.EnabledPropagator.apply(sap.ui.commons.Link.prototype, [true]);

/**
 * Function is called when Link is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Link.prototype.onclick = function(oEvent) {
	if (this.getEnabled()) {
		this.firePress({/* no parameters */});
	}
};