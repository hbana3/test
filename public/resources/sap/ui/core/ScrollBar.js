/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.ScrollBar.
jQuery.sap.declare("sap.ui.core.ScrollBar");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ScrollBar.
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
 * <li>vertical : boolean</li>
 * <li>scrollPosition : int</li>
 * <li>size : sap.ui.core.CSSSize</li>
 * <li>contentSize : sap.ui.core.CSSSize</li>
 * <li>steps : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>scroll : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Add your documentation for the new ScrollBar
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.ScrollBar = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.ScrollBar.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.core.ScrollBar. 
 * Resulting metadata can be obtained via sap.ui.core.ScrollBar.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.ScrollBar", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getVertical", "setVertical", "getScrollPosition", "setScrollPosition", "getSize", "setSize", "getContentSize", "setContentSize", "getSteps", "setSteps", 
    // aggregations
    
    // associations
    
    // events
    "attachScroll", "detachScroll", 
    // methods
    "bind", "unbind", "pageUp", "pageDown"
  ],

  // ---- control specific ----
  library : "sap.ui.core",
  properties : {
    "vertical" : {name : "vertical", type : "boolean", group : "Behavior", defaultValue : true},
    "scrollPosition" : {name : "scrollPosition", type : "int", group : "Behavior", defaultValue : null},
    "size" : {name : "size", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "contentSize" : {name : "contentSize", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "steps" : {name : "steps", type : "int", group : "Dimension", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "scroll" : "scroll"
  }

});	

sap.ui.core.ScrollBar.M_EVENTS = {'scroll':'scroll'};


/**
 * Getter for property <code>vertical</code>.
 * Orientation. Defines if the Scrollbar is the vertical or horizontal.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>vertical</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getVertical = function() {
	return this.getProperty("vertical");
};

/**
 * Setter for property <code>vertical</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVertical  new value for property <code>vertical</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ScrollBar.prototype.setVertical = function(bVertical) {
	this.setProperty("vertical", bVertical);
	return this;
};


/**
 * Getter for property <code>scrollPosition</code>.
 * Scroll position in steps or pixels.
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>scrollPosition</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getScrollPosition = function() {
	return this.getProperty("scrollPosition");
};

/**
 * Setter for property <code>scrollPosition</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iScrollPosition  new value for property <code>scrollPosition</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ScrollBar.prototype.setScrollPosition = function(iScrollPosition) {
	this.setProperty("scrollPosition", iScrollPosition);
	return this;
};


/**
 * Getter for property <code>size</code>.
 * Size of the Scrollbar (in pixels).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getSize = function() {
	return this.getProperty("size");
};

/**
 * Setter for property <code>size</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sSize  new value for property <code>size</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ScrollBar.prototype.setSize = function(sSize) {
	this.setProperty("size", sSize);
	return this;
};


/**
 * Getter for property <code>contentSize</code>.
 * Size of the scrollable content (in pixels).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>contentSize</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getContentSize = function() {
	return this.getProperty("contentSize");
};

/**
 * Setter for property <code>contentSize</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sContentSize  new value for property <code>contentSize</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ScrollBar.prototype.setContentSize = function(sContentSize) {
	this.setProperty("contentSize", sContentSize);
	return this;
};


/**
 * Getter for property <code>steps</code>.
 * Number of steps to scroll. Used if the size of the content is not known as the data are loaded dynamically.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>steps</code>
 * @public
 * 
 */
sap.ui.core.ScrollBar.prototype.getSteps = function() {
	return this.getProperty("steps");
};

/**
 * Setter for property <code>steps</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iSteps  new value for property <code>steps</code>
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ScrollBar.prototype.setSteps = function(iSteps) {
	this.setProperty("steps", iSteps);
	return this;
};


/**
 * Scroll event. 
 *
 * @name sap.ui.core.ScrollBar#scroll
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.ScrollBarAction} oControlEvent.getParameters.action Actions are: Click on track, button, drag of thumb, or mouse wheel click.
 * @param {boolean} oControlEvent.getParameters.forward Direction of scrolling: back (up) or forward (down).
 * @param {int} oControlEvent.getParameters.newScrollPos Current Scroll position either in pixels or in steps.
 * @param {int} oControlEvent.getParameters.oldScrollPos Old Scroll position - can be in pixels or in steps.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'scroll' event of this <code>sap.ui.core.ScrollBar</code>.<br/>
 * Scroll event. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ScrollBar.prototype.attachScroll = function(oData, fnFunction, oListener) {
	this.attachEvent("scroll", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'scroll' event of this <code>sap.ui.core.ScrollBar</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.ScrollBar.prototype.detachScroll = function(fnFunction, oListener) {
	this.detachEvent("scroll", fnFunction, oListener);
	return this;	
};

/**
 * Fire event scroll to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'action' of type <code>sap.ui.core.ScrollBarAction</code> Actions are: Click on track, button, drag of thumb, or mouse wheel click.</li>
 * <li>'forward' of type <code>boolean</code> Direction of scrolling: back (up) or forward (down).</li>
 * <li>'newScrollPos' of type <code>int</code> Current Scroll position either in pixels or in steps.</li>
 * <li>'oldScrollPos' of type <code>int</code> Old Scroll position - can be in pixels or in steps.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.ScrollBar} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.ScrollBar.prototype.fireScroll = function(mArguments) {
	this.fireEvent("scroll", mArguments);
	return this;
};


/**
 * Binds the mouse wheel scroll event of the control that has the scrollbar to the scrollbar itself.
 *
 * @name sap.ui.core.ScrollBar.prototype.bind
 * @function
 * @param {string} 
 *         sOOwnerDomRef
 *         Dom ref of the control that uses the scrollbar

 * @type void
 * @public
 */


/**
 * Unbinds the mouse wheel scroll event of the control that has the scrollbar
 *
 * @name sap.ui.core.ScrollBar.prototype.unbind
 * @function
 * @param {string} 
 *         sOOwnerDomRef
 *         Dom ref of the Control that uses the scrollbar

 * @type void
 * @public
 */


/**
 * Page Up is used to scroll one page back.
 *
 * @name sap.ui.core.ScrollBar.prototype.pageUp
 * @function

 * @type void
 * @public
 */


/**
 * Page Down is used to scroll one page forward.
 *
 * @name sap.ui.core.ScrollBar.prototype.pageDown
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/core/ScrollBar.js
/**
 * This file defines behavior for the control,
 */

// =============================================================================
// BASIC CONTROL API
// =============================================================================

/**
 * Initialization of the Scrollbar control
 * @private
 */
sap.ui.core.ScrollBar.prototype.init = function(){

	// JQuery Object - Dom reference of the scroll bar
	this._$ScrollDomRef = null;

	// In pixels - exact position
	this._iOldScrollPos = 0;

	// In steps
	this._iOldStep = 0;
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.core.ScrollBar.prototype.onBeforeRendering = function() {
	jQuery.sap.byId(this.getId() + "-sb").unbind("scroll", this.onscroll);
	if (this._bStepMode) {
		this.setProperty("scrollPosition", this._iOldStep, true);
	}
	else {
		this.setProperty("scrollPosition", this._iOldScrollPos, true);
	}
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.core.ScrollBar.prototype.onAfterRendering = function () {
	 // count of steps (comes per API)
	this._iSteps = this.getSteps();

	// content size in pixel
	var sContentSize = this.getContentSize();

	// determine the mode
	this._bStepMode = !sContentSize;

	var iScrollBarSize = this.getSize();
	if(jQuery.sap.endsWith(iScrollBarSize,"px")){
		iScrollBarSize = iScrollBarSize.substr(0, iScrollBarSize.length -2);
	} else {
		iScrollBarSize = this.getVertical() ? this.$().height() : this.$().width();
	}

	var stepSize = null;

	var $ffsize = jQuery('#' + this.getId() + "-ffsize");
	if (jQuery.browser.mozilla) {
		stepSize = $ffsize.outerHeight();
	}
	$ffsize.remove();

	if  (jQuery.browser.webkit) {
		stepSize = 40 / (document.height / jQuery(document).height());
	}

	if (this.getVertical()) {
		this._iFactor = jQuery.browser.mozilla ? stepSize :	jQuery.browser.webkit ? stepSize : Math.floor(iScrollBarSize  * 0.125);
		this._iFactorPage = jQuery.browser.mozilla ? iScrollBarSize - stepSize : Math.floor(iScrollBarSize * 0.875)
	} else {
		this._iFactor = jQuery.browser.mozilla ? 10 : jQuery.browser.webkit ? stepSize :  7 ;
		this._iFactorPage = jQuery.browser.mozilla ? Math.floor(iScrollBarSize * 0.8) : jQuery.browser.webkit ? Math.floor(iScrollBarSize  * 0.875) : iScrollBarSize-14;
	}

	this._$ScrollDomRef = jQuery.sap.byId(this.getId() + "-sb");

	if (this._bStepMode) {
		if (this.getVertical()) {
			// calculate the height of the content size => scroll bar height + (steps * browser step size)
			var iContentSize = this._$ScrollDomRef.height() + this._iSteps * this._iFactor;
			// set the content size
			this._$ScrollDomRef.find("div").height(iContentSize);
		} else {
			// calculate the height of the content size => scroll bar size + (steps * browser step size)
			var iContentSize = this._$ScrollDomRef.width() + this._iSteps * this._iFactor;
			// set the content size
			this._$ScrollDomRef.find("div").width(iContentSize);
		}
	}


	this.setScrollPosition(this.getScrollPosition() ? this.getScrollPosition() : 0);

	this._$ScrollDomRef.bind("scroll", jQuery.proxy(this.onscroll, this));
};

//=============================================================================
// CONTROL EVENT HANDLING
//=============================================================================

/**
 * Event object contains detail (for Firefox and Opera), and wheelData (for Internet Explorer, Safari, and Opera). 
 * Scrolling down is a positive number for detail, but a negative number for wheelDelta.
 * @param {jQuery.Event} oEvent Event object contains detail (for Firefox and Opera), and wheelData (for Internet Explorer, Safari, and Opera).
 * @private
*/
sap.ui.core.ScrollBar.prototype.onmousewheel = function(oEvent)  {

   // So let's scale and make negative value for all scroll down in all browsers.
   var wheelData = oEvent.detail ? oEvent.detail : oEvent.wheelDelta * (-1) / 40;

   // find out if the user is scrolling up= back or down= forward.
   var bForward = wheelData > 0 ? true : false; 

   if (jQuery.sap.containsOrEquals(this._$ScrollDomRef[0], oEvent.target)) {
	   this._doScroll(sap.ui.core.ScrollBarAction.MouseWheel, bForward);
   } else {

	   this._bMouseWheel = true;
	   var pos = null;
	   if (this._bStepMode) {
		   pos = wheelData + this._iOldStep;
	   } else {
		   pos = wheelData * this._iFactor + this._iOldScrollPos;
	   }

	   this.setScrollPosition(pos);
   }

  // prevent the default behavior
  oEvent.preventDefault();
  oEvent.stopPropagation();
  return false;

};


/**
 * Handles the Scroll event.
 * @param {jQuery.Event} oEvent Event object
 * @private
*/
sap.ui.core.ScrollBar.prototype.onscroll = function(oEvent) {

	// Set new Scroll position
	var iScrollPos = null;
	if (this._$ScrollDomRef){
		if (this.getVertical()) {
			iScrollPos = this._$ScrollDomRef.scrollTop();
		} else {
			iScrollPos = this._$ScrollDomRef.scrollLeft();
		}
	}

	var iDelta = iScrollPos - this._iOldScrollPos;

	var bForward = iDelta > 0 ? true : false; 
	if (iDelta < 0) {
		iDelta = iDelta*(-1);
	}

	var eAction = sap.ui.core.ScrollBarAction.Drag;
	if (iDelta == this._iFactor ) {
		eAction = sap.ui.core.ScrollBarAction.Step;
	} else if (iDelta == this._iFactorPage) {
		eAction = sap.ui.core.ScrollBarAction.Page;
	} else if (this._bMouseWheel) {
		eAction = sap.ui.core.ScrollBarAction.MouseWheel;
	}

	// Proceed scroll
	this._doScroll(eAction, bForward);

	oEvent.preventDefault();
	oEvent.stopPropagation();
	return false;
};


//=============================================================================
// PUBLIC API METHODS
//=============================================================================

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.core.ScrollBar.prototype.unbind = function (oOwnerDomRef) {
	if (oOwnerDomRef) {
		this._$OwnerDomRef = jQuery(oOwnerDomRef);
		this._$OwnerDomRef.unbind(jQuery.browser.mozilla ? "DOMMouseScroll" : "mousewheel", this.onmousewheel);
	}
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.core.ScrollBar.prototype.bind = function (oOwnerDomRef) {
	if (oOwnerDomRef) {
		this._$OwnerDomRef = jQuery(oOwnerDomRef);
		this._$OwnerDomRef.bind(jQuery.browser.mozilla ? "DOMMouseScroll" : "mousewheel", jQuery.proxy(this.onmousewheel, this));
	}
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.core.ScrollBar.prototype.pageUp = function() {
	// call on scroll
	this._doScroll(sap.ui.core.ScrollBarAction.Page, false);
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.core.ScrollBar.prototype.pageDown = function() {
    // call on scroll
    this._doScroll(sap.ui.core.ScrollBarAction.Page, true);
};

//=============================================================================
// OVERRIDE OF SETTERS
//=============================================================================

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.core.ScrollBar.prototype.setScrollPosition = function (scrollPosition) {

	var iCheckedSP = Math.max(scrollPosition, 0);

	if (this._bStepMode === undefined) this._bStepMode = !this.getContentSize();

	var iScrollPos = iCheckedSP;
	if (this._bStepMode) {

		// check the max possible size
		iCheckedSP = Math.min(iCheckedSP, this.getSteps());

		// STEPS MODE - Calculate the position in PX
		iScrollPos = iCheckedSP * this._iFactor;
	}

	this.setProperty("scrollPosition", iCheckedSP, true);

	if (this._$ScrollDomRef) {
		if (this.getVertical()) {
			this._$ScrollDomRef.scrollTop(iScrollPos);
		} else {
			this._$ScrollDomRef.scrollLeft(iScrollPos);
		}
	}
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.core.ScrollBar.prototype.setContentSize = function (sContentSize) {

	// Trigger the rerendering when switching the from step mode.
	this.setProperty("contentSize", sContentSize, !this._bStepMode);
	if (!this._bStepMode) {
		var $SbCnt = jQuery.sap.byId(this.getId() + "-sbcnt");
		if ($SbCnt) {
			if (this.getVertical()) {
				$SbCnt.height(sContentSize);
			} else {
				$SbCnt.width(sContentSize);
			}
		}
	}
};

//=============================================================================
// PRIVATE METHODS
//=============================================================================

/**
* Process scroll events and fire scroll event
* @param eAction Action type that can be mouse wheel, Drag, Step or Page.
* @param bForward Scroll Direction - forward or back
* @private
*/
sap.ui.core.ScrollBar.prototype._doScroll = function(eAction, bForward) {

	// Get new scroll position
	var iScrollPos = null;
	if (this._$ScrollDomRef){
		if (this.getVertical()) {
			iScrollPos = this._$ScrollDomRef.scrollTop();
		} else {
			iScrollPos = this._$ScrollDomRef.scrollLeft();
		}
	}

	if (this._bStepMode) {

		// STEP MODE 
		var iStep = parseInt(iScrollPos / this._iFactor, 10);
		var iOldStep = this._iOldStep; //or   parseInt(this._iOldScrollPos / this._iFactor, 10);

		if (iOldStep !== iStep) {

			// Set new scrollposition withouit the rerendering
			this.setProperty("scrollPosition", iStep, true);

			jQuery.sap.log.debug("-----STEPMODE-----: New Step: " + iStep + " --- Old Step: " +  iOldStep  + " --- Scroll Pos in px: " + iScrollPos + " --- Action: " + eAction + " --- Direction is forward: " + bForward);
			this.fireScroll({ action: eAction, forward: bForward, newScrollPos: iStep, oldScrollPos: iOldStep});
			this._iOldStep = iStep;

		}
	} else {

		// Set new scrollposition withouit the rerendering
		this.setProperty("scrollPosition", iScrollPos, true);

		jQuery.sap.log.debug("-----PIXELMODE-----: New ScrollPos: " + iScrollPos + " --- Old ScrollPos: " +  this._iOldScrollPos + " --- Action: " + eAction + " --- Direction is forward: " + bForward);
		this.fireScroll({ action: eAction, forward: bForward, newScrollPos: iScrollPos, oldScrollPos: this._iOldScrollPos});
	}
	this._iOldScrollPos = iScrollPos;
	this._bMouseWheel = false;

};