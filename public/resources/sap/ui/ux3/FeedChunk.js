/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.FeedChunk.
jQuery.sap.declare("sap.ui.ux3.FeedChunk");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new FeedChunk.
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
 * <li>thumbnailSrc : string</li>
 * <li>text : string</li>
 * <li>sender : string</li>
 * <li>timestamp : string</li>
 * <li>deletionAllowed : boolean</li>
 * <li>commentChunk : boolean</li>
 * <li>feederThumbnailSrc : string</li>
 * <li>feederSender : string</li>
 * <li>flagged : boolean</li>
 * <li>favorite : boolean</li>
 * <li>shared : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>comments : sap.ui.ux3.FeedChunk</li>
 * <li>actionMenuItems : sap.ui.commons.MenuItem</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>deleted : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>commentAdded : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>toggleFlagged : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>senderClicked : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>referenceClicked : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>toggleFavorite : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>inspect : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>toggleShared : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>actionItemSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Add your documentation for the new FeedChunk
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.FeedChunk = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.FeedChunk.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.FeedChunk. 
 * Resulting metadata can be obtained via sap.ui.ux3.FeedChunk.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.FeedChunk", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getThumbnailSrc", "setThumbnailSrc", "getText", "setText", "getSender", "setSender", "getTimestamp", "setTimestamp", "getDeletionAllowed", "setDeletionAllowed", "getCommentChunk", "setCommentChunk", "getFeederThumbnailSrc", "setFeederThumbnailSrc", "getFeederSender", "setFeederSender", "getFlagged", "setFlagged", "getFavorite", "setFavorite", "getShared", "setShared", 
    // aggregations
    "getComments", "insertComment", "addComment", "removeComment", "removeAllComments", "indexOfComment", "destroyComments", "getActionMenuItems", "insertActionMenuItem", "addActionMenuItem", "removeActionMenuItem", "removeAllActionMenuItems", "indexOfActionMenuItem", "destroyActionMenuItems", 
    // associations
    
    // events
    "attachDeleted", "detachDeleted", "attachCommentAdded", "detachCommentAdded", "attachToggleFlagged", "detachToggleFlagged", "attachSenderClicked", "detachSenderClicked", "attachReferenceClicked", "detachReferenceClicked", "attachToggleFavorite", "detachToggleFavorite", "attachInspect", "detachInspect", "attachToggleShared", "detachToggleShared", "attachActionItemSelected", "detachActionItemSelected"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "thumbnailSrc" : {name : "thumbnailSrc", type : "string", group : "Data", defaultValue : null},
    "text" : {name : "text", type : "string", group : "Data", defaultValue : null},
    "sender" : {name : "sender", type : "string", group : "Data", defaultValue : null},
    "timestamp" : {name : "timestamp", type : "string", group : "Data", defaultValue : null},
    "deletionAllowed" : {name : "deletionAllowed", type : "boolean", group : "Behavior", defaultValue : false},
    "commentChunk" : {name : "commentChunk", type : "boolean", group : "Appearance", defaultValue : false},
    "feederThumbnailSrc" : {name : "feederThumbnailSrc", type : "string", group : "Data", defaultValue : null},
    "feederSender" : {name : "feederSender", type : "string", group : "Data", defaultValue : null},
    "flagged" : {name : "flagged", type : "boolean", group : "Data", defaultValue : false},
    "favorite" : {name : "favorite", type : "boolean", group : "Data", defaultValue : null},
    "shared" : {name : "shared", type : "boolean", group : "Data", defaultValue : false}
  },
  
  aggregations : {
    "comments" : {name : "comments", type : "sap.ui.ux3.FeedChunk", multiple : true, singularName : "comment"}, 
    "actionMenuItems" : {name : "actionMenuItems", type : "sap.ui.commons.MenuItem", multiple : true, singularName : "actionMenuItem"}
  },
  associations : {},
  events : {
    "deleted" : "deleted", 
    "commentAdded" : "commentAdded", 
    "toggleFlagged" : "toggleFlagged", 
    "senderClicked" : "senderClicked", 
    "referenceClicked" : "referenceClicked", 
    "toggleFavorite" : "toggleFavorite", 
    "inspect" : "inspect", 
    "toggleShared" : "toggleShared", 
    "actionItemSelected" : "actionItemSelected"
  }

});	

