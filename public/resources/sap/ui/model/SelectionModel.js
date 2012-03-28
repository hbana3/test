/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.model.SelectionModel
jQuery.sap.declare("sap.ui.model.SelectionModel");

jQuery.sap.require("sap.ui.base.EventProvider");


/**
 * Constructs an instance of a sap.ui.model.SelectionModel.
 *
 * @class sap.ui.model.SelectionModel
 * @extends sap.ui.base.Object
 *
 * @author SAP AG
 * @version 1.2.0
 *
 * @param iSelectionMode {int} <code>sap.ui.model.SelectionModel.SINGLE_SELECTION</code> or <code>sap.ui.model.SelectionModel.MULTI_SELECTION</code>
 * @param iMinIndex {int} minimum possible index of the selection  
 * @param iMaxIndex {int} maximum possible index of the selection  
 *
 * @constructor
 * @public
 */
sap.ui.model.SelectionModel = function(iSelectionMode) {
	sap.ui.base.EventProvider.apply(this);
	
	this.iSelectionMode = iSelectionMode || sap.ui.model.SelectionModel.SINGLE_SELECTION;
	
	this.aSelectedIndices = [];
	this.iLeadIndex = -1;
	
};
sap.ui.model.SelectionModel.prototype = jQuery.sap.newObject(sap.ui.base.EventProvider.prototype);

sap.ui.base.Object.defineClass("sap.ui.model.SelectionModel", {
	baseType : "sap.ui.base.EventProvider"
});

sap.ui.model.SelectionModel.M_EVENTS = {
	/**
	 * SelectionChanged Event
	 */
	SelectionChanged : "selectionChanged"
};


/**
 * SelectionMode: Single Selection
 */
sap.ui.model.SelectionModel.SINGLE_SELECTION = 0;

/**
 * SelectionMode: Multi Selection
 */
sap.ui.model.SelectionModel.MULTI_SELECTION = 1;


/**
 * Returns the current selection mode.
 * @return the current selection mode
 */
sap.ui.model.SelectionModel.prototype.getSelectionMode = function() {
	return this.iSelectionMode;
};

/**
 * Sets the selection mode. The following list describes the accepted
 * selection modes:
 * <ul>
 * <li>{@code sap.ui.model.SelectionModel.SINGLE_SELECTION} -
 *   Only one list index can be selected at a time. In this mode,
 *   {@code setSelectionInterval} and {@code addSelectionInterval} are
 *   equivalent, both replacing the current selection with the index
 *   represented by the second argument (the "lead").
 * <li>{@code sap.ui.model.SelectionModel.MULTI_SELECTION} -
 *   In this mode, there's no restriction on what can be selected.
 * </ul>
 * 
 * @param iSelectionMode {int} selection mode
 */
sap.ui.model.SelectionModel.prototype.setSelectionMode = function(iSelectionMode) {
	this.iSelectionMode = iSelectionMode || sap.ui.model.SelectionModel.SINGLE_SELECTION;
};

/**
 * Returns true if the specified index is selected.
 * @return {boolean} true if the specified index is selected.
 */
sap.ui.model.SelectionModel.prototype.isSelectedIndex = function(iIndex) {
	return jQuery.inArray(iIndex, this.aSelectedIndices) !== -1;
};

/**
 * Return the second index argument from the most recent call to 
 * setSelectionInterval(), addSelectionInterval() or removeSelectionInterval().
 * @return {int} lead selected index
 */
sap.ui.model.SelectionModel.prototype.getLeadSelectedIndex = function() {
	return this.iLeadIndex;
};

/**
 * Set the lead selection index. 
 * @param iLeadIndex {int} sets the lead selected index
 */
sap.ui.model.SelectionModel.prototype.setLeadSelectedIndex = function(iLeadIndex) {
	this.iLeadIndex = iLeadIndex;
	this.fireSelectionChanged();
};


/**
 * Returns the first selected index or -1 if the selection is empty.
 * @return {int} first selected index or -1
 */
sap.ui.model.SelectionModel.prototype.getMinSelectionIndex = function() {
	if (this.aSelectedIndices.length > 0) {
		var aIndices = this.aSelectedIndices.sort(function(a, b) { return a - b; });
		return aIndices[0];
	} else {
		return -1;
	}
};

/**
 * Returns the last selected index or -1 if the selection is empty.
 * @return {int} last selected index or -1
 */
sap.ui.model.SelectionModel.prototype.getMaxSelectionIndex = function() {
	if (this.aSelectedIndices.length > 0) {
		var aIndices = this.aSelectedIndices.sort(function(a, b) { return b - a; });
		return aIndices[0];
	} else {
		return -1;
	}
};


/**
 * Returns the selected indices as array
 * @return array of selected indices
 */
