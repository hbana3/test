/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Feed.
jQuery.sap.declare("sap.ui.ux3.Feed");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Feed.
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
 * <li>feederThumbnailSrc : string</li>
 * <li>feederSender : string</li>
 * <li>live : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>filterItems : sap.ui.core.ListItem</li>
 * <li>chunks : sap.ui.ux3.FeedChunk</li>
 * <li>toolsMenuItems : sap.ui.commons.MenuItem</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>filterChange : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>search : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>chunkAdded : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>toolsItemSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>toggleLive : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * This a a full feed page including feeder and updates.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.Feed = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.Feed.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.Feed. 
 * Resulting metadata can be obtained via sap.ui.ux3.Feed.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.Feed", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getFeederThumbnailSrc", "setFeederThumbnailSrc", "getFeederSender", "setFeederSender", "getLive", "setLive", 
    // aggregations
    "getFilterItems", "insertFilterItem", "addFilterItem", "removeFilterItem", "removeAllFilterItems", "indexOfFilterItem", "destroyFilterItems", "getChunks", "insertChunk", "addChunk", "removeChunk", "removeAllChunks", "indexOfChunk", "destroyChunks", "getToolsMenuItems", "insertToolsMenuItem", "addToolsMenuItem", "removeToolsMenuItem", "removeAllToolsMenuItems", "indexOfToolsMenuItem", "destroyToolsMenuItems", 
    // associations
    
    // events
    "attachFilterChange", "detachFilterChange", "attachSearch", "detachSearch", "attachChunkAdded", "detachChunkAdded", "attachToolsItemSelected", "detachToolsItemSelected", "attachToggleLive", "detachToggleLive"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "feederThumbnailSrc" : {name : "feederThumbnailSrc", type : "string", group : "Data", defaultValue : null},
    "feederSender" : {name : "feederSender", type : "string", group : "Data", defaultValue : null},
    "live" : {name : "live", type : "boolean", group : "Behavior", defaultValue : true}
  },
  
  aggregations : {
    "filterItems" : {name : "filterItems", type : "sap.ui.core.ListItem", multiple : true, singularName : "filterItem"}, 
    "chunks" : {name : "chunks", type : "sap.ui.ux3.FeedChunk", multiple : true, singularName : "chunk"}, 
    "toolsMenuItems" : {name : "toolsMenuItems", type : "sap.ui.commons.MenuItem", multiple : true, singularName : "toolsMenuItem"}
  },
  associations : {},
  events : {
    "filterChange" : "filterChange", 
    "search" : "search", 
    "chunkAdded" : "chunkAdded", 
    "toolsItemSelected" : "toolsItemSelected", 
    "toggleLive" : "toggleLive"
  }

});	

sap.ui.ux3.Feed.M_EVENTS = {'filterChange':'filterChange','search':'search','chunkAdded':'chunkAdded','toolsItemSelected':'toolsItemSelected','toggleLive':'toggleLive'};


/**
 * Getter for property <code>feederThumbnailSrc</code>.
 * URL to the tumbnail image for the feeder.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>feederThumbnailSrc</code>
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getFeederThumbnailSrc = function() {
	return this.getProperty("feederThumbnailSrc");
};

/**
 * Setter for property <code>feederThumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFeederThumbnailSrc  new value for property <code>feederThumbnailSrc</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.setFeederThumbnailSrc = function(sFeederThumbnailSrc) {
	this.setProperty("feederThumbnailSrc", sFeederThumbnailSrc);
	return this;
};


/**
 * Getter for property <code>feederSender</code>.
 * Sender for the Feeder
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>feederSender</code>
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getFeederSender = function() {
	return this.getProperty("feederSender");
};

/**
 * Setter for property <code>feederSender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFeederSender  new value for property <code>feederSender</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.setFeederSender = function(sFeederSender) {
	this.setProperty("feederSender", sFeederSender);
	return this;
};


/**
 * Getter for property <code>live</code>.
 * Indicator if feed is in live mode or not
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>live</code>
 * @public
 * 
 */
sap.ui.ux3.Feed.prototype.getLive = function() {
	return this.getProperty("live");
};

/**
 * Setter for property <code>live</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bLive  new value for property <code>live</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.setLive = function(bLive) {
	this.setProperty("live", bLive);
	return this;
};

	
/**
 * Getter for aggregation <code>filterItems</code>.<br/>
 * Items of the filter.
 * 
 * @return {sap.ui.core.ListItem[]}
 * @public
 */
