/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

//Provides default renderer for control sap.ui.table.Table
jQuery.sap.declare("sap.ui.table.TableRenderer");

/**
 * @class Table renderer.
 * @static
 */
sap.ui.table.TableRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oTable an object representation of the control that should be rendered
 */
sap.ui.table.TableRenderer.render = function(rm, oTable) {

	// get the relevant information
	var oInfo = oTable._oInfo;

	// basic table div
	rm.write("<div");
	if (oTable._oInfo.bAccMode) {
		rm.writeAttribute("tabindex", "0");
		var aAriaOwnsIds = []; 
		if (oTable.getToolbar()) {
			aAriaOwnsIds.push(oTable.getToolbar().getId());
		}
		aAriaOwnsIds.push(oTable.getId() + "-table");
		rm.writeAttribute("aria-owns", aAriaOwnsIds.join(" "));
	}
	rm.writeControlData(oTable);
	rm.addClass("sapUiTable");
	rm.addClass("sapUiTableCHdr"); // show column headers
	if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.None) {
		rm.addClass("sapUiTableRSel"); // show row selector
	}
	//rm.addClass("sapUiTableHScr"); // show horizontal scrollbar
	rm.addClass("sapUiTableVScr"); // show vertical scrollbar
	rm.writeClasses();
	if (oTable.getWidth()) {
		rm.addStyle("width", oTable.getWidth());
	}
	rm.writeStyles();
	rm.write(">");
	
	if (oTable.getTitle()) {
		sap.ui.table.TableRenderer.renderHeader(rm, oTable, oTable.getTitle());
	}

	if (oTable.getToolbar()) {
		sap.ui.table.TableRenderer.renderToolbar(rm, oTable, oTable.getToolbar());
	}
	
	sap.ui.table.TableRenderer.renderContent(rm, oTable);
	
	if (oTable.getFooter()) {
		sap.ui.table.TableRenderer.renderFooter(rm, oTable, oTable.getFooter());
	}

	rm.write("</div>");

};

// =============================================================================
// BASIC AREAS OF THE TABLE
// =============================================================================

