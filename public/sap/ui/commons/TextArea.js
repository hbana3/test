/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TextArea.
jQuery.sap.declare("sap.ui.commons.TextArea");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");

/**
 * Constructor for a new TextArea.
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
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>cols : int</li>
 * <li>rows : int</li>
 * <li>wrapping : sap.ui.core.Wrapping</li>
 * <li>cursorPos : int</li>
 * <li>explanation : string</li>
 * <li>labeledBy : string</li></ul>
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
 * Control to enter or display multible row text.
 * @extends sap.ui.commons.TextField
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.TextArea = function (sId, mSettings) {
	sap.ui.commons.TextField.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.TextArea.prototype = jQuery.sap.newObject(sap.ui.commons.TextField.prototype);

/*
 * Describe the sap.ui.commons.TextArea. 
 * Resulting metadata can be obtained via sap.ui.commons.TextArea.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.TextArea", {

  // ---- object ----
  baseType : "sap.ui.commons.TextField",
  publicMethods : [
    // properties 
    "getHeight", "setHeight", "getCols", "setCols", "getRows", "setRows", "getWrapping", "setWrapping", "getCursorPos", "setCursorPos", "getExplanation", "setExplanation", "getLabeledBy", "setLabeledBy"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "cols" : {name : "cols", type : "int", group : "Dimension", defaultValue : null},
    "rows" : {name : "rows", type : "int", group : "Dimension", defaultValue : null},
    "wrapping" : {name : "wrapping", type : "sap.ui.core.Wrapping", group : "Appearance", defaultValue : null},
    "cursorPos" : {name : "cursorPos", type : "int", group : "Appearance", defaultValue : null},
    "explanation" : {name : "explanation", type : "string", group : "Misc", defaultValue : null},
    "labeledBy" : {name : "labeledBy", type : "string", group : "Identification", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>height</code>.
 * Height of text field. When it is set (CSS-size such as % or px), this is the exact size.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>cols</code>.
 * Number of Columns. Cols means number of characters per row. This proprty is only used if Width is not used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>cols</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getCols = function() {
	return this.getProperty("cols");
};

/**
 * Setter for property <code>cols</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iCols  new value for property <code>cols</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setCols = function(iCols) {
	this.setProperty("cols", iCols);
	return this;
};


/**
 * Getter for property <code>rows</code>.
 * Number of Rows. This proprty is only used if Height is not used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>rows</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getRows = function() {
	return this.getProperty("rows");
};

/**
 * Setter for property <code>rows</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iRows  new value for property <code>rows</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setRows = function(iRows) {
	this.setProperty("rows", iRows);
	return this;
};


/**
 * Getter for property <code>wrapping</code>.
 * Text wrapping. Possible values are: Soft, Hard, Off.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.Wrapping} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getWrapping = function() {
	return this.getProperty("wrapping");
};

/**
 * Setter for property <code>wrapping</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.Wrapping} oWrapping  new value for property <code>wrapping</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setWrapping = function(oWrapping) {
	this.setProperty("wrapping", oWrapping);
	return this;
};


/**
 * Getter for property <code>cursorPos</code>.
 * Position of cursor, e.g., to let the user re-start typing at the same position as before the server roundtrip
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>cursorPos</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getCursorPos = function() {
	return this.getProperty("cursorPos");
};

/**
 * Setter for property <code>cursorPos</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iCursorPos  new value for property <code>cursorPos</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setCursorPos = function(iCursorPos) {
	this.setProperty("cursorPos", iCursorPos);
	return this;
};


/**
 * Getter for property <code>explanation</code>.
 * text which appears, in case quick-help is switched on
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>explanation</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getExplanation = function() {
	return this.getProperty("explanation");
};

/**
 * Setter for property <code>explanation</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sExplanation  new value for property <code>explanation</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setExplanation = function(sExplanation) {
	this.setProperty("explanation", sExplanation);
	return this;
};


/**
 * Getter for property <code>labeledBy</code>.
 * ID of label control
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>labeledBy</code>
 * @public
 * 
 */
