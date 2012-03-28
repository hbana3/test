/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.DropdownBox
jQuery.sap.declare("sap.ui.commons.DropdownBoxRenderer");
jQuery.sap.require("sap.ui.commons.ComboBoxRenderer");

/**
 * @class DropdownBox renderer.
 * @static
 */
sap.ui.commons.DropdownBoxRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.ComboBoxRenderer);


/**
 * Renders ARIA information for the combobox (outer &lt;div&gt;)
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.DropdownBoxRenderer.renderComboARIAInfo = function(rm, oDdb) {
//	nothing to do
};

/**
 * Renders ARIA information for the dropdownbox (outer &lt;div&gt;)
 * @param {sap.ui.fw.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 * @private
 */
sap.ui.commons.DropdownBoxRenderer.renderARIAInfo = function(rm, oDdb) {
	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
		rm.writeAttribute("role", "combobox");
		var oACCInfo = {
				owns: oDdb._getListBox().getId(),
				autocomplete: "list",
				live: "polite",
				describedby: oDdb.getId()};
		if(oDdb.getValueState() == sap.ui.core.ValueState.Error){
			jQuery.extend(oACCInfo, {invalid: true});
		}
		rm.writeAccessibilityState(oDdb, oACCInfo);
	}
};