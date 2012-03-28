/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.FileUploader.
jQuery.sap.declare("sap.ui.commons.FileUploader");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new FileUploader.
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
 * <li>value : string</li>
 * <li>enabled : boolean</li>
 * <li>visible : boolean</li>
 * <li>uploadUrl : string</li>
 * <li>name : string</li>
 * <li>width : string</li>
 * <li>uploadOnChange : boolean</li>
 * <li>additionalData : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>change : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>uploadComplete : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * The framework generates an input field and a button with text "Browse ...". The API supports features such as on change uploads (the upload starts immediately after a file has been selected), file uploads with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete file paths.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.FileUploader = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.FileUploader.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.FileUploader. 
 * Resulting metadata can be obtained via sap.ui.commons.FileUploader.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.FileUploader", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getValue", "setValue", "getEnabled", "setEnabled", "getVisible", "setVisible", "getUploadUrl", "setUploadUrl", "getName", "setName", "getWidth", "setWidth", "getUploadOnChange", "setUploadOnChange", "getAdditionalData", "setAdditionalData", 
    // aggregations
    
    // associations
    
    // events
    "attachChange", "detachChange", "attachUploadComplete", "detachUploadComplete", 
    // methods
    "upload"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "value" : {name : "value", type : "string", group : "Data", defaultValue : ''},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : true},
    "uploadUrl" : {name : "uploadUrl", type : "string", group : "Data", defaultValue : ''},
    "name" : {name : "name", type : "string", group : "Data", defaultValue : null},
    "width" : {name : "width", type : "string", group : "Misc", defaultValue : ''},
    "uploadOnChange" : {name : "uploadOnChange", type : "boolean", group : "Behavior", defaultValue : false},
    "additionalData" : {name : "additionalData", type : "string", group : "Data", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "change" : "change", 
    "uploadComplete" : "uploadComplete"
  }

});	

sap.ui.commons.FileUploader.M_EVENTS = {'change':'change','uploadComplete':'uploadComplete'};


/**
 * Getter for property <code>value</code>.
 * Value of the path for file upload.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.commons.FileUploader.prototype.getValue = function() {
	return this.getProperty("value");
};

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.setValue = function(sValue) {
	this.setProperty("value", sValue);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * Disabled controls have different colors, depending on customer settings.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.FileUploader.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.FileUploader.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>uploadUrl</code>.
 * Used when URL address is on a remote server.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>uploadUrl</code>
 * @public
 * 
 */
sap.ui.commons.FileUploader.prototype.getUploadUrl = function() {
	return this.getProperty("uploadUrl");
};

/**
 * Setter for property <code>uploadUrl</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sUploadUrl  new value for property <code>uploadUrl</code>
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.setUploadUrl = function(sUploadUrl) {
	this.setProperty("uploadUrl", sUploadUrl);
	return this;
};


/**
 * Getter for property <code>name</code>.
 * Unique control name for identification on the server side after sending data to the server.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.commons.FileUploader.prototype.getName = function() {
	return this.getProperty("name");
};

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.setName = function(sName) {
	this.setProperty("name", sName);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Specifies the displayed control width.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.FileUploader.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>uploadOnChange</code>.
 * If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitely triggered.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>uploadOnChange</code>
 * @public
 * 
 */
sap.ui.commons.FileUploader.prototype.getUploadOnChange = function() {
	return this.getProperty("uploadOnChange");
};

/**
 * Setter for property <code>uploadOnChange</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUploadOnChange  new value for property <code>uploadOnChange</code>
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.setUploadOnChange = function(bUploadOnChange) {
	this.setProperty("uploadOnChange", bUploadOnChange);
	return this;
};


/**
 * Getter for property <code>additionalData</code>.
 * Additional data to send to the backend service (will be transmitted as value of a hidden input which name is derived from the name property with the suffix "-data").
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>additionalData</code>
 * @public
 * 
 */
sap.ui.commons.FileUploader.prototype.getAdditionalData = function() {
	return this.getProperty("additionalData");
};

