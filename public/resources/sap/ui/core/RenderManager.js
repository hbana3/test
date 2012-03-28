/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides the render manager sap.ui.core.RenderManager
jQuery.sap.declare("sap.ui.core.RenderManager");

jQuery.sap.require("jquery.sap.encoder");
jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("sap.ui.base.Interface");

/**
 * Creates an instance of the RenderManager.
 *
 * @class RenderManager that will take care for rendering Controls.
 *
 * The RenderManager will be available from the sap.ui.core.Core instance (available via <code>sap.ui.getCore()</code>).<br/>It
 * can be used to render Controls and Control-Trees.
 *
 * The convention for renderers belonging to some controls is the following:
 * <ul>
 * <li>for a Control e.g. <code>sap.ui.controls.InputField</code> there shall be </li>
 * <li>a renderer named <code>sap.ui.controls.InputFieldRenderer</code></li>
 * <ul>
 *
 * @see sap.ui.core.Core
 * @see sap.ui.getCore()
 *
 * @extends sap.ui.base.Object
 * @author Jens Pflueger *
 * @version 1.2.0
 * @constructor
 * @public
 */
sap.ui.core.RenderManager = function() {
	this.aBuffer = [];
	this.aRenderedControls = [];
	this.aStyleStack = [{}];
};
sap.ui.core.RenderManager.prototype = jQuery.sap.newObject(sap.ui.base.Object.prototype);

(function() {

	var aCommonMethods = ["renderControl", "write", "writeEscaped", "translate", "writeAcceleratorKey", "writeControlData",
						  "writeElementData", "writeAttribute", "writeAttributeEscaped", "addClass", "writeClasses",
						  "addStyle", "writeStyles", "writeAccessibilityState",
						  "getConfiguration", "getHTML"];
	var aNonRendererMethods = ["render", "flush", "destroy"];

	sap.ui.base.Object.defineClass("sap.ui.core.RenderManager", {
		baseType : "sap.ui.base.Object",
		publicMethods : aCommonMethods.concat(aNonRendererMethods)
	});

	/**
	 * Returns the public interface of the RenderManager which can be used by Renderers.
	 *
	 * @return {sap.ui.base.Interface} the interface
	 * @private
	 */
	sap.ui.core.RenderManager.prototype.getRendererInterface = function() {
		// see sap.ui.base.Object.getInterface for reference
		var oInterface = new sap.ui.base.Interface(this, aCommonMethods);
		this.getRendererInterface = jQuery.sap.getter(oInterface);
		return oInterface;
	};

}());


/**
 * Cleans up the resources associated with this instance.
 * After the instance has been destroyed, it must not be used anymore.
 * Applications should call this function if they don't need the instance any longer.
 *
 * @public
 */
sap.ui.core.RenderManager.prototype.destroy = function() {
	this.aBuffer = [];
	this.aRenderedControls = [];
	this.aStyleStack = [{}];
};

/**
 * Returns the configuration object
 * Shortcut for <code>sap.ui.getCore().getConfiguration()</code>
 * @return {sap.ui.core.Configuration} the configuration object
 * @public
 */
sap.ui.core.RenderManager.prototype.getConfiguration = function() {
	return sap.ui.getCore().getConfiguration();
};

/**
 * Returns the renderer class for a given control instance
 *
 * @param {sap.ui.core.Control} oControl the control that should be rendered
 * @return the renderer class for a given control instance
 * @public
 */
sap.ui.core.RenderManager.prototype.getRenderer = function(oControl) {
	jQuery.sap.assert(oControl && oControl instanceof sap.ui.core.Control, "oControl must be a sap.ui.core.Control");
	return sap.ui.core.RenderManager.getRenderer(oControl);
};

/**
 * Turns the given control into its HTML representation and appends it to the
 * rendering buffer.
 *
 * If the given control is undefined or null, then nothing is rendered.
 *
 * @param {sap.ui.core.Control} oControl the control that should be rendered
 * @public
 */
