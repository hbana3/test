/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/**
 * @namespace
 * @name sap.ui.core.theming
 * @public
 */

jQuery.sap.declare("sap.ui.core.theming.Parameters");


(function(){
	
	/**
	 * A helper used for (read-only) access to CSS parameters at runtime.
	 * 
	 * @class A helper used for (read-only) access to CSS parameters at runtime
	 * @author SAP AG
	 * @static
	 * 
	 * @public
	 */
	sap.ui.core.theming.Parameters = {};
	
	var mParameters = null;
	
	sap.ui.getCore().attachThemeChanged(function(evt){
		mParameters = null;
	});
	
	var getParameters = function() {
		if (!mParameters) {
			
			var aJsonUrls = [];
			jQuery("link[id^=sap-ui-theme-]").each(function() {
				aJsonUrls.push(this.href.replace(".css", ".json").replace("/library", "/library-parameters")); // TODO: just one good pattern
			});

			mParameters = {};
			
			for (var i = 0; i < aJsonUrls.length; i++) {
				var sUrl = aJsonUrls[i];

				var oResponse = jQuery.sap.sjax({url:sUrl});
				if (oResponse.success) {
					var oResult = (typeof oResponse.data == "string") ? jQuery.parseJSON(oResponse.data) : oResponse.data;
					mParameters = jQuery.extend(mParameters, oResult);
				} else {
					mParameters = {};
					throw new Error("Could not load theme parameters from: " + sUrl);
				}
			}
		}
		return mParameters;
	};

	
	/**
	 * Returns the current value for the given CSS parameter.
	 * If no parameter is given, a map containing all parameters is returned. This map is a copy, so changing values in the map does not have any effect.
	 * For any other input or an undefined parameter name, the result is undefined.
	 *
	 * @param {string} sName the CSS parameter name
	 * @returns the CSS parameter value
	 * 
	 * @public
	 */
	sap.ui.core.theming.Parameters.get = function(sName) {
		
		if (arguments.length == 1) {
			return getParameters()[sName];
			
		} else if (arguments.length == 0) {
			var clone = {};
			return jQuery.extend(clone, getParameters());
			
		} else {
			return undefined;
		}
	};
	
}());
