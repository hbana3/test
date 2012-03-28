/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/**
 * @namespace
 * @name sap.ui.util
 * @public
 */

// A helper type to represent a rectangle using screen coordinates
jQuery.sap.declare("sap.ui.util.Rect");
jQuery.sap.require("sap.ui.base.Object");

/**
 * Creates an instance of <code>sap.ui.util.Rect</code> with the given values.
 *
 * @class A rectangle is defined by its upper left corner (left &amp; top) and its width and height.
 *
 * @extends sap.ui.base.Object
 * @param {int} iTop the top position
 * @param {int} iLeft the left position
 * @param {int} iWidth the width
 * @param {int} iHeight the height
 * @version 1.2.0
 * @constructor
 * @public
 */
sap.ui.util.Rect = function(iTop, iLeft, iWidth, iHeight) {
	this.top = iTop || 0;
	this.left = iLeft || 0;
	this.width = iWidth || 0;
	this.height = iHeight || 0;
};
sap.ui.util.Rect.prototype = jQuery.sap.newObject(sap.ui.base.Object.prototype);

/**
 * Returns whether a point described by X and Y is inside this Rectangle's boundaries
 *
 * @param {int} iPosX
 * @param {int} iPosY
 * @return whether X and Y is inside this Rectangle's boundaries
 * @type  boolean
 * @public
 * @since 0.8.6
 */
sap.ui.util.Rect.prototype.contains = function(iPosX, iPosY) {
	jQuery.sap.assert(!isNaN(iPosX), "iPosX must be a number");
	jQuery.sap.assert(!isNaN(iPosY), "iPosY must be a number");

	return iPosX >= this.left
		&& iPosX <= this.left + this.width
		&& iPosY >= this.top
		&& iPosY <= this.top + this.height;
};

///**
//* Applies the current settings to the given oDomRef
//* @param {object} oDomRef the oDomRef
//* @param {sap.ui.util.Rect} [oBias] an optional parameter defining some offset to add to the applied style
//* @return
//*/
//sap.ui.util.Rect.prototype.applyToDom = function(oDomRef, oBias) {
//	if(oBias instanceof sap.ui.util.Rect){
//		for(var p in this){
//			oDomRef.style[p] = this[p] + oBias[p];
//		}
//	} else {
//		for(var p in this){
//			oDomRef.style[p] = this[p];
//		}
//	}
//};