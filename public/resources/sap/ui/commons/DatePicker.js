/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.DatePicker.
jQuery.sap.declare("sap.ui.commons.DatePicker");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");

/**
 * Constructor for a new DatePicker.
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
 * <li>locale : string</li>
 * <li>yyyymmdd : string</li></ul>
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
 * For further parameters see {@link sap.ui.commons.TextField#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Allows end users to interact with dates.
 * Entries can directly be written in, or selected from a calendar pad.
 * Note: Dates can always be manually entered in the fix YYYYMMDD format, on top of the flexible "locale" format.
 * @extends sap.ui.commons.TextField
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.DatePicker = function (sId, mSettings) {
	sap.ui.commons.TextField.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.DatePicker.prototype = jQuery.sap.newObject(sap.ui.commons.TextField.prototype);

/*
 * Describe the sap.ui.commons.DatePicker. 
 * Resulting metadata can be obtained via sap.ui.commons.DatePicker.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.DatePicker", {

  // ---- object ----
  baseType : "sap.ui.commons.TextField",
  publicMethods : [
    // properties 
    "getLocale", "setLocale", "getYyyymmdd", "setYyyymmdd"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "locale" : {name : "locale", type : "string", group : "Misc", defaultValue : null},
    "yyyymmdd" : {name : "yyyymmdd", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>locale</code>.
 * 
 * Defines the locale (language and country), e.g. "en-US", whose translations should be used to render the DatePicker.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>locale</code>
 * @public
 * 
 */
sap.ui.commons.DatePicker.prototype.getLocale = function() {
	return this.getProperty("locale");
};

/**
 * Setter for property <code>locale</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLocale  new value for property <code>locale</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DatePicker.prototype.setLocale = function(sLocale) {
	this.setProperty("locale", sLocale);
	return this;
};


/**
 * Getter for property <code>yyyymmdd</code>.
 * Defines the date as a "yyyymmdd" string, independent from the format used. The inherited textField "value" attribute uses the date format as configured via the locale.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>yyyymmdd</code>
 * @public
 * 
 */
sap.ui.commons.DatePicker.prototype.getYyyymmdd = function() {
	return this.getProperty("yyyymmdd");
};

/**
 * Setter for property <code>yyyymmdd</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sYyyymmdd  new value for property <code>yyyymmdd</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DatePicker.prototype.setYyyymmdd = function(sYyyymmdd) {
	this.setProperty("yyyymmdd", sYyyymmdd);
	return this;
};


// Start of sap/ui/commons/DatePicker.js
jQuery.sap.require("jquery-ui-core");
jQuery.sap.require("jquery-ui-datepicker");

/**
 * This code should run only once!
**/
(function(){
	// Call-back function to record the closure.
	// If someone clicks on the window, that closes the DatePicker.
	// Our controller wants to be informed about such state-change.
	var fOnClose = function(dateText, inst) {
		// "this" refers to the associated input field.
		var sInputId   = this.id;
		var sControlID = sInputId.replace(/-input/, '');
		var oControl   = sap.ui.getCore().getControl(sControlID);
		if (oControl) {
			if (oControl.oPrivate.bVerboseMode) {
				jQuery.sap.log.debug("DATEPICKER: JQUERY ONCLOSE CALLBACK");
			}
			oControl._hide();
		}
	};

	// Call-back function used to override jQuery's setting of the focus
	// on the alternate DDLB, for those DDLBs to behave like all other ones.
	// Used since our Keyboard Navigator is without effect on those ENTER events.
	// Also used for focusing into the Calendar Pad after Month Previous/Next
	// (PageUp/PageDown) events.
	var fOnChangeMonthYear = function(year, month, inst) {
		// "this" refers to the associated input field.
		if (document.activeElement) {
			if (document.activeElement.className == "ui-datepicker-month") {
				// User expects focus to stay on (changed) Month DDLB.
				setTimeout(sap.ui.commons.DatePicker._focusMonth, 100);
			} else if (document.activeElement.className == "ui-datepicker-year") {
				// User expects focus to stay on (changed) Year DDLB.
				setTimeout(sap.ui.commons.DatePicker._focusYear, 100);
			}
			else {
				// Assuming Calendar Pad focus needed, for Previous/Next Month button support.
				// However jQuery may also be calling us because it is internally initializing
				// the Month while the picker is still closed.
				// "_focusCalendar()" will check for that!
//				jQuery.sap.log.debug("DATEPICKER: CalendarPad CALLBACK");
				setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);
			}
		}
	};

//	Defining the Language-independent, SAP-specific jQuery settings:
	jQuery.datepicker.regional[''] = {
//			buttonImage    : "icon.gif", // Works as shown below...
			changeMonth    : true,       // For rendering the DDLB allowing month changes.
			changeYear     : true,       // For rendering the DDLB allowing year changes.
//			disabled       : true,       // Does not seem to work...
			isRTL          : sap.ui.getCore().getConfiguration().getRTL(),
			onChangeMonthYear: fOnChangeMonthYear,
			onClose        : fOnClose,   // For reacting to picker closing.
//			onSelect       : fOnSelect,  // For reacting to date selection.
			showOn         : 'button',   // Works as shown below... Not useful to us.
			showOtherMonths: true,       // For rendering the days outside the current month.
			showWeek       : true,       // For rendering the week numbers.
			weekHeader     : ''          // For rendering no header (e.g. 'Wk') on top of the week numbers.
	};
	// Default settings for ALL DatePickers!:
	jQuery.datepicker.setDefaults(jQuery.datepicker.regional['']);
}());

