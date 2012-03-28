/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.TooltipBase.
jQuery.sap.declare("sap.ui.core.TooltipBase");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new TooltipBase.
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
 * <li>text : string</li></ul>
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
 * Base class for any extended tooltip, for example for RichTooltip. It provides the opening/closing behavior and the main "text" property.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.TooltipBase = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.TooltipBase.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.core.TooltipBase. 
 * Resulting metadata can be obtained via sap.ui.core.TooltipBase.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.TooltipBase", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  "abstract" : true,
  publicMethods : [
    // properties 
    "getText", "setText"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.core",
  properties : {
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : ""}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>text</code>.
 * The text that is shown in the tooltip that extends the TooltipBase class, for example in RichTooltip.
 *
 * Default value is <code>""</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.core.TooltipBase.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>""</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.TooltipBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.TooltipBase.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


// Start of sap/ui/core/TooltipBase.js
jQuery.sap.require("sap.ui.core.Popup");

/**
 * Return the popup to use but do not expose it to the outside.
 * @type sap.ui.commons.Popup
 * @return The popup to use
 * @private
 */
sap.ui.core.TooltipBase.prototype._getPopup = jQuery.sap.getter((function() {
		var oPopup = new sap.ui.core.Popup();
			oPopup.setShadow(true);
			return oPopup;
		}())
);

/**
 * When a control that has a Tooltip gets the focus, this method is called.
 * @param {jQuery.EventObject} oEvent The event that occurred on the Control that has extended Tooltip.
 * @private
 */
sap.ui.core.TooltipBase.prototype.onfocusin = function(oEvent) {

	var oSC = jQuery(oEvent.target).control(0);
	if (oSC != null) {
		var oDomRef = oSC.getFocusDomRef();
		this.sStoredTooltip = null;
		if (oDomRef.title && oDomRef.title!= "") {
			this.sStoredTooltip = oDomRef.title;
			oDomRef.title = "";
		}

		var oPopup = this._getPopup();
		if (!(oPopup.isOpen() && oPopup.getContent() == this)) {
			// Update Tooltip or create a new span with texts.
			sap.ui.getCore().getRenderManager().render(this, sap.ui.getCore().getStaticAreaRef(), true);
		}

		// Attach accessibility info to the control oSC

		var sValue = oDomRef.getAttribute("aria-describedby");
		if (sValue == null || sValue== "" ) {
			oDomRef.setAttribute("aria-describedby", "sap-ui-rtt-title sap-ui-rtt-txt");
		}
		else if (sValue.indexOf("sap-ui-rtt-title sap-ui-rtt-txt") == -1) {
			oDomRef.setAttribute("aria-describedby", sValue + " sap-ui-rtt-title sap-ui-rtt-txt");
		}
	}
};

/**
 * When a control that has a Tooltip looses the focus, this method is called.
 * @param {jQuery.EventObject} oEvent The event that occurred on the extended Tooltip.
 * @private
 */
sap.ui.core.TooltipBase.prototype.onfocusout = function(oEvent) {
	var oSC = jQuery(oEvent.target).control(0);
	if (oSC != null) {

		var oDomRef = oSC.getFocusDomRef();
		if (this.sStoredTooltip) {
			oDomRef.title = this.sStoredTooltip;
		}

		// Detach accessibility information from control oSC.
		var sValue = oDomRef.getAttribute("aria-describedby");
		if (sValue && sValue.indexOf("sap-ui-rtt-title sap-ui-rtt-txt") >= 0){
			if (jQuery.trim(sValue) == "sap-ui-rtt-title sap-ui-rtt-txt") {
				oDomRef.removeAttribute("aria-describedby");
			}
			else  {
				sValue = sValue.replace("sap-ui-rtt-title sap-ui-rtt-txt", "");
				oDomRef.setAttribute("aria-describedby", sValue);
			}
		}
	}
	if (this.sOpenTimeout){
		jQuery.sap.clearDelayedCall(this.sOpenTimeout);
		this.sOpenTimeout = null;
	}

	// Avoid closing the popup when there is a move inside the control to another control or element (for example div)
	this.sCloseNowTimeout = jQuery.sap.delayedCall(100, this, "closePopup");
};

/**
 *	Check if the parameter is a standard browser Tooltip.
 * @return {boolean} - true if the Tooltip is a standard tooltip type of string. False if not a string or empty. 
 * @private
 */
sap.ui.core.TooltipBase.prototype.isStandardTooltip = function(oTooltip) {
	return  (typeof oTooltip === "string" &&  (jQuery.trim(oTooltip)) !== "");
};

/**
* Handle the mouseover event of a Control that has a Tooltip.
* @param {jQuery.EventObject} oEvent - The event that occurred on the Control.
* @private
 */
sap.ui.core.TooltipBase.prototype.onmouseover = function(oEvent) {

	// The Element or Control that initiated the event.
	var oEventSource = jQuery(oEvent.target).control(0);
	if ( oEventSource != null) {
		// The current Element or Control within the event bubbling phase.
		var oCurrentElement = jQuery(oEvent.currentTarget).control(0);
		// Cancel close event if we move from parent with extended tooltip to child without own tooltip
		if ( oCurrentElement !== oEventSource &&  !this.isStandardTooltip(oEventSource.getTooltip()))  {
			if (this.sCloseNowTimeout){
				jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);
				this.sCloseNowTimeout = null;
				return;
			}
		}

		// Indicates the element being exited.
		var oLeftElement = jQuery(oEvent.relatedTarget).control(0);
		if (oLeftElement) {

			// Cancel close event if we move from child without own tooltip to the parent with rtt - current element has to have rtt.
			if (oLeftElement.getParent()){
				if (oLeftElement.getParent() === oCurrentElement && oCurrentElement === oEventSource) {
					// It is a child of the current element and has no tooltip
					var oLeftElementTooltip = oLeftElement.getTooltip();
					if ( !this.isStandardTooltip(oLeftElementTooltip) && (!oLeftElementTooltip || !(oLeftElementTooltip instanceof sap.ui.core.TooltipBase))) {
						if (this.sCloseNowTimeout){
							jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);
							this.sCloseNowTimeout = null;
							return;
						}
					}
				}
			}
		}

		// Open the popup
		if (this._currentControl === oEventSource || !this.isStandardTooltip(oEventSource.getTooltip())) {
			// Set all standard tooltips to empty string
			this.removeStandardTooltips(oEventSource);
			// Open with delay 0,5 sec.
			this.sOpenTimeout = jQuery.sap.delayedCall(500, this, "openPopup", [this._currentControl]);
			// We need this for the scenario if the both a child and his parent have an RichTooltip
			oEvent.stopPropagation();
			oEvent.preventDefault();
		}
	}
};

