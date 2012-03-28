/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.Configuration
jQuery.sap.declare("sap.ui.core.Configuration");
jQuery.sap.require("sap.ui.base.Object");

/**
 * Creates a new Configuration object.
 *
 * @class Collects and stores the configuration of the current environment.
 *
 * The Configuration is initialized once when the {@link sap.ui.core.Core} is created.
 * There are different ways to set the environment configuration (in ascending priority):
 * <ol>
 * <li>System defined defaults
 * <li>Server wide defaults, read from /sap-ui-config.json
 * <li>Properties of the global configuration object window["sap-ui-config"]
 * <li>A configuration string in the data-sap-ui-config attribute of the bootstrap tag
 * <li>Individual data-sap-ui-xyz attributes of the bootstrap tag
 * <li>Using URL parameters
 * <li>Setters in this Configuration object (only for some parameters)
 * </ol>
 *
 * That is, attributes of the DOM reference override the system defaults, URL parameters
 * override the DOM attributes (where empty URL parameters set the parameter back to its
 * system default). Calling setters at runtime will override any previous settings
 * calculated during object creation.
 *
 * The naming convention for parameters is:
 * <ul>
 * <li>in the URL : sap-ui-<i>PARAMETER-NAME</i>="value"
 * <li>in the DOM : data-sap-ui-<i>PARAMETER-NAME</i>="value"
 * </ul>
 * where <i>PARAMETER-NAME</i> is the name of the parameter in lower case.
 *
 * Values of boolean parameters are case insensitive where "true" and "x" are interpreted as true.
 *
 * @extends sap.ui.base.Object
 * @author Frank Weigel (Martin Schaus)
 * @constructor
 * @public
 */
sap.ui.core.Configuration = function() {

	// definition of supported settings
	var M_SETTINGS = {
		"theme"           : { type : "string",   defaultValue : "base" },
		"language"        : { type : "string",   defaultValue : navigator.language || navigator.browserLanguage || navigator.userLanguage },
		// "timezone"      : "UTC",
		"accessibility"   : { type : "boolean",  defaultValue : true },
		"animation"       : { type : "boolean",  defaultValue : true },
		"rtl"             : { type : "boolean",  defaultValue : false },
		"debug"           : { type : "boolean",  defaultValue : false },
		"noConflict"      : { type : "boolean",  defaultValue : false,     noUrl:true },
		"noDuplicateIds"  : { type : "boolean",  defaultValue : true },
		"trace"           : { type : "boolean",  defaultValue : false,     noUrl:true },
		"modules"         : { type : "string[]", defaultValue : [],        noUrl:true },
		"areas"           : { type : "string[]", defaultValue : null,      noUrl:true },
		// "libs"			  : { type : "string[]", defaultValue : [],        noUrl:true }, deprecated, handled below
		"onInit"          : { type : "code",     defaultValue : undefined, noUrl:true },
		"uidPrefix"       : { type : "string",   defaultValue : "__",      noUrl:true },
		"ignoreUrlParams" : { type : "boolean",  defaultValue : false,     noUrl:true },
		"weinreServer"	  : { type : "string",   defaultValue : "",	       noUrl:true },
		"weinreId"		  : { type : "string",   defaultValue : "" },
		"xx-loadAllMode"  : { type : "boolean",  defaultValue : false,     noUrl:true },
		"xx-preload"      : { type : "string",   defaultValue : '',        noUrl:true },
		"xx-test-mobile"   : { type : "boolean",  defaultValue : false }
		
	};

	/* Object that carries the real configuration data */
	var config = this;

	function setValue(sName, sValue) {
		if ( typeof sValue === "undefined" || sValue === null ) {
			return;
		}
		switch(M_SETTINGS[sName].type) {
		case "boolean":
			if ( typeof sValue === "string" ) {
				if (M_SETTINGS[sName].defaultValue) {
					config[sName] = sValue.toLowerCase() != "false";
				} else {
					config[sName] = sValue.toLowerCase() === "true" || sValue.toLowerCase() === "x";
				}
			} else {
				// boolean etc.
				config[sName] = !!sValue;
			}
			break;
		case "string":
			config[sName] = "" + sValue; // enforce string
			break;
		case "code":
			config[sName] = typeof sValue === "function" ? sValue : "" + sValue;
			break;
		case "string[]":
			if ( jQuery.isArray(sValue) ) {
				config[sName] = sValue;
			} else if ( typeof sValue === "string" ) {
				config[sName] = jQuery.map(sValue.split(/[ ,;]/), function($) { return jQuery.trim($); });
			} else {
				throw new Error("unsupported value");
			}
			break;
		default:
			throw new Error("illegal state");
		}
	}
 
	// 1. collect the defaults
	for (var n in M_SETTINGS ) {
		config[n] = M_SETTINGS[n].defaultValue;
	}

	// 2. read server wide sapui5 configuration
	var sUrl = "/sap-ui-config.json"; // TODO: make configurable
	var oResponse = jQuery.sap.sjax({url:sUrl});
	if (oResponse.success) {
		var oServerCfg = {};
		if (typeof oResponse.data == "string") {
			try {
				oServerCfg = jQuery.parseJSON(oResponse.data);
			} catch(ex) {
				jQuery.sap.log.warning("Error when parsing the JSON configuration content from " + sUrl + " : " + ex);
			}
		} else {
			oServerCfg = oResponse.data;
		}
		for (var n in M_SETTINGS) {
			if (oServerCfg[n]) {
				setValue(n, oServerCfg[n]);
			}
		}
	}
	
	// 3.-5. apply settings from global config object (already merged with script tag attributes)
	var oCfg = window["sap-ui-config"] || {};
	oCfg.oninit = oCfg.oninit || oCfg["evt-oninit"];
	for (var n in M_SETTINGS) {
		setValue(n, oCfg[n.toLowerCase()]);
	}
	// if libs are configured, convert them to modules and prepend them to the existing modules list
	if ( oCfg.libs ) {
		config.modules = jQuery.map(oCfg.libs.split(","), function($) { return jQuery.trim($)+".library"; }).concat(config.modules);
	}

	// 6. apply the settings from the url (only if not blocked by app configuration)
	if ( !config.ignoreUrlParams ) {
		var sUrlPrefix = "sap-ui-";
		var oUriParams = jQuery.sap.getUriParameters();
		for (var n in M_SETTINGS) {
			if ( M_SETTINGS[n].noUrl ) {
				continue;
			}
			var sValue = oUriParams.get(sUrlPrefix + n);
			if (sValue === "") {
				//empty URL parameters set the parameter back to its system default
				config[n] = M_SETTINGS[n].defaultValue;
			} else {
				//sets the value (null or empty value ignored)
				setValue(n, sValue);
			}
		}
	}

	for (var n in M_SETTINGS) {
		if ( config[n] !== M_SETTINGS[n].defaultValue ) {
			jQuery.sap.log.info("  " + n + " = " + config[n]);
		}
	}
};

