/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.DataSetSimpleView.
jQuery.sap.declare("sap.ui.ux3.DataSetSimpleView");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new DataSetSimpleView.
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
 * <li>floating : boolean</li>
 * <li>name : string</li>
 * <li>icon : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>template : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
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
 * Add your documentation for the new DataSetSimpleView
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.DataSetSimpleView = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.DataSetSimpleView.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.ux3.DataSetSimpleView. 
 * Resulting metadata can be obtained via sap.ui.ux3.DataSetSimpleView.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.DataSetSimpleView", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  interfaces : ["sap.ui.ux3.DataSetView"],
  publicMethods : [
    // properties 
    "getFloating", "setFloating", "getName", "setName", "getIcon", "setIcon", 
    // aggregations
    "getTemplate", "insertTemplate", "addTemplate", "removeTemplate", "removeAllTemplate", "indexOfTemplate", "destroyTemplate"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "floating" : {name : "floating", type : "boolean", group : "Misc", defaultValue : true},
    "name" : {name : "name", type : "string", group : "Misc", defaultValue : "Name of this View"},
    "icon" : {name : "icon", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {
    "template" : {name : "template", type : "sap.ui.core.Control", multiple : false}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>floating</code>.
 * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>floating</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getFloating = function() {
	return this.getProperty("floating");
};

/**
 * Setter for property <code>floating</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFloating  new value for property <code>floating</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetSimpleView.prototype.setFloating = function(bFloating) {
	this.setProperty("floating", bFloating);
	return this;
};


/**
 * Getter for property <code>name</code>.
 * Name of the View
 *
 * Default value is <code>"Name of this View"</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getName = function() {
	return this.getProperty("name");
};

/**
 * Setter for property <code>name</code>.
 *
 * Default value is <code>"Name of this View"</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetSimpleView.prototype.setName = function(sName) {
	this.setProperty("name", sName);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * Icon source for this view
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.ux3.DataSetSimpleView.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetSimpleView.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};

	
/**
 * Getter for aggregation <code>template</code>.<br/>
 * template
 * 
 * @return {sap.ui.core.Control}
 * @public
 */
sap.ui.ux3.DataSetSimpleView.prototype.getTemplate = function() {
	return this.getAggregation("template", null);
};


/**
 * Setter for the aggregated <code>template</code>.
 * @param oTemplate {sap.ui.core.Control}
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetSimpleView.prototype.setTemplate = function(oTemplate) {
	this.setAggregation("template", oTemplate);
	return this;
};
	

/**
 * Destroys  in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.DataSetSimpleView.prototype.destroyTemplate = function() {
	this.destroyAggregation("template");
	return this;
};


// Start of sap/ui/ux3/DataSetSimpleView.js
///**
// * This file defines behavior for the control, 
// */

/**
 * Initialization of DataSetSimpleView
 *  	
 * @private
*/
sap.ui.ux3.DataSetSimpleView.prototype.init = function(){
   this._oDataSet = this.getParent();
};

/**
 * Eventhandler for the selection of an Item
 *  	
 * @param {event} oEvent SelectionChanged event
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.handleSelection = function(oEvent) {
	var oldIndex = oEvent.getParameters().oldLeadSelectedIndex, 
		newIndex = oEvent.getParameters().newLeadSelectedIndex;
	if (oldIndex != -1) {
		jQuery.sap.byId(this.getParent().getSelectedItemId(oldIndex)).removeClass("sapUiUx3DSSVSelected");
	}
	if (newIndex != -1){
		jQuery.sap.byId(this.getParent().getSelectedItemId(newIndex)).addClass("sapUiUx3DSSVSelected");
	}
	
}

/**
 * Check if Item <code>oItem</code> is selected
 *  	
 * @param {DataSetItem} oItem DataSetItem instance
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.isItemSelected = function(oItem) {
	return this.getParent().isSelectedIndex(oItem._index);
}

/*** Intervace methods ***/ 

/**
 * View Initialization: Called when selecting the view
 *  	
 * @param {array} aItems Array of DataSetItems added to the parent DataSet
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.initView = function(aItems) {
	this.getParent().attachSelectionChanged(this.handleSelection, this);
	this.items = aItems;
	for (var i = 0; i < aItems.length; i++) {
    	var template = this.getTemplate().clone();
    	aItems[i].setTemplate(template);
    }
}

/**
 * View finalization: Called when leaving the view
 *  	
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.exitView = function() {
	this.getParent().detachSelectionChanged(this.handleSelection, this);
}