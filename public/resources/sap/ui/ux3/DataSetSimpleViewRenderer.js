/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
 
 // Provides default renderer for the sap.ui.ux3.DataSetSimpleView
jQuery.sap.declare("sap.ui.ux3.DataSetSimpleViewRenderer");

/**
 * @class DataSetSimpleView renderer. 
 * @static
 */
sap.ui.ux3.DataSetSimpleViewRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.DataSetSimpleViewRenderer.render = function(oRenderManager, oControl){ 
     // convenience variable
	var rm = oRenderManager;
	// write the HTML into the render manager  
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.writeAttribute("class","sapUiUx3DSSV"); 
	rm.renderControl
	rm.write(">"); // SPAN element
	if( oControl.items) {
		for(var i = 0; i < oControl.items.length; i++) {
			rm.write("<div");
			rm.addClass("sapUiUx3DSSVItem");
			if(oControl.getFloating()) {
				rm.addClass("sapUiUx3DSSVFlow");
			}
			if (oControl.isItemSelected(oControl.items[i])) {
				rm.addClass("sapUiUx3DSSVSelected");
			}
			rm.writeClasses();
			rm.writeControlData(oControl.items[i]);
			rm.write(">");
			rm.renderControl(oControl.items[i].getTemplate());
			rm.write("</div>");
		}
	}
	rm.write("</div>");
};
