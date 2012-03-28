/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ThingInspector.
jQuery.sap.declare("sap.ui.ux3.ThingInspector");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.ux3.Overlay");

/**
 * Constructor for a new ThingInspector.
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
 * <li>firstTitle : string</li>
 * <li>type : string</li>
 * <li>icon : string</li>
 * <li>secondTitle : string</li>
 * <li>followState : sap.ui.ux3.FollowActionState</li>
 * <li>flagState : boolean</li>
 * <li>favoriteState : boolean</li>
 * <li>favoriteActionEnabled : boolean</li>
 * <li>updateActionEnabled : boolean</li>
 * <li>followActionEnabled : boolean</li>
 * <li>flagActionEnabled : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>actions : sap.ui.ux3.ThingAction</li>
 * <li>headerContent : sap.ui.ux3.ThingGroup</li>
 * <li>facets : sap.ui.ux3.NavigationItem</li>
 * <li>facetContent : sap.ui.ux3.ThingGroup</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>selectedFacet : sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>actionSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>facetSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>feedSubmit : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.ux3.Overlay#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Thing Inspector
 * @extends sap.ui.ux3.Overlay
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.ThingInspector = function (sId, mSettings) {
	sap.ui.ux3.Overlay.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.ThingInspector.prototype = jQuery.sap.newObject(sap.ui.ux3.Overlay.prototype);

/*
 * Describe the sap.ui.ux3.ThingInspector. 
 * Resulting metadata can be obtained via sap.ui.ux3.ThingInspector.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.ThingInspector", {

  // ---- object ----
  baseType : "sap.ui.ux3.Overlay",
  publicMethods : [
    // properties 
    "getFirstTitle", "setFirstTitle", "getType", "setType", "getIcon", "setIcon", "getSecondTitle", "setSecondTitle", "getFollowState", "setFollowState", "getFlagState", "setFlagState", "getFavoriteState", "setFavoriteState", "getFavoriteActionEnabled", "setFavoriteActionEnabled", "getUpdateActionEnabled", "setUpdateActionEnabled", "getFollowActionEnabled", "setFollowActionEnabled", "getFlagActionEnabled", "setFlagActionEnabled", 
    // aggregations
    "getActions", "insertAction", "addAction", "removeAction", "removeAllActions", "indexOfAction", "destroyActions", "getHeaderContent", "insertHeaderContent", "addHeaderContent", "removeHeaderContent", "removeAllHeaderContent", "indexOfHeaderContent", "destroyHeaderContent", "getFacets", "insertFacet", "addFacet", "removeFacet", "removeAllFacets", "indexOfFacet", "destroyFacets", "getFacetContent", "insertFacetContent", "addFacetContent", "removeFacetContent", "removeAllFacetContent", "indexOfFacetContent", "destroyFacetContent", 
    // associations
    "getSelectedFacet", "setSelectedFacet", 
    // events
    "attachActionSelected", "detachActionSelected", "attachFacetSelected", "detachFacetSelected", "attachFeedSubmit", "detachFeedSubmit"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "firstTitle" : {name : "firstTitle", type : "string", group : "Misc", defaultValue : null},
    "type" : {name : "type", type : "string", group : "Misc", defaultValue : null},
    "icon" : {name : "icon", type : "string", group : "Misc", defaultValue : null},
    "secondTitle" : {name : "secondTitle", type : "string", group : "Misc", defaultValue : null},
    "followState" : {name : "followState", type : "sap.ui.ux3.FollowActionState", group : "Misc", defaultValue : sap.ui.ux3.FollowActionState.Default},
    "flagState" : {name : "flagState", type : "boolean", group : "Misc", defaultValue : false},
    "favoriteState" : {name : "favoriteState", type : "boolean", group : "Misc", defaultValue : false},
    "favoriteActionEnabled" : {name : "favoriteActionEnabled", type : "boolean", group : "Misc", defaultValue : true},
    "updateActionEnabled" : {name : "updateActionEnabled", type : "boolean", group : "Misc", defaultValue : true},
    "followActionEnabled" : {name : "followActionEnabled", type : "boolean", group : "Misc", defaultValue : true},
    "flagActionEnabled" : {name : "flagActionEnabled", type : "boolean", group : "Misc", defaultValue : true}
  },
  
  aggregations : {
    "actions" : {name : "actions", type : "sap.ui.ux3.ThingAction", multiple : true, singularName : "action"}, 
    "headerContent" : {name : "headerContent", type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "headerContent"}, 
    "facets" : {name : "facets", type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "facet"}, 
    "facetContent" : {name : "facetContent", type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "facetContent"}
  },
  associations : {
    "selectedFacet" : {name : "selectedFacet", type : "sap.ui.ux3.NavigationItem", multiple : false}
  },
  events : {
    "actionSelected" : "actionSelected", 
    "facetSelected" : "facetSelected", 
    "feedSubmit" : "feedSubmit"
  }

});	

sap.ui.ux3.ThingInspector.M_EVENTS = {'actionSelected':'actionSelected','facetSelected':'facetSelected','feedSubmit':'feedSubmit'};


/**
 * Getter for property <code>firstTitle</code>.
 * First Line of the Thing Inspector Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstTitle</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFirstTitle = function() {
	return this.getProperty("firstTitle");
};

/**
 * Setter for property <code>firstTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstTitle  new value for property <code>firstTitle</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setFirstTitle = function(sFirstTitle) {
	this.setProperty("firstTitle", sFirstTitle);
	return this;
};


/**
 * Getter for property <code>type</code>.
 * Thing type
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getType = function() {
	return this.getProperty("type");
};

/**
 * Setter for property <code>type</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setType = function(sType) {
	this.setProperty("type", sType);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * Thing Icon Url
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


/**
 * Getter for property <code>secondTitle</code>.
 * Second Line of the Thing Inspector Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>secondTitle</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getSecondTitle = function() {
	return this.getProperty("secondTitle");
};

/**
 * Setter for property <code>secondTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSecondTitle  new value for property <code>secondTitle</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setSecondTitle = function(sSecondTitle) {
	this.setProperty("secondTitle", sSecondTitle);
	return this;
};


/**
 * Getter for property <code>followState</code>.
 * Follow State of a Thing
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.ui.ux3.FollowActionState} the value of property <code>followState</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFollowState = function() {
	return this.getProperty("followState");
};

/**
 * Setter for property <code>followState</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.ux3.FollowActionState} oFollowState  new value for property <code>followState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setFollowState = function(oFollowState) {
	this.setProperty("followState", oFollowState);
	return this;
};


/**
 * Getter for property <code>flagState</code>.
 * State of Flag Action
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>flagState</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFlagState = function() {
	return this.getProperty("flagState");
};

/**
 * Setter for property <code>flagState</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFlagState  new value for property <code>flagState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setFlagState = function(bFlagState) {
	this.setProperty("flagState", bFlagState);
	return this;
};


/**
 * Getter for property <code>favoriteState</code>.
 * State Of favorite Action
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>favoriteState</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFavoriteState = function() {
	return this.getProperty("favoriteState");
};

/**
 * Setter for property <code>favoriteState</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFavoriteState  new value for property <code>favoriteState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setFavoriteState = function(bFavoriteState) {
	this.setProperty("favoriteState", bFavoriteState);
	return this;
};


/**
 * Getter for property <code>favoriteActionEnabled</code>.
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>favoriteActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFavoriteActionEnabled = function() {
	return this.getProperty("favoriteActionEnabled");
};

/**
 * Setter for property <code>favoriteActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFavoriteActionEnabled  new value for property <code>favoriteActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setFavoriteActionEnabled = function(bFavoriteActionEnabled) {
	this.setProperty("favoriteActionEnabled", bFavoriteActionEnabled);
	return this;
};


/**
 * Getter for property <code>updateActionEnabled</code>.
 * Update action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>updateActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getUpdateActionEnabled = function() {
	return this.getProperty("updateActionEnabled");
};

/**
 * Setter for property <code>updateActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bUpdateActionEnabled  new value for property <code>updateActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setUpdateActionEnabled = function(bUpdateActionEnabled) {
	this.setProperty("updateActionEnabled", bUpdateActionEnabled);
	return this;
};


/**
 * Getter for property <code>followActionEnabled</code>.
 * Follow action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>followActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFollowActionEnabled = function() {
	return this.getProperty("followActionEnabled");
};

/**
 * Setter for property <code>followActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFollowActionEnabled  new value for property <code>followActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setFollowActionEnabled = function(bFollowActionEnabled) {
	this.setProperty("followActionEnabled", bFollowActionEnabled);
	return this;
};


/**
 * Getter for property <code>flagActionEnabled</code>.
 * Flag action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>flagActionEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.ThingInspector.prototype.getFlagActionEnabled = function() {
	return this.getProperty("flagActionEnabled");
};

/**
 * Setter for property <code>flagActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFlagActionEnabled  new value for property <code>flagActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setFlagActionEnabled = function(bFlagActionEnabled) {
	this.setProperty("flagActionEnabled", bFlagActionEnabled);
	return this;
};

	
/**
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of a Thing
 * 
 * @return {sap.ui.ux3.ThingAction[]}
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.getActions = function() {
	return this.getAggregation("actions", []);
};


/**
 * Inserts a action into the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingAction}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.insertAction = function(oAction, iIndex) {
	this.insertAggregation("actions", oAction, iIndex);
	return this;
};

/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ThingInspector.prototype.addAction = function(oAction) {
	this.addAggregation("actions", oAction);
	return this;
};

/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingAction} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingAction} the removed action or null
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.removeAction = function(vAction) {
	return this.removeAggregation("actions", vAction);
};

/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingAction[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.removeAllActions = function() {
	return this.removeAllAggregation("actions");
};

/**
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.indexOfAction = function(oAction) {
	return this.indexOfAggregation("actions", oAction);
};
	

/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.destroyActions = function() {
	this.destroyAggregation("actions");
	return this;
};

	
/**
 * Getter for aggregation <code>headerContent</code>.<br/>
 * ThingGroups for the header content
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.getHeaderContent = function() {
	return this.getAggregation("headerContent", []);
};


/**
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.insertHeaderContent = function(oHeaderContent, iIndex) {
	this.insertAggregation("headerContent", oHeaderContent, iIndex);
	return this;
};

/**
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ThingInspector.prototype.addHeaderContent = function(oHeaderContent) {
	this.addAggregation("headerContent", oHeaderContent);
	return this;
};

/**
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed headerContent or null
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.removeHeaderContent = function(vHeaderContent) {
	return this.removeAggregation("headerContent", vHeaderContent);
};

/**
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.removeAllHeaderContent = function() {
	return this.removeAllAggregation("headerContent");
};

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.indexOfHeaderContent = function(oHeaderContent) {
	return this.indexOfAggregation("headerContent", oHeaderContent);
};
	

/**
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.destroyHeaderContent = function() {
	this.destroyAggregation("headerContent");
	return this;
};

	
/**
 * Getter for aggregation <code>facets</code>.<br/>
 * Thing Inspector facets
 * 
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.getFacets = function() {
	return this.getAggregation("facets", []);
};


/**
 * Inserts a facet into the aggregation named <code>facets</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *          oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facet should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facet is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.insertFacet = function(oFacet, iIndex) {
	this.insertAggregation("facets", oFacet, iIndex);
	return this;
};

/**
 * Adds some facet <code>oFacet</code> 
 * to the aggregation named <code>facets</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ThingInspector.prototype.addFacet = function(oFacet) {
	this.addAggregation("facets", oFacet);
	return this;
};

/**
 * Removes an facet from the aggregation named <code>facets</code>.
 *
 * @param {int | string | sap.ui.ux3.NavigationItem} vFacet the facet to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed facet or null
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.removeFacet = function(vFacet) {
	return this.removeAggregation("facets", vFacet);
};

/**
 * Removes all the controls in the aggregation named <code>facets</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.removeAllFacets = function() {
	return this.removeAllAggregation("facets");
};

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>facets</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.indexOfFacet = function(oFacet) {
	return this.indexOfAggregation("facets", oFacet);
};
	

/**
 * Destroys all the facets in the aggregation 
 * named <code>facets</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.destroyFacets = function() {
	this.destroyAggregation("facets");
	return this;
};

	
/**
 * Getter for aggregation <code>facetContent</code>.<br/>
 * ThingGroups for content of the selected facet
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.getFacetContent = function() {
	return this.getAggregation("facetContent", []);
};


/**
 * Inserts a facetContent into the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facetContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facetContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.insertFacetContent = function(oFacetContent, iIndex) {
	this.insertAggregation("facetContent", oFacetContent, iIndex);
	return this;
};

/**
 * Adds some facetContent <code>oFacetContent</code> 
 * to the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ThingInspector.prototype.addFacetContent = function(oFacetContent) {
	this.addAggregation("facetContent", oFacetContent);
	return this;
};

/**
 * Removes an facetContent from the aggregation named <code>facetContent</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vFacetContent the facetContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed facetContent or null
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.removeFacetContent = function(vFacetContent) {
	return this.removeAggregation("facetContent", vFacetContent);
};

/**
 * Removes all the controls in the aggregation named <code>facetContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.removeAllFacetContent = function() {
	return this.removeAllAggregation("facetContent");
};

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>facetContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.indexOfFacetContent = function(oFacetContent) {
	return this.indexOfAggregation("facetContent", oFacetContent);
};
	

/**
 * Destroys all the facetContent in the aggregation 
 * named <code>facetContent</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.destroyFacetContent = function() {
	this.destroyAggregation("facetContent");
	return this;
};


/**
 * The Facet that is currently selected.
 * 
 *
 * @return {string} Id of the element which is the current target of the <code>selectedFacet</code> association, or null
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.getSelectedFacet = function() {
	return this.getAssociation("selectedFacet", null);
};

/**
 * The Facet that is currently selected.
 * 
 *
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedFacet 
 *    Id of an element which becomes the new target of this <code>selectedFacet</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.setSelectedFacet = function(vSelectedFacet) {
	this.setAssociation("selectedFacet", vSelectedFacet);
	return this;
};


	
/**
 * Further thing related Action selected 
 *
 * @name sap.ui.ux3.ThingInspector#actionSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'actionSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 * Further thing related Action selected 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.attachActionSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("actionSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'actionSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.detachActionSelected = function(fnFunction, oListener) {
	this.detachEvent("actionSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event actionSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected ThingAction</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected ThingAction</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ThingInspector.prototype.fireActionSelected = function(mArguments) {
	this.fireEvent("actionSelected", mArguments);
	return this;
};


/**
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 *
 * @name sap.ui.ux3.ThingInspector#facetSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key Key of selected NavigationItem
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'facetSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.attachFacetSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("facetSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'facetSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.detachFacetSelected = function(fnFunction, oListener) {
	this.detachEvent("facetSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event facetSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected NavigationItem</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The selected NavigationItem</li>
 * <li>'key' of type <code>string</code> Key of selected NavigationItem</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ThingInspector.prototype.fireFacetSelected = function(mArguments) {
	this.fireEvent("facetSelected", mArguments);
	return this;
};


/**
 * Fired when a new feed entry is submitted. 
 *
 * @name sap.ui.ux3.ThingInspector#feedSubmit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 * Fired when a new feed entry is submitted. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.attachFeedSubmit = function(oData, fnFunction, oListener) {
	this.attachEvent("feedSubmit", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.detachFeedSubmit = function(fnFunction, oListener) {
	this.detachEvent("feedSubmit", fnFunction, oListener);
	return this;	
};

/**
 * Fire event feedSubmit to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Feed text</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ThingInspector.prototype.fireFeedSubmit = function(mArguments) {
	this.fireEvent("feedSubmit", mArguments);
	return this;
};


// Start of sap/ui/ux3/ThingInspector.js
jQuery.sap.require("sap.ui.ux3.Overlay");
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation"); 
/**
 * Initialization hook for the Thinginspector. It creates the instance of the
 * Popup helper service and does some basic configuration for it.
 * 
 * @private
 */
 
