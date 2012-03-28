/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.feed.FeedEntry
jQuery.sap.declare("sap.ui.ux3.feed.FeedEntryRenderer");

/**
 * @class FeedEntry renderer.
 * @static
 */
sap.ui.ux3.feed.FeedEntryRenderer = {
};

sap.ui.ux3.feed.FeedEntryRenderer.defaultIcon = "/img/feed/person.png";

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.feed.FeedEntryRenderer.render = function(oRenderManager, oControl){

	// convenience variable
	var rm = oRenderManager;

	var sIcon;

	rm.write("<div");
	rm.writeControlData(oControl);
	rm.write(">");

	rm.write("<div id='"+ oControl.getId() +"-content'");
	rm.addClass("sapUiEntry");
	rm.writeClasses();
	rm.write(">");

	if(oControl.getDeletionAllowed()){
		rm.write('<div class="sapUiEntryDeletable">X</div>');
	}

	if(oControl.getLogoSrc()){
	  sIcon = oControl.getLogoSrc();
	} else {
	  sIcon = jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sap.ui.ux3.feed.FeedEntryRenderer.defaultIcon;
	}

	rm.write("<img");
	rm.writeAttribute("class","sapUiEntryIcon");
	rm.writeAttributeEscaped("src", sIcon);
	rm.write(">");


	rm.write("<div");
	rm.writeAttribute("class","sapUiEntryText");
	rm.write(">");
	rm.write(oControl.buildText());
	rm.write("</div>");


	rm.write("<span");
	rm.writeAttribute("class","sapUiEntryDate");
	rm.write(">");
	rm.write(oControl.buildTime());
	rm.write("</span>");

	this.renderFooter(rm, oControl);
	rm.write("</div>"); // .sapUiEntry

	// Adding the arrow next to the .sapUiEntry DIV it modifies:
	rm.write('<div class="sapUiEntryArrow"></div>');


	var iNbrComments = oControl.getComments().length;
	rm.write("<div id='"+ oControl.getId() +"-CommentExp' class='sapUiExpandComments'");
	if(oControl.bCommentsExpanded){
		rm.write(" style='display:none'");
	}
	var txt1 = oControl.oResourceBundle.getText("FEEDENTRY_LABEL_COL_COMMENTS");
	txt1 = txt1.replace("{0}", iNbrComments);
	rm.write(">"+ txt1 +"</div>");


	rm.write("<div id='"+ oControl.getId() +"-CommentLabel' class='sapUiExpandCommentsLabel'");
	if(iNbrComments == 0 || !oControl.bCommentsExpanded){
		rm.write(" style='display:none'");
	}
	var txtName = "FEEDENTRY_LABEL_EXP_COMMENT";
	if(iNbrComments>1){
		txtName += "S";
	}
	var txt2 = oControl.oResourceBundle.getText(txtName);
	txt2 = txt2.replace("{0}", iNbrComments);
	rm.write("> " + txt2 + "</div>");

	//Render the comments only if there is any
	rm.write("<div class='sapUiComments'>");
	rm.renderControl(oControl.oComments);
	rm.write("</div>");

	rm.write("<div class='sapUiCommentFeeder'>");
	rm.renderControl(oControl.oFeederComment);
	rm.write("</div>");

	rm.write("</div>");
};


sap.ui.ux3.feed.FeedEntryRenderer.renderFooter = function(oRenderManager, oControl){

	// convenience variable
	var rm = oRenderManager;

	rm.write("<div id=" + oControl.getId() + "-entryFooter ");
	rm.writeAttribute("class","sapUiEntryFooter");
	rm.write(">");

	if(oControl.getSupportEnabled()){
		var iNbrSupport = 0;
		if(oControl.getNumberOfSupport()){
			iNbrSupport = oControl.getNumberOfSupport();
		}

		rm.write("<span class='sapUiFeedEntryFooterItem'>");
		rm.write(iNbrSupport + " people support this");
		rm.write("</span>");

		//support
		if (oControl.getSupported()){
			rm.write("<span class='sapUiFeedEntryFooterItem sapUiFeedUnsupport'>");
			oControl.oSupportLabel.setText(oControl.oResourceBundle.getText("UNSUPPORT"));
		}
		else {
			rm.write("<span class='sapUiFeedEntryFooterItem sapUiFeedSupport'>");
			oControl.oSupportLabel.setText(oControl.oResourceBundle.getText("SUPPORT"));
		}
		rm.renderControl(oControl.oSupportLabel);
		rm.write("</span>");
	}

	//Flag
	rm.write("<span class='sapUiFeedEntryFooterItem sapUiFeedFlag'>");
	if (oControl.getFlagged()){
		rm.write(oControl.oResourceBundle.getText("REMOVE"));
	}
	else{
		rm.write(oControl.oResourceBundle.getText("FLAG"));
	}
	rm.write("</span>");

	//Rating
	if(oControl.getRatingEnabled()){
		rm.write("<span class='sapUiFeedEntryFooterItem sapUiFeedRelevance'>");
		rm.write(oControl.oResourceBundle.getText("RELEVANCE"));
		rm.renderControl(oControl.oRatingIndicator);
		rm.write("(" + oControl.getNumberOfRatings() + " ratings)");
		rm.write("</span>");
	}
	rm.write("</div>");
}