/**
 * Initializes the control.
 * It is called from the constructor.
 * @private
 */
sap.ui.commons.DatePicker.prototype.init = function(){
  // The <INPUT> part of the DatePicker should look like that of the ComboBox.
  // (to share same look&feel)
//	this.addStyleClass("sapUiTfCombo");
	// this.setAccessibleRole("DatePicker");//sap.ui.core.AccessibleRole.Combobox);

	// There is no point really in setting the "maxLength" attribute for the DatePicker,
	// as jQuery already parses the input according to the configured language-dependent dateFormat.
	// Anyway, such maxLength would be language-dependent!
	// this.setMaxLength(10);

	this.oPrivate = {
	  bIsVisible: false,    // "visibility:hidden" allows not to display the jQuery
							// DatePicker on INPUT-focus!  :-)
	  tLastTimeStamp: "",   // Used to avoid re-opening on double-clicks.
	  sValue: "",						// VALUE saved on KEYUP for IE to use next if ONKEYDOWN = ENTER,
							// for processing YYYYMMDD entries before jQuery kicks in.
	  bVerboseMode: false   // When set to "true", prints console logs.
	};
};

/**
 * Small utility.
 */
sap.ui.commons.DatePicker.prototype._getInputId = function(){
	// To follow the ComboBox behavior, the <INPUT> ID = control ID + "-input":
	return this.getId() + "-input";
};

/**
 * Adds the jQuery DatePicker onAfterRendering.
 * Another possibility would be to wait until INPUT-focus or BUTTON-click,
 * if performance becomes an issue with multiple instances.
 */
sap.ui.commons.DatePicker.prototype.onAfterRendering = function(){
	var sInputId  = this._getInputId();

	// Attaching our onKeydown non-jQuery handler before the jQuery DatePicker binds
	// its own, as we want to be invoked first for parsing entries in the YYYYMMDD format!
	// The SAPUI5 "sapOnEnter" and "onKeydown" handlers are of no use since the DatePicker
	// onENTER handler kicks-in before those two (and event intercepts the ENTER events).
	// jQuery "INPUT.bind('keydown',...)" can't be used without causing jQuery JavaScript errors.
	// So we are left with the basic JavaScript event registering mechanisms.
	var oInput = jQuery.sap.domById(sInputId);

	// Attaching a jQuery DatePicker to the <INPUT> element, with the supported locale:
	var oSelector = jQuery.sap.byId(sInputId);
	var sLocale   = this.getRenderedLocale();
	oSelector.datepicker(jQuery.datepicker.regional[sLocale]);

	// Attaching our CSS classes to the jQuery DatePicker for styling and visibility.
	jQuery('#ui-datepicker-div').addClass('sapUi-jQdatePicker sapUi-visibilityHidden sapUiShd');

	// Now that we have the jQuery DatePicker attached, we can convert YYYYDDMM to VALUE
	// or VALUE to YYYYMMDD!
	// Only one of the two YYYYMMDD and VALUE attributes can be set.
	// (Setting one resets the other. So the last in wins.)
	var initialDate = this.getYyyymmdd();
	if (initialDate && initialDate!="-1") {
		this.setYyyymmdd(initialDate);
	} else {
		initialDate = this.getValue();
		if (initialDate && initialDate!="-1") {
			this.setValue(initialDate);
		}
	}
};

/**
 * The "_show()" and "_hide()" utilities are for opening/closing the DatePicker.
 * "visibility:hidden" is applied, not to render the Picker on INPUT-focus.
 * Own Keyboard Handler is required for overriding jQuery navigation.
 */
sap.ui.commons.DatePicker.prototype._show = function(){
	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: ._show()");
	}

	// Opening the DatePicker!
	var sInputId  = this._getInputId();
	var oSelector = jQuery.sap.byId(sInputId);
	var oPicker = jQuery('#ui-datepicker-div');
	oPicker.removeClass('sapUi-visibilityHidden');
	oSelector.datepicker( "show" );

	// in RTL case set the position to right
	if(sap.ui.getCore().getConfiguration().getRTL()){
		var oDom = jQuery.sap.domById(this.getId());
		var sRight = (jQuery(document).width() - oDom.offsetLeft - oDom.offsetWidth) + "px";
		oPicker.css('left','').css('right', sRight);
	}
	
	// workaound for jQuery-DatePicker bug in fixed ares
	if(oPicker.css('position') == 'fixed'){
		if((oPicker.position().top - jQuery(document).scrollTop() + oPicker.outerHeight()) > document.documentElement.clientHeight){
			var sNewTop = (oPicker.position().top - jQuery(document).scrollTop() - oPicker.outerHeight() - oSelector.outerHeight()) + 'px';
			oPicker.css('top', sNewTop);
		}
	}

	// Taking note of that state.
	this.oPrivate.bIsVisible = true;
	// Making sure this DatePicker has our keydown handler:
	this._setKeyboardNavigation();
	// Focusing onto the selected or current day:
	// Can't focus right-away in IE8/9! (No issue with Firefox and Safari.)
	//this._focusCalendar();
	// Therefore adding a delay for the Picker to have time to render.
	// Anyway, this can only make this code more robust for future jQuery releases!
	setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);

	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: open");
	}
};

/**
 * Functionality to close the DatePicker
 */
