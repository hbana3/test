/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.feed.FeedComponent.
jQuery.sap.declare("sap.ui.ux3.feed.FeedComponent");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new feed/FeedComponent.
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
 * <li>refreshIntervals : int[]</li>
 * <li>filterValue : string</li>
 * <li>refreshIntervalValue : int</li>
 * <li>searchValue : string</li>
 * <li>maxVisibleFeeds : int</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>avatarSrc : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>feedEntries : sap.ui.ux3.feed.FeedEntry</li>
 * <li>customActions : sap.ui.commons.MenuItem</li>
 * <li>customFilters : sap.ui.core.Item</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>feed : sap.ui.commons.RowRepeater</li>
 * <li>feeder : sap.ui.ux3.feed.Feeder</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>searchTrigger : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>filter : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>refreshIntervalChange : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>action : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Feed and FeedEntries Container.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.1.1. 
 * new Feed control: sap.ui.ux3.Feed
 */
sap.ui.ux3.feed.FeedComponent = function (sId, mSettings) {
	jQuery.sap.log.warning("Using deprecated control 'feed/FeedComponent'.");
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.feed.FeedComponent.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.feed.FeedComponent. 
 * Resulting metadata can be obtained via sap.ui.ux3.feed.FeedComponent.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.feed.FeedComponent", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getRefreshIntervals", "setRefreshIntervals", "getFilterValue", "setFilterValue", "getRefreshIntervalValue", "setRefreshIntervalValue", "getSearchValue", "setSearchValue", "getMaxVisibleFeeds", "setMaxVisibleFeeds", "getWidth", "setWidth", "getAvatarSrc", "setAvatarSrc", 
    // aggregations
    "getFeedEntries", "insertFeedEntry", "addFeedEntry", "removeFeedEntry", "removeAllFeedEntries", "indexOfFeedEntry", "destroyFeedEntries", "bindFeedEntries", "unbindFeedEntries", "getCustomActions", "insertCustomAction", "addCustomAction", "removeCustomAction", "removeAllCustomActions", "indexOfCustomAction", "destroyCustomActions", "getCustomFilters", "insertCustomFilter", "addCustomFilter", "removeCustomFilter", "removeAllCustomFilters", "indexOfCustomFilter", "destroyCustomFilters", 
    // associations
    "getFeed", "setFeed", "getFeeder", "setFeeder", 
    // events
    "attachSearchTrigger", "detachSearchTrigger", "attachFilter", "detachFilter", "attachRefreshIntervalChange", "detachRefreshIntervalChange", "attachAction", "detachAction"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "refreshIntervals" : {name : "refreshIntervals", type : "int[]", group : "Misc", defaultValue : null},
    "filterValue" : {name : "filterValue", type : "string", group : "Misc", defaultValue : null},
    "refreshIntervalValue" : {name : "refreshIntervalValue", type : "int", group : "Misc", defaultValue : 0},
    "searchValue" : {name : "searchValue", type : "string", group : "Misc", defaultValue : null},
    "maxVisibleFeeds" : {name : "maxVisibleFeeds", type : "int", group : "Misc", defaultValue : 3},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
    "avatarSrc" : {name : "avatarSrc", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {
    "feedEntries" : {name : "feedEntries", type : "sap.ui.ux3.feed.FeedEntry", multiple : true, singularName : "feedEntry"}, 
    "customActions" : {name : "customActions", type : "sap.ui.commons.MenuItem", multiple : true, singularName : "customAction"}, 
    "customFilters" : {name : "customFilters", type : "sap.ui.core.Item", multiple : true, singularName : "customFilter"}
  },
  associations : {
    "feed" : {name : "feed", type : "sap.ui.commons.RowRepeater", multiple : false}, 
    "feeder" : {name : "feeder", type : "sap.ui.ux3.feed.Feeder", multiple : false}
  },
  events : {
    "searchTrigger" : "searchTrigger", 
    "filter" : "filter", 
    "refreshIntervalChange" : "refreshIntervalChange", 
    "action" : "action"
  }

});	

sap.ui.ux3.feed.FeedComponent.M_EVENTS = {'searchTrigger':'searchTrigger','filter':'filter','refreshIntervalChange':'refreshIntervalChange','action':'action'};