sap.ui.model.SelectionModel.prototype.getSelectedIndices = function() {
	var aIndices = this.aSelectedIndices.sort(function(a, b) { return a - b; });
	return aIndices;
};


/** 
 * Changes the selection to be between {@code iFromIndex} and {@code iToIndex}
 * inclusive. {@code iFromIndex} doesn't have to be less than or equal to
 * {@code index1}.
 * <p>
 * In {@code SINGLE_SELECTION} selection mode, only the second index
 * is used.
 * <p>
 * If this represents a change to the current selection, then each
 * {@code ListSelectionListener} is notified of the change.
 * 
 * @param iFromIndex {int} one end of the interval.
 * @param iToIndex {int} other end of the interval
 */
sap.ui.model.SelectionModel.prototype.setSelectionInterval = function(iFromIndex, iToIndex) {
	if (this.iSelectionMode === sap.ui.model.SelectionModel.SINGLE_SELECTION) {
		this.aSelectedIndices = [];
		this.addSelectionInterval(iToIndex, iToIndex);
	} else {
		this.aSelectedIndices = [];
		this.addSelectionInterval(iFromIndex, iToIndex);
	}
};

/** 
 * Changes the selection to be the set union of the current selection
 * and the indices between {@code iFromIndex} and {@code iToIndex} inclusive.
 * {@code iFromIndex} doesn't have to be less than or equal to {@code iToIndex}.
 * <p>
 * In {@code SINGLE_SELECTION} selection mode, this is equivalent
 * to calling {@code setSelectionInterval}, and only the second index
 * is used. 
 * <p>
 * 
 * @param iFromIndex {int} one end of the interval.
 * @param iToIndex {int} other end of the interval
 */
sap.ui.model.SelectionModel.prototype.addSelectionInterval = function(iFromIndex, iToIndex) {
	if (this.iSelectionMode === sap.ui.model.SelectionModel.SINGLE_SELECTION) {
		iFromIndex = iToIndex;
	}
	var iFrom = Math.min(iFromIndex, iToIndex);
	var iTo = Math.max(iFromIndex, iToIndex);
	for (var iIndex = iFrom; iIndex <= iTo; iIndex++) {
		if (jQuery.inArray(iIndex, this.aSelectedIndices) === -1) {
			this.aSelectedIndices.push(iIndex);
		}
	}
	this.iLeadIndex = iTo;
	this.fireSelectionChanged();
};

/** 
 * Changes the selection to be the set difference of the current selection
 * and the indices between {@code iFromIndex} and {@code iToIndex} inclusive.
 * {@code iFromIndex} doesn't have to be less than or equal to {@code iToIndex}.
 * 
 * @param iFromIndex {int} one end of the interval.
 * @param iToIndex {int} other end of the interval
 */
sap.ui.model.SelectionModel.prototype.removeSelectionInterval = function(iFromIndex, iToIndex) {
	if (this.iSelectionMode === sap.ui.model.SelectionModel.SINGLE_SELECTION) {
		iFromIndex = iToIndex;
	}
	var iFrom = Math.min(iFromIndex, iToIndex);
	var iTo = Math.max(iFromIndex, iToIndex);
	for (var iIndex = iFrom; iIndex <= iTo; iIndex++) {
		var iIndexToRemove = jQuery.inArray(iIndex, this.aSelectedIndices);
		if (iIndexToRemove > -1) {
			this.aSelectedIndices.splice(iIndexToRemove, 1);
		}
		if (iIndex === this.iLeadIndex) {
			this.iLeadIndex = -1;
		}
	}
	this.fireSelectionChanged();
};


/**
 * Change the selection to the empty set.
 */
sap.ui.model.SelectionModel.prototype.clearSelection = function() {
	this.aSelectedIndices = [];
	this.iLeadIndex = -1;
	this.fireSelectionChanged();
};


/**
 * Attach event-handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.model.SelectionModel</code>.<br/>
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this Model is used.
 *
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.SelectionModel.prototype.attachSelectionChanged = function(oData, fnFunction, oListener) {
	this.attachEvent("selectionChanged", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.model.SelectionModel</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.model.SelectionModel.prototype.detachSelectionChanged = function(fnFunction, oListener) {
	this.detachEvent("selectionChanged", fnFunction, oListener);
	return this;
};

/**
 * Fire event 'selectionChanged' to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'leadIndex' of type <code>int</code> Lead selection index.</li>
 * <li>'rowIndices' of type <code>int[]</code> Other selected indices (if available)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.model.SelectionModel} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.model.SelectionModel.prototype.fireSelectionChanged = function(mArguments) {
	this.fireEvent("selectionChanged", mArguments);
	return this;
};