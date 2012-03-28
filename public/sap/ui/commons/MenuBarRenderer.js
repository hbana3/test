/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.MenuBar
jQuery.sap.declare("sap.ui.commons.MenuBarRenderer");


/**
 * @class MenuBarRenderer.
 * @static
 */
sap.ui.commons.MenuBarRenderer = {
};

/**
 * Renders the HTML for the given menubar using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.commons.Toolbar} oToolbar An object representation of the control that should be rendered.
 */
sap.ui.commons.MenuBarRenderer.render = function(oRenderManager, oMenuBar) {
	var rm = oRenderManager;

	oMenuBar.doBeforeRendering();

	if(!oMenuBar.getVisible()) {
		return;
	}

	rm.write("<div");
	rm.writeControlData(oMenuBar);
	rm.addClass("sapUiMnuBar");
	if(oMenuBar.getDesign() == sap.ui.commons.MenuBarDesign.Header) {
		rm.addClass("sapUiMnuBarHeader");
	}
	var bIsDisabled = !oMenuBar.getEnabled();
	if(bIsDisabled) {
		rm.addClass("sapUiMnuBarDsbl");
	}
	rm.addStyle("width", oMenuBar.getWidth());
	rm.writeStyles();
	rm.writeClasses();
	rm.writeAttribute("tabindex", "0");
	var sTooltip = oMenuBar.getTooltip_AsString();
	sap.ui.commons.MenuBarRenderer.writeAria(rm, "menubar", sTooltip, bIsDisabled);
	rm.write("><ul");
	rm.writeAttribute("id", oMenuBar.getId()+"-area");
	rm.writeAttribute("class", "sapUiMnuBarArea");
	rm.write(">");

	var iVisibleItemIdx = 0;
	var aItems = oMenuBar.getItems();
	for(var i=0; i<aItems.length; i++){
		var oItem = aItems[i];
		if(oItem.getVisible()){
			iVisibleItemIdx++;
			rm.write("<li");
			rm.writeControlData(oItem);
			rm.addClass("sapUiMnuBarItm");
			var bDsbld = !oItem.getEnabled() || bIsDisabled;
			if(bDsbld) {
				rm.addClass("sapUiMnuBarItmDsbl");
			}
			rm.writeClasses();
			rm.writeAttribute("itemidx", ""+i);
			var sTooltip = oItem.getTooltip_AsString();
			sap.ui.commons.MenuBarRenderer.writeAria(rm, "menuitem", sTooltip, bDsbld, iVisibleItemIdx);
			rm.writeAttribute("tabindex", "-1");
			rm.write("><span>");
			rm.writeEscaped(oItem.getText());
			rm.write("</span></li>");
		}
	}

	rm.write("<li");
	rm.writeAttribute("id", oMenuBar.getId()+"-ovrflw");
	rm.writeAttribute("itemidx", "ovrflw");
	rm.writeAttribute("style", "display:none;");
	rm.writeAttribute("tabindex", "-1");
	rm.addClass("sapUiMnuBarItm");
	rm.addClass("sapUiMnuBarOvrFlw");
	if(bDsbld) {
		rm.addClass("sapUiMnuBarItmDsbl");
	}
	rm.writeClasses();
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
	var sOverFlowText = undefined;
	if(rb) {
		sOverFlowText = rb.getText("MNUBAR_OVRFLW");
	}
	sap.ui.commons.MenuBarRenderer.writeAria(rm, "menuitem", sOverFlowText, false, 0);
	rm.write("><span></span></li></ul></div>");
};

sap.ui.commons.MenuBarRenderer.writeAria = function(rm, sRole, sText, bDisabled, iIdx){
	if(sText) {
		rm.writeAttributeEscaped("title", sText);
	}

	if(!sap.ui.getCore().getConfiguration().getAccessibility()) {
		return;
	}

	rm.writeAttribute("role", sRole);
	if(sRole == "menuitem"){
		rm.writeAttribute("aria-haspopup", true);
		rm.writeAttribute("aria-posinset", iIdx);
	}
	if(bDisabled) {
		rm.writeAttribute("aria-disabled", true);
	}
};