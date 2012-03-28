/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.MatrixLayoutCell.
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayoutCell");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new layout/MatrixLayoutCell.
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
 * <li>backgroundDesign : sap.ui.commons.layout.BackgroundDesign</li>
 * <li>colSpan : int</li>
 * <li>hAlign : sap.ui.commons.layout.HAlign</li>
 * <li>padding : sap.ui.commons.layout.Padding</li>
 * <li>rowSpan : int</li>
 * <li>separation : sap.ui.commons.layout.Separation</li>
 * <li>vAlign : sap.ui.commons.layout.VAlign</li></ul>
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
 * 
 * Non-control element used as part of a matrix layout's inner structure.
 * 
 * @extends sap.ui.core.Element
 *
 * @author d029921 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.layout.MatrixLayoutCell.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.layout.MatrixLayoutCell. 
 * Resulting metadata can be obtained via sap.ui.commons.layout.MatrixLayoutCell.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.layout.MatrixLayoutCell", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getBackgroundDesign", "setBackgroundDesign", "getColSpan", "setColSpan", "getHAlign", "setHAlign", "getPadding", "setPadding", "getRowSpan", "setRowSpan", "getSeparation", "setSeparation", "getVAlign", "setVAlign", 
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", 
    // associations
    
    // events
    
    // methods
    "addStyleClass", "removeStyleClass", "hasStyleClass"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  aggregatingType : "MatrixLayoutRow",
  properties : {
    "backgroundDesign" : {name : "backgroundDesign", type : "sap.ui.commons.layout.BackgroundDesign", group : "", defaultValue : 'Transparent'},
    "colSpan" : {name : "colSpan", type : "int", group : "", defaultValue : 1},
    "hAlign" : {name : "hAlign", type : "sap.ui.commons.layout.HAlign", group : "", defaultValue : 'Begin'},
    "padding" : {name : "padding", type : "sap.ui.commons.layout.Padding", group : "", defaultValue : 'End'},
    "rowSpan" : {name : "rowSpan", type : "int", group : "", defaultValue : 1},
    "separation" : {name : "separation", type : "sap.ui.commons.layout.Separation", group : "", defaultValue : 'None'},
    "vAlign" : {name : "vAlign", type : "sap.ui.commons.layout.VAlign", group : "", defaultValue : 'Middle'}
  },
  defaultAggregation : "content",
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>backgroundDesign</code>.
 * 
 * Determines the matrix layout cell's background design.
 * 
 *
 * Default value is <code>'Transparent'</code>
 *
 * @return {sap.ui.commons.layout.BackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getBackgroundDesign = function() {
	return this.getProperty("backgroundDesign");
};

/**
 * Setter for property <code>backgroundDesign</code>.
 *
 * Default value is <code>'Transparent'</code> 
 *
 * @param {sap.ui.commons.layout.BackgroundDesign} oBackgroundDesign  new value for property <code>backgroundDesign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setBackgroundDesign = function(oBackgroundDesign) {
	this.setProperty("backgroundDesign", oBackgroundDesign);
	return this;
};


/**
 * Getter for property <code>colSpan</code>.
 * 
 * Determines how many columns of the underlying grid structure are occupied
 * by this matrix layout cell.
 * 
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>colSpan</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getColSpan = function() {
	return this.getProperty("colSpan");
};

/**
 * Setter for property <code>colSpan</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iColSpan  new value for property <code>colSpan</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setColSpan = function(iColSpan) {
	this.setProperty("colSpan", iColSpan);
	return this;
};


/**
 * Getter for property <code>hAlign</code>.
 * 
 * Determines the horizontal alignment of the matrix layout cell's content
 * with the cell's borders.
 * 
 *
 * Default value is <code>'Begin'</code>
 *
 * @return {sap.ui.commons.layout.HAlign} the value of property <code>hAlign</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getHAlign = function() {
	return this.getProperty("hAlign");
};

/**
 * Setter for property <code>hAlign</code>.
 *
 * Default value is <code>'Begin'</code> 
 *
 * @param {sap.ui.commons.layout.HAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setHAlign = function(oHAlign) {
	this.setProperty("hAlign", oHAlign);
	return this;
};


/**
 * Getter for property <code>padding</code>.
 * 
 * Determines the padding of the matrix layout cell's content within the
 * cell's borders. The default value is appropriate for all cells in a
 * form-like layout. Consider to remove the padding on the outer layout in
 * case of nesting.
 * 
 *
 * Default value is <code>'End'</code>
 *
 * @return {sap.ui.commons.layout.Padding} the value of property <code>padding</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getPadding = function() {
	return this.getProperty("padding");
};

/**
 * Setter for property <code>padding</code>.
 *
 * Default value is <code>'End'</code> 
 *
 * @param {sap.ui.commons.layout.Padding} oPadding  new value for property <code>padding</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setPadding = function(oPadding) {
	this.setProperty("padding", oPadding);
	return this;
};


/**
 * Getter for property <code>rowSpan</code>.
 * Determines how many rows of the underlying grid structure are occupied by this matrix layout cell.
 * In case a row-height is used, all rows affected by the RowSpan must have the same unit.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>rowSpan</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getRowSpan = function() {
	return this.getProperty("rowSpan");
};

/**
 * Setter for property <code>rowSpan</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iRowSpan  new value for property <code>rowSpan</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setRowSpan = function(iRowSpan) {
	this.setProperty("rowSpan", iRowSpan);
	return this;
};


/**
 * Getter for property <code>separation</code>.
 * 
 * Determines how a matrix layout cell is separated from its predecessor,
 * via a vertical gutter of variable width, with or without a vertical line.
 * 
 *
 * Default value is <code>'None'</code>
 *
 * @return {sap.ui.commons.layout.Separation} the value of property <code>separation</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getSeparation = function() {
	return this.getProperty("separation");
};

/**
 * Setter for property <code>separation</code>.
 *
 * Default value is <code>'None'</code> 
 *
 * @param {sap.ui.commons.layout.Separation} oSeparation  new value for property <code>separation</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setSeparation = function(oSeparation) {
	this.setProperty("separation", oSeparation);
	return this;
};


/**
 * Getter for property <code>vAlign</code>.
 * 
 * Determines the vertical alignment of the matrix layout cell's content
 * with the cell's borders.
 * 
 *
 * Default value is <code>'Middle'</code>
 *
 * @return {sap.ui.commons.layout.VAlign} the value of property <code>vAlign</code>
 * @public
 * 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getVAlign = function() {
	return this.getProperty("vAlign");
};

/**
 * Setter for property <code>vAlign</code>.
 *
 * Default value is <code>'Middle'</code> 
 *
 * @param {sap.ui.commons.layout.VAlign} oVAlign  new value for property <code>vAlign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setVAlign = function(oVAlign) {
	this.setProperty("vAlign", oVAlign);
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * The matrix layout cell's content (arbitrary controls).
 * 
 * If the matrix row has a defined height and the matrix has layoutFixed = true, the controls inside of a cell should all use the same unit for its height property.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.getContent = function() {
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
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.addContent = function(oContent) {
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
sap.ui.commons.layout.MatrixLayoutCell.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.removeAllContent = function() {
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
sap.ui.commons.layout.MatrixLayoutCell.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};


/**
 * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML element.
 * 
 * This method is intended to be used to mark controls as being of a special type for which
 * special styling can be provided using CSS selectors that reference this style class name.
 * 
 * <pre>
 * Example:
 * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
 * 
 * ...and in CSS:
 * .myRedTextButton {
 * color: red;
 * }
 * </pre>
 * 
 * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then
 * make the text in this particular button red.
 * 
 * Only characters allowed inside HTML attributes are allowed.
 * Quotes are not allowed and this method will ignore any strings containing quotes.
 * Strings containing spaces are interpreted as ONE custom style class (even though CSS selectors interpret them
 * as different classes) and can only removed later by calling removeStyleClass() with exactly the
 * same (space-containing) string as parameter.
 * Multiple calls with the same sStyleClass will have no different effect than calling once.
 * If sStyleClass is null, the call is ignored.
 * 
 * Returns <code>this</code> to allow method chaining
 *
 * @name sap.ui.commons.layout.MatrixLayoutCell.prototype.addStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the CSS class name to be added

 * @type sap.ui.commons.layout.MatrixLayoutCell
 * @public
 */


/**
 * Removes the given string from the list of custom style classes that have been set previously.
 * Regular style classes like "sapUiBtn" cannot be removed.
 * 
 * Returns <code>this</code> to allow method chaining
 *
 * @name sap.ui.commons.layout.MatrixLayoutCell.prototype.removeStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the style to be removed

 * @type sap.ui.commons.layout.MatrixLayoutCell
 * @public
 */


/**
 * Returns true if the given style class string is valid and if this Element has this style class set via a previous call to addStyleClass().
 *
 * @name sap.ui.commons.layout.MatrixLayoutCell.prototype.hasStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the style to check for

 * @type boolean
 * @public
 */


// Start of sap/ui/commons/layout/MatrixLayoutCell.js
jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");
sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.layout.MatrixLayoutCell.prototype);

/**
 * Setter for the aggregated <code>content</code>.
 * It removes all existing content (see function <code>removeAllContent</code>) from the layout cell
 * before the new content control is added.
 * @param oContent {sap.ui.core.Control}
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 0.12.0.
 *             Use the function <code>addContent</code> instead. The support of this function will be removed
 *             in one of the next versions.
 */
sap.ui.commons.layout.MatrixLayoutCell.prototype.setContent = function(oContent) {
	this.removeAllContent();
	return this.addContent(oContent);
};