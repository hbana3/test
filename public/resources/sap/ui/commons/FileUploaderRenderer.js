/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.FileUploader
jQuery.sap.declare("sap.ui.commons.FileUploaderRenderer");

/**
 * @class
 * @static
 */
sap.ui.commons.FileUploaderRenderer = function() {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
 */
sap.ui.commons.FileUploaderRenderer.render = function(oRenderManager, oFileUploader) {

	var rm = oRenderManager;
	var accessibility = sap.ui.getCore().getConfiguration().getAccessibility();

	// return immediately if control is invisible
	if (!oFileUploader.getVisible()) {
		return;
	}

	rm.write('<div class="sapUiFup"');
	rm.writeControlData(oFileUploader);
	rm.write('>');

	// form
	rm.write('<form style="display:inline-block" encType="multipart/form-data" method="post" id="' + oFileUploader.getId() + '-fu_form" ');
	rm.write('action="' + oFileUploader.getUploadUrl() + '" ');
	rm.write('target="' + oFileUploader.getId() + '-frame"');
	rm.write('>');

	// the SAPUI5 TextField and Button
	rm.write('<div class="sapUiFupInp"');
	if (accessibility) {
		rm.writeAttribute("role", "textbox");
		rm.writeAttribute("aria-readonly", "true");
	}
	rm.write('>');

	rm.write('<div class="sapUiFupGroup" border="0" cellPadding="0" cellSpacing="0"><div><div>');
	rm.renderControl(oFileUploader.oFilePath);
	rm.write('</div><div>');  //-> per style margin
	rm.renderControl(oFileUploader.oBrowse);
	rm.write('</div></div></div>');

	// hidden pure input type file (surrounded by a div which is responsible for giving the input the orrect size)
	rm.write('<div class="sapUiFupInputMask"><input  type="file" name="' + oFileUploader.getName() +'" id="' + oFileUploader.getId() + '-fu" tabindex="-1" size="1"');
	rm.writeAttributeEscaped('value', oFileUploader.getValue() || "");
	if (oFileUploader.getTooltip_AsString() ) {
		rm.writeAttributeEscaped('title', oFileUploader.getTooltip_AsString());
	} else if (oFileUploader.getTooltip() ) {
		// object tooltip, do nothing - tooltip will be displayed
	} else if (oFileUploader.getValue() != "") {
		// only if there is no tooltip, then set value as fallback
		rm.writeAttributeEscaped('title', oFileUploader.getValue());
	}
	if (!oFileUploader.getEnabled()) {
		rm.writeAttribute('disabled', 'disabled');
	}
	rm.write('><input type="hidden" name="' + oFileUploader.getName() +'-data" id="' + oFileUploader.getId() + '-fu_data"');
	rm.writeAttributeEscaped('value', oFileUploader.getAdditionalData() || "");
	rm.write('></div>');


	rm.write('</div>');
	rm.write('</form>');
	rm.write('</div>');
};