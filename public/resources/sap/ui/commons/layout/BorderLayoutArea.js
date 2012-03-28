/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.BorderLayoutArea.
jQuery.sap.declare("sap.ui.commons.layout.BorderLayoutArea");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new layout/BorderLayoutArea.
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
 * <li>areaId : sap.ui.commons.layout.BorderLayoutAreaTypes</li>
 * <li>overflowX : string</li>
 * <li>overflowY : string</li>
 * <li>contentAlign : string</li>
 * <li>size : sap.ui.core.CSSSize</li>
 * <li>visible : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>content : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.core.Element#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * The BorderLayoutArea represents one area of a BorderLayout when using the BorderLayout control
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.layout.BorderLayoutArea.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.layout.BorderLayoutArea. 
 * Resulting metadata can be obtained via sap.ui.commons.layout.BorderLayoutArea.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.layout.BorderLayoutArea", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getAreaId", "setAreaId", "getOverflowX", "setOverflowX", "getOverflowY", "setOverflowY", "getContentAlign", "setContentAlign", "getSize", "setSize", "getVisible", "setVisible", 
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", 
    // associations
    
    // events
    
    // methods
    "setVisible"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "areaId" : {name : "areaId", type : "sap.ui.commons.layout.BorderLayoutAreaTypes", group : "Identification", defaultValue : sap.ui.commons.layout.BorderLayoutAreaTypes.top},
    "overflowX" : {name : "overflowX", type : "string", group : "Misc", defaultValue : 'auto'},
    "overflowY" : {name : "overflowY", type : "string", group : "Misc", defaultValue : 'auto'},
    "contentAlign" : {name : "contentAlign", type : "string", group : "Misc", defaultValue : 'left'},
    "size" : {name : "size", type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100px'},
    "visible" : {name : "visible", type : "boolean", group : "Misc", defaultValue : true}
  },
  
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>areaId</code>.
 * Defines which area the element represents.
 * {"top"; "begin"; "center"; "end"; "bottom")
 *
 * Default value is <code>top</code>
 *
 * @return {sap.ui.commons.layout.BorderLayoutAreaTypes} the value of property <code>areaId</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getAreaId = function() {
	return this.getProperty("areaId");
};

/**
 * Setter for property <code>areaId</code>.
 *
 * Default value is <code>top</code> 
 *
 * @param {sap.ui.commons.layout.BorderLayoutAreaTypes} oAreaId  new value for property <code>areaId</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setAreaId = function(oAreaId) {
	this.setProperty("areaId", oAreaId);
	return this;
};


/**
 * Getter for property <code>overflowX</code>.
 * The overflow mode of the area in horizontal direction (as CSS value)
 *
 * Default value is <code>auto</code>
 *
 * @return {string} the value of property <code>overflowX</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getOverflowX = function() {
	return this.getProperty("overflowX");
};

/**
 * Setter for property <code>overflowX</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {string} sOverflowX  new value for property <code>overflowX</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setOverflowX = function(sOverflowX) {
	this.setProperty("overflowX", sOverflowX);
	return this;
};


/**
 * Getter for property <code>overflowY</code>.
 * The overflow mode of the area in vertical direction (as CSS value)
 *
 * Default value is <code>auto</code>
 *
 * @return {string} the value of property <code>overflowY</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getOverflowY = function() {
	return this.getProperty("overflowY");
};

/**
 * Setter for property <code>overflowY</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {string} sOverflowY  new value for property <code>overflowY</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setOverflowY = function(sOverflowY) {
	this.setProperty("overflowY", sOverflowY);
	return this;
};


/**
 * Getter for property <code>contentAlign</code>.
 * The content alignment (as CSS value)
 *
 * Default value is <code>left</code>
 *
 * @return {string} the value of property <code>contentAlign</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getContentAlign = function() {
	return this.getProperty("contentAlign");
};

/**
 * Setter for property <code>contentAlign</code>.
 *
 * Default value is <code>left</code> 
 *
 * @param {string} sContentAlign  new value for property <code>contentAlign</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setContentAlign = function(sContentAlign) {
	this.setProperty("contentAlign", sContentAlign);
	return this;
};


/**
 * Getter for property <code>size</code>.
 * Defines the height (North/South) or the width (West/East). Is not used when the area element is in center.
 *
 * Default value is <code>100px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getSize = function() {
	return this.getProperty("size");
};

/**
 * Setter for property <code>size</code>.
 *
 * Default value is <code>100px</code> 
 *
 * @param {sap.ui.core.CSSSize} sSize  new value for property <code>size</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setSize = function(sSize) {
	this.setProperty("size", sSize);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Controls the area visibility
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls within the area
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.getContent = function() {
	return this.getAggregation("content", []);
};


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.addContent = function(oContent) {
	this.addAggregation("content", oContent);
	return this;
};

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.removeAllContent = function() {
	return this.removeAllAggregation("content");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.layout.BorderLayoutArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.BorderLayoutArea.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};


/**
 * Setter for property visible. Optionally a vanish/appearance-sliding animation is shown
 *
 * @name sap.ui.commons.layout.BorderLayoutArea.prototype.setVisible
 * @function
 * @param {boolean} 
 *         bVisible
 *         new value for property visible
 * @param {sap.ui.core.Control} 
 *         oBorderLayout
 *         OPTIONAL. When the corresponding BorderLayout control of the area is submitted a slide animation will be shown

 * @type void
 * @public
 */


