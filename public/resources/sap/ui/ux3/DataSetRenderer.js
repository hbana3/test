/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.DataSet
jQuery.sap.declare("sap.ui.ux3.DataSetRenderer");

/**
 * @class DataSet renderer. 
 * @static
 */
sap.ui.ux3.DataSetRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered
 */
sap.ui.ux3.DataSetRenderer.render = function(oRenderManager, oControl){ 
	// convenience variable
	var rm = oRenderManager, 
		oView = null,
		oSwitch, aViewSwitches;
	
	oControl.prepareRendering();
	
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.writeAttribute("class", "sapUiUx3DS");
	rm.write(">");
	rm.write("<div id='" + oControl.getId() + "-toolbar'>");
	this.renderToolbar(rm,oControl);
	rm.write("</div>");
	rm.write("<div id='" + oControl.getId() + "-items'>");
	oView = oControl.getViews()[oControl.getSelectedView()];
	rm.renderControl(oView);
	rm.write("</div>");
	rm.write("</div>");
};

/**
 * Renders the HTML for the DataSet Toolbar
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager The RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl An object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.DataSetRenderer.renderToolbar = function(oRenderManager,oControl) {
	var rm = oRenderManager,
		aViewSwitches;
	
	if (oControl.getViews().length > 1) {
		aViewSwitches = oControl.getAggregation("_viewSwitches");
		for ( var i = 0; i < aViewSwitches.length; i++) {
			rm.renderControl(aViewSwitches[i]);
		}
	}
	if (oControl.getEnableFiltering()){
		rm.renderControl(oControl._oFilterString);
		rm.renderControl(oControl._oFilterButton);
	}
	if (oControl.getEnableSorting()){
		rm.renderControl(oControl._oSortButton);
	}
};