sap.ui.core.RenderManager.prototype.renderControl = function(oControl) {
	jQuery.sap.assert(oControl && oControl instanceof sap.ui.core.Control, "oControl must be a sap.ui.core.Control");
	// don't render a NOTHING
	if (!oControl) {
		return;
	}

	//Remember the current buffer size to check later whether the control produced output
	var iBufferLength = this.aBuffer.length;

	var oControlStyles = {};
	if (oControl.aCustomStyleClasses && oControl.aCustomStyleClasses.length > 0) {
		oControlStyles.aCustomStyleClasses = oControl.aCustomStyleClasses; //cleared again in the writeClasses function
	}

	this.aStyleStack.push(oControlStyles);

	var oRenderer = this.getRenderer(oControl);

	// notify the behavior object that the controls will be detached from DOM
	if (oControl.bOutput) {
		var oEvent = jQuery.Event("BeforeRendering");
		// store the element on the event (aligned with jQuery syntax)
		oEvent.srcControl = oControl;
		oControl._handleEvent(oEvent);
	}

	// unbind any generically bound browser event handlers
	var aBindings = oControl.aBindParameters;
	if (aBindings && aBindings.length > 0) { // if we have stored bind calls...
		var jDomRef = jQuery(oControl.getDomRef());
		if (jDomRef && jDomRef[0]) { // ...and we have a DomRef
			for (var i = 0; i < aBindings.length; i++) {
				var oParams = aBindings[i];
				jDomRef.unbind(oParams.sEventType, oParams.fnProxy);
			}
		}
	}

	//Render the control using the RenderManager interface
	oRenderer.render(this.getRendererInterface(), oControl);

	this.aStyleStack.pop();

	//Remember the rendered control
	this.aRenderedControls.push(oControl);

	//Check whether the control has produced HTML
	oControl.bOutput = this.aBuffer.length != iBufferLength;
};

/**
 * Renders the given {@link sap.ui.core.Control} and finally returns
 * the content of the rendering buffer.
 * Ensures the buffer is restored to the state before calling this method.
 *
 * @param {sap.ui.core.Control}
 *            oControl the Control whose HTML should be returned.
 * @return {string} the resulting HTML of the provided control
 * @deprecated Since version 0.15.0. Use <code>flush()</code> instead render content outside the rendering phase.
 * @public
 */
sap.ui.core.RenderManager.prototype.getHTML = function(oControl) {
	jQuery.sap.assert(oControl && oControl instanceof sap.ui.core.Control, "oControl must be a sap.ui.core.Control");

	var tmp = this.aBuffer;
	var aResult = this.aBuffer = [];
	this.renderControl(oControl);
	this.aBuffer = tmp;
	return aResult.join("");
};

