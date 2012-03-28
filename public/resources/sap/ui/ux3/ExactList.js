/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ExactList.
jQuery.sap.declare("sap.ui.ux3.ExactList");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ExactList.
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
 * <li>showClose : boolean</li>
 * <li>topTitle : string</li>
 * <li>topHeight : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>subLists : sap.ui.ux3.ExactList</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>data : sap.ui.ux3.ExactAttribute</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>attributeSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>widthChanged : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Internal sub-control of the ExactBrowser. The control is not intended to be used stand alone. For this purpose, the ExactBrowser control can be used.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.ExactList = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.ExactList.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.ExactList. 
 * Resulting metadata can be obtained via sap.ui.ux3.ExactList.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.ExactList", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getShowClose", "setShowClose", "getTopTitle", "setTopTitle", "getTopHeight", "setTopHeight", 
    // aggregations
    "getSubLists", "insertSubList", "addSubList", "removeSubList", "removeAllSubLists", "indexOfSubList", "destroySubLists", 
    // associations
    "getData", "setData", 
    // events
    "attachAttributeSelected", "detachAttributeSelected", "attachWidthChanged", "detachWidthChanged"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "showClose" : {name : "showClose", type : "boolean", group : "Misc", defaultValue : false},
    "topTitle" : {name : "topTitle", type : "string", group : "Misc", defaultValue : null},
    "topHeight" : {name : "topHeight", type : "int", group : "Appearance", defaultValue : 290}
  },
  
  aggregations : {
    "subLists" : {name : "subLists", type : "sap.ui.ux3.ExactList", multiple : true, singularName : "subList"}
  },
  associations : {
    "data" : {name : "data", type : "sap.ui.ux3.ExactAttribute", multiple : false}
  },
  events : {
    "attributeSelected" : "attributeSelected", 
    "widthChanged" : "widthChanged"
  }

});	

sap.ui.ux3.ExactList.M_EVENTS = {'attributeSelected':'attributeSelected','widthChanged':'widthChanged'};


/**
 * Getter for property <code>showClose</code>.
 * Defines whether the close icon shall be displayed in the header.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showClose</code>
 * @public
 * 
 */
sap.ui.ux3.ExactList.prototype.getShowClose = function() {
	return this.getProperty("showClose");
};

/**
 * Setter for property <code>showClose</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowClose  new value for property <code>showClose</code>
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.setShowClose = function(bShowClose) {
	this.setProperty("showClose", bShowClose);
	return this;
};


/**
 * Getter for property <code>topTitle</code>.
 * The title of this list is the top of the list hierarchy.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>topTitle</code>
 * @public
 * 
 */
sap.ui.ux3.ExactList.prototype.getTopTitle = function() {
	return this.getProperty("topTitle");
};

/**
 * Setter for property <code>topTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTopTitle  new value for property <code>topTitle</code>
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.setTopTitle = function(sTopTitle) {
	this.setProperty("topTitle", sTopTitle);
	return this;
};


/**
 * Getter for property <code>topHeight</code>.
 * The height in px if this list is the top of the list hierarchy.
 *
 * Default value is <code>290</code>
 *
 * @return {int} the value of property <code>topHeight</code>
 * @public
 * 
 */
sap.ui.ux3.ExactList.prototype.getTopHeight = function() {
	return this.getProperty("topHeight");
};

/**
 * Setter for property <code>topHeight</code>.
 *
 * Default value is <code>290</code> 
 *
 * @param {int} iTopHeight  new value for property <code>topHeight</code>
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.setTopHeight = function(iTopHeight) {
	this.setProperty("topHeight", iTopHeight);
	return this;
};

	
/**
 * Getter for aggregation <code>subLists</code>.<br/>
 * The sub-ExactLists of this list. This aggregation must not be maintained from outside.
 * The control automatically takes care to fill this aggregation according to the given ExactAttribute.
 * 
 * @return {sap.ui.ux3.ExactList[]}
 * @public
 */
sap.ui.ux3.ExactList.prototype.getSubLists = function() {
	return this.getAggregation("subLists", []);
};


/**
 * Inserts a subList into the aggregation named <code>subLists</code>.
 *
 * @param {sap.ui.ux3.ExactList}
 *          oSubList the subList to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the subList should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the subList is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the subList is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.insertSubList = function(oSubList, iIndex) {
	this.insertAggregation("subLists", oSubList, iIndex);
	return this;
};

/**
 * Adds some subList <code>oSubList</code> 
 * to the aggregation named <code>subLists</code>.
 *
 * @param {sap.ui.ux3.ExactList}
 *            oSubList the subList to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ExactList.prototype.addSubList = function(oSubList) {
	this.addAggregation("subLists", oSubList);
	return this;
};

/**
 * Removes an subList from the aggregation named <code>subLists</code>.
 *
 * @param {int | string | sap.ui.ux3.ExactList} vSubList the subList to remove or its index or id
 * @return {sap.ui.ux3.ExactList} the removed subList or null
 * @public
 */
sap.ui.ux3.ExactList.prototype.removeSubList = function(vSubList) {
	return this.removeAggregation("subLists", vSubList);
};

