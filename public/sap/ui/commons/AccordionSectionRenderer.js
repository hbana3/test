/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.AccordionSection
jQuery.sap.declare("sap.ui.commons.AccordionSectionRenderer");

/**
 * @class
 * @static
 */
sap.ui.commons.AccordionSectionRenderer = function() {
};


/**
 * Renders the HTML for the AccordionSection, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered
 */
sap.ui.commons.AccordionSectionRenderer.render = function(oRenderManager, oControl) {

	var rm = oRenderManager;
	var accessibility = sap.ui.getCore().getConfiguration().getAccessibility();

	var heightSet = sap.ui.commons.AccordionSection._isSizeSet(oControl.getMaxHeight());
	var widthSet = sap.ui.commons.AccordionSection._isSizeSet(oControl.getParent().getWidth());

	// root element and classes
	rm.write("<div draggable=\"true\"");
	rm.writeControlData(oControl);
	rm.addClass("sapUiAcdSection");

	if(oControl.getParent().isLastSection(oControl)){
		rm.addClass("sapUiAcdSectionLast");
	}

	rm.addStyle("width", oControl.getParent().getWidth());
	if (!oControl.getCollapsed()) {
		rm.addStyle("height", oControl.getMaxHeight());
	} else {
		rm.addClass("sapUiAcdSectionColl");
	}

	rm.addClass("sapUiAcdSectionArea");

	if (!heightSet) {
		rm.addClass("sapUiAcdSectionFlexHeight");
	}
	if (!oControl.getEnabled()) {
		rm.addClass("sapUiAcdSectionDis");
	}

	rm.writeClasses();
	rm.writeStyles();

	// header
	rm.write("><div class='sapUiAcdSectionHdr'");
	rm.writeAttribute("id", oControl.getId() + "-hdr");
	rm.write(">");

	rm.writeAttribute("<div ");
	rm.writeAttribute("id", oControl.getId() + "-trgt");
	rm.write(">");

	rm.write("<span id='" + oControl.getId() + "-hdrL'>");

	if (oControl.getEnabled()){
		rm.write("<a draggable='false' id='" + oControl.getId() + "-minL' class='sapUiAcdSectionMinArrow' href='javascript:void(0)' title='Collapse/Expand'");
	}else{
		rm.write("<a draggable='false' id='" + oControl.getId() + "-minL' class='sapUiAcdSectionMinArrow sapUiAcdCursorText' href='javascript:void(0)' title='Collapse/Expand'");
	}

	//Navigate on arrow when accessibility is ON as well
	if(oControl.getEnabled() || accessibility  ){
		rm.write(" tabindex='0' ");
	}
	else{
		rm.write(" tabindex='-1' ");
	}

	if (accessibility) {

		rm.writeAttribute("role", "listitem");
		rm.writeAttribute("aria-labelledby", oControl.getId() + "-lbl");

		//Is the section opened --> selected in this case
		if (oControl.getCollapsed()) {
			rm.writeAttribute("aria-selected", "false");
		} else {
			rm.writeAttribute("aria-selected", "true");
		}
		//Disabled --> Unavailable annoucement
		if (oControl.getEnabled()) {
			rm.writeAttribute("aria-disabled", "false");
			rm.writeAttribute("aria-grabbed", "false");
		}
		else{
			rm.writeAttribute("aria-disabled", "true");
			rm.writeAttribute("aria-grabbed"); //No value -->undefined --> item cannot be grabbed
		}

	}
	rm.write("></a>");

	// label
	rm.write("<span id='" + oControl.getId() + "-lbl' class='sapUiAcdSectionLabel'");

	if (accessibility) {

		rm.writeAttribute("role", "heading");
		rm.writeAttribute("aria-labelledby", oControl.getId() + "-lbl");
		rm.writeAttribute("tabindex", "0");

		if (oControl.getEnabled()) {
			rm.writeAttribute("aria-disabled", "false");
		}
		else{
			rm.writeAttribute("aria-disabled", "true");
		}
	}

	rm.write(">");

	rm.writeEscaped(oControl.getTitle());
	rm.write("</span>");
	rm.write("</span>");

	rm.write("</div></div>");

	// everything below the header is only rendered initially if not collapsed - saves performance and Panel just re-renders later on expand
	if (!oControl.getCollapsed()) {

		// Content area
		rm.write("<div class='sapUiAcdSectionCont' tabindex='-1' id='" + oControl.getId() + "-cont'");
		if (heightSet && widthSet) {
			rm.write(" style='position:absolute;'");
		} else {
			rm.write(" style='position:relative;top:0px;'"); // for IE7, when Panel contains relatively positioned elements
		}

		rm.write(">");

		// Content (child controls)
		var oControls = oControl.getContent(),
		iLength = oControls.length;
		for (var i=0;i<iLength;i++) {
			rm.renderControl(oControls[i]);
		}
		rm.write("</div>");

	}
	// End of Panel
		rm.write("</div>");
};