(function() {

	//Returns the information of the current focus
	var storeCurrentFocus = function(){
		var oCore = sap.ui.getCore();

		// Store current focus
		var sFocusedControlId = oCore.getCurrentFocusedControlId(),
			oFocusInfo = null,
			oFocusedDomRef = null;

		if(sFocusedControlId){
			var oFocusedControl = oCore.getElementById(sFocusedControlId);
			if(oFocusedControl){
				oFocusInfo = oFocusedControl.getFocusInfo();
				oFocusedDomRef = oFocusedControl.getFocusDomRef();
			}
		}

		return {focusedControlId: sFocusedControlId, focusInfo: oFocusInfo, focusDomRef: oFocusedDomRef};
	};

	//Does everthing needed after the rendering (restore focus, calling "onAfterRendering", initialize event binding)
	var finalizeRendering = function(oRM, aRenderedControls, oStoredFocusInfo){
		// Notify the behavior object that the controls will be attached to DOM
		for (var i = 0, size = aRenderedControls.length; i < size; i++) {
			var oControl = aRenderedControls[i];
			if (oControl.bOutput) {
				var oEvent = jQuery.Event("AfterRendering");
				// store the element on the event (aligned with jQuery syntax)
				oEvent.srcControl = oControl;
				oControl._handleEvent(oEvent);
			}
		}

		//finally restore focus
		try{
			if (oStoredFocusInfo && oStoredFocusInfo.focusedControlId) {
				var oFocusedControl = sap.ui.getCore().getElementById(oStoredFocusInfo.focusedControlId);
				if (oFocusedControl && oFocusedControl.getFocusDomRef() != oStoredFocusInfo.focusDomRef ) {
					oFocusedControl.applyFocusInfo(oStoredFocusInfo.focusInfo);
				}
			}
		}catch(e){
			jQuery.sap.log.warning("Problems while restore focus after rendering: " + e, null, oRM);
		}

		// Re-bind any generically bound browser event handlers (must happen after restoring focus to avoid focus event)
		for (var i = 0, size = aRenderedControls.length; i < size; i++) {
			var oControl = aRenderedControls[i],
				aBindings = oControl.aBindParameters;
				
			if (aBindings && aBindings.length > 0) { // if we have stored bind calls...
				var jDomRef = jQuery(oControl.getDomRef());
				if (jDomRef && jDomRef[0]) { // ...and we have a DomRef - TODO: this check should not be required right after rendering...
					for (var j = 0; j < aBindings.length; j++) {
						var oParams = aBindings[j];
						jDomRef.bind(oParams.sEventType, oParams.fnProxy);
					}
				}
			}
		}
	};


	/**
	 * Renders the content of the rendering buffer into the provided DOMNode.
	 *
	 * This function must not be called within control renderers.
	 *
	 * Usage:
	 * <pre>
	 * // Create a new instance of the RenderManager
	 * var rm = sap.ui.getCore().createRenderManager();
	 * // Use the writer API to fill the buffers
	 * rm.write(...);
	 * rm.renderControl(oControl);
	 * rm.write(...);
	 * ...
	 * //Finally flush the buffer into the provided DOM node (The current content is removed)
	 * rm.flush(oDomNode);
	 * // If the instance is not needed anymore, destroy it
	 * rm.destroy();
	 * </pre>
	 *
	 * @param {DOMNode} oTargetDomNode The node in the dom where the buffer should be flushed into.
	 * @param {boolean} bDoNotPreserve flag, whether to not preserve (true) the content or to preserve it (false).
	 * @param {boolean} bAppend flag, whether to append (true) or replace (false) the buffer of the target dom node.
	 * @public
	 */
	sap.ui.core.RenderManager.prototype.flush = function(oTargetDomNode, bDoNotPreserve, bAppend) {
		jQuery.sap.assert((typeof oTargetDomNode === "object") && (oTargetDomNode.ownerDocument == document), "oTargetDomNode must be a DOM element");
		if(this.bRendererMode){
			jQuery.sap.log.info("Flush must not be called from control renderers. Call ignored.", null, this);
			return;
		}

		// preserve HTML content before flushing HTML into target DOM node
		if (!bDoNotPreserve) {
			sap.ui.core.RenderManager.preserveContent(oTargetDomNode);
		}

		var oStoredFocusInfo = storeCurrentFocus();

		var vHTML = this._prepareHTML5(this.aBuffer.join("")); // Note: string might have been converted to a node list!

		if(this._fPutIntoDom){
			//Case when render function was called
			this._fPutIntoDom(oTargetDomNode, vHTML);
		}else{
			for(var i=0; i<this.aRenderedControls.length; i++){
				//TODO It would be enough to loop over the controls for which renderControl was initially called but for this
				//we have to manage an additional array. Rethink about later.
				var oldDomNode = this.aRenderedControls[i].getDomRef();
				if(oldDomNode && !sap.ui.core.RenderManager.isPreservedContent(oldDomNode)) {
					jQuery(oldDomNode).remove();
				}
			}
			if (!bAppend) {
				jQuery(oTargetDomNode).html(vHTML); // Put the HTML into the given DOM Node
			} else {
				jQuery(oTargetDomNode).append(vHTML); // Append the HTML into the given DOM Node
			}
		}

		if(jQuery.browser.safari && parseFloat(jQuery.browser.version) < 534.5){
			// in safari we must wait until the CSS are loaded and applied (fixed in Safari 5.1)
			var jDummy = jQuery("<div id=\"sap-ui-DummyCSSCheck\" class=\"sapUiCssCheck\" style=\"visibility:hidden;position:absolute;height:100px;width:100px;top:-150px;\"></div>");
			jQuery(document.body).append(jDummy);
			this._finalizeIfReady(this.aRenderedControls, oStoredFocusInfo);
		}else{
			finalizeRendering(this, this.aRenderedControls, oStoredFocusInfo);
		}

		this.aRenderedControls = [];
		this.aBuffer = [];
		this.aStyleStack = [{}];
	};

	/**
	 * Safari applies CSS files only after it finished rendering. So logic based on CSS property onAferRendering
	 * goes wrong. Therefore we have to wait until the CSS is applied before we call onAfterRendering.
	 * This is made using a dummy DIV and checking the border defined in Core global.CSS
	 * We repeat the check until it's OK and the call the onAfterRendering
	 * @private
	 */
	sap.ui.core.RenderManager.prototype._finalizeIfReady = function(aRenderedControls, oStoredFocusInfo){
		if((jQuery.sap.domById("sap-ui-DummyCSSCheck").offsetHeight - jQuery.sap.domById("sap-ui-DummyCSSCheck").clientHeight) == 20 ){
			//CSS loaded - fine
			jQuery.sap.byId("sap-ui-DummyCSSCheck").remove();
			finalizeRendering(this, aRenderedControls, oStoredFocusInfo);
		}else{
			//CSS still not loaded - try again
			jQuery.sap.delayedCall(1, this, "_finalizeIfReady", [aRenderedControls, oStoredFocusInfo]);
		}
	};

	/**
	 * Renders the given control to the provided DOMNode.
	 *
	 * If to control is already rendered in the provided DOMNode the DOM of the control is replaced. If the control
	 * is already rendered somewhere else the current DOM of the control is removed and the new DOM is appended
	 * to the provided DOMNode.
	 *
	 * This function must not be called within control renderers.
	 *
	 * @param {sap.ui.core.Control} oControl the Control that should be rendered.
	 * @param {DOMNode} oTargetDomNode The node in the dom where the result of the rendering should be inserted.
	 * @public
	 */
	sap.ui.core.RenderManager.prototype.render = function(oControl, oTargetDomNode) {
		jQuery.sap.assert(oControl && oControl instanceof sap.ui.core.Control, "oControl must be a control");
		jQuery.sap.assert(typeof oTargetDomNode === "object" && oTargetDomNode.ownerDocument == document, "oTargetDomNode must be a DOM element");
		if(this.bRendererMode){
			jQuery.sap.log.info("Render must not be called from control renderers. Call ignored.", null, this);
			return;
		}

		if(jQuery.browser.safari){
			// for Safari CSS bug append CSS class at the end
			if (!sap.ui.core.RenderManager.initialized) {
				jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("sap.ui.core.", "/") + "SafariCheck.css");
			}
			sap.ui.core.RenderManager.initialized = true;
		}

		// Reset the buffer before rendering
		this.aBuffer = [];

		// Retrieve the markup (the rendering phase)
		this.renderControl(oControl);

		// FIXME: MULTIPLE ROOTS
		// The implementation of this method doesn't support multiple roots for a control.
		// Affects all places where 'oldDomNode' is used
		this._fPutIntoDom = function(oTarget, vHTML){

			if(oControl && oTargetDomNode){

				var oldDomNode = oControl.getDomRef();
				if ( sap.ui.core.RenderManager.isPreservedContent(oldDomNode) ) {
					// use placeholder instead
					oldDomNode = jQuery.sap.byId("sap-ui-dummy-" + oControl.getId())[0] || oldDomNode;
				}
				var bNewTarget = oldDomNode && oldDomNode.parentNode != oTargetDomNode;

				var fAppend = function(){
					var jTarget = jQuery(oTargetDomNode);
					if(oTargetDomNode.innerHTML == ""){
						jTarget.html(vHTML);
					}else{
						jTarget.append(vHTML);
					}
				};

				if(bNewTarget){ //Control was rendered already and is now moved to different location

					if(!sap.ui.core.RenderManager.isPreservedContent(oldDomNode)) {
						jQuery(oldDomNode).remove();
					}

					if(vHTML) {
						fAppend();
					}

				}else{ //Control either rendered initially or rerendered at the same location

					if(vHTML){
						if(oldDomNode){
							jQuery(oldDomNode).replaceWith(vHTML);
						}else{
							fAppend();
						}
					}else{
						jQuery(oldDomNode).remove();
					}

				}

			}

		};

		this.flush(oTargetDomNode, true);

		this._fPutIntoDom = null;
	};

}());


