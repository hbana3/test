/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ExactAttribute.
jQuery.sap.declare("sap.ui.ux3.ExactAttribute");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new ExactAttribute.
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
 * <li>text : string</li>
 * <li>selected : boolean</li>
 * <li>showSubAttributesIndicator : boolean</li>
 * <li>additionalData : object</li>
 * <li>supplyActive : boolean</li>
 * <li>autoActivateSupply : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>attributes : sap.ui.ux3.ExactAttribute</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>supplyAttributes : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * An element for defining attributes and sub-attributes used within the Exact pattern.
 * 
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.ux3.ExactAttribute = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.ux3.ExactAttribute.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.ux3.ExactAttribute. 
 * Resulting metadata can be obtained via sap.ui.ux3.ExactAttribute.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.ux3.ExactAttribute", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getText", "setText", "getSelected", "setSelected", "getShowSubAttributesIndicator", "setShowSubAttributesIndicator", "getAdditionalData", "setAdditionalData", "getSupplyActive", "setSupplyActive", "getAutoActivateSupply", "setAutoActivateSupply", 
    // aggregations
    "getAttributes", "insertAttribute", "addAttribute", "removeAttribute", "removeAllAttributes", "indexOfAttribute", "destroyAttributes", 
    // associations
    
    // events
    "attachSupplyAttributes", "detachSupplyAttributes", 
    // methods
    "getShowSubAttributesIndicator_Computed"
  ],

  // ---- control specific ----
  library : "sap.ui.ux3",
  properties : {
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : null},
    "selected" : {name : "selected", type : "boolean", group : "Misc", defaultValue : null},
    "showSubAttributesIndicator" : {name : "showSubAttributesIndicator", type : "boolean", group : "Misc", defaultValue : true},
    "additionalData" : {name : "additionalData", type : "object", group : "Misc", defaultValue : null},
    "supplyActive" : {name : "supplyActive", type : "boolean", group : "Misc", defaultValue : true},
    "autoActivateSupply" : {name : "autoActivateSupply", type : "boolean", group : "Misc", defaultValue : false}
  },
  defaultAggregation : "attributes",
  aggregations : {
    "attributes" : {name : "attributes", type : "sap.ui.ux3.ExactAttribute", multiple : true, singularName : "attribute"}
  },
  associations : {},
  events : {
    "supplyAttributes" : "supplyAttributes"
  }

});	

sap.ui.ux3.ExactAttribute.M_EVENTS = {'supplyAttributes':'supplyAttributes'};


/**
 * Getter for property <code>text</code>.
 * The attribute name
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>selected</code>.
 * Specifies whether the attribute shall be selected
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getSelected = function() {
	return this.getProperty("selected");
};

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setSelected = function(bSelected) {
	this.setProperty("selected", bSelected);
	return this;
};


/**
 * Getter for property <code>showSubAttributesIndicator</code>.
 * Specifies whether the attribute shall have sub values for visual purposes.
 * The indicator which is a little arrow beside an attribute in the list is computed automatically
 * (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute).
 * In the case that a supply function is attached, and the supplyActive attribute has value 'true',
 * then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is
 * considered then and has to be maintained. If the back-end does not support count-calls, for example,
 * showSubAttributesIndicator should be set to true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSubAttributesIndicator</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator = function() {
	return this.getProperty("showSubAttributesIndicator");
};

/**
 * Setter for property <code>showSubAttributesIndicator</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSubAttributesIndicator  new value for property <code>showSubAttributesIndicator</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setShowSubAttributesIndicator = function(bShowSubAttributesIndicator) {
	this.setProperty("showSubAttributesIndicator", bShowSubAttributesIndicator);
	return this;
};


/**
 * Getter for property <code>additionalData</code>.
 * An example for additional data are database keys
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>additionalData</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getAdditionalData = function() {
	return this.getProperty("additionalData");
};

/**
 * Setter for property <code>additionalData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} sAdditionalData  new value for property <code>additionalData</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setAdditionalData = function(sAdditionalData) {
	this.setProperty("additionalData", sAdditionalData);
	return this;
};


/**
 * Getter for property <code>supplyActive</code>.
 * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false.
 * The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>supplyActive</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getSupplyActive = function() {
	return this.getProperty("supplyActive");
};

/**
 * Setter for property <code>supplyActive</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSupplyActive  new value for property <code>supplyActive</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setSupplyActive = function(bSupplyActive) {
	this.setProperty("supplyActive", bSupplyActive);
	return this;
};


/**
 * Getter for property <code>autoActivateSupply</code>.
 * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically
 * set to true on every unselect.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>autoActivateSupply</code>
 * @public
 * 
 */
