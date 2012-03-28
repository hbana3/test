/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.layout.BorderLayout
jQuery.sap.declare("sap.ui.commons.layout.BorderLayoutRenderer");

/**
 * @class BorderLayout renderer.
 * @static
 */
sap.ui.commons.layout.BorderLayoutRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.layout.BorderLayoutRenderer.render = function(oRenderManager, oControl){

	// convenience variable
	var rm = oRenderManager;

	// write the HTML into the render manager

	// open the outer HTML tag
	rm.write("<div");
	// let control data be written so that connection to SAPUI5 eventing gets established
	rm.writeControlData(oControl);

	rm.writeAttribute("id", oControl.getId());
	rm.addClass("sapUiBorderLayout");
	rm.writeClasses();

	rm.addStyle("width", oControl.getWidth());
	rm.addStyle("height", oControl.getHeight());
	rm.writeStyles();

	// don't forget to close the HTML tag
	rm.write(">");

/* Rendering with Elements */
//Some initial ToDos:
//----------------------------------------------------------------------------------------------------------------------------------------
	var aAreaSizes = [];
	var bRtl = oControl.getRtl();

	var sCssClassBegin = "sapUiBorderLayoutLeft";
	var sCssClassEnd = "sapUiBorderLayoutRight";
//Determine with which CSS class begin and end are ought to be rendered depending on RTL property
	if(bRtl){
		sCssClassBegin = "sapUiBorderLayoutRight";
		sCssClassEnd = "sapUiBorderLayoutLeft";
	}

//Prepare Top
	var oTop = oControl.getTop();
	aAreaSizes.top = sap.ui.commons.layout.BorderLayoutRenderer.determineAreaSize(oTop);
//Prepare Begin
	var oBegin = oControl.getBegin();
	aAreaSizes.begin = sap.ui.commons.layout.BorderLayoutRenderer.determineAreaSize(oBegin);
//Prepare Center (center has no explicit size)
	var oCenter = oControl.getCenter();
//prepare End
	var oEnd = oControl.getEnd();
	aAreaSizes.end = sap.ui.commons.layout.BorderLayoutRenderer.determineAreaSize(oEnd);
//Prepare Bottom
	var oBottom = oControl.getBottom();
	aAreaSizes.bottom = sap.ui.commons.layout.BorderLayoutRenderer.determineAreaSize(oBottom);

//Rendering
//write Top
//----------------------------------------------------------------------------------------------------------------------------------------
	if(oTop/* && oTop.getVisible()*/){
		sap.ui.commons.layout.BorderLayoutRenderer.renderArea( rm, oTop , oControl , "top" , "sapUiBorderLayoutTop", aAreaSizes);
	}

//write begin on left handed side case that RTL=false or right handed side in case that RTL=true
//----------------------------------------------------------------------------------------------------------------------------------------
	if(oBegin/* && oBegin.getVisible()*/){
		sap.ui.commons.layout.BorderLayoutRenderer.renderArea( rm, oBegin , oControl , "begin" , sCssClassBegin, aAreaSizes);
	}

//write center
//----------------------------------------------------------------------------------------------------------------------------------------
	if(oCenter && oCenter.getVisible()){
		sap.ui.commons.layout.BorderLayoutRenderer.renderArea( rm, oCenter , oControl , "center" , "sapUiBorderLayoutCenter", aAreaSizes);
	}

//write end on right handed side in case that RTL=false or on left handed side in case that RTL=true
//----------------------------------------------------------------------------------------------------------------------------------------
	if(oEnd/* && oEnd.getVisible()*/){
		sap.ui.commons.layout.BorderLayoutRenderer.renderArea( rm, oEnd , oControl , "end" , sCssClassEnd, aAreaSizes);
	}

//write bottom
//----------------------------------------------------------------------------------------------------------------------------------------
	if(oBottom/* && oBottom.getVisible()*/)
	{
		sap.ui.commons.layout.BorderLayoutRenderer.renderArea( rm, oBottom , oControl , "bottom" , "sapUiBorderLayoutBottom", aAreaSizes);
	}

//close surrounding div
//----------------------------------------------------------------------------------------------------------------------------------------
	rm.write("</div>");
};

sap.ui.commons.layout.BorderLayoutRenderer.determineAreaSize = function(oArea)
{
	if(oArea && oArea.getVisible()){
		return oArea.getSize();
	}else{
		return "0";
	}
};

sap.ui.commons.layout.BorderLayoutRenderer.renderArea = function(oRenderManager, oArea, oBorderLayout, sAreaId, sClass, aAreaSizes){
	var rm = oRenderManager;
	var sAreaSize		= aAreaSizes[sAreaId];
	var aAreaControls	= oArea.getContent();
	var aAreaStyleValue = "";
	var length			= aAreaControls.length;


	rm.write("<div");
	rm.writeAttribute("id", oBorderLayout.getId()+ sAreaId.toUpperCase());
	rm.addClass(sClass);
	rm.writeClasses();

	//build the style attribute for the corresponding area
	switch(sAreaId)
	{
		case "top":
		case "bottom":	aAreaStyleValue = "height:"+sAreaSize+";";
						break;
		case "begin":
		case "end":		aAreaStyleValue = "width:"+sAreaSize+"; top:"+aAreaSizes.top+"; bottom:"+aAreaSizes.bottom+";";
						break;
		case "center":	if(!oBorderLayout.getRtl()){
							aAreaStyleValue = "top:"+aAreaSizes.top+"; right:"+aAreaSizes.end+"; bottom:"+aAreaSizes.bottom+"; left:"+aAreaSizes.begin+"; ";
						} else {
							aAreaStyleValue = "top:"+aAreaSizes.top+"; left:"+aAreaSizes.end+"; bottom:"+aAreaSizes.bottom+"; right:"+aAreaSizes.begin+"; ";
						}
						break;
	}

	//add overflow definition to the style-attribute value
	aAreaStyleValue = aAreaStyleValue + " overflow-x: " + oArea.getOverflowX() + ";" + "overflow-y:" + oArea.getOverflowY() + ";";
	rm.writeAttributeEscaped("style", aAreaStyleValue);
	//write alignment
	rm.writeAttributeEscaped("align", oArea.getContentAlign());
	rm.write(">");

	//render the controls
	for(var i=0;i<length;i++)
	{
		rm.renderControl(aAreaControls[i]);
	}

	rm.write("</div>");

};