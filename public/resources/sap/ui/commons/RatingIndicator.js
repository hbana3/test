/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RatingIndicator.
jQuery.sap.declare("sap.ui.commons.RatingIndicator");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new RatingIndicator.
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
 * <li>visible : boolean</li>
 * <li>editable : boolean</li>
 * <li>maxValue : int</li>
 * <li>value : float</li>
 * <li>iconSelected : string</li>
 * <li>iconUnselected : string</li>
 * <li>iconHovered : string</li>
 * <li>visualMode : sap.ui.commons.RatingIndicatorVisualMode</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>change : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Is used to let the user do some rating on a certain topic. The amount of rating symbols can be specified, as well as the URIs to the
 * image icons which shall be used as rating symbols. When the user performs a rating, an event is fired.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.RatingIndicator = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.RatingIndicator.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.RatingIndicator. 
 * Resulting metadata can be obtained via sap.ui.commons.RatingIndicator.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.RatingIndicator", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getVisible", "setVisible", "getEditable", "setEditable", "getMaxValue", "setMaxValue", "getValue", "setValue", "bindValue", "unbindValue", "getIconSelected", "setIconSelected", "getIconUnselected", "setIconUnselected", "getIconHovered", "setIconHovered", "getVisualMode", "setVisualMode", 
    // aggregations
    
    // associations
    
    // events
    "attachChange", "detachChange"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : true},
    "editable" : {name : "editable", type : "boolean", group : "Behavior", defaultValue : true},
    "maxValue" : {name : "maxValue", type : "int", group : "Behavior", defaultValue : 5},
    "value" : {name : "value", type : "float", group : "Behavior", defaultValue : 0},
    "iconSelected" : {name : "iconSelected", type : "string", group : "Behavior", defaultValue : null},
    "iconUnselected" : {name : "iconUnselected", type : "string", group : "Behavior", defaultValue : null},
    "iconHovered" : {name : "iconHovered", type : "string", group : "Behavior", defaultValue : null},
    "visualMode" : {name : "visualMode", type : "sap.ui.commons.RatingIndicatorVisualMode", group : "Behavior", defaultValue : sap.ui.commons.RatingIndicatorVisualMode.Half}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "change" : "change"
  }

});	

sap.ui.commons.RatingIndicator.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>visible</code>.
 * If set to invisible, the control is not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>editable</code>.
 * Value 'true' is required for changes on the rating symbols.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getEditable = function() {
	return this.getProperty("editable");
};

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setEditable = function(bEditable) {
	this.setProperty("editable", bEditable);
	return this;
};


/**
 * Getter for property <code>maxValue</code>.
 * The number of displayed rating symbols
 *
 * Default value is <code>5</code>
 *
 * @return {int} the value of property <code>maxValue</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getMaxValue = function() {
	return this.getProperty("maxValue");
};

/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is <code>5</code> 
 *
 * @param {int} iMaxValue  new value for property <code>maxValue</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setMaxValue = function(iMaxValue) {
	this.setProperty("maxValue", iMaxValue);
	return this;
};


/**
 * Getter for property <code>value</code>.
 * The current selected value.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getValue = function() {
	return this.getProperty("value");
};

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setValue = function(fValue) {
	this.setProperty("value", fValue);
	return this;
};


/**
 * Binder for property <code>value</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.bindValue = function(sPath, fnFormatter, sMode) {
	this.bindProperty("value", sPath, fnFormatter, sMode);
	return this;
};

/**
 * Unbinder for property <code>value</code>.
 *
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.unbindValue = function() {
	this.unbindProperty("value");
	return this;
};


/**
 * Getter for property <code>iconSelected</code>.
 * The URI to the image which shall be displayed for all selected rating symbols.
 * Note that when this attribute is used, also the other icon attributes need to be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getIconSelected = function() {
	return this.getProperty("iconSelected");
};

/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setIconSelected = function(sIconSelected) {
	this.setProperty("iconSelected", sIconSelected);
	return this;
};


/**
 * Getter for property <code>iconUnselected</code>.
 * The URI to the image which shall be displayed for all unselected rating symbols. If this attribute is used, a requirement is that all custom icons need to have the same size.
 * Note that when this attribute is used also the other icon attributes need to be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>iconUnselected</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getIconUnselected = function() {
	return this.getProperty("iconUnselected");
};

/**
 * Setter for property <code>iconUnselected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIconUnselected  new value for property <code>iconUnselected</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setIconUnselected = function(sIconUnselected) {
	this.setProperty("iconUnselected", sIconUnselected);
	return this;
};


/**
 * Getter for property <code>iconHovered</code>.
 * The URI to the image which is displayed when the mouse hovers onto a rating symbol.
 * If used, a requirement is that all custom icons need to have the same size.
 * Note that when this attribute is used also the other icon attributes need to be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>iconHovered</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getIconHovered = function() {
	return this.getProperty("iconHovered");
};

/**
 * Setter for property <code>iconHovered</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setIconHovered = function(sIconHovered) {
	this.setProperty("iconHovered", sIconHovered);
	return this;
};


/**
 * Getter for property <code>visualMode</code>.
 * Defines how float values are visualized: Full, Half, Continuous (see enumeration RatingIndicatorVisualMode)
 *
 * Default value is <code>Half</code>
 *
 * @return {sap.ui.commons.RatingIndicatorVisualMode} the value of property <code>visualMode</code>
 * @public
 * 
 */