/**
 * Getter for property <code>refreshIntervals</code>.
 * Custom intervals, in seconds, not including:
 * - "0" as "Live"
 * - "-1" as "Pause"
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int[]} the value of property <code>refreshIntervals</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedComponent.prototype.getRefreshIntervals = function() {
	return this.getProperty("refreshIntervals");
};

/**
 * Setter for property <code>refreshIntervals</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int[]} aRefreshIntervals  new value for property <code>refreshIntervals</code>
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setRefreshIntervals = function(aRefreshIntervals) {
	this.setProperty("refreshIntervals", aRefreshIntervals);
	return this;
};


/**
 * Getter for property <code>filterValue</code>.
 * Active filter string.
 * Defaults to "All", i.e. to not filtering.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedComponent.prototype.getFilterValue = function() {
	return this.getProperty("filterValue");
};

/**
 * Setter for property <code>filterValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterValue  new value for property <code>filterValue</code>
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setFilterValue = function(sFilterValue) {
	this.setProperty("filterValue", sFilterValue);
	return this;
};


/**
 * Getter for property <code>refreshIntervalValue</code>.
 * Selected refresh interval (in seconds).
 * "0" stands for "Live" feed.
 * "-1" stands for a "Pause" in the feed.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>refreshIntervalValue</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedComponent.prototype.getRefreshIntervalValue = function() {
	return this.getProperty("refreshIntervalValue");
};

/**
 * Setter for property <code>refreshIntervalValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iRefreshIntervalValue  new value for property <code>refreshIntervalValue</code>
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setRefreshIntervalValue = function(iRefreshIntervalValue) {
	this.setProperty("refreshIntervalValue", iRefreshIntervalValue);
	return this;
};


/**
 * Getter for property <code>searchValue</code>.
 * The search string.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>searchValue</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedComponent.prototype.getSearchValue = function() {
	return this.getProperty("searchValue");
};

/**
 * Setter for property <code>searchValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSearchValue  new value for property <code>searchValue</code>
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setSearchValue = function(sSearchValue) {
	this.setProperty("searchValue", sSearchValue);
	return this;
};


/**
 * Getter for property <code>maxVisibleFeeds</code>.
 * Maximum number of Feeds to be displayed at once.
 *
 * Default value is <code>3</code>
 *
 * @return {int} the value of property <code>maxVisibleFeeds</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedComponent.prototype.getMaxVisibleFeeds = function() {
	return this.getProperty("maxVisibleFeeds");
};

/**
 * Setter for property <code>maxVisibleFeeds</code>.
 *
 * Default value is <code>3</code> 
 *
 * @param {int} iMaxVisibleFeeds  new value for property <code>maxVisibleFeeds</code>
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setMaxVisibleFeeds = function(iMaxVisibleFeeds) {
	this.setProperty("maxVisibleFeeds", iMaxVisibleFeeds);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Control's width.
 * Typically:
 * - 100% to fit container
 * - <n>px to be of a fix width.
 * Defaults to "auto".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedComponent.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>avatarSrc</code>.
 * URL to user image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>avatarSrc</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedComponent.prototype.getAvatarSrc = function() {
	return this.getProperty("avatarSrc");
};

/**
 * Setter for property <code>avatarSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAvatarSrc  new value for property <code>avatarSrc</code>
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setAvatarSrc = function(sAvatarSrc) {
	this.setProperty("avatarSrc", sAvatarSrc);
	return this;
};

	
/**
 * Getter for aggregation <code>feedEntries</code>.<br/>
 * Entries.
 * 
 * @return {sap.ui.ux3.feed.FeedEntry[]}
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.getFeedEntries = function() {
	return this.getAggregation("feedEntries", []);
};


/**
 * Inserts a feedEntry into the aggregation named <code>feedEntries</code>.
 *
 * @param {sap.ui.ux3.feed.FeedEntry}
 *          oFeedEntry the feedEntry to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the feedEntry should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the feedEntry is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the feedEntry is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.insertFeedEntry = function(oFeedEntry, iIndex) {
	this.insertAggregation("feedEntries", oFeedEntry, iIndex);
	return this;
};

/**
 * Adds some feedEntry <code>oFeedEntry</code> 
 * to the aggregation named <code>feedEntries</code>.
 *
 * @param {sap.ui.ux3.feed.FeedEntry}
 *            oFeedEntry the feedEntry to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.feed.FeedComponent.prototype.addFeedEntry = function(oFeedEntry) {
	this.addAggregation("feedEntries", oFeedEntry);
	return this;
};

/**
 * Removes an feedEntry from the aggregation named <code>feedEntries</code>.
 *
 * @param {int | string | sap.ui.ux3.feed.FeedEntry} vFeedEntry the feedEntry to remove or its index or id
 * @return {sap.ui.ux3.feed.FeedEntry} the removed feedEntry or null
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.removeFeedEntry = function(vFeedEntry) {
	return this.removeAggregation("feedEntries", vFeedEntry);
};

/**
 * Removes all the controls in the aggregation named <code>feedEntries</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.feed.FeedEntry[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.removeAllFeedEntries = function() {
	return this.removeAllAggregation("feedEntries");
};

/**
 * Checks for the provided <code>sap.ui.ux3.feed.FeedEntry</code> in the aggregation named <code>feedEntries</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.feed.FeedEntry}
 *            oFeedEntry the feedEntry whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.indexOfFeedEntry = function(oFeedEntry) {
	return this.indexOfAggregation("feedEntries", oFeedEntry);
};
	

/**
 * Destroys all the feedEntries in the aggregation 
 * named <code>feedEntries</code>.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.destroyFeedEntries = function() {
	this.destroyAggregation("feedEntries");
	return this;
};


/**
 * Binder for aggregation <code>feedEntries</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.bindFeedEntries = function(sPath, oTemplate, oSorter, aFilters) {
	this.bindAggregation("feedEntries", sPath, oTemplate, oSorter, aFilters);
	return this;
};

/**
 * Unbinder for aggregation <code>feedEntries</code>.
 *
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.unbindFeedEntries = function() {
	this.unbindAggregation("feedEntries");
	return this;
};

	
/**
 * Getter for aggregation <code>customActions</code>.<br/>
 * Custom actions to add to Action Menu.
 * 
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.getCustomActions = function() {
	return this.getAggregation("customActions", []);
};


/**
 * Inserts a customAction into the aggregation named <code>customActions</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *          oCustomAction the customAction to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the customAction should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the customAction is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the customAction is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.insertCustomAction = function(oCustomAction, iIndex) {
	this.insertAggregation("customActions", oCustomAction, iIndex);
	return this;
};

/**
 * Adds some customAction <code>oCustomAction</code> 
 * to the aggregation named <code>customActions</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oCustomAction the customAction to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.feed.FeedComponent.prototype.addCustomAction = function(oCustomAction) {
	this.addAggregation("customActions", oCustomAction);
	return this;
};

/**
 * Removes an customAction from the aggregation named <code>customActions</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItem} vCustomAction the customAction to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed customAction or null
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.removeCustomAction = function(vCustomAction) {
	return this.removeAggregation("customActions", vCustomAction);
};

/**
 * Removes all the controls in the aggregation named <code>customActions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.removeAllCustomActions = function() {
	return this.removeAllAggregation("customActions");
};

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>customActions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oCustomAction the customAction whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.indexOfCustomAction = function(oCustomAction) {
	return this.indexOfAggregation("customActions", oCustomAction);
};
	

/**
 * Destroys all the customActions in the aggregation 
 * named <code>customActions</code>.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.destroyCustomActions = function() {
	this.destroyAggregation("customActions");
	return this;
};

	
/**
 * Getter for aggregation <code>customFilters</code>.<br/>
 * Custom filter entries.
 * 
 * @return {sap.ui.core.Item[]}
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.getCustomFilters = function() {
	return this.getAggregation("customFilters", []);
};


/**
 * Inserts a customFilter into the aggregation named <code>customFilters</code>.
 *
 * @param {sap.ui.core.Item}
 *          oCustomFilter the customFilter to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the customFilter should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the customFilter is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the customFilter is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.insertCustomFilter = function(oCustomFilter, iIndex) {
	this.insertAggregation("customFilters", oCustomFilter, iIndex);
	return this;
};

/**
 * Adds some customFilter <code>oCustomFilter</code> 
 * to the aggregation named <code>customFilters</code>.
 *
 * @param {sap.ui.core.Item}
 *            oCustomFilter the customFilter to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.feed.FeedComponent.prototype.addCustomFilter = function(oCustomFilter) {
	this.addAggregation("customFilters", oCustomFilter);
	return this;
};

/**
 * Removes an customFilter from the aggregation named <code>customFilters</code>.
 *
 * @param {int | string | sap.ui.core.Item} vCustomFilter the customFilter to remove or its index or id
 * @return {sap.ui.core.Item} the removed customFilter or null
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.removeCustomFilter = function(vCustomFilter) {
	return this.removeAggregation("customFilters", vCustomFilter);
};

/**
 * Removes all the controls in the aggregation named <code>customFilters</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.removeAllCustomFilters = function() {
	return this.removeAllAggregation("customFilters");
};

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>customFilters</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Item}
 *            oCustomFilter the customFilter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.indexOfCustomFilter = function(oCustomFilter) {
	return this.indexOfAggregation("customFilters", oCustomFilter);
};
	

/**
 * Destroys all the customFilters in the aggregation 
 * named <code>customFilters</code>.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.destroyCustomFilters = function() {
	this.destroyAggregation("customFilters");
	return this;
};


/**
 * The RowRepeater wrapping the Feed entries.
 *
 * @return {string} Id of the element which is the current target of the <code>feed</code> association, or null
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.getFeed = function() {
	return this.getAssociation("feed", null);
};

/**
 * The RowRepeater wrapping the Feed entries.
 *
 * @param {string | sap.ui.commons.RowRepeater} vFeed 
 *    Id of an element which becomes the new target of this <code>feed</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setFeed = function(vFeed) {
	this.setAssociation("feed", vFeed);
	return this;
};


	
/**
 * TheFeeder to allow to create feed entries.
 *
 * @return {string} Id of the element which is the current target of the <code>feeder</code> association, or null
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.getFeeder = function() {
	return this.getAssociation("feeder", null);
};

/**
 * TheFeeder to allow to create feed entries.
 *
 * @param {string | sap.ui.ux3.feed.Feeder} vFeeder 
 *    Id of an element which becomes the new target of this <code>feeder</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setFeeder = function(vFeeder) {
	this.setAssociation("feeder", vFeeder);
	return this;
};


	
/**
 * Raised when user triggers a search. 
 *
 * @name sap.ui.ux3.feed.FeedComponent#searchTrigger
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.searchString The search pattern.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'searchTrigger' event of this <code>sap.ui.ux3.feed.FeedComponent</code>.<br/>
 * Raised when user triggers a search. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.attachSearchTrigger = function(oData, fnFunction, oListener) {
	this.attachEvent("searchTrigger", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'searchTrigger' event of this <code>sap.ui.ux3.feed.FeedComponent</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.detachSearchTrigger = function(fnFunction, oListener) {
	this.detachEvent("searchTrigger", fnFunction, oListener);
	return this;	
};

/**
 * Fire event searchTrigger to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'searchString' of type <code>string</code> The search pattern.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.FeedComponent.prototype.fireSearchTrigger = function(mArguments) {
	this.fireEvent("searchTrigger", mArguments);
	return this;
};


/**
 * Raised when user changes the filter value. 
 *
 * @name sap.ui.ux3.feed.FeedComponent#filter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.filterValue The newly selected filter string.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'filter' event of this <code>sap.ui.ux3.feed.FeedComponent</code>.<br/>
 * Raised when user changes the filter value. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.attachFilter = function(oData, fnFunction, oListener) {
	this.attachEvent("filter", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'filter' event of this <code>sap.ui.ux3.feed.FeedComponent</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.detachFilter = function(fnFunction, oListener) {
	this.detachEvent("filter", fnFunction, oListener);
	return this;	
};

/**
 * Fire event filter to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'filterValue' of type <code>string</code> The newly selected filter string.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.FeedComponent.prototype.fireFilter = function(mArguments) {
	this.fireEvent("filter", mArguments);
	return this;
};


/**
 * Raised when user changes the refresh interval. 
 *
 * @name sap.ui.ux3.feed.FeedComponent#refreshIntervalChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.newInterval The newly selected interval value (in seconds).
"0" stands for "Live".
"-1" stands for "Pause".
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'refreshIntervalChange' event of this <code>sap.ui.ux3.feed.FeedComponent</code>.<br/>
 * Raised when user changes the refresh interval. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.attachRefreshIntervalChange = function(oData, fnFunction, oListener) {
	this.attachEvent("refreshIntervalChange", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'refreshIntervalChange' event of this <code>sap.ui.ux3.feed.FeedComponent</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.detachRefreshIntervalChange = function(fnFunction, oListener) {
	this.detachEvent("refreshIntervalChange", fnFunction, oListener);
	return this;	
};

/**
 * Fire event refreshIntervalChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newInterval' of type <code>int</code> The newly selected interval value (in seconds).
"0" stands for "Live".
"-1" stands for "Pause".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.FeedComponent.prototype.fireRefreshIntervalChange = function(mArguments) {
	this.fireEvent("refreshIntervalChange", mArguments);
	return this;
};


/**
 * Raised when user selects an action from the menu. 
 *
 * @name sap.ui.ux3.feed.FeedComponent#action
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.actionName The selected action name.
"Sources" and "Feed settings" are the two possible default actions.
More actions can be configured via the "customActions" aggregation.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'action' event of this <code>sap.ui.ux3.feed.FeedComponent</code>.<br/>
 * Raised when user selects an action from the menu. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.attachAction = function(oData, fnFunction, oListener) {
	this.attachEvent("action", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'action' event of this <code>sap.ui.ux3.feed.FeedComponent</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.detachAction = function(fnFunction, oListener) {
	this.detachEvent("action", fnFunction, oListener);
	return this;	
};

/**
 * Fire event action to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'actionName' of type <code>string</code> The selected action name.
"Sources" and "Feed settings" are the two possible default actions.
More actions can be configured via the "customActions" aggregation.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.FeedComponent} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.FeedComponent.prototype.fireAction = function(mArguments) {
	this.fireEvent("action", mArguments);
	return this;
};


// Start of sap/ui/ux3/feed/FeedComponent.js
jQuery.sap.require("sap.ui.ux3.feed.Feeder");
jQuery.sap.require("sap.ui.commons.ComboBox");
jQuery.sap.require("sap.ui.commons.MenuButton");
jQuery.sap.require("sap.ui.commons.RowRepeater");
jQuery.sap.require("sap.ui.core.ListItem");

/***************************************************
* CONSTANTS DECLARATION - CLASS ATTRIBUTES
****************************************************/
sap.ui.ux3.feed.FeedComponent.INTER_EVENT_TIMEOUT = 500; // 1 event max every "n" msec

