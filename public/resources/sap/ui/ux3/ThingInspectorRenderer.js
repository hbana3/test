/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.ThingInspector
jQuery.sap.declare("sap.ui.ux3.ThingInspectorRenderer");
jQuery.sap.require("sap.ui.ux3.OverlayRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class ThingInspector renderer.
 * @static
 */
sap.ui.ux3.ThingInspectorRenderer = sap.ui.core.Renderer.extend(sap.ui.ux3.OverlayRenderer);

/**
 * Renders the ThingInspector content
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered 
 */
sap.ui.ux3.ThingInspectorRenderer.renderContent = function(oRenderManager, oControl) {
	// convenience variable
	var rm = oRenderManager;
	
/*	rm.write("<div class='sapUiUx3TICollection'>");
	rm.write("<div class='sapUiUx3TICollectionHeader'>Collection <a id='"+oControl.getId()+"-toggle-collection' role=\"button\" class='sapUiUx3TICollectionHeaderNavIcon'>&lt;&lt;</a>");
	rm.write("</div>");
	rm.write("<div class='sapUiUx3TICollectionContent'>");
	rm.write("</div>");
	rm.write("<div class='sapUiUx3TICollectionFooter'>");
	rm.write("<div class='sapUiUx3TICollectionThingAction'>Collection");
	rm.write("</div>");
	rm.write("</div>")
	rm.write("</div>");*/
	
	rm.write("<div role='Main' class='sapUiUx3TIContent'>");
	//rm.write("<div class='sapUiUx3TIContentScrollContainer'>");
	//render Header
	rm.write("<div class='sapUiUx3TIHeader'>");
	rm.write("<div class='sapUiUx3TIHeaderContainerIdentifier'>");
	rm.write("<span role='heading' aria-level='1' class='sapUiUx3TIIdentifier'");
	rm.writeAttributeEscaped("title", oControl.getType());
	rm.write(">");
	rm.writeEscaped(oControl.getType());
	rm.write("</span>");
	rm.write("</div>");

	rm.write("<div class='sapUiUx3TIHeaderGroupScrollContainer'>"); 
	rm.write("<div class='sapUiUx3TIHeaderContainer'>");
	rm.write("<div class='sapUiUx3TIIconBar'>");
	rm.write("<div class='sapUiUx3TIIcon'><img alt='' role='presentation' src='");
	rm.writeEscaped(oControl.getIcon());
	rm.write("' id='" + oControl.getId() + "-swatch'></div>");
	rm.write("<div class='sapUiUx3TITitle'>");
	rm.write("<span role='heading' aria-level='2' class='sapUiUx3TITitleFirst'");
	rm.writeAttributeEscaped("title", oControl.getFirstTitle());
	rm.write(">");
	rm.writeEscaped(oControl.getFirstTitle());
	rm.write("</span><br/>");
	rm.write("<span role='heading' aria-level='3' class='sapUiUx3TITitleSecond'");
	rm.writeAttributeEscaped("title", oControl.getSecondTitle());
	rm.write(">");
	rm.writeEscaped(oControl.getSecondTitle());
	rm.write("</span>");
	rm.write("</div>");
	rm.write("</div>");
	rm.write("</div>");

	// render Header Content
	rm.write("<div id='" + oControl.getId() + "-headerContent'>");
	this.renderHeaderContent(rm, oControl);
	rm.write("</div>");

	rm.write("</div>");
	rm.write("</div>");

	// render Facets
	rm.write("<div class='sapUiUx3TIFacets'>");
	rm.write("<div role='Navigation' class='sapUiUx3TIFacetBar'>");
	rm.renderControl(oControl._getNavBar());
	rm.write("</div>");
	rm.write("<div id='" + oControl.getId() + "-facetContent' class='sapUiUx3TIFacetContent'>");

	// render Facet Content
	this.renderFacetContent(rm, oControl);

	rm.write("</div>");
	rm.write("</div>");
	//rm.write("</div>");
	// render Toolbar
	this.renderToolbar(rm, oControl);
	rm.write("</div>");
}
/**
 * Add root class to ThingInspector
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */;
sap.ui.ux3.ThingInspectorRenderer.addRootClasses = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.addClass("sapUiUx3TI");
}
/**
 * Add class to ThingInspector
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */;
sap.ui.ux3.ThingInspectorRenderer.addOverlayClasses = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.addClass("sapUiUx3TIOverlay");
}
/**
 * Renders the HTML for ThingInspector Toolbar
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */;
sap.ui.ux3.ThingInspectorRenderer.renderToolbar = function(rm, oControl) {
	// render Toolbar
	rm.write("<div class='sapUiUx3TIToolbar' role='toolbar'>");
	// render list for generic actions
    rm.write("<ul id='" + oControl.getId() + "-genericThingActions' class='sapUiUx3TIGenericActions'>");
    this.renderGenericActions(rm, oControl);
	rm.write("</ul>");
	// render list for thing actions
	rm.write("<ul  id='" + oControl.getId() + "-thingActions' class='sapUiUx3TIThingActions'>");
	this.renderThingActions(rm, oControl);
	rm.write("</ul>");
	// closing Tag for Toolbar
	rm.write("</div>");
}
/**
 * Renders the HTML for ThingInspector Toolbar: Generic actions
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */;
 sap.ui.ux3.ThingInspectorRenderer.renderGenericActions = function(rm, oControl) {
 
 	if (oControl.getUpdateActionEnabled()){
	    // update
		rm.write("<li ");
		rm.addClass("sapUiUx3TIItem");
		rm.writeClasses();
		rm.write("><a role=\"button\" aria-disabled=\"false\"");
		rm.writeControlData(oControl._oUpdateAction);
		rm.addClass("sapUiUx3TIUpdateAction");
		rm.addClass("sapUiUx3TIAction");
		rm.writeClasses();
		rm.writeAttribute("tabindex", "0");
		if (oControl._oUpdateAction.getTooltip()) {
			rm.writeAttributeEscaped("title", oControl._oUpdateAction.getTooltip());
		}
		rm.write("></a></li>");
	} 
	if (oControl.getFollowActionEnabled()) {
		// follow
		rm.write("<li");
		rm.addClass("sapUiUx3TIItem");
		rm.writeClasses();
		rm.write("><a role=\"button\" aria-disabled=\"false\" aria-haspopup=\"false\"");
		rm.writeControlData(oControl._oFollowAction);
		rm.addClass("sapUiUx3TIFollowAction");
		rm.addClass(oControl.getFollowState());
		rm.addClass("sapUiUx3TIAction");
		rm.writeClasses();
		rm.writeAttribute("tabindex", "0");
		if (oControl._oFollowAction.getTooltip()) {
			rm.writeAttributeEscaped("title", oControl._oFollowAction.getTooltip());
		}
		rm.write("></a></li>");
	} 
	if (oControl.getFavoriteActionEnabled()) { 
	    // favorite
		rm.write("<li");
		rm.addClass("sapUiUx3TIItem");
		rm.writeClasses();
		rm.write("><a role=\"button\" aria-disabled=\"false\"");
		rm.writeControlData(oControl._oFavoriteAction);
		rm.addClass("sapUiUx3TIFavoriteAction");
		if(oControl.getFavoriteState()) {
			rm.addClass("Selected");
		}
		rm.addClass("sapUiUx3TIAction");
		rm.writeClasses();
		rm.writeAttribute("tabindex", "0");
		if (oControl._oFavoriteAction.getTooltip()) {
			rm.writeAttributeEscaped("title", oControl._oFavoriteAction.getTooltip());
		}
		rm.write("></a></li>");
	} 
	if (oControl.getFlagActionEnabled()) {
	    // flag
		rm.write("<li ");
		rm.addClass("sapUiUx3TIItem");
		rm.writeClasses();
		rm.write("><a  role=\"button\" aria-disabled=\"false\"");
		rm.writeControlData(oControl._oFlagAction);
		rm.addClass("sapUiUx3TIFlagAction");
		if(oControl.getFlagState()) {
			rm.addClass("Selected");
		}
		rm.addClass("sapUiUx3TIAction");
		rm.writeClasses();
		rm.writeAttribute("tabindex", "0");
		if (oControl._oFlagAction.getTooltip()) {
			rm.writeAttributeEscaped("title", oControl._oFlagAction.getTooltip());
		}
		rm.write("></a></li>");
	}
 }
