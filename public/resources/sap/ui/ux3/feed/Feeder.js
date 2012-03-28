/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.feed.Feeder.
jQuery.sap.declare("sap.ui.ux3.feed.Feeder");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new feed/Feeder.
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
 * <li>imageSrc : string</li>
 * <li>text : string</li>
 * <li>mode : sap.ui.ux3.feed.FeederMode</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>submitPress : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>pillClick : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Feeder control
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.1.1. 
 * new Feed control: sap.ui.ux3.Feeder
 */
sap.ui.ux3.feed.Feeder = function (sId, mSettings) {
	jQuery.sap.log.warning("Using deprecated control 'feed/Feeder'.");
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.feed.Feeder.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.feed.Feeder. 
 * Resulting metadata can be obtained via sap.ui.ux3.feed.Feeder.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.feed.Feeder", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getImageSrc", "setImageSrc", "getText", "setText", "getMode", "setMode", 
    // aggregations
    
    // associations
    
    // events
    "attachSubmitPress", "detachSubmitPress", "attachPillClick", "detachPillClick"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "imageSrc" : {name : "imageSrc", type : "string", group : "Misc", defaultValue : null},
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : null},
    "mode" : {name : "mode", type : "sap.ui.ux3.feed.FeederMode", group : "Misc", defaultValue : sap.ui.ux3.feed.FeederMode.FeederEntry}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "submitPress" : "submitPress", 
    "pillClick" : "pillClick"
  }

});	

sap.ui.ux3.feed.Feeder.M_EVENTS = {'submitPress':'submitPress','pillClick':'pillClick'};


/**
 * Getter for property <code>imageSrc</code>.
 * URL to user logo
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>imageSrc</code>
 * @public
 * 
 */
sap.ui.ux3.feed.Feeder.prototype.getImageSrc = function() {
	return this.getProperty("imageSrc");
};

/**
 * Setter for property <code>imageSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sImageSrc  new value for property <code>imageSrc</code>
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.Feeder.prototype.setImageSrc = function(sImageSrc) {
	this.setProperty("imageSrc", sImageSrc);
	return this;
};


/**
 * Getter for property <code>text</code>.
 * Feeder text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.feed.Feeder.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.Feeder.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>mode</code>.
 * Display Mode. It can be either in a Feed entry Feeder, or Comment Feeder
 *
 * Default value is <code>sap.ui.ux3.feed.FeederMode.FeederEntry</code>
 *
 * @return {sap.ui.ux3.feed.FeederMode} the value of property <code>mode</code>
 * @public
 * 
 */
sap.ui.ux3.feed.Feeder.prototype.getMode = function() {
	return this.getProperty("mode");
};