/**
 * Removes all the controls in the aggregation named <code>subLists</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactList[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ExactList.prototype.removeAllSubLists = function() {
	return this.removeAllAggregation("subLists");
};

/**
 * Checks for the provided <code>sap.ui.ux3.ExactList</code> in the aggregation named <code>subLists</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ExactList}
 *            oSubList the subList whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.ux3.ExactList.prototype.indexOfSubList = function(oSubList) {
	return this.indexOfAggregation("subLists", oSubList);
};
	

/**
 * Destroys all the subLists in the aggregation 
 * named <code>subLists</code>.
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.destroySubLists = function() {
	this.destroyAggregation("subLists");
	return this;
};


/**
 * The associated ExactAttribute
 *
 * @return {string} Id of the element which is the current target of the <code>data</code> association, or null
 * @public
 */
sap.ui.ux3.ExactList.prototype.getData = function() {
	return this.getAssociation("data", null);
};

/**
 * The associated ExactAttribute
 *
 * @param {string | sap.ui.ux3.ExactAttribute} vData 
 *    Id of an element which becomes the new target of this <code>data</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.setData = function(vData) {
	this.setAssociation("data", vData);
	return this;
};


	
/**
 * Event which is fired when an attribute is selected/unselected 
 *
 * @name sap.ui.ux3.ExactList#attributeSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The attribute which was selected/unselected recently
 * @param {object} oControlEvent.getParameters.allAttributes Array of all ExactAttributes
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'attributeSelected' event of this <code>sap.ui.ux3.ExactList</code>.<br/>
 * Event which is fired when an attribute is selected/unselected 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.attachAttributeSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("attributeSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'attributeSelected' event of this <code>sap.ui.ux3.ExactList</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.detachAttributeSelected = function(fnFunction, oListener) {
	this.detachEvent("attributeSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event attributeSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'attribute' of type <code>sap.ui.ux3.ExactAttribute</code> The attribute which was selected/unselected recently</li>
 * <li>'allAttributes' of type <code>object</code> Array of all ExactAttributes</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ExactList.prototype.fireAttributeSelected = function(mArguments) {
	this.fireEvent("attributeSelected", mArguments);
	return this;
};


/**
 * Event which is fired on a top list when the list is resized 
 *
 * @name sap.ui.ux3.ExactList#widthChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.width The new list width
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'widthChanged' event of this <code>sap.ui.ux3.ExactList</code>.<br/>
 * Event which is fired on a top list when the list is resized 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.attachWidthChanged = function(oData, fnFunction, oListener) {
	this.attachEvent("widthChanged", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'widthChanged' event of this <code>sap.ui.ux3.ExactList</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactList.prototype.detachWidthChanged = function(fnFunction, oListener) {
	this.detachEvent("widthChanged", fnFunction, oListener);
	return this;	
};

/**
 * Fire event widthChanged to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'width' of type <code>string</code> The new list width</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ExactList.prototype.fireWidthChanged = function(mArguments) {
	this.fireEvent("widthChanged", mArguments);
	return this;
};


// Start of sap/ui/ux3/ExactList.js
(function() {

jQuery.sap.require("sap.ui.commons.ListBox");
jQuery.sap.require("sap.ui.core.Popup");

/**
 * Does the setup when the control is created.
 * @private
 */
sap.ui.ux3.ExactList.prototype.init = function(){
	var that = this;
	this._bCollapsed = false; //Indicates whether the control is horizontally collapsed
	this._bIsFirstRendering = true; //Set to false when the first rendering was done (used to animate the first opening)
	
	this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	
	//Create the used ListBox control
	this._lb = new sap.ui.commons.ListBox(this.getId()+"-lb", {allowMultiSelect:true /*TODO: set to false if selection mode on attribute to single selection*/, displayIcons:true});
	this.addAggregation("controls", this._lb);
	//Change the multiselect behavior (click instead of CTRL+Click)
	var orig_handleUserActivation = this._lb._handleUserActivation;
	this._lb._handleUserActivation = function(oEvent){
		oEvent.metaKey = true;
		orig_handleUserActivation.apply(this, [oEvent]);
	};
	//Listen to Listbox eventing via delegate
	this._lb.addDelegate({
		onclick: function(oEvent){
			that.onclick(oEvent);
		},
		onAfterRendering: function(){
			var items = that._lb.getItems();
			for(var i=0; i<items.length; i++){
				var oItem = items[i];
				var oExactAttr = sap.ui.getCore().byId(oItem.getKey());
				if(that._isTop() || !oExactAttr || !oExactAttr.getShowSubAttributesIndicator_Computed()){
					jQuery.sap.byId(that._lb.getId()+"-I"+i).addClass("sapUiUx3ExactLstNoIco");
				}
			}
			
			var sPos = sap.ui.getCore().getConfiguration().getRTL() ? "left" : "right";
			jQuery(".sapUiLbxITxt", that._lb.getDomRef()).css("margin-"+sPos, 20+sap.ui.ux3.ExactList.__oScollbarSize.width+"px");
			jQuery(".sapUiLbxIIco", that._lb.getDomRef()).css(sPos, 5+sap.ui.ux3.ExactList.__oScollbarSize.width+"px");
			
			jQuery(that._lb.getDomRef()).attr("tabindex", "-1");
			
			that._lb.oItemNavigation.iActiveTabIndex = -1; //Do not set the tabindex to 0 on the focused list item
		}
	});
	
	//Attach to the ListBox select event
	this._lb.attachSelect(function(oEvent){
		onSelect(that, oEvent);
	});
	
	this._closeHandle = jQuery.proxy(this.onForceVerticalClose, this);
};