sap.ui.commons.DatePicker.prototype._hide = function(){
	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: ._hide()");
	}

	if (this.oPrivate.bIsVisible) {
		// Record time of closing:
		var currentTime = new Date().getTime();
		this.oPrivate.tLastTimeStamp = currentTime;

		// Proceeding with the closing.
		jQuery('#ui-datepicker-div').addClass('sapUi-visibilityHidden');
		this.oPrivate.bIsVisible = false;
		var sInputId  = this._getInputId();
		var oSelector = jQuery.sap.byId(sInputId);
		oSelector.datepicker( "hide" );

		// By default (ENTER, ESC, Picker-CLICK, ...) focusing back onto the INPUT field.
		// However, clicking anywhere else will override this default behavior.
		var oInput = this.getInputDomRef();
		if (oInput) {
			oInput.focus();
		}
		if (oInput.value != this.getValue()) {
			this._checkChange();
		}
	}

	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: closed");
	}
};

/**
 * BUTTON-click is to toggle the DatePicker.
 */
sap.ui.commons.DatePicker.prototype.onclick = function(oEvent){
	var target = (oEvent.target) ? oEvent.target : oEvent.srcElement;

	// Do not react if disabled/nonEditable, in case defined as such by inheritance.
	if ( !this.getEnabled() || !this.getEditable() ) {
		if (target.nodeName != "INPUT") {
			// button clicked -> focus complete field.
			jQuery.sap.byId(this.getId()).focus();
		}
		return;
	}

	if (target.nodeName != "INPUT") {
		// The button must have been clicked!
		// DIV#myDatePickerId              <-- DIV container
		//   INPUT#myDatePickerId-input    <-- INPUT field
		//   DIV#myDatePickerId-icon       <-- BUTTON field
		if (this.oPrivate.bIsVisible) {
			if (this.oPrivate.bVerboseMode) {
				jQuery.sap.log.debug("DATEPICKER: BUTTON-CLICK HIDE");
			}
			this._hide();
		} else {
			// Discard double-events:
			// Scenario: When clicking outside of the DatePicker and of its INPUT field,
			//           jQuery closes the DatePicker.
			//           Now, if one happens to be clicking on the DatePicker button,
			//           jQuery will first close the DatePicker, then, we will get this
			//           button-click event that we will have to discard, not to immediately
			//           re-open the DatePicker!
			//           The time interval between these two events typically range between
			//           50 and 170 msec.
			var currentTime = new Date().getTime();
			var timeLapse   = currentTime - this.oPrivate.tLastTimeStamp;
			// Assuming that anything received within 300msec interval is invalid.
			if (timeLapse && timeLapse < 300) {
				if (this.oPrivate.bVerboseMode) {
					jQuery.sap.log.debug("DATEPICKER: BUTTON-D-CLICK IGNORED: " + timeLapse + "msec");
				}
				this.getInputDomRef().focus();
			} else {
				if (this.oPrivate.bVerboseMode) {
					jQuery.sap.log.debug("DATEPICKER: BUTTON-CLICK SHOW");
				}
				this._show();
			}
		}
	}
};

/**
 * Pseudo event for pseudo 'show' event (F4, Alt + down-Arrow).
 * Used for opening the DatePicker.
*/
sap.ui.commons.DatePicker.prototype.onsapshow = function(oEvent){
	// Do not react if disabled/nonEditable, in case defined as such by inheritance.
	if ( !this.getEnabled || !this.getEditable() ) {
		return;
	}

	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: .onsapshow()");
	}
	this._show();

	// Would be nice if Framework could intercept the F4 event, so that IE would not open its
	// URL history...
	// Doing it here for now.
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Event handler for saving DATEs when FOCUS is lost.
 * Handles TABs as well.
 */
sap.ui.commons.DatePicker.prototype.onsapfocusleave = function(oEvent){
	// Ignore event if DatePicker is opening.
	if (this.oPrivate.bIsVisible) {
		return;
	}

	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: .onsapfocusleave()");
	}
	
	this._checkChange(oEvent);
};

