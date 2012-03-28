/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.FeedChunk
jQuery.sap.declare("sap.ui.ux3.FeedChunkRenderer");

/**
 * @class FeedChunk renderer. 
 * @static
 */
sap.ui.ux3.FeedChunkRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.FeedChunkRenderer.render = function(oRenderManager, oControl){ 
	// convenience variable
	var rm = oRenderManager;
	var oChunk = oControl;
	var bComment = oChunk.getCommentChunk();
	var sMyId = oChunk.getId();

	oChunk.initChildControls();

	rm.write('<ARTICLE');
    rm.writeControlData(oChunk);
	rm.addClass('sapUiFeedChunk');
	if (bComment) {
		rm.addClass('sapUiFeedChunkComment');		
	}

	rm.writeClasses();
    rm.write('>'); 
    
    // thumbnail
	rm.write('<img id=' + sMyId + '-thumb');
//	rm.addClass('sapUiFeedChunkThumb');		
	var sThumbnail = oChunk.getThumbnailSrc();
	if(!sThumbnail){
		sThumbnail = jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sap.ui.core.theming.Parameters.get('sap.ui.ux3:sapUiFeedPersonPlaceholder');
	}
	rm.writeAttributeEscaped('src', sThumbnail);
	rm.writeAttributeEscaped('alt', oChunk.getSender());
	rm.writeClasses();
	rm.write('>');
    
    // text (starting with sender)
    rm.write('<DIV class= "sapUiFeedChunkText" >');
	rm.write('<a id=' + sMyId + '-sender ');
	rm.writeAttribute('href', 'javascript:void(0);');
	rm.write('>');
	rm.writeEscaped(oChunk.getSender());
	rm.write('</a> ');

	this.renderText(rm, oChunk);
//	rm.write(jQuery.sap.escapeHTML(oChunk.getText()).replace(/(\r\n)|(\n\r)|\r|\n/g,"<br />"));
	rm.write('</DIV>');

	// status icons
	if(!bComment){
		rm.write('<UL class= "sapUiFeedChunkStatusIcons" >');
		if (oChunk.getFlagged()) {
			rm.write('<LI class= "sapUiFeedChunkFlagged" title="' + oChunk.rb.getText('FEED_FLAGGED') + '" >&#9873</LI>');
		}
		if (oChunk.getFavorite()) {
			rm.write('<LI class= "sapUiFeedChunkFavorite" title="' + oChunk.rb.getText('FEED_FAVORITE') + '" >&#9733</LI>');
		}
		if (oChunk.getShared()) {
			rm.write('<LI class= "sapUiFeedChunkShared" title="' + oChunk.rb.getText('FEED_SHARED') + '" >&#8635</LI>');
		}
		rm.write('</UL>');
	}
	
	// date
    rm.write('<SPAN class= "sapUiFeedChunkByline" >');
	rm.writeEscaped(oChunk.getTimestamp());
	rm.write('</SPAN>');

	if(!bComment){
		// action buttons (only if exists)
		if(oChunk.oToolsButton){
			rm.renderControl(oChunk.oToolsButton);
		}								
    	rm.write('<BUTTON type = "button" id='+ sMyId + '-ActShare class= "sapUiFeedChunkAct sapUiFeedChunkActShare" title="' + oChunk.rb.getText('FEED_ACT_SHARE') + '" >&#8635</BUTTON>');
    	rm.write('<BUTTON type = "button" id='+ sMyId + '-ActInspect class= "sapUiFeedChunkAct sapUiFeedChunkActInspect" title="' + oChunk.rb.getText('FEED_ACT_INSPECT') + '" >i</BUTTON>');
    	rm.write('<BUTTON type = "button" id='+ sMyId + '-ActFavorite class= "sapUiFeedChunkAct sapUiFeedChunkActFavorite" title="' + oChunk.rb.getText('FEED_ACT_FAVORITE') + '" >&#9733</BUTTON>');
    	rm.write('<BUTTON type = "button" id='+ sMyId + '-ActFlag class= "sapUiFeedChunkAct sapUiFeedChunkActFlag" title="' + oChunk.rb.getText('FEED_ACT_FAVORITE') + '" >&#9873</BUTTON>');
    	rm.write('<BUTTON type = "button" id='+ sMyId + '-ActComment class= "sapUiFeedChunkAct sapUiFeedChunkActComment" title="' + oChunk.rb.getText('FEED_ACT_COMMENT') + '" >C</BUTTON>');
	}

    // delete button
    if(oChunk.getDeletionAllowed() && bComment){
    	rm.write('<BUTTON type = "button" id='+ sMyId + '-delete class= "sapUiFeedChunkDel" title="' + oChunk.rb.getText('FEED_DELETE') + '" >X</BUTTON>');
    }
    
    // comments
    if(oChunk.getComments().length > 0 || oChunk.showCommentFeeder){   	
    	rm.write("<SECTION>");
    	this.renderComments(rm, oChunk);
    	rm.write("</SECTION>");
    }
    
    rm.write('</ARTICLE>');
};