sap.ui.ux3.ExactAttribute.prototype.getAutoActivateSupply = function() {
	return this.getProperty("autoActivateSupply");
};

/**
 * Setter for property <code>autoActivateSupply</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAutoActivateSupply  new value for property <code>autoActivateSupply</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setAutoActivateSupply = function(bAutoActivateSupply) {
	this.setProperty("autoActivateSupply", bAutoActivateSupply);
	return this;
};

	
/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * Values (sub attributes) of this attribute
 * 
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.getAttributes = function() {
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
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.insertAttribute = function(oAttribute, iIndex) {
	this.insertAggregation("attributes", oAttribute, iIndex);
	return this;
};

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.ux3.ExactAttribute.prototype.addAttribute = function(oAttribute) {
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
sap.ui.ux3.ExactAttribute.prototype.removeAttribute = function(vAttribute) {
	return this.removeAggregation("attributes", vAttribute);
};

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.removeAllAttributes = function() {
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
sap.ui.ux3.ExactAttribute.prototype.indexOfAttribute = function(oAttribute) {
	return this.indexOfAggregation("attributes", oAttribute);
};
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.destroyAttributes = function() {
	this.destroyAggregation("attributes");
	return this;
};


/**
 * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called. 
 *
 * @name sap.ui.ux3.ExactAttribute#supplyAttributes
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The ExactAttribute
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'supplyAttributes' event of this <code>sap.ui.ux3.ExactAttribute</code>.<br/>
 * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.attachSupplyAttributes = function(oData, fnFunction, oListener) {
	this.attachEvent("supplyAttributes", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'supplyAttributes' event of this <code>sap.ui.ux3.ExactAttribute</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.detachSupplyAttributes = function(fnFunction, oListener) {
	this.detachEvent("supplyAttributes", fnFunction, oListener);
	return this;	
};

/**
 * Fire event supplyAttributes to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'attribute' of type <code>sap.ui.ux3.ExactAttribute</code> The ExactAttribute</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.ux3.ExactAttribute.prototype.fireSupplyAttributes = function(mArguments) {
	this.fireEvent("supplyAttributes", mArguments);
	return this;
};


/**
 * See attribute showSubAttributesIndicator
 *
 * @name sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator_Computed
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/ux3/ExactAttribute.js
(function() {

//*** Overridden API functions ***


sap.ui.ux3.ExactAttribute.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	this._handleChange(this, "text");
	return this;
};


/**
 * @see sap.ui.core.Element.prototype.setTooltip
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setTooltip = function(oTooltip) {
	sap.ui.core.Element.prototype.setTooltip.apply(this, arguments);
	this._handleChange(this, "tooltip");
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setSelected = function(bSelected) {
	this.setProperty("selected", bSelected);
	
	if(!this.getSelected()){
		this._clearSelection();
	}
	
	this._handleChange(this, "selected");
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setSupplyActive = function(bSupplyActive) {
	this.setProperty("supplyActive", bSupplyActive, true);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setAutoActivateSupply = function(bAutoActivateSupply) {
	this.setProperty("autoActivateSupply", bAutoActivateSupply, true);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.getAttributes = function() {
	if(this.hasListeners("supplyAttributes") && this.getSupplyActive()){
		this._bSuppressChange = true;
		this._bChangedHappenedDuringSuppress = false;
		this.fireSupplyAttributes({attribute: this});
		this.setSupplyActive(false);
		this._bSuppressChange = undefined;
		if(this._bChangedHappenedDuringSuppress){
			this._handleChange(this, "attributes");
		}
		this._bChangedHappenedDuringSuppress = undefined;
	}
	return this.getAggregation("attributes", []);
};


sap.ui.ux3.ExactAttribute.prototype.insertAttribute = function(oAttribute, iIndex) {
	this.insertAggregation("attributes", oAttribute, iIndex);
	this._handleChange(this, "attributes");
	this.setSupplyActive(false);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.addAttribute = function(oAttribute) {
	this.addAggregation("attributes", oAttribute);
	this._handleChange(this, "attributes");
	this.setSupplyActive(false);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.removeAttribute = function(vElement) {
	var oAtt = this.removeAggregation("attributes", vElement);
	if(oAtt){
		oAtt.setChangeListener(null);
		this._handleChange(this, "attributes");
	}
	return oAtt;
};


sap.ui.ux3.ExactAttribute.prototype.removeAllAttributes = function() {
	var aAtts = this.getAttributesInternal();
	for(var idx=0; idx<aAtts.length; idx++){
		aAtts[idx].setChangeListener(null);
	}
	var aRes = this.removeAllAggregation("attributes");
	if(aAtts.length > 0) {
		this._handleChange(this, "attributes");
	}
	return aRes;
};


sap.ui.ux3.ExactAttribute.prototype.destroyAttributes = function() {
	var aAtts = this.getAttributesInternal();
	for(var idx=0; idx<aAtts.length; idx++){
		aAtts[idx].setChangeListener(null);
	}
	this.destroyAggregation("attributes");
	if(aAtts.length > 0) {
		this._handleChange(this, "attributes");
	}
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator_Computed = function() {
	return this.hasListeners("supplyAttributes") && this.getSupplyActive() ? this.getShowSubAttributesIndicator() : this.getAttributesInternal().length > 0;
};


sap.ui.ux3.ExactAttribute.prototype.attachSupplyAttributes = function(oData, fnFunction, oListener) {
	this.attachEvent("supplyAttributes", oData, fnFunction, oListener);
	if(this.getSelected()){
		this.getAttributesInternal(true); //force init of attributes (e.g. call supply function))
	}
	return this;
};


//*** Internal (may also used by Exact Control) functions ***


sap.ui.ux3.ExactAttribute.prototype._setProperty_Orig = sap.ui.ux3.ExactAttribute.prototype.setProperty;
/**
 * @see sap.ui.core.Element.prototype.setProperty
 * @protected
 */
