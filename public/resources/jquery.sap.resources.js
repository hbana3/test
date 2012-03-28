/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides access to Java-like resource bundles in properties file format
jQuery.sap.declare("jquery.sap.resources");
jQuery.sap.require("jquery.sap.properties");

(function() {

	// Javadoc for private inner class "Bundle" - this list of comments is intentional!
	/**
	 * @interface  Contains locale-specific texts.
	 *
	 * If you need a locale-specific text within your application, you can use the
	 * resource bundle to load the locale-specific file from the server and access
	 * the texts of it.
	 *
	 * Use {@link jQuery.sap.resources} to create an instance of jQuery.sap.util.ResourceBundle.
	 * There you have to specify the URL to the base .properties file of a bundle 
     * (.properties without any locale information, e.g. "mybundle.properties"), and optionally
	 * a locale. The locale is defined as a string of the language and an optional country code
	 * separated by underscore (e.g. "en_GB" or "fr"). If no locale is passed, the default
	 * locale is "en".
	 *
	 * With the getText() method of the resource bundle, a locale-specific string value
	 * for a given key will be returned.
	 *
	 * With the given locale, the ResourceBundle requests the locale-specific properties file
	 * (e.g. "mybundle_fr_FR.properties").
	 * If no file is found for the locale "fr_FR", the fall back is requested. The fall back is the 
	 * language code without any specific country code, in this case "fr".
	 * The same is true if the getText() method did not find a string value for a given key.
	 * If no language-specific file is found the English file, it is requested with locale "en".
	 * If also the English file is not present, the file without language and country code is requested.
	 * This is the file that is originally used as URL parameter.
	 *
	 * Exception: Fallback for "zh_HK" is "zh_TW" before zh.
	 *
	 * @author SAP AG
	 * @version 1.2.0
	 * @since 0.9.0
	 * @name jQuery.sap.util.ResourceBundle
	 * @public
	 */
	/**
	 * Returns a locale-specific string value for the given key sKey.
	 * @param {string} sKey
	 * @param {string[]} [aArgs] List of parameters which should replace the place holders "{n}" (n is the index) in the found locale-specific string value.
	 * @return {string} The value belonging to the key, if found; otherwise the key itself.
	 *
	 * @function
	 * @name jQuery.sap.util.ResourceBundle.prototype.getText
	 */


	/**
	 * A regular expression that describes language codes according to BCP-47.
	 * @see BCP47 "Tags for Identifying Languages" (http://www.ietf.org/rfc/bcp/bcp47.txt)
	 * 
	 * The regular expression only covers the "normal language tag" part of BCP-47 and thereof
	 * only the sub tags "language", "script", "region" and "variant".
	 * 
	 * ABNF notation:  ((2*3A*3(-3A))/4A/5*8A)[-4A][-(2A/3D)]*(-(5*8A/D*3M))
	 * 
	 * The matching groups are
	 *  0=all
	 *  1=language (shortest ISO639 code | 4digits (reserved) | registered language sub tags)
	 *  2=script (4 letters)
	 *  3=region (2letter language or 3 digits)
	 *  4=variants (separated by '-')
	 * 
	 */
	
	var rlocale=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?(?:-((?:[A-Z]{5,8}|(?:[0-9][0-9A-Z]{3}))(?:-[A-Z]{5,8}|(?:[0-9][0-9A-Z]{3}))*))?(-|$)/i;

	/**
	 * Helper to normalize the given locale (in BCP-47 syntax) to the java.util.Locale format.
	 * @return {string} Normalized locale or undefined if the locale can't be normalized
	 */
	function normalize(sLocale) {
		if ( !sLocale && typeof sLocale === 'string' ) {
			return '';
		}
		var m = rlocale.exec(sLocale.replace(/_/g, '-'));
		if ( m ) {
			return m[1].toLowerCase() + (m[3] ? "_" + m[3].toUpperCase() + (m[4] ? "_" + m[4].replace("-","_") : "") : "");
		}
	}
	
	/*
	 * Implements jQuery.sap.util.ResourceBundle
	 */
	var Bundle = function(sUrl, sLocale){
		//first fallback is english if no locale is given
		//TODO: If the browsers allow to access the users language preference this should be the fallback
		if(typeof(sLocale) != "string") {
			sLocale = "en";
		}
		this.sUrl = sUrl;
		//declare list of property files that are loaded
		this.aPropertyFiles = [];
		this.aLocales = [];
		//load the most specific property file
		load(this, normalize(sLocale));
	};

	Bundle.prototype = {};

	/*
	 * Implements jQuery.sap.util.ResourceBundle.prototype.getText
	 */
	Bundle.prototype.getText = function(sKey, aArgs){
		var sValue = null;
		//loop over all loaded property files and return the value for the key if any
		for(var i=0; i<this.aPropertyFiles.length; i++){
			sValue = this.aPropertyFiles[i].getProperty(sKey);
			if(sValue) {
				break;
			}
		}

		//value for this key was not found in the currently loaded property files,
		//load the fallback locales
		if(!sValue){
			var sTempLocale = this.aLocales[0];
			while(sTempLocale.length > 0){
				if(sTempLocale == "zh_HK"){
					sTempLocale = "zh_TW";
				}else{
					if(sTempLocale.length > 2){
						sTempLocale = sTempLocale.substring(0,2);
					}else if(sTempLocale != "en"){
						sTempLocale = "en";
					}else{
						sTempLocale = "";
					}
				}

				var oProperties = load(this, sTempLocale);
				if(oProperties == null) {
					continue;
				}

				//check whether the key is included in the newly loaded property file
				sValue = oProperties.getProperty(sKey);
				if (sValue) {
					break;
				}
			}
		}

		if(!sValue){
			return sKey;
		}

		if(!aArgs){
			return sValue;
		}

		for(var index=0; index<aArgs.length; index++){
			sValue = sValue.replace("{"+index+"}", aArgs[index]);
		}

		return sValue;
	};

	/*
	 * If a .properties file for the given locale is not loaded yet
	 * in the given bundle, this method loads the .properties file and
	 * adds it to the bundle.
	 * @param {string} sLocale the text to parse
	 * @param oBundle the resource bundle to extend
	 * @return The newly loaded properties or <code>null</code>
	 *         when the properties for the given locale already loaded.
	 * @private
	 */
	function load(oBundle, sLocale) {
		if(jQuery.inArray(sLocale, oBundle.aLocales) == -1){
			var sTempUrl = oBundle.sUrl;
			if(sLocale) {
				sTempUrl = sTempUrl.replace(".properties","_" + sLocale + ".properties");
			}
			var props = jQuery.sap.properties({url : sTempUrl});
			oBundle.aPropertyFiles.push(props);
			oBundle.aLocales.push(sLocale);
			return props;
		}
		return null;
	}

	/**
	 * Creates and returns a new instance of {@link jQuery.sap.util.ResourceBundle}
	 * using the given URL and locale to determine what to load.
	 *
	 * @public
	 * @param {object} [mParams] Parameters used to initialize the resource bundle
	 * @param {string} [mParams.url=""] The URL to the base .properties file of a bundle (.properties file without any locale information, e.g. "mybundle.properties")
	 * @param {string} [mParams.locale="en"] Optional string of the language and an optional country code separated by underscore (e.g. "en_GB" or "fr")
	 * @return {jQuery.sap.util.ResourceBundle} A new resource bundle instance
	 */
	jQuery.sap.resources = function resources(mParams) {
		mParams = jQuery.extend({url: "", locale: undefined}, mParams);
		var oBundle = new Bundle(mParams.url, mParams.locale);
		return oBundle;
	};

}());
