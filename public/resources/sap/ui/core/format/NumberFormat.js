/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.format.NumberFormat
jQuery.sap.declare("sap.ui.core.format.NumberFormat");

/**
 * Format classes
 *
 * @namespace
 * @name sap.ui.core.format
 * @public
 */

/**
 * Constructor for NumberFormat
 *
 * @class
 * The NumberFormat is a static class for formatting and parsing numeric values according
 * to a set of format options.
 * 
 * Supported format options:
 * - minIntegerDigits
 * - maxIntegerDigits
 * - minFractionDigits
 * - maxFractionDigits
 * - groupingEnabled
 * - groupingSeparator
 * - decimalSeparator
 *
 * To get a NumberFormat instance, please use getInstance, getFloatInstance or getIntegerInstance.
 *
 * @public
 */
sap.ui.core.format.NumberFormat = function(oFormatOptions) {
	// Do not use the constructor
	throw new Error();
};
sap.ui.core.format.NumberFormat.prototype = jQuery.sap.newObject(sap.ui.base.Object.prototype);

/*
 * Default format options for Integer
 */
sap.ui.core.format.NumberFormat.oDefaultIntegerFormat = {
	minIntegerDigits: 1,
	maxIntegerDigits: 99,
	minFractionDigits: 0,
	maxFractionDigits: 0,
	groupingEnabled: false,
	groupingSeparator: ",",
	decimalSeparator: ".",
	isInteger: true
};

/*
 * Default format options for Float
 */
sap.ui.core.format.NumberFormat.oDefaultFloatFormat = {
	minIntegerDigits: 1,
	maxIntegerDigits: 99,
	minFractionDigits: 0,
	maxFractionDigits: 99,
	groupingEnabled: true,
	groupingSeparator: ",",
	decimalSeparator: ".",
	isInteger: false
};

/**
 * Get an instance of the NumberFormat, which can be used for formatting
 */
sap.ui.core.format.NumberFormat.getInstance = function(oFormatOptions) {
	return sap.ui.core.format.NumberFormat.getFloatInstance(oFormatOptions);
};

/**
 * Get a float instance of the NumberFormat
 */
sap.ui.core.format.NumberFormat.getFloatInstance = function(oFormatOptions) {
	var oFormat = jQuery.sap.newObject(sap.ui.core.format.NumberFormat.prototype);
	oFormat.oFormatOptions = jQuery.extend(false, {}, sap.ui.core.format.NumberFormat.oDefaultFloatFormat, oFormatOptions);
	return oFormat;
};

/**
 * Get an integer instance of the NumberFormat
 */
sap.ui.core.format.NumberFormat.getIntegerInstance = function(oFormatOptions) {
	var oFormat = jQuery.sap.newObject(sap.ui.core.format.NumberFormat.prototype);
	oFormat.oFormatOptions = jQuery.extend(false, {}, sap.ui.core.format.NumberFormat.oDefaultIntegerFormat, oFormatOptions);
	return oFormat;
};

/**
 * Format a number according to the given format options
 * 
 * @param {number} oValue the number to format
 * @param {object} oFormatOptions the format options 
 * @return the formatted output value
 * @type {string}
 */
sap.ui.core.format.NumberFormat.prototype.format = function(oValue) {
	var sNumber = "" + oValue,
		sIntegerPart = "", 
		sFractionPart = "",
		sGroupedIntegerPart = "",
		sResult = "",
		iPosition = 0,
		iLength = 0,
		bNegative = oValue < 0, 
		iDotPos = -1,
		oOptions = this.oFormatOptions;
	
	// if number is negative remove minus
	if (bNegative) {
		sNumber = sNumber.substr(1);
	}
	
	// if number contains fraction, extract it
	iDotPos = sNumber.indexOf(".");
	if (iDotPos > -1) {
		sIntegerPart = sNumber.substr(0, iDotPos);
		sFractionPart = sNumber.substr(iDotPos + 1);
	}
	else {
		sIntegerPart = sNumber
	}
	
	// integer part length
	if (sIntegerPart.length < oOptions.minIntegerDigits) {
		sIntegerPart = jQuery.sap.padLeft(sIntegerPart, "0", oOptions.minIntegerDigits);
	}
	else if (sIntegerPart.length > oOptions.maxIntegerDigits) {
		sIntegerPart = jQuery.sap.padLeft("", "?", oOptions.maxIntegerDigits);
	}
	
	// fraction part length
	if (sFractionPart.length < oOptions.minFractionDigits) {
		sFractionPart = jQuery.sap.padRight(sFractionPart, "0", oOptions.minFractionDigits);
	}
	else if (sFractionPart.length > oOptions.maxFractionDigits) {
		sFractionPart = sFractionPart.substr(0, oOptions.maxFractionDigits);
	}
	
	// grouping
	iLength = sIntegerPart.length;
	if (oOptions.groupingEnabled && iLength > 3) {
		iPosition = iLength % 3 || 3;
		sGroupedIntegerPart = sIntegerPart.substr(0, iPosition);
		while (iPosition < sIntegerPart.length) {
			sGroupedIntegerPart += oOptions.groupingSeparator;
			sGroupedIntegerPart += sIntegerPart.substr(iPosition, 3);
			iPosition += 3;
		}
		sIntegerPart = sGroupedIntegerPart;
	}

	// combine
	if (bNegative) {
		sResult = "-";
	}
	sResult += sIntegerPart;
	if (sFractionPart) {
		sResult += oOptions.decimalSeparator + sFractionPart;
	}
	
	return sResult;
};

/**
 * Parse a number which is formatted according to the given format options
 * 
 * @param {string} sValue the string containing a numeric value 
 * @return the parse result
 * @type {number}
 */
sap.ui.core.format.NumberFormat.prototype.parse = function(sValue) {
	// Remove all characters but numbers and decimal separator, then use parseInt/parseFloat
	var oOptions = this.oFormatOptions,
		sRegExp = "[^0-9\\-" + oOptions.decimalSeparator + "]",
		oRegExp = new RegExp(sRegExp, "g"),
		oResult = 0;
	sValue = sValue.replace(oRegExp, "");
	sValue = sValue.replace(oOptions.decimalSeparator, ".");
	if (oOptions.isInteger) {
		oResult = parseInt(sValue, 10);
	}
	else {
		oResult = parseFloat(sValue);
	}
	return oResult;
};
	
	