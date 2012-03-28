/*!
 * SAP UI HTML5 Rendering Library ('SAPUI5')
 *
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides helper functions for the testsuite
jQuery.sap.declare("js.testfwk", false);

function setCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else {
		var expires = "";
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}

function eraseCookie(name) {
	setCookie(name,"",-1);
}

if ( !window.sap ) {
	sap = {};
}
if ( !sap.ui ) {
	sap.ui = {};
}
if ( !sap.ui.testfwk ) {
	sap.ui.testfwk = {};
}

sap.ui.testfwk.TestFWK = {
	sLanguage : navigator.language || navigator.userLanguage,
	sTheme : "sap_platinum",
	bRTL : false,
	bAccessibilityMode: true,
	bDuplicateIdMode: false,
	sJQueryVersion: "1.4.4"
};

sap.ui.testfwk.TestFWK.LANGUAGES = {
	"en_US" : "English (US)",
	"de" : "Deutsch"
};

sap.ui.testfwk.TestFWK.THEMES = {
	"base" : "Base",
	"sap_platinum" : "Platinum",
	"sap_goldreflection" : "Gold Reflection",
	"sap_hcb" : "High Contrast Black",
	"sap_ux" : "Ux Target Design",
	"edding" : "Edding (EXPERIMENTAL!)",
	"sap_welter" : "Welter (only for Mobile)"
};

sap.ui.testfwk.TestFWK.JQUERY_VERSIONS = {
	"1.4.4" : "jQuery 1.4.4",
	"1.5.2" : "jQuery 1.5.2",
	"1.6.2" : "jQuery 1.6.2"
};

sap.ui.testfwk.TestFWK.init = function(oContentWindow) {
	this.oContentWindow = oContentWindow;
	this.updateContent();
};

sap.ui.testfwk.TestFWK.getContentURL = function() {
	return this.sContentURL;
};

sap.ui.testfwk.TestFWK.setContentURL = function(sURL, bUseReplace) {
	this.sContentURL = sURL;
	this.updateContent(bUseReplace);
};

sap.ui.testfwk.TestFWK.updateContent = function(bUseReplace) {
	if ( !this.oContentWindow || !this.sContentURL ) {
		return;
	}
	this.fireContentWillChange();
	var sURL = this.addSettingsToURL(this.sContentURL);
	if(bUseReplace){
		this.oContentWindow.document.location.replace(sURL);
	}else{
		this.oContentWindow.document.location.href = sURL;
	}
};

sap.ui.testfwk.TestFWK.getLanguage = function() {
	return this.sLanguage;
};

sap.ui.testfwk.TestFWK.setLanguage = function(sLanguage) {
	if ( this.sLanguage !== sLanguage ) {
		this.sLanguage = sLanguage;
		this.applySettings();
	}
};

sap.ui.testfwk.TestFWK.getTheme = function() {
	return this.sTheme;
};

sap.ui.testfwk.TestFWK.setTheme = function(sTheme) {
	if ( this.sTheme !== sTheme ) {
		this.sTheme = sTheme;
		if ( this.oContentWindow
			 && this.oContentWindow.sap
			 && this.oContentWindow.sap.ui
			 && this.oContentWindow.sap.ui.getCore ) {
			this.oContentWindow.sap.ui.getCore().applyTheme(sTheme);
			return;
		}
		this.applySettings();
	}
};

sap.ui.testfwk.TestFWK.getRTL = function() {
	return this.bRTL;
};

sap.ui.testfwk.TestFWK.setRTL = function(bRTL) {
	if ( this.bRTL !== bRTL ) {
		this.bRTL = bRTL;
		this.applySettings();
	}
};

sap.ui.testfwk.TestFWK.getAccessibilityMode = function() {
	return this.bAccessibilityMode;
};

sap.ui.testfwk.TestFWK.setAccessibilityMode = function(bAccessibilityMode) {
	if ( this.bAccessibilityMode !== bAccessibilityMode ) {
		this.bAccessibilityMode = bAccessibilityMode;
		this.applySettings();
	}
};

sap.ui.testfwk.TestFWK.getDuplicateIdMode = function() {
	return this.bDuplicateIdMode;
};

sap.ui.testfwk.TestFWK.setDuplicateIdMode = function(bDuplicateIdMode) {
	if ( this.bDuplicateIdMode !== bDuplicateIdMode ) {
		this.bDuplicateIdMode = bDuplicateIdMode;
		this.applySettings();
	}
};

sap.ui.testfwk.TestFWK.getJQueryVersion = function() {
	return this.sJQueryVersion;
};

sap.ui.testfwk.TestFWK.setJQueryVersion = function(sJQueryVersion) {
	if ( this.sJQueryVersion !== sJQueryVersion ) {
		this.sJQueryVersion = sJQueryVersion;
		this.applySettings();
	}
};

sap.ui.testfwk.TestFWK.applySettings = function() {
	this.fireSettingsChanged();
	this.updateContent();
};

sap.ui.testfwk.TestFWK.addSettingsToURL = function(sURL) {

	// hash rewriting currently doesn't work with webkit browsers and framesets
	if ( !jQuery.browser.webkit ) {
		top.window.location.hash = sURL.replace(/\?/g, "_");
	}

	function add(sParam, vValue) {
		if (sURL.indexOf("?")!=-1) {
			sURL += "&";
		} else {
			sURL += "?";
		}
		sURL += sParam + "=" + vValue;
	}

	add("sap-ui-debug", true);
	if ( this.sLanguage ) {
		add("sap-ui-language", this.sLanguage);
	}
	if ( this.sTheme ) {
		add("sap-ui-theme", this.sTheme);
	}
	if ( this.bRTL ) {
		add("sap-ui-rtl", this.bRTL);
	}
	if ( this.bDuplicateIdMode ) {
		add("sap-ui-noDuplicateIds", this.bDuplicateIdMode);
	}
	add("sap-ui-accessibility", this.bAccessibilityMode);
	if ( this.sJQueryVersion ) {
		add("sap-ui-jqueryversion", this.sJQueryVersion);
	}

	return sURL;
};

sap.ui.testfwk.TestFWK.onContentLoad = function() {
//	this.injectDebug();
};

//// if not present, adds the debug.js script to the content page and initializes the debug mode in core
//sap.ui.testfwk.TestFWK.injectDebug = function() {
//
//	if ( !this.oContentWindow )
//		return;
//
//	var oContentWindow = this.oContentWindow;
//
//	// the following check relies on the fact that injectDebug() is called earliest in the onload event handler
//	var bDebugExists = oContentWindow.sap && oContentWindow.sap.ui && oContentWindow.sap.ui.debug && oContentWindow.sap.ui.debug.DebugEnv;
//	/* alternatively, the following code could be used
//	var allScripts = contentDocument.getElementsByTagName("script");
//	var bDebugExists = false;
//	for (var i = 0; i < allScripts.length; i++) {
//		var oneScript = allScripts[i];
//		if (oneScript.getAttribute("src") && (oneScript.getAttribute("src").indexOf("/debug.js") > -1)) {
//			bDebugExists = true;
//			break;
//		}
//	}*/
//
//	if (!bDebugExists && oContentWindow.document &&
//			oContentWindow.jQuery && oContentWindow.jQuery.sap &&
//			oContentWindow.jQuery.sap.getModulePath ) {
//		var scriptTag = oContentWindow.document.createElement("script");
//		scriptTag.setAttribute("type", "text/javascript");
//		var sDebugJsUrl = oContentWindow.jQuery.sap.getModulePath("", "/") + "sap-ui-debug.js";//normalizeResourceUrl(contentDocument.location.href, "sap.ui.core/js/debug.js");
//		scriptTag.setAttribute("src", sDebugJsUrl);
//		oContentWindow.document.getElementsByTagName("head")[0].appendChild(scriptTag);
//	}
//};