sap.ui.commons.RatingIndicator.prototype.getVisualMode = function() {
	return this.getProperty("visualMode");
};

/**
 * Setter for property <code>visualMode</code>.
 *
 * Default value is <code>Half</code> 
 *
 * @param {sap.ui.commons.RatingIndicatorVisualMode} oVisualMode  new value for property <code>visualMode</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setVisualMode = function(oVisualMode) {
	this.setProperty("visualMode", oVisualMode);
	return this;
};


/**
 * The event is fired when the user has done a rating. 
 *
 * @name sap.ui.commons.RatingIndicator#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.value The rated value
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.RatingIndicator</code>.<br/>
 * The event is fired when the user has done a rating. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.attachChange = function(oData, fnFunction, oListener) {
	this.attachEvent("change", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.RatingIndicator</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.detachChange = function(fnFunction, oListener) {
	this.detachEvent("change", fnFunction, oListener);
	return this;	
};

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>int</code> The rated value</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.RatingIndicator.prototype.fireChange = function(mArguments) {
	this.fireEvent("change", mArguments);
	return this;
};


// Start of sap/ui/commons/RatingIndicator.js
/**
 * Control Initialization
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.init = function(){
	this.iHoveredRating = -1;
};

/**
 * Does all the cleanup when the RatingIndicator is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.exit = function (){
	// no super.exit() to call
};

/**
 * Called when the theme is changed.
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onThemeChanged = function(oEvent){
	this.invalidate();
	this.rerender();
};

/**
 * Behavior implementation which is executed when the user presses Arrow Right (Left in RTL case) or Arrow Up.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapincrease = function(oEvent){
	var iNewHoverValue = this.iHoveredRating;

	if(iNewHoverValue == -1){
		iNewHoverValue = Math.round(this.getValue()) - 1;
		if(iNewHoverValue == -1){
			iNewHoverValue = 0;
		}
	}

	if(iNewHoverValue < this.getMaxValue()){
		iNewHoverValue = iNewHoverValue + 1;
	}else{
		iNewHoverValue = this.getMaxValue();
	}

	this.updateHoverState(oEvent, iNewHoverValue);
};

/**
 * Behavior implementation which is executed when the user presses Arrow Left (Right in RTL case) or Arrow Down.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapdecrease = function(oEvent){
	var iNewHoverValue = this.iHoveredRating;

	if(iNewHoverValue == -1 && Math.round(this.getValue()) == 0) {
		return;
	}

	if(iNewHoverValue == -1){
		iNewHoverValue = Math.round(this.getValue()) + 1;
	}

	if(iNewHoverValue > 1){
		iNewHoverValue = iNewHoverValue - 1;
	}else{
		iNewHoverValue = 1;
	}

	this.updateHoverState(oEvent, iNewHoverValue);
};

/**
 * Behavior implementation which is executed when the user presses Home.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsaphome = function(oEvent){
	this.updateHoverState(oEvent, 1);
};

/**
 * Behavior implementation which is executed when the user presses End.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapend = function(oEvent){
	this.updateHoverState(oEvent, this.getMaxValue());
};

/**
 * Behavior implementation which is executed when the user presses Enter or Space.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapselect = function(oEvent){
	this.saveValue(oEvent, true, this.iHoveredRating);
};

/**
 * Behavior implementation which is executed when the user presses Esc.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapescape = function(oEvent){
	this.saveValue(oEvent, true, -1);
};

/**
 * Behavior implementation which is executed when the control loses the focus.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onfocusout = function(oEvent){
	//Do not react on focusouts of child DOM refs in IE
	if(jQuery.browser.msie && oEvent.target != this.getDomRef()) {
		return;
	}
	this.saveValue(oEvent, false, this.iHoveredRating);
};

/**
 * Behavior implementation which is executed when the control gets the focus.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onfocusin = function(oEvent){
	//Avoid focusing child DOM refs in IE
	if(jQuery.browser.msie && oEvent.target != this.getDomRef()) {
		this.getDomRef().focus();
	}
};

/**
 * Behavior implementation which is executed when the user clicks on a rating symbol.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onclick = function(oEvent){
	this.saveValue(oEvent, true, this.getSymbolValue(oEvent));
};

/**
 * Behavior implementation which is executed when the user moves the mouse on a rating symbol.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onmouseover = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();

	if(!this.getEditable()) {
		return;
	}
	this.iHoveredRating = -1;

	var symbolValue = this.getSymbolValue(oEvent);
	if(symbolValue == -1){
		return;
	}

	for(var i=1; i<=symbolValue; i++){
		sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol(i, this);
	}
	for(var i=symbolValue+1; i<=this.getMaxValue(); i++){
		sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol(i, this, true);
	}
};

/**
 * Behavior implementation which is executed when the user moves the mouse out of the rating symbol.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onmouseout = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();

	if(!this.getEditable()) {
		return;
	}

	if(jQuery.sap.checkMouseEnterOrLeave(oEvent, this.getDomRef())){
		this.iHoveredRating = -1;
		for(var i=1; i<=this.getMaxValue(); i++){
			sap.ui.commons.RatingIndicatorRenderer.unhoverRatingSymbol(i, this);
		}
	}
};

/**
 * Returns the rating symbol value which is affected by the given event or -1
 * if the event was not on a rating symbol.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.getSymbolValue = function(oEvent){
	var oSymbol = jQuery(oEvent.target);
	if(oSymbol.hasClass("sapUiRatingItmImg") || oSymbol.hasClass("sapUiRatingItmOvrflw")){
		oSymbol = jQuery(oEvent.target.parentNode);
	}else if(oSymbol.hasClass("sapUiRatingItmOvrflwImg")){
		oSymbol = jQuery(oEvent.target.parentNode.parentNode);
	}
	var itemvalue = oSymbol.attr("itemvalue");
	if(itemvalue){
		return parseInt(itemvalue, 10);
	}
	return -1;
};

/**
 * Updates the hover state according to the current pending keyboard input.
 *
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.updateKeyboardHoverState = function(bSkipHoverAfter){
	for(var i=1; i<=this.getMaxValue(); i++){
		sap.ui.commons.RatingIndicatorRenderer.unhoverRatingSymbol(i, this);
		if(i <= this.iHoveredRating){
			sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol(i, this);
		}else if(!bSkipHoverAfter){
			sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol(i, this, true);
		}
	}
	this.setAriaState();
};

/**
 * Called by the framework when rendering is completed.
 *
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onAfterRendering = function() {
	this.setAriaState();
};

/**
 * Updates the ARIA state initially and in case of changes.
 *
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.setAriaState = function() {
	var val = this.iHoveredRating == -1 ? this.getValue() : this.iHoveredRating;
	jQuery.sap.byId(this.getId()).attr("aria-valuenow", val).attr("aria-valuetext", this._getText("RATING_ARIA_VALUE" , [val])).attr("aria-label", this._getText("RATING_ARIA_NAME"));
};

/**
 * Load language dependent texts.
 *
 * @private
 */
