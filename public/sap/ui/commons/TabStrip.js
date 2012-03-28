/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TabStrip.
jQuery.sap.declare("sap.ui.commons.TabStrip");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new TabStrip.
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
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>selectedIndex : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>tabs : sap.ui.commons.Tab</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>select : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>close : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * 
 * A container for tab controls which contain the content and generally other controls. The user switches between the tabs then to display the content.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.TabStrip = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.TabStrip.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.TabStrip. 
 * Resulting metadata can be obtained via sap.ui.commons.TabStrip.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.TabStrip", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getHeight", "setHeight", "getWidth", "setWidth", "getSelectedIndex", "setSelectedIndex", 
    // aggregations
    "getTabs", "insertTab", "addTab", "removeTab", "removeAllTabs", "indexOfTab", "destroyTabs", 
    // associations
    
    // events
    "attachSelect", "detachSelect", "attachClose", "detachClose", 
    // methods
    "createTab", "closeTab"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "selectedIndex" : {name : "selectedIndex", type : "int", group : "Misc", defaultValue : 0}
  },
  defaultAggregation : "tabs",
  aggregations : {
    "tabs" : {name : "tabs", type : "sap.ui.commons.Tab", multiple : true, singularName : "tab"}
  },
  associations : {},
  events : {
    "select" : "select", 
    "close" : "close"
  }

});	

sap.ui.commons.TabStrip.M_EVENTS = {'select':'select','close':'close'};


/**
 * Getter for property <code>height</code>.
 * Height includes tab bar and content area.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Width includes tab bar and content area.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>selectedIndex</code>.
 * Index of the currently selected tab.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * 
 */
sap.ui.commons.TabStrip.prototype.getSelectedIndex = function() {
	return this.getProperty("selectedIndex");
};

/**
 * Setter for property <code>selectedIndex</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iSelectedIndex  new value for property <code>selectedIndex</code>
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.setSelectedIndex = function(iSelectedIndex) {
	this.setProperty("selectedIndex", iSelectedIndex);
	return this;
};

	
/**
 * Getter for aggregation <code>tabs</code>.<br/>
 * Aggregating tabs contained in the tab strip.
 * 
 * @return {sap.ui.commons.Tab[]}
 * @public
 */
sap.ui.commons.TabStrip.prototype.getTabs = function() {
	return this.getAggregation("tabs", []);
};


/**
 * Inserts a tab into the aggregation named <code>tabs</code>.
 *
 * @param {sap.ui.commons.Tab}
 *          oTab the tab to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tab should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tab is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tab is inserted at 
 *             the last position        
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.insertTab = function(oTab, iIndex) {
	this.insertAggregation("tabs", oTab, iIndex);
	return this;
};

/**
 * Adds some tab <code>oTab</code> 
 * to the aggregation named <code>tabs</code>.
 *
 * @param {sap.ui.commons.Tab}
 *            oTab the tab to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.TabStrip.prototype.addTab = function(oTab) {
	this.addAggregation("tabs", oTab);
	return this;
};

/**
 * Removes an tab from the aggregation named <code>tabs</code>.
 *
 * @param {int | string | sap.ui.commons.Tab} vTab the tab to remove or its index or id
 * @return {sap.ui.commons.Tab} the removed tab or null
 * @public
 */
sap.ui.commons.TabStrip.prototype.removeTab = function(vTab) {
	return this.removeAggregation("tabs", vTab);
};

