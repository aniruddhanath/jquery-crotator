jQuery - Crotator
=================

This is a [jQuery](http://www.jquery.com) plugin for creating a **Content Slider / Content Rotator** in any webpage. This plugin converts the children inside any specified element of a page into a Slider. jQuery UI as well as CSS animations can also be included with this plugin.

Usage
-----

Copy `jquery.crotator.js` to the javascript folder. Then include jQuery and the plugin in the page.

```
<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/jquery-crotator.js"></script>
```

The plugin can be called with jQuery in different ways.

### Standard call with default settings:
```
<script>
  $('#myElement').crotator();
</script>
```
Here `myElement` is the id of the tag for which we want the contents to be converted to a Slides.

### Call with options:
```
<script>
  $('#myElement').crotator({
    timeofExistence: 2000,
    typeofTag: "<h4/>",
    tagClass: "quotes"
  });
</script>
```
Here `timeofExistence` decides what should be the duration of time for which a slide will be visible. `typeofTag` and `tagClass` respectively decide the tag and class of the tag that enclose the slide content.

For more clearity, the example folder can be checked.
    