/***************************************************
* STATIC ATTRIBUTES DECLARATION - CLASS ATTRIBUTES
****************************************************/
sap.ui.ux3.feed.FeedComponent.iNewEntryIndex = 0;

/**
 * This utility builds an "empty" FeedComponent.
 * Public attributes can be set onAfterRendering, for getters to stay synchronized.
 */
sap.ui.ux3.feed.FeedComponent.prototype.init = function(){
	// convenience variables
	var self = this;
	var id = this.getId();
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	var sIconPrefix = jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/feed/";

	// Feeder component:
	//this.oFeeder = new sap.ui.ux3.feed.Feeder("feeder",{submitPress : sap.ui.ux3.feed.FeedComponent.submitFeedEntry});
	this.oFeeder = new sap.ui.ux3.feed.Feeder(this.getId() + "-feeder");
	this.oFeeder.attachSubmitPress(null, sap.ui.ux3.feed.FeedComponent.submitFeedEntry, this);
	this.oFeeder.setParent(this);
	this.setFeeder(this.oFeeder.getId()); // For "this.getFeeder()" to return the Feeder ID.

	// IntervalControl component:
	this.oIntervals = new sap.ui.commons.ComboBox(
					 {change : sap.ui.ux3.feed.FeedComponent.forwardRefreshIntervalChangeEvent
					 });
	this.oIntervals.setParent(this);

	// ActionMenu component:
	var sActionIcon = sIconPrefix + "more_normal.png";
	this.oAction = new sap.ui.commons.MenuButton(
					   {icon         : sActionIcon
					   ,itemSelected : sap.ui.ux3.feed.FeedComponent.forwardActionEvent
					   });
	this.oAction.setParent(this);

	// Filter component:
	var defaultFilterValue = rb.getText("FEED_FILTER_ALL");
	this.oFilter = new sap.ui.commons.ComboBox(
					 {value  : defaultFilterValue
					 ,change : sap.ui.ux3.feed.FeedComponent.forwardFilterEvent
					 });
	this.oFilter.setParent(this);

	// SearchText component:
	this.oSearch = new sap.ui.commons.TextField();
	this.oSearch.setParent(this);
	// The whole idea behind the following searchHandler() is to limit the number of
	// "searchTrigger" events generated by this component.
	// This searchHandler() is bound onAfterRendering against onKeyUp oSearch events.
	this.lastSearch = new Date();
	this.lastSearchValue = "";
	this.searchTimer = null;
	this.searchHandler = function() {
		var d = new Date();
		if (d - self.lastSearch < sap.ui.ux3.feed.FeedComponent.INTER_EVENT_TIMEOUT) {
			// Handler recalled too soon within the throttle interval.
			// Our Search Event needs to be delayed.
			if (self.searchTimer) {
				window.clearTimeout(self.searchTimer);
			}
			self.searchTimer = window.setTimeout(self.searchHandler, sap.ui.ux3.feed.FeedComponent.INTER_EVENT_TIMEOUT);
			return false;
		}
		// It is timely OK to send a new Search Event:
		self.lastSearch = d;
		var oSearch = jQuery.sap.domById(self.oSearch.getId());
	  var newValue = oSearch.value;
	  if (newValue != self.lastSearchValue) {
		self.fireSearchTrigger({searchString:newValue});
		self.lastSearchValue = newValue;
	  }
	};

	// RowRepeater component:
	this.oFeed = new sap.ui.commons.RowRepeater(this.getId() + "-feedRepeater",{currentPage:1,design:sap.ui.commons.RowRepeaterDesign.Standard});
	this.oFeed.setParent(this);
	this.oFeed.setNumberOfRows(3);
	this.setFeed(this.oFeed.getId()); // For "this.getFeed()" to return the RowR ID.
};


