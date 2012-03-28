/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.DatePicker
jQuery.sap.declare("sap.ui.commons.DatePickerRenderer");
jQuery.sap.require("sap.ui.commons.TextFieldRenderer");

/**
 * Registers our SAP-defined locales for jQuery to use (DatePicker and DateNavigator).
 * Examples can be found at: http://jquery-ui.googlecode.com/svn/trunk/ui/i18n/
 */
(function($){
	
	var regional = $.datepicker.regional;
	function define(sLocale, oSettings) {
		regional[sLocale] = jQuery.extend(regional[sLocale] || {}, oSettings);
	}
	
// SAP-defined English (DEFAULT) grammar:
	define('en', {
		dateFormat : 'dd/mm/yy',
		firstDay : 0,
		showMonthAfterYear : false,
		yearSuffix : ''
	});
	
// SAP-defined German grammar:
	define('de', {
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		showMonthAfterYear : false,
		yearSuffix : ''
	});
	
// SAP-defined French grammar:
	define('fr', {
		dateFormat : 'dd/mm/yy',
		firstDay : 1,
		showMonthAfterYear : false,
		yearSuffix : ''
	});

// SAP-defined Hebrew grammar:
/*	$.datepicker.regional['he'] = {
		closeText: 'סגור',
		prevText: 'הקודם',
		nextText: 'הבא',
		currentText: 'היום',
		monthNames: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		dayNames: ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'],
		dayNamesShort: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],
		dayNamesMin: ['א\'','ב\'','ג\'','ד\'','ה\'','ו\'','שבת'],*/
	define('he', {
		dateFormat : 'dd/mm/yy',
		firstDay : 0,
		showMonthAfterYear : false,
		yearSuffix : ''
	});
	
}(jQuery));

/**
 * @class DatePicker renderer.
 * @static
 * For a common look&feel, the DatePicker extends the TextField control,
 * just like the ComboBox does.
 */
sap.ui.commons.DatePickerRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);

/**
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager currently rendering this control
 * @param {sap.ui.commons.DatePicker}
 *            oControl the DatePicker whose "value help" should be rendered
 * @private
 * P.S.: "renderOuterAttributes" is a reserved/hard-coded TextField extending function!
 *       It is used to allow extensions to display help icons.
 */
sap.ui.commons.DatePickerRenderer.renderOuterAttributes = function(rm, oControl) {
	// To share the overall ComboBox styling:
	// Note: Would be best if a more generic className had been used for this, like
	//       "sapUiTfIconContainer", as ComboBox and DatePicker and F4Help are likely
	//       to always share a common container look. (Only icon should differ.)
	//       Then, in the unlikely case where one of them would want to differ from the
	//       others, then this one would only need to add its own className on top of
	//       the generic one, e.g. "sapUiTfDateContainer" for the DatePicker.
	// Referencing "sapUiTfCombo" for now.
	rm.addClass("sapUiTfCombo");
	this.renderARIAInfo(rm, oControl);
};

/**
 * Renders additional HTML for the ComboBox to the TextField (sets the icon)
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager The RenderManager that can be used for
 *                                                 writing to the Render-Output-Buffer.
 * @param {sap.ui.fw.Control} oControl An object representation of the control that should
 *                                     be rendered.
 */
sap.ui.commons.DatePickerRenderer.renderOuterContent = function(oRenderManager, oControl){
	// convenience variable
	var rm = oRenderManager;

	rm.write("<div");
	rm.writeAttribute('id', oControl.getId() + '-icon');
	// As mentioned above, a more generic "sapUiTfIcon" className could have been used...
	// One would just have had to add its own icon className!
	// Using "sapUiTfDateIcon" for now, as it proved easier to define instead of overwriting
	// the ComboBox image sources and backgrounds.
	rm.addClass("sapUiTfDateIcon");
	rm.writeClasses();
	rm.write("></div>"); //No Symbol for HCB Theme, as done by ComboBox.
};

/**
 * Renders ARIA information for the outer DIV
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager the RenderManager that can be used for
 *                                                 writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should
 *                                     be rendered
 */
sap.ui.commons.DatePickerRenderer.renderARIAInfo = function(rm, oControl) {
	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
	// Widgets are discrete user interface objects with which the user can interact.
	// Widget roles map to standard features in accessibility APIs.
	// When a user navigates an element assigned any of the non-abstract subclass roles of widget,
	// assistive technologies that typically intercept standard keyboard events SHOULD switch to
	// an application browsing mode, and pass keyboard events through to the web application.
	// The intent is to hint to certain assistive technologies to switch from normal browsing mode
	// into a mode more appropriate for interacting with a web application; some user agents have
	// a browse navigation mode where keys, such as up and down arrows, are used to browse the
	// document, and this native behavior prevents the use of these keys by a web application.
		rm.writeAttribute('role', 'widget');
		rm.writeAttribute('aria-haspopup', 'true');
		// IMPORTANT: According to jQuery forums, DatePicker Accessibility is to be delivered in a
		//            future release. No release mentionned.
		// So there is not much point about doing more about this at the moment.
	}
};