sap.ui.table.TableRenderer.renderHeader = function(rm, oTable, oTitle) {
	rm.write("<div");
	rm.addClass("sapUiTableHdr");
	rm.writeClasses();
	if (oTable._oInfo.bAccMode) {
		rm.writeAttribute("role", "heading");
	}
	rm.write(">");
	
	rm.renderControl(oTitle);

	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderToolbar = function(rm, oTable, oToolbar) {
	rm.write("<div");
	rm.addClass("sapUiTableTbr");
	rm.writeClasses();
	rm.write(">");
	
	rm.renderControl(oToolbar);

	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderContent = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableCnt");
	rm.writeClasses();
	rm.write(">");
	
	sap.ui.table.TableRenderer.renderColRowHdr(rm, oTable);
	sap.ui.table.TableRenderer.renderColHdr(rm, oTable);
	sap.ui.table.TableRenderer.renderRowHdr(rm, oTable);
	sap.ui.table.TableRenderer.renderTable(rm, oTable);
	sap.ui.table.TableRenderer.renderVSb(rm, oTable);
	sap.ui.table.TableRenderer.renderHSb(rm, oTable);

	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderFooter = function(rm, oTable, oFooter) {
	rm.write("<div");
	rm.addClass("sapUiTableFtr");
	rm.writeClasses();
	rm.write(">");
	
	rm.renderControl(oFooter);

	rm.write("</div>");
};

// =============================================================================
// CONTENT AREA OF THE TABLE
// =============================================================================

sap.ui.table.TableRenderer.renderColRowHdr = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableColRowHdr");
	rm.writeClasses();
	if (oTable.getColumnHeaderHeight()) {
		rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
	}
	rm.writeStyles();
	rm.write(">");
	if (oTable.getSelectionMode() !== sap.ui.table.SelectionMode.Single) {
		rm.write("<div");
		rm.writeAttribute("id", oTable.getId() + "-selall");
		rm.writeAttribute("title", oTable._oInfo.oResBundle.getText("TBL_SELECT_ALL"));
		rm.addClass("sapUiTableColRowHdrIco");
		rm.writeClasses();
		/* Centers the select all icon!
		if (oTable.getColumnHeaderHeight()) {
			rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
		}
		rm.writeStyles();
		 */
		if (oTable._oInfo.bAccMode) {
			//rm.writeAttribute("role", "rowheader");
			rm.writeAttribute("tabindex", "0");
		}
		rm.write(">");
		rm.write("</div>");
	}
	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderColHdr = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableColHdrScr");
	rm.writeClasses();
	if (oTable.getColumnHeaderHeight()) {
		rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
	}
	rm.writeStyles();
	rm.write(">");
	
	rm.write("<div");
	rm.addClass("sapUiTableColHdr");
	rm.writeClasses();
	if (oTable.getColumnHeaderHeight()) {
		rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
	}
	rm.writeStyles();
	if (oTable._oInfo.bAccMode) {
		rm.writeAttribute("role", "row");
	}
	rm.write(">");

	var aCols = oTable.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		sap.ui.table.TableRenderer.renderCol(rm, oTable, aCols[i], i);
		sap.ui.table.TableRenderer.renderColRsz(rm, oTable, aCols[i], i);
	}
	
	rm.write("</div>");

	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderCol = function(rm, oTable, oColumn, iIndex) {
	rm.write("<div");
	rm.writeAttribute("id", oColumn.getId());
	rm.writeAttribute("data-sap-ui-colindex", iIndex);
	rm.addClass("sapUiTableCol");
	rm.writeClasses();
	var sWidth = oColumn.getWidth();
	if (jQuery.sap.endsWith(sWidth, "px")) {
		rm.addStyle("width", sWidth);
	}
	if (oTable.getColumnHeaderHeight()) {
		rm.addStyle("height", oTable.getColumnHeaderHeight() + "px");
	}
	rm.writeStyles();
	rm.writeAttribute("tabindex", "0");
	if (oTable._oInfo.bAccMode) {
		rm.writeAttribute("role", "columnheader");
	}
	rm.write(">");
	
	// TODO: rework column sort / filter status integration
	rm.write("<div id=\"" + oTable.getId() + "_icons_" + oColumn.getId() + "\" class=\"sapUiTblColIcons\"></div>");
	rm.renderControl(oColumn.getLabel());
	
	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderColRsz = function(rm, oTable, oColumn, iIndex) {
	if (oColumn.getResizable()) {
		rm.write("<div");
		rm.writeAttribute("id", oColumn.getId() + "-rsz");
		rm.writeAttribute("data-sap-ui-colindex", iIndex);
		rm.addClass("sapUiTableColRsz");
		rm.writeClasses();
		rm.write("></div>");
	}
};

sap.ui.table.TableRenderer.renderRowHdr = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableRowHdrScr");
	rm.writeClasses();
	rm.addStyle("height", (oTable.getRowHeight() * oTable.getVisibleRowCount()) + "px"); //oTable.getHeight());
	if (oTable.getColumnHeaderHeight()) {
		rm.addStyle("top", oTable.getColumnHeaderHeight() + "px");
	}
	rm.writeStyles();
	rm.write(">");
	
	rm.write("<div");
	rm.addClass("sapUiTableRowHdrCnt");
	rm.writeClasses();
	rm.write(">");
	
	rm.write("<table");
	rm.addClass("sapUiTableRowHdr");
	rm.writeClasses();
	rm.write(">");

	// start with the first current top visible row
	for (var row = 0, count = oTable.getRows().length; row < count; row++) {
		sap.ui.table.TableRenderer.renderRowHdrRow(rm, oTable, oTable.getRows()[row]);
	}
	
	rm.write("</table>");
	
	rm.write("</div>");
	
	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderRowHdrRow = function(rm, oTable, oRow) {
	rm.write("<tr");
	if (oTable._oInfo.bAccMode) {
		rm.writeAttribute("role", "row");
	}
	var iRowHeight = oTable.getRowHeight();
	if (iRowHeight) {
		rm.addStyle("height", iRowHeight + "px");
	}
	rm.writeStyles();
	if (oTable._oInfo.bAccMode) {
		rm.writeAttribute("role", "rowheader");
	}
	rm.write("><td");
	rm.writeAttribute("tabindex", "0");
	rm.write("></td></tr>");
};

sap.ui.table.TableRenderer.renderTable = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableCtrlScr");
	rm.writeClasses();
	rm.addStyle("height", (oTable.getRowHeight() * oTable.getVisibleRowCount()) + "px"); //oTable.getHeight());
	rm.writeStyles();
	rm.write(">");
	
	rm.write("<div");
	rm.addClass("sapUiTableCtrlCnt");
	rm.writeClasses();
	rm.write(">");
	
	sap.ui.table.TableRenderer.renderTableControl(rm, oTable);
	
	rm.write("</div>");

	rm.write("</div>");
};


sap.ui.table.TableRenderer.renderTableControl = function(rm, oTable) {
	rm.write("<table");
	rm.writeAttribute("id", oTable.getId() + "-table");
	rm.addClass("sapUiTableCtrl");
	rm.writeClasses();
	rm.write(">");
	
	rm.write("<tr");
	rm.addClass("sapUiTableCtrlCol");
	rm.writeClasses();
	rm.write(">");
	
	for (var col = 0, count = oTable.getColumns().length; col < count; col++) {
		rm.write("<th");
		var sWidth = oTable.getColumns()[col].getWidth();
		if (jQuery.sap.endsWith(sWidth, "px")) {
			rm.addStyle("width", sWidth);
			rm.writeStyles();
		}
		rm.write("></th>");
	}
	
	rm.write("</tr>");
	
	var aRows = oTable.getRows();
	for (var row = 0, count = aRows.length; row < count; row++) {
		sap.ui.table.TableRenderer.renderTableRow(rm, oTable, aRows[row]);
	}
	
	rm.write("</table>");
};

sap.ui.table.TableRenderer.renderTableRow = function(rm, oTable, oRow) {

	rm.write("<tr");
	if (oRow._bHidden) {
		rm.writeAttribute("class", "sapUiTableRowHidden");
	}
	if (oTable._oInfo.bAccMode) {
		rm.writeAttribute("role", "row");
		//rm.writeAttribute("tabindex", "0");
	}
	var iRowHeight = oTable.getRowHeight();
	if (iRowHeight) {
		rm.addStyle("height", iRowHeight + "px");
	}
	rm.writeStyles();
	rm.write(">");
	var aCells = oRow.getCells();
	for (var cell = 0, count = aCells.length; cell < count; cell++) {
		sap.ui.table.TableRenderer.renderTableCell(rm, oTable, aCells[cell], cell);
	}
	rm.write("</tr>");
	
};

sap.ui.table.TableRenderer.renderTableCell = function(rm, oTable, oCell, iCellIndex) {
	var oColumn = oTable.getColumns()[iCellIndex];
	rm.write("<td");
	if (oTable._oInfo.bAccMode) {
		rm.writeAttribute("role", "gridcell");
		rm.writeAttribute("tabindex", "-1");
	}
	var sHAlign = sap.ui.table.TableRenderer.getHAlign(oColumn.getHAlign(), oTable._oInfo.bRtlMode);
	if (sHAlign) {
		rm.addStyle("text-align", sHAlign);
	}
	rm.writeStyles();
	rm.write(">");
	rm.renderControl(oCell);
	rm.write("</td>");
};

sap.ui.table.TableRenderer.renderVSb = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableVSb");
	rm.writeClasses();
	if (oTable.getColumnHeaderHeight()) {
		rm.addStyle("top", oTable.getColumnHeaderHeight() + "px");
	}
	rm.writeStyles();
	rm.write(">");
	rm.renderControl(oTable._oVSb);
	rm.write("</div>");
};

sap.ui.table.TableRenderer.renderHSb = function(rm, oTable) {
	rm.write("<div");
	rm.addClass("sapUiTableHSb");
	rm.writeClasses();
	rm.write(">");
	rm.renderControl(oTable._oHSb);
	rm.write("</div>");
};


// =============================================================================
// HELPER FUNCTIONALITY
// =============================================================================

/**
 * Returns the value for the HTML "align" attribute according to the given
 * horizontal alignment and RTL mode, or NULL if the HTML default is fine.
 *
 * @param {sap.ui.commons.layout.HAlign} oHAlign
 * @param {boolean} bRTL
 * @type string
 */
sap.ui.table.TableRenderer.getHAlign = function(oHAlign, bRTL) {
  switch (oHAlign) {
	case sap.ui.commons.layout.HAlign.Center:
	  return "center";
	case sap.ui.commons.layout.HAlign.End:
	case sap.ui.commons.layout.HAlign.Right:
	  return bRTL ? "left" : "right";
  }
  // case sap.ui.commons.layout.HAlign.Left:
  // case sap.ui.commons.layout.HAlign.Begin:
  return bRTL ? "right" : "left";
};