/**
 * On opening of the DatePicker, the requirement is to:
 * - focus on a move-to day, as done via arrow keys (Up, Right, Down, Left).
 * - focus on the already "selected" date, if one has already been set, or else:
 * - focus on the current date, or else (if having selected a new Month):
 * - focus on the 1st of the Month.
 * Meant to be called if the Picker is already open or just opening.
 * However the use of "setTimeout()" means we will have to make sure the picker
 * is still open before proceeding!
 * Also, can be called "any time" via our OnChangeMonthYear() callback function!
 * Not "prototype" since instance-independent.
*/
sap.ui.commons.DatePicker._focusCalendar = function() {
	var oPicker       = jQuery('#ui-datepicker-div');
	var sControlID    = oPicker.attr('associatedControlId');
	// Return if called back for a Picker that has not even reached the opening state:
	if (!sControlID) {
		return;
	}
	var oControl      = sap.ui.getCore().getControl(sControlID);
	// Return if the Picker is now closed. May happen after setTimeout():
	if (!oControl.oPrivate.bIsVisible) {
		oPicker.attr('restoreFocusOnDay', "");
		return;
	}
	var oDivContainer = jQuery.sap.domById(sControlID);
	var oFocusCell    = null;
	var oFocusDay     = null;

	// Were we to restore the focus against a particular day?
	var sDay = oPicker.attr('restoreFocusOnDay');
	if (sDay) {
		oFocusCell = jQuery('a.ui-state-default');
		var day = Number(sDay);
		if (day <= 0) {day += oFocusCell.length;}
		oFocusDay = oFocusCell[day-1];
		if (oFocusDay && oFocusDay.offsetHeight) {
			// Can only focus on "in-the-month" Anchors (not on "out-of-the-month" SPANs),
			// and can only focus if the calendar day has been rendered (height check).
			oFocusDay.focus();
			// Although we just focused into the Calendar, having our INPUT field
			// still look "in-focus", like a ComboBox would do when open:
			if (oDivContainer.className.indexOf("sapUiTfFoc") == -1) {
				oDivContainer.className += " sapUiTfFoc";
			}
			oPicker.attr('restoreFocusOnDay', "");
			return;
		}
	}

	// Currently selected date:
	oFocusCell = jQuery('td.ui-datepicker-current-day');
	oFocusDay  = (oFocusCell[0]) ? oFocusCell[0].firstChild : null;
	if (oFocusDay && oFocusDay.nodeName == "A" && oFocusDay.offsetHeight) {
		oFocusDay.focus();
		if (oDivContainer.className.indexOf("sapUiTfFoc") == -1) {
			oDivContainer.className += " sapUiTfFoc";
		}
		return;
	}

	// Today:
	oFocusCell = jQuery('td.ui-datepicker-today');
	oFocusDay  = (oFocusCell[0]) ? oFocusCell[0].firstChild : null;
	if (oFocusDay && oFocusDay.nodeName == "A" && oFocusDay.offsetHeight) {
		oFocusDay.focus();
		if (oDivContainer.className.indexOf("sapUiTfFoc") == -1) {
			oDivContainer.className += " sapUiTfFoc";
		}
		return;
	}

	// 1st of the Month:
	oFocusCell = jQuery('a.ui-state-default');
	oFocusDay  = oFocusCell[0];
	if (oFocusDay && oFocusDay.offsetHeight) {
		oFocusDay.focus();
		if (oDivContainer.className.indexOf("sapUiTfFoc") == -1) {
			oDivContainer.className += " sapUiTfFoc";
		}
		return;
	}

	// Just to be on the safe side, in case more time is needed on IE to render
	// the inner calendar, we will try again in 100msec.
	// Infinite loops are avoided by stopping if no open picker is found.
	setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);
};

/**
 * Similar, but simpler, utilities for focusing onto the DDLBs.
 * Can only be called if the Picker is already rendered.
 * Not "prototype" since instance-independent.
*/
sap.ui.commons.DatePicker._focusMonth = function() {
	jQuery('select.ui-datepicker-year')[0].focus(); // Focussing elsewhere closes the month DDLB.
	jQuery('select.ui-datepicker-month')[0].focus();
};

sap.ui.commons.DatePicker._focusYear = function() {
	jQuery('select.ui-datepicker-month')[0].focus(); // Focussing elsewhere closes the year DDLB.
  jQuery('select.ui-datepicker-year')[0].focus();
};