sap.ui.ux3.FeedChunk.M_EVENTS = {'deleted':'deleted','commentAdded':'commentAdded','toggleFlagged':'toggleFlagged','senderClicked':'senderClicked','referenceClicked':'referenceClicked','toggleFavorite':'toggleFavorite','inspect':'inspect','toggleShared':'toggleShared','actionItemSelected':'actionItemSelected'};


/**
 * Getter for property <code>thumbnailSrc</code>.
 * URL to the tumbnail image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>thumbnailSrc</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getThumbnailSrc = function() {
	return this.getProperty("thumbnailSrc");
};

/**
 * Setter for property <code>thumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sThumbnailSrc  new value for property <code>thumbnailSrc</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setThumbnailSrc = function(sThumbnailSrc) {
	this.setProperty("thumbnailSrc", sThumbnailSrc);
	return this;
};


/**
 * Getter for property <code>text</code>.
 * Text of the feedChunk. "@References" are supported.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>sender</code>.
 * Sender of the Chunk.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>sender</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getSender = function() {
	return this.getProperty("sender");
};

/**
 * Setter for property <code>sender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSender  new value for property <code>sender</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setSender = function(sSender) {
	this.setProperty("sender", sSender);
	return this;
};


/**
 * Getter for property <code>timestamp</code>.
 * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC Timezone
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>timestamp</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getTimestamp = function() {
	return this.getProperty("timestamp");
};

/**
 * Setter for property <code>timestamp</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTimestamp  new value for property <code>timestamp</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setTimestamp = function(sTimestamp) {
	this.setProperty("timestamp", sTimestamp);
	return this;
};


/**
 * Getter for property <code>deletionAllowed</code>.
 * Flag if deletion of chunk is allowed.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>deletionAllowed</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getDeletionAllowed = function() {
	return this.getProperty("deletionAllowed");
};

/**
 * Setter for property <code>deletionAllowed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDeletionAllowed  new value for property <code>deletionAllowed</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setDeletionAllowed = function(bDeletionAllowed) {
	this.setProperty("deletionAllowed", bDeletionAllowed);
	return this;
};


/**
 * Getter for property <code>commentChunk</code>.
 * If this flag is set, the FeedChunk is ca Comment Chunk. In this case it can not have own Comments and must be assigned to a FeedChunk.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>commentChunk</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getCommentChunk = function() {
	return this.getProperty("commentChunk");
};

/**
 * Setter for property <code>commentChunk</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCommentChunk  new value for property <code>commentChunk</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setCommentChunk = function(bCommentChunk) {
	this.setProperty("commentChunk", bCommentChunk);
	return this;
};


/**
 * Getter for property <code>feederThumbnailSrc</code>.
 * URL to the tumbnail image for thecomment feeder.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>feederThumbnailSrc</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFeederThumbnailSrc = function() {
	return this.getProperty("feederThumbnailSrc");
};

/**
 * Setter for property <code>feederThumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFeederThumbnailSrc  new value for property <code>feederThumbnailSrc</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setFeederThumbnailSrc = function(sFeederThumbnailSrc) {
	this.setProperty("feederThumbnailSrc", sFeederThumbnailSrc);
	return this;
};


/**
 * Getter for property <code>feederSender</code>.
 * Sender for the commentFeeder
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>feederSender</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFeederSender = function() {
	return this.getProperty("feederSender");
};

/**
 * Setter for property <code>feederSender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFeederSender  new value for property <code>feederSender</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setFeederSender = function(sFeederSender) {
	this.setProperty("feederSender", sFeederSender);
	return this;
};


/**
 * Getter for property <code>flagged</code>.
 * Is the entry flagged.
 * This property is not supported for comment chunks.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>flagged</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFlagged = function() {
	return this.getProperty("flagged");
};

/**
 * Setter for property <code>flagged</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFlagged  new value for property <code>flagged</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setFlagged = function(bFlagged) {
	this.setProperty("flagged", bFlagged);
	return this;
};


/**
 * Getter for property <code>favorite</code>.
 * Is the entry flagged.
 * This property is not supported for comment chunks.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>favorite</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getFavorite = function() {
	return this.getProperty("favorite");
};

/**
 * Setter for property <code>favorite</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bFavorite  new value for property <code>favorite</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setFavorite = function(bFavorite) {
	this.setProperty("favorite", bFavorite);
	return this;
};


/**
 * Getter for property <code>shared</code>.
 * Is the entry shared.
 * This property is not supported for comment chunks.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>shared</code>
 * @public
 * 
 */
