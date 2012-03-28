/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.SearchProvider.
jQuery.sap.declare("sap.ui.commons.SearchProvider");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new SearchProvider.
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
 * <li>suggestUrl : string</li>
 * <li>suggestType : string</li>
 * <li>icon : string</li></ul>
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
 * For further parameters see {@link sap.ui.core.Element#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * A SearchProvider which can be attached to a Search Field.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.SearchProvider = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.SearchProvider.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.SearchProvider. 
 * Resulting metadata can be obtained via sap.ui.commons.SearchProvider.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.SearchProvider", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getSuggestUrl", "setSuggestUrl", "getSuggestType", "setSuggestType", "getIcon", "setIcon"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "suggestUrl" : {name : "suggestUrl", type : "string", group : "Misc", defaultValue : null},
    "suggestType" : {name : "suggestType", type : "string", group : "Misc", defaultValue : 'json'},
    "icon" : {name : "icon", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>suggestUrl</code>.
 * The URL for suggestions of the search provider. As placeholder for the concrete search queries '{searchTerms}' must be used. For cross domain requests maybe a proxy must be used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>suggestUrl</code>
 * @public
 * 
 */
sap.ui.commons.SearchProvider.prototype.getSuggestUrl = function() {
	return this.getProperty("suggestUrl");
};

/**
 * Setter for property <code>suggestUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSuggestUrl  new value for property <code>suggestUrl</code>
 * @return {sap.ui.commons.SearchProvider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.SearchProvider.prototype.setSuggestUrl = function(sSuggestUrl) {
	this.setProperty("suggestUrl", sSuggestUrl);
	return this;
};


/**
 * Getter for property <code>suggestType</code>.
 * The type of data which is provided by the given suggestUrl: either 'json' or 'xml'.
 *
 * Default value is <code>json</code>
 *
 * @return {string} the value of property <code>suggestType</code>
 * @public
 * 
 */
sap.ui.commons.SearchProvider.prototype.getSuggestType = function() {
	return this.getProperty("suggestType");
};

/**
 * Setter for property <code>suggestType</code>.
 *
 * Default value is <code>json</code> 
 *
 * @param {string} sSuggestType  new value for property <code>suggestType</code>
 * @return {sap.ui.commons.SearchProvider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.SearchProvider.prototype.setSuggestType = function(sSuggestType) {
	this.setProperty("suggestType", sSuggestType);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * Icon of the Search Provider
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.SearchProvider.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.SearchProvider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.SearchProvider.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


// Start of sap/ui/commons/SearchProvider.js
jQuery.sap.require("jquery.sap.encoder");

/**
 * Called by the search field, when suggestions are requested.
 *
 * @private
 */
sap.ui.commons.SearchProvider.prototype._doSuggest = function(oSearchField, sSuggestValue) {
	var sUrl = this.getSuggestUrl();
	if(!sUrl) {
		return;
	}
	sUrl = sUrl.replace("{searchTerms}", jQuery.sap.encodeURL(sSuggestValue));

	var sType = this.getSuggestType();
	var fSuccess;
	if(sType && sType.toLowerCase() === "xml"){
		//Docu: http://msdn.microsoft.com/en-us/library/cc891508%28v=vs.85%29.aspx
		sType = "xml";
		fSuccess = function(data){
			var jXMLDocument = jQuery(data);
			var jItems = jXMLDocument.find("Text");
			var aSuggestions = [];
			jItems.each(function(){
				aSuggestions.push(jQuery(this).text());
			});
			oSearchField.suggest(sSuggestValue, aSuggestions);
		};
	}else{
		//Docu: http://www.opensearch.org/Specifications/OpenSearch/Extensions/Suggestions/1.1#Response_format
		sType = "json";
		fSuccess = function(data){
			oSearchField.suggest(sSuggestValue, data[1]);
		};
	}
	
	jQuery.ajax({
		url: sUrl,
		dataType: sType,
		success: fSuccess,
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			jQuery.sap.log.fatal("The following problem occurred: " + textStatus, XMLHttpRequest.responseText + ","
					+ XMLHttpRequest.status);
		}
	});
};
