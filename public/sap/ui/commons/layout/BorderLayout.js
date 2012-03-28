/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.BorderLayout.
jQuery.sap.declare("sap.ui.commons.layout.BorderLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new layout/BorderLayout.
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
 * <li>rtl : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>height : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>top : sap.ui.core.Element</li>
 * <li>begin : sap.ui.core.Element</li>
 * <li>center : sap.ui.core.Element</li>
 * <li>end : sap.ui.core.Element</li>
 * <li>bottom : sap.ui.core.Element</li></ul>
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
 * A BorderLayout control based upon the JAVA border-layout.
 * With this layout you are able to divide your available space into 5 areas whose sizes can be defined.
 * The 5 areas are:
 * Top: Header;
 * Bottom: Footer;
 * Begin: left/right handed side panel;
 * Center: content area in the middle;
 * End: right/left handed side panel.
 * @extends sap.ui.core.Control
 *
 * @author Maximilian Naehrlich 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.layout.BorderLayout = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.layout.BorderLayout.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.layout.BorderLayout. 
 * Resulting metadata can be obtained via sap.ui.commons.layout.BorderLayout.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.layout.BorderLayout", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getRtl", "setRtl", "getWidth", "setWidth", "getHeight", "setHeight", 
    // aggregations
    "getTop", "setTop", "destroyTop", "getBegin", "setBegin", "destroyBegin", "getCenter", "setCenter", "destroyCenter", "getEnd", "setEnd", "destroyEnd", "getBottom", "setBottom", "destroyBottom", 
    // associations
    
    // events
    
    // methods
    "createArea", "setAreaData", "addContent", "insertContent", "removeContent", "removeAllContent", "getContent", "indexOfContent", "destroyContent", "getAreaData", "getAreaById"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "rtl" : {name : "rtl", type : "boolean", group : "Appearance", defaultValue : false},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'}
  },
  
  aggregations : {
    "top" : {name : "top", type : "sap.ui.core.Element", multiple : false}, 
    "begin" : {name : "begin", type : "sap.ui.core.Element", multiple : false}, 
    "center" : {name : "center", type : "sap.ui.core.Element", multiple : false}, 
    "end" : {name : "end", type : "sap.ui.core.Element", multiple : false}, 
    "bottom" : {name : "bottom", type : "sap.ui.core.Element", multiple : false}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>rtl</code>.
 * 
 * RTL will rotate the begin and end areas.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>rtl</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getRtl = function() {
	return this.getProperty("rtl");
};

/**
 * Setter for property <code>rtl</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bRtl  new value for property <code>rtl</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.setRtl = function(bRtl) {
	this.setProperty("rtl", bRtl);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Defines the width of the BorderLayout
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * Defines the height of the BorderLayout
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayout.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};

	
/**
 * Getter for aggregation <code>top</code>.<br/>
 * Represents the top area
 * 
 * @return {sap.ui.core.Element}
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.getTop = function() {
	return this.getAggregation("top", null);
};


/**
 * Setter for the aggregated <code>top</code>.
 * @param oTop {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.setTop = function(oTop) {
	this.setAggregation("top", oTop);
	return this;
};
	

/**
 * Destroys the top in the aggregation 
 * named <code>top</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyTop = function() {
	this.destroyAggregation("top");
	return this;
};

	
/**
 * Getter for aggregation <code>begin</code>.<br/>
 * Represents the begin area
 * 
 * @return {sap.ui.core.Element}
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.getBegin = function() {
	return this.getAggregation("begin", null);
};


/**
 * Setter for the aggregated <code>begin</code>.
 * @param oBegin {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.setBegin = function(oBegin) {
	this.setAggregation("begin", oBegin);
	return this;
};
	

/**
 * Destroys the begin in the aggregation 
 * named <code>begin</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyBegin = function() {
	this.destroyAggregation("begin");
	return this;
};

	
/**
 * Getter for aggregation <code>center</code>.<br/>
 * Represents the center area
 * 
 * @return {sap.ui.core.Element}
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.getCenter = function() {
	return this.getAggregation("center", null);
};


/**
 * Setter for the aggregated <code>center</code>.
 * @param oCenter {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.setCenter = function(oCenter) {
	this.setAggregation("center", oCenter);
	return this;
};
	

/**
 * Destroys the center in the aggregation 
 * named <code>center</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyCenter = function() {
	this.destroyAggregation("center");
	return this;
};

	
/**
 * Getter for aggregation <code>end</code>.<br/>
 * Represents the end area
 * 
 * @return {sap.ui.core.Element}
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.getEnd = function() {
	return this.getAggregation("end", null);
};


/**
 * Setter for the aggregated <code>end</code>.
 * @param oEnd {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.setEnd = function(oEnd) {
	this.setAggregation("end", oEnd);
	return this;
};
	

/**
 * Destroys the end in the aggregation 
 * named <code>end</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyEnd = function() {
	this.destroyAggregation("end");
	return this;
};

	
/**
 * Getter for aggregation <code>bottom</code>.<br/>
 * Represents the bottom area
 * 
 * @return {sap.ui.core.Element}
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.getBottom = function() {
	return this.getAggregation("bottom", null);
};


/**
 * Setter for the aggregated <code>bottom</code>.
 * @param oBottom {sap.ui.core.Element}
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.setBottom = function(oBottom) {
	this.setAggregation("bottom", oBottom);
	return this;
};
	

/**
 * Destroys the bottom in the aggregation 
 * named <code>bottom</code>.
 * @return {sap.ui.commons.layout.BorderLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayout.prototype.destroyBottom = function() {
	this.destroyAggregation("bottom");
	return this;
};


/**
 * Creates the specified area and adds the given controls to it. Returns the created area.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.createArea
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies which area will be created. If the area has already been created, nothing is done.
 * @param {sap.ui.core.Control} 
 *         oControls
 *         n Controls can be submitted to be added to the new created area. Each control is submitted as one argument.

 * @type sap.ui.core.Element
 * @public
 */


/**
 * Set the properties of the specified area with the given values.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.setAreaData
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose properties will be set.
 * @param {object} 
 *         sData
 *         JSON-like object that contains the values to be set.

 * @type void
 * @public
 */


/**
 * Adds controls to the specified area.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.addContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area where controls will be added.
 * @param {sap.ui.core.Control} 
 *         oControls
 *         n Controls can be submitted to be added. Each control is submitted as one argument.

 * @type void
 * @public
 */


/**
 * Inserts controls to an area at a given index.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.insertContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area where controls will be inserted.
 * @param {int} 
 *         iIndex
 *         Specifies the index where controls will be added. For a negative value of iIndex, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position.
 * @param {sap.ui.core.Control} 
 *         oControl
 *         n Controls can be submitted to be added. Each control is submitted as one argument.

 * @type void
 * @public
 */


/**
 * Removes the content with the given index from an area.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.removeContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose content will be removed.
 * @param {int} 
 *         iIndex
 *         Specifies the index of the control that will be removed.

 * @type void
 * @public
 */


/**
 * Removes all content from an area.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.removeAllContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose content will be removed.

 * @type void
 * @public
 */


/**
 * Returns all controls inside the specified area inside an array.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.getContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose content controls will be returned.

 * @type object
 * @public
 */


/**
 * Determines the index of a given content control.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.indexOfContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area that will be searched.
 * @param {sap.ui.core.Control} 
 *         oContent
 *         Specifies the control whose index will be searched.

 * @type int
 * @public
 */


/**
 * Destroys the content of the specified area.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.destroyContent
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose content will be destroyed.

 * @type void
 * @public
 */


/**
 * Returns a JSON like object that contains all properties values of the requested area.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.getAreaData
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose data will be returned.

 * @type object
 * @public
 */


/**
 * Returns the object of the specified area. If the area does not exist, the area will be created and returned.
 *
 * @name sap.ui.commons.layout.BorderLayout.prototype.getAreaById
 * @function
 * @param {string} 
 *         sAreaId
 *         Specifies the area whose object will be returned.

 * @type sap.ui.core.Element
 * @public
 */


// Start of sap/ui/commons/layout/BorderLayout.js
/**
 * This file defines behavior for the control,
 */
sap.ui.commons.layout.BorderLayout.prototype.init = function(){
   // do something for initialization...

};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.createArea = function()
{
	// FIXME getAreaById() down below assumes that this method returns the created area, but it doesn't
	var top = sap.ui.commons.layout.BorderLayoutAreaTypes.top;
	var begin = sap.ui.commons.layout.BorderLayoutAreaTypes.begin;
	var center = sap.ui.commons.layout.BorderLayoutAreaTypes.center;
	var end = sap.ui.commons.layout.BorderLayoutAreaTypes.end;
	var bottom = sap.ui.commons.layout.BorderLayoutAreaTypes.bottom;

	if(arguments[0] != top && arguments[0] != begin && arguments[0] != center && arguments[0] != end && arguments[0] != bottom ){
		return;
	}


	/*if(arguments[0] != "top" && arguments[0] != "begin" && arguments[0] != "center" && arguments[0] != "end" && arguments[0] != "bottom" ){
		return;
	}*/

	var oArea = new sap.ui.commons.layout.BorderLayoutArea(this.getId()+arguments[0]);
	oArea.setAreaId(arguments[0]);

//if the expected area has already been created, nothing is done
	switch(arguments[0])
	{
	case top:		if(this.getTop()){
						return
					}
					this.setTop(oArea);
					break;
	case begin:	if(this.getBegin()){
						return;
					}
					this.setBegin(oArea);
					break;
	case center:	if(this.getCenter()){
						return;
					}
					this.setCenter(oArea);
					break;
	case end:		if(this.getEnd()){
						return;
					}
					this.setEnd(oArea);
					break;
	case bottom:	if(this.getBottom()){
						return;
					}
					this.setBottom(oArea);
					break;
	}



	for( var i = 1 ; i < arguments.length ; i++){
		var oContent = arguments[i];
		oArea.addContent(oContent);
	}

	return oArea;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.setAreaData = function(sAreaId, oData)
{
	var oArea = this.getAreaById(sAreaId);

	if(!oArea){
		return this;
	}

	if(oArea){
		if(oData.size != null)
		{
			oArea.setSize(oData.size);
		}
		if(oData.visible != null)
		{
			oArea.setVisible(oData.visible);
		}
		if(oData.overflowX != null)
		{
			oArea.setOverflowX(oData.overflowX);
		}
		if(oData.overflowY != null)
		{
			oArea.setOverflowY(oData.overflowY);
		}
		if(oData.contentAlign != null)
		{
			oArea.setContentAlign(oData.contentAlign);
		}
	}
	return this;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.addContent = function()
{
	//arguments[0] -> areaID
	//arguments[>0] -> controls
	var oArea = this.getAreaById(arguments[0]);

	/*if(!oArea){
		this.createArea(arguments[0]);
		oArea = this.getAreaById(arguments[0]);
	}*/

	for(var i=1;i<=arguments.length-1;i++){
		oArea.addContent(arguments[i]);
	}
	return this;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.insertContent = function()//obsolete
{
	//arguments[0] -> areaID
	//arguments[1] -> index
	//arguments[>1] -> controls
	var oArea = this.getAreaById(arguments[0]);
	var indexCnt = arguments[1];

	for(var i=2;i<=arguments.length-1;i++){
		oArea.insertContent(arguments[i], indexCnt);
		indexCnt++;
	}
	return this;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.removeContent = function(sAreaId, vElement)
{
	var oArea = this.getAreaById(sAreaId);
	oArea.removeContent(vElement);
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.removeAllContent = function(sAreaId)
{
	var oArea = this.getAreaById(sAreaId);
	oArea.removeAllContent();
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.getContent = function(sAreaId)
{
	var oArea = this.getAreaById(sAreaId);

	return oArea.getContent();
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.indexOfContent = function(sAreaId, oContent)
{
	var oArea = this.getAreaById(sAreaId);
	return oArea.indexOfContent(oContent);
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.destroyContent = function(sAreaId)
{
	var oArea = this.getAreaById(sAreaId);
	oArea.destroyContent();
	return this;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.getAreaData = function(sAreaId)
{
	var oArea = this.getAreaById(sAreaId);

	if(!oArea){
		return;
	}

	var oData = {};
	oData.size			= oArea.getSize();
	oData.visible		= oArea.getVisible();
	oData.overflowX		= oArea.getOverflowX();
	oData.overflowY		= oArea.getOverflowY();
	oData.contentAlign	= oArea.getContentAlign();
	return oData;
};
// -------------------------------------------------------------------------------------------------------------
sap.ui.commons.layout.BorderLayout.prototype.getAreaById = function(sAreaId)
{
	var oArea;

	switch(sAreaId)
	{
	case sap.ui.commons.layout.BorderLayoutAreaTypes.top	:	oArea = this.getTop();
																break;
	case sap.ui.commons.layout.BorderLayoutAreaTypes.begin	:	oArea = this.getBegin();
																break;
	case sap.ui.commons.layout.BorderLayoutAreaTypes.center	:	oArea = this.getCenter();
																break;
	case sap.ui.commons.layout.BorderLayoutAreaTypes.end	:	oArea = this.getEnd();
																break;
	case sap.ui.commons.layout.BorderLayoutAreaTypes.bottom	:	oArea = this.getBottom();
																break;
	}

	if(!oArea){
		oArea = this.createArea(arguments[0]);
	}

	return oArea;
};
// -------------------------------------------------------------------------------------------------------------