/**
 * Does all the cleanup when the control is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.ux3.ExactList.prototype.exit = function() {
	clearChangeListener(this);
	this._lb = null; //Destroy is called when the aggregation "controls" is cleaned up
	this._closeHandle = null;
	this._scrollCheckHandle = null;
	this._rb = null;
};


/**
 * @see sap.ui.core.Element.prototype.getFocusDomRef
 * @private
 */
sap.ui.ux3.ExactList.prototype.getFocusDomRef = function() {
	return this._bCollapsed ? jQuery.sap.byId(this.getId()+"-head") : this._lb.getFocusDomRef();
};


/**
 * Called when the rendering is complete.
 * @private
 */
sap.ui.ux3.ExactList.prototype.onAfterRendering = function() {
	this._bRTL = sap.ui.getCore().getConfiguration().getRTL();
	var that = this;
	
	if(this._isTop()){
		//No Open Animation when the control is the top list
		this._bIsFirstRendering = false;
		
		//Register listener on content overflow for scrollbar
		this._iScrollWidthDiff = -1;
		this.onCheckScrollbar();
		jQuery.sap.byId(this.getId()+"-lst").css("bottom", sap.ui.ux3.ExactList.__oScollbarSize.height+"px");
	}
	
	//Adapt the width after rendering and remember the current width
	if(!this._iCurrentWidth){
		this._iCurrentWidth = jQuery.sap.byId(this.getId()+"-lst").width();
		
	}
	setWidth(this, this._iCurrentWidth);
	
	//Adapt the scrolling behavior and show the vertical list expander if necessary
	if(adaptScollBehavior(this)){
		jQuery.sap.byId(this.getId() + "-lst").addClass("sapUiUx3ExactLstLstExp");
		
		if(!this._oPopup){
			var fPopupEventHandle = function(oEvent){
				that._handleEvent(oEvent);
			};
			
			this._oPopup = new sap.ui.core.Popup(null, false, false, false);
			
			this._oPopup._fixPositioning = function(oPosition, bRtl) {
				//TODO Check positioning of popup here
				sap.ui.core.Popup.prototype._fixPositioning.apply(this, arguments);
				if(bRtl){
					var $Ref = this._$();
					var $Of = jQuery(oPosition.of);
					$Ref.css("right", (jQuery(window).width() - $Ref.outerWidth() - $Of.offset().left) + "px");
				}
			};
			
			this._oPopup.open = function(){
				var jListContRef = jQuery.sap.byId(that.getId() + "-lst");
				animate(jListContRef, false, -1, function(jRef){
					//Switch the expand icon
					jListContRef.addClass("sapUiUx3ExactLstExpanded");
					jQuery.sap.byId(that.getId()+"-exp").html(sap.ui.ux3.ExactListRenderer.getExpanderSymbol(true, false));
					//Remember the current height for closing later and set the height explicitly
					that.__sOldHeight = jListContRef.css("height");
					jListContRef.css("height", that.__sOldHeight);
					//Calculate the target height
					var jListRef = jQuery(that._lb.getDomRef());
					var iListHeight = jListRef[0].scrollHeight + jQuery.sap.byId(that.getId() + "-exp").height() + jListRef.outerHeight() - jListRef.height() + 1;
					var iMaxListHeight = jQuery(window).height() - parseInt(jListRef.offset().top) + jQuery(window).scrollTop();
					var iTargetHeight = Math.min(iListHeight, iMaxListHeight);
					//Set the list as popup content and open the popup
					that._oPopup.setContent(jListContRef[0]);
					var oPos = jListContRef.position();
					sap.ui.core.Popup.prototype.open.apply(that._oPopup,
							[0, sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.BeginTop, jQuery(that.getDomRef())[0], oPos.left+" "+oPos.top]);
					that._bPopupOpened = true;
					return iTargetHeight;
				}, function(jRef){
					//Adapt the scroll behavior and set the focus
					adaptScollBehavior(that);
					that.getFocusDomRef().focus();
					//Bind the event handlers for closing and control events
					jQuery.sap.bindAnyEvent(that._closeHandle);
					jRef.bind(jQuery.sap.ControlEvents.join(" "), fPopupEventHandle);
				});
			};
			this._oPopup.close = function(bSkipFocus){
				var jListContRef = jQuery.sap.byId(that.getId() + "-lst");
				animate(jListContRef, false, that.__sOldHeight, function(jRef){
					//Unbind the event handlers for closing and control events
					jQuery.sap.unbindAnyEvent(that._closeHandle);
					jRef.unbind(jQuery.sap.ControlEvents.join(" "), fPopupEventHandle);
					//Switch the expand icon
					jListContRef.removeClass("sapUiUx3ExactLstExpanded");
					jQuery.sap.byId(that.getId()+"-exp").html(sap.ui.ux3.ExactListRenderer.getExpanderSymbol(false, false));
				}, function(jRef){
					//Move the list to its original position
					jRef.detach();
					jRef.attr("style", "width:"+that._iCurrentWidth+"px;");
					jQuery(that.getDomRef()).prepend(jRef);
					//Cleanup and close the popup
					that._oPopup.setContent(null);
					that._bPopupOpened = undefined;
					that.__sOldHeight = null;
					if(that._isTop()){
						jRef.css("bottom", sap.ui.ux3.ExactList.__oScollbarSize.height+"px");
					}
					adaptScollBehavior(that);
					sap.ui.core.Popup.prototype.close.apply(that._oPopup, [0]);
					if(!bSkipFocus){
						that.getFocusDomRef().focus();
					}
				});
			};
		}
	}
	
	//Init the header text
	setHeaderText(this);
	
	//Open Animation
	if(this._bIsFirstRendering){
		this._bIsFirstRendering = false;
		animate(jQuery(this.getDomRef()), true, 0, function(jRef) {
			jRef.css("overflow", "hidden").css("width", "0px");
			return jRef[0].scrollWidth;
		}, function(jRef) {
			jRef.css("overflow", "").css("width", "");
		});
	}
};


