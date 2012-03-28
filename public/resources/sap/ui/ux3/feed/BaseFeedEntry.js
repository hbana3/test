/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.feed.BaseFeedEntry.
jQuery.sap.declare("sap.ui.ux3.feed.BaseFeedEntry");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new feed/BaseFeedEntry.
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
 * <li>logoSrc : string</li>
 * <li>urn : string</li>
 * <li>text : string</li>
 * <li>sender : string</li>
 * <li>lastChanged : string</li>
 * <li>deletionAllowed : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>deleted : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Base Feed Entry
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.1.1. 
 * new Feed control: sap.ui.ux3.FeedChunk
 */
sap.ui.ux3.feed.BaseFeedEntry = function (sId, mSettings) {
	jQuery.sap.log.warning("Using deprecated control 'feed/BaseFeedEntry'.");
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.feed.BaseFeedEntry.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.feed.BaseFeedEntry. 
 * Resulting metadata can be obtained via sap.ui.ux3.feed.BaseFeedEntry.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.feed.BaseFeedEntry", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getLogoSrc", "setLogoSrc", "getUrn", "setUrn", "getText", "setText", "getSender", "setSender", "getLastChanged", "setLastChanged", "getDeletionAllowed", "setDeletionAllowed", 
    // aggregations
    
    // associations
    
    // events
    "attachDeleted", "detachDeleted", 
    // methods
    "deleteEntry"
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "logoSrc" : {name : "logoSrc", type : "string", group : "Misc", defaultValue : null},
    "urn" : {name : "urn", type : "string", group : "Misc", defaultValue : null},
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : null},
    "sender" : {name : "sender", type : "string", group : "Misc", defaultValue : null},
    "lastChanged" : {name : "lastChanged", type : "string", group : "Misc", defaultValue : null},
    "deletionAllowed" : {name : "deletionAllowed", type : "boolean", group : "Misc", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "deleted" : "deleted"
  }

});	

sap.ui.ux3.feed.BaseFeedEntry.M_EVENTS = {'deleted':'deleted'};


/**
 * Getter for property <code>logoSrc</code>.
 * URL to the logo image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>logoSrc</code>
 * @public
 * 
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.getLogoSrc = function() {
	return this.getProperty("logoSrc");
};

/**
 * Setter for property <code>logoSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLogoSrc  new value for property <code>logoSrc</code>
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.setLogoSrc = function(sLogoSrc) {
	this.setProperty("logoSrc", sLogoSrc);
	return this;
};


/**
 * Getter for property <code>urn</code>.
 * Unique identifier
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>urn</code>
 * @public
 * 
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.getUrn = function() {
	return this.getProperty("urn");
};

/**
 * Setter for property <code>urn</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUrn  new value for property <code>urn</code>
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.setUrn = function(sUrn) {
	this.setProperty("urn", sUrn);
	return this;
};


/**
 * Getter for property <code>text</code>.
 * Feed entry text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>sender</code>.
 * The entity from where the entry origins.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>sender</code>
 * @public
 * 
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.getSender = function() {
	return this.getProperty("sender");
};

/**
 * Setter for property <code>sender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSender  new value for property <code>sender</code>
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.setSender = function(sSender) {
	this.setProperty("sender", sSender);
	return this;
};


/**
 * Getter for property <code>lastChanged</code>.
 * Last change time of the entry. Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC Timezone
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>lastChanged</code>
 * @public
 * 
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.getLastChanged = function() {
	return this.getProperty("lastChanged");
};

/**
 * Setter for property <code>lastChanged</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLastChanged  new value for property <code>lastChanged</code>
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.setLastChanged = function(sLastChanged) {
	this.setProperty("lastChanged", sLastChanged);
	return this;
};


/**
 * Getter for property <code>deletionAllowed</code>.
 * deletion Allowed
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>deletionAllowed</code>
 * @public
 * 
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.getDeletionAllowed = function() {
	return this.getProperty("deletionAllowed");
};

/**
 * Setter for property <code>deletionAllowed</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bDeletionAllowed  new value for property <code>deletionAllowed</code>
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.setDeletionAllowed = function(bDeletionAllowed) {
	this.setProperty("deletionAllowed", bDeletionAllowed);
	return this;
};


/**
 * Raised when the user delete the entry(when possible) 
 *
 * @name sap.ui.ux3.feed.BaseFeedEntry#deleted
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'deleted' event of this <code>sap.ui.ux3.feed.BaseFeedEntry</code>.<br/>
 * Raised when the user delete the entry(when possible) 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.attachDeleted = function(oData, fnFunction, oListener) {
	this.attachEvent("deleted", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'deleted' event of this <code>sap.ui.ux3.feed.BaseFeedEntry</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.detachDeleted = function(fnFunction, oListener) {
	this.detachEvent("deleted", fnFunction, oListener);
	return this;	
};

/**
 * Fire event deleted to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.BaseFeedEntry} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.fireDeleted = function(mArguments) {
	this.fireEvent("deleted", mArguments);
	return this;
};


/**
 * Deletes the entry
 *
 * @name sap.ui.ux3.feed.BaseFeedEntry.prototype.deleteEntry
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/ux3/feed/BaseFeedEntry.js
/**
 * Returns entry text to be display, in HTML format
 *
 * @return	The formatted entry text
 *
 * @protected
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.buildText = function(){
  var sText = this.getText();

  //TODO: Should render an actual link
  sText = sText.replace(/<thing/g, "<a href='#'" );
  sText = sText.replace(/p12e_prep/g, "sapUiLnk" );
  sText = sText.replace(/<\/thing>/g, "</a>" );
  //replace line breaks
  sText = sText.replace(/(\r\n)|(\n\r)|\r|\n/g,"<br />");

  //TODO: Escaping !!!

  return sText;
};

/**
 * Returns text that represents the time elapsed since the entry
 *  was last changed.
 *
 * The text will formatted this way: (x <unit of time> ago). The right unit will be selected depending the
 *  time elapsed.
 *
 * @return	The formatted time text
 *
 * @protected
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.buildTime = function( ){

  var sLastChanged = this.getLastChanged();
  var iNow		   = new Date().getTime();

  //Calculate the delta between now and last update time, in seconds
  var deltaSeconds = Math.round((iNow - sap.ui.ux3.feed.BaseFeedEntry.toDate(sLastChanged))/1000);

  return this.formatDelta(deltaSeconds);
};


/**
 * Adds one leading zero, if given number is below 10.
 *
 * @param	The number to format
 * @return	The formatted number
 *
 * @private
 */
