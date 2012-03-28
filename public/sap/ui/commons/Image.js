/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Image.
jQuery.sap.declare("sap.ui.commons.Image");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Image.
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
 * <li>src : string</li>
 * <li>visible : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>decorative : boolean</li>
 * <li>alt : string</li>
 * <li>useMap : string</li></ul>
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
 * A wrapper around the IMG tag. The image can be loaded from a remote or local server.
 * There are various size setting options available, and the images can be combined with actions.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Image = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Image.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.Image. 
 * Resulting metadata can be obtained via sap.ui.commons.Image.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Image", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getSrc", "setSrc", "getVisible", "setVisible", "getWidth", "setWidth", "getHeight", "setHeight", "getDecorative", "setDecorative", "getAlt", "setAlt", "getUseMap", "setUseMap", 
    // aggregations
    
    // associations
    
    // events
    "attachPress", "detachPress"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "src" : {name : "src", type : "string", group : "Data", defaultValue : null},
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
    "decorative" : {name : "decorative", type : "boolean", group : "Accessibility", defaultValue : true},
    "alt" : {name : "alt", type : "string", group : "Accessibility", defaultValue : null},
    "useMap" : {name : "useMap", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "press" : "press"
  }

});	

sap.ui.commons.Image.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>src</code>.
 * Relative or absolute path to URL where the image file is stored.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>src</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getSrc = function() {
	return this.getProperty("src");
};

/**
 * Setter for property <code>src</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSrc  new value for property <code>src</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.setSrc = function(sSrc) {
	this.setProperty("src", sSrc);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible images are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>decorative</code>.
 * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
 * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative).
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>decorative</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getDecorative = function() {
	return this.getProperty("decorative");
};

/**
 * Setter for property <code>decorative</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDecorative  new value for property <code>decorative</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.setDecorative = function(bDecorative) {
	this.setProperty("decorative", bDecorative);
	return this;
};


/**
 * Getter for property <code>alt</code>.
 * The alternative text that is displayed in case the Image is not available, or cannot be displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>alt</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getAlt = function() {
	return this.getProperty("alt");
};

/**
 * Setter for property <code>alt</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAlt  new value for property <code>alt</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.setAlt = function(sAlt) {
	this.setProperty("alt", sAlt);
	return this;
};


/**
 * Getter for property <code>useMap</code>.
 * The name of the image map that defines the clickable areas
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>useMap</code>
 * @public
 * 
 */
sap.ui.commons.Image.prototype.getUseMap = function() {
	return this.getProperty("useMap");
};

/**
 * Setter for property <code>useMap</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUseMap  new value for property <code>useMap</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.setUseMap = function(sUseMap) {
	this.setProperty("useMap", sUseMap);
	return this;
};


/**
 * Event is fired when the user clicks on the control. 
 *
 * @name sap.ui.commons.Image#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Image</code>.<br/>
 * Event is fired when the user clicks on the control. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.attachPress = function(oData, fnFunction, oListener) {
	this.attachEvent("press", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Image</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Image.prototype.detachPress = function(fnFunction, oListener) {
	this.detachEvent("press", fnFunction, oListener);
	return this;	
};

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.Image.prototype.firePress = function(mArguments) {
	this.fireEvent("press", mArguments);
	return this;
};


// Start of sap/ui/commons/Image.js
/**
 * Function is called when image is clicked.
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Image.prototype.onclick = function(oEvent) {
	this.firePress({/* no parameters */});
};

/**
 * Function is called when "enter" keydown happens on image.
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Image.prototype.onsapenter = sap.ui.commons.Image.prototype.onclick;