/**
 * Keyboard Navigation:
 * - Tab						: For navigating between the 3 selectors (2 DDLBs + 1 Calendar).
 * - Arrows					: For navigating within a selector.
 * - Enter or Space	: For making a selection.
 * - Esc						: For closing with no selection.
 * - Home						: For navigating to the first day.
 * - End						: For navigating to the last day.
 * - PageUp					: For rendering the previous month.
 * - PageDown				: For rendering the next month.
 *
 * BEWARE: "this" points to the jQuery Picker, as this handler got bound against it.
 *         Use "oControl" for pointing to "this" controller!
 *
 * JAWS: Please do not forget to change cursor modes, as by default, JAWS
 *       uses some keys for its own usage, e.g. RightArrow = "SayNextCharacter".
 *       INSERT-Z will toggle you in and out of normal arrow keyboard navigation mode.
 *       Arrow navigation can be used within the Calendar part of the DatePicker.
 *       Otherwise one can still use Alt-LeftArrow and Alt-RightArrow for navigation.
 *
 * Not "prototype" since instance-independent.
*/
sap.ui.commons.DatePicker._keyboardHandler = function(event) {
	// Sub-function for focusing onto a given calendar day, i.e. 1 through 31.
	function focusDay(nDay) {
		// Retrieving all possible day cells within the calendar:
		var days = jQuery("a.ui-state-default");
		if ((nDay > 0) && (nDay <= days.length)) {
			// Focussing within the current month:
			days[nDay-1].focus(); // Day 1 is at index 0...
		} else if (nDay <= 0) {
			// Focussing within the previous month:
			var nextDay = String(nDay);
			jQuery('#ui-datepicker-div').attr('restoreFocusOnDay', nextDay);
			jQuery("a.ui-datepicker-prev")[0].focus();
			jQuery("a.ui-datepicker-prev")[0].onclick();
		} else {
			// Focussing within the next month:
			var nextDay = String(nDay - days.length);
			jQuery('#ui-datepicker-div').attr('restoreFocusOnDay', nextDay);
			jQuery("a.ui-datepicker-next")[0].focus();
			jQuery("a.ui-datepicker-next")[0].onclick();
		}
	}

	// Sub-function for focusing onto the last calendar day.
	function focusLastDayOfMonth() {
		var days = jQuery("a.ui-state-default");
		days[days.length-1].focus();
	}

	// Sub-function for focusing onto the 1st day of the week, given a day within the week.
	function focusFirstDayOfWeek(nDay) {
		var days = jQuery("a.ui-state-default");
		// Fetching the current Calendar Row. Going up from "A" to "TD" to "TR":
		var currentRow = days[nDay-1].parentNode.parentNode;
		// Looking for the 1st Calendar day found within that row:
		for (var i=0, len=days.length; i<len; i++) {
			if (days[i].parentNode.parentNode == currentRow) {
				days[i].focus();
				return;
			}
		}
	}

	// Sub-function for focusing onto the last day of the week, given a day within the week.
	function focusLastDayOfWeek(nDay) {
		var days = jQuery("a.ui-state-default");
		var currentRow = days[nDay-1].parentNode.parentNode;
		// Looking for the last Calendar day found within that row:
		for (var i=days.length-1; i>=0; i--) {
			if (days[i].parentNode.parentNode == currentRow) {
				days[i].focus();
				return;
			}
		}
	}

	// Retrieving some current data:
	var key              = event.keyCode;
	var target           = (event.target) ? event.target : event.srcElement;
	var currentFocusDay  = Number(target.innerHTML);
	var bIsHeaderEvent   = (target.nodeName == "SELECT"); // DDLB event
	var bIsCalendarEvent = (target.nodeName == "A");      // Day-cell event
	if (!bIsHeaderEvent && !bIsCalendarEvent) {
		jQuery.sap.log.debug("ERROR: DatePicker.prototype._keyboardHandler()");
		return;
	}

	switch (key){
	case jQuery.sap.KeyCodes.TAB: /* 9 */
		// Moving between DDLBs and Calendar areas.
		if (bIsHeaderEvent) {
			if ((target.className.indexOf("year")!=-1 && !event.shiftKey) ||
					(target.className.indexOf("month")!=-1 && event.shiftKey)) {
				setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);
			} else {
				if (target.className.indexOf("year")!=-1) {
					setTimeout(sap.ui.commons.DatePicker._focusMonth, 100);
				}
				else {
					setTimeout(sap.ui.commons.DatePicker._focusYear, 100);
				}
				return;
			} // Native TABing between DDLBs.
		} else {
			if (event.shiftKey) {
				jQuery("select.ui-datepicker-year")[0].focus();
			}
			else                {
				jQuery("select.ui-datepicker-month")[0].focus();
			}
		}
		break;
	case jQuery.sap.KeyCodes.ENTER: /* 13 */
		if (document.activeElement) {
			// Oddly enough, on IE, have to stop jQuery from doing a 2nd selection back!
			if (document.activeElement.className == "ui-datepicker-month"){
				setTimeout(sap.ui.commons.DatePicker._focusMonth, 100);
				break;  // Intercept this event from jQuery.
			} else if (document.activeElement.className == "ui-datepicker-year" ){
				setTimeout(sap.ui.commons.DatePicker._focusYear, 100);
				break;  // Intercept this event from jQuery.
			}
		}
		return; // Leave this event to jQuery to handle.
		break;
	case jQuery.sap.KeyCodes.ESCAPE: /* 27 */
		// Closing the current DatePicker:
		// jQuery('#ui-datepicker-div').hide(); <- Does not work as jQuery will not invoke
		//                                         our supplied onClose() callback function
		//                                         since we are the ones triggering this closure!
		// So, invoking our "_hide()" function instead, as our Controller needs to register this.
		var oPicker    = jQuery('#ui-datepicker-div');
		var sControlID = oPicker.attr('associatedControlId');
		var oControl   = sap.ui.getCore().getControl(sControlID);
		oControl._hide();
		break;
	case jQuery.sap.KeyCodes.SPACE: /* 32 */
		// Select the current day. jQuery handler is on parent TD.
		if (bIsCalendarEvent) {
			target.offsetParent.onclick();
		}
		else {
			return;
		}
		break;
	case jQuery.sap.KeyCodes.PAGE_UP: /* 33 */
		// Activate the "Previous" button:
		jQuery("a.ui-datepicker-prev")[0].focus();
		jQuery("a.ui-datepicker-prev")[0].onclick();
		//sap.ui.commons.DatePicker._focusCalendar();
		//setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);
		// -> Calendar focusing postponed to OnChangeMonthYear() callback function.
		break;
	case jQuery.sap.KeyCodes.PAGE_DOWN: /* 34 */
		// Activate the "Next" button:
		jQuery("a.ui-datepicker-next")[0].focus();
		jQuery("a.ui-datepicker-next")[0].onclick();
		// See PAGE_UP comments.
		break;
	case jQuery.sap.KeyCodes.END: /* 35 */
		// Focus on last day of...
		if (bIsCalendarEvent) {
			if (event.ctrlKey) {
				focusLastDayOfMonth();
			}
			else               {
				focusLastDayOfWeek(currentFocusDay);
			}
		} else {
			return;
		}
		break;
	case jQuery.sap.KeyCodes.HOME: /* 36 */
		// Focus on first day of...
		if (bIsCalendarEvent) {
			if (event.ctrlKey) {
				focusDay(1);
			}
			else               {
				focusFirstDayOfWeek(currentFocusDay);
			}
		} else {
			return;
		}
		break;
	case jQuery.sap.KeyCodes.ARROW_LEFT: /* 37 */
		// Focus onto "day-1", if possible.
		if (bIsCalendarEvent) {
			if (sap.ui.getCore().getConfiguration().getRTL()) {
				focusDay(currentFocusDay+1);
			}
			else {
				focusDay(currentFocusDay-1);
			}
		}
		else {
			return;
		} // Allow native DDLB selection
		break;
	case jQuery.sap.KeyCodes.ARROW_UP: /* 38 */
		// Focus onto "day-7", if possible.
		if (bIsCalendarEvent) {
			focusDay(currentFocusDay-7);
		}
		else {
			return;
		} // Allow native DDLB selection
		break;
	case jQuery.sap.KeyCodes.ARROW_RIGHT: /* 39 */
		// Focus onto "day+1", if possible.
		if (bIsCalendarEvent) {
			if (sap.ui.getCore().getConfiguration().getRTL()) {
				focusDay(currentFocusDay-1);
			}
			else {
				focusDay(currentFocusDay+1);
			}
		}
		else {
			return;
		} // Allow native DDLB selection
		break;
	case jQuery.sap.KeyCodes.ARROW_DOWN: /* 40 */
		// Focus onto "day+7", if possible.
		if (bIsCalendarEvent) {
			focusDay(currentFocusDay+7);
		}
		else                  {
			return;
		} // Allow native DDLB selection
		break;
	default:
		return;
	}

	// If we did not return, then this event was ours. Intercept!
	event.preventDefault();
	event.stopPropagation();
};

