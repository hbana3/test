/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.layout.VerticalLayout
jQuery.sap.declare("sap.ui.commons.layout.VerticalLayoutRenderer");

/**
 * @class layout/VerticalLayout renderer.
 * @static
 */
sap.ui.commons.layout.VerticalLayoutRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.layout.VerticalLayoutRenderer.render = function(oRenderManager, oVerticalLayout){
	// convenience variable
	var rm = oRenderManager;
	
	// return immediately if control is invisible
	if (!oVerticalLayout.getVisible()) {
		return;
	}

	// write the HTML into the render manager
	rm.write("<DIV");
	rm.writeControlData(oVerticalLayout);
	rm.addClass("sapuiVlt");

	if(oVerticalLayout.getWidth() && oVerticalLayout.getWidth() != ''){
		rm.addStyle("width", oVerticalLayout.getWidth());
	}
	rm.addStyle("display", "inline-block");
	rm.addStyle("overflow", "hidden");
	rm.writeStyles();
	rm.writeClasses();
	rm.write(">"); // DIV element

	// render content
	var aContent = oVerticalLayout.getContent();

	for ( var i = 0; i < aContent.length; i++) {
		rm.write("<DIV class=\"sapuiVltCell\">");
		rm.renderControl(aContent[i]);
		rm.write("</DIV>");
	}

	rm.write("</DIV>");
};