/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.mvc.JSView.
jQuery.sap.declare("sap.ui.core.mvc.JSView");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.mvc.View");

/**
 * Constructor for a new mvc/JSView.
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
 * For further parameters see {@link sap.ui.core.mvc.View#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * A View defined/constructed by JavaScript code.
 * @extends sap.ui.core.mvc.View
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.mvc.JSView = function (sId, mSettings) {
	sap.ui.core.mvc.View.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.mvc.JSView.prototype = jQuery.sap.newObject(sap.ui.core.mvc.View.prototype);

/*
 * Describe the sap.ui.core.mvc.JSView. 
 * Resulting metadata can be obtained via sap.ui.core.mvc.JSView.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.mvc.JSView", {

  // ---- object ----
  baseType : "sap.ui.core.mvc.View",
  publicMethods : [],

  // ---- control specific ----
  library : "sap.ui.core",
  properties : {},
  
  aggregations : {},
  associations : {},
  events : {}

});	


// Start of sap/ui/core/mvc/JSView.js
(function(){
	var mRegistry = {};
	/**
	 * Defines or creates an instance of a JavaScript view.
	 *
	 * The behavior of this method depends on the signature of the call and on the current context.
	 *
	 * <ul>
	 * <li>View Definition <code>sap.ui.jsview(sId, vView)</code>: Defines a view of the given name with the given 
	 * implementation. sId must be the views name, vView must be an object and can contain 
	 * implementations for any of the hooks provided by JSView</li>
	 * <li>View Instantiation <code>sap.ui.jsview(sId?, vView)</code>: Creates an instance of the view with the given name (and id).
	 * If no view implementation has been defined for that view name, a JavaScript module with the same name and with suffix "view.js" will be loaded
	 * and executed. The module should contain a view definition (1st. variant above). </li>
	 * </ul>
	 *
	 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
	 * be created automatically.
	 *
	 * @param {string} [sId] id of the newly created view, only allowed for instance creation
	 * @param {string | object} vView name or implementation of the view.
	 * @public
	 * @static
	 */
	sap.ui.jsview = function(sId, vView) {
		var mSettings = {};

		if (vView && typeof (vView) == "string") { // instantiation sap.ui.jsview("id","name")
			mSettings.viewName = vView;
			mSettings.controller = arguments[2];
			var oView = new sap.ui.core.mvc.JSView(sId, mSettings);
			return oView;

		} else if (vView && typeof (vView) == "object"){ // definition sap.ui.jsview("name",definitionObject)
			// sId is not given, but contains the desired value of sViewName
			mRegistry[sId] = vView;
			jQuery.sap.declare({modName:sId,type:"view"}, false);

		} else if (arguments.length == 1 && typeof(arguments[0]) == "string") { // instantiation sap.ui.jsview("name")
			mSettings.viewName = sId;
			mSettings.controller = arguments[1];
			/*** STEP 1: create View ***/
			var oView = mSettings.id ? new sap.ui.core.mvc.JSView(mSettings.id,mSettings): new sap.ui.core.mvc.JSView(mSettings);
			/*** Step 3B and 4B (create and connect controller) happen in View ***/
			return oView;
		} else {
			throw new Error("Wrong arguments! Either call sap.ui.jsview([sId,] sViewName) to instantiate a View or sap.ui.jsview(sViewName, oViewImpl) to define a View type.");
		}
	};

	sap.ui.core.mvc.JSView.prototype.initViewSettings = function (mSettings) {
		/*** require view definition if not yet done... ***/
		if (!mRegistry[mSettings.viewName]) {
			jQuery.sap.require({modName: mSettings.viewName, type: "view"});
		}
		/*** Step 2: extend() ***/
		jQuery.extend(this, mRegistry[mSettings.viewName]);
	};

	sap.ui.core.mvc.JSView.prototype.onControllerConnected = function(oController) {
		// no id preprocessing
		var fnOldIdPreprocessor = sap.ui.core.Element._fnIdPreprocessor;
		sap.ui.core.Element._fnIdPreprocessor = undefined;

		/*** Step 3A: get content ***/
		var oContent = this.createContent(oController);

		/*** Step 4A: setParent on content ***/
		if (oContent instanceof sap.ui.core.Control) {
			this.setAggregation("content", oContent);
		} else if (jQuery.isArray(oContent)) {
			for (var i = 0; i < oContent.length; i++) {
				this.addAggregation("content", oContent[i]);
			}
		} else {
			jQuery.sap.log.warning("JSView.createContent() must return a single control or an array of controls which is not the case for View '" + this.getId() + "'");
		}

		// restore id preprocessor
		sap.ui.core.Element._fnIdPreprocessor = fnOldIdPreprocessor; 
	};
	
}());