/**
 * Setting public attributes, for getters to stay synchronized
 */
sap.ui.ux3.feed.FeedComponent.prototype.onAfterRendering = function(){
	// convenience variables
	var id = this.getId();
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

	// Feeder component:

	// IntervalControl component:
  var intervals = this.getRefreshIntervals();
  if (!intervals) {
	// No intervals provided. Using some default ones.
		var defaultIntervals = [0, 5, 15, 30, 60, 300, -1];
		this.setRefreshIntervals(defaultIntervals);
  }
  var selectedInterval = this.getRefreshIntervalValue();
  if (!selectedInterval) {
	// No selection provided. Defaulting to the first entry.
	intervals = this.getRefreshIntervals();
	if (intervals.length >= 1) {
	  this.setRefreshIntervalValue(intervals[0]);
	}
  }

	// ActionMenu component(create only once):
  if( !this.oAction.getMenu() ){
	  // 1) Creating the Action Menu:
	  var oActionMenu	= new sap.ui.commons.Menu();
	  // 2) Adding the default "Sources" and "Feed settings" Action Items:
	  var defaultSourcesAction      = rb.getText("FEED_ACTION_SOURCES");
	  var defaultFeedSettingsAction = rb.getText("FEED_ACTION_FEED_SETTINGS");
	  var oSourcesItem	  = new sap.ui.commons.MenuItem(id+"__Sources", {text:defaultSourcesAction});
	  var oFeedSettingsItem = new sap.ui.commons.MenuItem(id+"__FeedSettings", {text:defaultFeedSettingsAction});
	  oActionMenu.addItem(oSourcesItem);
	  oActionMenu.addItem(oFeedSettingsItem);
	  // 3) Adding any application-supplied (aggregated) Action Items:
	  var oCustomItems = this.getCustomActions();
	  for (var i=0,len=oCustomItems.length; i<len; i++) {
		  oActionMenu.addItem(oCustomItems[i]);
	  }
	  // 4) Adding that Menu to the Action MenuButton:
	  this.oAction.setMenu(oActionMenu);
  }
	
	// Filter component:
	// 1) Creating the Filter ListBox:
  if(!this.oFilter.getListBox()){
	  var oFilterListBox	= new sap.ui.commons.ListBox();
	  // 2) Adding the default "All" Filter Item:
	  var defaultFilterValue = rb.getText("FEED_FILTER_ALL");
	  var oDefaultItem		   = new sap.ui.core.ListItem({key:"All", text:defaultFilterValue});
	  oFilterListBox.addItem(oDefaultItem);
	  // 3) Adding any application-supplied (aggregated) Action Items:
	  var oCustomItems = this.getCustomActions();
	  for (var i=0,len=oCustomItems.length; i<len; i++) {
		  oFilterListBox.addItem(oCustomItems[i]);
	  }
	  // 4) Adding that ListBox to the Action ComboBox:
	  this.oFilter.setListBox(oFilterListBox);
  }

	// SearchText component:
  var searchValue = this.getSearchValue();
  if (!searchValue) {
	// No Search String provided. Inserting our invite.
	  if (this.oSearch.getEditable() && this.oSearch.getEnabled()) {
		var defaultSearchValue = rb.getText("FEED_SEARCH_STRING");
		this.oSearch.setValue(defaultSearchValue);
		this.oSearch.addStyleClass("sapUiFeedCInvite");
	  }
  }
  this.oSearch.attachBrowserEvent("keyup", this.searchHandler);

	// RowRepeater component:
};

