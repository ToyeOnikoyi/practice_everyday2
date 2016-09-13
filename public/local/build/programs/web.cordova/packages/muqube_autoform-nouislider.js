//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/muqube_autoform-nouislider/template.autoform-nouislider.js                   //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("afNoUiSlider");                                                    // 2
Template["afNoUiSlider"] = new Template("Template.afNoUiSlider", (function() {           // 3
  var view = this;                                                                       // 4
  return HTML.DIV(HTML.Attrs(function() {                                                // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                  // 6
  }), "\n    ", Blaze.If(function() {                                                    // 7
    return Spacebars.call(Spacebars.dot(view.lookup("atts"), "doLabels"));               // 8
  }, function() {                                                                        // 9
    return [ "\n      ", HTML.DIV({                                                      // 10
      "class": "nouislider-container"                                                    // 11
    }, "\n        ", HTML.SPAN({                                                         // 12
      "class": "nouislider-label"                                                        // 13
    }, Blaze.View("lookup:atts.labelLeft", function() {                                  // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "labelLeft"));        // 15
    })), "\n        ", HTML.DIV({                                                        // 16
      "class": "nouislider"                                                              // 17
    }), "\n        ", HTML.SPAN({                                                        // 18
      "class": "nouislider-label"                                                        // 19
    }, Blaze.View("lookup:atts.labelRight", function() {                                 // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "labelRight"));       // 21
    })), "\n      "), "\n    " ];                                                        // 22
  }, function() {                                                                        // 23
    return [ "\n      ", HTML.DIV({                                                      // 24
      "class": "nouislider"                                                              // 25
    }), "\n    " ];                                                                      // 26
  }), "\n  ");                                                                           // 27
}));                                                                                     // 28
                                                                                         // 29
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/muqube_autoform-nouislider/autoform-nouislider.js                            //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
/* global AutoForm, _, Template */                                                       // 1
                                                                                         // 2
AutoForm.addInputType("noUiSlider", {                                                    // 3
  template: "afNoUiSlider",                                                              // 4
  valueOut: function(){                                                                  // 5
    var slider = this.find('.nouislider');                                               // 6
    var isDecimal = this.closest(".at-nouislider").data("decimal");                      // 7
                                                                                         // 8
    if( this.attr("data-type") === "Object" ){                                           // 9
      var parser = (isDecimal)? parseFloat : parseInt;                                   // 10
      var first = parser.call(null, slider.val()[0]);                                    // 11
      var second = parser.call(null, slider.val()[1]);                                   // 12
      var value = {                                                                      // 13
        lower: first > second ? second : first,                                          // 14
        upper: first > second ? first : second                                           // 15
      };                                                                                 // 16
      return value;                                                                      // 17
    }else{                                                                               // 18
      return slider.val();                                                               // 19
    }                                                                                    // 20
  }                                                                                      // 21
});                                                                                      // 22
                                                                                         // 23
Template.afNoUiSlider.helpers({                                                          // 24
  atts: function () {                                                                    // 25
    var data = Template.currentData(); // get data reactively                            // 26
    var atts = data.atts;                                                                // 27
    atts["data-type"] = data.schemaType.name;                                            // 28
    if( atts["class"] ){                                                                 // 29
      atts["class"] += " at-nouislider";                                                 // 30
    }else{                                                                               // 31
      atts["class"] = "at-nouislider";                                                   // 32
    }                                                                                    // 33
                                                                                         // 34
    atts.doLabels = ( atts.labelLeft || atts.labelRight );                               // 35
                                                                                         // 36
    atts["data-decimal"] = data.decimal;                                                 // 37
                                                                                         // 38
    return _.omit(atts, 'noUiSliderOptions', 'noUiSlider_pipsOptions');                  // 39
  }                                                                                      // 40
});                                                                                      // 41
                                                                                         // 42
var calculateOptions = function(data){                                                   // 43
  var schemaMinMax = _.pick(data, 'max', 'min');                                         // 44
  var autoformOptions = _.pick(data.atts || {}, 'max', 'min', 'step', 'start', 'range');
  var noUiSliderOptions = (data.atts || {}).noUiSliderOptions;                           // 46
                                                                                         // 47
  var options = _.extend({}, schemaMinMax, autoformOptions, noUiSliderOptions);          // 48
                                                                                         // 49
  // Adjust data initialization based on schema type                                     // 50
  if( options.start === undefined ){                                                     // 51
    if( data.schemaType.name === "Object" ){                                             // 52
      if( data.value && data.value.lower ){                                              // 53
        options.start = [                                                                // 54
          data.value.lower,                                                              // 55
          data.value.upper                                                               // 56
        ];                                                                               // 57
      }else{                                                                             // 58
        options.start = [                                                                // 59
          typeof data.min === "number" ? data.min : 0,                                   // 60
          typeof data.max === "number" ? data.max : 100                                  // 61
        ];                                                                               // 62
      }                                                                                  // 63
      options.connect = true;                                                            // 64
    }else{                                                                               // 65
      options.start = data.value || 0;                                                   // 66
    }                                                                                    // 67
  } else {                                                                               // 68
    options.start = JSON.parse(options.start);                                           // 69
  }                                                                                      // 70
                                                                                         // 71
  if( options.range === undefined ){                                                     // 72
    options.range = {                                                                    // 73
      min: typeof options.min === "number" ? options.min : 0,                            // 74
      max: typeof options.max === "number" ? options.max : 100                           // 75
    };                                                                                   // 76
  } else {                                                                               // 77
    options.range = JSON.parse(options.range);                                           // 78
  }                                                                                      // 79
  delete options.min;                                                                    // 80
  delete options.max;                                                                    // 81
                                                                                         // 82
  // default step to 1 if not otherwise defined                                          // 83
  if( options.step === undefined ){                                                      // 84
    options.step = 1;                                                                    // 85
  }                                                                                      // 86
                                                                                         // 87
  return options;                                                                        // 88
};                                                                                       // 89
                                                                                         // 90
Template.afNoUiSlider.rendered = function () {                                           // 91
  var template = this;                                                                   // 92
  var $s = template.$('.nouislider');                                                    // 93
                                                                                         // 94
  var setup = function(c){                                                               // 95
    var data = Template.currentData(); // get data reactively                            // 96
    var options = calculateOptions( data );                                              // 97
    $s.noUiSlider(options, true);                                                        // 98
                                                                                         // 99
    if (c.firstRun) {                                                                    // 100
      $s.on('slide', function(){                                                         // 101
        // This is a trick to fool some logic in AutoForm that makes                     // 102
        // sure values have actually changed on whichever element                        // 103
        // emits a change event. Eventually AutoForm will give                           // 104
        // input types the control of indicating exactly when                            // 105
        // their value changes rather than relying on the change event                   // 106
        $s.parent()[0].value = JSON.stringify($s.val());                                 // 107
        $s.parent().change();                                                            // 108
        $s.data('changed','true');                                                       // 109
      });                                                                                // 110
    }                                                                                    // 111
                                                                                         // 112
    if( data.atts.noUiSlider_pipsOptions ){                                              // 113
      $s.noUiSlider_pips(                                                                // 114
        data.atts.noUiSlider_pipsOptions                                                 // 115
      );                                                                                 // 116
    }                                                                                    // 117
  };                                                                                     // 118
                                                                                         // 119
  template.autorun( setup );                                                             // 120
};                                                                                       // 121
                                                                                         // 122
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['muqube:autoform-nouislider'] = {};

})();
