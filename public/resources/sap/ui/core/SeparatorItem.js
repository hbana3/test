/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.SeparatorItem.
jQuery.sap.declare("sap.ui.core.SeparatorItem");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Item");

/**
 * Constructor for a new SeparatorItem.
 * 
 * It accepts one JSON-like object (object literal) as parameter <code>mSettings</code> that can define values for any property, 
 * aggregation, association or event.<br/> 
 * If for a control a specific name is ambiguous (a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order.<br/> 
 * To resolve ambiguities, add an "aggregation:", "association:" or "event:" prefix to the key in the JSON object.<br/>
 * Allowed values are:
 * <ul>
 * <li>Properties
 * <ul></ul>
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
 * For further parameters see {@link sap.ui.core.Item#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * An Item that provides a visual separation
 * @extends sap.ui.core.Item
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.SeparatorItem = function (sId, mSettings) {
	sap.ui.core.Item.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.SeparatorItem.prototype = jQuery.sap.newObject(sap.ui.core.Item.prototype);

/*
 * Describe the sap.ui.core.SeparatorItem. 
 * Resulting metadata can be obtained via sap.ui.core.SeparatorItem.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.SeparatorItem", {

  // ---- object ----
  baseType : "sap.ui.core.Item",
  publicMethods : [],

  // ---- control specific ----
  library : "sap.ui.core",
  properties : {},
  
  aggregations : {},
  associations : {},
  events : {}

});	


// Start of sap/ui/core/SeparatorItem.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.core.SeparatorItem.prototype.init = function(){
//   // do something for initialization...
//};