sap.ui.ux3.FeedChunk.prototype.getShared = function() {
	return this.getProperty("shared");
};

/**
 * Setter for property <code>shared</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShared  new value for property <code>shared</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.setShared = function(bShared) {
	this.setProperty("shared", bShared);
	return this;
};

	
/**
 * Getter for aggregation <code>comments</code>.<br/>
 * Comments on this chunk
 * 
 * @return {sap.ui.ux3.FeedChunk[]}
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.getComments = function() {
	return this.getAggregation("comments", []);
};


/**
 * Inserts a comment into the aggregation named <code>comments</code>.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *          oComment the comment to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the comment should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the comment is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the comment is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.insertComment = function(oComment, iIndex) {
	this.insertAggregation("comments", oComment, iIndex);
	return this;
};

/**
 * Adds some comment <code>oComment</code> 
 * to the aggregation named <code>comments</code>.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *            oComment the comment to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.FeedChunk.prototype.addComment = function(oComment) {
	this.addAggregation("comments", oComment);
	return this;
};

/**
 * Removes an comment from the aggregation named <code>comments</code>.
 *
 * @param {int | string | sap.ui.ux3.FeedChunk} vComment the comment to remove or its index or id
 * @return {sap.ui.ux3.FeedChunk} the removed comment or null
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.removeComment = function(vComment) {
	return this.removeAggregation("comments", vComment);
};

/**
 * Removes all the controls in the aggregation named <code>comments</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.FeedChunk[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.removeAllComments = function() {
	return this.removeAllAggregation("comments");
};

/**
 * Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation named <code>comments</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *            oComment the comment whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.indexOfComment = function(oComment) {
	return this.indexOfAggregation("comments", oComment);
};
	

/**
 * Destroys all the comments in the aggregation 
 * named <code>comments</code>.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.destroyComments = function() {
	this.destroyAggregation("comments");
	return this;
};

	
/**
 * Getter for aggregation <code>actionMenuItems</code>.<br/>
 * MenuItems to open when click on the action menu button
 * 
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.getActionMenuItems = function() {
	return this.getAggregation("actionMenuItems", []);
};


/**
 * Inserts a actionMenuItem into the aggregation named <code>actionMenuItems</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *          oActionMenuItem the actionMenuItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the actionMenuItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the actionMenuItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the actionMenuItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.insertActionMenuItem = function(oActionMenuItem, iIndex) {
	this.insertAggregation("actionMenuItems", oActionMenuItem, iIndex);
	return this;
};

/**
 * Adds some actionMenuItem <code>oActionMenuItem</code> 
 * to the aggregation named <code>actionMenuItems</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oActionMenuItem the actionMenuItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.FeedChunk.prototype.addActionMenuItem = function(oActionMenuItem) {
	this.addAggregation("actionMenuItems", oActionMenuItem);
	return this;
};

/**
 * Removes an actionMenuItem from the aggregation named <code>actionMenuItems</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItem} vActionMenuItem the actionMenuItem to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed actionMenuItem or null
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.removeActionMenuItem = function(vActionMenuItem) {
	return this.removeAggregation("actionMenuItems", vActionMenuItem);
};

/**
 * Removes all the controls in the aggregation named <code>actionMenuItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.removeAllActionMenuItems = function() {
	return this.removeAllAggregation("actionMenuItems");
};

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>actionMenuItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oActionMenuItem the actionMenuItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.indexOfActionMenuItem = function(oActionMenuItem) {
	return this.indexOfAggregation("actionMenuItems", oActionMenuItem);
};
	

/**
 * Destroys all the actionMenuItems in the aggregation 
 * named <code>actionMenuItems</code>.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.destroyActionMenuItems = function() {
	this.destroyAggregation("actionMenuItems");
	return this;
};


/**
 * This event is fired if the deletion button is pressed. 
 *
 * @name sap.ui.ux3.FeedChunk#deleted
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'deleted' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * This event is fired if the deletion button is pressed. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachDeleted = function(oData, fnFunction, oListener) {
	this.attachEvent("deleted", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'deleted' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachDeleted = function(fnFunction, oListener) {
	this.detachEvent("deleted", fnFunction, oListener);
	return this;	
};

/**
 * Fire event deleted to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireDeleted = function(mArguments) {
	this.fireEvent("deleted", mArguments);
	return this;
};


/**
 * Raised when a comment is added to the entry.
 * This event is not supported for comment chunks. 
 *
 * @name sap.ui.ux3.FeedChunk#commentAdded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.FeedChunk} oControlEvent.getParameters.comment new comment chunk
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'commentAdded' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * Raised when a comment is added to the entry.
 * This event is not supported for comment chunks. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachCommentAdded = function(oData, fnFunction, oListener) {
	this.attachEvent("commentAdded", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'commentAdded' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachCommentAdded = function(fnFunction, oListener) {
	this.detachEvent("commentAdded", fnFunction, oListener);
	return this;	
};

/**
 * Fire event commentAdded to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'comment' of type <code>sap.ui.ux3.FeedChunk</code> new comment chunk</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireCommentAdded = function(mArguments) {
	this.fireEvent("commentAdded", mArguments);
	return this;
};


/**
 * Raised when user click to flag the entry.
 * This event is not supported for comment chunks. 
 *
 * @name sap.ui.ux3.FeedChunk#toggleFlagged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.flagged current flagged state
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toggleFlagged' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * Raised when user click to flag the entry.
 * This event is not supported for comment chunks. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleFlagged = function(oData, fnFunction, oListener) {
	this.attachEvent("toggleFlagged", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toggleFlagged' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleFlagged = function(fnFunction, oListener) {
	this.detachEvent("toggleFlagged", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toggleFlagged to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'flagged' of type <code>boolean</code> current flagged state</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleFlagged = function(mArguments) {
	this.fireEvent("toggleFlagged", mArguments);
	return this;
};


/**
 * The thumbnail or the name of the sender is clicked. 
 *
 * @name sap.ui.ux3.FeedChunk#senderClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'senderClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * The thumbnail or the name of the sender is clicked. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachSenderClicked = function(oData, fnFunction, oListener) {
	this.attachEvent("senderClicked", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'senderClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachSenderClicked = function(fnFunction, oListener) {
	this.detachEvent("senderClicked", fnFunction, oListener);
	return this;	
};

/**
 * Fire event senderClicked to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireSenderClicked = function(mArguments) {
	this.fireEvent("senderClicked", mArguments);
	return this;
};


/**
 * Click on a @-reference 
 *
 * @name sap.ui.ux3.FeedChunk#referenceClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.text Text of the @-reference
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'referenceClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * Click on a @-reference 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachReferenceClicked = function(oData, fnFunction, oListener) {
	this.attachEvent("referenceClicked", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'referenceClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachReferenceClicked = function(fnFunction, oListener) {
	this.detachEvent("referenceClicked", fnFunction, oListener);
	return this;	
};

/**
 * Fire event referenceClicked to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Text of the @-reference</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireReferenceClicked = function(mArguments) {
	this.fireEvent("referenceClicked", mArguments);
	return this;
};


/**
 * Raised when user click to set the entry as favorite.
 * This event is not supported for comment chunks. 
 *
 * @name sap.ui.ux3.FeedChunk#toggleFavorite
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.favorite current favorite state
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toggleFavorite' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * Raised when user click to set the entry as favorite.
 * This event is not supported for comment chunks. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleFavorite = function(oData, fnFunction, oListener) {
	this.attachEvent("toggleFavorite", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toggleFavorite' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleFavorite = function(fnFunction, oListener) {
	this.detachEvent("toggleFavorite", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toggleFavorite to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'favorite' of type <code>boolean</code> current favorite state</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleFavorite = function(mArguments) {
	this.fireEvent("toggleFavorite", mArguments);
	return this;
};


/**
 * The inspect button was pressed 
 *
 * @name sap.ui.ux3.FeedChunk#inspect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'inspect' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * The inspect button was pressed 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachInspect = function(oData, fnFunction, oListener) {
	this.attachEvent("inspect", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'inspect' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachInspect = function(fnFunction, oListener) {
	this.detachEvent("inspect", fnFunction, oListener);
	return this;	
};

/**
 * Fire event inspect to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireInspect = function(mArguments) {
	this.fireEvent("inspect", mArguments);
	return this;
};


/**
 * Raised when user click to share the entry.
 * This event is not supported for comment chunks. 
 *
 * @name sap.ui.ux3.FeedChunk#toggleShared
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.shareed current shared state
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toggleShared' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * Raised when user click to share the entry.
 * This event is not supported for comment chunks. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachToggleShared = function(oData, fnFunction, oListener) {
	this.attachEvent("toggleShared", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toggleShared' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachToggleShared = function(fnFunction, oListener) {
	this.detachEvent("toggleShared", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toggleShared to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'shareed' of type <code>boolean</code> current shared state</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireToggleShared = function(mArguments) {
	this.fireEvent("toggleShared", mArguments);
	return this;
};


/**
 * Fired when an item from the action MenuButton was selected. 
 *
 * @name sap.ui.ux3.FeedChunk#actionItemSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId The id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'actionItemSelected' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 * Fired when an item from the action MenuButton was selected. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.attachActionItemSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("actionItemSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'actionItemSelected' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.FeedChunk.prototype.detachActionItemSelected = function(fnFunction, oListener) {
	this.detachEvent("actionItemSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event actionItemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The id of the selected item</li>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.FeedChunk.prototype.fireActionItemSelected = function(mArguments) {
	this.fireEvent("actionItemSelected", mArguments);
	return this;
};


// Start of sap/ui/ux3/FeedChunk.js
jQuery.sap.require("sap.ui.core.theming.Parameters");

///**
// * This file defines behavior for the control, 
// */

