/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides the base implementation for all model implementations
jQuery.sap.declare("sap.ui.model.type.Date");
jQuery.sap.require("sap.ui.model.SimpleType");
jQuery.sap.require("sap.ui.core.format.DateFormat");

/**
 * Constructor for a Date type.
 * This Date type is based on the JavaScript internal Date object, so the date value in the 
 * data model must be of type Date. 
 * 
 * @class
 * 
 * @extends sap.ui.model.SimpleType
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.model.type.Date = function () {
	sap.ui.model.SimpleType.apply(this, arguments);
	this.oFormat = sap.ui.core.format.DateFormat.getInstance(this.oFormatOptions);
	this.sName = "Date";
};

// chain the prototypes
sap.ui.model.type.Date.prototype = jQuery.sap.newObject(sap.ui.model.SimpleType.prototype);

/*
 * Describe the sap.ui.model.type.Date. 
 * Resulting metadata can be obtained via sap.ui.model.type.Date.getMetadata();
 */ 
sap.ui.base.Object.defineClass("sap.ui.model.type.Date", {

  // ---- object ----
  baseType : "sap.ui.model.SimpleType",
  publicMethods : [
    // methods
  ]

});	

/**
 * @see sap.ui.model.SimpleType.prototype.formatValue
 */
sap.ui.model.type.Date.prototype.formatValue = function(oValue, sInternalType) {
	if (!(oValue instanceof Date)) {
		return "";
	}
	switch(sInternalType) {
		case "string":
			return this.oFormat.format(oValue);
		default:
			throw new sap.ui.model.FormatException("Don't know how to format Date to " + sInternalType);
	}
};

/**
 * @see sap.ui.model.SimpleType.prototype.parseValue
 */
sap.ui.model.type.Date.prototype.parseValue = function(oValue, sInternalType) {
	var iResult;
	switch(sInternalType) {
		case "string":
			iResult = this.oFormat.parse(oValue);
			if (isNaN(iResult.getYear())) {
				throw new sap.ui.model.ParseException(oValue + " is not a valid Date value");
			}
			return iResult;
		default:
			throw new sap.ui.model.ParseException("Don't know how to parse Date from " + sInternalType);
	}
};

/**
 * @see sap.ui.model.SimpleType.prototype.validateValue
 */
sap.ui.model.type.Date.prototype.validateValue = function(iValue) {
	if (this.oConstraints) {
		var aViolatedConstraints = [];
		jQuery.each(this.oConstraints, function(sName, oContent) {
			switch (sName) {
				case "minimum":
					if (iValue < oContent) {
						aViolatedConstraints.push("minimum");
					}
					break;
				case "maximum":
					if (iValue > oContent) {
						aViolatedConstraints.push("maximum");
					}
			}
		});
		if (aViolatedConstraints.length > 0) {
			throw new sap.ui.model.ValidateException("Validation of type constraints failed", aViolatedConstraints);
		}
	}
};

/**
 * @see sap.ui.model.SimpleType.prototype.setFormatOptions
 */
sap.ui.model.type.Date.prototype.setFormatOptions = function(oFormatOptions) {
	this.oFormatOptions = oFormatOptions;
	this.oFormat = sap.ui.core.format.DateFormat.getInstance(this.oFormatOptions);
};

