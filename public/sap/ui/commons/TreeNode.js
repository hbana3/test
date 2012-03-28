/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TreeNode.
jQuery.sap.declare("sap.ui.commons.TreeNode");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new TreeNode.
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
 * <li>text : string</li>
 * <li>expanded : boolean</li>
 * <li>hasExpander : boolean</li>
 * <li>icon : string</li>
 * <li>isSelected : boolean</li>
 * <li>selectable : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>nodes : sap.ui.commons.TreeNode</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>toggleOpenState : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>selected : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Tree node element
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.TreeNode = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.TreeNode.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.TreeNode. 
 * Resulting metadata can be obtained via sap.ui.commons.TreeNode.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.TreeNode", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getText", "setText", "getExpanded", "setExpanded", "getHasExpander", "setHasExpander", "getIcon", "setIcon", "getIsSelected", "setIsSelected", "getSelectable", "setSelectable", 
    // aggregations
    "getNodes", "insertNode", "addNode", "removeNode", "removeAllNodes", "indexOfNode", "destroyNodes", 
    // associations
    
    // events
    "attachToggleOpenState", "detachToggleOpenState", "attachSelected", "detachSelected", 
    // methods
    "select", "expand", "collapse"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : null},
    "expanded" : {name : "expanded", type : "boolean", group : "Misc", defaultValue : true},
    "hasExpander" : {name : "hasExpander", type : "boolean", group : "Misc", defaultValue : false},
    "icon" : {name : "icon", type : "string", group : "Misc", defaultValue : null},
    "isSelected" : {name : "isSelected", type : "boolean", group : "Misc", defaultValue : false},
    "selectable" : {name : "selectable", type : "boolean", group : "Misc", defaultValue : true}
  },
  defaultAggregation : "nodes",
  aggregations : {
    "nodes" : {name : "nodes", type : "sap.ui.commons.TreeNode", multiple : true, singularName : "node"}
  },
  associations : {},
  events : {
    "toggleOpenState" : "toggleOpenState", 
    "selected" : "selected"
  }

});	

sap.ui.commons.TreeNode.M_EVENTS = {'toggleOpenState':'toggleOpenState','selected':'selected'};


/**
 * Getter for property <code>text</code>.
 * Node text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>expanded</code>.
 * Node is expanded
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getExpanded = function() {
	return this.getProperty("expanded");
};

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setExpanded = function(bExpanded) {
	this.setProperty("expanded", bExpanded);
	return this;
};


/**
 * Getter for property <code>hasExpander</code>.
 * Should the node has an expander.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>hasExpander</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getHasExpander = function() {
	return this.getProperty("hasExpander");
};

/**
 * Setter for property <code>hasExpander</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHasExpander  new value for property <code>hasExpander</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setHasExpander = function(bHasExpander) {
	this.setProperty("hasExpander", bHasExpander);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * Icon to display in front of the node
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


/**
 * Getter for property <code>isSelected</code>.
 * Node is selected
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isSelected</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getIsSelected = function() {
	return this.getProperty("isSelected");
};

/**
 * Setter for property <code>isSelected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsSelected  new value for property <code>isSelected</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setIsSelected = function(bIsSelected) {
	this.setProperty("isSelected", bIsSelected);
	return this;
};


/**
 * Getter for property <code>selectable</code>.
 * The node is selectable. If true, clicking on the node text triggers "selected" event
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>selectable</code>
 * @public
 * 
 */
sap.ui.commons.TreeNode.prototype.getSelectable = function() {
	return this.getProperty("selectable");
};

/**
 * Setter for property <code>selectable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSelectable  new value for property <code>selectable</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setSelectable = function(bSelectable) {
	this.setProperty("selectable", bSelectable);
	return this;
};

	
/**
 * Getter for aggregation <code>nodes</code>.<br/>
 * Subnodes for the current node
 * 
 * @return {sap.ui.commons.TreeNode[]}
 * @public
 */
sap.ui.commons.TreeNode.prototype.getNodes = function() {
	return this.getAggregation("nodes", []);
};


/**
 * Inserts a node into the aggregation named <code>nodes</code>.
 *
 * @param {sap.ui.commons.TreeNode}
 *          oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the node should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the node is inserted at 
 *             the last position        
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.insertNode = function(oNode, iIndex) {
	this.insertAggregation("nodes", oNode, iIndex);
	return this;
};

/**
 * Adds some node <code>oNode</code> 
 * to the aggregation named <code>nodes</code>.
 *
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.commons.TreeNode.prototype.addNode = function(oNode) {
	this.addAggregation("nodes", oNode);
	return this;
};

/**
 * Removes an node from the aggregation named <code>nodes</code>.
 *
 * @param {int | string | sap.ui.commons.TreeNode} vNode the node to remove or its index or id
 * @return {sap.ui.commons.TreeNode} the removed node or null
 * @public
 */
