/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.format.DateFormat
jQuery.sap.declare("sap.ui.core.format.DateFormat");

/**
 * Constructor for DateFormat
 *
 * @class
 * The DateFormat is a static class for formatting and parsing dates values according
 * to a set of format options.
 * 
 * Supported format options:
 * - pattern
 *
 * To get an instance of the DateFormat please use the getInstance method.
 *
 * @public
 */
sap.ui.core.format.DateFormat = function() {
	// Do not use the constructor
	throw new Error();
};

sap.ui.core.format.DateFormat.oDefaultDateFormat = {
	pattern: "MM/dd/yyyy"
};

sap.ui.core.format.DateFormat.oDefaultDateTimeFormat = {
	pattern: "MM/dd/yyyy hh:mm a"
};

sap.ui.core.format.DateFormat.oDefaultTimeFormat = {
	pattern: "hh:mm a"
};

/**
 * Get an instance of the DateFormat
 */
sap.ui.core.format.DateFormat.getInstance = function(oFormatOptions) {
	var oFormat = jQuery.sap.newObject(sap.ui.core.format.DateFormat.prototype);
	oFormat.oFormatOptions = jQuery.extend(false, {}, sap.ui.core.format.DateFormat.oDefaultDateFormat, oFormatOptions);
	oFormat.init();
	return oFormat;
};

/**
 * Get a DateTime instance of the DateFormat
 */
sap.ui.core.format.DateFormat.getDateTimeInstance = function(oFormatOptions) {
	var oFormat = jQuery.sap.newObject(sap.ui.core.format.DateFormat.prototype);
	oFormat.oFormatOptions = jQuery.extend(false, {}, sap.ui.core.format.DateFormat.oDefaultDateTimeFormat, oFormatOptions);
	oFormat.init();
	return oFormat;
};

/**
 * Get a Time instance of the DateFormat
 */
sap.ui.core.format.DateFormat.getTimeInstance = function(oFormatOptions) {
	var oFormat = jQuery.sap.newObject(sap.ui.core.format.DateFormat.prototype);
	oFormat.oFormatOptions = jQuery.extend(false, {}, sap.ui.core.format.DateFormat.oDefaultTimeFormat, oFormatOptions);
	oFormat.init();
	return oFormat;
};

/**
 * Initialize date format
 */
sap.ui.core.format.DateFormat.prototype.init = function() {
	this.aFormatArray = this.parseJavaDateFormat(this.oFormatOptions.pattern);
	this.bJapaneseDate = jQuery.inArray("era", this.aFormatArray) != -1;
};

/**
 * Array of Monthnames
 */
sap.ui.core.format.DateFormat.prototype.MONTHNAMES = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
sap.ui.core.format.DateFormat.prototype.aMonthNames3 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
sap.ui.core.format.DateFormat.prototype.aMonthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/**
 * Array of Daynames
 */
sap.ui.core.format.DateFormat.prototype.DAYNAMES = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
sap.ui.core.format.DateFormat.prototype.aDayNames3 = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
sap.ui.core.format.DateFormat.prototype.aDayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

/**
 * Pattern elements
 */
sap.ui.core.format.DateFormat.prototype.oStates = {
	"G": "era",
	"y": "year",
	"Y": "weekYear",
	"M": "month",
	"w": "weekInYear",
	"W": "weekInMonth",
	"D": "dayInYear",
	"d": "day",
	"F": "dayOfWeekInMonth",
	"E": "dayNameInWeek",
	"u": "dayNumberOfWeek",
	"a": "amPmMarker",
	"H": "hour0_23",
	"k": "hour1_24",
	"K": "hour0_11",
	"h": "hour1_12",
	"m": "minute",
	"s": "second",
	"S": "millisecond",
	"z": "timezoneGeneral",
	"Z": "timezoneRFC822",
	"X": "timezoneISO8601"
};

/**
 * Format a date according to the given format options
 * 
 * @param {Date} oValue the number to format
 * @return {string} the formatted output value
 */