/**
 * Setter for property <code>additionalData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAdditionalData  new value for property <code>additionalData</code>
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.setAdditionalData = function(sAdditionalData) {
	this.setProperty("additionalData", sAdditionalData);
	return this;
};


/**
 * Event is fired when the value of the file path has been changed. 
 *
 * @name sap.ui.commons.FileUploader#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue New file path value.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.FileUploader</code>.<br/>
 * Event is fired when the value of the file path has been changed. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.attachChange = function(oData, fnFunction, oListener) {
	this.attachEvent("change", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.FileUploader</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.detachChange = function(fnFunction, oListener) {
	this.detachEvent("change", fnFunction, oListener);
	return this;	
};

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> New file path value.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.FileUploader.prototype.fireChange = function(mArguments) {
	this.fireEvent("change", mArguments);
	return this;
};


/**
 * Event is fired when the upload of the file is completed. <b>Except: when the file upload component returns a status code other than 200 this event will not be triggered.</b> This behavior is aligned with the HTTP specification. 
 *
 * @name sap.ui.commons.FileUploader#uploadComplete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'uploadComplete' event of this <code>sap.ui.commons.FileUploader</code>.<br/>
 * Event is fired when the upload of the file is completed. <b>Except: when the file upload component returns a status code other than 200 this event will not be triggered.</b> This behavior is aligned with the HTTP specification. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.attachUploadComplete = function(oData, fnFunction, oListener) {
	this.attachEvent("uploadComplete", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'uploadComplete' event of this <code>sap.ui.commons.FileUploader</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.FileUploader.prototype.detachUploadComplete = function(fnFunction, oListener) {
	this.detachEvent("uploadComplete", fnFunction, oListener);
	return this;	
};

/**
 * Fire event uploadComplete to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.FileUploader} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.FileUploader.prototype.fireUploadComplete = function(mArguments) {
	this.fireEvent("uploadComplete", mArguments);
	return this;
};


/**
 * Begins the upload as defined by uploadUrl.
 *
 * @name sap.ui.commons.FileUploader.prototype.upload
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/FileUploader.js
/**
 * Initializes the control.
 * It is called from the constructor.
 * @private
 */
sap.ui.commons.FileUploader.prototype.init = function(){

	// works fine with applySettings() after init() - most things are done in onAfterRendering
	this.oFilePath = new sap.ui.commons.TextField(this.getId() + "-fu_input",
												  {width: this.getWidth()});
	this.oFilePath.setParent(this);
	this.oBrowse = new sap.ui.commons.Button({enabled : this.getEnabled(),
											  text: this.getBrowseText()});
	this.oBrowse.setParent(this);
	this.oFileUpload = null;

};

/**
 * Terminates the control when it has been destroyed.
 * @private
 */
sap.ui.commons.FileUploader.prototype.exit = function(){

	// destroy the nested controls
	this.oFilePath.destroy();
	this.oBrowse.destroy();

	// remove the IFRAME
	jQuery(this.oIFrameRef).unbind();
	sap.ui.getCore().getStaticAreaRef().removeChild(this.oIFrameRef);
	this.oIFrameRef = null;

};

/**
 * Clean up event listeners before rendering
 * @private
 */
sap.ui.commons.FileUploader.prototype.onBeforeRendering = function() {
	// unbind the custom event handlers in case of IE8
	jQuery(this.oFileUpload).unbind();
};

/**
 * Prepare the upload processing, establish the change handler for the
 * pure html input object.
 * @private
 */
sap.ui.commons.FileUploader.prototype.onAfterRendering = function() {

	// get the reference to the fileuploader
	this.oFileUpload = jQuery.sap.domById(this.getId() + "-fu");

	// prepare the upload iframe
	this.prepareUploadFrame();
	
	if (this.getEnabled()) {

		// event listener registration for change event in IE8 because the change
		// event is not bubbling for IE8 => so we do this for all browsers!
		jQuery(this.oFileUpload).change(jQuery.proxy(this.handlechange, this));

	}

	// calculation of the width of the overlay for the original file upload
	// !jQuery.browser.msie check: only for non IE browsers since there we need
	// the button in front of the fileuploader
	if (this.getWidth()) {
		// Recalculate the textfield width...
		var _buttonWidth = this.oBrowse.getDomRef().clientWidth;
		try {
			this.oFilePath.getDomRef().style.width = this.getWidth();
		} catch(oException) {
			jQuery.sap.log.error("Failed to set width of " + this.getWidth() + "\n" + oException.message);
		}
		var _newWidth = this.oFilePath.getDomRef().clientWidth - _buttonWidth;
		if (_newWidth < 0) {
			this.oFilePath.getDomRef().style.width = "0px";
			if (!jQuery.browser.msie) {
				this.oFileUpload.style.width = _buttonWidth;
			}
		}
		else {
			this.oFilePath.getDomRef().style.width = _newWidth + "px";
			this.oFilePath.setWidth(_newWidth ? _newWidth + "px" : null);
			if (!jQuery.browser.msie) {
				this.oFileUpload.style.width = _newWidth + _buttonWidth + "px";
			}
		}
	}

};


sap.ui.commons.FileUploader.prototype.setEnabled = function(bEnabled){
	this.setProperty("enabled", bEnabled, true);
	this.oFilePath.setEnabled(bEnabled);
	this.oBrowse.setEnabled(bEnabled);
	return this;
};