/**
 * Event handler called when control is receiving the focus
 */
sap.ui.ux3.feed.FeedComponent.prototype.onfocusin = function(oEvent) {
	// Handling focus on a sub-component basis:
	switch(oEvent.srcControl.sId){
//  case this.oFeeder.getId():
//		break;
//  case this.oIntervals.getId():
//		break;
//  case this.oAction.getId():
//		break;
//  case this.oFilter.getId():
//		break;
	case this.oSearch.getId():
	  // Removing the blurred "Search String" if needed:
	  if (this.oSearch.getEditable() && this.oSearch.getEnabled()) {
		  var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
		  var defaultSearchValue = rb.getText("FEED_SEARCH_STRING");
		  if (this.oSearch.getValue() == defaultSearchValue) {
			this.oSearch.setValue("");
			this.oSearch.removeStyleClass("sapUiFeedCInvite");
		  }
	  }
	  break;
//  case this.oFeed.getId():
//		break;
	default:
	  return;
	} // end-switch
};

/**
 * Event handler called when control is losing the focus
 */
sap.ui.ux3.feed.FeedComponent.prototype.onfocusout = function(oEvent) {
	// Handling blur on a sub-component basis:
	switch(oEvent.srcControl.sId){
//  case this.oFeeder.getId():
//		break;
//  case this.oIntervals.getId():
//		break;
//  case this.oAction.getId():
//		break;
//  case this.oFilter.getId():
//		break;
	case this.oSearch.getId():
	  // Adding the blurred "Search String" if needed:
	  if (this.oSearch.getEditable() && this.oSearch.getEnabled()) {
		  if (this.oSearch.getValue() == "") {
			var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
			var defaultSearchValue = rb.getText("FEED_SEARCH_STRING");
			this.oSearch.setValue(defaultSearchValue);
			this.oSearch.addStyleClass("sapUiFeedCInvite");
		  }
	  }
	  break;
//  case this.oFeed.getId():
//		break;
	default:
	  return;
	} // end-switch
};


