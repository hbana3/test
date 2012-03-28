/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RadioButton.
jQuery.sap.declare("sap.ui.commons.RadioButton");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new RadioButton.
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
 * <li>visible : boolean</li>
 * <li>enabled : boolean</li>
 * <li>editable : boolean</li>
 * <li>selected : boolean</li>
 * <li>valueState : sap.ui.core.ValueState</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>textDirection : sap.ui.core.TextDirection</li>
 * <li>groupName : string</li>
 * <li>key : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
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
 * Consists of a round element and a descriptive text. Generally, you would create at least two radio button controls;
 * by this, you provide a limited choice for the user. Radio buttons can trigger events.
 * Available value states are "Error", "None", "Success", "Warning".
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.RadioButton = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.RadioButton.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.RadioButton. 
 * Resulting metadata can be obtained via sap.ui.commons.RadioButton.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.RadioButton", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getText", "setText", "getVisible", "setVisible", "getEnabled", "setEnabled", "getEditable", "setEditable", "getSelected", "setSelected", "getValueState", "setValueState", "getWidth", "setWidth", "getTextDirection", "setTextDirection", "getGroupName", "setGroupName", "getKey", "setKey", 
    // aggregations
    
    // associations
    
    // events
    "attachSelect", "detachSelect"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "text" : {name : "text", type : "string", group : "Data", defaultValue : null},
    "visible" : {name : "visible", type : "boolean", group : "Appearance", defaultValue : true},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "editable" : {name : "editable", type : "boolean", group : "Behavior", defaultValue : true},
    "selected" : {name : "selected", type : "boolean", group : "Data", defaultValue : false},
    "valueState" : {name : "valueState", type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "textDirection" : {name : "textDirection", type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
    "groupName" : {name : "groupName", type : "string", group : "Behavior", defaultValue : 'sapUiRbDefaultGroup'},
    "key" : {name : "key", type : "string", group : "Data", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "select" : "select"
  }

});	

sap.ui.commons.RadioButton.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the radio button.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible radio buttons are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * 
 * Disabled controls are displayed in another color, depending on the customer settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user can choose a radio button.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getEditable = function() {
	return this.getProperty("editable");
};

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setEditable = function(bEditable) {
	this.setProperty("editable", bEditable);
	return this;
};