sap.ui.commons.TextArea.prototype.getLabeledBy = function() {
	return this.getProperty("labeledBy");
};

/**
 * Setter for property <code>labeledBy</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLabeledBy  new value for property <code>labeledBy</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setLabeledBy = function(sLabeledBy) {
	this.setProperty("labeledBy", sLabeledBy);
	return this;
};


// Start of sap/ui/commons/TextArea.js
///**
// * This file defines the control behavior.
// */
//.TextArea.prototype.init = function(){
//   // do something for initialization...
//};

/**
 * Event handler called before control is rendered
 */
sap.ui.commons.TextArea.prototype.onBeforeRendering = function() {
	// Unbind events
	if(this.pasteHandlerId){
		jQuery(this.getDomRef()).unbind('paste', jQuery.proxy(this.handlePaste, this));
		this.pasteHandlerId = null;
	}

	if(this.inputHandlerId){
		jQuery(this.getDomRef()).unbind('input', jQuery.proxy(this.handleInput, this));
		this.inputHandlerId = null;
	}

	if(this.proChHandlerId){
		jQuery(this.getDomRef()).unbind('propertychange', jQuery.proxy(this.handleInput, this));
		this.proChHandlerId = null;
	}
};

/**
 * Event handler called after control is rendered
 */
sap.ui.commons.TextArea.prototype.onAfterRendering = function () {

	this.pasteHandlerId = jQuery(this.getDomRef()).bind('paste', jQuery.proxy(this.handlePaste, this));
	this.inputHandlerId = jQuery(this.getDomRef()).bind('input', jQuery.proxy(this.handleInput, this)); // for FF
	this.proChHandlerId = jQuery(this.getDomRef()).bind('propertychange', jQuery.proxy(this.handleInput, this)); // for IE

};

/**
 * Event handler called when control is getting the focus
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.onfocusin = function(oEvent){

	this.getMetadata().getParent().getClass().prototype.onfocusin.call(this, oEvent);

	var oFocusDomRef = this.getFocusDomRef();

	// Set focus flag
	this.bFocus = true;

	oEvent.preventDefault();
};

/**
 * Event handler called when control is loosing the focus
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.onfocusout = function(oEvent){

	this.getMetadata().getParent().getClass().prototype.onfocusout.call(this, oEvent);

	var newVal;

	if(this.getDomRef()){
		newVal = this.getDomRef().value;
	}
	var oldVal = this.getValue();

	if(this.getEditable() && this.getEnabled() && oldVal != newVal) {
		this.setProperty("value", newVal, true); // Suppress re-rendering
		this.fireChange({value:newVal});
	}

	var oFocusDomRef = this.getFocusDomRef();
	if (oFocusDomRef && jQuery.browser.mozilla) { // Only for FF -> deselect text
		if (oFocusDomRef.selectionStart != oFocusDomRef.selectionEnd){
			jQuery(oFocusDomRef).selectText(oFocusDomRef.selectionStart, oFocusDomRef.selectionStart);
		}
	}

	// Clear focus flag
	this.bFocus = false;

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Returns an object representing the serialized focus information.
 * Overwrites the standard function.
 * @type Object
 * @return An object representing the serialized focus information.
 * @private
 */
sap.ui.commons.TextArea.prototype.getFocusInfo = function () {
	return {id:this.getId(), cursorPos:this.getCursorPos()};
};

/**
 * Applies the focus info.
 * Overwrites the standard function.
 * @param {object} oFocusInfo
 * @private
 */
sap.ui.commons.TextArea.prototype.applyFocusInfo = function (oFocusInfo) {
	this.focus();
	var oFocusDomRef = this.getFocusDomRef();
	jQuery(oFocusDomRef).cursorPos(this.getCursorPos());
};

