jQuery - Crotator
=================

A [jQuery](http://www.jquery.com) plugin for creating a **slider or content rotator**. It converts the children inside any selected element into a Slider. One can define array of timeline according to which the slider will be synced. CSS animations can be used with this plugin to enhance the contents visually.

### [Demo](http://anhee.github.io/jquery-crotator/)

Usage
-----

### Setup
```
bower install jquery-crotator
```

### Standard call with default settings:
```
<script>
  $('#theElement').crotator();
</script>
```
Here `theElement` is the id of the tag for which we want the contents to be converted to a Slides.

### Call with options:
```
<script>
  $('#theElement').crotator({
    timeOfExistence: 2, // in seconds
    typeofTag: "<h4/>",
    tagClass: "elClass",
    cycle: true, // true, false
    startEmpty: false // true, false
  });
</script>
```

 - `timeOfExistence` decides what should be the duration of time for which a slide will be visible.
 - `typeofTag` and `tagClass` respectively decide the tag and class of the tag that enclose the slide content. 
 - `cycle` turns on/off looping back to the starting slide. 
 - `startEmpty` decides whether there should be an element displayed when the page loads or contents starts appearing after the time given in `timeOfExistence`.


### Call with user defined array of timeline
```
<script>
  $('#theElement').crotator({
  	// timeline (in seconds)
    timeArray: [2, 20, 14, 9, 3, 10],
    typeofTag: "<h4/>",
    tagClass: "elClass",
  });
</script>
```
`timeArray` is in seconds. The length of `timeArray` should be equal to the number of children present in `theElement`.

For more clarity, the example folder can be checked.
    
