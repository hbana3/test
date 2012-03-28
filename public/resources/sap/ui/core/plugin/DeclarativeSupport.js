/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.plugin.DeclarativeSupport
jQuery.sap.declare("sap.ui.core.plugin.DeclarativeSupport");

/**
 * Creates an instance of the class <code>sap.ui.core.plugin.DeclarativeSupport</code>
 *
 * @class Central Class for the enabling declarative programming
 *
 * @author Peter Muessig
 * @version 1.2.0
 * @private
 */
sap.ui.core.plugin.DeclarativeSupport = function() {
};

/**
 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start.
 *
 * @param {sap.ui.core.Core} oCore reference to the Core
 * @param {boolean} [bOnInit] whether the hook is called during core initialization
 * @public
 */
sap.ui.core.plugin.DeclarativeSupport.prototype.startPlugin = function(oCore, bOnInit) {
	jQuery.sap.log.info("Starting DeclarativeSupport plugin.");
	jQuery.sap.log.warning("DeclarativeSupport is an experimental feature which might change in future!");
	this.oCore = oCore;
	this.oWindow = window;
	this._parse();
};

/**
 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start
 * @param {sap.ui.core.Core} oCore reference to the Core
 * @public
 */
sap.ui.core.plugin.DeclarativeSupport.prototype.stopPlugin = function() {
	jQuery.sap.log.info("Stopping DeclarativeSupport plugin.");
	this.oCore = null;
};


/**
 * Enhances the given document by parsing the Control and Elements and create
 * the SAPUI5 controls for them.
 * @private
 */
sap.ui.core.plugin.DeclarativeSupport.prototype._parse = function(oRootDomRef) {

	// determine the root domref
	oRootDomRef = oRootDomRef || document.body;
	
	// lookup all DOM elements defining a Type for a SAPUI5 control
	var $DeclarativeTags = jQuery("[data-sap-ui-type]", oRootDomRef);

	// determine the valid root domrefs
	var aRootDomRef = [];
	jQuery.each($DeclarativeTags, function(vKey, oDomRef) {
		if (jQuery(oDomRef).parents("[data-sap-ui-type]").length === 0) {
			aRootDomRef.push(oDomRef);
		}
	});
	
	// find and parse the root domrefs
	var that = this;
	jQuery.each(aRootDomRef, function(vKey, oDomRef) {
		that._parseRootDomRef(oDomRef);
	});
	
};


sap.ui.core.plugin.DeclarativeSupport.prototype._parseRootDomRef = function (oDomRef) {
	
	// get the jQuery object
	var jDomRef = jQuery(oDomRef);
	
	// determine the type of the control
	var sType = jDomRef.attr("data-sap-ui-type");
	
	// we differ between UIArea and default SAPUI5 control
	var aControls = [];
	if (sType === "sap.ui.core.UIArea") {
		
		// use a UIArea / better performance when rendering multiple controls
		// parse and create the controls / children of domref
		var that = this;
		jQuery.each(jDomRef.children(), function(vKey, oDomRef) {
			var oControl = that._parseDomRef(oDomRef);
			if (oControl) {
				aControls.push(oControl);
			}
		});		
		
	} else if (sType) {
		
		// only a single control - so add this one
		var oControl = this._parseDomRef(oDomRef);
		if (oControl) {
			aControls.push(oControl);	
		}
		
	}
	
	// remove the old content
	jDomRef.empty();
	
	// add the controls
	jQuery.each(aControls, function(vKey, oControl) {
		oControl.placeAt(oDomRef);
	});		
	
	// remove the attributes for declarative support
	jDomRef.removeAttr("data-sap-ui-type");

};



/**
 * Parses a given DOM ref and converts it into a Control.
 * @param oDomRef {DomElement} reference to a DOM element
 * @return {sap.ui.core.Control} reference to a Control
 * @private
 */