/**
 * Registering our DatePicker Keyboard Navigation handler over that of jQuery.
 * Also records the Control ID, as a means to reach it given a jQuery Picker.
 * @private
 */
sap.ui.commons.DatePicker.prototype._setKeyboardNavigation = function() {
	var oPicker = jQuery('#ui-datepicker-div');
	if (oPicker) {
		// BEWARE: Do not register the KeyDown Event Handler more than once!
		//         Avoid multiple eventing and memory gobbler.
		var registeredCtrlId = oPicker.attr('associatedControlId');
		if (!registeredCtrlId) {
			oPicker.bind('keydown', sap.ui.commons.DatePicker._keyboardHandler);
		}
		// Note that jQuery uses only 1 picker for all instances, so we always
		// need to update our current Control ID:
		oPicker.attr('associatedControlId', this.getId());
	} else {
		jQuery.sap.log.debug("ERROR: DatePicker ._setKeyboardNavigation() fails.");
	}
};

/**
 * Checks if there are translations for the supplied locale (e.g. "en-US") or locale-language (e.g. "en").
 * Returns the locale or locale-language for which a match is found.
 * '' is returned if no match is found.
 * @private
 */
sap.ui.commons.DatePicker.prototype.parseForSupportedLocale = function(sLocale) {
	// Do we have texts defined for this locale?
	if (sLocale) {
		// Is this whole "locale" supported?
		var aTranslations = jQuery.datepicker.regional[sLocale];
		if (!aTranslations) {
			// Is the language-only supported?
			var sLanguage = sLocale.split('-')[0];
			if (sLanguage != sLocale) {
				aTranslations = jQuery.datepicker.regional[sLanguage];
				if (!aTranslations) {
					// This language is not supported.
					sLocale = '';
				}else{
					// We can go with the language-part of the locale:
					sLocale = sLanguage;
				}
			}else{
				sLocale = '';
			}
		}
	}
	return sLocale;
};

/**
 * Returns the "locale" (e.g. "en-US") to use for rendering a DatePicker.
 * Checks with the controller, the page, the navigator, until a match is found.
 * If no match is found, return the SAP 'en' default supported locale-language.
 * @private
 */
sap.ui.commons.DatePicker.prototype.getRenderedLocale = function() {
	// Fetch and check if the Control locale can be supported:
	var sLocale = this.getProperty("locale");
	sLocale = this.parseForSupportedLocale(sLocale);

	if (!sLocale) {
		// Next, fetch and check if the Application/URL locale can be supported:
		// (no matter if the Control locale was non nil)
		// NOTE: Best would be if we had a getLocales() function to fetch
		//       all the possible locales at once (URL, Navigator, Portal...).
		sLocale = sap.ui.getCore().getConfiguration().getLanguage();
		sLocale = this.parseForSupportedLocale(sLocale);
	}

	if (!sLocale) {
		// Next, fetch and check if the Navigator locale can be supported:
		// (no matter if the URL locale was non nil)
		if (navigator) {
			if (navigator.language) {
				sLocale = navigator.language;
			}
			else if (navigator.browserLanguage) {
				sLocale = navigator.browserLanguage;
			}
			else if (navigator.systemLanguage) {
				sLocale = navigator.systemLanguage;
			}
			else if (navigator.userLanguage) {
				sLocale = navigator.userLanguage;
			}
		}
		sLocale = this.parseForSupportedLocale(sLocale);
	}

	if (!sLocale) {
		// At last, using the SAP-default "en" locale:
		sLocale = "en";
	}

	return sLocale;
};

// #############################################################################
// Overwritting methods that are generated in DatePicker.API.js
// #############################################################################