//********* EVENTING *********


/**
 * Called when the control gets the focus.
 * @private
 */
sap.ui.ux3.ExactList.prototype.onfocusin = function(oEvent) {
	if(oEvent.target === this.getDomRef()){
		this.getFocusDomRef().focus();
	}
	if(this._isTop()){
		jQuery(this.getDomRef()).attr("tabindex", "-1");
	}
};


/**
 * Called when the control loses the focus.
 * @private
 */
sap.ui.ux3.ExactList.prototype.onfocusout = function(oEvent) {
	if(this._isTop()){
		jQuery(this.getDomRef()).attr("tabindex", "0");
	}
};


/**
 * Called when the control is clicked.
 * @private
 */
sap.ui.ux3.ExactList.prototype.onclick = function(oEvent) {
	if(jQuery(oEvent.target).attr("id") == this.getId() + "-exp"){
		//Toggle the vertically Collapse state
		toggleVerticalCollapseState(this);
		this.focus();
	}else if(jQuery(oEvent.target).attr("id") == this.getId() + "-close"){
		//Close this list
		close(this);
	}else if(jQuery(oEvent.target).attr("id") == this.getId() + "-hide"){
		//Toggle the horizontally Collapse state
		toggleHorizontalCollapseState(this);
	}else if(!jQuery.sap.containsOrEquals(jQuery.sap.byId(this.getId()+"-cntnt")[0], oEvent.target)){
		this.focus();
	}
};


/**
 * Called when a key is pressed.
 * @private
 */
sap.ui.ux3.ExactList.prototype.onkeydown = function(oEvent) {
	switch(oEvent.keyCode){
		case jQuery.sap.KeyCodes.DELETE:
			//If close functionality is active -> Close the control and deselect the corresponding attribute
			if(!this._isTop() && this.getShowClose()){
				close(this);
				oEvent.preventDefault();
				oEvent.stopPropagation();
			}
			break;
			
		case jQuery.sap.KeyCodes.NUMPAD_MINUS:
			if(!!oEvent.metaKey){ //NUMPAD_MINUS + CTRL: Collapse list vertically
				var jListContRef = jQuery.sap.byId(this.getId() + "-lst");
				if(jListContRef.hasClass("sapUiUx3ExactLstExpanded") && jQuery.sap.byId(this.getId() + "-exp").is(":visible")){
					toggleVerticalCollapseState(this);
				}
				oEvent.preventDefault();
				oEvent.stopPropagation();
			}else if(oEvent.shiftKey){ //NUMPAD_MINUS + SHIFT: Make width smaller
				if(!this._bCollapsed){
					setWidth(this, this._iCurrentWidth - 10);
					oEvent.preventDefault();
					oEvent.stopPropagation();
				}
			}else if(!this._bCollapsed){ //NUMPAD_MINUS: Collapse list horizontally
				if(!this._isTop()){
					toggleHorizontalCollapseState(this);
					oEvent.preventDefault();
					oEvent.stopPropagation();
				}
			}
			break;

		case jQuery.sap.KeyCodes.NUMPAD_PLUS:
			if(!!oEvent.metaKey){ //NUMPAD_PLUS + CTRL: Expand list vertically
				var jListContRef = jQuery.sap.byId(this.getId() + "-lst");
				if(!jListContRef.hasClass("sapUiUx3ExactLstExpanded") && jQuery.sap.byId(this.getId() + "-exp").is(":visible")){
					toggleVerticalCollapseState(this);
				}
				oEvent.preventDefault();
				oEvent.stopPropagation();
			}else if(oEvent.shiftKey){ //NUMPAD_PLUS + SHIFT: Make width larger
				if(!this._bCollapsed){
					setWidth(this, this._iCurrentWidth + 10);
					oEvent.preventDefault();
					oEvent.stopPropagation();
				}
			}else if(this._bCollapsed){ //NUMPAD_PLUS: Expand list horizontally
				if(!this._isTop()){
					toggleHorizontalCollapseState(this);
					oEvent.preventDefault();
					oEvent.stopPropagation();
				}
			}
			break;
			
		case jQuery.sap.KeyCodes.TAB:
			//Handle Tabbing
			if(jQuery.sap.containsOrEquals(this.getFocusDomRef(), oEvent.target)){ //skip Tabs on sub controls
				if(oEvent.shiftKey){
					if(!this._isTop()){
						this.getParent()._handleTab(this, oEvent);
					}
				}else{
					if(this.getSubLists().length == 0 || this._bCollapsed){
						if(!this._isTop()){
							this.getParent()._handleTab(this, oEvent);
						}
					}else{
						this.getSubLists()[0].focus();
						oEvent.preventDefault();
						oEvent.stopPropagation();
					}
				}
			}
			break;
	}
};


