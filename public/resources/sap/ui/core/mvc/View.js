/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.mvc.View.
jQuery.sap.declare("sap.ui.core.mvc.View");
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new mvc/View.
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
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>viewName : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>content : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>afterInit : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>beforeExit : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>afterRendering : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>beforeRendering : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * View
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.core.mvc.View = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.core.mvc.View.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.core.mvc.View. 
 * Resulting metadata can be obtained via sap.ui.core.mvc.View.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.core.mvc.View", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getWidth", "setWidth", "getHeight", "setHeight", "getViewName", "setViewName", 
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", 
    // associations
    
    // events
    "attachAfterInit", "detachAfterInit", "attachBeforeExit", "detachBeforeExit", "attachAfterRendering", "detachAfterRendering", "attachBeforeRendering", "detachBeforeRendering", 
    // methods
    "getController"
  ],

  // ---- control specific ----
  library : "sap.ui.core",
  properties : {
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "viewName" : {name : "viewName", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}
  },
  associations : {},
  events : {
    "afterInit" : "afterInit", 
    "beforeExit" : "beforeExit", 
    "afterRendering" : "afterRendering", 
    "beforeRendering" : "beforeRendering"
  }

});	

sap.ui.core.mvc.View.M_EVENTS = {'afterInit':'afterInit','beforeExit':'beforeExit','afterRendering':'afterRendering','beforeRendering':'beforeRendering'};


/**
 * Getter for property <code>width</code>.
 * The width
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * The height
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>viewName</code>.
 * Name of the View
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>viewName</code>
 * @public
 * 
 */
sap.ui.core.mvc.View.prototype.getViewName = function() {
	return this.getProperty("viewName");
};

/**
 * Setter for property <code>viewName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sViewName  new value for property <code>viewName</code>
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.setViewName = function(sViewName) {
	this.setProperty("viewName", sViewName);
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Child Controls of the view
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.core.mvc.View.prototype.getContent = function() {
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
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.core.mvc.View.prototype.addContent = function(oContent) {
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
sap.ui.core.mvc.View.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.core.mvc.View.prototype.removeAllContent = function() {
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
sap.ui.core.mvc.View.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};


/**
 * Fired when the View has parsed the UI description and instantiated the contained controls (/control tree). 
 *
 * @name sap.ui.core.mvc.View#afterInit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'afterInit' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 * Fired when the View has parsed the UI description and instantiated the contained controls (/control tree). 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.attachAfterInit = function(oData, fnFunction, oListener) {
	this.attachEvent("afterInit", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'afterInit' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.detachAfterInit = function(fnFunction, oListener) {
	this.detachEvent("afterInit", fnFunction, oListener);
	return this;	
};

/**
 * Fire event afterInit to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.mvc.View.prototype.fireAfterInit = function(mArguments) {
	this.fireEvent("afterInit", mArguments);
	return this;
};


/**
 * Fired when the view has received the request to destroy itself, but before it has destroyed anything. 
 *
 * @name sap.ui.core.mvc.View#beforeExit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'beforeExit' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 * Fired when the view has received the request to destroy itself, but before it has destroyed anything. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.attachBeforeExit = function(oData, fnFunction, oListener) {
	this.attachEvent("beforeExit", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'beforeExit' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.detachBeforeExit = function(fnFunction, oListener) {
	this.detachEvent("beforeExit", fnFunction, oListener);
	return this;	
};

/**
 * Fire event beforeExit to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.mvc.View.prototype.fireBeforeExit = function(mArguments) {
	this.fireEvent("beforeExit", mArguments);
	return this;
};


/**
 * Fired when the View has been (re-)rendered and its HTML is present in the DOM. 
 *
 * @name sap.ui.core.mvc.View#afterRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 * Fired when the View has been (re-)rendered and its HTML is present in the DOM. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.attachAfterRendering = function(oData, fnFunction, oListener) {
	this.attachEvent("afterRendering", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.detachAfterRendering = function(fnFunction, oListener) {
	this.detachEvent("afterRendering", fnFunction, oListener);
	return this;	
};

/**
 * Fire event afterRendering to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.mvc.View.prototype.fireAfterRendering = function(mArguments) {
	this.fireEvent("afterRendering", mArguments);
	return this;
};


/**
 * Fired before this View is re-rendered. Us to unbind event handlers from HTML elements etc. 
 *
 * @name sap.ui.core.mvc.View#beforeRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'beforeRendering' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 * Fired before this View is re-rendered. Us to unbind event handlers from HTML elements etc. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.attachBeforeRendering = function(oData, fnFunction, oListener) {
	this.attachEvent("beforeRendering", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'beforeRendering' event of this <code>sap.ui.core.mvc.View</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.core.mvc.View.prototype.detachBeforeRendering = function(fnFunction, oListener) {
	this.detachEvent("beforeRendering", fnFunction, oListener);
	return this;	
};

/**
 * Fire event beforeRendering to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.mvc.View} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.mvc.View.prototype.fireBeforeRendering = function(mArguments) {
	this.fireEvent("beforeRendering", mArguments);
	return this;
};


/**
 * Returns the view's Controller instance (if any)
 *
 * @name sap.ui.core.mvc.View.prototype.getController
 * @function

 * @type object
 * @public
 */


