/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Dialog
jQuery.sap.declare("sap.ui.commons.DialogRenderer");

/**
 * @class  sap.ui.commons.DialogRenderer
 * @static
 */
sap.ui.commons.DialogRenderer = {};


/**
 * Renders the HTML for the Dialog, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
 */
sap.ui.commons.DialogRenderer.render = function(oRenderManager, oControl) {
	var rm = oRenderManager;

	var accessibility = sap.ui.getCore().getConfiguration().getAccessibility();

	var heightSet = sap.ui.commons.Dialog._isSizeSet(oControl.getHeight());
	var widthSet = sap.ui.commons.Dialog._isSizeSet(oControl.getWidth());

	oControl.getScrollTop();  // Update the scroll position properties
	oControl.getScrollLeft();

	var aButtons = oControl.getButtons();
	var iButtonCount = aButtons.length;


	// Root element and classes/styles
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiDlg");
	rm.addClass("sapUiDlgContentBorderDesign" + oControl.getContentBorderDesign());

	rm.addStyle("width", oControl.getWidth());
	rm.addStyle("height", oControl.getHeight());
	rm.addStyle("min-width", oControl.getMinWidth());
	rm.addStyle("min-height", oControl.getMinHeight());
	rm.addStyle("max-width", oControl.getMaxWidth());
	rm.addStyle("max-height", oControl.getMaxHeight());

	if (!heightSet) {
		rm.addClass("sapUiDlgFlexHeight");
	}
	if (!widthSet) {
		rm.addClass("sapUiDlgFlexWidth");
	}
	if (iButtonCount == 0) {
		rm.addClass("sapUiDlgNoButtons");
	}
	if (!oControl.getApplyContentPadding()) {
		rm.addClass("sapUiDlgNoPad");
	}
	rm.writeClasses();
	rm.writeStyles();

	if (accessibility) {
		rm.writeAttribute("aria-labelledby", oControl.getId() + "-lbl");
		rm.writeAttribute("role", oControl.getAccessibleRole().toLowerCase());
	}


	// Header
	rm.write("><span id='" + oControl.getId() + "-fhfe' tabIndex='0'></span><div class='sapUiDlgHdrL'></div><div class='sapUiDlgHdrR'></div><div id='" + oControl.getId() + "-hdr' class='sapUiDlgHdr'>");
	rm.write("<span class='sapUiDlgHdrLeft' id='" + oControl.getId() + "-hdrL'>");

	// Header label
	rm.write("<span id='" + oControl.getId() + "-lbl' class='sapUiDlgLabel'");

	if (accessibility) {
		rm.writeAttribute("role", "heading");
		rm.writeAttribute("aria-level", "1");
//		rm.writeAttribute("tabindex", "0");
	}

	rm.write(">");

	var title = oControl.getTitle();
	if (!title) {
		rm.write("&nbsp;");
	} else {
		rm.writeEscaped(title);
	}
	rm.write("</span>");
	rm.write("</span>");
	rm.write("<span id='" + oControl.getId() + "-hdrR' class='sapUiDlgHdrBtns'>");
	// Example for an additional button:   rm.write("<a class='sapUiDlgOptBtn'></a>");

	if (oControl.getShowCloseButton()) {
		rm.write("<a id='" + oControl.getId() + "-close' class='sapUiDlgCloseBtn' href='javascript:void(0)'");
		// FIXME according to Oliver Keim, the 'x' should not be tab-able
		rm.write(" tabIndex='-1'");
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
		if (accessibility){
			rm.writeAttribute("role","button");
			rm.writeAttribute("aria-label", rb.getText("DIALOG_CLOSE_HELP"));
			//rm.writeAttribute("aria-labelledby", oControl.getId() + "-lbl");
		}
		rm.writeAttribute('title', rb.getText("DIALOG_CLOSE_TEXT"));
		rm.write(">X</a>");
	}
	rm.write("</span></div>");


	// Content area
	rm.write("<div class='sapUiDlgContL'></div>"); // Can be used for styling irregular borders
	rm.write("<div class='sapUiDlgCont' id='" + oControl.getId() + "-cont' tabindex=\"-1\">");

	// Content
	var aChildren = oControl.getContent();
	for(var i = 0; i < aChildren.length; i++) {
		rm.renderControl(aChildren[i]);
	}
	rm.write("</div><div class='sapUiDlgContR'></div>");


	// Footer
	rm.write("<div class='sapUiDlgFooterL'></div><div class='sapUiDlgFooterR'></div><div id='");
	rm.write(oControl.getId());
	rm.write("-footer' class='sapUiDlgFooter'>");

	// Wave and Buttons
	rm.write("<div class='sapUiDlgBtns'>");
	for (var i = 0; i < iButtonCount; i++) {
		rm.renderControl(aButtons[i]);
	}
	rm.write("</div><div class='sapUiDlgWave'></div></div>");

	// Grip
	if (oControl.getResizable()) {
		rm.write("<span id='");
		rm.write(oControl.getId());
		rm.write("-grip' class='sapUiDlgGrip'>&#916;</span>");
	}

	// End of Dialog
	rm.write("<span id='" + oControl.getId() + "-fhee' tabIndex='0'></span></div>");

};