sap.ui.ux3.ThingInspector.prototype.init = function() {
	sap.ui.ux3.Overlay.prototype.init.apply(this);
	this._oNavBar = new sap.ui.ux3.NavigationBar();
	// attach NavBar selection
	var that = this;
	this._oNavBar.attachSelect(function(oControlEvent) {
		var item = oControlEvent.getParameters().item;
		that.setSelectedFacet(item);
		that.fireFacetSelected({
			id : item.getId(),
			key : item.getKey(),
			item : item
		});
	});
	// Initialize the ItemNavigation if required
	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.addDelegate(this._oItemNavigation);
	}
	this._prepareGenericActions();
	this._prepareActionMenus();
	this._prepareUpdateActionPopup();
	this._CollectionVisible = false;
};

/*
 * Set size of TI after rendering: If running in Shell we sync with shell
 * canvas. The size will then be set by the shell.
 */
sap.ui.ux3.ThingInspector.prototype.onAfterRendering = function() {
	var oShell = jQuery(".sapUiUx3Shell").control();
	if (oShell.length) {
		oShell[0].syncWithCanvasSize(this.getDomRef());
	} else {
		// set to fullscreen
		jQuery.sap.byId(this.getId()).css("bottom", "0px").css("top", "0px").css("left", "0px").css("right", "0px");
		// hide border and open/close button
		jQuery(".sapUiUx3TIContent").css("bottom", "0px").css("top", "0px").css("left", "0px").css("right", "0px");
		this.setOpenButtonVisible(false);
		this.setCloseButtonVisible(false);
	}
	jQuery.sap.byId(this.getId()).css("position", "fixed");
	// this._resize = false;

	this._setItemNavigation();
	// this._equalColumns();
	// register resize handler
	this._resize = false;
	this._resizeListenerId = sap.ui.core.ResizeHandler.register(jQuery(".sapUiUx3TIFacetContent")[0], jQuery.proxy(this.onresize, this));
	// initial resize handling
	this.onresize();
};