sap.ui.ux3.FeedChunk.prototype.init = function(){
   this.maxComments = 2; // max. number of comments displayed initially
   this.allComments = false; // initially render only maxComments
   this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
   this.expanded = false;	
};

/*
 * as onBeforeRendering only runs while re-rendering this module is called in renderer
 */
sap.ui.ux3.FeedChunk.prototype.initChildControls = function(){

	// create comment feeder if needed
	if ((this.getComments().length > 0 || this.showCommentFeeder )&& !this.oCommentFeeder) {
		this.oCommentFeeder = new sap.ui.ux3.Feeder( this.getId()+'-CommentFeeder', {
			type: sap.ui.ux3.FeederType.Comment,
			thumbnailSrc: this.getFeederThumbnailSrc()
		}).setParent(this);
		this.oCommentFeeder.attachEvent('submit', this.handleCommentFeederSubmit, this); // attach event this way to have the right this-reference in handler
		this.showCommentFeeder = true;
	}

	// create action menu button if needed
	if (!this.oToolsButton && ( this.getDeletionAllowed() || this.getActionMenuItems().length > 0)) {
		this.oToolsButton = new sap.ui.commons.MenuButton( this.getId()+'-toolsButton', {
			tooltip: this.rb.getText('FEED_TOOLS'),
			lite: true,
			menu: new sap.ui.commons.Menu(this.getId()+'-toolsMenu',{
					items: this.getActionMenuItems()
						})
		}).setParent(this);
		if(this.getDeletionAllowed()){
			this.oToolsButton.getMenu().insertItem(new sap.ui.commons.MenuItem(this.getId() + '-actDelete',{text: this.rb.getText('FEED_DELETE')}), 0);
		}
		this.oToolsButton.attachEvent('itemSelected', this.handleLtoolsButtonSelected, this); // attach event this way to have the right this-reference in handler
	}

};