sap.ui.ux3.Feed.prototype.getFilterItems = function() {
	return this.getAggregation("filterItems", []);
};


/**
 * Inserts a filterItem into the aggregation named <code>filterItems</code>.
 *
 * @param {sap.ui.core.ListItem}
 *          oFilterItem the filterItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filterItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filterItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.insertFilterItem = function(oFilterItem, iIndex) {
	this.insertAggregation("filterItems", oFilterItem, iIndex);
	return this;
};

/**
 * Adds some filterItem <code>oFilterItem</code> 
 * to the aggregation named <code>filterItems</code>.
 *
 * @param {sap.ui.core.ListItem}
 *            oFilterItem the filterItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Feed.prototype.addFilterItem = function(oFilterItem) {
	this.addAggregation("filterItems", oFilterItem);
	return this;
};

/**
 * Removes an filterItem from the aggregation named <code>filterItems</code>.
 *
 * @param {int | string | sap.ui.core.ListItem} vFilterItem the filterItem to remove or its index or id
 * @return {sap.ui.core.ListItem} the removed filterItem or null
 * @public
 */
sap.ui.ux3.Feed.prototype.removeFilterItem = function(vFilterItem) {
	return this.removeAggregation("filterItems", vFilterItem);
};

/**
 * Removes all the controls in the aggregation named <code>filterItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.ListItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Feed.prototype.removeAllFilterItems = function() {
	return this.removeAllAggregation("filterItems");
};

/**
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation named <code>filterItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.ListItem}
 *            oFilterItem the filterItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Feed.prototype.indexOfFilterItem = function(oFilterItem) {
	return this.indexOfAggregation("filterItems", oFilterItem);
};
	

/**
 * Destroys all the filterItems in the aggregation 
 * named <code>filterItems</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.destroyFilterItems = function() {
	this.destroyAggregation("filterItems");
	return this;
};

	
/**
 * Getter for aggregation <code>chunks</code>.<br/>
 * Chunks
 * 
 * @return {sap.ui.ux3.FeedChunk[]}
 * @public
 */
sap.ui.ux3.Feed.prototype.getChunks = function() {
	return this.getAggregation("chunks", []);
};


/**
 * Inserts a chunk into the aggregation named <code>chunks</code>.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *          oChunk the chunk to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the chunk should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the chunk is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the chunk is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.insertChunk = function(oChunk, iIndex) {
	this.insertAggregation("chunks", oChunk, iIndex);
	return this;
};

/**
 * Adds some chunk <code>oChunk</code> 
 * to the aggregation named <code>chunks</code>.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *            oChunk the chunk to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Feed.prototype.addChunk = function(oChunk) {
	this.addAggregation("chunks", oChunk);
	return this;
};

/**
 * Removes an chunk from the aggregation named <code>chunks</code>.
 *
 * @param {int | string | sap.ui.ux3.FeedChunk} vChunk the chunk to remove or its index or id
 * @return {sap.ui.ux3.FeedChunk} the removed chunk or null
 * @public
 */
sap.ui.ux3.Feed.prototype.removeChunk = function(vChunk) {
	return this.removeAggregation("chunks", vChunk);
};

/**
 * Removes all the controls in the aggregation named <code>chunks</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.FeedChunk[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Feed.prototype.removeAllChunks = function() {
	return this.removeAllAggregation("chunks");
};

/**
 * Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation named <code>chunks</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *            oChunk the chunk whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Feed.prototype.indexOfChunk = function(oChunk) {
	return this.indexOfAggregation("chunks", oChunk);
};
	

/**
 * Destroys all the chunks in the aggregation 
 * named <code>chunks</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.destroyChunks = function() {
	this.destroyAggregation("chunks");
	return this;
};

	
/**
 * Getter for aggregation <code>toolsMenuItems</code>.<br/>
 * MenuItems to open when click on the tool button
 * 
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 */
sap.ui.ux3.Feed.prototype.getToolsMenuItems = function() {
	return this.getAggregation("toolsMenuItems", []);
};


/**
 * Inserts a toolsMenuItem into the aggregation named <code>toolsMenuItems</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *          oToolsMenuItem the toolsMenuItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the toolsMenuItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the toolsMenuItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the toolsMenuItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.insertToolsMenuItem = function(oToolsMenuItem, iIndex) {
	this.insertAggregation("toolsMenuItems", oToolsMenuItem, iIndex);
	return this;
};

/**
 * Adds some toolsMenuItem <code>oToolsMenuItem</code> 
 * to the aggregation named <code>toolsMenuItems</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oToolsMenuItem the toolsMenuItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.Feed.prototype.addToolsMenuItem = function(oToolsMenuItem) {
	this.addAggregation("toolsMenuItems", oToolsMenuItem);
	return this;
};

/**
 * Removes an toolsMenuItem from the aggregation named <code>toolsMenuItems</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItem} vToolsMenuItem the toolsMenuItem to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed toolsMenuItem or null
 * @public
 */