/**
 * Handle the mouseout event  of a Control that has a Tooltip.
 * @param {jQuery.EventObject} oEvent Event that occurred on the Control that has extended Tooltip.
 * @private
 */
sap.ui.core.TooltipBase.prototype.onmouseout = function(oEvent) {
	if (this.sOpenTimeout){
		jQuery.sap.clearDelayedCall(this.sOpenTimeout);
		this.sOpenTimeout = null;
	}
	// Avoid closing the popup when there is a move inside the control to another control or element (for example div)
	this.sCloseNowTimeout = jQuery.sap.delayedCall(100, this, "closePopup");
};

/**
 * Close the popup holding the content of the tooltip.
 * Clears all delayed calls for closing this popup as those are not needed anymore.
 * @private
 */
sap.ui.core.TooltipBase.prototype.closePopup = function() {
	var oPopup = this._getPopup();
	if (this.sCloseNowTimeout) {
		jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);
	}
	this.sCloseNowTimeout = null;

	oPopup.close();
	this.restoreStandardTooltips();
};


/**
 * Open the popup holding the content of the tooltip.
 * @param {Object} oSC - the Control that has extended Tooltip.
 * @private
 */
sap.ui.core.TooltipBase.prototype.openPopup = function(oSC) {
	if (oSC.getTooltip() != null) {

		// Clear Delayed Call if exist
		if (this.sCloseNowTimeout){
			jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);
			this.sCloseNowTimeout = null;
			return;
		}

		// If already opened with the needed content then return
		var oPopup = this._getPopup();
		if (oPopup.isOpen() && oPopup.getContent() == this) {
			return;
		}

		// Tooltip will be displayed. Ensure the content is rendered. As this is no control, the popup will not take care of rendering.
		sap.ui.getCore().getRenderManager().render(this, sap.ui.getCore().getStaticAreaRef(), true);

		// Open popup
		var oDomRef = oSC.getDomRef();
		oPopup.setContent(this);
		oPopup.setPosition(sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.BeginBottom, oDomRef, "10 3");
		oPopup.open();
	}
};