/**
 * Setter for property <code>yyyymmdd</code>.
 * Required for handling application inputs (mainly onLoad).
 *
 * Default value is <code>''</code>, which means today.
 * "-1" value means to be discarded (used by tools generating all attributes).
 *
 * @param {string} sYyyymmdd  new value for property <code>yyyymmdd</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DatePicker.prototype.setYyyymmdd = function(sYyyymmdd) {
	// Just disregarding this input if told so:
	if (sYyyymmdd == "-1") {
		return this;
	}

	// Quickly saving this non-validated YYYYMMDD as is, in case getter is called
	// before we are done.
	// "true" to suppress rendering. Rendering done on VALUE change.
	this.setProperty("yyyymmdd", sYyyymmdd, true);

	// No need to process this YYYYMMDD before control is rendered.
	// (Propection against multiple qUnit-test YYYYMMDD changes.)
	// Attribute will be processed onAfterRendering.
	var sInputId = this.getId() + "-input";
	var oInput = jQuery.sap.domById(sInputId);
	if (!oInput) {
		// Erasing any VALUE attribute to avoid potential clashes.
		this.setProperty("value", "-1", true);
		return this;
	}

	// Now we need to tell the jQuery DatePicker!
	// Needed since the jQuery function has its own "this":
	var that = this;
	try{
		// WBN to avoid this function($), but no picker without $.datepicker!
		// Hmm, this statement should be re-checked now that this code only runs onAfterRendering...
		jQuery(function($) {
			// Building a date object with the fix-format received date:
			var oDate = $.datepicker.parseDate('yymmdd', sYyyymmdd);
			// Updating the DatePicker:
			var oSelector = jQuery.sap.byId(sInputId);
			oSelector.datepicker( "setDate" , oDate );
			// Saving the current date value:
			var oInput = jQuery.sap.domById(sInputId);
			var sValue = oInput.value;
			// "true" to suppress rendering. Not needed since we just read it from the DOM!
			that.setProperty("value", sValue, true);
		});
	} catch (e) {
		jQuery.sap.log.debug("Warning: DATEPICKER setYyyymmdd(" + sYyyymmdd + ") failed");
		// Maybe YYYYMMDD was not supplied in the YYYYDDMM format!?
		this.setProperty("value", "", true);
		this.setProperty("yyyymmdd", "", true);
	};

	return this;
};

/**
 * Setter for property <code>value</code>.
 * Required for handling user manual inputs.
 *
 * Default value is <code>''</code>, which means today.
 * "-1" value means to be discarded (used by tools generating all attributes).
 *
 * @param {string} sValue new value for property <code>value</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DatePicker.prototype.setValue = function(sValue) {
	// Just disregarding this input if told so:
	if (sValue == "-1") {
		return this;
	}

	// Quickly saving this non-validated VALUE as is, in case getter is called
	// before we are done.
	// "true" to suppress rendering. jQuery DatePicker handles that.
	this.setProperty("value", sValue, true);

	// No need to process this VALUE before control is rendered.
	// (Propection against multiple qUnit-test VALUE changes.)
	// Attribute will be processed onAfterRendering.
	var sInputId = this.getId() + "-input";
	var oInput = jQuery.sap.domById(sInputId);
	if (!oInput) {
		// Erasing any YYYYMMDD attribute to avoid potential clashes.
		this.setProperty("yyyymmdd", "-1", true);
		return this;
	}

	// Now we need to tell the jQuery DatePicker!
	// Needed since the jQuery function has its own "this":
	var that = this;
	try{
		// jQuery needed to compute yyyymmdd.
		jQuery(function($) {
			// Updating the DatePicker with the raw VALUE:
			var oSelector = jQuery.sap.byId(sInputId);
			oSelector.datepicker( "setDate" , sValue );
			// Using a date object, asking jQuery to reformat it in our fix-YYYYMMDD format:
			var oDate = oSelector.datepicker( "getDate" );
			var sYyyymmdd = $.datepicker.formatDate( 'yymmdd', oDate );
			// Saving the concurrent date attribute:
			// "true" to suppress rendering. Rendering done on VALUE change.
			that.setProperty("yyyymmdd", sYyyymmdd, true);
			// Checking how jQuery interpreted the supplied DATE:
			var oInput = jQuery.sap.domById(sInputId);
			var newValue = oInput.value;
			if (newValue != sValue) {
				// "true" to suppress rendering. jQuery handles that.
				that.setProperty("value", newValue, true);
			}
		});
	} catch (e) {
		jQuery.sap.log.debug("Warning: DATEPICKER setValue(" + sValue + ") failed");
		// Maybe VALUE was not supplied in the appropriate LOCALE format!?
		this.setProperty("value", "", true);
		this.setProperty("yyyymmdd", "", true);
	}

	jQuery.sap.log.debug("DATEPICKER(" + this.getId() + "): setValue: value= " + that.getValue() + " yyyymmdd= " + that.getYyyymmdd());
	return this;
};

/**
 * Setter for property <code>locale</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sLocale  new value for property <code>locale</code>
 * @public
 */
sap.ui.commons.DatePicker.prototype.setLocale = function(sLocale) {
	// Worth checking if there is any change to process:
	var oldLoc = this.getLocale();
	if(sLocale == oldLoc) {
		return this;
	}

	// Saving the supplied locale:
	// "true" to suppress rendering. Rendering done on VALUE change.
	this.setProperty("locale", sLocale, true);
	this.setLocaleTexts(sLocale);

	// If control has not been rendered, there is no point rendering a new one now!
	var sInputId = this.getId() + "-input";
	var oInput = jQuery.sap.domById(sInputId);
	if (!oInput) {
		return this;
	}

	// Retrieving the supported translations, to give jQuery:
	sLocale = this.getRenderedLocale();
	this.setLocaleTexts(sLocale);
	var oSelector = jQuery.sap.byId(sInputId);
	// Have to instantiate a new jQuery DatePicker for reformating the rendered Date!
	// Updating the new jQuery DatePicker and ourselves via a JavaScript Date object.
	var oDate = oSelector.datepicker( "getDate" );
	// Only way to reformat VALUE on the fly, according to the new LOCALE:
	oSelector.datepicker( "destroy" );
	oSelector.datepicker(jQuery.datepicker.regional[sLocale]);
	oSelector.datepicker( "setDate" , oDate );
	this.setValue(oInput.value);

	return this;
};