/**
 * Resize handler listening to the facet content area. If the area will be
 * resized and the blocks will be rearranged to one column the width will be set
 * to 100%. After resize to a width greater than two times the minimum width of
 * a single block the size will be set back to 50%
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype.onresize = function(oEvent) {
	/*
	 * if (!this._triggerValue) { return; }
	 */

	var width;
	if (oEvent) {
		width = jQuery(oEvent.target).width();
	}
	if (!width) {
		width = jQuery(jQuery(".sapUiUx3TIFacetContent")[0]).width();
	}
	if (width < this._triggerValue && this._resize == false) {
		var facetGroups = jQuery(".sapUiUx3TIFacetThingGroup");
		for ( var i = 0; i < facetGroups.length; i++) {
			jQuery(facetGroups[i]).animate({
				width : "100%"
			}, "fast");
		}
		this._resize = true;
	} else if (width > this._triggerValue && this._resize == true) {
		var facetGroups = jQuery(".sapUiUx3TIFacetThingGroup");
		for ( var i = 0; i < facetGroups.length; i++) {
			jQuery(facetGroups[i]).animate({
				width : "50%"
			}, "fast");
		}
		this._resize = false;
	}
	/*var scrollContainer = jQuery(".sapUiUx3TIContentScrollContainer");
	var headerColumn = jQuery(".sapUiUx3TIHeader");
	var facetsColumn = jQuery(".sapUiUx3TIFacets");
	if (this._hasScrollbar(scrollContainer)) {
		facetsColumn.height(scrollContainer.get(0).scrollHeight);
		headerColumn.height(scrollContainer.get(0).scrollHeight);
	} else {
		headerColumn.css("bottom", "0px");
		facetsColumn.css("bottom", "0px");
		facetsColumn.height("auto");
		headerColumn.height("auto");
	}*/
};

