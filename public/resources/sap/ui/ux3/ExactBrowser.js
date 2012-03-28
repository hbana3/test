/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ExactBrowser.
jQuery.sap.declare("sap.ui.ux3.ExactBrowser");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ExactBrowser.
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
 * <li>title : string</li>
 * <li>headerTitle : string</li>
 * <li>visible : boolean</li>
 * <li>enableListClose : boolean</li>
 * <li>listHeight : int</li>
 * <li>showHeader : boolean</li>
 * <li>enableReset : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>attributes : sap.ui.ux3.ExactAttribute</li>
 * <li>optionsMenu : sap.ui.commons.Menu</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>attributeSelected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Attribute browse area used within the Exact pattern. The main benefit of this control is the high flexibility when large data amounts shall be displayed
 * in the form of structured data sets with a high or low interdependency level. From lists - which can be nested according to the defined attributes - the user can choose
 * entries and thereby trigger the display of further information, depending on the chosen entry/entries (multiple selection supported).
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.ExactBrowser = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.ExactBrowser.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.ExactBrowser. 
 * Resulting metadata can be obtained via sap.ui.ux3.ExactBrowser.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.ExactBrowser", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getTitle", "setTitle", "getHeaderTitle", "setHeaderTitle", "getVisible", "setVisible", "getEnableListClose", "setEnableListClose", "getListHeight", "setListHeight", "getShowHeader", "setShowHeader", "getEnableReset", "setEnableReset", 
    // aggregations
    "getAttributes", "insertAttribute", "addAttribute", "removeAttribute", "removeAllAttributes", "indexOfAttribute", "destroyAttributes", "getOptionsMenu", "setOptionsMenu", "destroyOptionsMenu", 
    // associations
    
    // events
    "attachAttributeSelected", "detachAttributeSelected"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "title" : {name : "title", type : "string", group : "Misc", defaultValue : null},
    "headerTitle" : {name : "headerTitle", type : "string", group : "Misc", defaultValue : null},
    "visible" : {name : "visible", type : "boolean", group : "", defaultValue : true},
    "enableListClose" : {name : "enableListClose", type : "boolean", group : "Misc", defaultValue : false},
    "listHeight" : {name : "listHeight", type : "int", group : "Appearance", defaultValue : 290},
    "showHeader" : {name : "showHeader", type : "boolean", group : "Misc", defaultValue : false},
    "enableReset" : {name : "enableReset", type : "boolean", group : "Misc", defaultValue : true}
  },
  defaultAggregation : "attributes",
  aggregations : {
    "attributes" : {name : "attributes", type : "sap.ui.ux3.ExactAttribute", multiple : true, singularName : "attribute"}, 
    "optionsMenu" : {name : "optionsMenu", type : "sap.ui.commons.Menu", multiple : false}
  },
  associations : {},
  events : {
    "attributeSelected" : "attributeSelected"
  }

});	

sap.ui.ux3.ExactBrowser.M_EVENTS = {'attributeSelected':'attributeSelected'};


/**
 * Getter for property <code>title</code>.
 * Title text in the list area of the Exact Browser.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};


/**
 * Getter for property <code>headerTitle</code>.
 * Title text in the header of the Exact Browser.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>headerTitle</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getHeaderTitle = function() {
	return this.getProperty("headerTitle");
};

/**
 * Setter for property <code>headerTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sHeaderTitle  new value for property <code>headerTitle</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.setHeaderTitle = function(sHeaderTitle) {
	this.setProperty("headerTitle", sHeaderTitle);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible ExactBrowsers are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>enableListClose</code>.
 * Enables the close icons of the displayed lists.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableListClose</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getEnableListClose = function() {
	return this.getProperty("enableListClose");
};

/**
 * Setter for property <code>enableListClose</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableListClose  new value for property <code>enableListClose</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.setEnableListClose = function(bEnableListClose) {
	this.setProperty("enableListClose", bEnableListClose);
	return this;
};


/**
 * Getter for property <code>listHeight</code>.
 * The height of the list area in px.
 *
 * Default value is <code>290</code>
 *
 * @return {int} the value of property <code>listHeight</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getListHeight = function() {
	return this.getProperty("listHeight");
};

/**
 * Setter for property <code>listHeight</code>.
 *
 * Default value is <code>290</code> 
 *
 * @param {int} iListHeight  new value for property <code>listHeight</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.setListHeight = function(iListHeight) {
	this.setProperty("listHeight", iListHeight);
	return this;
};


/**
 * Getter for property <code>showHeader</code>.
 * Whether the header area of the ExactBrowser should be shown.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getShowHeader = function() {
	return this.getProperty("showHeader");
};

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.setShowHeader = function(bShowHeader) {
	this.setProperty("showHeader", bShowHeader);
	return this;
};


/**
 * Getter for property <code>enableReset</code>.
 * Whether the reset functionality should be available in the header area.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableReset</code>
 * @public
 * 
 */