/**
 * Removes all the controls in the aggregation named <code>tabs</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Tab[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.TabStrip.prototype.removeAllTabs = function() {
	return this.removeAllAggregation("tabs");
};

/**
 * Checks for the provided <code>sap.ui.commons.Tab</code> in the aggregation named <code>tabs</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.Tab}
 *            oTab the tab whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.TabStrip.prototype.indexOfTab = function(oTab) {
	return this.indexOfAggregation("tabs", oTab);
};
	

/**
 * Destroys all the tabs in the aggregation 
 * named <code>tabs</code>.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.destroyTabs = function() {
	this.destroyAggregation("tabs");
	return this;
};


/**
 * Event is fired when the user selects a tab. 
 *
 * @name sap.ui.commons.TabStrip#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.index Index of the selected tab.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.TabStrip</code>.<br/>
 * Event is fired when the user selects a tab. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.attachSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("select", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.TabStrip</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.detachSelect = function(fnFunction, oListener) {
	this.detachEvent("select", fnFunction, oListener);
	return this;	
};

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'index' of type <code>int</code> Index of the selected tab.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.TabStrip.prototype.fireSelect = function(mArguments) {
	this.fireEvent("select", mArguments);
	return this;
};


/**
 * Event is fired when the user closes a tab. 
 *
 * @name sap.ui.commons.TabStrip#close
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.index Index of the closed tab.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.commons.TabStrip</code>.<br/>
 * Event is fired when the user closes a tab. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.attachClose = function(oData, fnFunction, oListener) {
	this.attachEvent("close", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.commons.TabStrip</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.detachClose = function(fnFunction, oListener) {
	this.detachEvent("close", fnFunction, oListener);
	return this;	
};

/**
 * Fire event close to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'index' of type <code>int</code> Index of the closed tab.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.TabStrip.prototype.fireClose = function(mArguments) {
	this.fireEvent("close", mArguments);
	return this;
};


/**
 * Convenient method to add a tab with a text as title and a root control as content.
 *
 * @name sap.ui.commons.TabStrip.prototype.createTab
 * @function
 * @param {string} 
 *         sText
 *         Defines the title text of the newly created tab.
 * @param {sap.ui.core.Control} 
 *         oContent
 *         Defines the root control of the content area.

 * @type void
 * @public
 */


/**
 * This method closes a atb. If the tab is selecte thenext one will be selected. (If it's the last the previous one will be selected,)
 * This method should be called if the close event is fired. It can not be called automatically because the consumer might need to run some logic before the tab is closed.
 *
 * @name sap.ui.commons.TabStrip.prototype.closeTab
 * @function
 * @param {int} 
 *         iIndex
 *         Index of the tab that should be closed.

 * @type void
 * @public
 */


// Start of sap/ui/commons/TabStrip.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

sap.ui.commons.TabStrip.prototype.onAfterRendering = function() {
	// find a collection of all tabs
	var oFocusRef = this.getFocusDomRef(),
		aTabs = oFocusRef.lastChild.childNodes,
		aTabDomRefs = [],
		iSelectedDomIndex = -1;
	for (var i=0;i<aTabs.length;i++) {
		aTabDomRefs.push(aTabs[i]);
		if(jQuery(aTabs[i]).hasClass("sapUiTabSel")){
			// get selected index out of visible tabs for ItemNavigation
			iSelectedDomIndex = i;
		}
	}
	//Initialize the ItemNavigation
	if (!this.oItemNavigation) {
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.addDelegate(this.oItemNavigation);
	}
	//Reinitialize the ItemNavigation after rendering
	this.oItemNavigation.setRootDomRef(oFocusRef);
	this.oItemNavigation.setItemDomRefs(aTabDomRefs);
	this.oItemNavigation.setSelectedIndex(iSelectedDomIndex);

	//Notify the tabs
	var aTabs = this.getTabs();
	for (var i=0;i<aTabs.length;i++) {
		aTabs[i].onAfterRendering();
	}
};

/**
 * Convenient method to add a tab with a text as title and a root control as content.
 *
 * @param {string}
 *         sText defines the title text of the newly created tab
 * @param {sap.ui.core.Control}
 *        oContent defines the root control of the content of the tab
 * @return
 * @type {sap.ui.commons.Tab}
 * @public
 */
sap.ui.commons.TabStrip.prototype.createTab = function(sText,oContent) {
	var oTabs = this.getTabs(),
		oTitle = new sap.ui.commons.Title(this.getId() + "-" + oTabs.length + "-title",{text:sText}),
		oTab = new sap.ui.commons.Tab(this.getId() + "-" + oTabs.length);
	oTab.setTitle(oTitle);
	oTab.addContent(oContent);
	this.addTab(oTab);
	return oTab;
};

/**
 * Finds and fires the select event of a tab of a given Dom Reference
 * if it is a Dom ref of a tab title.
 * @private
 */
sap.ui.commons.TabStrip.prototype.selectTabByDomRef = function(oDomRef) {
	var iIdx = this.getItemIndex(oDomRef);
	if (iIdx > -1) {
		//its an item, find the items index
		if ((iIdx != this.getSelectedIndex()) && (this.getTabs()[iIdx].getEnabled())) {
			var iOldIndex = this.getSelectedIndex();
			this.setProperty( 'selectedIndex', iIdx, true ); // no complete rerendering required

			this.rerenderPanel(iOldIndex);

			this.oItemNavigation.setSelectedIndex(this.oItemNavigation.getFocusedIndex());

			this.fireSelect({index:iIdx});
		}
	}
};

