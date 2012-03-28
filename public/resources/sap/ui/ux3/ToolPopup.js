/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ToolPopup.
jQuery.sap.declare("sap.ui.ux3.ToolPopup");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ToolPopup.
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
 * <li>title : string</li>
 * <li>icon : string</li>
 * <li>iconHover : string</li>
 * <li>iconSelected : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>buttons : sap.ui.core.Control</li>
 * <li>content : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>open : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>close : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>enter : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>iconChanged : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * A pop up which the user can open from the Shell's tool pane. Generally, the starting point would be an icon.
 * For this pop up, buttons can be defined with any text; therefore, it has the same purpose and similar look like any common dialog box.
 * A ToolPopup can have any content. Depending on the application type and design, the structure of the texts and input fields can be for
 * example form-like.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.ToolPopup = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.ToolPopup.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.ToolPopup. 
 * Resulting metadata can be obtained via sap.ui.ux3.ToolPopup.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.ToolPopup", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getTitle", "setTitle", "getIcon", "setIcon", "getIconHover", "setIconHover", "getIconSelected", "setIconSelected", 
    // aggregations
    "getButtons", "insertButton", "addButton", "removeButton", "removeAllButtons", "indexOfButton", "destroyButtons", "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", 
    // associations
    
    // events
    "attachOpen", "detachOpen", "attachClose", "detachClose", "attachEnter", "detachEnter", "attachIconChanged", "detachIconChanged", 
    // methods
    "isOpen", "open", "close", "setPosition"
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "title" : {name : "title", type : "string", group : "Misc", defaultValue : null},
    "icon" : {name : "icon", type : "string", group : "Misc", defaultValue : null},
    "iconHover" : {name : "iconHover", type : "string", group : "Misc", defaultValue : null},
    "iconSelected" : {name : "iconSelected", type : "string", group : "Misc", defaultValue : null}
  },
  defaultAggregation : "content",
  aggregations : {
    "buttons" : {name : "buttons", type : "sap.ui.core.Control", multiple : true, singularName : "button"}, 
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}
  },
  associations : {},
  events : {
    "open" : "open", 
    "close" : "close", 
    "enter" : "enter", 
    "iconChanged" : "iconChanged"
  }

});	

sap.ui.ux3.ToolPopup.M_EVENTS = {'open':'open','close':'close','enter':'enter','iconChanged':'iconChanged'};


/**
 * Getter for property <code>title</code>.
 * The title displayed in the pop up window (optional property)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * The URL to the icon displayed in the tool area which is used to open the ToolPopup.
 * The recommended size is 32x32px, including some transparent border. Therefore, the content will cover about 20x20px.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


/**
 * Getter for property <code>iconHover</code>.
 * The URL to the icon in hover state, displayed in the tool area which is used to open the pop up.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>iconHover</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getIconHover = function() {
	return this.getProperty("iconHover");
};

/**
 * Setter for property <code>iconHover</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIconHover  new value for property <code>iconHover</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.setIconHover = function(sIconHover) {
	this.setProperty("iconHover", sIconHover);
	return this;
};


/**
 * Getter for property <code>iconSelected</code>.
 * The URL to the icon in selected state displayed in the tool area which is used to open the pop up.
 * If no selected icon is given, the hover icon is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.ui.ux3.ToolPopup.prototype.getIconSelected = function() {
	return this.getProperty("iconSelected");
};

/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.setIconSelected = function(sIconSelected) {
	this.setProperty("iconSelected", sIconSelected);
	return this;
};

	
/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * The buttons to appear in the pop up
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.getButtons = function() {
	return this.getAggregation("buttons", []);
};


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.insertButton = function(oButton, iIndex) {
	this.insertAggregation("buttons", oButton, iIndex);
	return this;
};

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ToolPopup.prototype.addButton = function(oButton) {
	this.addAggregation("buttons", oButton);
	return this;
};

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.core.Control} vButton the button to remove or its index or id
 * @return {sap.ui.core.Control} the removed button or null
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.removeButton = function(vButton) {
	return this.removeAggregation("buttons", vButton);
};

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.removeAllButtons = function() {
	return this.removeAllAggregation("buttons");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.indexOfButton = function(oButton) {
	return this.indexOfAggregation("buttons", oButton);
};
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.destroyButtons = function() {
	this.destroyAggregation("buttons");
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the pop up
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.getContent = function() {
	return this.getAggregation("content", []);
};


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ToolPopup.prototype.addContent = function(oContent) {
	this.addAggregation("content", oContent);
	return this;
};

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.removeAllContent = function() {
	return this.removeAllAggregation("content");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};


/**
 * Event is fired when the pop up opens 
 *
 * @name sap.ui.ux3.ToolPopup#open
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * Event is fired when the pop up opens 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.attachOpen = function(oData, fnFunction, oListener) {
	this.attachEvent("open", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.detachOpen = function(fnFunction, oListener) {
	this.detachEvent("open", fnFunction, oListener);
	return this;	
};

/**
 * Fire event open to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ToolPopup.prototype.fireOpen = function(mArguments) {
	this.fireEvent("open", mArguments);
	return this;
};


/**
 * Event is fired when the pop up closes 
 *
 * @name sap.ui.ux3.ToolPopup#close
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * Event is fired when the pop up closes 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.attachClose = function(oData, fnFunction, oListener) {
	this.attachEvent("close", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.detachClose = function(fnFunction, oListener) {
	this.detachEvent("close", fnFunction, oListener);
	return this;	
};

/**
 * Fire event close to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ToolPopup.prototype.fireClose = function(mArguments) {
	this.fireEvent("close", mArguments);
	return this;
};


/**
 * Event is fired whenever the user clicks the Enter or the Return key inside the pop up 
 *
 * @name sap.ui.ux3.ToolPopup#enter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.originalEvent The onsapenter event, received by the pop up
 * @param {sap.ui.core.Control} oControlEvent.getParameters.originalSrcControl The control that was focused when the user pressed the Enter key (may be null)
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'enter' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * Event is fired whenever the user clicks the Enter or the Return key inside the pop up 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.attachEnter = function(oData, fnFunction, oListener) {
	this.attachEvent("enter", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'enter' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.detachEnter = function(fnFunction, oListener) {
	this.detachEvent("enter", fnFunction, oListener);
	return this;	
};

/**
 * Fire event enter to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'originalEvent' of type <code>object</code> The onsapenter event, received by the pop up</li>
 * <li>'originalSrcControl' of type <code>sap.ui.core.Control</code> The control that was focused when the user pressed the Enter key (may be null)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ToolPopup.prototype.fireEnter = function(mArguments) {
	this.fireEvent("enter", mArguments);
	return this;
};


/**
 * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI. 
 *
 * @name sap.ui.ux3.ToolPopup#iconChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'iconChanged' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.attachIconChanged = function(oData, fnFunction, oListener) {
	this.attachEvent("iconChanged", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'iconChanged' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.detachIconChanged = function(fnFunction, oListener) {
	this.detachEvent("iconChanged", fnFunction, oListener);
	return this;	
};

/**
 * Fire event iconChanged to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ToolPopup.prototype.fireIconChanged = function(mArguments) {
	this.fireEvent("iconChanged", mArguments);
	return this;
};


/**
 * Returns whether the pop up is currently open
 *
 * @name sap.ui.ux3.ToolPopup.prototype.isOpen
 * @function

 * @type boolean
 * @public
 */


