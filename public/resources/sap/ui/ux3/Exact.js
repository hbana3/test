/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Exact.
jQuery.sap.declare("sap.ui.ux3.Exact");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Exact.
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
 * <li>resultText : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>settingsMenu : sap.ui.commons.Menu</li>
 * <li>attributes : sap.ui.ux3.ExactAttribute</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>search : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>refineSearch : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * A comprehensive UI design approach with graphical and functional elements for searching data, exploring data, and acting on the data
 * ("Explore and Act (Exact) Pattern").
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.Exact = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.Exact.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.Exact. 
 * Resulting metadata can be obtained via sap.ui.ux3.Exact.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.Exact", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getResultText", "setResultText", 
    // aggregations
    "getSettingsMenu", "setSettingsMenu", "destroySettingsMenu", "getAttributes", "insertAttribute", "addAttribute", "removeAttribute", "removeAllAttributes", "indexOfAttribute", "destroyAttributes", 
    // associations
    
    // events
    "attachSearch", "detachSearch", "attachRefineSearch", "detachRefineSearch", 
    // methods
    "getResultArea", "getSearchField"
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "resultText" : {name : "resultText", type : "string", group : "Misc", defaultValue : null}
  },
  defaultAggregation : "attributes",
  aggregations : {
    "settingsMenu" : {name : "settingsMenu", type : "sap.ui.commons.Menu", multiple : false}, 
    "attributes" : {name : "attributes", type : "sap.ui.ux3.ExactAttribute", multiple : true, singularName : "attribute"}
  },
  associations : {},
  events : {
    "search" : "search", 
    "refineSearch" : "refineSearch"
  }

});	

sap.ui.ux3.Exact.M_EVENTS = {'search':'search','refineSearch':'refineSearch'};


/**
 * Getter for property <code>resultText</code>.
 * A title text which is displayed above the result section
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>resultText</code>
 * @public
 * 
 */
sap.ui.ux3.Exact.prototype.getResultText = function() {
	return this.getProperty("resultText");
};

/**
 * Setter for property <code>resultText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sResultText  new value for property <code>resultText</code>
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.setResultText = function(sResultText) {
	this.setProperty("resultText", sResultText);
	return this;
};

	
/**
 * Getter for aggregation <code>settingsMenu</code>.<br/>
 * Defines the 'Settings' button in the browse section tool bar
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 */
sap.ui.ux3.Exact.prototype.getSettingsMenu = function() {
	return this.getAggregation("settingsMenu", null);
};


/**
 * Setter for the aggregated <code>settingsMenu</code>.
 * @param oSettingsMenu {sap.ui.commons.Menu}
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.setSettingsMenu = function(oSettingsMenu) {
	this.setAggregation("settingsMenu", oSettingsMenu);
	return this;
};
	

/**
 * Destroys the settingsMenu in the aggregation 
 * named <code>settingsMenu</code>.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.destroySettingsMenu = function() {
	this.destroyAggregation("settingsMenu");
	return this;
};

	
/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * The attributes which shall be available to refine the search
 * 
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 */
sap.ui.ux3.Exact.prototype.getAttributes = function() {
	return this.getAggregation("attributes", []);
};


/**
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.insertAttribute = function(oAttribute, iIndex) {
	this.insertAggregation("attributes", oAttribute, iIndex);
	return this;
};

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Exact.prototype.addAttribute = function(oAttribute) {
	this.addAggregation("attributes", oAttribute);
	return this;
};

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.ux3.ExactAttribute} the removed attribute or null
 * @public
 */
sap.ui.ux3.Exact.prototype.removeAttribute = function(vAttribute) {
	return this.removeAggregation("attributes", vAttribute);
};

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Exact.prototype.removeAllAttributes = function() {
	return this.removeAllAggregation("attributes");
};

/**
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Exact.prototype.indexOfAttribute = function(oAttribute) {
	return this.indexOfAggregation("attributes", oAttribute);
};
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.destroyAttributes = function() {
	this.destroyAggregation("attributes");
	return this;
};


/**
 * Event is fired when the search button is clicked 
 *
 * @name sap.ui.ux3.Exact#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The query string which was entered in the search field.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.Exact</code>.<br/>
 * Event is fired when the search button is clicked 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.attachSearch = function(oData, fnFunction, oListener) {
	this.attachEvent("search", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.Exact</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.detachSearch = function(fnFunction, oListener) {
	this.detachEvent("search", fnFunction, oListener);
	return this;	
};

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The query string which was entered in the search field.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Exact.prototype.fireSearch = function(mArguments) {
	this.fireEvent("search", mArguments);
	return this;
};


/**
 * Event which is fired when an attribute is selected or unselected. 
 *
 * @name sap.ui.ux3.Exact#refineSearch
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The query string which was entered in the search field
 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.changedAttribute The attribute which was selected or unselected recently
 * @param {object} oControlEvent.getParameters.allSelectedAttributes Array of all selected ExcatAttribute.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'refineSearch' event of this <code>sap.ui.ux3.Exact</code>.<br/>
 * Event which is fired when an attribute is selected or unselected. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.attachRefineSearch = function(oData, fnFunction, oListener) {
	this.attachEvent("refineSearch", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'refineSearch' event of this <code>sap.ui.ux3.Exact</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Exact.prototype.detachRefineSearch = function(fnFunction, oListener) {
	this.detachEvent("refineSearch", fnFunction, oListener);
	return this;	
};

/**
 * Fire event refineSearch to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The query string which was entered in the search field</li>
 * <li>'changedAttribute' of type <code>sap.ui.ux3.ExactAttribute</code> The attribute which was selected or unselected recently</li>
 * <li>'allSelectedAttributes' of type <code>object</code> Array of all selected ExcatAttribute.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Exact.prototype.fireRefineSearch = function(mArguments) {
	this.fireEvent("refineSearch", mArguments);
	return this;
};


/**
 * Returns the ExactArea representing the result section. Arbitrary content can be added here.
 *
 * @name sap.ui.ux3.Exact.prototype.getResultArea
 * @function

 * @type sap.ui.ux3.ExactArea
 * @public
 */