/**
 * Handles the SPACEBAR press
 * @private
 */
sap.ui.commons.TabStrip.prototype.onsapspace = function(oEvent) {
	var oSource = oEvent.target;
	this.selectTabByDomRef(oSource);
};

// ENTER and SPACE with modifiers is the same like SPACE
sap.ui.commons.TabStrip.prototype.onsapspacemodifiers = sap.ui.commons.TabStrip.prototype.onsapspace;
sap.ui.commons.TabStrip.prototype.onsapenter = sap.ui.commons.TabStrip.prototype.onsapspace;
sap.ui.commons.TabStrip.prototype.onsapentermodifiers = sap.ui.commons.TabStrip.prototype.onsapspace;

/**
 * Handles the DELETE press
 * @private
 */
sap.ui.commons.TabStrip.prototype.onsapdelete = function(oEvent) {

	var oSource = oEvent.target;
	var iIdx = this.getItemIndex(oSource);
	if (iIdx > -1 && this.getTabs()[iIdx].getClosable()) {
		//item is closable
		this.fireClose({index:iIdx});
	}

};

/**
 * Handles the click event.
 * @private
 */
sap.ui.commons.TabStrip.prototype.onclick = function(oEvent) {
	var oSource = oEvent.target,
		oDomRef = this.getDomRef();
	if (oSource.className == "sapUiTabClose") {
		//find the items index
		var iIdx = this.getItemIndex(jQuery(oSource).parentByAttribute("id"));
		if (iIdx > -1) {
			this.fireClose({index:iIdx});
		}
		return;
	}
	this.selectTabByDomRef(oSource);
};

/**
 * Overrides getFocusDomRef of base element class.
 * @public
 */
sap.ui.commons.TabStrip.prototype.getFocusDomRef = function() {
	return this.getDomRef().firstChild;
};

/**
 * Does all the cleanup when the TabStrip is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.TabStrip.prototype.exit = function (){
	if (this.oItemNavigation) {
		this.removeDelegate(this.oItemNavigation);
		this.oItemNavigation.destroy();
	}

	// no super.exit() to call
};

sap.ui.commons.TabStrip.prototype.getItemIndex = function(oDomRef) {

	var sId;
	if(!oDomRef.id || oDomRef.id.search("-close") != -1){
		// icon or close button
		var oItemDomRef = jQuery(oDomRef).parentByAttribute("id");
		sId = oItemDomRef.id;
	}else{
		sId = oDomRef.id;
	}

	for (var idx = 0, aTabs = this.getTabs(); idx < aTabs.length; idx++) {
		if (sId == aTabs[idx].getId()) {
			return idx;
		}
	}
	return -1;
};

// Override aggregation methods if something needs to be taken care of

/**
 * Overwrite of default method
 * Removes an tab from the aggregation named <code>tabs</code>.
 *
 * @param {int | string | sap.ui.commons.Tab} vTab the tab to remove or its index or id
 * @return {sap.ui.commons.Tab} the removed tab or null
 * @public
 */
sap.ui.commons.TabStrip.prototype.removeTab = function(vElement) {
	var iIndex = vElement;
	if (typeof(vElement) == "string") { // ID of the element is given
		vElement = sap.ui.getCore().byId(vElement);
	}
	if (typeof(vElement) == "object") { // the element itself is given or has just been retrieved
		iIndex = this.indexOfTab(vElement);
	}

	var oTab = this.getTabs()[iIndex];
	if(oTab.getVisible()){
		// set tab invisible during hiding it for changing classes of tabs
		oTab.setProperty("visible",false,true); // no rerendering
		this.hideTab(iIndex);
		oTab.setProperty("visible",true,true); // no rerendering
	}

	if(this.getSelectedIndex() > iIndex){
		this.setProperty( 'selectedIndex', this.getSelectedIndex() - 1, true ); // no complete rerendering required		
	}
	return this.removeAggregation("tabs", iIndex, true); // no complete rerendering required	
};

