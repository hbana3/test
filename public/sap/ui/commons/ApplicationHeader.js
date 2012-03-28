/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ApplicationHeader.
jQuery.sap.declare("sap.ui.commons.ApplicationHeader");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ApplicationHeader.
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
 * <li>logoSrc : string</li>
 * <li>logoText : string</li>
 * <li>displayLogoff : boolean</li>
 * <li>userName : string</li>
 * <li>displayWelcome : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>logoff : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * The application header control stands on the top of any application page. It consists basically of 4 areas. Logo area/Function area provided by application/Search area/Logout area
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.ApplicationHeader = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.ApplicationHeader.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.ApplicationHeader. 
 * Resulting metadata can be obtained via sap.ui.commons.ApplicationHeader.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.ApplicationHeader", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getLogoSrc", "setLogoSrc", "getLogoText", "setLogoText", "getDisplayLogoff", "setDisplayLogoff", "getUserName", "setUserName", "getDisplayWelcome", "setDisplayWelcome", 
    // aggregations
    
    // associations
    
    // events
    "attachLogoff", "detachLogoff"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "logoSrc" : {name : "logoSrc", type : "string", group : "Misc", defaultValue : null},
    "logoText" : {name : "logoText", type : "string", group : "Misc", defaultValue : null},
    "displayLogoff" : {name : "displayLogoff", type : "boolean", group : "Misc", defaultValue : true},
    "userName" : {name : "userName", type : "string", group : "Misc", defaultValue : null},
    "displayWelcome" : {name : "displayWelcome", type : "boolean", group : "Misc", defaultValue : true}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "logoff" : "logoff"
  }

});	

sap.ui.commons.ApplicationHeader.M_EVENTS = {'logoff':'logoff'};


/**
 * Getter for property <code>logoSrc</code>.
 * Path (src) to the logo icon to be displayed in the application header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>logoSrc</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getLogoSrc = function() {
	return this.getProperty("logoSrc");
};

/**
 * Setter for property <code>logoSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLogoSrc  new value for property <code>logoSrc</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ApplicationHeader.prototype.setLogoSrc = function(sLogoSrc) {
	this.setProperty("logoSrc", sLogoSrc);
	return this;
};


/**
 * Getter for property <code>logoText</code>.
 * The text that will be displayed beside the logo in the application header. This property is optional.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>logoText</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getLogoText = function() {
	return this.getProperty("logoText");
};

/**
 * Setter for property <code>logoText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLogoText  new value for property <code>logoText</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ApplicationHeader.prototype.setLogoText = function(sLogoText) {
	this.setProperty("logoText", sLogoText);
	return this;
};


/**
 * Getter for property <code>displayLogoff</code>.
 * If set to true, the logoff area will be displayed at the right hand side of the application header.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>displayLogoff</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getDisplayLogoff = function() {
	return this.getProperty("displayLogoff");
};

/**
 * Setter for property <code>displayLogoff</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDisplayLogoff  new value for property <code>displayLogoff</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ApplicationHeader.prototype.setDisplayLogoff = function(bDisplayLogoff) {
	this.setProperty("displayLogoff", bDisplayLogoff);
	return this;
};


/**
 * Getter for property <code>userName</code>.
 * User name that will be displayed beside the welcome text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>userName</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getUserName = function() {
	return this.getProperty("userName");
};

/**
 * Setter for property <code>userName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUserName  new value for property <code>userName</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ApplicationHeader.prototype.setUserName = function(sUserName) {
	this.setProperty("userName", sUserName);
	return this;
};


/**
 * Getter for property <code>displayWelcome</code>.
 * By default, set to true and dislpays the welcome text
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>displayWelcome</code>
 * @public
 * 
 */
sap.ui.commons.ApplicationHeader.prototype.getDisplayWelcome = function() {
	return this.getProperty("displayWelcome");
};