/**
 * Event handler called on Key press
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.onkeypress = function(oEvent){

	sap.ui.commons.TextField.prototype.onkeypress.apply(this, arguments);

	if(!this.getEditable() || !this.getEnabled() || this.getMaxLength() <= 0){
		return;
	}

	var oKC = jQuery.sap.KeyCodes;
	var iKC = oEvent.which || oEvent.keyCode;
	var oDom = this.getDomRef();

	// Check if some text is selected since this is different in Internet Explorer and FireFox
	// If some text is selected, it is overwritten by a key press -> Value will not get too large
	if(document.selection){ //IE
		var oSel = document.selection.createRange();
		if (oSel.text.length > 0){
			return
		}
	}else{ // FF
		if(oDom.selectionStart != oDom.selectionEnd){
			return;
		}
	}

	// Only real characters and ENTER, no backspace
	if(oDom.value.length >= this.getMaxLength() && ( iKC >= oKC.SPACE || iKC == oKC.ENTER) && !oEvent.ctrlKey){
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}

};

/**
 * Event handler called on Key up
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.onkeyup = function(oEvent){

// save cursor position
	var oDomRef = this.getDomRef();
	this.setProperty('cursorPos', jQuery(oDomRef).cursorPos(), true); // no re-rendering!

	// call keyup function of TextField to get liveChange event
	sap.ui.commons.TextField.prototype.onkeyup.apply(this, arguments);

};

/**
 * Event handler called when the enter key is pressed.
 * @see sap.ui.commons.TextField#onsapenter
 * @private
 */
sap.ui.commons.TextArea.prototype.onsapenter = function (oEvent) {
// stop bubbling of event when in the textarea so other actions of parent control handlers won't be called.
// don't do a prevent default because we want the default browser behavior...e.g. new line when pressing enter in the text area.
	oEvent.stopPropagation();
}

/**
 * Event handler called on Mouse up
 *
 * @param {jQuery.Event} oEvent
 * @private
 */;
sap.ui.commons.TextArea.prototype.onmouseup = function(oEvent){

// Save cursor position
	var oDomRef = this.getDomRef();
	this.setProperty('cursorPos', jQuery(oDomRef).cursorPos(), true); // no re-rendering!

};

/**
 * Event handler called on Paste
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.handlePaste = function(oEvent){

	if(!this.getEditable() || !this.getEnabled() || this.getMaxLength() <= 0){
		return;
	}

	var oDom = this.getDomRef();

	if(oDom.value.length >= this.getMaxLength() && oDom.selectionStart == oDom.selectionEnd){
		// already maxLenght reached and nothing selected -> no paste possible
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}

};

/**
 * Event handler called on Input
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.handleInput = function(oEvent){

	if (oEvent.originalEvent.propertyName && oEvent.originalEvent.propertyName.toLowerCase () != "value") {
		// In Internet Explorer, check for correct property
		return;
	}

	if(!this.getEditable() || !this.getEnabled() || this.getMaxLength() <= 0){
		return;
	}

	var oDom = this.getDomRef();

	// If text is entered or pasted, cut it if is too long
	if(oDom.value.length > this.getMaxLength()){
		oDom.value = oDom.value.substring(0,this.getMaxLength());
	}
	// The result is if text is pasted via clipboard or drag and drop the result is cut to fit the
	// maxLength. It's not easy to cut only the pasted text because in FireFox there is no access to the clipboard.
	// An option would be to store the old value after each change and compare it after each change.
	// Then the pasted text must be determined and cut. But this would need a lot of effort and script on
	// every change.

};

/**
 * Property setter for MaxLength
 *
 * @param {int} iMaxLength
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setMaxLength = function(iMaxLength) {

	this.setProperty('maxLength', iMaxLength, true); // No re-rendering

	var oDom = this.getDomRef();

	if(oDom && oDom.value.length > iMaxLength && iMaxLength > 0 ){
		oDom.value = oDom.value.substring(0,iMaxLength);
	}

	var sValue = this.getValue();
	if(sValue.length > iMaxLength && iMaxLength > 0 ){
		this.setProperty('value', sValue.substring(0,iMaxLength));
	}

	return this;
};

/**
 * Property setter for the cursor position
 *
 * @param {int} iCursorPos
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setCursorPos = function(iCursorPos) {

	this.setProperty('cursorPos', iCursorPos, true); // no re-rendering!

	if(this.bFocus){
		jQuery(this.getDomRef()).cursorPos(iCursorPos);
	}

	return this;
};