sap.ui.core.format.DateFormat.prototype.format = function(oDate) {
	var aBuffer = [], 
		oPart,
		iHour = oDate.getHours(),
		iTZOffset = Math.abs(oDate.getTimezoneOffset()),
		bNegativeOffset = oDate.getTimezoneOffset() < 0,
		iHourOffset = Math.floor(iTZOffset / 60),
		iMinuteOffset = iTZOffset % 60,
		sYear,
		sWeek;
	
	for (var i = 0; i < this.aFormatArray.length; i++) {
		oPart = this.aFormatArray[i];
		switch (oPart.sType) {
			case "text":
				aBuffer.push(oPart.sValue);
				break;
			case "day":
				aBuffer.push(jQuery.sap.padLeft(String(oDate.getDate()), "0", oPart.iDigits));
				break;
			case "dayNameInWeek":
				if (oPart.iDigits < 4) {
					aBuffer.push(this.aDayNames3[oDate.getDay()]);
				} else if (oPart.iDigits >= 4){
					aBuffer.push(this.aDayNames[oDate.getDay()]);
				} 
				break;
			case "dayNumberOfWeek":
				aBuffer.push(oDate.getDay() || 7);
				break;
			case "month":
				if (oPart.iDigits == 3) {
					aBuffer.push(this.aMonthNames3[oDate.getMonth()]);
				} else if (oPart.iDigits >= 4){
					aBuffer.push(this.aMonthNames[oDate.getMonth()]);
				} else {
					aBuffer.push(jQuery.sap.padLeft(String(oDate.getMonth()+1), "0", oPart.iDigits));
				}
				break;
			case "era": 
				if (this.bJapaneseDate) {
					aBuffer.push(this.getEmperorYearChar(oDate));
				} else {
					aBuffer.push("AD");
				}
				break;
			case "year":
			case "weekYear":
				if (this.bJapaneseDate && this.getEmperorYearChar(oDate) != "") {
					aBuffer.push(jQuery.sap.padLeft(String(this.getEmperorYear(oDate)), "0", oPart.iDigits));
				} 
				else {
					sYear = "" + oDate.getFullYear();
					if (oPart.iDigits == 2 && sYear.length > 2) {
						sYear = sYear.substr(sYear.length - 2);
					}
					aBuffer.push(jQuery.sap.padLeft(sYear, "0", oPart.iDigits));
				}
				break;
			case "weekInYear":
				sWeek = "";
				if (oDate.getWeek) {
					sWeek += oDate.getWeek();
				}
				aBuffer.push(jQuery.sap.padLeft(sWeek, "0", oPart.iDigits));
				break;
			case "hour0_23":
				aBuffer.push(jQuery.sap.padLeft(String(iHour), "0", oPart.iDigits));
				break;
			case "hour1_24":
				if (iHour == 0) {
					iHour = 24;
				}
				aBuffer.push(jQuery.sap.padLeft(String(iHour), "0", oPart.iDigits));
				break;
			case "hour0_11":
				if (iHour > 11) {
					iHour -= 12;
				}
				aBuffer.push(jQuery.sap.padLeft(String(iHour), "0", oPart.iDigits));
				break;
			case "hour1_12":
				if (iHour > 12) {
					iHour -= 12;
				}
				else if (iHour == 0) {
					iHour = 12;
				}
				aBuffer.push(jQuery.sap.padLeft(String(iHour), "0", oPart.iDigits));
				break;
			case "minute":
				aBuffer.push(jQuery.sap.padLeft(String(oDate.getMinutes()), "0", oPart.iDigits));
				break;
			case "second":
				aBuffer.push(jQuery.sap.padLeft(String(oDate.getSeconds()), "0", oPart.iDigits));
				break;
			case "millisecond":
				aBuffer.push(jQuery.sap.padLeft(String(oDate.getMilliseconds()), "0", oPart.iDigits));
				break;
			case "amPmMarker":
				aBuffer.push(oDate.getHours() < 12 ? "AM" : "PM");
				break;
			case "timezoneGeneral":
				if (oPart.iDigits > 3 && oDate.getTimezoneLong) {
					aBuffer.push(oDate.getTimezoneLong());
					break;
				}
				else if (oDate.getTimezoneShort){
					aBuffer.push(oDate.getTimezoneShort());
					break;
				}
				aBuffer.push("GMT");
			case "timezoneISO8601":
				if (iTZOffset != 0) {
					aBuffer.push(bNegativeOffset ? "-" : "+");
					aBuffer.push(jQuery.sap.padLeft(String(iHourOffset), "0", 2));
					aBuffer.push(":");
					aBuffer.push(jQuery.sap.padLeft(String(iMinuteOffset), "0", 2));
				}
				break;
			case "timezoneRFC822":
				if (iTZOffset != 0) {
					aBuffer.push(bNegativeOffset ? "-" : "+");
					aBuffer.push(jQuery.sap.padLeft(String(iHourOffset), "0", 2));
					aBuffer.push(jQuery.sap.padLeft(String(iMinuteOffset), "0", 2));
				}
				break;
				
		}
	}
	
	return aBuffer.join("");
};

