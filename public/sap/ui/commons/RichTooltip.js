/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RichTooltip.
jQuery.sap.declare("sap.ui.commons.RichTooltip");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.TooltipBase");

/**
 * Constructor for a new RichTooltip.
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
 * <li>title : string</li>
 * <li>imageSrc : string</li></ul>
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
 * For further parameters see {@link sap.ui.core.TooltipBase#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * 
 * Is used to provide tool tips that can have long text, image and title. This tool tip extends the TooltipBase.
 * 
 * @extends sap.ui.core.TooltipBase
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.RichTooltip = function (sId, mSettings) {
	sap.ui.core.TooltipBase.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.RichTooltip.prototype = jQuery.sap.newObject(sap.ui.core.TooltipBase.prototype);

/*
 * Describe the sap.ui.commons.RichTooltip. 
 * Resulting metadata can be obtained via sap.ui.commons.RichTooltip.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.RichTooltip", {

  // ---- object ----
  baseType : "sap.ui.core.TooltipBase",
  publicMethods : [
    // properties 
    "getTitle", "setTitle", "getImageSrc", "setImageSrc"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "title" : {name : "title", type : "string", group : "Misc", defaultValue : null},
    "imageSrc" : {name : "imageSrc", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>title</code>.
 * Tool tip title to be displayed in the header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RichTooltip.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};


/**
 * Getter for property <code>imageSrc</code>.
 * If RichTooltip contains an image, this property is used to define the source path.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>imageSrc</code>
 * @public
 * 
 */
sap.ui.commons.RichTooltip.prototype.getImageSrc = function() {
	return this.getProperty("imageSrc");
};

/**
 * Setter for property <code>imageSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sImageSrc  new value for property <code>imageSrc</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RichTooltip.prototype.setImageSrc = function(sImageSrc) {
	this.setProperty("imageSrc", sImageSrc);
	return this;
};


// Start of sap/ui/commons/RichTooltip.js
/**
 * Returns the DOM reference of the Tooltip. There shall be only one DOM instance to reduce memory usage
 * (one should never see multiple RichTooltips at once...). So the ID is hardcoded.
 *
 * @return DOM reference
 * @private
*/
sap.ui.commons.RichTooltip.prototype.getDomRef = function() {
	return jQuery.sap.domById("sap-ui-rtt");
};