/**
 * Setter for property <code>mode</code>.
 *
 * Default value is <code>sap.ui.ux3.feed.FeederMode.FeederEntry</code> 
 *
 * @param {sap.ui.ux3.feed.FeederMode} oMode  new value for property <code>mode</code>
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.Feeder.prototype.setMode = function(oMode) {
	this.setProperty("mode", oMode);
	return this;
};


/**
 * Feeder content is submitted 
 *
 * @name sap.ui.ux3.feed.Feeder#submitPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.content Feed entry content
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'submitPress' event of this <code>sap.ui.ux3.feed.Feeder</code>.<br/>
 * Feeder content is submitted 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.Feeder.prototype.attachSubmitPress = function(oData, fnFunction, oListener) {
	this.attachEvent("submitPress", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'submitPress' event of this <code>sap.ui.ux3.feed.Feeder</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.Feeder.prototype.detachSubmitPress = function(fnFunction, oListener) {
	this.detachEvent("submitPress", fnFunction, oListener);
	return this;	
};

/**
 * Fire event submitPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'content' of type <code>string</code> Feed entry content</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.Feeder.prototype.fireSubmitPress = function(mArguments) {
	this.fireEvent("submitPress", mArguments);
	return this;
};


/**
 * An given pill is clicked 
 *
 * @name sap.ui.ux3.feed.Feeder#pillClick
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.pillId Pill id
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'pillClick' event of this <code>sap.ui.ux3.feed.Feeder</code>.<br/>
 * An given pill is clicked 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.Feeder.prototype.attachPillClick = function(oData, fnFunction, oListener) {
	this.attachEvent("pillClick", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'pillClick' event of this <code>sap.ui.ux3.feed.Feeder</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.Feeder.prototype.detachPillClick = function(fnFunction, oListener) {
	this.detachEvent("pillClick", fnFunction, oListener);
	return this;	
};

/**
 * Fire event pillClick to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'pillId' of type <code>string</code> Pill id</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.Feeder.prototype.firePillClick = function(mArguments) {
	this.fireEvent("pillClick", mArguments);
	return this;
};


// Start of sap/ui/ux3/feed/Feeder.js
jQuery.sap.require("sap.ui.commons.Menu");

//Variable to keep the next pill id, to avoid having duplicate id.
sap.ui.ux3.feed.Feeder.iPillNextId = 1;

sap.ui.ux3.feed.Feeder.prototype.init = function(){
	this.oMenu = null;
	this._bSubmitEnabled = false;
	this.oResourceBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
};


/**
 * Displays menu with corresponding entities
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.displayKnownEntities = function(){

	if(!this.oMenu){
		this.oMenu = new sap.ui.commons.Menu(this.getId()+"Menu");

		//TODO: Corresponding entitities have to come from outside
		var item1 = new sap.ui.commons.MenuItem(this.oMenu.getId()+"1", {text: "Thing1"});
		item1.attachSelect(this.onEntitySelected, this);
		this.oMenu.addItem(item1);

		var item2 = new sap.ui.commons.MenuItem(this.oMenu.getId()+"2", {text: "Thing2"});
		item2.attachSelect(this.onEntitySelected, this);
		this.oMenu.addItem(item2);
	}

	var eDock = sap.ui.core.Popup.Dock;

	this.oMenu.open(false, this.oDomInput,eDock.BeginTop, eDock.BeginBottom,this.oDomInput);


};

/**
 * Handles when users selects an entity in the menu
 *
 * @param oEvent Event Object
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.onEntitySelected = function(oEvent){
	this.addPill(oEvent.oSource.getText());
};

/**
 * Adds a pill at the current cursor index
 *
 * @param sText Text reprensenting the selected entities
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.addPill = function(sText){

	var id = "pill-" + sap.ui.ux3.feed.Feeder.iPillNextId++; // TODO: Build a real id
	var pillHtml = "<span id='"+ id +"'contenteditable='false' class='sapUiFeederOldPill'>@"+ sText +"</span>";

	var sInnerHTML = this.oDomInput.html();

	//Insert pill Html inside current input html
	sInnerHTML =
	sInnerHTML.substr(0,this.iCurrentCursorHTMLPos)
	+ pillHtml
	+ sInnerHTML.substr(this.iCurrentCursorHTMLPos);


	this.oDomInput.html(sInnerHTML);

	//Set cursor just after the new pill
	var oNewPill = jQuery.sap.byId(id);
	this.setCursorAfter(oNewPill[0]);

	//Updates state button, as the pill could be the first content
	this.updateButtonState();

	//Updates cursors position variable
	this.iCurrentCursorPos = this.getCursorPos();
	this.iCurrentCursorHTMLPos = this.getCursorHTMLPos();

};


/**
 * Helper function to set a character, at a given position, inside a string.
 *
 * @param str 	String to be updated
 * @param index index of the character to be updated
 * @param chr 	New character to insert
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.setCharAt = function(str,index,chr) {
	if(index > str.length-1) {
		return str;
	}
	return str.substr(0,index) + chr + str.substr(index+1);
}

/**
 * Overriding Setter for property <code>text</code> to set text inside input field and update button state.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.feed.Feeder} <code>this</code> to allow method chaining
 * @public
 */
;
sap.ui.ux3.feed.Feeder.prototype.setText = function(sText) {
	this.setProperty("text", sText, true);

	if(this.oDomInput){
		this.oDomInput.html(sText);
		this.updateButtonState();
	}

};

