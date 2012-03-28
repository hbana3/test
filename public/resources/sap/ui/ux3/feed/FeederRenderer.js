/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.feed.Feeder
jQuery.sap.declare("sap.ui.ux3.feed.FeederRenderer");

/**
 * @class Feeder renderer.
 * @static
 */
sap.ui.ux3.feed.FeederRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.feed.FeederRenderer.render = function(oRenderManager, oControl){

	//convenience variable
	var rm = oRenderManager;
	rm.write("<div");
	rm.writeControlData(oControl);

	rm.addClass("sapUiFeederOld");

	if(oControl.getMode() == sap.ui.ux3.feed.FeederMode.FeederEntry){
		rm.addClass("sapUiFeederOldEntry");
	}
	else if(oControl.getMode() == sap.ui.ux3.feed.FeederMode.FeederComment){
		rm.addClass("sapUiFeederOldComment");
	}
	rm.writeClasses();
	rm.write(">");

	if(oControl.getMode() == sap.ui.ux3.feed.FeederMode.FeederEntry){
		rm.write("<img ");
		rm.writeAttributeEscaped("src", oControl.getImageSrc());
		rm.write("class=\"sapUiFeederOldImg\" />");
	}


	rm.write("<div class=\"sapUiFeederOldContainer\">");
	rm.write("<div ");
	rm.writeAttribute("id", oControl.getId() + "_input");
	rm.write(" contenteditable=\"true\" class=\"sapUiFeederOldInput\">");
	rm.writeEscaped(oControl.getText());

	if( oControl.getMode() == sap.ui.ux3.feed.FeederMode.FeederComment){
		rm.write(sap.ui.ux3.feed.FeederRenderer.getCommentPlaceHolderHTML(oControl));
	}

	rm.write("</div>"); // close input
	rm.write("<button ");
	rm.writeAttribute("id", oControl.getId() + "_btn");
	rm.addClass("sapUiFeederOldBtn");
	if(!oControl._bSubmitEnabled) {
		rm.addClass("sapUiFeederOldBtnDsbl");
		rm.writeAttribute("tabindex", "-1");
	} else {
		rm.writeAttribute("tabindex", "0");
	}
	rm.writeClasses();
	rm.write("></button>");
	rm.write("</div>"); // close inner
	rm.write("</div>"); // close outer
};

sap.ui.ux3.feed.FeederRenderer.getCommentPlaceHolderHTML = function( oControl){

	return "<span class='sapUiFeederOldCommentPlaceHolder'>" + oControl.oResourceBundle.getText("FEEDER_COMMENT_INPLACE")+ "</span>";

};