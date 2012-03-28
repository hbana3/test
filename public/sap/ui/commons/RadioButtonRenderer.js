/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.RadioButton
jQuery.sap.declare("sap.ui.commons.RadioButtonRenderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * @class RadioButton Renderer
 *
 * @author d046011
 * @version 0.1
 * @static
 */
sap.ui.commons.RadioButtonRenderer = {
};

/**
 * Renders the HTML for the RadioButton, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.commons.RadioButton} oRadioButton The RadioButton control that should be rendered.
 */
sap.ui.commons.RadioButtonRenderer.render = function(oRenderManager, oRadioButton) {
	var rm = oRenderManager;

	// Return immediately if control is invisible
	if (!oRadioButton.getVisible()) {
		return;
	}

	rm.addClass("sapUiRb");

	// Open the containing <span> tag
	rm.write("<span");
	rm.writeControlData(oRadioButton);

	// ARIA
	rm.writeAttribute("role", "radio");
	rm.writeAccessibilityState(oRadioButton, {checked: oRadioButton.getSelected()===true,
											  invalid: oRadioButton.getValueState() == sap.ui.core.ValueState.Error,
											  disabled: !oRadioButton.getEditable()});

	// Collect state information
	var enabled = oRadioButton.getEnabled() != null && oRadioButton.getEnabled();
	var editable = oRadioButton.getEditable() != null && oRadioButton.getEditable();
	var inErrorState = false;
	var inWarningState = false;
	if (oRadioButton.getValueState() != null) {
		inErrorState = sap.ui.core.ValueState.Error == oRadioButton.getValueState();
		inWarningState = sap.ui.core.ValueState.Warning == oRadioButton.getValueState();
	}

	// Add classes and properties depending on the state
	if (oRadioButton.getSelected()) {
		rm.addClass("sapUiRbSel");
	}

	var myTabIndex = 0;
	var bReadOnly = false;

	if (!enabled) {
		myTabIndex = -1;
		bReadOnly = true;
		rm.addClass("sapUiRbDis");
	}
	if (!editable) {
		myTabIndex = -1;
		bReadOnly = true;
		rm.addClass("sapUiRbRo");
	}
	if (inErrorState) {
		rm.addClass("sapUiRbErr");
	} else if (inWarningState) {
		rm.addClass("sapUiRbWarn");
	}
	if (enabled && editable && !inErrorState && !inWarningState) {
		rm.addClass("sapUiRbStd");
	}
	if (enabled && editable) {
		rm.addClass("sapUiRbInteractive");
	}
	rm.writeClasses();

	if (oRadioButton.getWidth() && oRadioButton.getWidth() != '') {
		rm.writeAttribute("style", "width:" + oRadioButton.getWidth() + ";");
	}

	rm.writeAttribute("tabIndex", myTabIndex);

	rm.write(">"); // Close the containing <span> tag


	// Write the real - potentially hidden - HTML RadioButton element
	rm.write("<input type='radio' tabindex='-1' id='");
	rm.write(oRadioButton.getId());
	rm.write("-RB' name=\"");
	rm.write(oRadioButton.getGroupName());
	rm.write("\" ");
	if (oRadioButton.getSelected()) {
		rm.write(" checked='checked'");
	}
	if (!enabled) {
		rm.write(" disabled='disabled'");
	}
	var tooltip = oRadioButton.getTooltip_AsString();
	var tooltipToUse = sap.ui.core.ValueStateSupport.enrichTooltip(oRadioButton, tooltip ? tooltip : oRadioButton.getText());
	if (tooltipToUse) {
		rm.writeAttributeEscaped("title", tooltipToUse);
	}
	if(bReadOnly) {
		rm.write(" readonly='readonly'");
		rm.write(" disabled='disabled'");
	}
	if (oRadioButton.getKey()) {
		rm.writeAttribute("value", oRadioButton.getKey());
	}

	rm.write(" />"); // Close RadioButton-input-element


	// Write the RadioButton label which also holds the background image
	rm.write("<label");
	if (tooltipToUse) {
		rm.writeAttributeEscaped("title", tooltipToUse);
	}
	rm.writeAttribute("for", oRadioButton.getId() + "-RB"); // Label for RadioButton, so a click toggles the state
	if (!oRadioButton.getText()) {
		rm.write(" class=\"sapUiRbNoText\"");
	}
	rm.write(">");
	if (oRadioButton.getText()) {
		this.renderText(rm, oRadioButton.getText(), oRadioButton.getTextDirection());
	}
	rm.write("</label>");

	// Close the surrounding <span> element
	rm.write("</span>");
};

/**
 * Write RadioButton label - either flat, or, in case the text direction is different from the environment, within a <span> with an explicit "dir".
 */
sap.ui.commons.RadioButtonRenderer.renderText = function(oRenderManager, sText, eTextDirection) {
	var rm = oRenderManager;
	if (!eTextDirection || eTextDirection == sap.ui.core.TextDirection.Inherit){
		rm.writeEscaped(sText);
	} else {
		rm.write("<span dir=\"" + eTextDirection + "\">");
		rm.writeEscaped(sText);
		rm.write("</span>");
	}
};

sap.ui.commons.RadioButtonRenderer.setSelected = function(oRadioButton, bSelected) {

	jQuery.sap.byId(oRadioButton.getId()).toggleClass('sapUiRbSel', bSelected).attr('aria-checked', bSelected);
	if(bSelected){
		jQuery.sap.domById(oRadioButton.getId()+'-RB').checked = true;
		jQuery.sap.domById(oRadioButton.getId()+'-RB').setAttribute('checked', 'checked');
	}else{
		jQuery.sap.domById(oRadioButton.getId()+'-RB').checked = false;
		jQuery.sap.domById(oRadioButton.getId()+'-RB').removeAttribute('checked');
	}

};