//#################################################################################################
// Static Methods
//#################################################################################################

/**
 * Returns the renderer class for a given control instance
 *
 * @param {sap.ui.core.Control}
 *            oControl the control that should be rendered
 * @type function
 * @return the renderer class for a given control instance
 * @static
 * @public
 */
sap.ui.core.RenderManager.getRenderer = function(oControl) {
	jQuery.sap.assert(oControl && oControl instanceof sap.ui.core.Control, "oControl must be a control");
	var sRendererName = null;

	if(oControl.getMetadata().getRendererName) {
		sRendererName = oControl.getMetadata().getRendererName();
	}

	// fall back to generic renderer name
	if(!sRendererName){
		var aNameSegments = oControl.getMetadata().getName().split(".");
		aNameSegments[aNameSegments.length - 1] += "Renderer";
		sRendererName = aNameSegments.join(".");
	}

	// check if renderer class exists already
	var fnRendererClass = jQuery.sap.getObject(sRendererName);
	if(fnRendererClass) {
		return fnRendererClass;
	}

	// if not, try to load a module with the same name
	jQuery.sap.require(sRendererName);
	return jQuery.sap.getObject(sRendererName);
};

/**
 * Makes the HTML5 tags known to older IE browsers; to be called once before rendering happens.
 *
 * Applies two workarounds
 * <ol>
 * <li>1. "SHIV": create each HTML5 tag once in the window document to make IE8 aware of it
 * <li>2. "INNERSHIV": IE8 fails when using innerHTML in conjunction with HTML5 tags for a DOM element __not__ part of the document.
 *        _prepareHTML5 uses a dummy DOM element to convert the innerHTML to a set of DOM nodes first.
 * </ol>
 * @static
 * @private
 */