/**
 * Getter for property <code>selected</code>.
 * Specifies the select state of the radio button.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getSelected = function() {
	return this.getProperty("selected");
};

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setSelected = function(bSelected) {
	this.setProperty("selected", bSelected);
	return this;
};


/**
 * Getter for property <code>valueState</code>.
 * 
 * The value state to be displayed.
 * 
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getValueState = function() {
	return this.getProperty("valueState");
};

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setValueState = function(oValueState) {
	this.setProperty("valueState", oValueState);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * The control width depends on the text length. Alternatively, CSS-sizes in % or px can be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>textDirection</code>.
 * 
 * Available options here are LTR and RTL. Alternatively, the control can inherit the text direction from its parent container.
 * 
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getTextDirection = function() {
	return this.getProperty("textDirection");
};

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setTextDirection = function(oTextDirection) {
	this.setProperty("textDirection", oTextDirection);
	return this;
};


/**
 * Getter for property <code>groupName</code>.
 * Name of the radio button group the current one belongs to where you can define a new group name. All radio buttons in a page belong to the default group.
 * When any of the radio buttons in this group is selected, all others are deselected.
 *
 * Default value is <code>'sapUiRbDefaultGroup'</code>
 *
 * @return {string} the value of property <code>groupName</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getGroupName = function() {
	return this.getProperty("groupName");
};

/**
 * Setter for property <code>groupName</code>.
 *
 * Default value is <code>'sapUiRbDefaultGroup'</code> 
 *
 * @param {string} sGroupName  new value for property <code>groupName</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setGroupName = function(sGroupName) {
	this.setProperty("groupName", sGroupName);
	return this;
};


/**
 * Getter for property <code>key</code>.
 * Can be used as input for subsequent actions.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.commons.RadioButton.prototype.getKey = function() {
	return this.getProperty("key");
};

/**
 * Setter for property <code>key</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.setKey = function(sKey) {
	this.setProperty("key", sKey);
	return this;
};


/**
 * Event is triggered when user interaction causes a radio button switch from state "unselected" to "selected". 
 *
 * @name sap.ui.commons.RadioButton#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.RadioButton</code>.<br/>
 * Event is triggered when user interaction causes a radio button switch from state "unselected" to "selected". 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.attachSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("select", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.RadioButton</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RadioButton.prototype.detachSelect = function(fnFunction, oListener) {
	this.detachEvent("select", fnFunction, oListener);
	return this;	
};

/**
 * Fire event select to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.RadioButton.prototype.fireSelect = function(mArguments) {
	this.fireEvent("select", mArguments);
	return this;
};


// Start of sap/ui/commons/RadioButton.js
/**
 * Event handler called when the radio button is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onclick = function(oEvent) {

	if(this.getEnabled() && oEvent.target.id == (this.getId()+"-RB")){
		this.focus();
	}

	if(jQuery.browser.msie && (!this.getEditable() || !this.getEnabled())){
		// in IE tabindex = -1 hides focus, so in readOnly case tabindex must be set to 0
		// as long as RadioButton is clicked on
		jQuery.sap.byId(this.getId()).attr("tabindex", 0).toggleClass("sapUiRbFoc");
	}

	this.userSelect(oEvent);
};

/**
 * Event handler called when the space key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onsapspace = function(oEvent) {

	if(this.getEnabled() && oEvent.target.id == (this.getId()+"-RB")){
		this.focus();
	}
	this.userSelect(oEvent);
};

/**
 * Event handler called focus is set on Radio button
 * Problem in HCB: Focus is set in IE8 to bullet, not to whole control
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onsaptabnext = function(oEvent) {

	if(jQuery.browser.msie){
		this.bTabPressed = true;
		var that = this;
		window.setTimeout(function(){that.bTabPressed = false;}, 100);
	}
};

/**
 * Event handler called when the radio button is focused
 * Problem in HCB: Focus is sometimes set in IE8 to bullet, not to whole control
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onfocusin = function(oEvent) {

	if(this.getEnabled() && oEvent.target.id == (this.getId()+"-RB")){
		if(this.bTabPressed){
			// this only occurs in IE in HCB mode
			var aFocusableElements = jQuery(":focusable"),
				bFound = false;
			for(var i = 0; i < aFocusableElements.length; i++){
				if(bFound && aFocusableElements[i].parentNode != oEvent.target && aFocusableElements[i].tabIndex != "-1"){
					aFocusableElements[i].focus();
					oEvent.preventDefault();
					break;
				}
				if(oEvent.target == aFocusableElements[i]){
					bFound = true;
				}
			}
		}else{
			this.focus();
		}
	}
};

/**
 * Event handler called when the radio button is left
 * Problem in IE: Tabindex must be set back to -1
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onfocusout = function(oEvent) {

	if(jQuery.browser.msie && (!this.getEditable() || !this.getEnabled())){
		// in IE tabindex = -1 hides focus, so in readOnly case tabindex must be set to 0
		// as long as RadioButton is clicked on
		jQuery.sap.byId(this.getId()).attr("tabindex", -1).toggleClass("sapUiRbFoc");
	}

};
/**
 * This method is used internally only, whenever the user somehow selects the RadioButton.
 * It is responsible for event cancellation and for firing the select event.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.userSelect = function(oEvent) {
//	oEvent.preventDefault();
	// the control should not stop browser event propagation
	// Example: table control needs to catch and handle the event as well
	//oEvent.stopPropagation();

	if (this.getEnabled() && this.getEditable()) {
		var selected = this.getSelected();
		if (!selected) {
			this.setSelected(true);
			this.fireSelect({/* no parameters */});
		}
	}else{
		// readOnly or disabled -> don't allow browser to switch RadioButton on
		oEvent.preventDefault();
	}
};

// #############################################################################
// Overwritten methods that are also generated in RadioButton.API.js
// #############################################################################

/*
 * Overwrite the definition from RadioButton.API.js
 */
sap.ui.commons.RadioButton.prototype.setSelected = function(bSelected) {

	var bSelectedOld = this.getSelected();

	this.setProperty("selected", bSelected, true); // No re-rendering

	if (bSelected) { // If this radio button is selected, explicitly deselect the other radio buttons of the same group
		if (this.getGroupName() && (this.getGroupName() != "")) { // Do it only if groupName is set
			// TODO: Add control references to some static list when they are constructed, in order to avoid searching every time
			var others = document.getElementsByName(this.getGroupName());
			for (var i = 0; i < others.length; i++) {
				var other = others[i];
				// Recommendation is that the HTML radio button has an ID ending with "-RB"
				if (other.id && (other.id.length > 3) && (other.id.substr(other.id.length-3) == "-RB")) {
					// The SAPUI5 control is known by an ID without the "-RB" suffix
					var oControl = sap.ui.getCore().getElementById(other.id.substr(0, other.id.length-3));
					if (oControl instanceof sap.ui.commons.RadioButton && (oControl != this)) {
						oControl.setSelected(false);
					}
				}
			}
		}
	}
	if ((bSelectedOld != bSelected) && this.getDomRef() && this.getRenderer().setSelected){
		this.getRenderer().setSelected(this, bSelected);
	}

	return this;
};