sap.ui.ux3.Feed.prototype.removeToolsMenuItem = function(vToolsMenuItem) {
	return this.removeAggregation("toolsMenuItems", vToolsMenuItem);
};

/**
 * Removes all the controls in the aggregation named <code>toolsMenuItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.Feed.prototype.removeAllToolsMenuItems = function() {
	return this.removeAllAggregation("toolsMenuItems");
};

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>toolsMenuItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oToolsMenuItem the toolsMenuItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.Feed.prototype.indexOfToolsMenuItem = function(oToolsMenuItem) {
	return this.indexOfAggregation("toolsMenuItems", oToolsMenuItem);
};
	

/**
 * Destroys all the toolsMenuItems in the aggregation 
 * named <code>toolsMenuItems</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.destroyToolsMenuItems = function() {
	this.destroyAggregation("toolsMenuItems");
	return this;
};


/**
 * This event is fired if the filter is changed. 
 *
 * @name sap.ui.ux3.Feed#filterChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the filter.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'filterChange' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * This event is fired if the filter is changed. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.attachFilterChange = function(oData, fnFunction, oListener) {
	this.attachEvent("filterChange", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'filterChange' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.detachFilterChange = function(fnFunction, oListener) {
	this.detachEvent("filterChange", fnFunction, oListener);
	return this;	
};

/**
 * Fire event filterChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the filter.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Feed.prototype.fireFilterChange = function(mArguments) {
	this.fireEvent("filterChange", mArguments);
	return this;
};


/**
 * Search function on SearchField triggered. 
 *
 * @name sap.ui.ux3.Feed#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query search query
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * Search function on SearchField triggered. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.attachSearch = function(oData, fnFunction, oListener) {
	this.attachEvent("search", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.detachSearch = function(fnFunction, oListener) {
	this.detachEvent("search", fnFunction, oListener);
	return this;	
};

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> search query</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Feed.prototype.fireSearch = function(mArguments) {
	this.fireEvent("search", mArguments);
	return this;
};


/**
 * Raised when a new chunk is added. 
 *
 * @name sap.ui.ux3.Feed#chunkAdded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.FeedChunk} oControlEvent.getParameters.chunk new chunk
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'chunkAdded' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * Raised when a new chunk is added. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.attachChunkAdded = function(oData, fnFunction, oListener) {
	this.attachEvent("chunkAdded", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'chunkAdded' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.detachChunkAdded = function(fnFunction, oListener) {
	this.detachEvent("chunkAdded", fnFunction, oListener);
	return this;	
};

/**
 * Fire event chunkAdded to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'chunk' of type <code>sap.ui.ux3.FeedChunk</code> new chunk</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Feed.prototype.fireChunkAdded = function(mArguments) {
	this.fireEvent("chunkAdded", mArguments);
	return this;
};


/**
 * Fired when an item from the tools MenuButton was selected. 
 *
 * @name sap.ui.ux3.Feed#toolsItemSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId The id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toolsItemSelected' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * Fired when an item from the tools MenuButton was selected. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.attachToolsItemSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("toolsItemSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toolsItemSelected' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.detachToolsItemSelected = function(fnFunction, oListener) {
	this.detachEvent("toolsItemSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toolsItemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The id of the selected item</li>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Feed.prototype.fireToolsItemSelected = function(mArguments) {
	this.fireEvent("toolsItemSelected", mArguments);
	return this;
};


/**
 * Event is fired if the live mode changed 
 *
 * @name sap.ui.ux3.Feed#toggleLive
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.live current live indicator
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toggleLive' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 * Event is fired if the live mode changed 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.attachToggleLive = function(oData, fnFunction, oListener) {
	this.attachEvent("toggleLive", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toggleLive' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.Feed.prototype.detachToggleLive = function(fnFunction, oListener) {
	this.detachEvent("toggleLive", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toggleLive to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'live' of type <code>boolean</code> current live indicator</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.Feed.prototype.fireToggleLive = function(mArguments) {
	this.fireEvent("toggleLive", mArguments);
	return this;
};


// Start of sap/ui/ux3/Feed.js
///**
// * This file defines behavior for the control, 
// */

