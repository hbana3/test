/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Overlay.
jQuery.sap.declare("sap.ui.ux3.Overlay");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Overlay.
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
 * <li>openButtonVisible : boolean</li>
 * <li>closeButtonVisible : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>close : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>openNew : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>open : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Overlay Control
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.Overlay = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.Overlay.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.Overlay. 
 * Resulting metadata can be obtained via sap.ui.ux3.Overlay.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.Overlay", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getOpenButtonVisible", "setOpenButtonVisible", "getCloseButtonVisible", "setCloseButtonVisible", 
    // aggregations
    
    // associations
    
    // events
    "attachClose", "detachClose", "attachOpenNew", "detachOpenNew", "attachOpen", "detachOpen", 
    // methods
    "open", "close", "isOpen"
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "openButtonVisible" : {name : "openButtonVisible", type : "boolean", group : "Misc", defaultValue : true},
    "closeButtonVisible" : {name : "closeButtonVisible", type : "boolean", group : "Misc", defaultValue : true}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "close" : "close", 
    "openNew" : "openNew", 
    "open" : "open"
  }

});	

sap.ui.ux3.Overlay.M_EVENTS = {'close':'close','openNew':'openNew','open':'open'};


/**
 * Getter for property <code>openButtonVisible</code>.
 * Defines whether the 'Open' button shall be visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>openButtonVisible</code>
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.getOpenButtonVisible = function() {
	return this.getProperty("openButtonVisible");
};

/**
 * Setter for property <code>openButtonVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bOpenButtonVisible  new value for property <code>openButtonVisible</code>
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Overlay.prototype.setOpenButtonVisible = function(bOpenButtonVisible) {
	this.setProperty("openButtonVisible", bOpenButtonVisible);
	return this;
};


/**
 * Getter for property <code>closeButtonVisible</code>.
 * Defines whether the 'Close' button shall be visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>closeButtonVisible</code>
 * @public
 * 
 */
sap.ui.ux3.Overlay.prototype.getCloseButtonVisible = function() {
	return this.getProperty("closeButtonVisible");
};

/**
 * Setter for property <code>closeButtonVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bCloseButtonVisible  new value for property <code>closeButtonVisible</code>
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Overlay.prototype.setCloseButtonVisible = function(bCloseButtonVisible) {
	this.setProperty("closeButtonVisible", bCloseButtonVisible);
	return this;
};


/**
 * Event is fired when the ThingInspector is closed 
 *
 * @name sap.ui.ux3.Overlay#close
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 * Event is fired when the ThingInspector is closed 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Overlay.prototype.attachClose = function(oData, fnFunction, oListener) {
	this.attachEvent("close", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Overlay.prototype.detachClose = function(fnFunction, oListener) {
	this.detachEvent("close", fnFunction, oListener);
	return this;	
};

/**
 * Fire event close to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Overlay.prototype.fireClose = function(mArguments) {
	this.fireEvent("close", mArguments);
	return this;
};


/**
 * Event is fired when the 'Open' button of the ThingInspector is clicked 
 *
 * @name sap.ui.ux3.Overlay#openNew
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'openNew' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 * Event is fired when the 'Open' button of the ThingInspector is clicked 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Overlay.prototype.attachOpenNew = function(oData, fnFunction, oListener) {
	this.attachEvent("openNew", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'openNew' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Overlay.prototype.detachOpenNew = function(fnFunction, oListener) {
	this.detachEvent("openNew", fnFunction, oListener);
	return this;	
};

/**
 * Fire event openNew to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Overlay.prototype.fireOpenNew = function(mArguments) {
	this.fireEvent("openNew", mArguments);
	return this;
};


/**
 * Event is fired when the ThingInspector is opened 
 *
 * @name sap.ui.ux3.Overlay#open
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 * Event is fired when the ThingInspector is opened 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Overlay.prototype.attachOpen = function(oData, fnFunction, oListener) {
	this.attachEvent("open", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Overlay.prototype.detachOpen = function(fnFunction, oListener) {
	this.detachEvent("open", fnFunction, oListener);
	return this;	
};

/**
 * Fire event open to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Overlay.prototype.fireOpen = function(mArguments) {
	this.fireEvent("open", mArguments);
	return this;
};


/**
 * Opens Overlay as pop up
 *
 * @name sap.ui.ux3.Overlay.prototype.open
 * @function

 * @type void
 * @public
 */