sap.ui.commons.TreeNode.prototype.removeNode = function(vNode) {
	return this.removeAggregation("nodes", vNode);
};

/**
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.TreeNode[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.commons.TreeNode.prototype.removeAllNodes = function() {
	return this.removeAllAggregation("nodes");
};

/**
 * Checks for the provided <code>sap.ui.commons.TreeNode</code> in the aggregation named <code>nodes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.commons.TreeNode.prototype.indexOfNode = function(oNode) {
	return this.indexOfAggregation("nodes", oNode);
};
	

/**
 * Destroys all the nodes in the aggregation 
 * named <code>nodes</code>.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.destroyNodes = function() {
	this.destroyAggregation("nodes");
	return this;
};


/**
 * Node state has changed. 
 *
 * @name sap.ui.commons.TreeNode#toggleOpenState
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.opened Node has been opened if true
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toggleOpenState' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 * Node state has changed. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.attachToggleOpenState = function(oData, fnFunction, oListener) {
	this.attachEvent("toggleOpenState", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toggleOpenState' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.detachToggleOpenState = function(fnFunction, oListener) {
	this.detachEvent("toggleOpenState", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toggleOpenState to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'opened' of type <code>boolean</code> Node has been opened if true</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.TreeNode.prototype.fireToggleOpenState = function(mArguments) {
	this.fireEvent("toggleOpenState", mArguments);
	return this;
};


/**
 * Node is selected 
 *
 * @name sap.ui.commons.TreeNode#selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'selected' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 * Node is selected 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.attachSelected = function(oData, fnFunction, oListener) {
	this.attachEvent("selected", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'selected' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.detachSelected = function(fnFunction, oListener) {
	this.detachEvent("selected", fnFunction, oListener);
	return this;	
};

/**
 * Fire event selected to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.TreeNode.prototype.fireSelected = function(mArguments) {
	this.fireEvent("selected", mArguments);
	return this;
};


/**
 * Select the node, and if any, deselects the previously selected node
 *
 * @name sap.ui.commons.TreeNode.prototype.select
 * @function

 * @type void
 * @public
 */


/**
 * Expands the node
 *
 * @name sap.ui.commons.TreeNode.prototype.expand
 * @function

 * @type void
 * @public
 */


/**
 * Collapses the node
 *
 * @name sap.ui.commons.TreeNode.prototype.collapse
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/TreeNode.js
sap.ui.commons.TreeNode.ANIMATION_DURATION 	 = 600;

/***********************************************************************************
* PUBLIC METHODS
***********************************************************************************/

/**Expands the node
 * @public
 */

sap.ui.commons.TreeNode.prototype.expand = function(bExpandChildren){

   var oDomNode = jQuery.sap.byId(this.getId());

   if(oDomNode.hasClass("sapUiTreeNodeCollapsed")){
	   //If not, not an expandable node

	   var oDomChildrenNodes = jQuery.sap.byId(this.getId() + "-children");
	   if(oDomChildrenNodes){
		   oDomChildrenNodes.show(sap.ui.commons.TreeNode.ANIMATION_DURATION,this.getCallbackFunction(this,oDomNode,false));
	   }
	   oDomNode.attr("aria-expanded", "true");
	   this.fireToggleOpenState({opened:true});

   }
   //Change property anyway. (Even if node has no expander)
   this.setProperty("expanded", true, true); //Suppress Re-rendering

   if(bExpandChildren){
	   var aNodes = this.getNodes();
	   for(var i=0;i<aNodes.length;i++){
			aNodes[i].expand(bExpandChildren);
	   }
   }

};



/**Collapses the node
 * @public
 */
sap.ui.commons.TreeNode.prototype.collapse = function(bCollapseChildren){

   var oDomNode = jQuery.sap.byId(this.getId());

   if(oDomNode.hasClass("sapUiTreeNodeExpanded")){
	   //If not, not a collapsable node

	   var oDomChildrenNodes = jQuery.sap.byId(this.getId() + "-children");
	   if(oDomChildrenNodes){
		   oDomChildrenNodes.hide(sap.ui.commons.TreeNode.ANIMATION_DURATION,this.getCallbackFunction(this,oDomNode,true));
	   }
	   oDomNode.attr("aria-expanded", "false");
	   this.fireToggleOpenState({opened:false});

   }
   //Change property anyway. (Even if node has no expander)
   this.setProperty("expanded", false, true); //Suppress Re-rendering

	if(bCollapseChildren){
	   var aNodes = this.getNodes();
	   for(var i=0;i<aNodes.length;i++){
			aNodes[i].collapse(bCollapseChildren);
	   }
   }

};

/**Select the node, and if any, deselects the previously selected node
 * @public
 */
