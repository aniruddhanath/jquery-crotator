/**
 * jQuery-Crotator: A Content Rotator for jQuery

 * Author: Aniruddha Nath
 * Version: 1.0.0
 * 
 * Website: https://github.com/Aniruddha22/jQuery-Crotator
 * 
 * Description: This is a jQuery plugin for creating a Content Slider / Content Rotator in any webpage.
 *		Options available for user-defined-timeline and more.
 * 
 * License: http://www.opensource.org/licenses/mit-license.php
 */

;(function($) {
	
	// default settings for the plugin
	var defaults = {

		// user defined array of time
		timeArray: [],

		// turn of auto cycling (true/false)
		cycle: true,

		// start from a empty space (true/false)
		startEmpty: false,

		// time(in seconds) for which each node will be displayed
		timeOfExistence: 1,

		// type of tag of each node
		typeofTag: "<h3/>",

		// class of each node (use it for styling)
		tagClass: "",
	};
	
	//Constructor
	function Crotator(element, options) {
		// overwriting defaults with options
		this.config = $.extend({}, defaults, options);
		// the element in the DOM from where this plugin is called
		this.element = element;
		this.children = this.element.children();

		// not allowed condition (timeArray not equal to no. of children)
		if (this.config.timeArray.length != this.children.length) {
			// overwriting
			this.config.timeArray = [];
		};

		// used in sorting the timeArray
		this.indices = [];
		if (this.config.timeArray.length != 0) {
			this.createIndices();
		};

		this.timeInterval = [];
		// inserting the first element
		this.timeInterval.push(this.config.timeArray[this.indices[0]]);
		for (var i = 1; i < this.indices.length; i++) {
			var next = this.indices[i];
			var prev = this.indices[i - 1];
			var time = this.config.timeArray[next] - this.config.timeArray[prev];
			this.timeInterval.push(time);
		};

		// used for iterating all the elements
		this.iterator = 0;

		this.init();
	}

	Crotator.prototype.createIndices = function () {
		var widget = this;

		// sorting the timeArray
		var indices = this.config.timeArray.map(function (elem, index) {
			return index;
		});
		indices.sort(function (a,b) {
			return widget.config.timeArray[a] - widget.config.timeArray[b];
		});

		this.indices = indices;
	}

	Crotator.prototype.init = function () {
		
		// erasing all the content from the container
		this.element.html('');

		// start with showing the first content
		if (!this.config.startEmpty) {
			// additional check for user defined timeArray
			if (this.config.timeArray.length == 0) {
				$(this.config.typeofTag, {
					html: $(this.children[0]).html()
				}).addClass(this.config.tagClass).appendTo(this.element);
				this.iterator++;
			};
		}

		if (this.config.timeArray.length == 0) {
			this.timedCount();
		} else {
			this.viaArray();
		}

	}

	Crotator.prototype.timedCount = function () {

		var widget = this;

		if ( this.iterator < this.children.length) {
				
			setTimeout( function () {

				// erasing the previous slide contents
				widget.element.html('');

				var i = widget.iterator;

				$(widget.config.typeofTag, {
					html: $(widget.children[i]).html()
				}).addClass(widget.config.tagClass).appendTo(widget.element);
				
				widget.iterator++;

				widget.timedCount();

			}, widget.config.timeOfExistence * 1000);

		} else {

			if (this.config.cycle) {
				this.iterator = 0;
				this.timedCount();
			};
		}
	}

	Crotator.prototype.viaArray = function () {
		var widget = this;

		if ( this.iterator < this.children.length ) {

			var index = widget.indices[this.iterator];

			// javascript closure
			return setTimeout( function () {
				widget.element.html('');

				$(widget.config.typeofTag, {
					html: $(widget.children[index]).html()
				}).addClass(widget.config.tagClass).appendTo(widget.element);

				widget.iterator++;
				widget.viaArray();

			}, widget.timeInterval[this.iterator] * 1000 );
		
		} else {

			if (this.config.cycle) {
				this.iterator = 0;
				this.viaArray();
			};
		}
		
	}

	$.fn.crotator = function (options) {
		// creating an instance of the plugin
		new Crotator(this, options);
		// returning to preserve chaining in jQuery
		return this;
	}

}(jQuery));