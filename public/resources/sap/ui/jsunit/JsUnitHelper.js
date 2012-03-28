/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides helper functions for unit tests
jQuery.sap.declare("sap.ui.jsunit.JsUnitHelper");

/*global warn, fail *///declare unusual global vars for JSLint/SAPUI5 validation

sap.ui.jsunit.JsUnitHelper = {
};

sap.ui.jsunit.JsUnitHelper.EventTypes = {MouseEvent:"MouseEvents",KeyEvent:"KeyEvents",HTMLEvent:"HTMLEvents"};

/**
 * @public
 */
sap.ui.jsunit.JsUnitHelper.Events = {click:{name:"click",type:sap.ui.jsunit.JsUnitHelper.EventTypes.MouseEvent},
		mouseover:{name:"mouseover",type:sap.ui.jsunit.JsUnitHelper.EventTypes.MouseEvent},
		mouseout:{name:"mouseout",type:sap.ui.jsunit.JsUnitHelper.EventTypes.MouseEvent},
		keyup:{name:"keyup",type:sap.ui.jsunit.JsUnitHelper.EventTypes.KeyEvent},
		keydown:{name:"keydown",type:sap.ui.jsunit.JsUnitHelper.EventTypes.KeyEvent},
		blur:{name:"blur",type:sap.ui.jsunit.JsUnitHelper.EventTypes.HTMLEvent},
		focusout:{name:"focusout",type:sap.ui.jsunit.JsUnitHelper.EventTypes.HTMLEvent}};

/**
 * @param {object} oDomRef the dom ref on which the event should be called
 * @param {sap.ui.jsunit.JsUnitHelper.Events} oEvent the event that should be raised
 * @param {object | map} mParams a map of parameters that should be passed along with the event (not yet fully supported)
 * @public
 */
sap.ui.jsunit.JsUnitHelper.fireEventOnDomRef = function(oDomRef, oEvent, mParams) {
	//Generate an artificial click event on "test".
	if(!oDomRef) {
		warn("Cannot raise event on null dom ref");
		return;
	}

	var _initEvent = function (oEvent, mParams){
		if(oEvent.setAttribute) {
			for(var p in mParams) {
				oEvent.setAttribute(p, mParams[p]);
			}
		} //else { // FF... This is proprietary for FF!!! It simply cannot be done this way :(
		//}
	};

	var docEvent;
	if(document.createEvent) {	// FireFox, Webkit
		switch(oEvent.type) {
			case sap.ui.jsunit.JsUnitHelper.EventTypes.KeyEvent:

				if(!mParams) {
					mParams = {
						ctrlKey : false,
						altKey : false,
						shiftKey : false,
						metaKey : false,
						keyCode : 0
					};
				}

				try {
					docEvent = document.createEvent(/**string eventtype*/oEvent.type);
					docEvent.initKeyEvent(/**string type*/oEvent.name, /**boolean bubbles*/true, /**boolean cancelable*/true, window, mParams.ctrlKey, mParams.altKey, mParams.shiftKey, mParams.metaKey, mParams.keyCode, mParams.charCode);
				} catch (ex) {
					// WebKit doesn't support creation of KeyEvents -> fall back to type Events
					// solution adapted from http://developer.yahoo.com/yui/docs/UserAction.js.html and others
					jQuery.sap.log.error("failed to create event of type 'KeyEvents', falling back to type 'Events'");
					docEvent = document.createEvent("Events");
					docEvent.initEvent(/**string type*/oEvent.name, /**boolean bubbles*/true, /**boolean cancelable*/true);
					docEvent.view = window;
					docEvent.altKey = mParams.altKey;
					docEvent.ctrlKey = mParams.ctrlKey;
					docEvent.shiftKey = mParams.shiftKey;
					docEvent.metaKey = mParams.metaKey;
					docEvent.keyCode = mParams.keyCode;
					docEvent.charCode = mParams.charCode;
				}
				break;

			default:
				docEvent = document.createEvent(/**string eventtype*/oEvent.type);
				docEvent.initEvent(/**string type*/oEvent.name, /**boolean bubbles*/true, /**boolean cancelable*/true);
				break;
		}
		oDomRef.dispatchEvent(docEvent);

	} else if(document.createEventObject) { // IE
		docEvent = document.createEventObject(/**string eventtype*/oEvent.type);
//		docEvent.setAttribute("type", oEvent.type);
		docEvent.setAttribute("type", oEvent.name);
		docEvent.setAttribute("bubbles", true);
		docEvent.setAttribute("cancelable", true);
		_initEvent(docEvent, mParams);
		try{
			oDomRef.fireEvent("on" + oEvent.name, docEvent);
		} catch(e1) {
			fail("JsUnitHelper: Error during fireEvent of event on" + oEvent.name + ".");
		}
	} else {
		//warn("Cannot programmatically create event object thus aborting.");
		fail("Cannot programmatically create event object thus aborting.");
		return;
	}
};

(function() {

	var RX_HEX_COLOR = /#[0-9a-fA-F]+/;
	var CSS_COLORS = {
			maroon: 'rgb(128, 0, 0)',
			red: 'rgb(255, 0, 0)',
			orange: 'rgb(255, 165, 0)',
			yellow: 'rgb(255, 255, 0)',
			olive: 'rgb(128, 128, 0)',
			purple: 'rgb(128, 0, 128)',
			fuchsia: 'rgb(255, 0, 255)',
			white: 'rgb(255, 255, 255)',
			lime: 'rgb(0, 255, 0)',
			green: 'rgb(0, 128, 0)',
			navy: 'rgb(0, 0, 128)',
			blue: 'rgb(0, 0, 255)',
			aqua: 'rgb(0, 255, 255)',
			teal: 'rgb(0, 128, 128)',
			black: 'rgb(0, 0, 0)',
			silver: 'rgb(192, 192, 192)',
			gray: 'rgb(128, 128, 128)',
			transparent: 'rgba(0, 0, 0, 0)'
	};

	sap.ui.jsunit.JsUnitHelper.getCurrentStyle_AsColor = function(oDomRef, sStyleAttribute) {

		var sColor = jQuery(oDomRef).css(sStyleAttribute);

		if ( CSS_COLORS[sColor] ) {
			return CSS_COLORS[sColor];
		}

		if ( sColor.match(RX_HEX_COLOR) ) {
			return "rgb(" + parseInt(sColor.substring(1,3), 16) + ", " + parseInt(sColor.substring(3,5), 16) + ", " + parseInt(sColor.substring(5,7), 16) + ")";
		}

		return sColor;
	};

}());