/**
 * Parse a date
 */
sap.ui.core.format.DateFormat.prototype.parse = function(oValue) {
	var oDate = new Date(0),
		iIndex = 0,
		bError = false,
		iDay = null,
		iMonth = null,
		iYear = null,
		iHour = null,
		iMinute = null,
		iSecond = null,
		iMillisecond = null,
		bPM = false,
		oPart,
		sPart;
	
	function isNumber(iCharCode) {
		return iCharCode >= 48 && iCharCode <= 57;
	}
	
	function findNumbers(iMaxLength) {
		var iLength = 0;
		while (iLength <= iMaxLength && isNumber(oValue.charCodeAt(iIndex + iLength))) {
			iLength++;
		}
		return oValue.substr(iIndex, iLength);
	}
	
	function findEntry(aList) {
		var i;
		for (i = 0; i < aList.length; i++) {
			if (oValue.indexOf(aList[i], iIndex) == iIndex) {
				return aList[i];
			}
		}
		return null;
	}

	function findEntryIndex(aList) {
		var i;
		for (i = 0; i < aList.length; i++) {
			if (oValue.indexOf(aList[i], iIndex) == iIndex) {
				return i;
			}
		}
		return null;
	}

	for (var i = 0; i < this.aFormatArray.length; i++) {
		oPart = this.aFormatArray[i];
		switch (oPart.sType) {
			case "text":
				if (oValue.indexOf(oPart.sValue, iIndex) == iIndex) {
					iIndex += oPart.sValue.length;
				}
				break;
			case "day":
				sPart = findNumbers(Math.max(oPart.iDigits, 2));
				iIndex += sPart.length;
				iDay = parseInt(sPart, 10);
				break;
			case "dayNameInWeek":
				sPart = findEntry(this.aDayNames);
				if (!sPart) {
					sPart = findEntry(this.aDayNames3);
				}
				if (sPart) {
					iIndex += sPart.length;
				}
				break;
			case "dayNumberOfWeek":
				sPart = findNumbers(oPart.iDigits);
				iIndex += sPart.length;
				break;
			case "month":
				if (oPart.iDigits < 3) {
					sPart = findNumbers(Math.max(oPart.iDigits, 2));
					iMonth = parseInt(sPart, 10) - 1;
					iIndex += sPart.length;
				} else {
					iMonth = findEntryIndex(this.aMonthNames);
					if (iMonth != null) {
						iIndex += this.aMonthNames[iMonth].length;
					}
					else {
						iMonth = findEntryIndex(this.aMonthNames3);
						if (iMonth != null) {
							iIndex += this.aMonthNames3[iMonth].length;
						}
					}
				}
				break;
			case "era": 
				// TODO
				break;
			case "year":
			case "weekYear":
				if (oPart.iDigits == 1) {
					sPart = findNumbers(4);
					iIndex += sPart.length;
				}
				else if (oPart.iDigits == 2) {
					sPart = findNumbers(4);
					if (sPart.length == 2) {
						iYear = parseInt(sPart, 10);
						if (iYear < 90) {
							sPart = "20" + sPart;
						} else {
							sPart = "19" + sPart;
						}
						iIndex +=2;
					}
					else {
						iIndex += sPart.length;
					}
				} 
				else {
					sPart = findNumbers(oPart.iDigits);
					iIndex += sPart.length;
				}
				iYear = parseInt(sPart, 10);
				break;
			case "weekInYear":
				// TODO
				break;
			case "hour0_23":
				sPart = findNumbers(Math.max(oPart.iDigits, 2));
				iIndex += sPart.length;
				iHour = parseInt(sPart, 10);
				break;
			case "hour1_24":
				sPart = findNumbers(Math.max(oPart.iDigits, 2));
				iIndex += sPart.length;
				iHour = parseInt(sPart, 10);
				if (iHour == 24) {
					iHour = 0;
				}
				break;
			case "hour0_11":
				sPart = findNumbers(Math.max(oPart.iDigits, 2));
				iIndex += sPart.length;
				iHour = parseInt(sPart, 10);
				break;
			case "hour1_12":
				sPart = findNumbers(Math.max(oPart.iDigits, 2));
				iIndex += sPart.length;
				iHour = parseInt(sPart, 10);
				if (iHour == 12) {
					iHour = 0;
				}
				break;
			case "minute":
				sPart = findNumbers(Math.max(oPart.iDigits, 2));
				iIndex += sPart.length;
				iMinute = parseInt(sPart, 10);
				break;
			case "second":
				sPart = findNumbers(Math.max(oPart.iDigits, 2));
				iIndex += sPart.length;
				iSecond = parseInt(sPart, 10);
				break;
			case "millisecond":
				sPart = findNumbers(Math.max(oPart.iDigits, 3));
				sPart = jQuery.sap.padRight(sPart, "0", 3);
				iIndex += sPart.length;
				iMillisecond = parseInt(sPart, 10);
				break;
			case "amPmMarker":
				if (oValue.indexOf("AM", iIndex) == iIndex) {
					bPM = false;
					iIndex += 2;
				}
				else if (oValue.indexOf("PM", iIndex) == iIndex) {
					bPM = true;
					iIndex += 2;
				}
				break;
			case "timezoneGeneral":
				// TODO
				break;
			case "timezoneISO8601":
				// TODO
				break;
			case "timezoneRFC822":
				// TODO
				break;
				
		}
	}
	if (bPM) {
		iHour += 12;
	}
	oDate.setFullYear(iYear || 1970);
	oDate.setMonth(iMonth || 0);
	oDate.setDate(iDay || 1);
	oDate.setHours(iHour || 0);
	oDate.setMinutes(iMinute || 0);
	oDate.setSeconds(iSecond || 0);
	oDate.setMilliseconds(iMillisecond || 0);
	return oDate;
};