sap.ui.ux3.ExactBrowser.prototype.getEnableReset = function() {
	return this.getProperty("enableReset");
};

/**
 * Setter for property <code>enableReset</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableReset  new value for property <code>enableReset</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.setEnableReset = function(bEnableReset) {
	this.setProperty("enableReset", bEnableReset);
	return this;
};

	
/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * The attributes which shall be available
 * 
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.getAttributes = function() {
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
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.insertAttribute = function(oAttribute, iIndex) {
	this.insertAggregation("attributes", oAttribute, iIndex);
	return this;
};

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ExactBrowser.prototype.addAttribute = function(oAttribute) {
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
sap.ui.ux3.ExactBrowser.prototype.removeAttribute = function(vAttribute) {
	return this.removeAggregation("attributes", vAttribute);
};

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.removeAllAttributes = function() {
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
sap.ui.ux3.ExactBrowser.prototype.indexOfAttribute = function(oAttribute) {
	return this.indexOfAggregation("attributes", oAttribute);
};
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.destroyAttributes = function() {
	this.destroyAggregation("attributes");
	return this;
};

	
/**
 * Getter for aggregation <code>optionsMenu</code>.<br/>
 * Menu with options
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.getOptionsMenu = function() {
	return this.getAggregation("optionsMenu", null);
};


/**
 * Setter for the aggregated <code>optionsMenu</code>.
 * @param oOptionsMenu {sap.ui.commons.Menu}
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.setOptionsMenu = function(oOptionsMenu) {
	this.setAggregation("optionsMenu", oOptionsMenu);
	return this;
};
	

/**
 * Destroys the optionsMenu in the aggregation 
 * named <code>optionsMenu</code>.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.destroyOptionsMenu = function() {
	this.destroyAggregation("optionsMenu");
	return this;
};


/**
 * Event is fired when an attribute is selected or unselected. 
 *
 * @name sap.ui.ux3.ExactBrowser#attributeSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The attribute which was selected or unselected recently
 * @param {object} oControlEvent.getParameters.allAttributes Array of all selected ExactAttributes
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'attributeSelected' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>
 * Event is fired when an attribute is selected or unselected. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.attachAttributeSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("attributeSelected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'attributeSelected' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactBrowser.prototype.detachAttributeSelected = function(fnFunction, oListener) {
	this.detachEvent("attributeSelected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event attributeSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'attribute' of type <code>sap.ui.ux3.ExactAttribute</code> The attribute which was selected or unselected recently</li>
 * <li>'allAttributes' of type <code>object</code> Array of all selected ExactAttributes</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ExactBrowser.prototype.fireAttributeSelected = function(mArguments) {
	this.fireEvent("attributeSelected", mArguments);
	return this;
};


// Start of sap/ui/ux3/ExactBrowser.js
jQuery.sap.require("sap.ui.ux3.ExactAttribute");
jQuery.sap.require("sap.ui.ux3.ExactList");
jQuery.sap.require("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.Button");

(function() {

	/**
	 * Does the setup when the ExactBrowser is created.
	 * @private
	 */
	sap.ui.ux3.ExactBrowser.prototype.init = function(){
		var that = this;
		
		this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
		
		//Create a root node for the attributes tree
		this._attributeRoot = new sap.ui.ux3.ExactAttribute();
		this._attributeRoot.setParent(this);
		
		//Init the used subcontrols
		this._rootList = new sap.ui.ux3.ExactList(this.getId()+"-rootlist");
		this._rootList.setData(this._attributeRoot);
		this.addAggregation("controls", this._rootList);
		
		this._resetButton = new sap.ui.commons.Button(this.getId()+"-RstBtn", {text: this._rb.getText("EXACT_BRWSR_RESET"), lite: true});
		this._resetButton.addStyleClass("sapUiUx3ExactBrwsrReset");
		this.addAggregation("controls", this._resetButton);
		this._resetButton.attachPress(function(){
			that._rootList._closeAll();
		});
		
		this._saveButton = new sap.ui.commons.Button(this.getId()+"-SvBtn", {text: this._rb.getText("EXACT_BRWSR_SAVE"), lite: true});
		this._saveButton.addStyleClass("sapUiUx3ExactBrwsrSave");
		this.addAggregation("controls", this._saveButton);
		this._saveButton.attachPress(function(){
			openSaveDialog(that);
		});
		
		this._rootList.attachAttributeSelected(function(oEvent){
			that.fireAttributeSelected({attribute: oEvent.getParameter("attribute"), allAttributes: oEvent.getParameter("allAttributes")});
		});
		this._rootList.attachWidthChanged(function(oEvent){
			var oMenuButton = that._getMenuButton(false);
			if(oMenuButton){
				oMenuButton.setProperty("width", oEvent.getParameter("width"), true);
				jQuery(oMenuButton.getDomRef()).css("width", oEvent.getParameter("width"));
			}
		});
	};


	/**
	 * Does all the cleanup when the ExactBrowser is to be destroyed.
	 * Called from Element's destroy() method.
	 * @private
	 */
	sap.ui.ux3.ExactBrowser.prototype.exit = function(){
		this._rootList.destroy();
		var oMenuButton = this._getMenuButton(false);
		if(oMenuButton){
			oMenuButton.destroy();
			this._menuButton = null;
		}
		this._attributeRoot.destroy();
		this._rootList = null;
		this._attributeRoot = null;
		this._resetButton = null;
		this._saveButton = null;
		this._saveDialog = null;
		this._saveTextField = null;
		this._rb = null;
	};


	//*** Overridden API functions ***
	
	sap.ui.ux3.ExactBrowser.prototype.getEnableSave = function() {
		//TODO Make this feature prodictive: Create Property "enableSave" and provide "save" event
		return !!this.__enableSave;
	};

	
	sap.ui.ux3.ExactBrowser.prototype.getTitle = function() {
		return this._rootList.getTopTitle();
	};


	sap.ui.ux3.ExactBrowser.prototype.setTitle = function(sTitle) {
		this._rootList.setTopTitle(sTitle);
		var oMenuButton = this._getMenuButton(false);
		if(oMenuButton){
			oMenuButton.setText(this._rootList.getTopTitle());
		}
		return this;
	};
	
	
	sap.ui.ux3.ExactBrowser.prototype.getHeaderTitle = function() {
		var sTitle = this.getProperty("headerTitle");
		return sTitle ? sTitle : this._rb.getText("EXACT_BRWSR_TITLE");
	};
	
	
	sap.ui.ux3.ExactBrowser.prototype.getEnableListClose = function() {
		return this._rootList.getShowClose();
	};


	sap.ui.ux3.ExactBrowser.prototype.setEnableListClose = function(bEnableListClose) {
		this._rootList.setShowClose(bEnableListClose);
		return this;
	};
	
	
	sap.ui.ux3.ExactBrowser.prototype.getListHeight = function() {
		return this._rootList.getTopHeight();
	};


	sap.ui.ux3.ExactBrowser.prototype.setListHeight = function(iListHeight) {
		this._rootList.setTopHeight(iListHeight);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.getOptionsMenu = function() {
		var oMenuButton = this._getMenuButton(false);
		return oMenuButton ? oMenuButton.getMenu() : null;
	};


	sap.ui.ux3.ExactBrowser.prototype.setOptionsMenu = function(oOptionsMenu) {
		var oMenuButton = this._getMenuButton(true);
		oMenuButton.setMenu(oOptionsMenu);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.destroyOptionsMenu = function() {
		var oMenuButton = this._getMenuButton(false);
		if(oMenuButton){
			oMenuButton.destroyMenu();
		}
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.getAttributes = function() {
		return this._attributeRoot.getAttributesInternal();
	};


	sap.ui.ux3.ExactBrowser.prototype.insertAttribute = function(oAttribute, iIndex) {
		this._attributeRoot.insertAttribute(oAttribute, iIndex);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.addAttribute = function(oAttribute) {
		this._attributeRoot.addAttribute(oAttribute);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.removeAttribute = function(vElement) {
		return this._attributeRoot.removeAttribute(vElement);
	};


	sap.ui.ux3.ExactBrowser.prototype.removeAllAttributes = function() {
		return this._attributeRoot.removeAllAttributes();
	};


	sap.ui.ux3.ExactBrowser.prototype.indexOfAttribute = function(oAttribute) {
		return this._attributeRoot.indexOfAttribute(oAttribute);
	};


	sap.ui.ux3.ExactBrowser.prototype.destroyAttributes = function() {
		this._attributeRoot.destroyAttributes();
		return this;
	};


	//*** Private helper functions ***

	sap.ui.ux3.ExactBrowser.prototype._getMenuButton = function(bForceInit) {
		if(this._menuButton){
			return this._menuButton;
		}
		if(bForceInit){
			jQuery.sap.require("sap.ui.commons.MenuButton");
			this._menuButton = new sap.ui.commons.MenuButton(this.getId()+"-MnuBtn", {text: this.getTitle(), lite: true});
			this._menuButton.addStyleClass("sapUiUx3ExactBrwsrBtn");
			this.addAggregation("controls", this._menuButton);
			var that = this;
			this._menuButton.addDelegate({
				onAfterRendering: function(){
					var zIndex = that._menuButton.__zIndex ? that._menuButton.__zIndex : sap.ui.core.Popup.getNextZIndex();
					that._menuButton.__zIndex = zIndex;
					jQuery(that._menuButton.getDomRef()).css("z-index", zIndex);
				}
			});
			return this._menuButton;
		}
		return null;
	};
	
	
	//Closes the save dialog and triggers the save event
	function doSave(oExactBrowser, bSkip) {
		oExactBrowser._saveDialog.close();
		if(!bSkip){
			alert("Save: "+oExactBrowser._saveTextField.getValue());
		}
	};
	
	
	//Opens the save dialog
	function openSaveDialog(oExactBrowser) {
		if(!oExactBrowser._saveDialog){
			jQuery.sap.require("sap.ui.ux3.ToolPopup");
			jQuery.sap.require("sap.ui.commons.Textfield");
			jQuery.sap.require("sap.ui.commons.Label");
			oExactBrowser._saveTextField = new sap.ui.commons.TextField(oExactBrowser.getId()+"-SvDlgTf");
			var label = new sap.ui.commons.Label({text: oExactBrowser._rb.getText("EXACT_BRWSR_DLG_LABEL")}).setLabelFor(oExactBrowser._saveTextField);
			oExactBrowser._saveDialog = new sap.ui.ux3.ToolPopup(oExactBrowser.getId()+"-SvDlg", {
				content:[label, oExactBrowser._saveTextField],
				buttons: [
					new sap.ui.commons.Button(oExactBrowser.getId()+"-SvDlgSvBtn", {
						text: oExactBrowser._rb.getText("EXACT_BRWSR_DLG_SAVE"),
						press: function(){
							doSave(oExactBrowser);
						}
					}),
					new sap.ui.commons.Button(oExactBrowser.getId()+"-SvDlgCnclBtn", {
						text: oExactBrowser._rb.getText("EXACT_BRWSR_DLG_CANCEL"),
						press: function(){
							doSave(oExactBrowser, true);
						}
					})
				]
			});
			oExactBrowser._saveDialog.addStyleClass("sapUiUx3ExactBrwsrSaveDlg");
			oExactBrowser.addAggregation("controls", oExactBrowser._saveDialog);
		}
		oExactBrowser._saveDialog.setPosition(sap.ui.core.Popup.Dock.EndTop, sap.ui.core.Popup.Dock.EndBottom, oExactBrowser._saveButton.getDomRef(), "0 13", "none");
		oExactBrowser._saveDialog.open();
	};

}());