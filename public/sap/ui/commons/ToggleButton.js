/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ToggleButton.
jQuery.sap.declare("sap.ui.commons.ToggleButton");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.Button");

/**
 * Constructor for a new ToggleButton.
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
 * <li>pressed : boolean</li></ul>
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
 * For further parameters see {@link sap.ui.commons.Button#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * The ToggleButton Control is a Button that can be toggled between pressed and normal state
 * @extends sap.ui.commons.Button
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.1.2. 
 * do not use yet
 */
sap.ui.commons.ToggleButton = function (sId, mSettings) {
	jQuery.sap.log.warning("Using deprecated control 'ToggleButton'.");
	sap.ui.commons.Button.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.ToggleButton.prototype = jQuery.sap.newObject(sap.ui.commons.Button.prototype);

/*
 * Describe the sap.ui.commons.ToggleButton. 
 * Resulting metadata can be obtained via sap.ui.commons.ToggleButton.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.ToggleButton", {

  // ---- object ----
  baseType : "sap.ui.commons.Button",
  publicMethods : [
    // properties 
    "getPressed", "setPressed"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "pressed" : {name : "pressed", type : "boolean", group : "Data", defaultValue : false}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>pressed</code>.
 * true when button is pressed down.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>pressed</code>
 * @public
 * 
 * @deprecated Since version 1.1.2. 
 * do not use yet
 */
sap.ui.commons.ToggleButton.prototype.getPressed = function() {
	jQuery.sap.log.warning("Using deprecated property 'pressed'.");
	return this.getProperty("pressed");
};

/**
 * Setter for property <code>pressed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPressed  new value for property <code>pressed</code>
 * @return {sap.ui.commons.ToggleButton} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.1.2. 
 * do not use yet
 */
sap.ui.commons.ToggleButton.prototype.setPressed = function(bPressed) {
	jQuery.sap.log.warning("Using deprecated property 'pressed'.");
	this.setProperty("pressed", bPressed);
	return this;
};


// Start of sap/ui/commons/ToggleButton.js
/**
 * Function is called when ToggleButton is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.ToggleButton.prototype.onclick = function(oEvent) {
	if (this.getEnabled()){
		this.setPressed(!this.getPressed());
		this.firePress({pressed: this.getPressed()});
	}
	oEvent.preventDefault();
	oEvent.stopPropagation();
};


sap.ui.commons.ToggleButton.prototype.setPressed = function(bPressed) {
	if (!bPressed){
		this.getRenderer().ondeactivePressed(this);
	} else {
		this.getRenderer().onactivePressed(this);
	}
	this.setProperty("pressed", bPressed, true);
	return this;
}; 