/**
 * Returns the SearchField control which is used by the Exact control.
 *
 * @name sap.ui.ux3.Exact.prototype.getSearchField
 * @function

 * @type sap.ui.commons.SearchField
 * @public
 */


// Start of sap/ui/ux3/Exact.js
jQuery.sap.require("sap.ui.ux3.ExactArea");
jQuery.sap.require("sap.ui.ux3.ExactAttribute");
jQuery.sap.require("sap.ui.ux3.ExactBrowser");
jQuery.sap.require("sap.ui.commons.SearchField");
jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.TextView");


(function() {

/**
 * Does the setup when the Exact is created.
 * @private
 */
sap.ui.ux3.Exact.prototype.init = function(){
	var that = this;

	//Init the used subcontrols
	//Init Search Area
	this._searchArea = new sap.ui.ux3.ExactArea(this.getId()+"-searchArea", {toolbarVisible: false});
	this._searchArea.addStyleClass("sapUiUx3ExactSearchArea");
	this.addAggregation("controls", this._searchArea);

	this._search_input = new sap.ui.commons.SearchField(this.getId()+"-searchTF", {enableListSuggest: false});
	this._search_input.attachSearch(function(oEvent){
		_handleSearch(that, oEvent);
	});
	this._search_input.addStyleClass("sapUiUx3ExactSearchText");
	this._searchArea.addContent(this._search_input);

	//Init Browse Area
	this._browser = new sap.ui.ux3.ExactBrowser(this.getId()+"-browser", {title: "Attributes"}); //TODO: I18n
	this._browser.addStyleClass("sapUiUx3ExactBrowseArea");
	this.addAggregation("controls", this._browser);
	this._browser.attachAttributeSelected(function(oEvent){
		_handleAttributeSelected(that, oEvent);
	});

	//Init Result Area
	this._resultArea = new sap.ui.ux3.ExactArea(this.getId()+"-resultArea");
	this.addAggregation("controls", this._resultArea);

	this._resultText = new sap.ui.commons.TextView(this.getId()+"-resultAreaTitle", {design: sap.ui.commons.TextViewDesign.Bold});
	this._resultText.addStyleClass("sapUiUx3ExactViewTitle");
	this.addAggregation("controls", this._resultText);

	this._bDetailsVisible = false;
};


//*** Overridden API functions ***


sap.ui.ux3.Exact.prototype.getSettingsMenu = function() {
	return this._browser.getOptionsMenu();
};


sap.ui.ux3.Exact.prototype.setSettingsMenu = function(oSettingsMenu) {
	this._browser.setOptionsMenu(oSettingsMenu);
	return this;
};


sap.ui.ux3.Exact.prototype.destroySettingsMenu = function() {
	this._browser.destroyOptionsMenu();
	return this;
};


sap.ui.ux3.Exact.prototype.getResultText = function() {
	return this._resultText.getText();
};


sap.ui.ux3.Exact.prototype.setResultText = function(sResultText) {
	this._resultText.setText(sResultText);
	return this;
};


sap.ui.ux3.Exact.prototype.getAttributes = function() {
	return this._browser.getAttributes();
};


sap.ui.ux3.Exact.prototype.insertAttribute = function(oAttribute, iIndex) {
	this._browser.insertAttribute(oAttribute, iIndex);
	return this;
};


sap.ui.ux3.Exact.prototype.addAttribute = function(oAttribute) {
	this._browser.addAttribute(oAttribute);
	return this;
};


sap.ui.ux3.Exact.prototype.removeAttribute = function(vElement) {
	return this._browser.removeAttribute(vElement);
};


sap.ui.ux3.Exact.prototype.removeAllAttributes = function() {
	return this._browser.removeAllAttributes();
};


sap.ui.ux3.Exact.prototype.indexOfAttribute = function(oAttribute) {
	return this._browser.indexOfAttribute(oAttribute);
};


sap.ui.ux3.Exact.prototype.destroyAttributes = function() {
	this._browser.destroyAttributes();
	return this;
};


sap.ui.ux3.Exact.prototype.getResultArea = function() {
	return this._resultArea;
};

sap.ui.ux3.Exact.prototype.getSearchField = function() {
	return this._search_input;
};


//*** Behavior functions ***





//*** Private helper functions ***


//Handles the search event
var _handleSearch = function(oThis, oEvent){
	oThis._sSearchQuery = oEvent.getParameter("query"); //Store the value until next Search
	oThis.fireSearch({query: oThis._sSearchQuery});
	oThis._bDetailsVisible = true;
	oThis.invalidate();
};


//Handles attribute selections
var _handleAttributeSelected = function(oThis, oEvent){
	oThis.fireRefineSearch({
		query: oThis._sSearchQuery,
		changedAttribute: oEvent.getParameter("attribute"),
		allSelectedAttributes: oEvent.getParameter("allAttributes")
	});
};


}());