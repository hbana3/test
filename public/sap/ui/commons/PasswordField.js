/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.PasswordField.
jQuery.sap.declare("sap.ui.commons.PasswordField");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");

/**
 * Constructor for a new PasswordField.
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
 * For further parameters see {@link sap.ui.commons.TextField#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * This Control is basically a text field with masked characters.
 * @extends sap.ui.commons.TextField
 *
 * @author Michael Sobczak 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.PasswordField = function (sId, mSettings) {
	sap.ui.commons.TextField.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.PasswordField.prototype = jQuery.sap.newObject(sap.ui.commons.TextField.prototype);

/*
 * Describe the sap.ui.commons.PasswordField. 
 * Resulting metadata can be obtained via sap.ui.commons.PasswordField.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.PasswordField", {

  // ---- object ----
  baseType : "sap.ui.commons.TextField",
  publicMethods : [],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {},
  
  aggregations : {},
  associations : {},
  events : {}

});	


// Start of sap/ui/commons/PasswordField.js
