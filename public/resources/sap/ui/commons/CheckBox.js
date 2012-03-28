/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.CheckBox.
jQuery.sap.declare("sap.ui.commons.CheckBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new CheckBox.
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
 * <li>checked : boolean</li>
 * <li>text : string</li>
 * <li>visible : boolean</li>
 * <li>enabled : boolean</li>
 * <li>editable : boolean</li>
 * <li>valueState : sap.ui.core.ValueState</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>textDirection : sap.ui.core.TextDirection</li>
 * <li>name : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>change : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Provides a flaggable box and a label. A checkbox can either stand alone, or in a group with other checkboxes. As an option, the boxes can initially be set to status Not Editable.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.CheckBox = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.CheckBox.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.CheckBox. 
 * Resulting metadata can be obtained via sap.ui.commons.CheckBox.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.CheckBox", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getChecked", "setChecked", "bindChecked", "unbindChecked", "getText", "setText", "getVisible", "setVisible", "getEnabled", "setEnabled", "getEditable", "setEditable", "getValueState", "setValueState", "getWidth", "setWidth", "getTextDirection", "setTextDirection", "getName", "setName", 
    // aggregations
    
    // associations
    
    // events
    "attachChange", "detachChange", 
    // methods
    "toggle"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "checked" : {name : "checked", type : "boolean", group : "Data", defaultValue : false},
    "text" : {name : "text", type : "string", group : "Appearance", defaultValue : null},
    "visible" : {name : "visible", type : "boolean", group : "Misc", defaultValue : true},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "editable" : {name : "editable", type : "boolean", group : "Behavior", defaultValue : true},
    "valueState" : {name : "valueState", type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "textDirection" : {name : "textDirection", type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
    "name" : {name : "name", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "change" : "change"
  }

});	

sap.ui.commons.CheckBox.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>checked</code>.
 * 
 * Checks the state of the control.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>checked</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getChecked = function() {
	return this.getProperty("checked");
};

/**
 * Setter for property <code>checked</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bChecked  new value for property <code>checked</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setChecked = function(bChecked) {
	this.setProperty("checked", bChecked);
	return this;
};


/**
 * Binder for property <code>checked</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.bindChecked = function(sPath, fnFormatter, sMode) {
	this.bindProperty("checked", sPath, fnFormatter, sMode);
	return this;
};

/**
 * Unbinder for property <code>checked</code>.
 *
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.unbindChecked = function() {
	this.unbindProperty("checked");
	return this;
};


/**
 * Getter for property <code>text</code>.
 * 
 * Defines the text displayed next to the checkbox.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * 
 * Invisible controls are not rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * 
 * Disabled controls are displayed in other colors, depending on user settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>editable</code>.
 * 
 * Specifies whether or not the user can flag/unflag the checkbox.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getEditable = function() {
	return this.getProperty("editable");
};

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setEditable = function(bEditable) {
	this.setProperty("editable", bEditable);
	return this;
};


/**
 * Getter for property <code>valueState</code>.
 * 
 * Accepts the core enumeration "ValueState.type" that supports "None", "Error", "Warning" and "Success".
 * 
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getValueState = function() {
	return this.getProperty("valueState");
};

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setValueState = function(oValueState) {
	this.setProperty("valueState", oValueState);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Control width results from the text length. Alternatively, the width can be set to an absolute value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>textDirection</code>.
 * 
 * Inherits the text direction from its parent control/container. Alternatively, the value can be set to LTR or RTL.
 * 
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getTextDirection = function() {
	return this.getProperty("textDirection");
};

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setTextDirection = function(oTextDirection) {
	this.setProperty("textDirection", oTextDirection);
	return this;
};


/**
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.commons.CheckBox.prototype.getName = function() {
	return this.getProperty("name");
};

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.setName = function(sName) {
	this.setProperty("name", sName);
	return this;
};


/**
 * 
 * Event is triggered when the control status is changed by the user.
 *  
 *
 * @name sap.ui.commons.CheckBox#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.checked 
					Checks whether the box is flagged or unflagged.
					
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.CheckBox</code>.<br/>
 * 
 * Event is triggered when the control status is changed by the user.
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
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.attachChange = function(oData, fnFunction, oListener) {
	this.attachEvent("change", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.CheckBox</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CheckBox.prototype.detachChange = function(fnFunction, oListener) {
	this.detachEvent("change", fnFunction, oListener);
	return this;	
};

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'checked' of type <code>boolean</code> 
					Checks whether the box is flagged or unflagged.
					</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.CheckBox.prototype.fireChange = function(mArguments) {
	this.fireEvent("change", mArguments);
	return this;
};


/**
 * 
 * Inverts the current value of the control.
 * 
 *
 * @name sap.ui.commons.CheckBox.prototype.toggle
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/CheckBox.js
/**
 * Event handler called when the checkbox is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.CheckBox.prototype.onclick = function(oEvent) {
	if(jQuery.browser.msie && (!this.getEditable() || !this.getEnabled())){
		// in IE tabindex = -1 hides focus, so in readOnly/disabled case tabindex must be temporarily set to 0
		// as long as CheckBox is focused
		jQuery.sap.byId(this.getId()).attr("tabindex", 0).addClass("sapUiCbFoc"); // the CSS class itself is not used, but IE only draws the standard focus outline when it is added
	}

	this.userToggle(oEvent);
};

/**
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.CheckBox.prototype.onfocusout = function(oEvent) {

	if(jQuery.browser.msie && (!this.getEditable() || !this.getEnabled())){
		// in IE tabindex = -1 hides focus, so in readOnly/disabled case tabindex must be temporarily set to 0
		// as long as CheckBox is focused - now unset this again
		jQuery.sap.byId(this.getId()).attr("tabindex", -1).removeClass("sapUiCbFoc");
	}
};

/**
 * Event handler called when the space key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.CheckBox.prototype.onsapspace = function(oEvent) {
	this.userToggle(oEvent);
};

/**
 * This method is used internally whenever the user toggles the checkbox value.
 * Purpose: Event cancelation and change event firing.
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.CheckBox.prototype.userToggle = function(oEvent) {
	oEvent.preventDefault();
	if (this.getEnabled() && this.getEditable()) {
		this.toggle();
		this.fireChange({checked: this.getChecked()});
	} else {
		// CheckBox has been activated by the user, but value cannot be changed
		// do nothing, but restore the focus to the complete control, as the user might have clicked the <input> element which also can get the focus
		this.getDomRef().focus();
	}
};

// implement public method toggle()
sap.ui.commons.CheckBox.prototype.toggle = function() {
	this.setChecked(!this.getChecked());
};