sap.ui.ux3.FeedChunk.prototype.exit = function(){
   
	if (this.oCommentFeeder) {
		this.oCommentFeeder.destroy();
	}
	if (this.oToolsButton) {
		this.oToolsButton.destroy();
	}
	this.rb = undefined;
	this.showCommentFeeder = undefined;
	this.expanded = undefined;
	this.oText = undefined;
	
};

sap.ui.ux3.FeedChunk.prototype.onAfterRendering = function(){

	// if text is cut show expand button
	this.oText = jQuery.sap.byId(this.getId()).children(".sapUiFeedChunkText").get(0);
	if (this.oText.clientHeight < this.oText.scrollHeight) {
//		jQuery.sap.byId(this.getId()).append(sap.ui.ux3.FeedChunkRenderer.renderExpander(this));		
//		jQuery(this.oText).after(sap.ui.ux3.FeedChunkRenderer.renderExpander(this));
		// if tags are rendered put button in tag-DIV
		var oFather = jQuery.sap.byId(this.getId()).children(".sapUiFeedChunkByline").get(0);
		jQuery(oFather).append(sap.ui.ux3.FeedChunkRenderer.renderExpander(this));

		if (this.expanded) {
			// expanded
			jQuery(this.oText).css('height', 'auto');
		}
	}
	

};