/**
 * Called when mousedown event appears. -> Starting point for the resizing
 * @private
 */
sap.ui.ux3.ExactList.prototype.onmousedown = function(oEvent) {
	if(oEvent.target.id === this.getId()+"-rsz"){
		jQuery(document.body).append(
				"<div id=\"" + this.getId() + "-ghost\" class=\"sapUiUx3ExactLstRSzGhost\" style =\" z-index:"+sap.ui.core.Popup.getNextZIndex()+"\" ></div>");
		
		// Fix for IE text selection while dragging
		jQuery(document.body).bind("selectstart", onStartSelect);
		
		jQuery.sap.byId(this.getId() + "-ghost").bind("mouseup", jQuery.proxy(onRelease, this)).bind("mousemove", jQuery.proxy(onMove, this));
		
		this._iStartDragX = oEvent.pageX;
		this._iStartWidth  = jQuery.sap.byId(this.getId()+"-lst").width();
		
		jQuery.sap.byId(this.getId()+"-rsz").addClass("sapUiUx3ExactLstRSzDrag");
	}
};


/**
 * Called when the vertically Collapse State should be closed immediately (e.g. outer event)
 * @private
 */
sap.ui.ux3.ExactList.prototype.onForceVerticalClose = function(oEvent) {
	if(oEvent.type == "mousedown" ||
			oEvent.type == "click" ||
			oEvent.type == "dblclick" ||
			oEvent.type == "focusin" ||
			oEvent.type == "focusout" ||
			oEvent.type == "keydown" ||
			oEvent.type == "keypress" ||
			oEvent.type == "keyup" ||
			oEvent.type == "mousedown" ||
			oEvent.type == "mouseup") {
		var jRef = jQuery.sap.byId(this.getId() + "-lst");
		if(!jQuery.sap.containsOrEquals(jRef[0], oEvent.target) || oEvent.target.tagName=="BODY"){
			if(jRef.hasClass("sapUiUx3ExactLstExpanded")){
				this._oPopup.close(true);
			}
		}
	}
};


/**
 * Called periodicly to check whether the content scrollbar must be show or hidden
 * @private
 */
sap.ui.ux3.ExactList.prototype.onCheckScrollbar = function(oEvent) {
	this._scrollCheckTimer = null;

	var jContentArea = jQuery.sap.byId(this.getId()+"-cntnt");
	var oContentArea = jContentArea[0];
	if(oContentArea){
		var iNewDiff = oContentArea.scrollWidth - oContentArea.clientWidth;
		if(this._iScrollWidthDiff != iNewDiff){
			this._iScrollWidthDiff = iNewDiff;
			if(iNewDiff <= 0){
				//hidden scrollbar
				jContentArea.css({"overflow-x": "hidden", "bottom": sap.ui.ux3.ExactList.__oScollbarSize.height+"px"});
			}else{
				//visible scrollbar
				jContentArea.css({"overflow-x": "scroll", "bottom": "0px"});
			}
		}
		this._scrollCheckTimer = jQuery.sap.delayedCall(300, this, this.onCheckScrollbar);
	}
};


//********* OVERRIDDEN API FUNCTIONS *********


sap.ui.ux3.ExactList.prototype.setData = function(vData) {
	if (vData != null && typeof(vData) != "string") {
		vData = vData.getId();
	}
	
	if(vData) {
		//Set the associated ExactAttribute
		this.setAssociation("data", vData);
		vData = this._getAtt();
		this._lb.destroyItems();
		var aAtts = vData.getAttributesInternal(true);
		var aSelectedKeys = [];
		var aLists = [];
		//Update the used ListBox accordingly and create child exact lists
		for(var i=0; i<aAtts.length; i++){
			var oItem = new sap.ui.core.ListItem({text:aAtts[i].getText(), key: aAtts[i].getId()});
			this._lb.addItem(oItem);
			if(aAtts[i].getSelected()){
				var oList = createExactListForAttribute(this, aAtts[i]);
				if(oList){
					aLists.push(oList);
				}
				aSelectedKeys.push(oItem.getKey());
			}
		}
		this._lb.setSelectedKeys(aSelectedKeys);
		
		//Update child lists
		var aOldChildren = this.getSubLists();
		for(var i=0; i<aOldChildren.length; i++){
			var idx = jQuery.inArray(aOldChildren[i], aLists);
			if(idx >= 0){
				//List is already a sublist -> remove it from the array of lists to add
				aLists.splice(idx, 1);
			}else{
				//List does not exist anymore in the array of lists to add -> destroy it (also removes it from the aggregation)
				aOldChildren[i].destroy();
			}
		}
		//Append all newly created lists
		for(var i=0; i<aLists.length; i++){
			this.addSubList(aLists[i]);
		}
		
		/* Alternative Algorithm
		var aChildLists = [];
		for(var i=0; i<aOldChildren.length; i++){
			for(var j=0; j<aLists.length; j++){
				if(aOldChildren[i].getId() === aLists[j].getId()){
					aChildLists.push(aLists[j]);
				}
			}
		}
		for(var i=0; i<aLists.length; i++){
			var bIsInChildList = false;
			for(var j=0; j<aChildLists.length; j++){
				if(aLists[i].getId() === aChildLists[j].getId()){
					bIsInChildList = true;
				}
			}
			if(!bIsInChildList){
				aChildLists.push(aLists[i]);
			}
		}
		
		for(var i=0; i<aChildLists.length; i++){
			this.addSubList(aChildLists[i]);
		}*/
		
		//Set the change listener to the exact attribute
		var that = this;
		vData.setChangeListener({id: that.getId(), _notifyOnChange: function(sType, oAttribute){
			if(!that._isTop()){
				that.getParent().setData(that.getParent().getData());
			}else{
				that.setData(that.getData());
			}
		}});
	}

	return this;
};