sap.ui.commons.TreeNode.prototype.select = function(bSuppressEvent) {
	var oTree = this.getTree(),
		$Tree;
	
	this.setProperty("isSelected", true, true);

	// If not connected to a tree or not rendered yet, return here
	if (!oTree || !this.getDomRef()) {
		return;
	}
	
	$Tree = oTree.$();
	
	//Remove selection elsewhere
	var oDomSelectedNode = $Tree.find(".sapUiTreeNodeSelected");
	oDomSelectedNode.removeClass("sapUiTreeNodeSelected").removeAttr("aria-selected");
	$Tree.find(".sapUiTreeNodeSelectedParent").removeClass("sapUiTreeNodeSelectedParent");

	if(oDomSelectedNode.length){
		//Any Selection found
		var oSelectedNode = sap.ui.getCore().getControl(oDomSelectedNode[0].id);
		oSelectedNode.setProperty("isSelected", false, true); //Suppress Re-rendering
	}

	//Set selection on clicked node
	jQuery.sap.byId(this.getId()).closest(".sapUiTreeNode").addClass("sapUiTreeNodeSelected").attr("aria-selected", "true");

	if (!bSuppressEvent) {
		this.fireSelected();
	}

	this.scrollIntoView();

};

/***********************************************************************************
* SELECTION PRIVATE METHODS
***********************************************************************************/

/**Deselect the node
 * @private
 */
sap.ui.commons.TreeNode.prototype.deselect = function(bSuppressEvent) {
	var oTree = this.getTree();
	
	this.setProperty("isSelected", false, true);

	// If not connected to a tree or not rendered yet, return here
	if (!oTree || !this.getDomRef()) {
		return;
	}

	this.$().removeClass("sapUiTreeNodeSelected").removeAttr("aria-selected");
};

/**Returns true if the node has a selected child node, which is not visible
 * @returns True if the node has such child node
 * @private
 */
sap.ui.commons.TreeNode.prototype.hasSelectedHiddenChild = function(){
	var aNodes = this.getNodes();
	for(var i=0;i<aNodes.length;i++){

		if((!aNodes[i].isVisible() && aNodes[i].getIsSelected()) || aNodes[i].hasSelectedHiddenChild()){
			return true;
		}
	}
	return false;
};

/**
 * Redefinition of Setter for property <code>isSelected</code> for validation purpose
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {boolean} bIsSelected  new value for property <code>isSelected</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setIsSelected = function(bIsSelected) {

	if(!this.getSelectable()){
		//Node is not selectable.
		return this;
	}

	if (bIsSelected) {
		this.select(true);
	}
	else {
		this.deselect();
	}
	return this;
};

/**
 * Redefinition of Setter for property <code>selectable</code> for validation purpose.
 *
 * Default value is <code>true</code>
 *
 * @param {boolean} bSelectable  new value for property <code>selectable</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setSelectable = function(bSelectable) {

	if(!bSelectable && this.getIsSelected()){
		//Setting the node to not selectable: remove selection
		this.setIsSelected(false);
	}

	this.setProperty("selectable", bSelectable);
	return this;
};

/***********************************************************************************
* EVENTS HANDLING
***********************************************************************************/

/** The mouse click event, which will expand/collapse the node
 * @param {event} oEvent The click event object
 * @private
 */
sap.ui.commons.TreeNode.prototype.onclick = function(oEvent){

  var oDomClicked = oEvent.target;

  if(jQuery(oDomClicked).is(".sapUiTreeNode") || jQuery(oDomClicked).is(".sapUiTreeNodeNotSelectable") ){
	  //When user click a Not-Selectable node text, it behaves as clicking on the node itself
	  if(jQuery(oDomClicked).is(".sapUiTreeNodeNotSelectable")){
		  //Get the node itself
		  oDomClicked = jQuery(oDomClicked).closest(".sapUiTreeNode")[0];
	  }

	  //Expand/Collapse
	  if(jQuery(oDomClicked).hasClass("sapUiTreeNodeExpanded")){
		  this.collapse();
	  }
	  else{
		  this.expand();
	  }

	  this.getTree().placeFocus(oDomClicked);
	  oDomClicked.focus();

  }
  else if(jQuery(oDomClicked).is(".sapUiTreeNodeContent") || jQuery(oDomClicked).is(".sapUiTreeIcon")){

	  this.getTree().setSelection(this);

	  //Set focus
	  oDomClicked = jQuery(oDomClicked).closest(".sapUiTreeNode")[0];
	  this.getTree().placeFocus(oDomClicked);
	  oDomClicked.focus();
  }

};

/***********************************************************************************
* KEYBOARD NAVIGATION
***********************************************************************************/
/** The generic selection event (ENTER or SPACE)
* @param {event} oEvent The sapselect event object
 * @private
 */