/*
 *	Render text with @References
 */
sap.ui.ux3.FeedChunkRenderer.renderText = function(rm, oChunk){ 

	var sText = oChunk.getText();
	var i = 0;

	do{
		var iPos = sText.search(/\s@/);

		if(iPos < 0){
			rm.write(jQuery.sap.escapeHTML(sText).replace(/(\r\n)|(\n\r)|\r|\n/g,"<br />"));
		}else{
			rm.write(jQuery.sap.escapeHTML(sText.slice(0, iPos + 1)).replace(/(\r\n)|(\n\r)|\r|\n/g,"<br />"));
			sText = sText.slice(iPos + 1);
			iPos = sText.search(/\s/);
			if (iPos < 0) {
				//Text ends with @-reference
				iPos = sText.length;
			}
			rm.write('<a id=' + oChunk.getId() + '-Ref' + i);
			rm.writeAttribute('href', 'javascript:void(0);');
			rm.write('>');
			rm.writeEscaped(sText.slice(0, iPos));
			rm.write('</a> ');
			i++;
			sText = sText.slice(iPos);
		}
	}while(iPos >= 0);

};

/*
 *	Render comment section content
 */
sap.ui.ux3.FeedChunkRenderer.renderComments = function(rm, oChunk){ 

    	// number of comments
    	rm.write('<HEADER class= "sapUiFeedChunkComments" >');
    	if(oChunk.rb) {
    		rm.write(oChunk.rb.getText('FEED_NO_COMMENTS', [oChunk.getComments().length]));

    		if(!oChunk.allComments && oChunk.getComments().length > oChunk.maxComments){
    			rm.write('<a id=' + oChunk.getId() + '-all ');
    			rm.writeAttribute('href', 'javascript:void(0);');
    			rm.write('>' + oChunk.rb.getText('FEED_ALL_COMMENTS') + '</a>');
    		}
    	}
    	rm.write("</HEADER>");

    	for ( var i = 0; i < oChunk.getComments().length; i++) {
			rm.renderControl(oChunk.getComments()[i]);			
			
			if (i == oChunk.maxComments - 1 && !oChunk.allComments) {
				// only render max. comments
				break;
			}
		}
		
		// comment feeder
		if (oChunk.oCommentFeeder) {
			rm.renderControl(oChunk.oCommentFeeder);						
		}

};

/*
 *	Render expand button
 */
sap.ui.ux3.FeedChunkRenderer.renderExpander = function(oChunk){ 

	if (oChunk.expanded) {
		return "<button id= '" + oChunk.getId() + "-exp' class='sapUiFeedChunkCollapse' title='" + oChunk.rb.getText("FEED_COLLAPS") + "'>&#9660</button>";
	} else {
		return "<button id= '" + oChunk.getId() + "-exp' class='sapUiFeedChunkExpand' title='" + oChunk.rb.getText("FEED_EXPAND") + "'>&#9660</button>";
	}

};