/**
 * Returns current position (index) of cursor, based on text content of the input field
 *
 * @return The position.
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.getCursorPos = function() {

	var pos = 0;

	if(document.getSelection){
		var sel = window.getSelection().getRangeAt(0);
		 pos = sel.startOffset;
	 } else {
		 var range = document.selection.createRange();
		 var rangeCopy = range.duplicate();
		 rangeCopy.moveToElementText(this.oDomInput[0]);
		 rangeCopy.setEndPoint( 'EndToEnd', range );
		 pos = rangeCopy.text.length - range.text.length;
	}
	 jQuery.sap.log.warning("Pos: " + pos);
	 return pos;

};

/**
 * Returns current position (index) of cursor, based on html content of the input field
 *
 * @return The position.
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.getCursorHTMLPos = function(){

	var pos = 0;

	if(document.getSelection){

		var sel = window.getSelection().getRangeAt(0);
		var sInnerHTML = this.oDomInput.html();

		var text1 = "";
		var text2 = "";
		//Replace nbsp space with regular space to avoid differences between strings
		text1 = sInnerHTML.replace(/(\s|&nbsp;|&\#160;)+/gi, " ");

		if(sel.startContainer.wholeText){
			text2 = sel.startContainer.wholeText.replace(/(\s|&nbsp;|&\#160;)+/gi, " ");
		}

		var offset = text1.indexOf(text2);


		if(offset == -1){
			//Should not happen!
			jQuery.sap.log.warning("OFFSET NOT FOUND!!!!!!");
			offset = 0
		}

		pos = offset + sel.startOffset;


	 } else {
		 var range = document.selection.createRange();
		 var rangeCopy = range.duplicate();
		 rangeCopy.moveToElementText(this.oDomInput[0]);
		 rangeCopy.setEndPoint( 'EndToEnd', range );
		 pos = rangeCopy.htmlText.length - range.htmlText.length;
	}
	jQuery.sap.log.warning("HTML Pos: " + pos);
	return pos;
}

/**
 * Set the cursor after a given DOM Object
 *
 * @param oDomNode	The given DOM object
 *
 * @private
 */;
sap.ui.ux3.feed.Feeder.prototype.setCursorAfter = function(oDomNode) {
	if(document.getSelection){
		var sel = window.getSelection().getRangeAt(0);
		sel.setStartAfter(oDomNode);
		sel.setEndAfter(oDomNode);

	 } else {
		 //TODO: Implementation missing the getSelection function is unavailable (Needed for one of our supported browser ?)
	}
} ;

/**
 * Returns the current Feeder content. It converts pills from HTML
 * format to Feed format
 *
 * @param oStep The step to add. If empty, nothing is inserted.
 * @return oStep The step to add. If empty, nothing is inserted.
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.getContentFromHTML = function(sHTML) {
	var sContent = sHTML;
	//TODO: remove @
	sContent = sContent.replace(/<span/g, "<thing");
	sContent = sContent.replace(/<\/span>/g, "</thing>");
	sContent = sContent.replace(/sapUiFeederOldPill/g, "p12e");
	sContent = sContent.replace(/contenteditable=\'false\'/g, "");
	sContent = sContent.replace(/&nbsp;/g, " ");

	//Firefox is adding br everywhere, we need to remove them
	if(jQuery.browser.mozilla){
		sContent = sContent.replace(/<br _moz_dirty=''>/g, "");
	}

	return sContent;
};

/**
 * After rendering, keep the input field jQuery object as attribute
 * for reuse
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.onAfterRendering = function () {
	if(!this.oDomInput){
		this.oDomInput = jQuery.sap.byId(this.getId()+"_input");
		this.updateButtonState();
	}
};

/**
 * Enables/Disable the Submit button depending if the input field is empty or not
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.updateButtonState = function () {
	var oDomButton = jQuery.sap.byId(this.getId()+"_btn");
	this._bSubmitEnabled = jQuery.trim(this.oDomInput.text()).length > 0;
	if(this.getMode() == sap.ui.ux3.feed.FeederMode.FeederComment && this.oDomInput.text()==this.oResourceBundle.getText("FEEDER_COMMENT_INPLACE")){
		this._bSubmitEnabled = false;
	}
	oDomButton.toggleClass("sapUiFeederOldBtnDsbl", !this._bSubmitEnabled).attr("tabindex", this._bSubmitEnabled?0:1);
};

/*********************************************************************************************/
/** Events handlers 																		**/
/*********************************************************************************************/