/********************** ATTRIBUTE "avatarSrc" **********************
 * API override
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setAvatarSrc = function(sAvatarSrc) {
	this.setProperty("avatarSrc", sAvatarSrc);
	// Forwarding the new image to the inner Feeder:
	this.oFeeder.setImageSrc(sAvatarSrc);
	return this;
};

/********************** ATTRIBUTE "filterValue" **********************
 * API override
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setFilterValue = function(sFilterValue) {
	this.setProperty("filterValue", sFilterValue);
	// Forwarding the new value to the inner Filter:
	this.oFilter.setValue(sFilterValue);
	return this;
};

/********************** ATTRIBUTE "maxVisibleFeeds" **********************
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setMaxVisibleFeeds = function(iMaxVisibleFeeds) {
	this.setProperty("maxVisibleFeeds", iMaxVisibleFeeds);
	// Forwarding the new value to the inner RowRepeater:
	this.oFeed.setNumberOfRows(iMaxVisibleFeeds);
	return this;
};

/********************** ATTRIBUTE "refreshIntervalValue" **********************
 * API override
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setRefreshIntervalValue = function(iRefreshIntervalValue) {
	this.setProperty("refreshIntervalValue", iRefreshIntervalValue);
	// Forwarding the new selection to the inner Intervals ComboBox:
  var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
  if (iRefreshIntervalValue == 0) {
	this.oIntervals.setValue( rb.getText("FEED_INTERVAL_LIVE") );
  } else if (iRefreshIntervalValue == -1) {
	this.oIntervals.setValue( rb.getText("FEED_INTERVAL_PAUSE") );
  } else {
	this.oIntervals.setValue( iRefreshIntervalValue + " " + rb.getText("FEED_INTERVAL_SECONDS") );
  }
	return this;
};

/********************** ATTRIBUTE "refreshIntervals" **********************
 * API override
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setRefreshIntervals = function(aRefreshIntervals) {
	this.setProperty("refreshIntervals", aRefreshIntervals);
	// Forwarding the new array to the inner Intervals ComboBox:
  this.oIntervals.removeAllItems();
  var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	var liveInterval  = rb.getText("FEED_INTERVAL_LIVE");
	var pauseInterval = rb.getText("FEED_INTERVAL_PAUSE");
	var seconds       = rb.getText("FEED_INTERVAL_SECONDS");
	var intervalItems = [];
	for (var i=0, len=aRefreshIntervals.length; i<len; i++) {
	  if (aRefreshIntervals[i] == 0) {
		this.oIntervals.addItem( new sap.ui.core.ListItem({key:0, text:liveInterval}) );
	  } else if (aRefreshIntervals[i] == -1) {
		this.oIntervals.addItem( new sap.ui.core.ListItem({key:-1, text:pauseInterval}) );
	  } else {
		this.oIntervals.addItem( new sap.ui.core.ListItem({key:aRefreshIntervals[i], text:(aRefreshIntervals[i] + " " + seconds)}) );
	  }
	}
	return this;
};


/********************** ATTRIBUTE "searchValue" **********************
 * API override
 * @public
 */