/**
 * Setter for property <code>displayWelcome</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDisplayWelcome  new value for property <code>displayWelcome</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ApplicationHeader.prototype.setDisplayWelcome = function(bDisplayWelcome) {
	this.setProperty("displayWelcome", bDisplayWelcome);
	return this;
};


/**
 * Fires an event to log off the user from the application.
 * No parameters. 
 *
 * @name sap.ui.commons.ApplicationHeader#logoff
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'logoff' event of this <code>sap.ui.commons.ApplicationHeader</code>.<br/>
 * Fires an event to log off the user from the application.
 * No parameters. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ApplicationHeader.prototype.attachLogoff = function(oData, fnFunction, oListener) {
	this.attachEvent("logoff", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'logoff' event of this <code>sap.ui.commons.ApplicationHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ApplicationHeader.prototype.detachLogoff = function(fnFunction, oListener) {
	this.detachEvent("logoff", fnFunction, oListener);
	return this;	
};

/**
 * Fire event logoff to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.ApplicationHeader.prototype.fireLogoff = function(mArguments) {
	this.fireEvent("logoff", mArguments);
	return this;
};


// Start of sap/ui/commons/ApplicationHeader.js
///**
// * This file defines behavior for the control,
// */
sap.ui.commons.ApplicationHeader.prototype.init = function(){
	this.initializationDone = false;
};

sap.ui.commons.ApplicationHeader.prototype.exit = function() {
	this.oLogo && this.oLogo.destroy();
	this.oLogoText && this.oLogoText.destroy();
	this.oLogoffBtn && this.oLogoffBtn.destroy();
};

/**
 * Create the composite parts out of the current settings.
 * Called by the renderer just before rendering
 * @private
 */
sap.ui.commons.ApplicationHeader.prototype.initControls = function() {

	//Application header to build sub-controls ids
	var appHeaderId = this.getId();

	//Get the texts from the resources bundle
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");

	//Create the logo image control and the title (textView) control
	this.oLogo && this.oLogo.destroy();
	this.oLogo = new sap.ui.commons.Image(appHeaderId + "-logoImg");
	this.oLogo.setTooltip(rb.getText("APPHDR_LOGO_TOOLTIP"));
	this.oLogo.setParent(this);
	this.oLogoText && this.oLogoText.destroy();
	this.oLogoText = new sap.ui.commons.TextView(appHeaderId + "-logoText");
	this.oLogoText.setAccessibleRole(sap.ui.core.AccessibleRole.Heading);
	this.oLogoText.setParent(this);

	//Log off button
	this.oLogoffBtn && this.oLogoffBtn.destroy();
	this.oLogoffBtn = new sap.ui.commons.Button(appHeaderId + "-logoffBtn");
	this.oLogoffBtn.setText(rb.getText("APPHDR_LOGOFF"));
	this.oLogoffBtn.attachPress(this.logoff,this);
	this.oLogoffBtn.setParent(this);
	this.oLogoffBtn.setLite(true);
}


/**
*  This event is fired when the user clicks on the Log Off button
*  @param oEvent The event triggered
*  @private
*/;
sap.ui.commons.ApplicationHeader.prototype.logoff = function(oEvent){
	this.fireLogoff();
};


// ---- Overwritten property setters to make sure the full area is rerendered correctly ----

sap.ui.commons.ApplicationHeader.prototype.setLogoSrc = function(sLogoSrc) {
	this.initializationDone = false;
	this.setProperty("logoSrc", sLogoSrc);
	return this;
};

sap.ui.commons.ApplicationHeader.prototype.setLogoText = function(sLogoText) {
	this.initializationDone = false;
	this.setProperty("logoText", sLogoText);
	return this;
};

sap.ui.commons.ApplicationHeader.prototype.setUserName = function(sUserName){
	this.initializationDone = false;
	this.setProperty("userName", sUserName);
	return this;
};

sap.ui.commons.ApplicationHeader.prototype.setDisplayWelcome = function(bDisplayWelcome) {
	this.initializationDone = false;
	this.setProperty("displayWelcome", bDisplayWelcome);
	return this;
};

sap.ui.commons.ApplicationHeader.prototype.setDisplayLogoff = function(bDisplayLogoff) {
	this.initializationDone = false;
	this.setProperty("displayLogoff", bDisplayLogoff);
	return this;
};