/**
 * Overwite of defaultSetter for property <code>selectedIndex</code>.
 *
 * Default value is <code>0</code>
 *
 * @param {int} iSelectedIndex new value for property <code>selectedIndex</code>
 * @return {sap.ui.commons.TabStrip} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TabStrip.prototype.setSelectedIndex = function(iSelectedIndex) {

	if(!this.getTabs()[iSelectedIndex] && !this.getDomRef())
	{
		// tab don't exist but not rendered. In initial setup index might be set before tab is added
		// But if already rendered this is not allowed, tab must exist
		this.setProperty( 'selectedIndex', iSelectedIndex, false ); // rendering needed

	}else if(this.getTabs()[iSelectedIndex].getEnabled() && this.getTabs()[iSelectedIndex].getVisible()){
		var iOldIndex = this.getSelectedIndex();
		this.setProperty( 'selectedIndex', iSelectedIndex, true ); // no complete rerendering required
		if (this.getDomRef()){
			// already rendered
			this.rerenderPanel(iOldIndex);
			if(this.oItemNavigation){
				// set selected index for ItemNavigation, ignore invisible tabs.
				var iVisibleIndex = 0;
				var iSelectedDomIndex = -1;
				for (var i=0;i<this.getTabs().length;i++) {
					var oTab = this.getTabs()[i];
					if(oTab.getVisible() === false) {
						continue;
					}
					if(i == this.getSelectedIndex()){
						iSelectedDomIndex = iVisibleIndex;
						break;
					}
					iVisibleIndex++;
				}
				this.oItemNavigation.setSelectedIndex(iSelectedDomIndex);
			}
		}
	}

	return this;
};

/**
 * Close a tab. If selected, select the next one
 *
 * @param {int} iIndex tab to be closed
 * @public
 */
sap.ui.commons.TabStrip.prototype.closeTab = function(iIndex) {

	var oTab = this.getTabs()[iIndex];

	if(!oTab || !oTab.getClosable() || !oTab.getVisible()){
		return;
	}

	// close tab -> set to invisible
	oTab.setProperty("visible",false,true); // no rerendering

	this.hideTab(iIndex);
};

/**
 * removes a tab from output
 *
 * @param {int} iIndex tab to be closed
 * @private
 */
sap.ui.commons.TabStrip.prototype.hideTab = function(iIndex) {
	var oTab = this.getTabs()[iIndex];

	if (!this.getDomRef()){
		return; //if not already rendered selected index should be provided by caller
	}
	
	// get focused index and visible index of tab
	var iFocusedIndex = this.oItemNavigation.getFocusedIndex();
	var iVisibleIndex = parseInt(jQuery.sap.byId(oTab.getId()).attr("aria-posinset"), 10) - 1;
	var sFocusedControlId = sap.ui.getCore().getCurrentFocusedControlId();

	// delete only tab from DOM ->no rerendering of other tabs necessary
	jQuery.sap.byId(oTab.getId()).remove();

	if(this.iVisibleTabs == 1){
		// last visible tab is closed -> no new selected tab and no content
		this.setProperty( 'selectedIndex', -1, true ); // no complete rerendering required
		jQuery.sap.byId(oTab.getId()+"-panel").remove();
	}else if(iIndex == this.getSelectedIndex()){
		// selected tab should be closed -> select other one

		var iNewIndex = iIndex + 1;

		while(iNewIndex < this.getTabs().length && (!this.getTabs()[iNewIndex].getEnabled() || !this.getTabs()[iNewIndex].getVisible())){
			//select next one
			iNewIndex ++;
		}

		if(iNewIndex == this.getTabs().length){
			// no next active tab - search for previous
			iNewIndex = iIndex -1;
			while(iNewIndex >= 0 && (!this.getTabs()[iNewIndex].getEnabled() || !this.getTabs()[iNewIndex].getVisible())){
				//select previous one
				iNewIndex --;
			}
		}
		// if no selectable tab exists the index is set to -1
		this.setProperty( 'selectedIndex', iNewIndex, true ); // no complete rerendering required

		this.rerenderPanel(iIndex);
	}else{
		// set classes new to set before and after classes right
		this.toggleTabClasses(this.getSelectedIndex(), this.getSelectedIndex());
	}

	// update ARIA information
	this.iVisibleTabs--;
	var iVisibleIndex = 0;
	var	aTabDomRefs = [];
	var iSelectedDomIndex = -1;
	var bTabFocused = false;
	for (var i=0;i<this.getTabs().length;i++) {
		var oTab = this.getTabs()[i];
		
		// check if a tab has the focus
		if(sFocusedControlId == oTab.getId()){
			bTabFocused = true;
		}
		
		if(oTab.getVisible() === false) {
			continue;
		}
		if(i == this.getSelectedIndex()){
			iSelectedDomIndex = iVisibleIndex;
		}
		iVisibleIndex++;
		jQuery.sap.byId(oTab.getId()).attr("aria-posinset", iVisibleIndex).attr("aria-setsize", this.iVisibleTabs);
		if (iVisibleIndex == this.iVisibleTabs) {
			jQuery.sap.byId(oTab.getId()).addClass("sapUiTabLast"); // needed for IE8
		}
		aTabDomRefs.push(jQuery.sap.domById(oTab.getId()));	
	}

	// focused item should be the same
	if(iVisibleIndex <= iFocusedIndex){
		// tab before or equal focused one is hidden
		iFocusedIndex--;		
	}
	// update ItemNavigation
	this.oItemNavigation.setItemDomRefs(aTabDomRefs);
	this.oItemNavigation.setSelectedIndex(iSelectedDomIndex);
	this.oItemNavigation.setFocusedIndex(iFocusedIndex);

	// check if a tab has the focus
	// if yes focus again
	// if no set only focused index.
	if(bTabFocused){
		this.oItemNavigation.focusItem(iFocusedIndex);
	}
	
};