sap.ui.commons.FileUploader.prototype.setValue = function(sValue, bFireEvent) {
	var oldValue = this.getValue();
	if(oldValue != sValue) {
		// only upload when a valid value is set
		var bUpload = this.getUploadOnChange() && sValue;
		// when we do not upload we re-render (cause some browsers don't like
		// to change the value of file uploader INPUT elements)
		this.setProperty("value", sValue, bUpload);
		if (this.oFilePath) {
			this.oFilePath.setValue(sValue);
			if (this.oFilePath.getFocusDomRef()) {
				this.oFilePath.getFocusDomRef().focus();
			}
		}
		// only fire event when triggered by user interaction
		if (bFireEvent) {
			this.fireChange({id:this.getId(), newValue:sValue});
		}
		if (bUpload) {
			this.upload();
		}
	}
	return this;
};


sap.ui.commons.FileUploader.prototype.setAdditionalData = function(sAdditionalData) {
	// set the additional data in the hidden input
	this.setProperty("additionalData", sAdditionalData, true);
	var oAdditionalData = jQuery.sap.domById(this.getId() + "-fu_data");
	if (oAdditionalData) {
		var sAdditionalData = this.getAdditionalData() || "";
		oAdditionalData.value = sAdditionalData;
	}
	return this;
};


sap.ui.commons.FileUploader.prototype.upload = function() {
	var uploadForm = jQuery.sap.domById(this.getId() + "-fu_form");
	try {
		if (uploadForm) {
			this._bUploading = true;
			uploadForm.submit();
			jQuery.sap.log.info("File uploading to " + this.getUploadUrl());
		}
	} catch(oException) {
		jQuery.sap.log.error("File upload failed:\n" + oException.message);
	}
};
 

//
//	Event Handling
//
sap.ui.commons.FileUploader.prototype.onkeydown = function(oEvent) {
	if (!this.getEnabled()) {
		return;
	}
	var iKeyCode = oEvent.keyCode,
		eKC = jQuery.sap.KeyCodes;
	if (iKeyCode == eKC.DELETE || iKeyCode == eKC.BACKSPACE) {
		if (this.oFileUpload) {
			this.setValue("", true);
		}
	} else if (iKeyCode == eKC.SPACE) {
		// this does not work for IE8!
		// consider to always put the focus on the hidden file uploader
		// and let the fileuploader manager the keyboard interaction
		if (!jQuery.browser.msie && this.oFileUpload) {
			this.oFileUpload.click();
		}
		oEvent.preventDefault();
		oEvent.stopPropagation();
	} else if (iKeyCode != eKC.TAB &&
			   iKeyCode != eKC.F6) {
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

sap.ui.commons.FileUploader.prototype.handlechange = function(oEvent) {
	if (this.oFileUpload && this.getEnabled()) {
		this.setValue(this.oFileUpload.value, true);
	}
};

//
//	Private
//
/**
 * Helper to retrieve the I18N texts for a button
 * @private
 * TODO what about RenderManager.translate?
 */
sap.ui.commons.FileUploader.prototype.getBrowseText = function() {
	// TODO: add text to bundle
	return "Browse...";
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
	var sText = undefined;
	if (rb) {
		sText = rb.getText("FILEUPLOAD_BROWSE");
	}
	return sText ? sText : "Browse...";
};

/**
 * Setter for property <code>value</code>.<br/>
 * Default value is: <code>''</code><br/><br/>
 * @param sValue {string}
 * @private
 */
sap.ui.commons.FileUploader.prototype.getShortenValue = function() {
	var sValue = this.getValue();
	return sValue.substr(sValue.lastIndexOf("\\")+1, sValue.length);
};

/**
 * Prepares the hidden IFrame for uploading the file (in static area).
 * @private
 */
sap.ui.commons.FileUploader.prototype.prepareUploadFrame = function() {
	if (!this.oIFrameRef) {
	
		// create the upload iframe
		var uploadForm = jQuery.sap.domById(this.getId() + "-fu_form");
		var oIFrameRef = document.createElement("iframe");
		oIFrameRef.style.display = "none";
		oIFrameRef.src = "javascript:''";
		oIFrameRef.id = this.sId + "-frame";
		sap.ui.getCore().getStaticAreaRef().appendChild(oIFrameRef);
		oIFrameRef.contentWindow.name = this.sId + "-frame";
		
		// sink the load event of the upload iframe
		var that = this;
		this._bUploading = false; // flag for uploading (because of IE8 to make sure that complete is only triggered after upload)
		jQuery(oIFrameRef).load(function(oEvent) {
			if (that._bUploading) {
				jQuery.sap.log.info("File uploaded to " + that.getUploadUrl());
				that.fireUploadComplete({uploadFrame: that.oIFrameRef}); 
				that._bUploading = false;
			}
		});

		// keep the reference
		this.oIFrameRef = oIFrameRef;
		
	}
};