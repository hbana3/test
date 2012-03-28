/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

//Provides default renderer for control sap.ui.commons.Paginator
jQuery.sap.declare("sap.ui.commons.PaginatorRenderer");

/**
 * @class Paginator renderer.
 * @static
 */
sap.ui.commons.PaginatorRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oPaginator an object representation of the control that should be rendered
 */
sap.ui.commons.PaginatorRenderer.render = function(oRm, oPaginator){

	oRm.write("<div");
	oRm.writeControlData(oPaginator);
	oRm.write(" class='sapUiPag' role='toolbar' aria-labelledby='" + oPaginator.getId() + "-accDesc'>");
	oRm.write("<span class='sapUiPagAccDesc' id='" + oPaginator.getId() + "-accDesc'>Paginator</span>");

	this.renderPaginator(oRm, oPaginator);

	oRm.write("</div>");
};


/**
 * Builds the paginator
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oPaginator an object representation of the control that should be rendered
 */
sap.ui.commons.PaginatorRenderer.renderPaginator = function(oRm, oPaginator) {
	// First check if number of page is 1 or less, in this case, we do not render the paginator
	if (oPaginator.getNumberOfPages() <= 1) {
		return;
	}

	// Buffer paginator id for other ids concatenation
	var paginatorId = oPaginator.getId();
	var iCurrentPage = oPaginator.getCurrentPage();
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");


	/************************************************************************************
	 * Render the Page 1 (first page link) when necessary, back arrow, back link
	 ************************************************************************************/
	var linkClass = (iCurrentPage == 1) ? "sapUiLnkDsbl" : "sapUiLnk";

	// First page link must only appear when at least 5 pages are available
	if (oPaginator.getNumberOfPages() > 5) {
		oRm.write("<a id='" + paginatorId + "--firstPageLink' href='javascript:void(0);' title='" + rb.getText("FIRST_PAGE") + "' ");
		oRm.write("class='sapUiPagBtn sapUiPagFirst " + linkClass + "'><span class='sapUiPagText'>");
		oRm.writeEscaped(rb.getText("PAGE") + " 1");
		oRm.write("</span></a>");
	}
	oRm.write("<a id='" + paginatorId + "--backLink' href='javascript:void(0);' title='" + rb.getText("PREVIOUS_PAGE") + "' ");
	oRm.write("class='sapUiPagBtn sapUiPagBack " + linkClass + "'><span class='sapUiPagText'>");
	oRm.writeEscaped(rb.getText("BACK"));
	oRm.write("</span></a>");



	/************************************************************************************
	 * Render the page numbers in a list
	 *************************************************************************************/
	oRm.write("<ul id='" + paginatorId + "-pages' role='presentation'>");
	oRm.write(sap.ui.commons.PaginatorRenderer.getPagesHtml(paginatorId, oPaginator._calculatePagesRange(), oPaginator.getCurrentPage(), true));
	oRm.write("</ul>");



	/************************************************************************************
	 * Render the forward link, forward arrow and last page link when necessary
	 *************************************************************************************/
	linkClass = (iCurrentPage == oPaginator.getNumberOfPages()) ? "sapUiLnkDsbl" : "sapUiLnk";

	oRm.write("<a id='" + paginatorId + "--forwardLink' href='javascript:void(0);' title='" + rb.getText("NEXT_PAGE") + "' ");
	oRm.write("class='sapUiPagBtn sapUiPagForward " + linkClass + "'><span class='sapUiPagText'>");
	oRm.writeEscaped(rb.getText("FORWARD"));
	oRm.write("</span></a>");
	if (oPaginator.getNumberOfPages() > 5) {
		oRm.write("<a id='" + paginatorId + "--lastPageLink' href='javascript:void(0);' title='" + rb.getText("LAST_PAGE") + "' ");
		oRm.write("class='sapUiPagBtn sapUiPagLast " + linkClass + "'><span class='sapUiPagText'>");
		oRm.write(oPaginator.getNumberOfPages());
		oRm.write("</span></a>");
	}
};


sap.ui.commons.PaginatorRenderer.getPagesHtml = function(sPaginatorId, oRange, iCurrent, bVisible) {
	var aHtml = [];
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");

	// each single page link is an <li> with an <a> inside
	for (var i = oRange.firstPage; i <= oRange.lastPage; i++) {
		aHtml.push("<li id='" + sPaginatorId + "-li--" + i + "' class='sapUiPagPage");
		aHtml.push((i == iCurrent) ? " sapUiPagCurrentPage'" : "'");
		if (!bVisible) { // for those items to be animated into view
			aHtml.push(" style='display:none'");
		}
		aHtml.push(">");
		aHtml.push("<a id='" + sPaginatorId + "-a--" + i + "' title='" + rb.getText("PAGE") + " " + i + "'");
		if (i == iCurrent) {
			aHtml.push(" tabindex='0' class='sapUiLnkDsbl'");
		} else {
			 aHtml.push(" class='sapUiLnk'");
		}
		aHtml.push(">" + i + "</a>"); // TODO: clickable?! onPageClick
		aHtml.push("</li>");
	}

	return aHtml.join("");
};

/**
 * Updates the back/first/next/last page links
 * @param {sap.ui.core.Control} oPaginator an object representation of the control that should be updated
 * @private
 */
sap.ui.commons.PaginatorRenderer.updateBackAndForward = function(oPaginator) {
	var page = oPaginator.getCurrentPage();
	var id = oPaginator.getId();

	var isFirst = (page == 1);
	var isLast = (page == oPaginator.getNumberOfPages());

	jQuery.sap.byId(id + "--firstPageLink").toggleClass("sapUiLnk", !isFirst).toggleClass("sapUiLnkDsbl", isFirst);
	jQuery.sap.byId(id + "--backLink").toggleClass("sapUiLnk", !isFirst).toggleClass("sapUiLnkDsbl", isFirst);
	jQuery.sap.byId(id + "--forwardLink").toggleClass("sapUiLnk", !isLast).toggleClass("sapUiLnkDsbl", isLast);
	jQuery.sap.byId(id + "--lastPageLink").toggleClass("sapUiLnk", !isLast).toggleClass("sapUiLnkDsbl", isLast);
};