sap.ui.commons.RatingIndicator.prototype._getText = function(sKey, aArgs) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
	if(rb) {
		return rb.getText(sKey, aArgs);
	}
	return sKey;
};

/**
 * Helper function to save the value and fire the change event.
 *
 * @param {jQuery.Event} oEvent
 * @param {boolean} bstopEvent
 * @param {integer} iNewValue
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.saveValue = function(oEvent, bstopEvent, iNewValue) {
	if(bstopEvent){
		oEvent.preventDefault();
		// the control should not stop browser event propagation
		// Example: table control needs to catch and handle the event as well
		//oEvent.stopPropagation();
	}
	if(!this.getEditable()) {
		return false;
	}

	this.iHoveredRating = -1;
	if(iNewValue != -1 && iNewValue != this.getValue()){
		this.setValue(iNewValue);
		this.fireChange({value:iNewValue});
		return true;
	}else{
		//Update hover state only if value is not changed (otherwise rerendering is done anyway)
		for(var i=1; i<=this.getMaxValue(); i++){
			sap.ui.commons.RatingIndicatorRenderer.unhoverRatingSymbol(i, this);
		}
		this.setAriaState();
		return false;
	}
};

/**
 * Helper function to update the hover state when keyboard is used.
 *
 * @param {jQuery.Event} oEvent
 * @param {interger} iNewHoverValue
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.updateHoverState = function(oEvent, iNewHoverValue) {
	oEvent.preventDefault();
	oEvent.stopPropagation();
	if(!this.getEditable()) {
		return;
	}
	this.iHoveredRating = iNewHoverValue;
	this.updateKeyboardHoverState();
};

/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is <code>5</code>
 * Minimum value is <code>1</code>
 *
 * @param {int} iMaxValue new value for property <code>maxValue</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setMaxValue = function(iMaxValue) {
	if(iMaxValue < 1) {
		iMaxValue = 1;
	}
	this.setProperty("maxValue", iMaxValue);
	return this;
};