sap.ui.core.plugin.DeclarativeSupport.prototype._parseDomRef = function (oDomRef) {

	var jDomRef = jQuery(oDomRef);
	
	// determine the type of the control
	var sControl = jDomRef.attr("data-sap-ui-type");
	if (sControl) {

		// in case of having an ID retrieve it and clear it in the placeholder
		// DOM element to avoid double IDs
		var sControlId = "";
		if (jDomRef.attr("id")) {
			sControlId = jDomRef.attr("id");
			jDomRef.attr("id", "");
		}

		// create a new control (depending on its type info)
		var oControl = new (jQuery.sap.getObject(sControl))(sControlId);

		// determine the settings (since attributes of a HTML element is not
		// case sensitive they have to be written in the following way:
		// label-for => labelFor)
		var oSettings = {};
		for (var key in oDomRef.attributes) {
			if(!isNaN(key)) {

				// parse all attributes of a control
				// (except the ID, tooltip and the data-sap-ui information)
				var sName = oDomRef.attributes[key].name;
				if (sName != "data-sap-ui-type" &&
					sName != "data-sap-ui-aggregation" &&
					sName != "data-sap-ui-default-aggregation" &&
					sName != "id"  && sName != "tooltip") {

					// camel case the name
					sName = this._camelCase(sName);
					
					// apply the value of the attribute to a
					//   * property,
					//   * association (id of the control) or
					//   * event (name of the function)
					var sValue = oDomRef.attributes[key].value;
					if (oControl.getMetadata().getAllProperties()[sName]) {
						// PROPERTY
						var oProperty = oControl.getMetadata().getAllProperties()[sName];
						var oType = sap.ui.base.DataType.getType(oProperty.type);
						if (oType) {
							if (oType instanceof sap.ui.base.DataType) {
								// DATATYPE
								oSettings[sName] = oType.parseValue(sValue);
							} else {
								// any other, e.g. ENUMARATION
								oSettings[sName] = sValue;
							}
						}
					} else if (oControl.getMetadata().getAllAssociations()[sName]) {
						// ASSOCIATION
						oSettings[sName] = sValue; // use the value as ID
					} else if (oControl.getMetadata().getAllEvents()[sName]) {
						// EVENT
						var oWindow = window;
						if (sValue && sValue.indexOf(".") != -1) {
							// NESTED FUNCTIONS SEPARATED VIA DOTS!!!!
							var aPath = sValue.split(".");
							for (var i = 0; i < aPath.length - 1; i++) {
								oWindow = oWindow[aPath[i]];
								if (!oWindow) {
									sValue = null;
									break;
								}
							}
							sValue = aPath[aPath.length - 1];
						}
						if (sValue && typeof(oWindow[sValue]) == "function") {
							oSettings[sName] = oWindow[sValue];
						}


					}

				} else if (sName == "tooltip") {

					// special handling for tooltip (which is an aggregation)
					// but can also be applied as property
					oSettings[sName] = oDomRef.attributes[key].value;

				}

			}

		}

		// AGGREGATION:
		// check for child aggregations
		var arrChildren = jDomRef.children();
		var sDefaultType = jDomRef.attr("data-sap-ui-default-aggregation") || oControl.getMetadata().getDefaultAggregationName();
		var oAggregations = oControl.getMetadata().getAllAggregations();
		if (!sDefaultType && oAggregations) {
			// determine the default aggregation and ignore the tooltip
			for (var sAggregationName in oAggregations) {
				if (sAggregationName !== "tooltip") {
					sDefaultType = sAggregationName;
					break;
				}
			}
		}
		var that = this;
		jQuery.each(jDomRef.children(), function(key, oChild) {

			// check for an aggregation tag of in case of a sepcifiying the
			// aggregration on the parent control this will be used in case
			// of no meta tag was found
			var sType = jQuery(oChild).attr("data-sap-ui-aggregation");
			var bUseDefault = false;
			if (!sType) {
				bUseDefault = true;
				sType = sDefaultType;
			}

			// add the child to the aggregation
			if (sType && oAggregations[sType]) {

				var bMultiple = oAggregations[sType].multiple;

				jQuery.each(bUseDefault ? [this] : jQuery(oChild).children(), function(key, value) {

					var oControl = that._parseDomRef(value);
					if (oControl) {

						if (bMultiple) {
							// 1..n AGGREGATION
							if (!oSettings[sType]) {
								oSettings[sType] = [];
							}
							oSettings[sType].push(oControl);
						} else {
							// 1..1 AGGREGATION
							oSettings[sType] = oControl;
						}

					}

				});

			}

		});

		// apply the settings to the control
		oControl.applySettings(oSettings);

		// mark control as parsed
		jDomRef.removeAttr("data-sap-ui-type");

		// return the control
		return oControl;

	} else {
		
		// include HTML content
		var oHTML = new sap.ui.core.HTML({preferDOM: true});
		oHTML.setDOMContent(oDomRef);
		
		// check for declarative content
		this._parse(oDomRef);
		
		return oHTML;
		
	}

	// nothing to return
	return null;

};


sap.ui.core.plugin.DeclarativeSupport.prototype._camelCase = function(sString) {
	// convert minus into upper case for the next, e.g.
	// label-for => labelFor
	if (sString.indexOf("-") != -1) {
		var arrStringParts = sString.split("-");
		var arrString = [];
		for (var i = 0; i < arrStringParts.length; i++) {
			if (i > 0 && arrStringParts[i].length > 1) {
				arrString.push(arrStringParts[i].substring(0, 1).toUpperCase());
				arrString.push(arrStringParts[i].substring(1));
			} else {
				arrString.push(arrStringParts[i]);
			}
		}
		sString = arrString.join("");
	}
	return sString;
};


/**
 * Create the <code>sap.ui.core.plugin.DeclarativeSupport</code> plugin and
 * register it within the <code>sap.ui.core.Core</code>.
 */
(function(){
	var oThis = new sap.ui.core.plugin.DeclarativeSupport();
	sap.ui.getCore().registerPlugin(oThis);
}());