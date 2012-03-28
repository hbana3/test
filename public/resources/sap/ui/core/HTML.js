/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.HTML.
jQuery.sap.declare("sap.ui.core.HTML");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new HTML.
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
 * <li>content : string</li>
 * <li>preferDOM : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>afterRendering : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Embeds standard HTML in a SAPUI5 control tree.
 * @extends sap.ui.core.Control
 *
 * @author Frank Weigel 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.HTML = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.HTML.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.core.HTML. 
 * Resulting metadata can be obtained via sap.ui.core.HTML.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.HTML", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getContent", "setContent", "getPreferDOM", "setPreferDOM", 
    // aggregations
    
    // associations
    
    // events
    "attachAfterRendering", "detachAfterRendering"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.core",
  properties : {
    "content" : {name : "content", type : "string", group : "Misc", defaultValue : null},
    "preferDOM" : {name : "preferDOM", type : "boolean", group : "Misc", defaultValue : true}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "afterRendering" : "afterRendering"
  }

});	

sap.ui.core.HTML.M_EVENTS = {'afterRendering':'afterRendering'};


/**
 * Getter for property <code>content</code>.
 * HTML content to be displayed, defined as a string. The content is converted to DOM nodes with a call to <code>new jQuery(content)</code>, so any restrictions for the jQuery constructor apply to the content of the HTML control as well.
 * 
 * Some of these restrictions (there might be others!) are:
 * <ul>
 * <li>the content must be enclosed in tags, pure text is not supported. </li>
 * <li>if the content contains script tags, they will be executed but they will not appear in the resulting DOM tree. When the contained code tries to find the corresponding script tag, it will fail.</li>
 * </ul>
 * 
 * Please consider to consult the jQuery documentation as well.
 * 
 * The HTML control currently doesn't prevent the usage of multiple root nodes in its DOM content (e.g. setContent("<div/><div/>")), but this is not a guaranteed feature. The accepted content might be restricted to single root nodes in future versions. To notify applications about this fact, a warning is written in the log when multiple root nodes are used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>content</code>
 * @public
 * 
 */
sap.ui.core.HTML.prototype.getContent = function() {
	return this.getProperty("content");
};

/**
 * Setter for property <code>content</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sContent  new value for property <code>content</code>
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.HTML.prototype.setContent = function(sContent) {
	this.setProperty("content", sContent);
	return this;
};


/**
 * Getter for property <code>preferDOM</code>.
 * Whether existing DOM content is preferred over the given content string.
 * 
 * There are two scenarios where this flag is relevant (when set to true):
 * <ul>
 * <li>for the initial rendering: when an HTML control is added to an UIArea for the first time and if the root node of that UIArea contained DOM content with the same id as the HTML control, then that content will be used for rendering instead of any specified string content</li>
 * <li>any follow-up rendering: when an HTML control is rendered for the second or any later time and the preferDOM flag is set, then the DOM from the first rendering is preserved and not replaced by the string content</li>
 * </ul>
 * 
 * As preserving the existing DOM is the most common use case of the HTML control, the default value is true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>preferDOM</code>
 * @public
 * 
 */
sap.ui.core.HTML.prototype.getPreferDOM = function() {
	return this.getProperty("preferDOM");
};

/**
 * Setter for property <code>preferDOM</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bPreferDOM  new value for property <code>preferDOM</code>
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.HTML.prototype.setPreferDOM = function(bPreferDOM) {
	this.setProperty("preferDOM", bPreferDOM);
	return this;
};


/**
 * Fired after the HTML control has been rendered. Allows to manipulate the resulting DOM.
 * 
 * When the control doesn't have string content and no preserved DOM existed for this control, then this event will fire, but there won't be a DOM node for this control.
 *  
 *
 * @name sap.ui.core.HTML#afterRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.isPreservedDOM Whether the current DOM of the control has been preserved (true) or not (e.g. rendered from content property or it is an empty HTML control).
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ui.core.HTML</code>.<br/>
 * Fired after the HTML control has been rendered. Allows to manipulate the resulting DOM.
 * 
 * When the control doesn't have string content and no preserved DOM existed for this control, then this event will fire, but there won't be a DOM node for this control.
 *  
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.HTML.prototype.attachAfterRendering = function(oData, fnFunction, oListener) {
	this.attachEvent("afterRendering", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ui.core.HTML</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.HTML.prototype.detachAfterRendering = function(fnFunction, oListener) {
	this.detachEvent("afterRendering", fnFunction, oListener);
	return this;	
};

/**
 * Fire event afterRendering to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'isPreservedDOM' of type <code>boolean</code> Whether the current DOM of the control has been preserved (true) or not (e.g. rendered from content property or it is an empty HTML control).</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.HTML} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.HTML.prototype.fireAfterRendering = function(mArguments) {
	this.fireEvent("afterRendering", mArguments);
	return this;
};


// Start of sap/ui/core/HTML.js
/**
 * @return {DOMNode} The element's DOM reference or null
 * @public
 */