sap.ui.ux3.Feed.prototype.init = function(){
	this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
};

/*
 * as onBeforeRendering only runs while re-rendering this module is called in renderer
 */
sap.ui.ux3.Feed.prototype.initChildControls = function(){
	// create feeder if needed
	if (!this.oFeeder) {
		this.oFeeder = new sap.ui.ux3.Feeder( this.getId()+'-Feeder', {
			type: sap.ui.ux3.FeederType.Medium,
			thumbnailSrc: this.getFeederThumbnailSrc()
		}).setParent(this);
		this.oFeeder.attachEvent('submit', this.handleFeederSubmit, this); // attach event this way to have the right this-reference in handler
	}

	// create live button if needed
	if (!this.oLiveButton) {
		this.oLiveButton = new sap.ui.commons.Button( this.getId()+'-liveButton', {
			text: this.rb.getText('FEED_LIVE'),
			lite: true
		}).setParent(this);
		this.oLiveButton.attachEvent('press', this.handleLiveButtonPress, this); // attach event this way to have the right this-reference in handler
	}

	// create tools menu button if needed
	if (!this.oToolsButton && this.getToolsMenuItems().length > 0) {
		this.oToolsButton = new sap.ui.commons.MenuButton( this.getId()+'-toolsButton', {
			tooltip: this.rb.getText('FEED_TOOLS'),
			lite: true,
			menu: new sap.ui.commons.Menu(this.getId()+'-toolsMenu',{
					items: this.getToolsMenuItems()
						})	
		}).setParent(this);
		this.oToolsButton.attachEvent('itemSelected', this.handleLtoolsButtonSelected, this); // attach event this way to have the right this-reference in handler
	}

	// create filter if needed
	if (!this.oFilter) {
		this.oFilter = new sap.ui.commons.DropdownBox( this.getId()+'-filter', {
			items: this.getFilterItems()
		}).setParent(this);
		this.oFilter.attachEvent('change', this.handleFilterChange, this); // attach event this way to have the right this-reference in handler
	}

	// create search field if needed
	if (!this.oSearchField) {
		this.oSearchField = new sap.ui.commons.SearchField( this.getId()+'-search', {
			enableListSuggest: false
		}).setParent(this);
		this.oSearchField.attachEvent('search', this.handleSearchFieldSearch, this); // attach event this way to have the right this-reference in handler
	}

};

sap.ui.ux3.Feed.prototype.exit = function(){
   
	if (this.oFeeder) {
		this.oFeeder.destroy();
	}
	if (this.oLiveButton) {
		this.oLiveButton.destroy();
	}
	if (this.oToolsButton) {
		this.oToolsButton.destroy();
	}
	if (this.oFilter) {
		this.oFilter.destroy();
	}
	if (this.oSearchField) {
		this.oSearchField.destroy();
	}
	this.rb = undefined;
	
};

/**
 * Handler for feeder submit event
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleFeederSubmit = function(oEvent){

	var oDate = new Date();
//	var sDate = String(oDate.getFullYear()) + String(oDate.getMonth()) + String(oDate.getDate()) + String(oDate.getHours()) + String(oDate.getMinutes()) + String(oDate.getSeconds());
	var sDate = String(oDate);

	var oNewChunk = new sap.ui.ux3.FeedChunk(this.getId()+'-new-'+this.getChunks().length, {
		text: oEvent.getParameter('text'),
		commentChunk: false,
	    deletionAllowed: true, 
		timestamp: sDate,
		sender: this.getFeederSender(),
		thumbnailSrc: this.getFeederThumbnailSrc()
	}); 
	
	this.insertChunk(oNewChunk, 0);
	this.fireChunkAdded({chunk: oNewChunk});

};

/**
 * Handler for live-button press
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleLiveButtonPress = function(oEvent){

	this.setLive(!this.getLive());
	this.fireToggleLive({live: this.getLive()});

};

/**
 * Handler for tools menu button item selection
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleLtoolsButtonSelected = function(oEvent){

	// just forward event
	this.fireToolsItemSelected(oEvent.mParameters);

};

/**
 * Handler for filter change
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleFilterChange = function(oEvent){

	// just forward event
	this.fireFilterChange(oEvent.mParameters);
	
};

/**
 * Handler for lsearch field
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleSearchFieldSearch = function(oEvent){

	// just forward event
	this.fireSearch(oEvent.mParameters);

};