/**
 * handler for click event 
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.onclick = function(oEvent){

	var sTargetId = oEvent.target.getAttribute( 'ID' );

	if(sTargetId){
		switch ( sTargetId ){
		case ( this.getId() + '-delete' ):
			// Click on delete button
			this.fireDeleted();
		break;
		case ( this.getId() + '-sender'):
			// Click on sender
			this.fireSenderClicked();
		break;
		case ( this.getId() + '-thumb' ):
			// Click on sender
			this.fireSenderClicked();
		break;
		case ( this.getId() + '-exp' ):
			// Click on expand/collapse button
			var sNewTitle = '';
			if (this.expanded) {
				// collapse
				jQuery(this.oText).css('height', '');
				sNewTitle = this.rb.getText("FEED_EXPAND");
				this.expanded = false;	
			} else {
				// expand
				jQuery(this.oText).css('height', 'auto');
				sNewTitle = this.rb.getText("FEED_COLLAPSE");			
				this.expanded = true;	
			}
			jQuery.sap.byId(sTargetId).attr('title',sNewTitle).toggleClass('sapUiFeedChunkExpand sapUiFeedChunkCollapse');
		break;
		case ( this.getId() + '-all' ):
			// Click on sender
			this.showAllComments();
		break;
		case ( this.getId() + '-ActComment' ):
			// Click Add comment button
			if(!this.showCommentFeeder){
				this.showCommentFeeder = true;
				this.rerender();
			}
		break;
		case ( this.getId() + '-ActFlag' ):
			// Click flag button
			this.setFlagged(!this.getFlagged());
			this.fireToggleFlagged({flagged: this.getFlagged()});
		break;
		case ( this.getId() + '-ActFavorite' ):
			// Click favorite button
			this.setFavorite(!this.getFavorite());
			this.fireToggleFavorite({favorite: this.getFavorite()});
		break;
		case ( this.getId() + '-ActInspect' ):
			// Click inspect button
			this.fireInspect();
		break;
		case ( this.getId() + '-ActShare' ):
			// Click favorite button
			this.setShared(!this.getShared());
			this.fireToggleShared({shared: this.getShared()});
		break;
		default:
			//Reference
			if(sTargetId.search(this.getId() + '-Ref') != -1){
				this.fireReferenceClicked({text: jQuery(oEvent.target).text()});
			}

		break;
		}
	}
	
	oEvent.stopPropagation(); //to prevent comment chunks to propagate event to parentChunk
	
};

/**
 * show all comments
 * rerender comment section 
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.showAllComments = function(){
	
	this.allComments = true;
	
	var $commentSection = jQuery.sap.byId(this.getId() + " > section"); // use sap function instead of jQuery child selector because of escaping ID
	if ($commentSection.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		this.getRenderer().renderComments(rm, this);
		rm.flush($commentSection[0]);
		rm.destroy();
	}
	
	
};

/**
 * Handler for Comment feeder submit event
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.handleCommentFeederSubmit = function(oEvent){

	var oDate = new Date();
//	var sDate = String(oDate.getFullYear()) + String(oDate.getMonth()) + String(oDate.getDate()) + String(oDate.getHours()) + String(oDate.getMinutes()) + String(oDate.getSeconds());
	var sDate = String(oDate);

	var oNewComment = new sap.ui.ux3.FeedChunk(this.getId()+'-new-'+this.getComments().length, {
		text: oEvent.getParameter('text'),
		commentChunk: true,
	    deletionAllowed: true, 
		timestamp: sDate,
		sender: this.getFeederSender(),
		thumbnailSrc: this.getFeederThumbnailSrc()
	}); 
	
//	this.oCommentFeeder.setText('');
	this.insertComment(oNewComment, 0);
	this.fireCommentAdded({comment: oNewComment});

};

/**
 * Handler for tools menu button item selection
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.handleLtoolsButtonSelected = function(oEvent){

	if(oEvent.getParameter('itemId') == this.getId() + '-actDelete'){
		this.fireDeleted();	
	}else{
		// just forward event
		this.fireActionItemSelected(oEvent.mParameters);
	}

};