//Called once by the Core during initialization
sap.ui.core.RenderManager.initHTML5Support = function() {
	if(jQuery.browser.msie && (jQuery.browser.version === "8.0" || jQuery.browser.version === "7.0")){ // IE8 is recognized as "7.0"!!

		var aTags = [ "article", "aside", "audio", "canvas", "command", "datalist", "details",
				"figcaption", "figure", "footer", "header", "hgroup", "keygen", "mark", "meter", "nav",
				"output", "progress", "rp", "rt", "ruby", "section", "source", "summary", "time", "video", "wbr" ];

		// 1. SHIV, create each HTML5 element once to make IE8 recognize it
		// see http://paulirish.com/2011/the-history-of-the-html5-shiv/ for an explanation
		for (var i = 0; i < aTags.length; i++) {
			document.createElement(aTags[i]);
		}

		// 2. INNERSHIV, converts string with HTML5 tags to DOM nodes before using them with jQuery
		// see http://jdbartlett.com/innershiv/ for an explanation of the matter
		var rhtmltags = new RegExp("<(" + aTags.join("|") + ")(\\s|>)", "i");
		var d = null;
		sap.ui.core.RenderManager.prototype._prepareHTML5 = function(sHTML) {
			if ( sHTML && sHTML.match(rhtmltags) ) {
				if(!d){
					d = document.createElement('div');
					d.style.display = 'none';
				}

				var e = d.cloneNode(true);
				document.body.appendChild(e);
				e.innerHTML = sHTML.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
				document.body.removeChild(e);

				return e.childNodes;
			}
			return sHTML;
		};

		jQuery.sap.log.info("IE8 HTML5 support activated");

	}else{

		jQuery.sap.log.info("no IE8 HTML5 support required");

		sap.ui.core.RenderManager.prototype._prepareHTML5 = function(sHTML) {
			return sHTML;
		};
	}
};


//#################################################################################################
// Methods for preserving HTML content
//#################################################################################################