/**
 * Closes Overlay
 *
 * @name sap.ui.ux3.Overlay.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * Checks whether Overlay is open
 *
 * @name sap.ui.ux3.Overlay.prototype.isOpen
 * @function

 * @type boolean
 * @public
 */


// Start of sap/ui/ux3/Overlay.js
jQuery.sap.require("sap.ui.core.Popup");

/**
 * This file defines behavior for the control,
 */
sap.ui.ux3.Overlay.prototype.init = function() {
	this._oPopup = new sap.ui.core.Popup(this, false, true);
	this._overridePopupEventing();
};

/**
 * Set size of TI after rendering: If running in Shell we sync with shell
 * canvas. The size will then be set by the shell.
 */
sap.ui.ux3.Overlay.prototype.onAfterRendering = function() {
	jQuery.sap.byId(this.getId()).css("position", "fixed");
	var oShell = jQuery(".sapUiUx3Shell").control();
	if (oShell.length) {
		oShell[0].syncWithCanvasSize(this.getDomRef());
	} else {
		jQuery.sap.byId(this.getId()).css("bottom", "0px").css("top", "0px").css("left", "0px").css("right", "0px");
	}
};
/**
 * Destroys this instance of Overlay, called by Element#destroy()
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype.exit = function() {
	this.close();
	this._oPopup.destroy();
	this._oPopup = null;
};

/**
 * Opens this instance of Overlay
 *
 * @public
 */
sap.ui.ux3.Overlay.prototype.open = function() {
	if (this._oPopup.isOpen()) {
		return;
	}
	this._oPopup.open(400);
	jQuery.sap.byId(this.getId()).css("position", "fixed");
	var oShell = jQuery(".sapUiUx3Shell").control();
	if (oShell.length) {
		oShell[0].syncWithCanvasSize(this.getDomRef());
	} else {
		jQuery.sap.byId(this.getId()).css("bottom", "0px").css("top", "0px").css("left", "0px").css("right", "0px");
	}
	//fire open event
	this.fireOpen({
		id : this.getId()
	});
}

/**
 * Closes this instance of Overlay
 *
 * @public
 */;
sap.ui.ux3.Overlay.prototype.close = function() {
	if (!this._oPopup.isOpen()) {
		return;
	}
	this._oPopup.close(400);
	var oShell = jQuery(".sapUiUx3Shell").control();
	if (oShell.length) {
		oShell[0].syncWithCanvasSize(null);
	}
}
/**
 * Handle the click event happening on the Overlay instance.
 *
 * @param {jQuery.EventObject}
 *            oEvent
 * @private
 */;
sap.ui.ux3.Overlay.prototype.onclick = function(oEvent) {
	this._handleButtonEvent(oEvent);
};
/**
 * Handle the sapselect pseudo event happening on the Overlay instance.
 *
 * @param {jQuery.EventObject}
 *            oEvent
 * @private
 */
sap.ui.ux3.Overlay.prototype.onsapselect = function(oEvent) {
	this._handleButtonEvent(oEvent);
};
/**
 * Eventhandling for Overlay Buttons
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._handleButtonEvent = function(oEvent) {
	var elementId = oEvent.target.id;
	if (elementId.indexOf("close") != -1) {
		this.close();
		this.fireClose({
			id : this.getId()
		});
	} else if (elementId.indexOf("open") != -1) {
		this.fireOpenNew({
			id : this.getId()
		});
	}
};
/**
 * Load language dependent texts.
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._getText = function(sKey, aArgs) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	var sText = undefined;
	if(rb) {
		sText = rb.getText(sKey);
	}
	if(sText && aArgs){
		for(var index=0; index<aArgs.length; index++){
			sText = sText.replace("{"+index+"}", aArgs[index]);
		}
	}
	return sText ? sText : sKey;
};
/**
 * Override Popup Events
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._overridePopupEventing = function() {
	var that = this;
	// don't bring Overlay to the front on mouse down. Existing
	// Toolpopups should allways be in front
	this._oPopup.onmousedown = function(oEvent) {
		return;
	}
};
/* Redefinition of generated API methods */

// Implementation of API method isOpen
sap.ui.ux3.Overlay.prototype.isOpen = function() {
	return this._oPopup.isOpen();
};