sap.ui.ux3.feed.FeedComponent.prototype.setSearchValue = function(sSearchValue) {
	this.setProperty("searchValue", sSearchValue);
	// Forwarding the new value to the inner Search component:
	this.oSearch.setValue(sSearchValue);
	return this;
};

/********************** ATTRIBUTE "width" **********************/
// Nothing to do.


/********************** EVENT "action" **********************
 * @private
 */
sap.ui.ux3.feed.FeedComponent.forwardActionEvent = function(oControlEvent) {
	var oControl = oControlEvent.oSource.getParent();
	// Fire own event for applications to react:
	// A MenuItem returns its "itemId", but we need to return its textual "action"
	// as provided by the application.
	var itemId = oControlEvent.mParameters.itemId;
	var newValue = sap.ui.getCore().getControl(itemId).getText();
	// ... but "Sources" or "Feed settings" for the default actions (language-independent).
  var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	if (newValue==rb.getText("FEED_ACTION_SOURCES")) {
		newValue = "Sources";
	} else if (newValue==rb.getText("FEED_ACTION_FEED_SETTINGS")) {
		newValue = "Feed settings";
	}
	oControl.fireAction({actionName:newValue});
};

/********************** EVENT "filter" **********************
 * @private
 */
/* Own handler definition */
sap.ui.ux3.feed.FeedComponent.forwardFilterEvent = function(oControlEvent) {
	var oControl = oControlEvent.oSource.getParent();
	// Fire own event for applications to react:
	var newValue = oControlEvent.mParameters.selectedItem.mProperties.key;
	oControl.fireFilter({filterValue:newValue});
};