/**
 * Switch off the browser standard tooltips and store them in array.
 * @private
*/
sap.ui.core.TooltipBase.prototype.removeStandardTooltips = function(oSC) {
	var oDomRef = oSC.getDomRef();
	this.aStoredTooltips = [];
	var tooltip = "";
	while (oDomRef && !(oDomRef === document)) {
		tooltip = oDomRef.title;
		if ( tooltip ) {
			this.aStoredTooltips.push({ domref : oDomRef, tooltip : tooltip });
			oDomRef.title = "";
		}
		oDomRef = oDomRef.parentNode;
	}
};

/**
 * Restore the standard tooltips.
 * @param {Object} oSC Source Control on what Extended tooltip has to be called.
 * @private
 */
sap.ui.core.TooltipBase.prototype.restoreStandardTooltips = function(oSC) {
	if (this.aStoredTooltips){
		for (var i = 0; i < this.aStoredTooltips.length; i++) {
			var oDomRef = this.aStoredTooltips[i].domref;
			oDomRef.title = this.aStoredTooltips[i].tooltip;
		}
	}
	this.aStoredTooltips = null;
};

/* Store reference to original setParent function */
sap.ui.core.TooltipBase.prototype._setParent = sap.ui.core.TooltipBase.prototype.setParent;

/**
 * Defines the new parent of this TooltipBase using {@link sap.ui.core.Element#setParent}.
 * Additionally closes the Tooltip.
 *
 * @param {sap.ui.core.Element} oParent The element that becomes this element's parent.
 * @param {string} sAggregationName - The name of the parent element's aggregation.
 * @private
 */
sap.ui.core.TooltipBase.prototype.setParent = function(oParent, sAggregationName) {
	// As there is a new parent, close popup.
	this.closePopup();
	this._setParent.apply(this, arguments);
};

/**
 * Handle the key down event Ctrl+i and ESCAPE.
 * @param {jQuery.Event} oEvent - the event that occurred on the Parent of the Extended Tooltip.
 * @private
 */
sap.ui.core.TooltipBase.prototype.onkeydown = function(oEvent) {
	// Ctrl is pressed together with "i" - Open Rich tooltip.
	if(oEvent.ctrlKey && oEvent.which == jQuery.sap.KeyCodes.I) {
		// The Element or Control that initiated the event.

		var oEventSource = jQuery(oEvent.target).control(0);
		if (oEventSource != null) {
			// If the current control is the event source or event source does not have a standard tooltip
			if (this._currentControl === oEventSource || !this.isStandardTooltip(oEventSource.getTooltip())) {

				// Set all standard tooltips to empty string
				this.removeStandardTooltips(oEventSource);

				// Open extended tooltip
				this.openPopup( this._currentControl);

				oEvent.preventDefault();
				oEvent.stopPropagation();
			}
		}
	}
	// If Ecs is pressed then close the Rich Tooltip.
	else if(oEvent.which == jQuery.sap.KeyCodes.ESCAPE) {
		if (this.sOpenTimeout) {
			jQuery.sap.clearDelayedCall(this.sOpenTimeout);
			this.sOpenTimeout = null;
		}
		this.closePopup();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};
