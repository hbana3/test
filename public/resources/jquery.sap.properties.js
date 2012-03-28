/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides access to Java-like properties files
jQuery.sap.declare("jquery.sap.properties");
jQuery.sap.require("jquery.sap.sjax");

(function() {

	// Javadoc for private inner class "Properties" - this list of comments is intentional!
	/**
	 * @interface  Represents a list of properties (key/value pairs).
	 *
	 * Each key and its corresponding value in the property list is a string.
	 * Values are unicode escaped \ue0012.
	 * Keys are case-sensitive and only alpha-numeric characters with a leading character are allowed.
	 *
	 * Use {@link jQuery.sap.properties} to create an instance of jQuery.sap.util.Properties.
	 *
	 * The getProperty method is used to retrieve a value from the list.
	 * The setProperty method is used to store or change a property in the list.
	 * Additionally, the getKeys method can be used to retrieve an array of all keys that are
	 * currently in the list.
	 *
	 * @author SAP AG
	 * @version 1.2.0
	 * @since 0.9.0
	 * @name jQuery.sap.util.Properties
	 * @public
	 */
	/**
	 * Returns the value of a given key. Optionally, a given default value is returned if the requested key is not in the list.
	 * @param {string} sKey The key of the property
	 * @param {string} [sDefaultValue] Optional, the default value if the requested key is not in the list.
	 * @return {string} The value of a given key. The default value (if given) is returned if the requested key is not in the list.
	 *
	 * @function
	 * @name jQuery.sap.util.Properties.prototype.getProperty
	 */
	/**
	 * Returns an array of all keys in the property list.
	 * @return {array} All keys in the property list.
	 *
	 * @function
	 * @name jQuery.sap.util.Properties.prototype.getKeys
	 */
	/**
	 * Adds or changes a given key to/in the list.
	 * @param {string} sKey The key of the property
	 * @param {string} sValue The value for the key with unicode encoding.
	 *
	 * @function
	 * @name jQuery.sap.util.Properties.prototype.setProperty
	 */
	/**
	 * Creates and returns a clone of the property list.
	 * @return {jQuery.sap.util.Properties} A clone of the property list
	 *
	 * @function
	 * @name jQuery.sap.util.Properties.prototype.clone
	 */

	/*
	 * Implements jQuery.sap.util.Properties
	 */
	var Properties = function() {
		this.mProperties = {};
		this.aKeys = [];
	};

	Properties.prototype = {};

	/*
	 * Implements jQuery.sap.util.Properties.prototype.getProperty
	 */
	Properties.prototype.getProperty = function(sKey, sDefaultValue) {
		var sValue = this.mProperties[sKey];
		if (typeof(sValue)=="string") {
			return sValue;
		}
		else if(sDefaultValue) {
			return sDefaultValue;
		}
		return "";
	};

	/*
	 * Implements jQuery.sap.util.Properties.prototype.getKeys
	 */
	Properties.prototype.getKeys = function() {
		return this.aKeys;
	};

	/*
	 * Implements jQuery.sap.util.Properties.prototype.setProperty
	 */
	Properties.prototype.setProperty = function(sKey, sValue) {
		if (typeof(sValue) != "string") {
			return;

		}		if (typeof(this.mProperties[sKey])!="string") {
			this.aKeys.push(sKey);
		}
		this.mProperties[sKey] = sValue;
	};

	/*
	 * Implements jQuery.sap.util.Properties.prototype.clone
	 */
	Properties.prototype.clone = function() {
		var oClone = new Properties();
		oClone.mProperties = jQuery.extend({}, this.mProperties);
		oClone.aKeys = jQuery.merge([], this.aKeys);
		return oClone;
	};

	/*
	 * Saves the property list to a given URL using a POST request.
	 */
	//sap.ui.resource.Properties.prototype.save = function(sUrl) {
	//	return jQuery.sap.syncPost(sUrl, this.mProperties);
	//};

	/*
	 * Parses the given text sText and sets the properties
	 * in the properties object oProp accordingly.
	 * @param {string} sText the text to parse
	 * @param oProp the properties object to fill
	 * @private
	 */
	function parse(sText, oProp) {
		oProp.mProperties = {};
		oProp.aKeys = [];

		var aLines = sText.split(/\r\n|\r|\n/);
		for (var i = 0; i < aLines.length; i++) {
			var sLine = aLines[i];
			sLine = sLine.replace(/^\s+/g,"");
			//empty line
			if (sLine == "") {
				continue;
			}
			//comment line
			if (sLine.indexOf("#") == 0 || sLine.indexOf("!") == 0) {
				continue;
			}
			while (sLine.lastIndexOf("\\") == sLine.length-1) {
				sLine = sLine.substring(0,sLine.length-1);
				//read lines ahead
				i++;
				var sNewLine = aLines[i].replace(/^\s+/g,"");
				if (sNewLine == "" || sNewLine.indexOf("#") == 0 || sNewLine.indexOf("!") == 0) { //empty lines and comments in the next line break
					break;
				}
				sLine += sNewLine;
			}
			var iSeperatorPos1 = sLine.indexOf("="),
				iSeperatorPos2 = sLine.indexOf(":"),
				iSeperatorPos = 0;
			if ((iSeperatorPos1 < iSeperatorPos2 && iSeperatorPos1 > -1) || iSeperatorPos2 == -1) {
				iSeperatorPos = iSeperatorPos1;
			} else {
				iSeperatorPos = iSeperatorPos2;
			}
			if (iSeperatorPos == -1) {
				continue;
			}
			var sKey = sLine.substring(0,iSeperatorPos).replace(/^\s+|\s+$/g, "");
			oProp.aKeys.push(sKey);
			var sValue = "";
			sValue = sLine.substring(iSeperatorPos+1).replace(/^\s+|\s+$/g, "");
			if (sValue.indexOf("\\") >= 0) {
				sValue = eval("\"" + sValue.replace(/"/g,"\\\"") + "\"");
			}
			oProp.mProperties[sKey] = sValue;
		}
	}

	/**
	 * Creates and returns a new instance of {@link jQuery.sap.util.Properties}.
	 *
	 * If option 'url' is passed, immediately a load request for the given target is triggered.
	 * A property file that is loaded can contain comments with a leading ! or #.
	 * The loaded property list does not contain any comments.
	 *
	 * <b>Example for loading a property file:</b>
	 * <pre>
	 *  jQuery.sap.properties({url : "../myProperty.properties"});
	 * </pre>
	 *
	 * <b>Example for creating an empty properties instance:</b>
	 * <pre>
	 *  jQuery.sap.properties();
	 * </pre>
	 *
	 * <b>Examples for getting and setting properties:</b>
	 * <pre>
	 *	var oProperties = jQuery.sap.properties();
	 *	oProperties.setProperty("KEY_1","Test Key");
	 *	var sValue1 = oProperties.getProperty("KEY_1");
	 *	var sValue2 = oProperties.getProperty("KEY_2","Default");
	 * </pre>
	 *
	 * @public
	 * @param {object} [mParams] Parameters used to initialize the property list
	 * @param {string} [mParams.url] The URL to the .properties file which should be loaded.
	 * @return {jQuery.sap.util.Properties} A new property list instance
	 */
	jQuery.sap.properties = function properties(mParams) {
		var oProp = new Properties();
		mParams = jQuery.extend({url: undefined}, mParams);
		if (typeof(mParams.url) == "string"){
			var sText = jQuery.sap.syncGetText(mParams.url, null, undefined);
			if (typeof(sText) == "string") {
				parse(sText, oProp);
			}
		}
		return oProp;
	};

}());