sap.ui.ux3.ThingInspector.prototype.onclick = function(oEvent) {
	if (oEvent.target.id === this.getId() + '-toggle-collection') {
		if (!this._CollectionVisible) {
			var TIContent = jQuery(".sapUiUx3TIContent");
			jQuery(TIContent[0]).animate({
				left : "229px"
			}, "200");
			jQuery.sap.byId(this.getId() + '-toggle-collection').text('>>');
			this._CollectionVisible = true;
		} else {
			var TIContent = jQuery(".sapUiUx3TIContent");
			jQuery(TIContent[0]).animate({
				left : "29px"
			}, "200");
			jQuery.sap.byId(this.getId() + '-toggle-collection').text('<<');
			this._CollectionVisible = false;
		}
	} else {
		sap.ui.ux3.Overlay.prototype.onclick.apply(this,arguments);
	}
};

sap.ui.ux3.ThingInspector.prototype._hasScrollbar = function(oElem) {
	return (oElem.get(0).scrollHeight > oElem.height());
};

/**
 * Override Popup Events
 * 
 * @private
 */
/*
 * sap.ui.ux3.ThingInspector.prototype._overridePopupEventing = function() { var
 * that = this; // don't bring Thing Inspector to the front on mouse down.
 * Existing // Toolpopups should allways be in front this._oPopup.onmousedown =
 * function(oEvent) { return; } }
 */
