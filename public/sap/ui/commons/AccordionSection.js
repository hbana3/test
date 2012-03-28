/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.AccordionSection.
jQuery.sap.declare("sap.ui.commons.AccordionSection");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new AccordionSection.
 * 
 * It accepts one JSON-like object (object literal) as parameter <code>mSettings</code> that can define values for any property, 
 * aggregation, association or event.<br/> 
 * If for a control a specific name is ambiguous (a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order.<br/> 
 * To resolve ambiguities, add an "aggregation:", "association:" or "event:" prefix to the key in the JSON object.<br/>
 * Allowed values are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>maxHeight : sap.ui.core.CSSSize</li>
 * <li>enabled : boolean</li>
 * <li>collapsed : boolean</li>
 * <li>title : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>content : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>scroll : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.core.Element#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Represents a UI panel that is a simple container for controls. The panel does not layout the contained controls.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.AccordionSection = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.AccordionSection.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.AccordionSection. 
 * Resulting metadata can be obtained via sap.ui.commons.AccordionSection.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.AccordionSection", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getMaxHeight", "setMaxHeight", "getEnabled", "setEnabled", "getCollapsed", "setCollapsed", "getTitle", "setTitle", 
    // aggregations
    "getContent", "insertContent", "addContent", "removeContent", "removeAllContent", "indexOfContent", "destroyContent", 
    // associations
    
    // events
    "attachScroll", "detachScroll"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "maxHeight" : {name : "maxHeight", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "collapsed" : {name : "collapsed", type : "boolean", group : "Behavior", defaultValue : false},
    "title" : {name : "title", type : "string", group : "Misc", defaultValue : null}
  },
  defaultAggregation : "content",
  aggregations : {
    "content" : {name : "content", type : "sap.ui.core.Control", multiple : true, singularName : "content"}
  },
  associations : {},
  events : {
    "scroll" : "scroll"
  }

});	

sap.ui.commons.AccordionSection.M_EVENTS = {'scroll':'scroll'};


/**
 * Getter for property <code>maxHeight</code>.
 * When the section content exceeds the maxHeight, a vertical scrollbar appears.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxHeight</code>
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getMaxHeight = function() {
	return this.getProperty("maxHeight");
};

/**
 * Setter for property <code>maxHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxHeight  new value for property <code>maxHeight</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.setMaxHeight = function(sMaxHeight) {
	this.setProperty("maxHeight", sMaxHeight);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * Requirement is that the used theme supports the control.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>collapsed</code>.
 * A collapsed panel consumes minimal space. When initially collapsed, its contents are not rendered. The recommendation is to set the panel width if the control shall be collapsed.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>collapsed</code>
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getCollapsed = function() {
	return this.getProperty("collapsed");
};

/**
 * Setter for property <code>collapsed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCollapsed  new value for property <code>collapsed</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.setCollapsed = function(bCollapsed) {
	this.setProperty("collapsed", bCollapsed);
	return this;
};


/**
 * Getter for property <code>title</code>.
 * Section header text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.commons.AccordionSection.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};

	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregates the controls that are contained in the panel. Control layouting is browser-dependent. For a stable content layout, use a layout control as direct single child.
 * When the panel dimensions are set, the child control may have width and height of 100%;
 * when the panel dimensions are not set, the child defines the panel size.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 */
sap.ui.commons.AccordionSection.prototype.getContent = function() {
	return this.getAggregation("content", []);
};


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	return this;
};

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.AccordionSection.prototype.addContent = function(oContent) {
	this.addAggregation("content", oContent);
	return this;
};

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 */
sap.ui.commons.AccordionSection.prototype.removeContent = function(vContent) {
	return this.removeAggregation("content", vContent);
};

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.AccordionSection.prototype.removeAllContent = function() {
	return this.removeAllAggregation("content");
};

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.AccordionSection.prototype.indexOfContent = function(oContent) {
	return this.indexOfAggregation("content", oContent);
};
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.destroyContent = function() {
	this.destroyAggregation("content");
	return this;
};