/**
 * Parse the date format string and create an format array from it, which can be
 * used for parsing and formatting the date
 * 
 * @param sFormat the java date format string
 * @returns {Array} format array
 */
sap.ui.core.format.DateFormat.prototype.parseJavaDateFormat = function(sFormat) {
	var aFormatArray = [],
		i,
		bQuoted = false,
		oCurrentObject = null,
		sState = "",
		sNewState = "";

	
	for (i = 0; i < sFormat.length; i++) {
		var sCurChar = sFormat.charAt(i), sNextChar, sPrevChar;
		if (bQuoted) {
			if (sCurChar == "'") {
				sPrevChar = sFormat.charAt(i - 1);
				sNextChar = sFormat.charAt(i + 1);
				// handle abc''def correctly
				if (sPrevChar == "'") {
					bQuoted = false;
				}
				// handle 'abc''def' correctly
				else if( sNextChar == "'") {
					i += 1;
				}
				//  normal quote 'abcdef'
				else {
					bQuoted = false;
					continue;
				}
			}
			if (sState == "text") {
				oCurrentObject.sValue += sCurChar;
			} else {
				oCurrentObject = {
					sType:"text",
					sValue : sCurChar
				};
				aFormatArray.push(oCurrentObject);
				sState = "text";
			}
			
		} else {
			if (sCurChar == "'") {
				bQuoted = true;
			} 
			else if (!bQuoted && this.oStates[sCurChar]){
				sNewState = this.oStates[sCurChar];
				if (sState == sNewState) {
					oCurrentObject.iDigits++;
				} else {
					oCurrentObject = {
						sType: sNewState,
						iDigits: 1
					};
					aFormatArray.push(oCurrentObject);
					sState = sNewState;
				}
			} 
			else {	
				if (sState == "text") {
					oCurrentObject.sValue += sCurChar;
				} else {
					oCurrentObject = {
						sType:"text",
						sValue : sCurChar
					};
					aFormatArray.push(oCurrentObject);
					sState = "text";
				}
			}
		}
		 	
	}
	return aFormatArray;
};

/**
 * Get japanese emperor year char
 * 
 * @param {Date} oDate
 * @returns {String} 
 */
sap.ui.core.format.DateFormat.prototype.getEmperorYearChar = function(oDate) {
};

/**
 * Get japanese emperor year
 * 
 * @param {Date} oDate
 * @returns {int} 
 */
sap.ui.core.format.DateFormat.prototype.getEmperorYear = function(oDate) {
};