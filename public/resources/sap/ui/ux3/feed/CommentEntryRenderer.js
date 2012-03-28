/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.feed.CommentEntry
jQuery.sap.declare("sap.ui.ux3.feed.CommentEntryRenderer");

/**
 * @class CommentEntry renderer.
 * @static
 */
sap.ui.ux3.feed.CommentEntryRenderer = {
};

sap.ui.ux3.feed.CommentEntryRenderer.defaultIcon = "/img/feed/person.png";


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.feed.CommentEntryRenderer.render = function(oRenderManager, oControl){
	// convenience variable
  var rm = oRenderManager;
  var sIcon;

  rm.write("<div");
  rm.writeControlData(oControl);
  rm.addClass("sapUiComment");

  rm.writeClasses();

  rm.write(">");

  if(oControl.getDeletionAllowed()){
	rm.write('<div class="sapUiCommentDeletable">X</div>');
  }

  if(oControl.getLogoSrc()){
	sIcon = oControl.getLogoSrc();
  } else {
	sIcon = jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sap.ui.ux3.feed.CommentEntryRenderer.defaultIcon;
  }

  rm.write("<img");
  rm.writeAttribute("class","sapUiCommentIcon");
  rm.writeAttributeEscaped("src", sIcon);
  rm.write(">");

  rm.write("<span");
  rm.writeAttribute("class","sapUiCommentText");
  rm.write(">");
  rm.write(oControl.buildText());
  rm.write("</span>");

  rm.write("<span");
  rm.writeAttribute("class","sapUiCommentDate");
  rm.write(">");
  rm.write(oControl.buildTime());
  rm.write("</span>");

  rm.write("</div>");
};