sap.ui.ux3.ExactList.prototype.setShowClose = function(bShowClose) {
	if(this._isTop()){
		this.setProperty("showClose", bShowClose);
	}
	return this;
};


sap.ui.ux3.ExactList.prototype.getShowClose = function() {
	return getTopList(this).getProperty("showClose");
};


sap.ui.ux3.ExactList.prototype.getTopTitle = function() {
	var sTitle = this.getProperty("topTitle");
	return sTitle ? sTitle : this._rb.getText("EXACT_BRWSR_LST_TITLE");
};


//********* GLOBAL HELPERS *********


/**
 * Returns the associated ExactAttribute.
 * @private
 */
sap.ui.ux3.ExactList.prototype._getAtt = function() {
	return sap.ui.getCore().byId(this.getData());
};


/**
 * Returns <code>true</code>, when this control is the top most in the hierarchy, <code>false</code> otherwise.
 * @private
 */
sap.ui.ux3.ExactList.prototype._isTop = function() {
	return !(this.getParent() instanceof sap.ui.ux3.ExactList);
};


/**
 * Handles the TAB for a sub list.
 * @see sap.ui.ux3.ExactList.prototype.onkeydown
 * @private
 */
sap.ui.ux3.ExactList.prototype._handleTab = function(oSubList, oEvent) {
	var iIndex = this.indexOfSubList(oSubList);
	if(oEvent.shiftKey){
		if(iIndex > 0){
			this.getSubLists()[iIndex-1].focus();
		}else{
			this.focus();
		}
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}else{
		if(iIndex < this.getSubLists().length - 1){
			this.getSubLists()[iIndex+1].focus();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}else if(!this._isTop()){
			this.getParent()._handleTab(this, oEvent);
		}
	}
};


/**
 * Handles selections of the whole list tree and fires selection change event.
 * @private
 */
sap.ui.ux3.ExactList.prototype._selectionChanged = function(oAttribute) {
	if(!this._isTop()){
		return;
	}
	
	//Computes recursivly all selected attributes and adds them to the given result list
	var _computeSelectedAttributes = function(oAtt, aResult){
		if(!oAtt.getSelected()) {
			return;
		}
		aResult.push(oAtt);
		var aValues = oAtt.getAttributesInternal();
		for(var idx=0; idx<aValues.length; idx++){
			_computeSelectedAttributes(aValues[idx], aResult);
		}
	};

	var aSelectedAttributes = [];
	var aTopValues = this._getAtt().getAttributesInternal();
	for(var idx=0; idx<aTopValues.length; idx++){
		_computeSelectedAttributes(aTopValues[idx], aSelectedAttributes);
	}
	
	this.fireAttributeSelected({attribute: oAttribute, allAttributes: aSelectedAttributes});
};


/**
 * Closes all open sub lists and clears the selection if this list is the top list.
 *
 * @private
 */
sap.ui.ux3.ExactList.prototype._closeAll = function() {
	if(!this._isTop()){
		return;
	}
	
	var that = this;
	
	var fCallback = function(){
		that._getAtt()._clearSelection();
		that._lb.clearSelection();
		that.fireAttributeSelected({attribute: undefined, allAttributes: []});
	};
	
	var aLists = this.getSubLists();
	
	if(aLists.length > 0){
		for(var i=0; i<aLists.length; i++){
			close(aLists[i], true, i == aLists.length-1 ? fCallback : null);
		}
	}else{
		fCallback();
	}
};


//********* LOCAL HELPERS *********


//Animates the width or height of the given jRef to the given target value
//Optional callbacks are possible which are called before and after the animation
var animate = function(jRef, bWidth, iValue, fDoBefore, fDoAfter){
	if(fDoBefore){
		var iVal = fDoBefore(jRef);
		if(iVal != undefined){
			iValue = iVal;
		}
	}
	var _fDoAfter = fDoAfter ? function(){fDoAfter(jRef);} : function(){};
	if(jQuery.fx.off){
		if(bWidth){
			jRef.width(iValue);
		}else{
			jRef.height(iValue);
		}
		_fDoAfter();
	}else{
		var oParam = bWidth ? {width: iValue} : {height: iValue};
		jRef.stop(true, true).animate(oParam, 200, 'linear', _fDoAfter);
	}
};