/**
 * Destroys this instance of ThingInspector, called by Element#destroy()
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype.exit = function() {
	this.close();
	this.destroyAggregation("_genericActions");
	this._oNavBar.destroy();
	this._oNavBar = null;
	this._oUpdatePopup.destroy();
	this._oUpdatePopup = null;
	this._oMenu.destroy();
	this._oMenu = null;
};

/**
 * Opens this instance of ThingIspector
 * 
 * @public
 */
sap.ui.ux3.ThingInspector.prototype.open = function() {
	if (this.getDomRef()) {
		this.rerender();
	}
	sap.ui.ux3.Overlay.prototype.open.apply(this);
	this._selectDefault();
};

/**
 * get button aggregation for the actions
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._getActionButtons = function() {
	return this.getAggregation("_actionButtons", []);
};

/**
 * get Navigation Bar control
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._getNavBar = function() {
	return this._oNavBar;
};

/**
 * attach to select event of the aggregated thing actions
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._attachThingAction = function(oAction) {
	var that = this;
	var action = oAction;
	oAction.attachSelect(function(oControlEvent) {
		that._genericActionSelected(oControlEvent, action);
	});
};

/**
 * Handle selection of generic actions
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._genericActionSelected = function(oEvent, oAction) {
	var sId = oAction.getId();
	sId = sId.substr(sId.indexOf("-") + 1);

	if (oAction.getId() == this.getId() + "-follow") {
		if (this.getFollowState() == sap.ui.ux3.FollowActionState.Default) {
			this.setFollowState(sap.ui.ux3.FollowActionState.Follow);
			this._prepareActionMenus();
			this.fireActionSelected({
				id : sId,
				action : oAction
			});
		} else {
			var eDock = sap.ui.core.Popup.Dock;
			this._oMenu.open(false, oAction.getFocusDomRef(), eDock.BeginTop, eDock.BeginBottom, oAction.getDomRef());
		}
	} else if (oAction.getId() == this.getId() + "-favorite") {
		this._favoriteActionSelected(oEvent, sId);
	} else if (oAction.getId() == this.getId() + "-flag") {
		this._flagActionSelected(oEvent, sId);
	} else if (oAction.getId() == this.getId() + "-update") {
		this._updateActionSelected(oEvent, sId);
	} else {
		this.fireActionSelected({
			id : sId,
			action : oAction
		});
	}

};

/**
 * setDefault NavBar selection and fire SelectedItem Event
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._selectDefault = function() {
	var navBarItems = this._oNavBar.getItems();
	if (navBarItems.length && !this._oNavBar.getSelectedItem()) {
		if (!this.getSelectedFacet()) {
			this.setSelectedFacet(navBarItems[0])
		}
		;
		var itemID = this._oNavBar.getSelectedItem();
		var item = sap.ui.getCore().byId(itemID);
		this.fireFacetSelected({
			id : item.getId(),
			key : item.getKey(),
			item : item
		});
	}
};

/**
 * create Generic Actions
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._prepareGenericActions = function() {
	/*
	 * instantiate generic actions and add them to an aggregation, for the
	 * action eventing
	 */
	this._oUpdateAction = new sap.ui.ux3.ThingAction({
		id : this.getId() + "-update"
	});
	this._oUpdateAction.setTooltip(this._getText("TI_UPDATE_ACTION_TOOLTIP"));
	this.addAggregation("_genericActions", this._oUpdateAction);
	this._attachThingAction(this._oUpdateAction);

	this._oFollowAction = new sap.ui.ux3.ThingAction({
		id : this.getId() + "-follow"
	});
	this._oFollowAction.setTooltip(this._getText("TI_FOLLOW_ACTION_TOOLTIP_FOLLOW"));
	this.addAggregation("_genericActions", this._oFollowAction);
	this._attachThingAction(this._oFollowAction);

	this._oFavoriteAction = new sap.ui.ux3.ThingAction({
		id : this.getId() + "-favorite"
	});
	this._oFavoriteAction.setTooltip(this._getText("TI_FAVORITE_ACTION_TOOLTIP"));
	this.addAggregation("_genericActions", this._oFavoriteAction);
	this._attachThingAction(this._oFavoriteAction);

	this._oFlagAction = new sap.ui.ux3.ThingAction({
		id : this.getId() + "-flag"
	});
	this._oFlagAction.setTooltip(this._getText("TI_FLAG_ACTION_TOOLTIP"));
	this.addAggregation("_genericActions", this._oFlagAction);
	this._attachThingAction(this._oFlagAction);
};

