/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 *
 * (c) Copyright 2009-2011 SAP AG. All rights reserved
 */
 
jQuery.sap.declare("sap.ui.commons.ToggleButtonRenderer");
jQuery.sap.require("sap.ui.commons.ButtonRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class ToggleButton renderer.
 * @author D040134 
 * @static
 */

sap.ui.commons.ToggleButtonRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.ButtonRenderer);

/**
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager currently rendering this control
 * @param {sap.ui.commons.ToggleButton}
 *            oToggleButton the ToggleButton that should be rendered
 * @private
 * P.S.: "renderButtonAttributes" is a reserved/hard-coded Button extending function!
 *       It is used to allow extensions to display content after the actual button content.
 */
sap.ui.commons.ToggleButtonRenderer.renderButtonAttributes = function(rm, oToggleButton) {
	rm.addClass("sapUiToggleBtn");
	if (oToggleButton.getPressed()){
		rm.addClass("sapUiToggleBtnPressed");
	}
};


/**
 * Function called by ToggleButton control to enable Pressed state.
 */
sap.ui.commons.ToggleButtonRenderer.onactivePressed = function(oToggleButton) {
	jQuery.sap.byId(oToggleButton.getId()).addClass("sapUiToggleBtnPressed");
};

/**
 * Function called by button control to disable Pressed state.
 */
sap.ui.commons.ToggleButtonRenderer.ondeactivePressed = function(oToggleButton) {
	jQuery.sap.byId(oToggleButton.getId()).removeClass("sapUiToggleBtnPressed");
};