sap.ui.ux3.feed.BaseFeedEntry.addOneLeadingZero = function(n) {

	return n < 10 ? '0' + n : n;

};

/**
 * Adds one or two leading zero(s), to get a number with 3 characters.
 *
 * @param	The number to format
 * @return	The formatted number
 *
 * @private
 */
sap.ui.ux3.feed.BaseFeedEntry.addTwoLeadingZero = function(n) {

	if (n < 100){
		n = '0' + n;
	}
	if (n < 10){
		n = '0' + n;
	}
	return n;
};

/**
 * Formats a date from Javascript Date to ISO String (YYYY-MM-DDThh:mm:ss:sssZ)
 *
 * @param	Javascript Date
 * @return	The formatted ISO String date
 *
 * @protected
 */
sap.ui.ux3.feed.BaseFeedEntry.toISOString = function(d) {
	// convenience variable
	var baseEntry = sap.ui.ux3.feed.BaseFeedEntry;

	return	d.getUTCFullYear() + '-' +
			sap.ui.ux3.feed.BaseFeedEntry.addOneLeadingZero(d.getUTCMonth() + 1) + '-' +
			sap.ui.ux3.feed.BaseFeedEntry.addOneLeadingZero(d.getUTCDate()) + 'T' +
			sap.ui.ux3.feed.BaseFeedEntry.addOneLeadingZero(d.getUTCHours()) + ':' +
			sap.ui.ux3.feed.BaseFeedEntry.addOneLeadingZero(d.getUTCMinutes()) + ':' +
			sap.ui.ux3.feed.BaseFeedEntry.addOneLeadingZero(d.getUTCSeconds()) + '.' +
			sap.ui.ux3.feed.BaseFeedEntry.addTwoLeadingZero(d.getUTCMilliseconds()) + 'Z';

};

/**
 * Converts ISO String (YYYY-MM-DDThh:mm:ss:sssZ) to Javascript Date
 *
 * @param	The ISO String date
 * @return	Javascript Date
 *
 * @protected
 */
sap.ui.ux3.feed.BaseFeedEntry.toDate = function(sISODate) {

	var d = new Date();
	d.setUTCFullYear(sISODate.substring(0,4), parseInt(sISODate.substring(5,7), 10)-1, sISODate.substring(8,10));
	d.setUTCHours(sISODate.substring(11,13), sISODate.substring(14,16), sISODate.substring(17,19), sISODate.substring(20,23));
	return d;
};

/**
 * Formats a given numbers of seconds in a String that expresses the time elapsed.
 *
 * @param	Number of seconds since the given time
 * @return	The formatted String
 *
 * @protected
 */
sap.ui.ux3.feed.BaseFeedEntry.prototype.formatDelta = function(iDeltaSeconds) {

	var MINUTE	= 60;
	var HOUR	= 3600;
	var DAY		= 86400;
	var WEEK	= 604800;
	var MONTH	= 2592000;  //30 days/month
	var YEAR	= 31556926; //365.25 days/year

	var iCalculatedTime;
	var sTimeAgo;
	var sTextKey;
	var iDivider = 1;

	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

	if(iDeltaSeconds<0 || !iDeltaSeconds){
		//negative value(in future) or undefined value -> unknown
		iDivider = 1;
		sTextKey = "FEEDENTRY_TIME_UNKNOWN";
	}else if(iDeltaSeconds<MINUTE){
		//Below 1 minute
		iDivider = 1;
		sTextKey = "FEEDENTRY_TIME_SECOND";
	}else if(iDeltaSeconds<HOUR){
		//Below 1 hour
		iDivider = MINUTE;
		sTextKey = "FEEDENTRY_TIME_MINUTE";
	}else if(iDeltaSeconds<DAY){
		//Below 1 day
		iDivider = HOUR;
		sTextKey = "FEEDENTRY_TIME_HOUR";
	}else if(iDeltaSeconds<WEEK){
		//Below 1 week
		iDivider = DAY;
		sTextKey = "FEEDENTRY_TIME_DAY";
	}else if(iDeltaSeconds<MONTH){
		//Below 1 month
		iDivider = WEEK;
		sTextKey = "FEEDENTRY_TIME_WEEK";
	}else if(iDeltaSeconds<YEAR){
		//Below 1 year
		iDivider = MONTH;
		sTextKey = "FEEDENTRY_TIME_MONTH";
	}else{
		iDivider = YEAR;
		sTextKey = "FEEDENTRY_TIME_YEAR";
	}

	//Calculate Time number (like "2" in "2 hours ago")
	iCalculatedTime = parseInt(Math.round(iDeltaSeconds/iDivider), 10);

	if(iCalculatedTime > 1){
		//Use plural text if Time number is greater than 1.
		sTextKey += "S";
	}

	//Get the text and replace the placeholder
	sTimeAgo = rb.getText(sTextKey);
	sTimeAgo = sTimeAgo.replace("{0}", iCalculatedTime);

	return sTimeAgo;
};