// ----

sap.ui.testfwk.TestFWK.mSettingsListeners = [];

sap.ui.testfwk.TestFWK.attachSettingsChanged = function(fnCallback) {
	this.mSettingsListeners.push(fnCallback);
};

sap.ui.testfwk.TestFWK.detachSettingsChanged = function(fnCallback) {
	for(var i=0; i<this.mSettingsListeners.length; ) {
		if ( this.mSettingsListeners[i] === fnCallback ) {
			this.mSettingsListeners.splice(i,1);
		} else {
			i++;
		};
	}
};

sap.ui.testfwk.TestFWK.fireSettingsChanged = function() {
	for(var i=0; i<this.mSettingsListeners.length; i++) {
		this.mSettingsListeners[i]();
	}
};

// ----

sap.ui.testfwk.TestFWK.mContentListeners = [];

sap.ui.testfwk.TestFWK.attachContentWillChange = function(fnCallback) {
	this.mContentListeners.push(fnCallback);
};

sap.ui.testfwk.TestFWK.detachContentWillChange = function(fnCallback) {
	for(var i=0; i<this.mContentListeners.length; ) {
		if ( this.mContentListeners[i] === fnCallback ) {
			this.mContentListeners.splice(i,1);
		} else {
			i++;
		};
	}};

sap.ui.testfwk.TestFWK.fireContentWillChange = function() {
	for(var i=0; i<this.mContentListeners.length; i++) {
		try {
			this.mContentListeners[i](this.getContentURL());
		} catch (ex) {
			// somehow the settings registers twice
			// to prevent errors we catch them!
		}
	}
};

/*
 * layout
 * libraries=[...]
 * customTests=[string,...]
 * customThemes[string,...]
 * selectedTheme:string
 * trace toolbar expanded
 * trace selected tab
 * traceFilter
 * traceLevel
 * selected test case
 */