/********************** EVENT "refreshIntervalChange" **********************
 * @private
 */
/* Own handler definition */
sap.ui.ux3.feed.FeedComponent.forwardRefreshIntervalChangeEvent = function(oControlEvent) {
	var oControl = oControlEvent.oSource.getParent();
	// Fire own event for applications to react:
	var newValue = oControlEvent.mParameters.selectedItem.mProperties.key;
	oControl.fireRefreshIntervalChange({newInterval:newValue});
};

/********************** EVENT "searchTrigger" **********************/
/* No MenuButton Event to forward. */
/* Using own onKeyUp handler instead, for a more interactive Search. */

/**************************************************************************
* Overwriting feedEntries aggregation functions to dispatch to rowRepeater
* @public
**************************************************************************/
sap.ui.ux3.feed.FeedComponent.prototype.getFeedEntries = function() {
	return this.oFeed.getRows();
};

sap.ui.ux3.feed.FeedComponent.prototype.insertFeedEntry = function(oFeedEntry, iIndex) {
	this.oFeed.insertRow(oFeedEntry, iIndex);
	oFeedEntry.attachEvent("deleted", this.handleFeedEntryDelete, this);
	oFeedEntry.setAvatarSrc(this.getAvatarSrc());
	return this;
};

sap.ui.ux3.feed.FeedComponent.prototype.addFeedEntry = function(oFeedEntry) {
	this.oFeed.addRow(oFeedEntry);
	oFeedEntry.attachEvent("deleted", this.handleFeedEntryDelete, this);
	oFeedEntry.setAvatarSrc(this.getAvatarSrc());
	return this;
};

sap.ui.ux3.feed.FeedComponent.prototype.removeFeedEntry = function(vElement) {
	return this.oFeed.removeRow(vElement);
};

sap.ui.ux3.feed.FeedComponent.prototype.removeAllFeedEntries = function() {
	return this.oFeed.removeAllRows();
};

sap.ui.ux3.feed.FeedComponent.prototype.indexOfFeedEntry = function(oFeedEntry) {
	return this.oFeed.indexOfRow(oFeedEntry);
};

sap.ui.ux3.feed.FeedComponent.prototype.destroyFeedEntries = function() {
	this.oFeed.destroyRows();
	return this;
};

sap.ui.ux3.feed.FeedComponent.submitFeedEntry = function(oEvent){

	var textInput = oEvent.getParameters().content;
	//Create the new feed entry
	var oFeedEntry = new sap.ui.ux3.feed.FeedEntry("newEntry-" + sap.ui.ux3.feed.FeedComponent.iNewEntryIndex++);
	//TODO: You should come from somewhere else ??
	oFeedEntry.setText("<thing id='id1' class='p12e_prep'>"+ sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3").getText("FEED_YOU") +"</thing>:" + textInput);
	oFeedEntry.setLogoSrc(oEvent.oSource.getImageSrc());
	oFeedEntry.setLastChanged(sap.ui.ux3.feed.BaseFeedEntry.toISOString(new Date()));

	//Insert the entry at first index
	this.insertFeedEntry(oFeedEntry,0);

	//Clear the feeder
	this.oFeeder.setText("");

};

/**
 * Event handler for deleting feed entries
 * @private
 */
sap.ui.ux3.feed.FeedComponent.prototype.handleFeedEntryDelete = function(oEvent) {
	this.oFeed.removeRow(oEvent.oSource);
};