/**
 * Event is fired when the user scrolls the panel. 
 *
 * @name sap.ui.commons.AccordionSection#scroll
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.left Horizontal scroll position.
 * @param {int} oControlEvent.getParameters.top Vertical scroll position.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'scroll' event of this <code>sap.ui.commons.AccordionSection</code>.<br/>
 * Event is fired when the user scrolls the panel. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.attachScroll = function(oData, fnFunction, oListener) {
	this.attachEvent("scroll", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'scroll' event of this <code>sap.ui.commons.AccordionSection</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.detachScroll = function(fnFunction, oListener) {
	this.detachEvent("scroll", fnFunction, oListener);
	return this;	
};

/**
 * Fire event scroll to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'left' of type <code>int</code> Horizontal scroll position.</li>
 * <li>'top' of type <code>int</code> Vertical scroll position.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.AccordionSection.prototype.fireScroll = function(mArguments) {
	this.fireEvent("scroll", mArguments);
	return this;
};


// Start of sap/ui/commons/AccordionSection.js
/**
 * AccordionSection Behavior Implementation
 *
 * Open:
 * - HeaderDesign not implemented yet
 */

/**
 * Do some initialization
 * @private
 */
sap.ui.commons.AccordionSection.prototype.init = function(){
   this.bIgnoreScrollEvent = true; // do not fire a scroll event initially
   this.oScrollDomRef = null;      // points to the content area
};

/**
 * Set focus on the first control
 * @private
 */
sap.ui.commons.AccordionSection.prototype.focusFirstControl = function () {
	var aControls = this.getContent();
	if (aControls[0]) {
		aControls[0].focus();
	}
};

/**
 * Set focus the arrow
 * @private
 */
sap.ui.commons.AccordionSection.prototype.focus = function () {

	var arrow = jQuery.sap.domById(this.getId() + "-minL");
	arrow.focus();
};

/**
 * Called after the theme has been switched, required for adjustments
 * @private
 */
sap.ui.commons.AccordionSection.prototype.onThemeChanged = function () {
	var hdrLeft = jQuery.sap.domById(this.getId() + "-hdrL");

	if (hdrLeft) {
		hdrLeft.style.width = "auto";
		var obj = this;
		setTimeout(function() {obj.onAfterRendering();}, 0); // TODO: there is a problem in IE8, depending on what the surronding container is...
	}

}

/**
 * Adapts size settings of the rendered HTML
 * @private
 */;
sap.ui.commons.AccordionSection.prototype.onAfterRendering = function () {

	this.oScrollDomRef = jQuery.sap.domById(this.getId() + "-cont");
	var cont	  = this.oScrollDomRef;
	var root	  = this.getDomRef();
	var accordion = jQuery.sap.domById(this.getParent().getId());
	// if only height is set, the content area's height needs to be adapted  (should be a rare use-case)
	if (!sap.ui.commons.AccordionSection._isSizeSet(this.getParent().getWidth()) && sap.ui.commons.AccordionSection._isSizeSet(this.getMaxHeight())) {
		if (cont) {
			var contTop = cont.offsetTop;
			var targetHeight = (root.offsetHeight - contTop);
			cont.style.height = targetHeight + "px";

			var actualContHeight = cont.offsetHeight;
			if (actualContHeight > targetHeight) {
				cont.style.height = targetHeight - (actualContHeight - targetHeight) + "px";
			}
		}

	}

	var leftBorder	= jQuery(accordion).css("border-left-width");
	var rightBorder = jQuery(accordion).css("border-right-width");


	var borderTotal = parseFloat(leftBorder.substring(0, leftBorder.indexOf("px") )) +	parseFloat(rightBorder.substring(0, rightBorder.indexOf("px") ))

;
	var oDomLabel = jQuery.sap.domById(this.getId() + "-lbl");
	root.style.width	  = accordion.offsetWidth - borderTotal + "px";
	oDomLabel.style.width = accordion.offsetWidth - 30 + "px";

	//Bind the scroll event (does not bubble)
	var fnScrollProxy = this.__scrollproxy__;
	if (!fnScrollProxy) {
		fnScrollProxy = this.__scrollproxy__ = jQuery.proxy(this.onscroll, this);
	}
	jQuery.sap.byId(this.getId()+"-cont").bind("scroll", fnScrollProxy);

};

sap.ui.commons.AccordionSection.prototype.onBeforeRendering = function() {
	var fnScrollProxy = this.__scrollproxy__;
	if (fnScrollProxy) {
		jQuery.sap.byId(this.getId()+"-cont").unbind("scroll", fnScrollProxy);
	}
};

