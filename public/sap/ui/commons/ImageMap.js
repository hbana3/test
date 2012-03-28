/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ImageMap.
jQuery.sap.declare("sap.ui.commons.ImageMap");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ImageMap.
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
 * <li>name : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>areas : sap.ui.commons.Area</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>press : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Image Map defines the parts of the Image that could serve as the hyper links
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.ImageMap = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.ImageMap.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.ImageMap. 
 * Resulting metadata can be obtained via sap.ui.commons.ImageMap.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.ImageMap", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getName", "setName", 
    // aggregations
    "getAreas", "insertArea", "addArea", "removeArea", "removeAllAreas", "indexOfArea", "destroyAreas", 
    // associations
    
    // events
    "attachPress", "detachPress", 
    // methods
    "createArea"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "name" : {name : "name", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {
    "areas" : {name : "areas", type : "sap.ui.commons.Area", multiple : true, singularName : "area"}
  },
  associations : {},
  events : {
    "press" : "press"
  }

});	

sap.ui.commons.ImageMap.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>name</code>.
 * Name of the Image that can be referenced from the Image
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.commons.ImageMap.prototype.getName = function() {
	return this.getProperty("name");
};

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ImageMap.prototype.setName = function(sName) {
	this.setProperty("name", sName);
	return this;
};

	
/**
 * Getter for aggregation <code>areas</code>.<br/>
 * Area of the image that is link to the desired location
 * 
 * @return {sap.ui.commons.Area[]}
 * @public
 */
sap.ui.commons.ImageMap.prototype.getAreas = function() {
	return this.getAggregation("areas", []);
};


/**
 * Inserts a area into the aggregation named <code>areas</code>.
 *
 * @param {sap.ui.commons.Area}
 *          oArea the area to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the area should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the area is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the area is inserted at 
 *             the last position        
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ImageMap.prototype.insertArea = function(oArea, iIndex) {
	this.insertAggregation("areas", oArea, iIndex);
	return this;
};

/**
 * Adds some area <code>oArea</code> 
 * to the aggregation named <code>areas</code>.
 *
 * @param {sap.ui.commons.Area}
 *            oArea the area to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.ImageMap.prototype.addArea = function(oArea) {
	this.addAggregation("areas", oArea);
	return this;
};

/**
 * Removes an area from the aggregation named <code>areas</code>.
 *
 * @param {int | string | sap.ui.commons.Area} vArea the area to remove or its index or id
 * @return {sap.ui.commons.Area} the removed area or null
 * @public
 */
sap.ui.commons.ImageMap.prototype.removeArea = function(vArea) {
	return this.removeAggregation("areas", vArea);
};

/**
 * Removes all the controls in the aggregation named <code>areas</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Area[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.ImageMap.prototype.removeAllAreas = function() {
	return this.removeAllAggregation("areas");
};

/**
 * Checks for the provided <code>sap.ui.commons.Area</code> in the aggregation named <code>areas</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.Area}
 *            oArea the area whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.ImageMap.prototype.indexOfArea = function(oArea) {
	return this.indexOfAggregation("areas", oArea);
};
	

/**
 * Destroys all the areas in the aggregation 
 * named <code>areas</code>.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ImageMap.prototype.destroyAreas = function() {
	this.destroyAggregation("areas");
	return this;
};


/**
 * Presss event for the image map 
 *
 * @name sap.ui.commons.ImageMap#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.areaId Id of clicked Area.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.ImageMap</code>.<br/>
 * Presss event for the image map 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ImageMap.prototype.attachPress = function(oData, fnFunction, oListener) {
	this.attachEvent("press", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.ImageMap</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ImageMap.prototype.detachPress = function(fnFunction, oListener) {
	this.detachEvent("press", fnFunction, oListener);
	return this;	
};

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'areaId' of type <code>string</code> Id of clicked Area.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.ImageMap.prototype.firePress = function(mArguments) {
	this.fireEvent("press", mArguments);
	return this;
};


/**
 * add an Area to the Image Map
 *
 * @name sap.ui.commons.ImageMap.prototype.createArea
 * @function
 * @param {string[]} 
 *         aArea
 *         

 * @type void
 * @public
 */


// Start of sap/ui/commons/ImageMap.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

/**
 * Adds areas to the Image Map. Each argument must be either a JSon object or
 * list of objects or the area element or elements.
 * 
 * @param {sap.ui.commons.Area|string}
 *            Area to add
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ImageMap.prototype.createArea = function() {
	var oArea = new sap.ui.commons.Area();

	for ( var i = 0; i < arguments.length; i++) {
		var oContent = arguments[i];
		var oArea;
		if (oContent instanceof sap.ui.commons.Area) {
			oArea = oContent;
		} else {
			oArea = new sap.ui.commons.Area(oContent);
		}
		this.addArea(oArea);
	}
	return this;
};

/**
 * Used for after-rendering initialization.
 * 
 * @private
 */
sap.ui.commons.ImageMap.prototype.onAfterRendering = function() {

	
	this.oDomRef = this.getDomRef();

	// Initialize the ItemNavigation if does not exist yet
	if (!this.oItemNavigation) {
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		
		
		if (jQuery.browser.msie) {
		
			var that = this;
			var aImageControls = [];
			this.oItemNavigation.setTabIndex0();

			// Find the Image control and add delegate to it
			var $Images = jQuery("img[useMap=#" + this.getName() + "]");
			$Images.each(function(i, image) {
				var id = image.getAttribute("id");
				var imageControl = sap.ui.getCore().byId(id);
				imageControl.addDelegate(that.oItemNavigation);
				that.oItemNavigation.setRootDomRef(image);
				aImageControls.push(imageControl);
			});

			this.aImageControls = aImageControls;
		} else {

			this.addDelegate(this.oItemNavigation);
			this.oItemNavigation.setRootDomRef(this.oDomRef);
		}

	}

	// Set navigations items = Areas inside of Image map
	var aItemDomRefs = [];
	var aAllAreas = this.getAreas();
	for ( var i = 0; i < aAllAreas.length; i++) {
		var oDomRef = aAllAreas[i].getFocusDomRef();
		if (oDomRef) { // separators return null here
			aItemDomRefs.push(oDomRef);
		}
	}

	this.oItemNavigation.setItemDomRefs(aItemDomRefs);
	this.oItemNavigation.setCycling(true);
	this.oItemNavigation.setSelectedIndex(-1);
	this.oItemNavigation.setFocusedIndex(-1);

};

/**
 * Does all the cleanup when the Image Map is to be destroyed. Called from the
 * element's destroy() method.
 * 
 * @private
 */
sap.ui.commons.ImageMap.prototype.exit = function() {
	// Remove the item navigation delegate
	if (this.oItemNavigation) {
		if (jQuery.browser.msie) {
			for ( var i = 0; i < this.aImageControls.length; i++) {
				this.aImageControls[i].removeDelegate(this.oItemNavigation);
			} 
		} else {
			this.removeDelegate(this.oItemNavigation);
		}	
		this.oItemNavigation.destroy();
	}

	// No super.exit() to call
};