/**
 * Setter for texts of <code>locale</code>.
 *
 * @param {string} sLocale  new value for property <code>locale</code>
 * @public
 */
sap.ui.commons.DatePicker.prototype.setLocaleTexts = function(sLocale) {

	// check if texts already loaded
	if(!jQuery.datepicker.regional[sLocale] || !jQuery.datepicker.regional[sLocale].closeText){
		var sLanguage = sLocale.split('-')[0];

		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons", sLanguage);

		if(!jQuery.datepicker.regional[sLanguage]){
			jQuery.datepicker.regional[sLanguage] = {};
		}
			//language dependend fields
		jQuery.datepicker.regional[sLanguage].closeText = rb.getText("DATEPICKER_CLOSE_TEXT");
		jQuery.datepicker.regional[sLanguage].prevText = rb.getText("DATEPICKER_PREV_TEXT");
		jQuery.datepicker.regional[sLanguage].nextText = rb.getText("DATEPICKER_NEXT_TEXT");
		jQuery.datepicker.regional[sLanguage].currentText = rb.getText("DATEPICKER_CURRENT_TEXT");
		jQuery.datepicker.regional[sLanguage].monthNames = [rb.getText("DATEPICKER_MONTH_01"),rb.getText("DATEPICKER_MONTH_02"),rb.getText("DATEPICKER_MONTH_03"),
															rb.getText("DATEPICKER_MONTH_04"),rb.getText("DATEPICKER_MONTH_05"),rb.getText("DATEPICKER_MONTH_06"),
															rb.getText("DATEPICKER_MONTH_07"),rb.getText("DATEPICKER_MONTH_08"),rb.getText("DATEPICKER_MONTH_09"),
															rb.getText("DATEPICKER_MONTH_10"),rb.getText("DATEPICKER_MONTH_11"),rb.getText("DATEPICKER_MONTH_12")];
		jQuery.datepicker.regional[sLanguage].monthNamesShort = [rb.getText("DATEPICKER_MONTH_SHORT_01"),rb.getText("DATEPICKER_MONTH_SHORT_02"),rb.getText("DATEPICKER_MONTH_SHORT_03"),
																 rb.getText("DATEPICKER_MONTH_SHORT_04"),rb.getText("DATEPICKER_MONTH_SHORT_05"),rb.getText("DATEPICKER_MONTH_SHORT_06"),
																 rb.getText("DATEPICKER_MONTH_SHORT_07"),rb.getText("DATEPICKER_MONTH_SHORT_08"),rb.getText("DATEPICKER_MONTH_SHORT_09"),
																 rb.getText("DATEPICKER_MONTH_SHORT_10"),rb.getText("DATEPICKER_MONTH_SHORT_11"),rb.getText("DATEPICKER_MONTH_SHORT_12")];
		jQuery.datepicker.regional[sLanguage].dayNames = [rb.getText("DATEPICKER_DAY_01"),rb.getText("DATEPICKER_DAY_02"),rb.getText("DATEPICKER_DAY_03"),rb.getText("DATEPICKER_DAY_04"),
														  rb.getText("DATEPICKER_DAY_05"),rb.getText("DATEPICKER_DAY_06"),rb.getText("DATEPICKER_DAY_07")];
		jQuery.datepicker.regional[sLanguage].dayNamesShort = [rb.getText("DATEPICKER_DAY_SHORT_01"),rb.getText("DATEPICKER_DAY_SHORT_02"),rb.getText("DATEPICKER_DAY_SHORT_03"),rb.getText("DATEPICKER_DAY_SHORT_04"),
															   rb.getText("DATEPICKER_DAY_SHORT_05"),rb.getText("DATEPICKER_DAY_SHORT_06"),rb.getText("DATEPICKER_DAY_SHORT_07")];
		jQuery.datepicker.regional[sLanguage].dayNamesMin = [rb.getText("DATEPICKER_DAY_MIN_01"),rb.getText("DATEPICKER_DAY_MIN_02"),rb.getText("DATEPICKER_DAY_MIN_03"),rb.getText("DATEPICKER_DAY_MIN_04"),
															 rb.getText("DATEPICKER_DAY_MIN_05"),rb.getText("DATEPICKER_DAY_MIN_06"),rb.getText("DATEPICKER_DAY_MIN_07")];
	}
};

/**
 * Returns the DomRef that allows input.
 * Could be overwritten in child-classes
 *
 * @return {DOMNode} The input element's DOM reference or null
 * @protected
 */
sap.ui.commons.DatePicker.prototype.getInputDomRef = function() {
	return jQuery.sap.domById(this.getId() + "-input");
};

/**
 *Overwrite fireChange of TextField because additional parameter
 *
 * @private
 */
sap.ui.commons.DatePicker.prototype.fireChange = function() {
	this.fireEvent("change", {newValue:this.getValue(),
							  newYyyymmdd:this.getYyyymmdd()});
	return this;
};

/**
 * Overwrites the mehod in TextField to add additional YYYYMMDD parameter
 */
sap.ui.commons.DatePicker.prototype._checkChange = function(oEvent) {
	var oInput = this.getInputDomRef(),
		newVal = oInput && oInput.value;

	if(this.getEditable() && this.getEnabled() && newVal != this.getValue() && newVal != this.getYyyymmdd()) {
		if (newVal.length==8 && parseInt(newVal, 10)==newVal){
			this.setYyyymmdd(newVal);
		}else{
			this.setValue(newVal);
		}
		this.fireChange();
	}
};