sap.ui.ux3.ExactAttribute.prototype.setProperty = function(sPropertyName, oValue, bSuppressRerendering) {
	this._setProperty_Orig(sPropertyName, oValue, bSuppressRerendering);

	if(sPropertyName == "selected"){
		if(oValue){
			this.getAttributesInternal(true); //force init of attributes (e.g. call supply function)
		}else{
			if(this.getAutoActivateSupply()) {
				this.setSupplyActive(true);
			}
		}
	}

	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setChangeListener = function(oChangeListener) {
	this._oChangeListener = oChangeListener;
};


sap.ui.ux3.ExactAttribute.prototype.getChangeListener = function(oChangeListener) {
	return this._oChangeListener;
};


sap.ui.ux3.ExactAttribute.prototype.getAttributesInternal = function(bForceInit) {
	return bForceInit ? this.getAttributes() : this.getAggregation("attributes", []);
};


sap.ui.ux3.ExactAttribute.prototype._handleChange = function(oSourceAttribute, sType) {
	if(this._bSuppressChange){
		this._bChangedHappenedDuringSuppress = true;
		return;
	}
	if(this.getChangeListener()){
		//Change is handled by the change listener
		this.getChangeListener()._notifyOnChange(sType, oSourceAttribute);
	}else if(this.getParent() && this.getParent()._handleChange){
		//Bubble Change to next change listener
		this.getParent()._handleChange(oSourceAttribute, sType);
	}
};


//Sets the selection property of the attribute and all its sub-attributes to false.
sap.ui.ux3.ExactAttribute.prototype._clearSelection = function(){
	this.setProperty("selected", false, true);
	var aVals = this.getAttributesInternal();
	for(var idx=0; idx<aVals.length; idx++){
		aVals[idx]._clearSelection();
	}
};

}());