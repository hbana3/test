/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides encoding functions for JavaScript.
jQuery.sap.declare("jquery.sap.encoder", false);

(function(){

	/*
	 * Encoding according to the Secure Programming Guide
	 * https://wiki.wdf.sap.corp/wiki/display/NWCUIAMSIM/XSS+Secure+Programming+Guide
	 */

	/**
	 * Create hex and pad to length
	 * @private
	 */
	function hex(iChar, iLength) {
		var sHex = iChar.toString(16);
		if (iLength) {
			while (iLength > sHex.length) {
				sHex = "0" + sHex;
			}
		}
		return sHex;
	}

	/**
	 * RegExp and escape function for HTML escaping
	 */
	var rHtml = /[\x00-\x08\x11\x12\x14-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,
		rHtmlReplace = /[\x00-\x08\x11\x12\x14-\x1f\x7f-\x9f]/,
		mHtmlLookup = {
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;",
			"\"": "&quot;"
		};

	var fHtml = function(sChar) {
		var sEncoded = mHtmlLookup[sChar];
		if (!sEncoded) {
			if (rHtmlReplace.test(sChar)) {
				sEncoded = "&#xfffd;";
			}
			else {
				sEncoded = "&#x" + hex(sChar.charCodeAt(0)) + ";";
			}
			mHtmlLookup[sChar] = sEncoded;
		}
		return sEncoded;
	};

	/**
	 * Encode the string for inclusion into HTML content/attribute
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 */
	jQuery.sap.encodeHTML = function(sString) {
		return sString.replace(rHtml, fHtml);
	};

	/**
	 * Encode the string for inclusion into XML content/attribute
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 */
	jQuery.sap.encodeXML = function(sString) {
		return sString.replace(rHtml, fHtml);
	};

	/**
	 * Encode the string for inclusion into HTML content/attribute.
	 * Old name "escapeHTML" kept for backward compatibility
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 * @deprecated
	 */
	jQuery.sap.escapeHTML = function(sString) {
		return sString.replace(rHtml, fHtml);
	};

	/**
	 * RegExp and escape function for JS escaping
	 */
	var rJS = /[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,
		mJSLookup = {};

	var fJS = function(sChar) {
		var sEncoded = mJSLookup[sChar];
		if (!sEncoded) {
			var iChar = sChar.charCodeAt(0);
			if (iChar < 256) {
				sEncoded = "\\x" + hex(iChar, 2);
			}
			else {
				sEncoded = "\\u" + hex(iChar, 4);
			}
			mJSLookup[sChar] = sEncoded;
		}
		return sEncoded;
	};

	/**
	 * Encode the string for inclusion into a JS string literal
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 */
	jQuery.sap.encodeJS = function(sString) {
		return sString.replace(rJS, fJS);
	};

	/**
	 * Encode the string for inclusion into a JS string literal.
	 * Old name "escapeJS" kept for backward compatibility
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 */
	jQuery.sap.escapeJS = function(sString) {
		return sString.replace(rJS, fJS);
	};

	/**
	 * RegExp and escape function for URL escaping
	 */
	var rURL = /[\x00-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,
		mURLLookup = {};

	var fURL = function(sChar) {
		var sEncoded = mURLLookup[sChar];
		if (!sEncoded) {
			var iChar = sChar.charCodeAt(0);
			if (iChar < 128) {
				sEncoded = "%" + hex(iChar, 2);
			}
			else if (iChar < 2048) {
				sEncoded = "%" + hex((iChar >> 6) | 192, 2) +
						   "%" + hex((iChar & 63) | 128, 2);
			}
			else {
				sEncoded = "%" + hex((iChar >> 12) | 224, 2) +
						   "%" + hex(((iChar >> 6) & 63) | 128, 2) +
						   "%" + hex((iChar & 63) | 128, 2);
			}
			mURLLookup[sChar] = sEncoded;
		}
		return sEncoded;
	};

	/**
	 * Encode the string for inclusion into an URL parameter
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 */
	jQuery.sap.encodeURL = function(sString) {
		return sString.replace(rURL, fURL);
	};

	/**
	 * RegExp and escape function for CSS escaping
	 */
	var rCSS = /[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xff\u2028\u2029][0-9A-Fa-f]?/g;

	var fCSS = function(sChar) {
		var iChar = sChar.charCodeAt(0);
		if (sChar.length == 1) {
			return "\\" + hex(iChar);
		}
		else {
			return "\\" + hex(iChar) + " " + sChar.substr(1);
		}
	};

	/**
	 * Encode the string for inclusion into CSS string literals or identifiers
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 */
	jQuery.sap.encodeCSS = function(sString) {
		return sString.replace(rCSS, fCSS);
	};


}());