(function() {

	var ID_PRESERVE_AREA = "sap-ui-preserve";
	var ATTR_PRESERVE_MARKER = "data-sap-ui-preserve";

	function getPreserveArea() {
		var $preserve = jQuery("#"+ID_PRESERVE_AREA);
		if ($preserve.length === 0){
			$preserve = jQuery("<DIV/>",{role:"application",id:ID_PRESERVE_AREA}).
				addClass("sapUiHidden").
				appendTo(document.body);
		}
		return $preserve;
	}

	/**
	 * Collects descendants of the given root node that need to be preserved before the root node
	 * is wiped out. The "to-be-preserved" nodes are moved to a special, hidden 'preserve' area.
	 *
	 * A node is declared "to-be-preserved" when it has the <code>data-sap-ui-preserve</code>
	 * attribute set. When the optional parameter <code>bPreserveNodesWithId</code> is set to true,
	 * then nodes with an id are preserved as well and their <code>data-sap-ui-preserve</code> attribute
	 * is set automatically. This option is used by UIAreas when they render for the first time and
	 * simplifies the handling of predefined HTML content in a web page.
	 *
	 * The "to-be-preserved" nodes are searched with a depth first search and moved to the 'preserve'
	 * area in the order that they are found. So for direct siblings the order should be stable.
	 *
	 * @param {DOMNode} oRootNode to search for "to-be-preserved" nodes
	 * @param {boolean} [bPreserveRoot=false] whether to preserve the root itself
	 * @param {boolean} [bPreserveNodesWithId=false] whether to preserve nodes with an id as well
	 * @public
	 */
	sap.ui.core.RenderManager.preserveContent = function(oRootNode, bPreserveRoot, bPreserveNodesWithId) {
		jQuery.sap.assert(typeof oRootNode === "object" && oRootNode.ownerDocument == document, "oRootNode must be a DOM element");
		
		var $preserve = getPreserveArea();

		function check($candidates) {
			
			$candidates.each(function(i,candidate) {

				// don't process the preserve area
				if ( candidate.id === ID_PRESERVE_AREA ) {
					return;
				}
				
				var $candidate = jQuery(candidate);

				if ( $candidate.attr(ATTR_PRESERVE_MARKER) )  { // node is marked with the preserve marker
					// when the current node is the root node then we're doing a single control rerendering
					if ( candidate === oRootNode ) {
						var $placeholder = jQuery("<DIV/>", { id: "sap-ui-dummy-" + candidate.id}).addClass("sapUiHidden");
						$placeholder.insertBefore($candidate);
					}
					$preserve.append($candidate);
				} else if ( bPreserveNodesWithId && candidate.id ) {
					sap.ui.core.RenderManager.markPreservableContent($candidate, candidate.id);
					$preserve.append($candidate);
					return;
				}
				
				// don't dive into nested UIAreas. They are preserved together with any preserved parent (e.g. HTML control)
				if ( !$candidate.attr("data-sap-ui-area") ) {
					check($candidate.children());
				}
			});
		}

		var t0 = new Date().getTime();
		check(bPreserveRoot? jQuery(oRootNode) : jQuery(oRootNode).children());
		var t1 = new Date().getTime();
		jQuery.sap.log.debug("preserveContent took " + (t1-t0) + " ms");
	};

	/**
	 * Searches "to-be-preserved" nodes for the given control id.
	 *
	 * @param {string} sId control id to search content for.
	 * @return {jQuery} a jQuery collection representing the found content
	 * @public
	 */
	sap.ui.core.RenderManager.findPreservedContent = function(sId) {
		jQuery.sap.assert(typeof sId === "string", "sId must be a string");
		var $preserve = getPreserveArea(),
			$content = $preserve.children("[" + ATTR_PRESERVE_MARKER + "='" + sId.replace(/(:|\.)/g,'\\$1') + "']");
		return $content;
	};

	/**
	 * Marks the given content as "to-be-preserved" for a control with the given id.
	 * When later on the content has been preserved, it can be found by giving the same id.
	 *
	 * @param {jQuery} $content a jQuery collection of DOM objects to be marked
	 * @param {string} sId id of the control to associate the content with
	 */
	sap.ui.core.RenderManager.markPreservableContent = function($content, sId) {
		$content.attr(ATTR_PRESERVE_MARKER, sId);
	};

	/**
	 * Checks whether the given DOM node is part of the 'preserve' area.
	 *
	 * @param {DOMNode} oDomNode
	 * @return {boolean} whether node is part of 'preserve' area
	 * @private
	 */
	sap.ui.core.RenderManager.isPreservedContent = function(oDomNode) {
		return ( oDomNode && oDomNode.getAttribute(ATTR_PRESERVE_MARKER) && oDomNode.parentNode && oDomNode.parentNode.id == ID_PRESERVE_AREA );
	};

	/**
	 * Returns the hidden area reference belonging to this window instance.
	 *
	 * @return {DOMNode}the hidden area reference belonging to this core instance.
	 * @public
	 */
	sap.ui.core.RenderManager.getPreserveAreaRef = function() {
		return getPreserveArea()[0];
	};

}());


//#################################################################################################
// Methods for 'Buffered writer' functionality... (all public)
// i.e. used methods in render-method of Renderers
//#################################################################################################