/**
 * Renders the HTML for Thing actions
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */;
sap.ui.ux3.ThingInspectorRenderer.renderThingActions = function(rm, oControl) {
	// render list for thing actions

	var actionButtons = oControl._getActionButtons();
	for ( var i = 0; i < actionButtons.length; i++) {
		var oButton = actionButtons[i];
		rm.write("<li");
		rm.addClass("sapUiUx3TIItemRight");
		rm.writeClasses();
		rm.write(">");
		rm.renderControl(oButton);
		rm.write("</li>");
	}
}

/**
 * Renders the HTML for ThingInspector Header content
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */;
sap.ui.ux3.ThingInspectorRenderer.renderHeaderContent = function(rm, oControl) {
	var headerContentList = oControl.getHeaderContent();
	for ( var i = 0; i < headerContentList.length; i++) {
		var headerContent = headerContentList[i];
		rm.write("<hr class='sapUiUx3TIHRWhite'>");
		rm.write("<div class='sapUiUx3TIHeaderContainer' role='group'>");
		rm.write("<div class='sapUiUx3TIHeaderGroupTitle'");
		rm.writeAttributeEscaped("title", headerContent.getTitle());
		rm.write("><span>");
		rm.writeEscaped(headerContent.getTitle());
		rm.write("</span></div>");
		rm.write("<div class='sapUiUx3TIHeaderGroupContent'>");
		var childContent = headerContent.getContent();
		for ( var j = 0; j < childContent.length; j++) {
			var childControl = childContent[j];
			rm.renderControl(childControl);
		}
		rm.write("</div>");
		rm.write("</div>");
	}
}
/**
 * Renders the HTML for ThingInspector Facet content
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */;
sap.ui.ux3.ThingInspectorRenderer.renderFacetContent = function(rm, oControl) {
	var facetContent = oControl.getFacetContent();
	var bTitle = true; 
	
	if (facetContent.length == 1 )  {
		bTitle = false;
	}
	
	for ( var i = 0; i < facetContent.length; i++) {
		var group = facetContent[i];
		if (group.getColspan()) {
			rm.write("<div class='sapUiUx3TIFacetThingGroupSpan' role='group'>");
		} else {
			rm.write("<div class='sapUiUx3TIFacetThingGroup' role='group'>");
		}
		if (bTitle) {
			rm.write("<div class='sapUiUx3TIFacetThingGroupContentTitle'");
			rm.writeAttributeEscaped("title", group.getTitle());
			rm.write("><span>");
			rm.writeEscaped(group.getTitle());
			rm.write("</span></div>");
		}
		rm.write("<div class='sapUiUx3TIFacetThingGroupContent'>");
		var groupContent = group.getContent();
		for ( var j = 0; j < groupContent.length; j++) {
			rm.renderControl(groupContent[j]);
		}
		rm.write("</div></div>");
	}
}