/**
 * if the selected index is changed, only the panel must be rerendered
 * for the tabs only some classes must be exchanged
 *
 * @private
 */
sap.ui.commons.TabStrip.prototype.rerenderPanel = function(iOldIndex) {

	var iNewIndex = this.getSelectedIndex();
	var $panel = jQuery.sap.byId(this.getTabs()[iOldIndex].getId() + "-panel");
	if ($panel.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		this.getRenderer().renderTabContents(rm, this.getTabs()[iNewIndex]);
		rm.flush($panel[0]);
		rm.destroy();
	}

	var sNewId = this.getTabs()[iNewIndex].getId();
	//change the ID and Label of the panel to the current tab
	$panel.attr("id",sNewId + "-panel").attr("aria-labelledby", sNewId);

	// call after rendering method of tab to set scroll functions
	this.getTabs()[iNewIndex].onAfterRendering();

	this.toggleTabClasses(iOldIndex, iNewIndex);
};

/**
 * Sets the classes of the tabs to display the new selection
 *
 * @private
 */
sap.ui.commons.TabStrip.prototype.toggleTabClasses = function(iOldIndex, iNewIndex) {

	// change visualization of selected tab and old tab
	jQuery.sap.byId(this.getTabs()[iOldIndex].getId()).toggleClass("sapUiTabSel sapUiTab").attr("aria-selected",false);
	var iBeforeIndex = iOldIndex-1;
	while (iBeforeIndex >= 0 && !this.getTabs()[iBeforeIndex].getVisible()) {
		iBeforeIndex--;
	}
	if(iBeforeIndex >= 0){
		jQuery.sap.byId(this.getTabs()[iBeforeIndex].getId()).removeClass("sapUiTabBeforeSel");
	}

	var iAfterIndex = iOldIndex+1;
	while (iAfterIndex < this.getTabs().length && !this.getTabs()[iAfterIndex].getVisible()) {
		iAfterIndex++;
	}
	if(iAfterIndex < this.getTabs().length){
		jQuery.sap.byId(this.getTabs()[iAfterIndex].getId()).removeClass("sapUiTabAfterSel");
	}

	jQuery.sap.byId(this.getTabs()[iNewIndex].getId()).toggleClass("sapUiTabSel sapUiTab").attr("aria-selected",true);
	iBeforeIndex = iNewIndex-1;
	while (iBeforeIndex >= 0 && !this.getTabs()[iBeforeIndex].getVisible()) {
		iBeforeIndex--;
	}
	if(iBeforeIndex >= 0){
		jQuery.sap.byId(this.getTabs()[iBeforeIndex].getId()).addClass("sapUiTabBeforeSel");
	}

	iAfterIndex = iNewIndex+1;
	while (iAfterIndex < this.getTabs().length && !this.getTabs()[iAfterIndex].getVisible()) {
		iAfterIndex++;
	}
	if(iAfterIndex < this.getTabs().length){
		jQuery.sap.byId(this.getTabs()[iAfterIndex].getId()).addClass("sapUiTabAfterSel");
	}

};