/**
 * prepare Menus for Follow action
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._prepareActionMenus = function() {
	var imagePath = sap.ui.resource("sap.ui.ux3", "themes/" + sap.ui.getCore().getConfiguration().getTheme());

	if (!this._oUnFollowItem) {
		this._oUnFollowItem = new sap.ui.commons.MenuItem({
			id : this.getId() + "-unfollowState",
			text : this._getText("TI_FOLLOW_ACTION_MENU_TXT_UNFOLLOW"),
			icon : imagePath + "/img/menu_unlisten.png"
		});
	}
	if (!this._oHoldItem) {
		this._oHoldItem = new sap.ui.commons.MenuItem({
			id : this.getId() + "-holdState",
			text : this._getText("TI_FOLLOW_ACTION_MENU_TXT_HOLD"),
			icon : imagePath + "/img/menu_hold.png"
		});
	}
	if (!this._oUnHoldItem) {
		this._oUnHoldItem = new sap.ui.commons.MenuItem({
			id : this.getId() + "-unholdState",
			text : this._getText("TI_FOLLOW_ACTION_MENU_TXT_UNHOLD"),
			icon : imagePath + "/img/menu_hold.png"
		});
	}
	if (!this._oMenu) {
		this._oMenu = new sap.ui.commons.Menu({
			id : this.getId() + "-followActionMenu"
		});
		var that = this;
		this._oMenu.attachItemSelect(function(oControlEvent) {
			that._followMenuSelected(oControlEvent);
		});
		this._oMenu.addItem(this._oHoldItem);
		this._oMenu.addItem(this._oUnHoldItem);
		this._oMenu.addItem(this._oUnFollowItem);
	}
	if (this.getFollowState() == sap.ui.ux3.FollowActionState.Default) {
		this._oFollowAction.setTooltip(this._getText("TI_FOLLOW_ACTION_TOOLTIP_FOLLOW"));
		this._oHoldItem.setVisible(false);
		this._oUnFollowItem.setVisible(false);
		this._oUnHoldItem.setVisible(false);
	} else if (this.getFollowState() == sap.ui.ux3.FollowActionState.Follow) {
		this._oFollowAction.setTooltip(this._getText("TI_FOLLOW_ACTION_TOOLTIP_STOPPAUSE_FOLLOW"));
		this._oHoldItem.setVisible(true);
		this._oUnFollowItem.setVisible(true);
		this._oUnHoldItem.setVisible(false);
	} else if (this.getFollowState() == sap.ui.ux3.FollowActionState.Hold) {
		this._oFollowAction.setTooltip(this._getText("TI_FOLLOW_ACTION_TOOLTIP_STOPCONTINUE_FOLLOW"));
		this._oHoldItem.setVisible(false);
		this._oUnFollowItem.setVisible(true);
		this._oUnHoldItem.setVisible(true);
	}
	this._rerenderGenericThingActions();
};

/**
 * equal Columns
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._equalColumns = function() {
	var headerColumn = jQuery(".sapUiUx3TIHeader");
	var facetsColumn = jQuery(".sapUiUx3TIFacets");
	var scrollContainer = jQuery(".sapUiUx3TIContentScrollContainer");
	// if (headerColumn.height() > facetsColumn.height()) {
	facetsColumn.height(scrollContainer.get(0).scrollHeight);
	// } else {
	headerColumn.height(scrollContainer.get(0).scrollHeight);
	// }
};

/**
 * Get Menu for generic Follow Action
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._getFollowActionMenu = function() {
	return this._oMenu;
};

/**
 * Follow Action Menu Eventhandler
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._followMenuSelected = function(oEvent) {
	if (oEvent.getParameters().item.getId() == this.getId() + "-followState") {
		this.setFollowState(sap.ui.ux3.FollowActionState.Follow);
	} else if (oEvent.getParameters().item.getId() == this.getId() + "-unfollowState") {
		this.setFollowState(sap.ui.ux3.FollowActionState.Default);
	} else if (oEvent.getParameters().item.getId() == this.getId() + "-holdState") {
		this.setFollowState(sap.ui.ux3.FollowActionState.Hold);
	} else if (oEvent.getParameters().item.getId() == this.getId() + "-unholdState") {
		this.setFollowState(sap.ui.ux3.FollowActionState.Follow);
	}
	this._prepareActionMenus();
	var sId = this._oFollowAction.getId();
	sId = sId.substr(sId.indexOf("-") + 1);
	this.fireActionSelected({
		id : sId,
		action : this._oFollowAction
	});
};

/**
 * Handle Flag Action selection
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._flagActionSelected = function(oEvent, sId) {
	if (this.getFlagState() == true) {
		this.setFlagState(false);
	} else {
		this.setFlagState(true);
	}
	this.fireActionSelected({
		id : sId,
		action : this._oFlagAction
	});
};

/**
 * Handle Favorite Action selection
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._favoriteActionSelected = function(oEvent, sId) {
	if (this.getFavoriteState() == true) {
		this.setFavoriteState(false);
	} else {
		this.setFavoriteState(true);
	}
	this.fireActionSelected({
		id : sId,
		action : this._oFavoriteAction
	});
};

/**
 * Handle Update Action selection
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._updateActionSelected = function(oEvent) {
	if (this._oUpdatePopup.isOpen()) {
		this._oUpdatePopup.close()
	} else {
		this._oUpdatePopup.setPosition(sap.ui.core.Popup.Dock.BeginBottom, sap.ui.core.Popup.Dock.BeginTop, oEvent.getSource().getDomRef(), "-8 -13", "none");
		this._oUpdatePopup.open();
	}
};

/**
 * Handle Update Action selection
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._prepareUpdateActionPopup = function(oEvent) {
	this._oUpdatePopup = new sap.ui.ux3.ToolPopup({
		id : this.getId() + "-UpdateActionPopup"
	}).addStyleClass("sapUiUx3TIUpdatePopup");
	var that = this;
	var f = new sap.ui.ux3.feed.Feeder({
		mode : sap.ui.ux3.feed.FeederMode.FeederComment,
		submitPress : function(oEvent) {
			var text = oEvent.getParameter("content");
			that.fireFeedSubmit({
				text : text
			});
			f.setText("");
			that._oUpdatePopup.close();
		}
	});
	/*
	 * this._oCommentPopup.attachOpen(function() { // TODO: does not work...
	 * window.setTimeout(function(){f.focus();},100); });
	 * this._oCommentPopup.attachClose(function() { // maybe the text should
	 * stay when closing f.setText(""); });
	 */
	this._icon = new sap.ui.commons.Image({
		id : this.getId() + "-updateIcon",
		src : this.getId(),
		height : "48px",
		width : "48px"
	});
	this._oUpdatePopup.addContent(this._icon).addContent(f);
};

