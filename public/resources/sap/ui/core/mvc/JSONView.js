/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.mvc.JSONView.
jQuery.sap.declare("sap.ui.core.mvc.JSONView");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.mvc.View");

/**
 * Constructor for a new mvc/JSONView.
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
 * A View defined using JSON.
 * @extends sap.ui.core.mvc.View
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.mvc.JSONView = function (sId, mSettings) {
	sap.ui.core.mvc.View.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.mvc.JSONView.prototype = jQuery.sap.newObject(sap.ui.core.mvc.View.prototype);

/*
 * Describe the sap.ui.core.mvc.JSONView. 
 * Resulting metadata can be obtained via sap.ui.core.mvc.JSONView.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.mvc.JSONView", {

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


// Start of sap/ui/core/mvc/JSONView.js
(function(){

	/**
	 * Creates a JSON view of the given name and id.
	 *
     * The <code>viewName</code> must either correspond to an JSON module that can be loaded
	 * via the module system (viewName + suffix ".view.json") and which defines the view or must
	 * be a configuration object for a view.
	 * The configuration object can have a vieName, viewContent and a controller property. The viewName
	 * behaves as described above. ViewContent can hold the view description as JSON string. The controller
	 * property can hold an controller instance. If a controller instance is given it overrides the
	 * controller defined in the view.
	 * 
	 * Like with any other control, an id is optional and will be created when missing.
	 *
	 * @param {string} [sId] id of the newly created view
	 * @param {string | object} vView name of the view or view configuration as described above.
	 * @public
	 * @static
	 */
	sap.ui.jsonview = function(sId, vView) {
		var mSettings = {};
		if (vView) {
			if (typeof(vView) == "string") {
				mSettings.viewName = vView;
			}
			else {
				mSettings.viewName = vView.viewName;
				mSettings.controller = vView.controller;
				mSettings.viewContent = vView.viewContent;
			}
			return new sap.ui.core.mvc.JSONView(sId, mSettings);
		} else {
			if (typeof(sId) == "string") {
				mSettings.viewName = sId;
			}
			else {
				mSettings.viewName = sId.viewName;
				mSettings.controller = sId.controller;
				mSettings.viewContent = sId.viewContent;
			}
			return new sap.ui.core.mvc.JSONView(mSettings);
		}
	};
	sap.ui.core.mvc.JSONView.prototype.initViewSettings = function(mSettings) {
		if (!mSettings) {
			throw new Error("mSettings must be given");
		}

		// View template handling - no JSON template given
		if (mSettings.viewName && mSettings.viewContent) {
			throw new Error("View name and view content are given. There is no point in doing this, so please decide.");
		} else if (!mSettings.viewName && !mSettings.viewContent) {
			throw new Error("Neither view name nor view content is given. One of them is required.");
		}

		if (mSettings.viewName) {
			this._loadTemplate(mSettings.viewName);
		} else if (mSettings.viewContent) {
			this._oJSONView = jQuery.parseJSON(mSettings.viewContent);
		} else {
			// does not happen, already checked
		}
		
		if(this._oJSONView.resourceBundleName || this._oJSONView.resourceBundleUrl) {
			var model = new sap.ui.model.resource.ResourceModel({bundleName:this._oJSONView.resourceBundleName, bundleUrl:this._oJSONView.resourceBundleUrl});
			this.setModel(model, this._oJSONView.resourceBundleAlias);
		}

	};

	sap.ui.core.mvc.JSONView.prototype.createControls = function() {
		for (var i = 0; i < this._oJSONView.content.length; i++) {
			var oSettings = this._oJSONView.content[i];
			var oClass = jQuery.sap.getObject(oSettings.Type);
			//var oControl = new oClass(oSettings, this._oController);

			var oControl = new oClass(oSettings);
			this.addAggregation("content", oControl);
		}
	};


	sap.ui.core.mvc.JSONView.prototype.onControllerConnected = function(oController) {
		var that = this,
			oController = this.oController;
		// preprocess 'mSettings' for setting the controller as Listener for defined events
		// => make sure to store old preprocessor in case of nested views
		var fnOldSettingPreprocessor = sap.ui.core.Element._fnSettingsPreprocessor;
		// TODO how to avoid usage of this preprocessor in controls that are not part of this view (eg. embedded XMLView or JSView)?
		sap.ui.core.Element._fnSettingsPreprocessor = function(oSettings) {
			var oMetadata = this.getMetadata(),
			aValidKeys = oMetadata.getJSONKeys(),
			sKey, oValue, oKeyInfo;
			for(sKey in oSettings) {
				// get info object for the key
				if ( oKeyInfo = aValidKeys[sKey] ) {
					oValue = oSettings[sKey];
					switch(oKeyInfo._iKind) {
					case 3: // SINGLE ASSOCIATIONS
						// prefix the association ids with the view id
						oSettings[sKey] = that.getId() + "--" + oValue;
						break;
					case 5: // EVENTS
						if ( typeof oSettings[sKey] === "string" ) {
							oSettings[sKey] = [oController[oSettings[sKey]], oController];
						}
						break;
					}
				}
			}
		};
		// parse
		this.createControls();
		// restore SettingsPreprocessor
		sap.ui.core.Element._fnSettingsPreprocessor = fnOldSettingPreprocessor;
	};

	sap.ui.core.mvc.JSONView.prototype._loadTemplate = function(sTemplateName) {
		var url = jQuery.sap.getModulePath(sTemplateName, ".view.json");

		var response = jQuery.sap.sjax({
			url : url,
			dataType: 'json'
		});
		this._oJSONView = response.data;
		if (!this._oJSONView) {
			throw new Error("View definition could not be loaded from " + url + ". Check for 'file not found' errors.");
		}
	};

	sap.ui.core.mvc.JSONView.prototype.getControllerName = function() {
		return this._oJSONView.controllerName;
	};

}());