// Start of sap/ui/commons/layout/BorderLayoutArea.js
sap.ui.commons.layout.BorderLayoutArea.prototype.init = function(){
   // do something for initialization...
	// set default values depending on areaId
	switch(this.getAreaId())
	{
		case "center":	this.setSize("");
						break;
	}
};

sap.ui.commons.layout.BorderLayoutArea.prototype.setVisible = function(bVisible) {
	// FIXME derived IDs should be created with a "-" as separator, case conversion not necessary?
	var sAreaId = this.getAreaId();
	var oBorderLayout = arguments[1];

	//if the current area is the center or if no BorderLayout is submitted no animation will be shown
	if(sAreaId=="center" || !oBorderLayout){
		this.setProperty("visible", bVisible);
		return this;
	}
	this.setProperty("visible", bVisible, true);


	if(oBorderLayout){
		var oBorderLayoutId = oBorderLayout.getId();
		var bRtl = oBorderLayout.getRtl();
		var jTop;
		var jBegin;
		var jCenter;
		var jEnd;
		var jBottom;
		var end = "0";
		if (bVisible) {
			end = this.getSize();
		}

		switch(sAreaId)
		{
			case "top":		jTop = jQuery.sap.byId(oBorderLayoutId+"top".toUpperCase());
							jBegin = jQuery.sap.byId(oBorderLayoutId+"begin".toUpperCase());
							jCenter = jQuery.sap.byId(oBorderLayoutId+"center".toUpperCase());
							jEnd = jQuery.sap.byId(oBorderLayoutId+"end".toUpperCase());

							jTop.animate({height: end});
							jBegin.animate({top: end});
							jCenter.animate({top: end});
							jEnd.animate({top: end});
							break;
			case "begin":	jBegin = jQuery.sap.byId(oBorderLayoutId+sAreaId.toUpperCase());
							jCenter = jQuery.sap.byId(oBorderLayoutId+"center".toUpperCase());

							jBegin.animate({width: end});
							if(bRtl){
								jCenter.animate({right: end});
							}else{
								jCenter.animate({left: end});
							}
							break;
			case "end":		jEnd = jQuery.sap.byId(oBorderLayoutId+sAreaId.toUpperCase());
							jCenter = jQuery.sap.byId(oBorderLayoutId+"center".toUpperCase());

							jEnd.animate({width: end});
							if(!bRtl){
								jCenter.animate({right: end});
							}else{
								jCenter.animate({left: end});
							}
							break;
			case "bottom":	jBottom = jQuery.sap.byId(oBorderLayoutId+"bottom".toUpperCase());
							jBegin = jQuery.sap.byId(oBorderLayoutId+"begin".toUpperCase());
							jCenter = jQuery.sap.byId(oBorderLayoutId+"center".toUpperCase());
							jEnd = jQuery.sap.byId(oBorderLayoutId+"end".toUpperCase());

							jBottom.animate({height: end});
							jBegin.animate({bottom: end});
							jCenter.animate({bottom: end});
							jEnd.animate({bottom: end});
							break;
		}
	}

	return this;
};