// Start of sap/ui/core/mvc/View.js
(function() {
	/**
	 * @namespace
	 * @name sap.ui.core.mvc
	 * @public
	 */

	/**
	 * initialize the View and connect (create if no instance is given) the Controller
	 * 
	 * @private
	 */
	sap.ui.core.mvc.View.prototype._initCompositeSupport = function(mSettings) {

		// init View with constructor settings
		// (e.g. parse XML or identify default controller) ***/
		
		// make user specific data available during view instantiation
		this.oViewData = mSettings.viewData;
		
		if (this.initViewSettings) {
			this.initViewSettings(mSettings);
		}

		createAndConnectController(this, mSettings);

		// the controller is connected now => notify the view implementations
		// and install an ID preprocessor to replace the view ID placeholder
		// with the correct value
		if (this.onControllerConnected) {
			var fnOldIdPreprocessor = sap.ui.core.Element._fnIdPreprocessor;
			var that = this;
			sap.ui.core.Element._fnIdPreprocessor = function(sId) {
				return that.getId() + "--" + sId;
			};
			this.onControllerConnected(this.oController);
			sap.ui.core.Element._fnIdPreprocessor = fnOldIdPreprocessor;
		}

		// notifies the listeners that the View is initialized
		this.fireAfterInit();

	};

	/**
	 * may return null for controller-less View
	 * 
	 * @return Controller of the View
	 * @public
	 */
	sap.ui.core.mvc.View.prototype.getController = function() {
		return this.oController;
	};

	/**
	 * returns an Element by its id in the context of the View
	 * 
	 * @return Element by its id
	 * @public
	 */
	sap.ui.core.mvc.View.prototype.byId = function(sId) {
		return sap.ui.getCore().byId(this.createId(sId));
	};

	/**
	 * creates an id for an Element prefixed with the view id
	 * 
	 * @return prefixed id
	 * @public
	 */
	sap.ui.core.mvc.View.prototype.createId = function(sId) {
		return this.getId() + "--" + sId;
	};

	/**
	 * creates and connects the controller if the controller is not given in the
	 * mSettings
	 * 
	 * @private
	 */
	var createAndConnectController = function(oThis, mSettings) {

		// only set when used internally
		var oController = mSettings.controller;

		// check for default controller
		if (!oController && oThis.getControllerName) {
			// get optional default controller name
			var defaultController = oThis.getControllerName();
			if (defaultController) {
				// create controller
				oController = sap.ui.controller(defaultController);
			}
		}
		
		if ( oController ) {
			// connect controller
			oController.connectToView(oThis);
		}
	};
	
	/**
	 * Returns user specific data object
	 * 
	 * @return object viewData
	 * @public
	 */
	sap.ui.core.mvc.View.prototype.getViewData = function(){
		return this.oViewData;
	};
	
	/**
	 * exit hook
	 * 
	 * @private
	 */
	sap.ui.core.mvc.View.prototype.exit = function() {
		this.fireBeforeExit();
		this.oController = null;
	};

	/**
	 * onAfterRendering hook
	 * 
	 * @private
	 */
	sap.ui.core.mvc.View.prototype.onAfterRendering = function() {
		this.fireAfterRendering();
	};

	/**
	 * onBeforeRendering hook
	 * 
	 * @private
	 */
	sap.ui.core.mvc.View.prototype.onBeforeRendering = function() {
		this.fireBeforeRendering();
	};
	
	/**
	 * Creates a view of the given type, name and with the given id.
	 *
	 * The <code>oView</code> configuration object can have the following properties for the view
	 * instantiation:
	 * <ul>
	 * <li>The ID <code>oView.id</code> specifies an ID for the View instance. If no ID is given,
	 * an ID will be generated.</li>
	 * <li>The view name <code>oView.viewName</code> corresponds to an XML module that can be loaded
	 * via the module system (oView.viewName + suffix ".view.xml")</li>
	 * <li>The controller instance <code>oView.controller</code> must be a valid controller implementation.
	 * The given controller instance overrides the controller defined in the view definition</li>
	 * <li>The view type <code>oView.type</code> specifies what kind of view will be instantiated. All valid
	 * view types are listed in the enumeration sap.ui.core.mvc.ViewType.</li>
	 * <li>The view data <code>oView.viewData</code> can hold user specific data. This data is available
	 * during the whole lifecycle of the view and the controller</li>
	 * </ul>
	 * 
	 * @param {object} [oView] view configuration Object
	 * @public
	 * @static
	 */
	sap.ui.view = function(oView) {
		var view = null;
		if (!oView.type) {
			throw new Error("No view type specified.");
		} else if (oView.type === sap.ui.core.mvc.ViewType.JS) {
			view = new sap.ui.core.mvc.JSView(oView);
		} else if (oView.type === sap.ui.core.mvc.ViewType.JSON) {
			view = new sap.ui.core.mvc.JSONView(oView);
		} else if (oView.type === sap.ui.core.mvc.ViewType.XML) {
			view = new sap.ui.core.mvc.XMLView(oView);
		} else { // unknown view type
			throw new Error("Unknown view type "+oView.type+" specified.");
		}
		return view;
	};
	
}());