/**
 * Onclick handler
 *
 * @param oEvent Event Object
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.onclick = function(oEvent) {

	var oDomClicked = oEvent.srcElement ?  oEvent.srcElement : oEvent.target;

	if(jQuery(oDomClicked).is(".sapUiFeederOldBtn") && this._bSubmitEnabled){
		this.fireSubmitPress({content:this.getContentFromHTML(this.oDomInput.html())});
		this.updateButtonState();
	}else if(jQuery(oDomClicked).is(".sapUiFeederOldPill")){
		this.firePillClick({pillId:oDomClicked.id});
	}
} ;



/**
 * Handles focus in event. It removes in "Place holder" (Write a comment..)
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.onfocusin = function () {
	if(this.getMode() == sap.ui.ux3.feed.FeederMode.FeederComment){
		this.oDomInput.find(".sapUiFeederOldCommentPlaceHolder").remove();
	}
};

/**
 * Handles focus out event. It adds the "Place holder" back if the field is empty
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.onfocusout = function () {
	//Remove invisible Br added by Firefox
	if(jQuery.browser.mozilla){
		this.oDomInput.find("br[_moz_dirty]").remove();
	}

	if(this.getMode() == sap.ui.ux3.feed.FeederMode.FeederComment && this.oDomInput.text() == ""){
		this.oDomInput.append(sap.ui.ux3.feed.FeederRenderer.getCommentPlaceHolderHTML(this));
	}


};

/**
 * Handles keyUp event. Updates the state of the submit button and clean the Input
 *
 * @param oEvent Event Object
 *
 * @private
 */
sap.ui.ux3.feed.Feeder.prototype.onkeyup = function(oEvent){

	if(this._bSubmitEnabled != jQuery.trim(this.oDomInput.text()).length > 0){

		this.updateButtonState();
	}

	//Clean input so we avoid having invisible DOM content
	if(!this.oDomInput.text()){
		this.oDomInput.empty();
	}
}

/**
 * Handles keyPress event to triggers pill.
 *
 * @param oEvent Event Object
 *
 * @private
 */;
sap.ui.ux3.feed.Feeder.prototype.onkeypress = function(oEvent){

	 this.iCurrentCursorPos = this.getCursorPos();
	 this.iCurrentCursorHTMLPos = this.getCursorHTMLPos();

	//If typing "@", display menu with corresponding entities
	if (oEvent.charCode == 64 || oEvent.keyCode == 64){
		 cancel = true; //Cancel so the "@" won't be outputed (It's included inside the pill)

		 //Keeps a trace of where is the cursor in the input field
		 this.iCurrentCursorPos = this.getCursorPos();
		 this.iCurrentCursorHTMLPos = this.getCursorHTMLPos();

		 //Display menu with corresponding entities
		 this.displayKnownEntities();
	}

	//Following logic is a workaround to avoid the pill to be screwed up when used press DEL or BACKSPACE
	if ( jQuery.browser.mozilla &&
		(oEvent.charCode == 8 || oEvent.keyCode == 8 || //Backspace button
		oEvent.charCode == 46 || oEvent.keyCode == 46)){ //Delete button

		var cancel = false;
		var index = this.iCurrentCursorHTMLPos;
		var sHtml = this.oDomInput.html();

		if((oEvent.charCode == 8 || oEvent.keyCode == 8) && sHtml[index-1] == ">"){ //Backspace button
			cancel = true;
		}

		if((oEvent.charCode == 46 || oEvent.keyCode == 46) && sHtml[index] == "<"){ //Delete button
			cancel = true;
		}

	}
	if(cancel){
	 // Stop the event
	 oEvent.preventDefault();
	 return false;
	}


};