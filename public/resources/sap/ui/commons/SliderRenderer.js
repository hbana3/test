/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Slider
jQuery.sap.declare("sap.ui.commons.SliderRenderer");

/**
 * @class Slider renderer.
 * @static
 */
sap.ui.commons.SliderRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.fw.RenderManager}.
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.fw.Control} oControl An object representation of the control that should be rendered.
 */
sap.ui.commons.SliderRenderer.render = function(oRenderManager, oSlider){
	// Convenience variable
	var rm = oRenderManager;
	var oR  = sap.ui.commons.SliderRenderer;

	// Return immediately if control is invisible
	if (!oSlider.getVisible()) {
		return;
	}

	// Write the HTML into the render manager
	rm.write('<DIV');
	rm.writeControlData(oSlider);
	rm.addClass('sapUiSli');
	if(oSlider.getTooltip_AsString()) {
		rm.writeAttributeEscaped('title', oSlider.getTooltip_AsString());
	}

	if (oSlider.getWidth() && oSlider.getWidth() != '') {
		rm.writeAttribute('style', 'width:' + oSlider.getWidth() + ';');
	}

	if (!oSlider.getEnabled()) {
		rm.addClass('sapUiSliDsbl');
	}else{
		if (!oSlider.getEditable()) {
			rm.addClass('sapUiSliRo');
		}else {
			rm.addClass('sapUiSliStd');
		}
	}

	rm.writeClasses();

	// Write slide bar
	rm.write('><DIV');
	rm.writeAttribute('id', oSlider.getId() + '-right');
	rm.write('class="sapUiSliR" > <DIV');

	rm.writeAttribute('id', oSlider.getId() + '-left');
	rm.write('class="sapUiSliL" > <DIV');

	rm.writeAttribute('id', oSlider.getId() + '-bar');
	rm.write('class="sapUiSliBar" >');

	if(oSlider.getTotalUnits() > 0){

		var fStepSize = (oSlider.getMax() - oSlider.getMin()) / oSlider.getTotalUnits();

		// Add ticks
		for (var i = 0; i <= oSlider.getTotalUnits(); i++){
			rm.write('<DIV');
			rm.writeAttribute('id', oSlider.getId() + '-tick' + i);
			rm.write('class="sapUiSliTick" ');
			rm.write('></DIV>'); // tick

			if( oSlider.getStepLabels()){
				// Texts
				rm.write('<DIV');
				rm.writeAttribute('id', oSlider.getId() + '-text' + i);
				switch (i){
				case ( 0 ):
					rm.write('class="sapUiSliText sapUiSliTextLeft" >');
					break;
				case (oSlider.getTotalUnits()):
					rm.write('class="sapUiSliText sapUiSliTextRight" >');
					break;
				default:
					rm.write('class="sapUiSliText" >');
					break;
				}

				rm.write(oSlider.getMin() + i * fStepSize);
				rm.write('</DIV>'); // Text
			}
		}
	}

	// Highlight bar
	rm.write('<DIV');
	rm.writeAttribute('id', oSlider.getId() + '-hili');
	rm.write('class="sapUiSliHiLi"></DIV><DIV');

	// Icon for grip
	rm.writeAttribute('id', oSlider.getId() + '-grip');
	if (oSlider.getEnabled()) {
		rm.writeAttribute('tabIndex', '0');
	}else{
		rm.writeAttribute('tabIndex', '-1');
	}
	rm.writeAttribute('class', 'sapUiSliGrip');
	rm.writeAttribute('title', oSlider.getValue());

	// ARIA
	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
//		rm.writeAttribute("role", sap.ui.core.AccessibleRole.Slider);
		rm.writeAttribute('role', 'slider');
		rm.writeAccessibilityState(oSlider, {orientation: 'horizontal'});
		rm.writeAccessibilityState(oSlider, {valuemin:oSlider.getMin()});
		rm.writeAccessibilityState(oSlider, {valuemax:oSlider.getMax()});
		rm.writeAccessibilityState(oSlider, {live: 'assertive'});
		rm.writeAccessibilityState(oSlider, {label:oSlider.getTooltip_AsString()});

		if (!oSlider.getEditable() || !oSlider.getEnabled()) {
			rm.writeAccessibilityState(oSlider, {disabled: true});
		}else {
			rm.writeAccessibilityState(oSlider, {disabled: false});
		}
	}

	rm.write('>&#9650;</DIV></DIV></DIV></DIV></DIV>'); // Symbol for HCB Theme (Must be hidden in other themes)

};