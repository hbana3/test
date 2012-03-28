/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.ExactBrowser
jQuery.sap.declare("sap.ui.ux3.ExactBrowserRenderer");

/**
 * @class ExactBrowser renderer.
 * @static
 */
sap.ui.ux3.ExactBrowserRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.ExactBrowserRenderer.render = function(oRenderManager, oControl){
	if(!oControl.getVisible()) {
		return;
	}
	
	var oMenuButton = oControl._getMenuButton(false);
	var bHasMenu = oMenuButton && oMenuButton.getMenu();

	var rm = oRenderManager;
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiUx3ExactBrwsr");
	if(bHasMenu){
		rm.addClass("sapUiUx3ExactBrwsrMnu");
	}
	rm.writeClasses();
	var sTooltip = oControl.getTooltip_AsString();
	if(sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">");
	
	if(oControl.getShowHeader()){
		rm.write("<div class=\"sapUiUx3ExactBrwsrHd\"><h2>");
		rm.write(jQuery.sap.escapeHTML(oControl.getHeaderTitle()));
		rm.write("</h2><div class=\"sapUiUx3ExactBrwsrHdTool\">");
		if(oControl.getEnableSave()){
			rm.renderControl(oControl._saveButton);
		}
		if(oControl.getEnableReset()){
			rm.renderControl(oControl._resetButton);
		}										
		rm.write("</div></div>");
	}
	if(bHasMenu){
		rm.renderControl(oMenuButton);
	}
	rm.renderControl(oControl._rootList);
	rm.write("</div>");
};