/**
 * Write the given texts to the buffer
 * @param {string ...} sText
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.write = function(/** string */ sText /* ... */) {
	jQuery.sap.assert(typeof sText === "string", "sText must be a string");
	this.aBuffer.push.apply(this.aBuffer, arguments);
	return this;
};

/**
 * Escape text for HTML and write it to the buffer
 * @param {string} sText
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeEscaped = function(/** string */ sText) {
	jQuery.sap.assert(typeof sText === "string", "sText must be a string");
	this.aBuffer.push(jQuery.sap.escapeHTML(sText));
	return this;
};


/**
 * @deprecated Not implemented - DO NOT USE
 * @public
 */
sap.ui.core.RenderManager.prototype.translate = function(/** string */ sKey) {
	// TODO
};

/**
 * @deprecated Not implemented - DO NOT USE
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeAcceleratorKey = function() {
	/*
	if (bAlt && !bCtrl && !bArrowKey) {
		// Keyboard helper provides means for visualizing access keys.
		// keydown modifies some CSS rule for showing underlines
		// <span><u class="sapUiAccessKey">H</u>elp me</span>
		UCF_KeyboardHelper.showAccessKeys();
	}
	*/
	return this;
};

/**
 * Adds a style property to the style collection if the value is not empty or null
 * The style collection is flushed if it is written to the buffer using {@link #writeStyle}
 *
 * @param {string} sName name of the CSS property to write
 * @param {string} sValue value to write
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.addStyle = function(sName, sValue) {
	jQuery.sap.assert(typeof sName === "string", "sName must be a string");
	if (sValue) {
		jQuery.sap.assert(typeof sValue === "string", "sValue must be a string");
		var oStyle = this.aStyleStack[this.aStyleStack.length-1];
		if (!oStyle.aStyle) {
			oStyle.aStyle = [];
		}
		oStyle.aStyle.push(sName + ":" + sValue);
	}
	return this;
};

/**
 * Writes and flushes the style collection
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeStyles = function() {
	var oStyle = this.aStyleStack[this.aStyleStack.length-1];
	if (oStyle.aStyle) {
		this.write(" style=\"" +oStyle.aStyle.join(";") +"\" ");
	}
	oStyle.aStyle = null;
	return this;
};

/**
 * Adds a class to the class collection if the name is not empty or null.
 * The class collection is flushed if it is written to the buffer using {@link #writeClasses}
 *
 * @param {string} sName name of the class to be added; null values are ignored
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.addClass = function(sName) {
	if (sName) {
		jQuery.sap.assert(typeof sName === "string", "sName must be a string");
		var oStyle = this.aStyleStack[this.aStyleStack.length-1];
		if (!oStyle.aClasses) {
			oStyle.aClasses = [];
		}
		oStyle.aClasses.push(sName);
	}
	return this;
};

/**
 * Writes and flushes the class collection (all CSS classes added by "addClass()" since the last flush). 
 * Also writes the custom style classes added by the application with "addStyleClass(...)". Custom classes are 
 * added by default from the currently rendered control. If an oElement is given, this Element's custom style
 * classes are added instead. If oElement === false, no custom style classes are added.
 * 
 * @param {sap.ui.core.Element | boolean} [oElement] an Element from which to add custom style classes (instead of adding from the control itself)
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeClasses = function(oElement) {
	jQuery.sap.assert(!oElement || typeof oElement === "boolean" || oElement instanceof sap.ui.core.Element, "oElement must be empty, a boolean, or a sap.ui.core.Element");
	var oStyle = this.aStyleStack[this.aStyleStack.length-1];
	
	// Custom classes are added by default from the currently rendered control. If an oElement is given, this Element's custom style
	// classes are added instead. If oElement === false, no custom style classes are added.
	var aCustomClasses = oElement ? oElement.aCustomStyleClasses : ((oElement === false) ? [] : oStyle.aCustomStyleClasses);
	
	if (oStyle.aClasses || aCustomClasses) {
		this.write(" class=\"");
		if (oStyle.aClasses) {
			this.write(oStyle.aClasses.join(" "));
		}
		if (aCustomClasses) {
			this.write(" " + aCustomClasses.join(" "));
		}
		this.write("\" ");
	}
	if (!oElement) {
		oStyle.aCustomStyleClasses = null;
	}
	oStyle.aClasses = null;
	return this;
};

/**
 * Writes the controls data into the HTML.
 * Control Data consists at least of the id of a control
 * @param {sap.ui.core.Control} oControl the control whose identifying information should be written to the buffer
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeControlData = function(oControl) {
	jQuery.sap.assert(oControl && oControl instanceof sap.ui.core.Control, "oControl must be a control");
	this.writeElementData(oControl);
	return this;
};

/**
 * Writes the elements data into the HTML.
 * Element Data consists at least of the id of a element
 * @param {sap.ui.core.Element} oElement the element whose identifying information should be written to the buffer
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeElementData = function(oElement) {
	jQuery.sap.assert(oElement && oElement instanceof sap.ui.core.Element, "oElement must be an Element");
	var sId = oElement.getId();
	if(sId) {
		this.writeAttribute("id", sId).writeAttribute("data-sap-ui", sId);
	}
	return this;
};

/**
 * Writes the attribute and its value into the HTML
 * @param {string} sName the name of the attribute
 * @param {string | number | boolean} sValue the value of the attribute
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeAttribute = function(sName, value) {
	jQuery.sap.assert(typeof sName === "string", "sName must be a string");
	jQuery.sap.assert(typeof value === "string" || typeof value === "number" || typeof value === "boolean", "value must be a string, number or boolean");
	this.write(" ", sName, "=\"", value, "\"");
	return this;
};

/**
 * Writes the attribute and its value into the HTML
 * @param sName the name of the attribute
 * @param sValue the value of the attribute
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 */
sap.ui.core.RenderManager.prototype.writeAttributeEscaped = function(sName, sValue) {
	// writeAttribute asserts
	this.writeAttribute(sName, jQuery.sap.escapeHTML(sValue));
	return this;
};