/**
 * Property setter for the "enabled" state
 *
 * @param bEnabled Whether the AccordionSection should be enabled, or not
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled, true); // no re-rendering!
	var root = this.getDomRef();
	if (root) {
		// if already rendered, adapt rendered control without complete re-rendering
		if (bEnabled) {
			jQuery(root).removeClass("sapUiAcdSectionDis");
		} else {
			jQuery(root).addClass("sapUiAcdSectionDis");
		}
	}
	return this;
};


/**
 * Property setter for the "collapsed" state
 *
 * @param bCollapsed Whether the AccordionSection should be collapsed, or not
 * @private
 */
sap.ui.commons.AccordionSection.prototype._setCollapsed = function(bCollapsed) {
	this.setProperty("collapsed", bCollapsed, true); // no re-rendering!
	this._setCollapsedState(bCollapsed); // adapt rendered control without complete re-rendering
};

/**
 * Property setter for the "collapsed" state
 *
 * @param bCollapsed Whether the AccordionSection should be collapsed, or not
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.setCollapsed = function(bCollapsed) {
	if(this.getParent()){

		if(!bCollapsed){
			this.getParent().openSection(this.getId());
		}
		else{
			this.getParent().closeSection(this.getId());
		}
	}
	else{
		this._setCollapsed(bCollapsed);
	}
	return this;
};


/**
 * Internal method for applying a "collapsed" state to the rendered HTML
 *
 * @param bCollapsed Whether the AccordionSection should be collapsed, or not
 * @private
 */
sap.ui.commons.AccordionSection.prototype._setCollapsedState = function(bCollapsed) {



	if (this.getDomRef()) {
		// after AccordionSection has been rendered
		if (bCollapsed) {
			var accessibility = sap.ui.getCore().getConfiguration().getAccessibility();

			// collapsing
			if (!this.getParent().getWidth()) {
				this.getDomRef().style.width = this.getDomRef().offsetWidth + "px"; // maintain the current width
			}
			jQuery(this.getDomRef()).addClass("sapUiAcdSectionColl");
			var tb = jQuery.sap.domById(this.getId() + "-tb");
			if (tb) {
				tb.style.display = "none";
			}

			var cont = jQuery.sap.domById(this.getId() + "-cont");
			cont.style.display = "none";
			if (accessibility) {
				cont.setAttribute("aria-expanded", "false");
				cont.setAttribute("aria-hidden", "true");
			}


		} else {
			// expanding
			if (!jQuery.sap.domById(this.getId() + "-cont")) {
				// content has not been rendered yet, so render it now
				this.rerender(); // TODO: potentially restore focus to collapse icon/button
			} else {
				// content exists already, just make it visible again
				jQuery(this.getDomRef()).removeClass("sapUiAcdSectionColl");
				var tb = jQuery.sap.domById(this.getId() + "-tb");
				if (tb) {
					tb.style.display = "block";
				}

				var cont = jQuery.sap.domById(this.getId() + "-cont");
				cont.style.display = "block";
				if (accessibility) {
					cont.setAttribute("aria-expanded", "true");
				}

				if (this.getMaxHeight()) {
					this.getDomRef().style.height = this.getMaxHeight(); // restore the set height
				}
			}
		}
	}
}


/**
 * Static method that finds out whether the given CSS size is actually set.
 * Returns "true" for absolute and relative sizes, returns "false" if "null", "inherit" or "auto" is given.
 *
 * @static
 * @param sCssSize A CSS size string which must be a valid CSS size, or null
 * @private
 */;
sap.ui.commons.AccordionSection._isSizeSet = function(sCssSize) {
	return (sCssSize && !(sCssSize =="auto") && !(sCssSize == "inherit"));
}


/*   Event Handling   */

/**
 * Handles any "triggering" actions like click and space
 *
 * @param {jQuery.Event} oEvent
 * @private
 */;
sap.ui.commons.AccordionSection.prototype._handleTrigger = function(oEvent) {
	// minimize button toggled
	if((oEvent.target.id === this.getId() + "-minL") ||
			(oEvent.target.id === this.getId() + "-minR")) {
		var bCollapsed = !this.getProperty("collapsed");
		this._setCollapsed(bCollapsed);
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Handles the scroll event of the browser
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.AccordionSection.prototype.onscroll = function (oEvent) {
	/**
	if (this.bIgnoreScrollEvent) { // bIgnoreScrollEvent is set to "true" if the scrollbar is moved via API calls
		this.bIgnoreScrollEvent = false;
		return;
	}
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		this.fireScroll(oDomRef.scrollTop, oDomRef.scrollLeft);
	}
	 */
};