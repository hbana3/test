/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.ExactListRenderer
jQuery.sap.declare("sap.ui.ux3.ExactListRenderer");

/**
 * @class ExactList renderer. 
 * @static
 */
sap.ui.ux3.ExactListRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.ExactListRenderer.render = function(oRenderManager, oControl){ 

	//If not already done compute the scrollbar size and remember
	if(!sap.ui.ux3.ExactList.__oScollbarSize){
		var getScrollbarSize = function() {
			var jDummy = jQuery("<div style=\"visibility:visible;position:absolute;height:100px;width:100px;overflow:scroll;opacity:0;\"></div>");
			jQuery(sap.ui.getCore().getStaticAreaRef()).append(jDummy);
		
			var iSchrollbarWidth = jDummy.get(0).offsetWidth - jDummy.get(0).scrollWidth;
			var iSchrollbarHeight = jDummy.get(0).offsetHeight - jDummy.get(0).scrollHeight;
		
			jDummy.remove();

			return ({width: iSchrollbarWidth, height: iSchrollbarHeight});
		};
		sap.ui.ux3.ExactList.__oScollbarSize = getScrollbarSize();
	}
	
	var rm = oRenderManager;
	var aSubLists = oControl.getSubLists();
	var oAttribute = oControl._getAtt();
	
	// render the root tag
    rm.write("<div tabindex=\""+(oControl._isTop() ? "0" : "-1")+"\"");
    rm.writeControlData(oControl);
    rm.addClass("sapUiUx3ExactLst");
    if(oControl._isTop()){
    	rm.addClass("sapUiUx3ExactLstTop");
    	rm.addStyle("height", oControl.getTopHeight()+"px");
    }
    if(oControl._bCollapsed){
    	rm.addClass("sapUiUx3ExactLstCollapsed");
    }
    rm.writeClasses();
    rm.writeStyles();
    rm.write(">");
    
    if(!oControl._bPopupOpened){
	    // render the list area with the used listbox
	    rm.write("<div id=\"" + oControl.getId() + "-lst\" class=\"sapUiUx3ExactLstLst\">");
	    rm.renderControl(oControl._lb);
	    rm.write("<a id=\"" + oControl.getId() + "-exp\" class=\"sapUiUx3ExactLstExp\">"+this.getExpanderSymbol(false, false)+"</a>");
	    rm.write("</div>");
    }
    
    // render the content area with the sub lists
    rm.write("<div id=\"" + oControl.getId() + "-cntnt\" class=\"sapUiUx3ExactLstCntnt");
    if(aSubLists.length == 0){
    	rm.write(" sapUiUx3ExactLstCntntEmpty");
    }
    rm.write("\">");
    for(var i=0; i<aSubLists.length; i++){
    	rm.renderControl(aSubLists[i]);
    }
    rm.write("</div>");
    
    // render the header
    rm.write("<header id=\"" + oControl.getId() + "-head\" class=\"sapUiUx3ExactLstHead\"  tabindex=\"-1\">");
    if(oControl._isTop()){
    	// render the header content for top list
    	rm.write("<h2 id=\"" + oControl.getId() + "-head-txt\" class=\"sapUiUx3ExactLstHeadTopTxt\"><span>");
    	if(oControl.getTopTitle()){
			rm.writeEscaped(oControl.getTopTitle());
		}
		rm.write("</span></h2>");
    }else{
    	// render the header content for non-top list
	    rm.write("<h2 id=\"" + oControl.getId() + "-head-txt\" class=\"sapUiUx3ExactLstHeadTxt\"");
	    if (oAttribute && oAttribute.getTooltip_AsString()) {
			rm.writeAttributeEscaped("title", oAttribute.getTooltip_AsString());
		}else if (oAttribute && oAttribute.getText()) {
			rm.writeAttributeEscaped("title", oAttribute.getText());
		}
		rm.write(">");
		if(oAttribute){
			rm.writeEscaped(oAttribute.getText());
		}
		rm.write("</h2>");
		
		// render header actions
		rm.write("<div id=\"" + oControl.getId() + "-head-action\" class=\"sapUiUx3ExactLstHeadAct"+(oControl.getShowClose() ? "" : " sapUiUx3ExactLstHeadActNoClose")+"\">");
		rm.write("<a id=\"" + oControl.getId() + "-hide\" class=\"sapUiUx3ExactLstHide\">"+this.getExpanderSymbol(!oControl._bCollapsed, true)+"</a>");
		rm.write("<a id=\"" + oControl.getId() + "-close\" class=\"sapUiUx3ExactLstClose\">X</a>");
		rm.write("</div>");
    }
    rm.write("</header>");
    
    // render resize bar
    rm.write("<div id=\"" + oControl.getId() + "-rsz\" class=\"sapUiUx3ExactLstRSz\"></div>");
    
	// close the root tag
    rm.write("</div>");
};


/**
 * Returns the symbol for the vertical or horizontal expander depending on the given expand state.
 * @private
 */
sap.ui.ux3.ExactListRenderer.getExpanderSymbol = function(bExpanded, bHorizontal){ 
	if(bHorizontal){
		if(sap.ui.getCore().getConfiguration().getRTL()){
			return bExpanded ? "&#9654;" : "&#9664;";
		}else{
			return bExpanded ? "&#9664;" : "&#9654;";
		}
	}else{
		return bExpanded ? "&#9650;" : "&#9660;";
	}
};