/**
 * Writes the accessibility state (see ARIA spec) of the provided control into the HTML.
 *
 * @param {sap.ui.core.Control}
 *            oControl the control whose accessibility state (see ARIA spec)
 *            should be rendered
 * @param {Object}
 *            [mProps] a map of properties that should be added additionally.
 *            'aria-' will be prepended to the provided property names (passed as
 *            keys).
 * @return {sap.ui.core.RenderManager} this render manager instance to allow chaining
 * @public
 * @deprecated Do not use yet, prototype implementation for testing purposes.
 *             Will be moved to utility / helper class.
 */
sap.ui.core.RenderManager.prototype.writeAccessibilityState = function(oControl, mProps) {
	if(arguments.length == 1 && !(oControl instanceof sap.ui.core.Control)) {
		mProps = oControl;
		oControl = null;
	}
	var aARIAStates = [""];
	if(oControl != null) {
		var mMetaProps = oControl.getMetadata().getAllProperties();
		for(var p in mMetaProps){
			switch(p){
			case "editable":
				if(oControl.getProperty(p) === false) {
					aARIAStates.push("aria-readonly=\"true\"");
				}
				break;
			case "enabled":
				if(oControl.getProperty(p) === false) {
					aARIAStates.push("aria-disabled=\"true\"");
				}
				break;
			case "visible":
				if(oControl.getProperty(p) === false) {
					aARIAStates.push("aria-hidden=\"true\"");
				}
				break;
			case "required":
				if(oControl.getProperty(p) === true) {
					aARIAStates.push("aria-required=\"true\"");
				}
				break;
			case "selected": // E.g. Tab
				if(oControl.getProperty(p) === true) {
					aARIAStates.push("aria-selected=\"true\"");
				}
				break;
			case "checked": // E.g. CheckBox
				if(oControl.getProperty(p) === true) {
					aARIAStates.push("aria-checked=\"true\"");
				}
				break;
//			case "ARIA_and_SAPUI5_do_not_perfectly_fit_to_eachother":
//				eval("Think about what now? Food for thought: RadioButton has selected but must provide checked :(
//					  We might think about introducing some special accessbility callback in the controls (like LS does)
//					  to get those things handled... but what about generic functionality like the one above?
//					  Some kind of mapping could also be interesting, couldn't it");
//				break;
			}
		}
	}
	var aTmp = [];
	for(var p in mProps) {
		aTmp.push("aria-");
		aTmp.push(p);
		aTmp.push("=\"");
		aTmp.push(mProps[p]);
		aTmp.push("\" ");
	}
	aARIAStates.push(aTmp.join(""));

	this.write(aARIAStates.join(" "));
	return this;
};