/**
 * Rerender Header Content
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._rerenderHeaderContent = function() {
	var $content = jQuery.sap.byId(this.getId() + "-headerContent");
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ThingInspectorRenderer.renderHeaderContent(rm, this);
		rm.flush($content[0]);
		rm.destroy();
	}
};

/**
 * Rerender ThingActions
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._rerenderGenericThingActions = function() {
	var content = jQuery.sap.byId(this.getId() + "-genericThingActions");
	if (content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ThingInspectorRenderer.renderGenericActions(rm, this);
		rm.flush(content[0]);
		rm.destroy();
	}
};

/**
 * Rerender Facet Content
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._rerenderFacetContent = function() {
	var $content = jQuery.sap.byId(this.getId() + "-facetContent");
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ThingInspectorRenderer.renderFacetContent(rm, this);
		rm.flush($content[0]);
		rm.destroy();
		// get triggerValue for facet content resize handler
		var facetGroups = jQuery(".sapUiUx3TIFacetThingGroup");
		var minWidth = jQuery(facetGroups[0]).css("min-width");
		this._triggerValue = parseInt(minWidth, 10) * 2;
	}
};

/**
 * Update ThingAction Button
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._updateThingActionButton = function(oThingAction) {
	var aButtons = this.getAggregation("_actionButtons");
	if (!aButtons) {
		return;
	}
	for (var i = 0; i < aButtons.length ; i++) {
		if (aButtons[i].getId() == (this.getId() + "-" + oThingAction.getId() + "Button")) {
			aButtons[i].setText(oThingAction.getText());
			aButtons[i].setEnabled(oThingAction.getEnabled());
			break;
		}
	}
};

/**
 * Rerender Thing Actions
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._rerenderThingActions = function() {
	var content = jQuery.sap.byId(this.getId() + "-thingActions");
	if (content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.ux3.ThingInspectorRenderer.renderThingActions(rm, this);
		rm.flush(content[0]);
		rm.destroy();
	}
};

/**
 * Add Thing Actions ti ItemNavigation
 * 
 * @private
 */
sap.ui.ux3.ThingInspector.prototype._setItemNavigation = function() {

	if (this.getDomRef()) {
		this._oItemNavigation.setRootDomRef(jQuery(this.getDomRef()).find(".sapUiUx3TIToolbar").get(0));
		// only if already rendered, otherwise not DOM elements exists
		var aItemDomRefs = [];
		var oActions = this.getAggregation("_genericActions", []);
		for ( var i = 0; i < oActions.length; i++) {
			aItemDomRefs.push(oActions[i].getDomRef());
		}
		oActions = this.getAggregation("_actionButtons", []);
		for ( var i = 0; i < oActions.length; i++) {
			aItemDomRefs.push(oActions[i].getDomRef());
		}
		this._oItemNavigation.setItemDomRefs(aItemDomRefs);
	}
};

/* Redefinition of generated API methods */

