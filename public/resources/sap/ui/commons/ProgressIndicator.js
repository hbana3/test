/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ProgressIndicator.
jQuery.sap.declare("sap.ui.commons.ProgressIndicator");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ProgressIndicator.
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
 * <li>enabled : boolean</li>
 * <li>barColor : sap.ui.core.BarColor</li>
 * <li>displayValue : string</li>
 * <li>percentValue : int</li>
 * <li>showValue : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li></ul>
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
 * This control can be used to e.g. visualize the progress of an activity.
 * @extends sap.ui.core.Control
 *
 * @author Michael Sobczak 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.ProgressIndicator = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.ProgressIndicator.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.ProgressIndicator. 
 * Resulting metadata can be obtained via sap.ui.commons.ProgressIndicator.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.ProgressIndicator", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getVisible", "setVisible", "getEnabled", "setEnabled", "getBarColor", "setBarColor", "getDisplayValue", "setDisplayValue", "getPercentValue", "setPercentValue", "getShowValue", "setShowValue", "getWidth", "setWidth"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : true},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "barColor" : {name : "barColor", type : "sap.ui.core.BarColor", group : "Appearance", defaultValue : sap.ui.core.BarColor.NEUTRAL},
    "displayValue" : {name : "displayValue", type : "string", group : "Appearance", defaultValue : '0%'},
    "percentValue" : {name : "percentValue", type : "int", group : "Data", defaultValue : 0},
    "showValue" : {name : "showValue", type : "boolean", group : "Appearance", defaultValue : true},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>visible</code>.
 * The visibility of the ProgressIndicator. Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ProgressIndicator.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ProgressIndicator.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>barColor</code>.
 * The color of the ProgressIndicator bar.
 *
 * Default value is <code>NEUTRAL</code>
 *
 * @return {sap.ui.core.BarColor} the value of property <code>barColor</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getBarColor = function() {
	return this.getProperty("barColor");
};