sap.ui.core.Configuration.prototype = jQuery.sap.newObject(sap.ui.base.Object.prototype);

sap.ui.base.Object.defineClass("sap.ui.core.Configuration", {
	baseType : "sap.ui.base.Object",
	publicMethods : ["getTheme", /*"setTheme", */"getLanguage", "getAccessibility", "getAnimation", "getApplication", "getRTL", "getDebug", "getNoDuplicateIds", "getUIDPrefix", "getWeinreServer", "getWeinreId"]
});

/**
 * Returns the theme name
 * @return {string} the theme name
 * @public
 */
sap.ui.core.Configuration.prototype.getTheme = function () {
	return this.theme;
};

/**
 * Allows setting the theme name
 * @param {string} sTheme the theme name
 * @return {sap.ui.core.Configuration} <code>this</code> to allow method chaining
 * @private
 */
sap.ui.core.Configuration.prototype.setTheme = function (sTheme) {
	this.theme = sTheme;
	return this;
};

/**
 * Returns the language string with language and country code
 * @return {string} the language string with language and country code
 * @public
 */
sap.ui.core.Configuration.prototype.getLanguage = function () {
	return this.language;
};

/**
 * Returns whether the accessibility mode is used or not
 * @return {boolean} whether the accessibility mode is used or not
 * @public
 */
sap.ui.core.Configuration.prototype.getAccessibility = function () {
	return this.accessibility;
};

/**
 * Returns whether the animations are globally used
 * @return {boolean} whether the animations are globally used
 * @public
 */
sap.ui.core.Configuration.prototype.getAnimation = function () {
	return this.animation;
};

/**
 * Returns whether the page uses the rtl test direction
 * @return {boolean} whether the page uses the rtl test direction
 * @public
 */
sap.ui.core.Configuration.prototype.getRTL = function () {
	return this.rtl;
};

/**
 * Returns whether the page runs in debug mode
 * @return {boolean} whether the page runs in debug mode
 * @public
 */
sap.ui.core.Configuration.prototype.getDebug = function () {
	return this.debug;
};

/**
 * Returns whether there should be an exception on any duplicate element IDs
 * @return {boolean} whether there should be an exception on any duplicate element IDs
 * @public
 */
sap.ui.core.Configuration.prototype.getNoDuplicateIds = function () {
	return this.noDuplicateIds;
};

/**
 * Whether a trace view should be shown or not.
 * Has only an effect when the sap-ui-debug module has been loaded
 * either by explicitly loading it or by setting the 'debug' option to true.
 * @return {boolean} whether a trace view should be shown
 */
sap.ui.core.Configuration.prototype.getTrace = function () {
	return this.trace;
};

/**
 * Prefix to be used for automatically generated control IDs.
 * Default is a double underscore "__".
 *
 * @returns {string} the prefix to be used
 * @public
 */
sap.ui.core.Configuration.prototype.getUIDPrefix = function() {
	return this.uidPrefix;
};

/**
 * WEINRE server URL
 *
 * @returns {string} the base URL of the WEINRE server
 * @public
 */
sap.ui.core.Configuration.prototype.getWeinreServer = function() {
	return this.weinreServer;
};

/**
 * WEINRE session ID
 *
 * @returns {string} the ID to use for the WEINRE server
 * @public
 */
sap.ui.core.Configuration.prototype.getWeinreId = function() {
	return this.weinreId;
};