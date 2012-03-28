/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Accordion
jQuery.sap.declare("sap.ui.commons.AccordionRenderer");

/**
 * @class
 * @static
 */
sap.ui.commons.AccordionRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oAccordion An object representation of the control that should be rendered
 */
sap.ui.commons.AccordionRenderer.render = function(oRenderManager, oAccordion){

	// convenience variable
	var rm = oRenderManager;


	// write the HTML into the render manager
	rm.write("<div tabIndex=0");
	rm.writeControlData(oAccordion);

	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
		rm.writeAttribute('role', 'group');
	}

	rm.writeAttribute("class","sapUiAcd");
	rm.addStyle("width", oAccordion.getWidth());
	rm.writeStyles();
	rm.write(">"); // SPAN element

	rm.write("<div id='" + oAccordion.getId()+ "-dropTarget" + "' style='width:"+ oAccordion.getWidth() +"' tabIndex='-1' class='sapUiAcd-droptarget'></div>");


	var aSections = oAccordion.getSections();
	var aDefaultSections = oAccordion.getOpenedSectionsId().split(",");

	for(var i=0;i<aSections.length;i++){

		// Open the section if the section is part of the default opened section
		if(oAccordion.bInitialRendering){

			if(jQuery.inArray(aSections[i].getId(),aDefaultSections)!= -1){
				aSections[i]._setCollapsed(false);
			}
			else{
				aSections[i]._setCollapsed(true);
			}

	   }

	   rm.renderControl(aSections[i]);

	}

	rm.write("</div>");

	oAccordion.bInitialRendering = false;

};