/**
 * Setter for property <code>barColor</code>.
 *
 * Default value is <code>NEUTRAL</code> 
 *
 * @param {sap.ui.core.BarColor} oBarColor  new value for property <code>barColor</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ProgressIndicator.prototype.setBarColor = function(oBarColor) {
	this.setProperty("barColor", oBarColor);
	return this;
};


/**
 * Getter for property <code>displayValue</code>.
 * The text value to display in the ProgressIndicator. If not set, there will be nothing displayed.
 *
 * Default value is <code>0%</code>
 *
 * @return {string} the value of property <code>displayValue</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getDisplayValue = function() {
	return this.getProperty("displayValue");
};

/**
 * Setter for property <code>displayValue</code>.
 *
 * Default value is <code>0%</code> 
 *
 * @param {string} sDisplayValue  new value for property <code>displayValue</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ProgressIndicator.prototype.setDisplayValue = function(sDisplayValue) {
	this.setProperty("displayValue", sDisplayValue);
	return this;
};


/**
 * Getter for property <code>percentValue</code>.
 * The numerical value between 0 and 100 which determines the position of the ProgressIndicator bar.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>percentValue</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getPercentValue = function() {
	return this.getProperty("percentValue");
};

/**
 * Setter for property <code>percentValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iPercentValue  new value for property <code>percentValue</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ProgressIndicator.prototype.setPercentValue = function(iPercentValue) {
	this.setProperty("percentValue", iPercentValue);
	return this;
};


/**
 * Getter for property <code>showValue</code>.
 * Determines whether the current value should be rendered inside the bar.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showValue</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getShowValue = function() {
	return this.getProperty("showValue");
};

/**
 * Setter for property <code>showValue</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowValue  new value for property <code>showValue</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ProgressIndicator.prototype.setShowValue = function(bShowValue) {
	this.setProperty("showValue", bShowValue);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * The width of the ProgressIndicator.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.ProgressIndicator.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ProgressIndicator.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


// Start of sap/ui/commons/ProgressIndicator.js
/**
 * Function is called when ProgressIndicator is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.ProgressIndicator.prototype.onclick = function(oEvent) {

	// Set focus to whole ProgressIndicator control
	this.focus();

}
;
sap.ui.commons.ProgressIndicator.prototype.setEndBar = function () {

	var widthBar = this.getPercentValue();
	var widthBorder;
	var sBarColor = this.getBarColor();
	var time;

	this.oBar  = jQuery.sap.domById(this.getId() + '-bar');
	this.oEnd  = jQuery.sap.domById(this.getId() + '-end');
	this.oBox  = jQuery.sap.domById(this.getId() + '-box');

	jQuery(this.oEnd).removeClass('sapUiProgIndEndHidden');

	switch (sBarColor) {
		case "POSITIVE":
			jQuery(this.oEnd).addClass('sapUiProgIndPosEnd');
			break;
		case "NEGATIVE":
			jQuery(this.oEnd).addClass('sapUiProgIndNegEnd');
			break;
		case "CRITICAL":
			jQuery(this.oEnd).addClass('sapUiProgIndCritEnd');
			break;
		case "NEUTRAL":
			jQuery(this.oEnd).addClass('sapUiProgIndEnd');
			break;
		default:
			jQuery(this.oEnd).addClass('sapUiProgIndEnd');
			break;
	}

	if (widthBar > 100) {
		widthBorder = (10000 / widthBar) + '%';
	}
	else {
		widthBorder = '100%';
	}

	if (widthBar > 100) {
		time = (widthBar - 100) * 20;
	}
	else {
		time = (100 - widthBar) * 20;
	}

	jQuery(this.oBox).animate({width: widthBorder}, 0, 'linear');

	if(this.bRtl){
		jQuery(this.oEnd).animate({right: widthBorder}, time, 'linear');
	}
	else {
		jQuery(this.oEnd).animate({left: widthBorder}, time, 'linear');
	}

	jQuery(this.oBar).animate({width: widthBar + '%'}, time, 'linear');
	if(!this.oThis){
		this.oThis = jQuery.sap.byId(this.getId());
	}
	this.oThis.attr('aria-valuenow', widthBar + '%');

}
;
sap.ui.commons.ProgressIndicator.prototype.setEndBarGoesBack = function (iPercentValue) {

	var widthBar = this.getPercentValue();
	var widthBorder;
	var sBarColor = this.getBarColor();
	var time;

	this.oBar  = jQuery.sap.domById(this.getId() + '-bar');
	this.oEnd  = jQuery.sap.domById(this.getId() + '-end');
	this.oBox  = jQuery.sap.domById(this.getId() + '-box');

	if (iPercentValue > 100) {
		widthBorder = (10000 / iPercentValue) + '%';
	}
	else {
		widthBorder = '100%';
	}

	switch (sBarColor) {
		case "POSITIVE":
			jQuery(this.oEnd).removeClass('sapUiProgIndPosEnd');
			break;
		case "NEGATIVE":
			jQuery(this.oEnd).removeClass('sapUiProgIndNegEnd');
			break;
		case "CRITICAL":
			jQuery(this.oEnd).removeClass('sapUiProgIndCritEnd');
			break;
		case "NEUTRAL":
			jQuery(this.oEnd).removeClass('sapUiProgIndEnd');
			break;
		default:
			jQuery(this.oEnd).removeClass('sapUiProgIndEnd');
			break;
	}

	jQuery(this.oEnd).addClass('sapUiProgIndEndHidden');

	if (widthBar > 100) {
		time = (widthBar - 100) * 20;
	}
	else {
		time = (100 - widthBar) * 20;
	}

	jQuery(this.oBox).animate({width: widthBorder}, 0, 'linear');

	if(this.bRtl){
		jQuery(this.oEnd).animate({right: widthBorder}, time, 'linear');
	}
	else {
		jQuery(this.oEnd).animate({left: widthBorder}, time, 'linear');
	}

	jQuery(this.oBar).animate({width: widthBar + '%'}, time, 'linear');
	if(!this.oThis){
		this.oThis = jQuery.sap.byId(this.getId());
	}
	this.oThis.attr('aria-valuenow', widthBar + '%');

}

/**
 * Property setter for the PercentValue
 * A new rendering is not necessary, only the bar has to be moved.
 *
 * @param iPercentValue
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */;
sap.ui.commons.ProgressIndicator.prototype.setPercentValue = function(iPercentValue) {

	var widthBar = this.getPercentValue();
	var widthBorder;
	var sBarColor = this.getBarColor();

	this.oBar  = jQuery.sap.domById(this.getId() + '-bar');
	this.oEnd  = jQuery.sap.domById(this.getId() + '-end');
	this.oBox  = jQuery.sap.domById(this.getId() + '-box');

	var that = this;
	var time;

	if (iPercentValue > 100) {
		widthBorder = (10000 / iPercentValue) + '%';
	}
	else {
		widthBorder = '100%';
	}

	if(!this.oBar){
		// Not already rendered -> return and render
		time = iPercentValue * 20;
		this.setProperty('percentValue', iPercentValue, true); // No re-rendering!
		jQuery(this.oBar).animate({width: iPercentValue + '%'}, time, 'linear');
		return this;
	}

	if (iPercentValue > 100 && widthBar <= 100) {
		time = (100 - widthBar) * 20;
		this.setProperty( 'percentValue', iPercentValue, true ); // Do not render complete control again
		jQuery(this.oBar).animate({width: '100%'}, time, 'linear', function() {
		that.setEndBar();
		});
	}
	else if (iPercentValue <= 100 && widthBar > 100) {
		time = (widthBar - 100) * 20;
		this.setProperty( 'percentValue', iPercentValue, true ); // Do not render complete control again
		jQuery(this.oBar).animate({width: '100%'}, time, 'linear', function() {
		that.setEndBarGoesBack();
		});
	}
	else if (iPercentValue > 100 && widthBar > 100) {
		if (iPercentValue > widthBar) {
			time = (iPercentValue - widthBar) * 20;
		}
		else {
			time = (widthBar - iPercentValue) * 20;
		}
		widthBorder = (10000 / iPercentValue) + '%';
		this.setProperty( 'percentValue', iPercentValue, true ); // Do not render complete control again
		jQuery(this.oBox).animate({width: widthBorder}, 0, 'linear');

		if(this.bRtl){
			jQuery(this.oEnd).animate({right: widthBorder}, time, 'linear');
		}
		else {
			jQuery(this.oEnd).animate({left: widthBorder}, time, 'linear');
		}

		jQuery(this.oBar).animate({width: iPercentValue + '%'}, time, 'linear', function() {
		});
		if(!this.oThis){
			this.oThis = jQuery.sap.byId(this.getId());
		}
		this.oThis.attr('aria-valuenow', iPercentValue + '%');
	}
	else {
		if (iPercentValue > widthBar) {
			time = (iPercentValue - widthBar) * 20;
		}
		else {
			time = (widthBar - iPercentValue) * 20;
		}
		this.setProperty( 'percentValue', iPercentValue, true ); // Do not render complete control again
		jQuery(this.oBar).animate({width: iPercentValue + '%'}, time, 'linear');
		if(!this.oThis){
			this.oThis = jQuery.sap.byId(this.getId());
		}
		this.oThis.attr('aria-valuenow', iPercentValue + '%');
	}

	return this;
}