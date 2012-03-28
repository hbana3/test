/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Feeder.
jQuery.sap.declare("sap.ui.ux3.Feeder");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Feeder.
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
 * <li>thumbnailSrc : string</li>
 * <li>text : string</li>
 * <li>type : sap.ui.ux3.FeederType</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>submit : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Add your documentation for the new Feeder2
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.Feeder = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.Feeder.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.Feeder. 
 * Resulting metadata can be obtained via sap.ui.ux3.Feeder.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.Feeder", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getThumbnailSrc", "setThumbnailSrc", "getText", "setText", "getType", "setType", 
    // aggregations
    
    // associations
    
    // events
    "attachSubmit", "detachSubmit"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "thumbnailSrc" : {name : "thumbnailSrc", type : "string", group : "Data", defaultValue : null},
    "text" : {name : "text", type : "string", group : "Data", defaultValue : null},
    "type" : {name : "type", type : "sap.ui.ux3.FeederType", group : "Appearance", defaultValue : sap.ui.ux3.FeederType.Large}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "submit" : "submit"
  }

});	

sap.ui.ux3.Feeder.M_EVENTS = {'submit':'submit'};


/**
 * Getter for property <code>thumbnailSrc</code>.
 * URL to the tumbnail image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>thumbnailSrc</code>
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getThumbnailSrc = function() {
	return this.getProperty("thumbnailSrc");
};

/**
 * Setter for property <code>thumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sThumbnailSrc  new value for property <code>thumbnailSrc</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feeder.prototype.setThumbnailSrc = function(sThumbnailSrc) {
	this.setProperty("thumbnailSrc", sThumbnailSrc);
	return this;
};


/**
 * Getter for property <code>text</code>.
 * Text of the Feeder. "@References" are supported.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feeder.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>type</code>.
 * Type (size) of feeder
 *
 * Default value is <code>sap.ui.ux3.FeederType.Large</code>
 *
 * @return {sap.ui.ux3.FeederType} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.ux3.Feeder.prototype.getType = function() {
	return this.getProperty("type");
};

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>sap.ui.ux3.FeederType.Large</code> 
 *
 * @param {sap.ui.ux3.FeederType} oType  new value for property <code>type</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feeder.prototype.setType = function(oType) {
	this.setProperty("type", oType);
	return this;
};


/**
 * The entered text is submitted 
 *
 * @name sap.ui.ux3.Feeder#submit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.text Text that is submitted
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'submit' event of this <code>sap.ui.ux3.Feeder</code>.<br/>
 * The entered text is submitted 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feeder.prototype.attachSubmit = function(oData, fnFunction, oListener) {
	this.attachEvent("submit", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'submit' event of this <code>sap.ui.ux3.Feeder</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feeder.prototype.detachSubmit = function(fnFunction, oListener) {
	this.detachEvent("submit", fnFunction, oListener);
	return this;	
};

/**
 * Fire event submit to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Text that is submitted</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Feeder.prototype.fireSubmit = function(mArguments) {
	this.fireEvent("submit", mArguments);
	return this;
};


// Start of sap/ui/ux3/Feeder.js
jQuery.sap.require("sap.ui.core.theming.Parameters");

///**
// * This file defines behavior for the control, 
// */

sap.ui.ux3.Feeder.prototype.init = function(){
	this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	this.oSendButton = new sap.ui.commons.Button( this.getId() + "-send", {
			style: sap.ui.commons.ButtonStyle.Emph
		}).setParent(this);
	this.oSendButton.attachEvent('press', this.handleSendButtonPress, this); // attach event this way to have the right this-reference in handler

};

/*
 * as onBeforeRendering only runs while re-rendering this module is called in renderer
 */
sap.ui.ux3.Feeder.prototype.initSendButton = function(){
	if (this.getText() == "") {
		this.oSendButton.setEnabled(false);
	}
	
	var sArrow = "";
	
	switch (this.getType()){ 
	case( sap.ui.ux3.FeederType.Medium):
		sArrow = sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feeder:sapUiFeederArrowMediumUrl');
	break;
	case( sap.ui.ux3.FeederType.Comment):
		sArrow = sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feeder:sapUiFeederArrowSmallUrl');
	break;
	default: // large feeder is default
		sArrow = sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feeder:sapUiFeederArrowLargeUrl');
	break;
	}

	if (!sArrow || sArrow == "") {
		// no arrow image
		this.oSendButton.setText('-->');
	} else {
		this.oSendButton.setIcon(jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sArrow);
	}
	
};

sap.ui.ux3.Feeder.prototype.exit = function(){
	this.rb.destroy();
	this.oInput = undefined;
	this.oSendButton.destroy();
};

/**
 * After rendering, keep the input field jQuery object as attribute
 * for reuse
 *
 * @private
 */
sap.ui.ux3.Feeder.prototype.onAfterRendering = function () {
	this.oInput = jQuery.sap.byId(this.getId()+"-input");
};

/**
 * handler for click event 
 *
 * @private
 */
sap.ui.ux3.Feeder.prototype.onclick = function(oEvent){

	var sTargetId = oEvent.target.getAttribute( 'ID' );

	switch ( sTargetId ){
	case ( this.getId() + '-send' ):
		// Click on send button (should be handled in button)
	break;
	case ( this.getId() + '-input'):
		// Click on input field

	break;
	default:

	break;
	}

};

/**
 * handler for focusIn
 * 
 * If the Feeder is empty the default text must be cleared
 * @private
 */
sap.ui.ux3.Feeder.prototype.onfocusin = function(oEvent){

	this.oInput.find(".sapUiFeederEmptyText").remove();

};

/**
 * handler for focusOut
 * 
 * If the Feeder is empty the default text written
 * @private
 */
sap.ui.ux3.Feeder.prototype.onfocusout = function(oEvent){

	var sText = this.oInput.text();
	if(sText == ""){
		this.oInput.append(sap.ui.ux3.FeederRenderer.getEmptyTextInfo(this));
	}

	this.setProperty( 'text', sText, true ); // no rerendering!

};

/**
 * handler for keyUp
 * 
 * if text is entered the button must be enables, if empty it must be disabled
 * @private
 */
sap.ui.ux3.Feeder.prototype.onkeyup = function(oEvent){

	if(this.oInput.text() == ""){
		this.oSendButton.setEnabled(false);
	}else{
		this.oSendButton.setEnabled(true);
	}

	//Clean input so we avoid having invisible DOM content
//	if(!this.oInput.text()){
//		this.oInput.empty();
//	}

};

/**
 * Handler for send-button press
 *
 * @private
 */
sap.ui.ux3.Feeder.prototype.handleSendButtonPress = function(oEvent){

	var sText = this.oInput.text();
	this.setProperty( 'text', sText, true ); // no rerendering!
	this.fireSubmit({text: sText});
	this.setText(''); // clear text after submit

};