sap.ui.commons.TreeNode.prototype.onsapselect = function(oEvent){

	if(this.getSelectable()){
		this.getTree().setSelection(this);
	}
	else if(this.getExpanded()){
		this.collapse();
	}
	else{
		this.expand();
	}


};

/**
 * The numpad + key event, which will expand the current node
 * @param {event} oEvent The sapexpand event object
 * @private
 */
sap.ui.commons.TreeNode.prototype.onsapexpand = function(oEvent) {
	this.expand();
};

/**
 * The numpad - key event, which will expand the current node
 * @private
 * @param {event} oEvent The sapcollapse event object
 */
sap.ui.commons.TreeNode.prototype.onsapcollapse = function(oEvent) {
	this.collapse();

};

/***********************************************************************************
* FOCUS HANDLING
***********************************************************************************/

/**Focuses the node
 * @private
 */
sap.ui.commons.TreeNode.prototype.focus = function () {
	var domFocus = this.getFocusDomRef();
	domFocus.setAttribute("tabindex", "0");
	domFocus.focus();
};

/**Removes focus from the node
 * @private
 */
sap.ui.commons.TreeNode.prototype.blur = function () {
	var domFocus = this.getFocusDomRef();
	domFocus.setAttribute("tabindex", "-1");
};



/***********************************************************************************
* HELPER METHODS
***********************************************************************************/

/** Returns the parent tree control. Not necessarily the direct parent if the node is a subnode.
 * @returns The parent tree control
 * @private
 */
sap.ui.commons.TreeNode.prototype.getTree = function() {
	var parent = this.getParent();

	while(parent instanceof sap.ui.commons.TreeNode){
		parent = parent.getParent();
	}
	return parent;
};

/** Returns true if the node has any subnodes.
 * @returns True if the node has any subnode
 * @private
 */
sap.ui.commons.TreeNode.prototype.hasChildren = function(){
   var aSubNodes = this.getNodes();
   if(aSubNodes.length){
	   return true;
   }
   return false;
};

/** Returns true if the node is visible(parent and all grand parent expanded).
 * @returns True if the node is visible
 * @private
 */
sap.ui.commons.TreeNode.prototype.isVisible = function(){
   var parent = this.getParent();
   while(parent instanceof sap.ui.commons.TreeNode){
	   if(!parent.getExpanded()){
		   return false;
	   }

	   parent = parent.getParent();
   }
   return true;
};


/**
* Used for Javascript closure.
* @private
* @return	Returns a function to be called as callback function for jQuery animation
*/
sap.ui.commons.TreeNode.prototype.getCallbackFunction = function(oNode,oDomNode,bCollapsing){

	if(bCollapsing){
		var f =  function(){
			oDomNode.toggleClass("sapUiTreeNodeCollapsed");
			oDomNode.toggleClass("sapUiTreeNodeExpanded");
			oNode.getTree().adjustFocus();
			oNode.getTree().adjustSelectionOnCollapsing(oDomNode);
		};
		return f;
	}
	else{
		var f =  function(){
			oDomNode.toggleClass("sapUiTreeNodeCollapsed");
			oDomNode.toggleClass("sapUiTreeNodeExpanded");
			oNode.getTree().adjustSelectionOnExpanding(oDomNode);
		};
		return f;
	}

};

/**
 * In case the selected node is not visible, change the scroll position of the
 * tree to get it into view.
 *
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @private
 */
sap.ui.commons.TreeNode.prototype.scrollIntoView = function() {
	var $Node = this.$(),
		$Tree = this.getTree().$(),
		$TreeCont = $Tree.find(".sapUiTreeCont"),
		iOffsetTop = $Node[0].offsetTop,
		iScrollTop = $TreeCont.scrollTop(),
		iHeight = $TreeCont.height(),
		iNewScrollTop;

	if (iOffsetTop > iScrollTop + iHeight) {
		iNewScrollTop = iOffsetTop - Math.floor(iHeight * 0.8); 
		$TreeCont.animate({scrollTop:iNewScrollTop});
	}
	else if (iOffsetTop < iScrollTop) {
		iNewScrollTop = iOffsetTop - Math.floor(iHeight * 0.2);
		$TreeCont.animate({scrollTop:iNewScrollTop});
	}
};

/***********************************************************************************
* REDEFINITIONS
***********************************************************************************/

/**
 * Returns the regular tooltip. If empty, returns the text
* @private
 * @return {string} string tooltip
 */
sap.ui.commons.TreeNode.prototype.getTooltip_AsString = function() {
	var sTooltip;
	var oTooltip = this.getTooltip();
	if (typeof oTooltip === "string" || oTooltip instanceof String ) {
		sTooltip = oTooltip;
	}

	if(!sTooltip){
		sTooltip = this.getText();
	}
	return sTooltip;
};
