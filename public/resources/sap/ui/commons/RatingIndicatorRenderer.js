/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.RatingIndicator
jQuery.sap.declare("sap.ui.commons.RatingIndicatorRenderer");

/**
 * @class RatingIndicatorRenderer.
 * @static
 */
sap.ui.commons.RatingIndicatorRenderer = function() {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
 *          oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *          oRating an object representation of the control that should be rendered
 */
sap.ui.commons.RatingIndicatorRenderer.render = function(oRenderManager, oRating) {
	var rm = oRenderManager;

	// return immediately if control is invisible
	if(!oRating.getVisible()){
		return;
	}

	var iNumberOfSymbols = oRating.getMaxValue();

	rm.write("<div");
	rm.writeControlData(oRating);
	rm.addClass("sapUiRating");
	if(oRating.getEditable()){
		rm.addClass("sapUiRatingEdit");
	}
	rm.writeClasses();
	rm.writeAttribute("tabindex", oRating.getEditable() ? "0" : "-1");
	if(oRating.getTooltip() && oRating.getTooltip_AsString()){
		rm.writeAttribute("title", oRating.getTooltip_AsString());
	}else if(!oRating.getEditable()){
		rm.writeAttribute("title", oRating.getValue());
	}

	//ARIA
	rm.writeAttribute("role", "slider");
	rm.writeAttribute("aria-orientation", "horizontal");
	rm.writeAttribute("aria-valuemin", 1);
	rm.writeAttribute("aria-valuemax", iNumberOfSymbols);
	rm.writeAttribute("aria-disabled", !oRating.getEditable());
	rm.writeAttribute("aria-live", "assertive");

	rm.write(">");

	for(var i=0; i<iNumberOfSymbols; i++){
		sap.ui.commons.RatingIndicatorRenderer.renderItem(rm, oRating, i, oRating.getValue());
	}

	rm.write("</div>");
};

/**
 * Helper function to render a rating symbol.
 * @private
 */
sap.ui.commons.RatingIndicatorRenderer.renderItem = function(rm, oRating, i, fValue){
	var val = i+1;
	rm.write("<div");
	rm.writeAttribute("id", oRating.getId() + "-itm-" + val);
	rm.writeAttribute("itemvalue", val);
	rm.writeAttribute("class", "sapUiRatingItm");
	rm.writeAttribute("style", "line-height:0px;");
	if(!oRating.getTooltip() && oRating.getEditable()){
		//rm.writeAttribute("dir", "ltr"); //Do we need this to avoid tooltips like "of 5 3" instead of "3 of 5"
		rm.writeAttribute("title", oRating._getText("RATING_TOOLTIP" , [val, oRating.getMaxValue()]));
	}
	rm.write(">");

	rm.write("<img");
	rm.writeAttribute("class", "sapUiRatingItmImg");
	var sIcon = sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol("selected", oRating);
	rm.writeAttributeEscaped("src", sIcon);
	rm.write("/>");

	rm.write("<div");
	rm.writeAttribute("class", "sapUiRatingItmOvrflw");

	var visualMode = oRating.getVisualMode();
	if(visualMode == "Full"){
		fValue = Math.round(fValue);
	}
	var style;
	if(fValue >= val){
		style = "width:0%;";
	}else if(fValue < i){
		style = "width:100%;";
	}else{
		var diff = fValue-i;
		if(visualMode == "Half"){
			var width = 50;
			if(diff < 0.25) {
				width = 100;
			}
			if(diff >= 0.75) {
				width = 0;
			}
			style = "width:" + width + "%;";
		}else{ //Continuous
			style = "width:" + (100-Math.round(diff*100)) + "%;";
		}
	}
	rm.writeAttribute("style", style);
	rm.write(">");

	rm.write("<img");
	rm.writeAttribute("class", "sapUiRatingItmOvrflwImg");
	sIcon = sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol("unselected", oRating);
	rm.writeAttributeEscaped("src", sIcon);
	rm.write("/>");

	rm.write("</div>");
	rm.write("</div>");
};

/**
 * Helper function to render a rating symbol in hover state.
 *
 * @param {integer} iCount the number of the rating image which should be hovered.
 * @param {sap.ui.core.Control} oRating an object representation of the control that should be rendered
 * @param {boolean} bAfter specifies whether the rating image is behind the hovered one.
 * @private
 */
sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol = function(iCount, oRating, bAfter){
	var oSymbol = jQuery.sap.byId(oRating.getId() + "-itm-" + iCount);
	oSymbol.addClass("sapUiRatingItmHov");
	var oSymbolImage = oSymbol.children("img");
	var sIcon = sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol(bAfter ? "unselected" : "hover", oRating);
	oSymbolImage.attr("src", sIcon);
};

/**
 * Helper function to render a rating symbol in normal (selected/deselected) state.
 *
 * @param {integer} iCount the number of the rating image which should be unhovered.
 * @param {sap.ui.core.Control} oRating an object representation of the control that should be rendered
 * @private
 */
sap.ui.commons.RatingIndicatorRenderer.unhoverRatingSymbol = function(iCount, oRating){
	var oSymbol = jQuery.sap.byId(oRating.getId() + "-itm-" + iCount);
	oSymbol.removeClass("sapUiRatingItmHov");
	var oSymbolImage = oSymbol.children("img");
	var sIcon = sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol("selected", oRating);
	oSymbolImage.attr("src", sIcon);
};

/**
 * Helper function to find the right symbol.
 *
 * @param {string} sType type of desired image (selected, unselected, hover)
 * @param {sap.ui.core.Control} oRating an object representation of the control that should be rendered
 * @private
 */
sap.ui.commons.RatingIndicatorRenderer.getThemeSymbol = function(sType, oRating){
	var sIcon;

	if(sType == "selected"){
		sIcon = oRating.getIconSelected();
	}else if(sType == "unselected"){
		sIcon = oRating.getIconUnselected();
	}else{
		sIcon = oRating.getIconHovered();
	}

	if(!sIcon){
		//TODO: Access the parameters in the CSS to get the path
		var sPath = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/rating/";
		sIcon = sPath + "star_" + sType + ".png";
	}

	return sIcon;
};