/**
 * Opens the pop up. The method is called by the Shell.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.open
 * @function

 * @type void
 * @public
 */


/**
 * Closes the pop up. Can be called by the Shell when the pop up's button is clicked again; or by the application
 * when the interaction in the pop up has been completed or canceled.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.setPosition
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/ux3/ToolPopup.js
jQuery.sap.require("sap.ui.core.Popup");

sap.ui.ux3.ToolPopup.prototype.init = function() {
	this.oPopup = null;
	this._bPositionSet = false;
};

sap.ui.ux3.ToolPopup.prototype.isOpen = function() {
	if (this.oPopup && this.oPopup.isOpen()) {
		return true;
	}
	return false;
};

sap.ui.ux3.ToolPopup.prototype.willBeClosed = function() {
	var eState = this.oPopup && this.oPopup.getOpenState();
	return eState !== sap.ui.core.OpenState.OPENING && eState !== sap.ui.core.OpenState.OPEN;
};

sap.ui.ux3.ToolPopup.prototype.open = function() {

	// if the popup position has not been (re-)initialized since the last time this was opened, try to apply the default position
	if (!this._bPositionSet) {
		var oParent = this.getParent();
		if (oParent && oParent instanceof sap.ui.ux3.Shell) {
			var oOpener = jQuery.sap.domById(oParent.getId() + "-tool-" + this.getId());
			if (oOpener) {
				this.setPosition(sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.EndTop, oOpener, "13 -6", "none");
			}
		}
	}
	this._bPositionSet = false;

	// create popup if required
	this._ensurePopup();

	// open popup
	this.fireOpen();
	this.oPopup.open(400);

	// position the arrow correctly
	jQuery.sap.byId(this.getId() + "-arrow").attr("class", "sapUiUx3TPArrow sapUiUx3TPArrow" + this._getArrowPosition());

	return this;
};

/**
 * Calculates the desired arrow position from the docking. This only works when "my" and "at" both use the jQuery-based docking
 * which means they are strings like "begin top".
 * The current implementation only recognizes few possible combinations and could be extended.
 *
 * @private
 */
sap.ui.ux3.ToolPopup.prototype._getArrowPosition = function() {
	var pos = "BeginTop";
	// calculate the position of the arrow from the docking of the popup
	var dock = this.oPopup._oLastPosition;
	if (dock && typeof(dock.my) === "string" && typeof(dock.at) === "string") {
		if (dock.my == "begin bottom" && dock.at == "begin top") { // TODO: find algorithm and cover all cases
			pos = "BottomBegin";
		}
	}
	return pos;
};

sap.ui.ux3.ToolPopup.prototype.close = function() {
	if (this.oPopup && this.oPopup.isOpen()) {
		this.oPopup.close(400);
		this.fireClose();
	}
	return this;
};

sap.ui.ux3.ToolPopup.prototype.onsapenter = function(oEvent) {
	this.fireEnter({originalEvent:oEvent,originalSrcControl:oEvent.srcControl});
};

sap.ui.ux3.ToolPopup.prototype._ensurePopup = function() {
	if (!this.oPopup) {
		this.oPopup = new sap.ui.core.Popup(this, false, true, false);
	}
	return this.oPopup;
};

sap.ui.ux3.ToolPopup.prototype.setPosition = function() {
	this._ensurePopup();
	this.oPopup.setPosition.apply(this.oPopup, arguments);
	this._bPositionSet = true;
	return this;
};


sap.ui.ux3.ToolPopup.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};
sap.ui.ux3.ToolPopup.prototype.setIconHover = function(sIconHover) {
	this.setProperty("iconHover", sIconHover, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};
sap.ui.ux3.ToolPopup.prototype.setIconSelected = function(sIconSelected) {
	this.setProperty("iconSelected", sIconSelected, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};