// jQuery-Crotator: A Content Rotator for jQuery
// ===========================================
// Author: Aniruddha Nath
// Version: 0.0.2
// Created: 3/02/2014
// Date: 3/02/2014
// Website: 
// Description: This is a jQuery plugin for creating a Content Slider / Content Rotator in any webpage.
//		Can be used as a "Quotes Rotater" widget. CSS3 of jQuery UI based animation can also be used.

;(function($) {
	
	// default settings for the plugin
	var defaults = {
		timeofExistence: 1000,
		typeofTag: "<h3/>",
		tagClass: "content"
	};
	
	//Constructor
	function Crotator(element, options) {
		// overwriting defaults with options
		this.config = $.extend({}, defaults, options);
		// the element in the DOM from where this plugin is called
		this.element = element;
		this.init();
	}

	Crotator.prototype.init = function() {
		
		var container = this.element;
		
		var q = container.children();
		
		// erasing all the content from the container
		container.html('');

		var index = 1;

		// time of existence for each slide
		var time = this.config.timeofExistence;

		// tag & class of tag that will enclose the content
		var tag = this.config.typeofTag;
		var cls = this.config.tagClass;

		// putting up a fallback content
		// comment the following three lines to hide the fallback content
		$(tag, {
        		html: $(q[0]).html()
    		}).fadeIn('slow').addClass(cls).appendTo(container);

		// function which rotates the contents
		timedCount();

		function timedCount() {

			if ( index < q.length) {
				
        			setTimeout( function () {
					
					// erasing the previous slide contents
					container.html('');
					$(tag, {
						html: $(q[index]).html()
	            			}).fadeIn('slow').addClass(cls).appendTo(container);
			            	// jQuery based animation can be replaced with CSS 3 animations
			            	// remove .fadeIn('slow') from the above line or comment the above lines
			            	// and uncomment the following
			            	/*
					$(tag, {
		                		html: $(q[index]).html()
		            		}).addClass(cls).appendTo(container);
			            	*/
			            	
					index = index + 1;
			            	timedCount();
		        	
		        	},time);
            
	        	} else {
	        		index = 0;
	        		timedCount();
	        	}
        	}
	}

	$.fn.crotator = function (options) {
		// creating an instance of the plugin
		new Crotator(this, options);
		// returning to preserve chaining in jQuery
		return this;
	}

}(jQuery));