// Handles the StartSelect event during resizing
// @see sap.ui.ux3.ExactList.prototype.onmousedown
var onStartSelect = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();
	return false;
};


//Handles the MouseMove event during resizing
//@see sap.ui.ux3.ExactList.prototype.onmousedown
var onMove = function(oEvent){
	var iCurrentX = oEvent.pageX;
	var iDiff = this._bRTL ? (this._iStartDragX - iCurrentX) : (iCurrentX - this._iStartDragX);
	setWidth(this, this._iStartWidth + iDiff);
};


//Handles the MouseUp event during resizing
//@see sap.ui.ux3.ExactList.prototype.onmousedown
var onRelease = function(oEvent){
	jQuery(document.body).unbind("selectstart", onStartSelect);
	jQuery.sap.byId(this.getId() + "-ghost").remove();
	jQuery.sap.byId(this.getId()+"-rsz").removeClass("sapUiUx3ExactLstRSzDrag");
	this._iStartWidth = undefined;
	this._iStartDragX = undefined;
};


//Checks whether the given width is in the allowed range. If not the width is adapted accordingly.
var checkWidth = function(iWidth){
	var iMinWidth = 100;
	var iMaxWidth = 500;
	if(iWidth < iMinWidth){
		return iMinWidth;
	}else if(iWidth > iMaxWidth){
		return iMaxWidth;
	}
	return iWidth;
};


//Sets the width of the list to the given width (maybe the width is adapted to the allowed range (@see checkWidth))
var setWidth = function(oList, iWidth){
	iWidth = checkWidth(iWidth);
	var sPos = oList._bRTL ? "right" : "left";
	var sId = oList.getId();
	oList._iCurrentWidth = iWidth;
	jQuery.sap.byId(sId+"-lst").css("width", iWidth+"px");
	jQuery.sap.byId(sId+"-rsz").css(sPos, (iWidth-4)+"px");
	if(oList._isTop()){
		jQuery.sap.byId(sId+"-head").css("width", iWidth+"px");
		jQuery.sap.byId(sId+"-cntnt").css(sPos, (iWidth+8)+"px");
		jQuery.sap.byId(sId+"-scroll").css(sPos, (iWidth+8)+"px");
	}else{
		jQuery.sap.byId(sId+"-cntnt").css("margin-"+sPos, iWidth+"px");
	}
	if(oList._isTop()){
		oList.fireWidthChanged({width: iWidth+"px"});
	}
};


//Refresh the header text of the list
var setHeaderText = function(oList){
	var oAtt = oList._getAtt();
	if(oAtt && !oList._isTop()){
		jQuery.sap.byId(oList.getId() + "-head-txt").html(jQuery.sap.encodeHTML(oAtt.getText())
				+"<span class=\"sapUiUx3ExactLstHeadInfo\">&nbsp;("+oList._lb.getSelectedIndices().length+"/"+oList._lb.getItems().length+")</span>");
	}
};


//Adapt the scrolling behavior when not all list items can be shown and return whether adaptation was done or not.
var adaptScollBehavior = function(oList){
	if(oList._lb){
		var jListRef = jQuery(oList._lb.getDomRef());
		jQuery.sap.byId(oList.getId() + "-lst").removeClass("sapUiUx3ExactLstScroll");
		if(jListRef.outerHeight() < jListRef[0].scrollHeight){
			jQuery.sap.byId(oList.getId() + "-lst").addClass("sapUiUx3ExactLstScroll");
			return true;
		}
	}
	return false;
};


//Toggles the horizontal Collapse State
var toggleHorizontalCollapseState = function(oList){
	if(oList._bCollapsed){
		//expand
		animate(jQuery(oList.getDomRef()), true, 0, function(jRef) {
			jRef.css("overflow", "hidden").css("width", "25px").removeClass("sapUiUx3ExactLstCollapsed");
			jQuery.sap.byId(oList.getId()+"-head-txt").width("auto");
			return jRef[0].scrollWidth;
		}, function(jRef) {
			jRef.css("overflow", "").css("width", "");
			jQuery.sap.byId(oList.getId()+"-hide").html(sap.ui.ux3.ExactListRenderer.getExpanderSymbol(true, true));
			oList._bCollapsed = !oList._bCollapsed;
			oList.focus();
		});
	}else{
		//collapse
		animate(jQuery(oList.getDomRef()), true, 25, null, function(jRef) {
			jRef.addClass("sapUiUx3ExactLstCollapsed");
			jQuery.sap.byId(oList.getId()+"-head-txt").width(jQuery.sap.byId(oList.getId()+"-head").height() - jQuery.sap.byId(oList.getId()+"-head-action").height() - 20);
			jRef.css("overflow", "").css("width", "");
			jQuery.sap.byId(oList.getId()+"-hide").html(sap.ui.ux3.ExactListRenderer.getExpanderSymbol(false, true));
			oList._bCollapsed = !oList._bCollapsed;
			oList.focus();
		});
	}
};