// Implementation of API method insertAction
sap.ui.ux3.ThingInspector.prototype.insertAction = function(oAction, iIndex) {

	this.insertAggregation("actions", oAction, iIndex, true);
	var oButton = new sap.ui.commons.Button({
		id : this.getId() + "-" + oAction.getId() + "Button",
		text : oAction.getText(),
		enabled : oAction.getEnabled()
	});
	var that = this;
	var action = oAction;
	oButton.attachPress(function(oControlEvent) {
		var itemId = oControlEvent.getSource().getId();
		var actionId = itemId.substr((itemId.indexOf("-") + 1));
		that.fireActionSelected({
			id : actionId,
			action : oAction
		});
	});
	this.addAggregation("_actionButtons", oButton, iIndex, true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return this;
};

// Implementation of API method addAction
sap.ui.ux3.ThingInspector.prototype.addAction = function(oAction) {

	this.addAggregation("actions", oAction, true);

	var oButton = new sap.ui.commons.Button({
		id : this.getId() + "-" + oAction.getId() + "Button",
		text : oAction.getText(),
		enabled : oAction.getEnabled()
	});
	var that = this;
	var action = oAction;
	oButton.attachPress(function(oControlEvent) {
		var itemId = oControlEvent.getSource().getId();
		var actionId = itemId.substr((itemId.indexOf("-") + 1));
		actionId = actionId.substr(0, actionId.indexOf("Button"));
		that.fireActionSelected({
			id : actionId,
			action : oAction
		});
	});
	this.addAggregation("_actionButtons", oButton, true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return this;
};

// Implementation of API method removeAction
sap.ui.ux3.ThingInspector.prototype.removeAction = function(vElement) {
	this.removeAggregation("_actionButtons", vElement, true);
	var result = this.removeAggregation("actions", vElement, true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return result;
};

// Implementation of API method removeAllActions
sap.ui.ux3.ThingInspector.prototype.removeAllActions = function() {
	this.destroyAggregation("_actionButtons", true);
	var result = this.removeAllAggregation("actions", true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return result;
};

// Implementation of API method destroyActions
sap.ui.ux3.ThingInspector.prototype.destroyActions = function() {
	this.destroyAggregation("_actionButtons", true);
	this.destroyAggregation("actions", true);
	this._rerenderThingActions();
	this._setItemNavigation();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.getFacets = function() {
	return this._oNavBar.getItems();
};

// Implementation of API method insertFacet
sap.ui.ux3.ThingInspector.prototype.insertFacet = function(oFacet, iIndex) {
	this._oNavBar.insertItem(oFacet, iIndex);
	return this;
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.addFacet = function(oFacet) {
	this._oNavBar.addItem(oFacet);
	return this;
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeFacet = function(vElement) {
	return this._oNavBar.removeItem(vElement);
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeAllFacets = function() {
	return this._oNavBar.removeAllItems();
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.destroyFacets = function() {
	this._oNavBar.destroyItems();
	return this;
};

// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setFollowState = function(oFollowState) {
	// set icon according to state
	var folloActionElem = jQuery.sap.byId(this.getId() + "-follow");
	folloActionElem.removeClass(this.getFollowState()).addClass(oFollowState);
	if (oFollowState == sap.ui.ux3.FollowActionState.Default) {
		folloActionElem.attr("aria-haspopup", "false");
	} else {
		folloActionElem.attr("aria-haspopup", "true");
	}
	// supress rerendering of TI
	this.setProperty("followState", oFollowState, true);
	this._prepareActionMenus();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setFlagState = function(oFlagState) {
	// set icon according to state
	jQuery.sap.byId(this.getId() + "-flag").toggleClass("Selected", oFlagState);
	// supress rerendering of TI
	this.setProperty("flagState", oFlagState, true);
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setFavoriteState = function(oFavoriteState) {
	// set icon according to state
	jQuery.sap.byId(this.getId() + "-favorite").toggleClass("Selected", oFavoriteState);
	// supress rerendering of TI
	this.setProperty("favoriteState", oFavoriteState, true);
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setIcon = function(oIcon) {
	this.setProperty("icon", oIcon);
	this._icon.setSrc(oIcon);
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.insertFacetContent = function(oFacetContent, iIndex) {
	this.insertAggregation("facetContent", oFacetContent, iIndex, true);
	this._Content();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.addFacetContent = function(oFacetContent) {
	this.addAggregation("facetContent", oFacetContent, true);
	this._rerenderFacetContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeFacetContent = function(vFacetContent) {
	var result = this.removeAggregation("facetContent", vFacetContent, true);
	this._rerenderFacetContent();
	return result;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeAllFacetContent = function() {
	var result = this.removeAllAggregation("facetContent", true);
	this._rerenderFacetContent();
	return result;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.destroyFacetContent = function() {
	this.destroyAggregation("facetContent", true);
	this._rerenderFacetContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.insertHeaderContent = function(oHeaderContent, iIndex) {
	this.insertAggregation("headerContent", oHeaderContent, iIndex, true);
	this._rerenderHeaderContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.addHeaderContent = function(oHeaderContent) {
	this.addAggregation("headerContent", oHeaderContent, true);
	this._rerenderHeaderContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeHeaderContent = function(vHeaderContent) {
	var result = this.removeAggregation("headerContent", vHeaderContent, true);
	this._rerenderHeaderContent();
	return result;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.removeAllHeaderContent = function() {
	var result = this.removeAllAggregation("headerContent", true);
	this._rerenderHeaderContent();
	return result;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.destroyHeaderContent = function() {
	this.destroyAggregation("headerContent", true);
	this._rerenderHeaderContent();
	return this;
};
// Implementation of API method
sap.ui.ux3.ThingInspector.prototype.setSelectedFacet = function(selectedFacet) {
	var oldSelectedFacet = this.getSelectedFacet();
	this.setAssociation("selectedFacet", selectedFacet, true);
	var newSelectedFacet = this.getSelectedFacet();

	if (oldSelectedFacet != newSelectedFacet) {
		this._oNavBar.setSelectedItem(newSelectedFacet);
	}
};
sap.ui.ux3.ThingInspector.prototype.invalidate = function(oOrigin) {
	if (oOrigin instanceof sap.ui.ux3.ThingAction) {
		this._updateThingActionButton(oOrigin);
		this._rerenderGenericThingActions();
	} else {
		sap.ui.core.Control.prototype.invalidate.apply(this,arguments);
	}
};
