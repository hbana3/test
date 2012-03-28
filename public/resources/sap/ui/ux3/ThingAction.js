/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ThingAction.
jQuery.sap.declare("sap.ui.ux3.ThingAction");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new ThingAction.
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
 * <li>enabled : boolean</li></ul>
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
 * For further parameters see {@link sap.ui.core.Element#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Thing Action for Swatch, QuickView, Thinginspector
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.ThingAction = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.ThingAction.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.ux3.ThingAction. 
 * Resulting metadata can be obtained via sap.ui.ux3.ThingAction.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.ThingAction", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getText", "setText", "getEnabled", "setEnabled", 
    // aggregations
    
    // associations
    
    // events
    "attachSelect", "detachSelect"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : null},
    "enabled" : {name : "enabled", type : "boolean", group : "Misc", defaultValue : true}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "select" : "select"
  }

});	

sap.ui.ux3.ThingAction.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>text</code>.
 * text of action
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingAction.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * action enabled (true/false)
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingAction.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingAction.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Event will be fired when the action was triggered. 
 *
 * @name sap.ui.ux3.ThingAction#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected action
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected Thing Action
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.ux3.ThingAction</code>.<br/>
 * Event will be fired when the action was triggered. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingAction.prototype.attachSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("select", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.ux3.ThingAction</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingAction.prototype.detachSelect = function(fnFunction, oListener) {
	this.detachEvent("select", fnFunction, oListener);
	return this;	
};

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected action</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected Thing Action</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ThingAction.prototype.fireSelect = function(mArguments) {
	this.fireEvent("select", mArguments);
	return this;
};


// Start of sap/ui/ux3/ThingAction.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.ux3.ThingAction.prototype.init = function(){
//   // do something for initialization...
//};
sap.ui.ux3.ThingAction.prototype.onclick = function(oEvent) {
	this.fireSelect({
		id : this.getId(),
		action: this
	});
};
sap.ui.ux3.ThingAction.prototype.onsapselect = function(oEvent) {
	this.fireSelect({
		id : this.getId(),
		action: this
	});
};

sap.ui.ux3.ThingAction.prototype.setTooltip = function(oTooltip) {

	var oOldTooltip = this.getTooltip();
	// if the old tooltip was a Tooltip object, remove it as a delegate
	if (oOldTooltip instanceof sap.ui.core.TooltipBase){
		this.removeDelegate(oOldTooltip);
	}
	// if the new tooltip is a Tooltip object, add it as a delegate
	if (oTooltip instanceof sap.ui.core.TooltipBase){
		oTooltip._currentControl = this;
		this.addDelegate(oTooltip);
	}
	this.setAggregation("tooltip", oTooltip, true);

	return this;
};