//Toggles the vertical Collapse State
var toggleVerticalCollapseState = function(oList){
	var jListContRef = jQuery.sap.byId(oList.getId() + "-lst");
	if(jListContRef.hasClass("sapUiUx3ExactLstExpanded")){
		//collapse
		oList._oPopup.close();
	}else{
		//expand
		oList._oPopup.open(); 
	}
};


//Handles the close of the list
var close = function(oList, bSkipNotify, fCallback){
	animate(jQuery(oList.getDomRef()), true, 0, function(jRef) {
		jRef.css("overflow", "hidden");
	}, function(jRef) {
		if(!bSkipNotify){
			var oAttr = oList._getAtt();
			var iSelectedIndex = oAttr.getParent().indexOfAttribute(oAttr);
			clearAttribute(oList.getParent(), oAttr, iSelectedIndex, true);
			setHeaderText(oList.getParent());
			getTopList(oList)._selectionChanged(oAttr);
		}
		oList.destroy();
		if(fCallback){
			fCallback();
		}
	});
};


//Handles the select event of the used ListBox control
var onSelect = function(oList, oEvent){
	setHeaderText(oList);
	var sKey = oEvent.getParameter("selectedItem").getKey();
	var oAttr = sap.ui.getCore().byId(sKey);
	var iSelectedIndex = oEvent.getParameter("selectedIndex");
	if(oList._lb.isIndexSelected(iSelectedIndex)){
		//select
		oAttr.setProperty("selected", true, true);
		var oSubList = createExactListForAttribute(oList, oAttr);
		if(oSubList) {
			oList.addSubList(oSubList);
		}
	}else{
		//deselect
		clearAttribute(oList, oAttr, iSelectedIndex);
	}
	
	getTopList(oList)._selectionChanged(oAttr);
};


//Creates a new ExactList for the given attribute if the attribute is selected and does not have a corresponding list yet.
//If the attribute has a corresponding list already this list is returned.
var createExactListForAttribute = function(oList, oAttribute) {
	if(oAttribute.getSelected()){
		var aAttributes = oAttribute.getAttributesInternal(true);
		if(aAttributes.length > 0){
			var oSubList;
			if(oAttribute.getChangeListener()){
				oSubList = sap.ui.getCore().byId(oAttribute.getChangeListener().id);
			}else{
				oSubList = new sap.ui.ux3.ExactList();
			}
			
			oSubList.setData(oAttribute);
			return oSubList;
		}
	}
	
	return null;
};


//Sets the selection property of the given attribute and all its sub-attributes to false.
//Additionally the given index in the lists ListBox is unselected. ExactLists which corresponds
//to the cleared attributes are closed if bSkipNotify is not set.
var clearAttribute = function(oList, oAttribute, iSelectedIndex, bSkipNotify){
	oList._lb.removeSelectedIndex(iSelectedIndex);
	oAttribute._clearSelection();
	if(!bSkipNotify){
		var aSubLists = oList.getSubLists();
		for(var i=0; i<aSubLists.length; i++){
			if(aSubLists[i].getData() === oAttribute.getId()){
				close(aSubLists[i], true);
			}
		}
	}
};


//Removes the change listener which is attached to the lists attribute.
var clearChangeListener = function(oList) { 
	var oAttr = oList._getAtt();
	if(oAttr && oAttr.getChangeListener() && oAttr.getChangeListener().id === oList.getId()) {
		oAttr.setChangeListener(null);
	}
};


//Returns the top most list.
var getTopList = function(oList) { 
	if(oList._isTop()){
		return oList;
	}
	return getTopList(oList.getParent());
};


}());


//Override docu of the "internal" aggregation subLists.

/**
 * Getter for aggregation <code>subLists</code>.<br/>
 * The sub ExactLists of this list. This aggregation must not be maintained from outside. The control automatically takes care to fill this aggregation according to the given ExactAttribute.
 * 
 * @return {sap.ui.ux3.ExactList[]}
 * @protected
 */

/**
 * Inserts a subList into the aggregation named <code>subLists</code>.
 *
 * @param {sap.ui.ux3.ExactList}
 *          oSubList the subList to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the subList should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the subList is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the subList is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @protected
 */

/**
 * Adds some subList <code>oSubList</code> 
 * to the aggregation named <code>subLists</code>.
 *
 * @param {sap.ui.ux3.ExactList}
 *            oSubList the subList to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @protected
 */

/**
 * Removes an subList from the aggregation named <code>subLists</code>.
 *
 * @param {int | string | sap.ui.ux3.ExactList} vSubList the subList to remove or its index or id
 * @return {sap.ui.ux3.ExactList} the removed subList or null
 * @protected
 */

/**
 * Removes all the controls in the aggregation named <code>subLists</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactList[]} an array of the removed elements (might be empty)
 * @protected
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ExactList</code> in the aggregation named <code>subLists</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ExactList}
 *            oSubList the subList whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @protected
 */

/**
 * Destroys all the subLists in the aggregation 
 * named <code>subLists</code>.
 * @return {sap.ui.ux3.ExactList} <code>this</code> to allow method chaining
 * @protected
 */