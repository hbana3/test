/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.feed.FeedEntry.
jQuery.sap.declare("sap.ui.ux3.feed.FeedEntry");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.ux3.feed.BaseFeedEntry");

/**
 * Constructor for a new feed/FeedEntry.
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
 * <li>numberOfSupport : int</li>
 * <li>rating : float</li>
 * <li>flagged : boolean</li>
 * <li>numberOfRatings : int</li>
 * <li>supported : boolean</li>
 * <li>ratingEnabled : boolean</li>
 * <li>supportEnabled : boolean</li>
 * <li>avatarSrc : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>comments : sap.ui.ux3.feed.CommentEntry</li>
 * <li>customActions : sap.ui.commons.MenuItem</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>commentAdded : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>toggleSupported : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>toggleFlag : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>rated : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.ux3.feed.BaseFeedEntry#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Feed Entry
 * @extends sap.ui.ux3.feed.BaseFeedEntry
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.1.1. 
 * new Feed control: sap.ui.ux3.FeedChunk
 */
sap.ui.ux3.feed.FeedEntry = function (sId, mSettings) {
	jQuery.sap.log.warning("Using deprecated control 'feed/FeedEntry'.");
	sap.ui.ux3.feed.BaseFeedEntry.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.feed.FeedEntry.prototype = jQuery.sap.newObject(sap.ui.ux3.feed.BaseFeedEntry.prototype);

/*
 * Describe the sap.ui.ux3.feed.FeedEntry. 
 * Resulting metadata can be obtained via sap.ui.ux3.feed.FeedEntry.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.feed.FeedEntry", {

  // ---- object ----
  baseType : "sap.ui.ux3.feed.BaseFeedEntry",
  publicMethods : [
    // properties 
    "getNumberOfSupport", "setNumberOfSupport", "getRating", "setRating", "getFlagged", "setFlagged", "getNumberOfRatings", "setNumberOfRatings", "getSupported", "setSupported", "getRatingEnabled", "setRatingEnabled", "getSupportEnabled", "setSupportEnabled", "getAvatarSrc", "setAvatarSrc", 
    // aggregations
    "getComments", "insertComment", "addComment", "removeComment", "removeAllComments", "indexOfComment", "destroyComments", "getCustomActions", "insertCustomAction", "addCustomAction", "removeCustomAction", "removeAllCustomActions", "indexOfCustomAction", "destroyCustomActions", 
    // associations
    
    // events
    "attachCommentAdded", "detachCommentAdded", "attachToggleSupported", "detachToggleSupported", "attachToggleFlag", "detachToggleFlag", "attachRated", "detachRated"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "numberOfSupport" : {name : "numberOfSupport", type : "int", group : "Misc", defaultValue : null},
    "rating" : {name : "rating", type : "float", group : "Misc", defaultValue : null},
    "flagged" : {name : "flagged", type : "boolean", group : "Misc", defaultValue : false},
    "numberOfRatings" : {name : "numberOfRatings", type : "int", group : "Misc", defaultValue : null},
    "supported" : {name : "supported", type : "boolean", group : "Misc", defaultValue : false},
    "ratingEnabled" : {name : "ratingEnabled", type : "boolean", group : "Appearance", defaultValue : true},
    "supportEnabled" : {name : "supportEnabled", type : "boolean", group : "Appearance", defaultValue : true},
    "avatarSrc" : {name : "avatarSrc", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {
    "comments" : {name : "comments", type : "sap.ui.ux3.feed.CommentEntry", multiple : true, singularName : "comment"}, 
    "customActions" : {name : "customActions", type : "sap.ui.commons.MenuItem", multiple : true, singularName : "customAction"}
  },
  associations : {},
  events : {
    "commentAdded" : "commentAdded", 
    "toggleSupported" : "toggleSupported", 
    "toggleFlag" : "toggleFlag", 
    "rated" : "rated"
  }

});	

sap.ui.ux3.feed.FeedEntry.M_EVENTS = {'commentAdded':'commentAdded','toggleSupported':'toggleSupported','toggleFlag':'toggleFlag','rated':'rated'};


/**
 * Getter for property <code>numberOfSupport</code>.
 * Global number of support
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>numberOfSupport</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedEntry.prototype.getNumberOfSupport = function() {
	return this.getProperty("numberOfSupport");
};

/**
 * Setter for property <code>numberOfSupport</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iNumberOfSupport  new value for property <code>numberOfSupport</code>
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.setNumberOfSupport = function(iNumberOfSupport) {
	this.setProperty("numberOfSupport", iNumberOfSupport);
	return this;
};


/**
 * Getter for property <code>rating</code>.
 * Global Rating value
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>rating</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedEntry.prototype.getRating = function() {
	return this.getProperty("rating");
};

/**
 * Setter for property <code>rating</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fRating  new value for property <code>rating</code>
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.setRating = function(fRating) {
	this.setProperty("rating", fRating);
	return this;
};


/**
 * Getter for property <code>flagged</code>.
 * Is the entry flagged.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>flagged</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedEntry.prototype.getFlagged = function() {
	return this.getProperty("flagged");
};

/**
 * Setter for property <code>flagged</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFlagged  new value for property <code>flagged</code>
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.setFlagged = function(bFlagged) {
	this.setProperty("flagged", bFlagged);
	return this;
};


/**
 * Getter for property <code>numberOfRatings</code>.
 * Global number of ratings
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>numberOfRatings</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedEntry.prototype.getNumberOfRatings = function() {
	return this.getProperty("numberOfRatings");
};

/**
 * Setter for property <code>numberOfRatings</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iNumberOfRatings  new value for property <code>numberOfRatings</code>
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.setNumberOfRatings = function(iNumberOfRatings) {
	this.setProperty("numberOfRatings", iNumberOfRatings);
	return this;
};


/**
 * Getter for property <code>supported</code>.
 * If set to true, the user supports this feed entry
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>supported</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedEntry.prototype.getSupported = function() {
	return this.getProperty("supported");
};

/**
 * Setter for property <code>supported</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSupported  new value for property <code>supported</code>
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.setSupported = function(bSupported) {
	this.setProperty("supported", bSupported);
	return this;
};


/**
 * Getter for property <code>ratingEnabled</code>.
 * Flag if rating for feed entry is enabled or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>ratingEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedEntry.prototype.getRatingEnabled = function() {
	return this.getProperty("ratingEnabled");
};

/**
 * Setter for property <code>ratingEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bRatingEnabled  new value for property <code>ratingEnabled</code>
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.setRatingEnabled = function(bRatingEnabled) {
	this.setProperty("ratingEnabled", bRatingEnabled);
	return this;
};


/**
 * Getter for property <code>supportEnabled</code>.
 * This flag rules if the support feature is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>supportEnabled</code>
 * @public
 * 
 */
sap.ui.ux3.feed.FeedEntry.prototype.getSupportEnabled = function() {
	return this.getProperty("supportEnabled");
};

/**
 * Setter for property <code>supportEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSupportEnabled  new value for property <code>supportEnabled</code>
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.setSupportEnabled = function(bSupportEnabled) {
	this.setProperty("supportEnabled", bSupportEnabled);
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
sap.ui.ux3.feed.FeedEntry.prototype.getAvatarSrc = function() {
	return this.getProperty("avatarSrc");
};

/**
 * Setter for property <code>avatarSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAvatarSrc  new value for property <code>avatarSrc</code>
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.setAvatarSrc = function(sAvatarSrc) {
	this.setProperty("avatarSrc", sAvatarSrc);
	return this;
};

	
/**
 * Getter for aggregation <code>comments</code>.<br/>
 * Comments on the entry
 * 
 * @return {sap.ui.ux3.feed.CommentEntry[]}
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.getComments = function() {
	return this.getAggregation("comments", []);
};


/**
 * Inserts a comment into the aggregation named <code>comments</code>.
 *
 * @param {sap.ui.ux3.feed.CommentEntry}
 *          oComment the comment to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the comment should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the comment is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the comment is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.insertComment = function(oComment, iIndex) {
	this.insertAggregation("comments", oComment, iIndex);
	return this;
};

/**
 * Adds some comment <code>oComment</code> 
 * to the aggregation named <code>comments</code>.
 *
 * @param {sap.ui.ux3.feed.CommentEntry}
 *            oComment the comment to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.feed.FeedEntry.prototype.addComment = function(oComment) {
	this.addAggregation("comments", oComment);
	return this;
};

/**
 * Removes an comment from the aggregation named <code>comments</code>.
 *
 * @param {int | string | sap.ui.ux3.feed.CommentEntry} vComment the comment to remove or its index or id
 * @return {sap.ui.ux3.feed.CommentEntry} the removed comment or null
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.removeComment = function(vComment) {
	return this.removeAggregation("comments", vComment);
};

/**
 * Removes all the controls in the aggregation named <code>comments</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.feed.CommentEntry[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.removeAllComments = function() {
	return this.removeAllAggregation("comments");
};

/**
 * Checks for the provided <code>sap.ui.ux3.feed.CommentEntry</code> in the aggregation named <code>comments</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.feed.CommentEntry}
 *            oComment the comment whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.indexOfComment = function(oComment) {
	return this.indexOfAggregation("comments", oComment);
};
	

/**
 * Destroys all the comments in the aggregation 
 * named <code>comments</code>.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.destroyComments = function() {
	this.destroyAggregation("comments");
	return this;
};

	
/**
 * Getter for aggregation <code>customActions</code>.<br/>
 * Custom actions to add to Action Menu
 * 
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.getCustomActions = function() {
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
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.insertCustomAction = function(oCustomAction, iIndex) {
	this.insertAggregation("customActions", oCustomAction, iIndex);
	return this;
};

/**
 * Adds some customAction <code>oCustomAction</code> 
 * to the aggregation named <code>customActions</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oCustomAction the customAction to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.feed.FeedEntry.prototype.addCustomAction = function(oCustomAction) {
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
sap.ui.ux3.feed.FeedEntry.prototype.removeCustomAction = function(vCustomAction) {
	return this.removeAggregation("customActions", vCustomAction);
};

/**
 * Removes all the controls in the aggregation named <code>customActions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.removeAllCustomActions = function() {
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
sap.ui.ux3.feed.FeedEntry.prototype.indexOfCustomAction = function(oCustomAction) {
	return this.indexOfAggregation("customActions", oCustomAction);
};
	

/**
 * Destroys all the customActions in the aggregation 
 * named <code>customActions</code>.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.destroyCustomActions = function() {
	this.destroyAggregation("customActions");
	return this;
};


/**
 * Raised when a comment is added to the entry 
 *
 * @name sap.ui.ux3.feed.FeedEntry#commentAdded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'commentAdded' event of this <code>sap.ui.ux3.feed.FeedEntry</code>.<br/>
 * Raised when a comment is added to the entry 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.attachCommentAdded = function(oData, fnFunction, oListener) {
	this.attachEvent("commentAdded", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'commentAdded' event of this <code>sap.ui.ux3.feed.FeedEntry</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.detachCommentAdded = function(fnFunction, oListener) {
	this.detachEvent("commentAdded", fnFunction, oListener);
	return this;	
};

/**
 * Fire event commentAdded to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.FeedEntry.prototype.fireCommentAdded = function(mArguments) {
	this.fireEvent("commentAdded", mArguments);
	return this;
};


/**
 * Raised when user click to support the entry 
 *
 * @name sap.ui.ux3.feed.FeedEntry#toggleSupported
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.supported is supported
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toggleSupported' event of this <code>sap.ui.ux3.feed.FeedEntry</code>.<br/>
 * Raised when user click to support the entry 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.attachToggleSupported = function(oData, fnFunction, oListener) {
	this.attachEvent("toggleSupported", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toggleSupported' event of this <code>sap.ui.ux3.feed.FeedEntry</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.detachToggleSupported = function(fnFunction, oListener) {
	this.detachEvent("toggleSupported", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toggleSupported to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'supported' of type <code>boolean</code> is supported</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.FeedEntry.prototype.fireToggleSupported = function(mArguments) {
	this.fireEvent("toggleSupported", mArguments);
	return this;
};


/**
 * Raised when user click to flag the entry. 
 *
 * @name sap.ui.ux3.feed.FeedEntry#toggleFlag
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.flagged flagged
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toggleFlag' event of this <code>sap.ui.ux3.feed.FeedEntry</code>.<br/>
 * Raised when user click to flag the entry. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.attachToggleFlag = function(oData, fnFunction, oListener) {
	this.attachEvent("toggleFlag", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toggleFlag' event of this <code>sap.ui.ux3.feed.FeedEntry</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.detachToggleFlag = function(fnFunction, oListener) {
	this.detachEvent("toggleFlag", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toggleFlag to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'flagged' of type <code>boolean</code> flagged</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.FeedEntry.prototype.fireToggleFlag = function(mArguments) {
	this.fireEvent("toggleFlag", mArguments);
	return this;
};


/**
 * raised when user rates the entry. 
 *
 * @name sap.ui.ux3.feed.FeedEntry#rated
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.ratingValue rating value
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'rated' event of this <code>sap.ui.ux3.feed.FeedEntry</code>.<br/>
 * raised when user rates the entry. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.attachRated = function(oData, fnFunction, oListener) {
	this.attachEvent("rated", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'rated' event of this <code>sap.ui.ux3.feed.FeedEntry</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.feed.FeedEntry.prototype.detachRated = function(fnFunction, oListener) {
	this.detachEvent("rated", fnFunction, oListener);
	return this;	
};

/**
 * Fire event rated to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'ratingValue' of type <code>int</code> rating value</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.feed.FeedEntry} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.feed.FeedEntry.prototype.fireRated = function(mArguments) {
	this.fireEvent("rated", mArguments);
	return this;
};


// Start of sap/ui/ux3/feed/FeedEntry.js
///**
// * This file defines behavior for the control,
// */

sap.ui.ux3.feed.FeedEntry.NUMBER_OF_COMMENTS_DISPLAY = 2;

/**
 * initialize FeedEntry
 * @private
 */
sap.ui.ux3.feed.FeedEntry.prototype.init = function(){

	var sPrefixIcon = jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/feed/";

	var sIconSelected =  	sPrefixIcon + "relevantSelected.png";
	var sIconUnselected = 	sPrefixIcon + "relevantUnselected.png";
	var sIconHovered = 		sPrefixIcon + "relevantHovered.png";

	//Rating indicator used for Relevant rating
	if(this.getRatingEnabled()){
		this.oRatingIndicator = new sap.ui.commons.RatingIndicator( this.getId() + "_rating",
				{iconSelected:sIconSelected, iconUnselected:sIconUnselected, iconHovered:sIconHovered});
		this.oRatingIndicator.setValue(this.getRating());
		this.oRatingIndicator.attachChange(this.addRating, this);
		this.oRatingIndicator.setParent(this);
	}

	//Feeder used to enter new comments
	this.oFeederComment = new sap.ui.ux3.feed.Feeder(this.getId() + "-feederComment",{mode:sap.ui.ux3.feed.FeederMode.FeederComment});
	this.oFeederComment.attachSubmitPress(this.addNewComment, this);
	this.oFeederComment.setParent(this);

	this.oResourceBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	if(this.getSupportEnabled()){
		this.oSupportLabel = new sap.ui.commons.Label(this.getId()+"_supportLabel");
	}

	//RowRepeater used to diplay comments
	this.oComments = new sap.ui.commons.RowRepeater(this.getId() + "_comments",{ design:sap.ui.commons.RowRepeaterDesign.BareShell, numberOfRows:sap.ui.ux3.feed.FeedEntry.NUMBER_OF_COMMENTS_DISPLAY});
	this.oComments.setParent(this);

	//Are the comments expanded? (Expanded: see all comments, collapsed: see only sap.ui.ux3.feed.FeedEntry.NUMBER_OF_COMMENTS_DISPLAY first comments)
	this.bCommentsExpanded = true;
};


/**
 * Changes the Comments title, based on the Expand status
 *
 * @private
 */
sap.ui.ux3.feed.FeedEntry.prototype.updateCommentsTitle = function(){

	var oFeedEntryExpand 	= jQuery.sap.byId(this.getId()+"-CommentExp");
	var oFeedEntryLabel 	= jQuery.sap.byId(this.getId()+"-CommentLabel");

	var iNbrComments = this.getComments().length;

	if(!oFeedEntryExpand || !oFeedEntryLabel){
		return;
	}

	if(iNbrComments==0){
		//No comments, no comment title
		oFeedEntryExpand.hide();
		oFeedEntryLabel.hide();
	}
	else if(this.bCommentsExpanded){
		//Comments are expanded
		oFeedEntryExpand.hide();
		var txtName = "FEEDENTRY_LABEL_EXP_COMMENT";
		if(iNbrComments>1){txtName += "S"}
		oFeedEntryLabel.text(this.oResourceBundle.getText(txtName).replace("{0}", iNbrComments));
		oFeedEntryLabel.show();
	}
	else{
		oFeedEntryExpand.text(this.oResourceBundle.getText("FEEDENTRY_LABEL_COL_COMMENTS").replace("{0}", iNbrComments));
		oFeedEntryExpand.show();
		oFeedEntryLabel.hide();
	}

};

sap.ui.ux3.feed.FeedEntry.prototype.onclick = function (oEvent) {
	 if (oEvent.target && oEvent.target.className){

		//Support this feed entry
		if ( jQuery(oEvent.target).hasClass("sapUiFeedSupport") ){
			this.doToggleSupported();
		}
		//Unsupport this feed entry
		else if ( jQuery(oEvent.target).hasClass("sapUiFeedUnsupport") ){
			this.doToggleSupported();
		}
		//(Un)Flag this feed entry
		else if ( jQuery(oEvent.target).hasClass("sapUiFeedFlag") ){
			this.doToggleFlag();
		}
		//Delete this entry from the row repeater aggregation
		else if (jQuery(oEvent.target).hasClass("sapUiEntryDeletable")){
			this.fireDeleted();
		}

		else if (jQuery(oEvent.target).hasClass("sapUiExpandComments")){

			if(!this.bCommentsExpanded){
				//Expand comments
				this.oComments.setNumberOfRows(null);
				this.bCommentsExpanded = true;
			}
			else{
				//Collapse comments
				this.oComments.setNumberOfRows(sap.ui.ux3.feed.FeedEntry.NUMBER_OF_COMMENTS_DISPLAY);
				this.bCommentsExpanded = false;
			}

			//Comments title needs to be updated
			this.updateCommentsTitle();
		}

	}
}

/**
 * Adds a new comment to FeedEntry
 *
 * @param oEvent The event object
 *
 * @private
 */;
sap.ui.ux3.feed.FeedEntry.prototype.addNewComment = function (oEvent){
	//Get comment text
	var textInput = oEvent.getParameters().content;

	//Create the new feed entry
	var oCommentEntry = new sap.ui.ux3.feed.CommentEntry();
	//TODO: "You" should come from somewhere else ??
	oCommentEntry.setText("<thing id='id1' class='p12e_prep'>"+ this.oResourceBundle.getText("FEED_YOU") +"</thing>:" + textInput);

	oCommentEntry.setLogoSrc(this.getAvatarSrc());

	oCommentEntry.setLastChanged(sap.ui.ux3.feed.BaseFeedEntry.toISOString(new Date()));

	//Insert the entry at first index
	this.insertComment(oCommentEntry,0);
	this.fireCommentAdded();

	//Clear the feeder
	this.oFeederComment.setText("");
};

/**
 * toggle flag
 * @private
 */
sap.ui.ux3.feed.FeedEntry.prototype.doToggleFlag = function (){
	this.getFlagged()?this.setFlagged(false) : this.setFlagged(true);
	this.fireToggleFlag({flagged: this.getFlagged()});
};

/**
 * toggle Support
 * @private
 */
sap.ui.ux3.feed.FeedEntry.prototype.doToggleSupported = function (){

	this.setSupported(!this.getSupported());

	if ( this.getSupported() ){
		this.oSupportLabel.setText(this.oResourceBundle.getText("UNSUPPORT"));
		this.setNumberOfSupport(this.getNumberOfSupport() + 1);
	}else{
		this.oSupportLabel.setText(this.oResourceBundle.getText("SUPPORT"));
		this.setNumberOfSupport(this.getNumberOfSupport() - 1);
	}

	this.fireToggleSupported({supported: this.getSupported()});
};

/**
 * Handle change of RatingIndicator
 * @private
 */
sap.ui.ux3.feed.FeedEntry.prototype.addRating = function (oEvent){
	this.setNumberOfRatings(this.getNumberOfRatings()+1);
	this.fireRated({ratingValue: this.oRatingIndicator.getValue()});
};

/**************************************************************************
* Overwriting Comments aggregation functions to dispatch to rowRepeater
* @public
**************************************************************************/
sap.ui.ux3.feed.FeedEntry.prototype.getComments = function() {
	return this.oComments.getRows();
};

sap.ui.ux3.feed.FeedEntry.prototype.insertComment = function(oComment, iIndex) {
	this.oComments.insertRow(oComment, iIndex);
	oComment.attachEvent("deleted", this.handleCommentEntryDelete, this);

	var tmp1 = this.getComments().length;

	if(this.bCommentsExpanded && this.getComments().length > sap.ui.ux3.feed.FeedEntry.NUMBER_OF_COMMENTS_DISPLAY){
		this.bCommentsExpanded = false;
	}

	this.updateCommentsTitle();
	return this;
};

sap.ui.ux3.feed.FeedEntry.prototype.addComment = function(oComment) {
	this.oComments.addRow(oComment);
	oComment.attachEvent("deleted", this.handleCommentEntryDelete, this);

	if(this.bCommentsExpanded && this.getComments().length > sap.ui.ux3.feed.FeedEntry.NUMBER_OF_COMMENTS_DISPLAY){
		this.bCommentsExpanded = false;
	}

	this.updateCommentsTitle();

	return this;
};

sap.ui.ux3.feed.FeedEntry.prototype.removeComment = function(vElement) {
	var r = this.oComments.removeRow(vElement);

	if(this.getComments().length <= sap.ui.ux3.feed.FeedEntry.NUMBER_OF_COMMENTS_DISPLAY){
		this.bCommentsExpanded = true;
	}

	this.updateCommentsTitle();
	return r;
};

sap.ui.ux3.feed.FeedEntry.prototype.removeAllComments = function() {
	this.bCommentsExpanded = true;
	this.updateCommentsTitle();
	return this.oComments.removeAllRows();
};

sap.ui.ux3.feed.FeedEntry.prototype.indexOfComment = function(oComment) {
	return this.oComments.indexOfRow(oComment);
};

sap.ui.ux3.feed.FeedEntry.prototype.destroyComments = function() {
	this.bCommentsExpanded = true;
	this.updateCommentsTitle();
	this.oComments.destroyRows();
	return this;
};

/**
 * Event handler for deleting comment entries
 * @private
 */
sap.ui.ux3.feed.FeedEntry.prototype.handleCommentEntryDelete = function(oEvent) {
	this.oComments.removeRow(oEvent.oSource);
};

/**************************************************************************
* Overwriting RatingIndicator setter to forward value
* @public
**************************************************************************/
sap.ui.ux3.feed.FeedEntry.prototype.setRating = function(fRating) {
	this.setProperty("rating", fRating);
	this.oRatingIndicator.setValue(fRating);
	return this;
};