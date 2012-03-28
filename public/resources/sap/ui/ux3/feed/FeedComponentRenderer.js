/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.feed.FeedComponent
jQuery.sap.declare("sap.ui.ux3.feed.FeedComponentRenderer");

/**
 * @class FeedComponent renderer.
 * @static
 */
sap.ui.ux3.feed.FeedComponentRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.feed.FeedComponentRenderer.render = function(oRenderManager, oControl){
	// convenience variables
	var rm  = oRenderManager;
	var rtl = sap.ui.getCore().getConfiguration().getRTL();
	var end = (rtl) ? "left" : "right";

	// Opening the DIV container:
	rm.write('<div class="sapUiFeedC"');
	rm.writeControlData(oControl);
	var sWidth = oControl.getWidth();
	if (!!sWidth) {
		var sStyle = 'width: '+ sWidth+';';
		rm.writeAttribute('style', sStyle);
		rm.writeStyles();
	}
	rm.write('>');

		// Including the top Feeder component:
	rm.renderControl(oControl.oFeeder);

		// Including the middle IntervalController and ActionMenu components:
	rm.write('<table class="sapUiFeedCTb1" style="width:100%;"><td align="' + end + '">');
	rm.renderControl(oControl.oIntervals);
	rm.renderControl(oControl.oAction);
	rm.write('</td></table>');

		// Including the middle Filter and Search components:
	rm.write('<table class="sapUiFeedCTb2" style="width:100%;"><td>');
	rm.renderControl(oControl.oFilter);
	rm.write('</td><td align="' + end + '">');
	rm.renderControl(oControl.oSearch);
	rm.write('</td></table>');

		// Including the bottom RowRepeater (hosting the Feed Entries) component:
	rm.renderControl(oControl.oFeed);

	// Closing the DIV container:
	rm.write('</div>');
};