/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.feed.CommentEntry.
jQuery.sap.declare("sap.ui.ux3.feed.CommentEntry");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.ux3.feed.BaseFeedEntry");

/**
 * Constructor for a new feed/CommentEntry.
 * 
 * It accepts one JSON-like object (object literal) as parameter <code>mSettings</code> that can define values for any property, 
 * aggregation, association or event.<br/> 
 * If for a control a specific name is ambiguous (a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order.<br/> 
 * To resolve ambiguities, add an "aggregation:", "association:" or "event:" prefix to the key in the JSON object.<br/>
 * Allowed values are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
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
 * Comment Entry
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
sap.ui.ux3.feed.CommentEntry = function (sId, mSettings) {
	jQuery.sap.log.warning("Using deprecated control 'feed/CommentEntry'.");
	sap.ui.ux3.feed.BaseFeedEntry.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.feed.CommentEntry.prototype = jQuery.sap.newObject(sap.ui.ux3.feed.BaseFeedEntry.prototype);

/*
 * Describe the sap.ui.ux3.feed.CommentEntry. 
 * Resulting metadata can be obtained via sap.ui.ux3.feed.CommentEntry.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.feed.CommentEntry", {

  // ---- object ----
  baseType : "sap.ui.ux3.feed.BaseFeedEntry",
  publicMethods : [],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {},
  
  aggregations : {},
  associations : {},
  events : {}

});	


// Start of sap/ui/ux3/feed/CommentEntry.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.ux3.feed.CommentEntry.prototype.init = function(){
//};

sap.ui.ux3.feed.CommentEntry.prototype.onclick = function (oEvent) {
	 if (oEvent.target && oEvent.target.className){

		//Delete this entry from the row repeater aggregation
		if (jQuery(oEvent.target).hasClass("sapUiCommentDeletable")){
			this.fireDeleted();
		}
	}
};