sap.ui.core.HTML.prototype.getDomRef = function() {
	return jQuery.sap.domById("sap-ui-dummy-" + this.getId()) || jQuery.sap.domById(this.getId());
};

sap.ui.core.HTML.prototype.setContent = function(sContent) {
	this.setProperty("content", sContent, true);
	if ( /* sContent && */ this.getDomRef() ) {
		var $newContent = new jQuery(this.getContent()); // TODO what if content is not HTML (e.g. #something)?
		jQuery(this.getDomRef()).replaceWith($newContent);
		this._postprocessNewContent($newContent);
	} else {
		this.invalidate();
	}
	return this;
};

/**
 * If the HTML doesn't contain own content, it tries to reproduce existing content
 */
sap.ui.core.HTML.prototype.onAfterRendering = function() {

	var $placeholder = jQuery(jQuery.sap.domById("sap-ui-dummy-" + this.getId()));
	var $oldContent = sap.ui.core.RenderManager.findPreservedContent(this.getId());
	var $newContent = undefined;
	var isPreservedDOM = false;
	if ( /*this.getContent() && */ (!this.getPreferDOM() || $oldContent.size() == 0) ) {
		// remove old, preserved content
		$oldContent.remove();
		// replace placeholder with content string
		$newContent = new jQuery(this.getContent()); // TODO what if content is not HTML (e.g. #something)?
		$placeholder.replaceWith($newContent);
	} else if ( $oldContent.size() > 0 ) {
		// replace dummy with old content
		$placeholder.replaceWith($oldContent);
		$newContent = $oldContent;
		isPreservedDOM = true;
	} else {
		$placeholder.remove();
	}

	this._postprocessNewContent($newContent);

	this.fireAfterRendering({isPreservedDOM : isPreservedDOM});

};

sap.ui.core.HTML.prototype._postprocessNewContent = function($newContent) {
	if ( $newContent && $newContent.size() > 0 ) {
		if ( $newContent.length > 1 ) {
			jQuery.sap.log.warning("[Unsupported Feature]: " + this + " has rendered " + $newContent.length + " root nodes!");
		}

		// set a marker that identifies all root nodes in $newContent as 'to-be-preserved'
		sap.ui.core.RenderManager.markPreservableContent($newContent, this.getId());
		// and if no node has the control id, search the first without an id and set it
		if ( $newContent.find("#" + this.getId().replace(/(:|\.)/g,'\\$1')).length === 0 ) {
			$newContent.filter(":not([id])").first().attr("id", this.getId());
		}
	} else {
		jQuery.sap.log.debug("" + this + " is empty after rendering, setting bOutput to false");
		this.bOutput = false; // clean up internal rendering bookkeeping
	}
};

/**
 * Sets some new DOM content for this HTML control. The content will replace the existing content
 * after the next rendering. Properties are not modified, but preferDOM should be set to true.
 *
 * @param {DOMNode} oDom the new DOM content
 * @return this for chaining
 * @public
 */
sap.ui.core.HTML.prototype.setDOMContent = function(oDom) {
	var $newContent = jQuery(oDom);
	if ( this.getDomRef() ) {
		jQuery(this.getDomRef()).replaceWith($newContent);
		this._postprocessNewContent($newContent);
	} else {
		$newContent.appendTo(sap.ui.core.RenderManager.getPreserveAreaRef());
		if ( this.getUIArea() ) {
			this.getUIArea().invalidate();
		} // TODO fix issue with Control.rerender()
		this._postprocessNewContent($newContent); // CHECK is it okay to set bOutput to false for empty content?
	}

	return this;
};

