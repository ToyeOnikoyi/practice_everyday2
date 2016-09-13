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
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

var require = meteorInstall({"node_modules":{"meteor":{"muqube:autoform-selectable":{"template.autoform-selectable.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/muqube_autoform-selectable/template.autoform-selectable.js                            //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  // 1
Template.__checkName("afSelectable");                                                             // 2
Template["afSelectable"] = new Template("Template.afSelectable", (function() {                    // 3
  var view = this;                                                                                // 4
  return HTML.DIV(HTML.Attrs({                                                                    // 5
    "class": "autoform-selectable-container"                                                      // 6
  }, function() {                                                                                 // 7
    return Spacebars.attrMustache(view.lookup("atts"));                                           // 8
  }), "\n        ", Blaze.Each(function() {                                                       // 9
    return {                                                                                      // 10
      _sequence: Spacebars.call(view.lookup("options")),                                          // 11
      _variable: "option"                                                                         // 12
    };                                                                                            // 13
  }, function() {                                                                                 // 14
    return [ "\n            ", HTML.DIV({                                                         // 15
      "class": function() {                                                                       // 16
        return [ Spacebars.mustache(view.lookup("isOptionSelected"), Spacebars.dot(view.lookup("option"), "value")), " selectable-option" ];
      },                                                                                          // 18
      "data-value": function() {                                                                  // 19
        return Spacebars.mustache(Spacebars.dot(view.lookup("option"), "value"));                 // 20
      }                                                                                           // 21
    }, Blaze.View("lookup:option.label", function() {                                             // 22
      return Spacebars.mustache(Spacebars.dot(view.lookup("option"), "label"));                   // 23
    })), "\n        " ];                                                                          // 24
  }), "\n    ");                                                                                  // 25
}));                                                                                              // 26
                                                                                                  // 27
////////////////////////////////////////////////////////////////////////////////////////////////////

},"autoform-selectable.js":["babel-runtime/helpers/typeof",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/muqube_autoform-selectable/autoform-selectable.js                                     //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
exports.__esModule = true;                                                                        //
exports.name = undefined;                                                                         //
                                                                                                  //
var _typeof2 = require("babel-runtime/helpers/typeof");                                           //
                                                                                                  //
var _typeof3 = _interopRequireDefault(_typeof2);                                                  //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
var name = exports.name = 'muqube:autoform-selectable';                                           // 1
                                                                                                  //
AutoForm.addInputType("selectable", {                                                             // 3
    template: "afSelectable",                                                                     // 4
    valueOut: function () {                                                                       // 5
        function valueOut() {                                                                     // 5
            var data = this.data();                                                               // 6
            var selection = this.find('.selected.selectable-option');                             // 7
                                                                                                  //
            if (data.multiple) {                                                                  // 9
                var _ret = function () {                                                          // 9
                    var values = [];                                                              // 10
                    selection.each(function (index, elem) {                                       // 11
                        values.push($(elem).data('value'));                                       // 12
                    });                                                                           // 13
                    return {                                                                      // 14
                        v: values                                                                 // 14
                    };                                                                            // 14
                }();                                                                              // 9
                                                                                                  //
                if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3["default"])(_ret)) === "object") return _ret.v;
            } else {                                                                              // 15
                return selection.data('value');                                                   // 16
            }                                                                                     // 17
        }                                                                                         // 18
                                                                                                  //
        return valueOut;                                                                          // 5
    }()                                                                                           // 5
});                                                                                               // 3
                                                                                                  //
Template.afSelectable.helpers({                                                                   // 21
    atts: function () {                                                                           // 22
        function atts() {                                                                         // 22
            var data = Template.currentData();                                                    // 23
            var atts = data.atts;                                                                 // 24
            atts["data-multiple"] = data.atts["multiple"];                                        // 25
            atts["data-schema-key"] = data.atts["data-schema-key"];                               // 26
                                                                                                  //
            return atts;                                                                          // 28
        }                                                                                         // 29
                                                                                                  //
        return atts;                                                                              // 22
    }(),                                                                                          // 22
    isOptionSelected: function () {                                                               // 30
        function isOptionSelected(option) {                                                       // 21
            var value = Template.currentData().value;                                             // 31
            var isSelected = false;                                                               // 32
                                                                                                  //
            if (Array.isArray(value)) {                                                           // 34
                isSelected = value.indexOf(option) != -1;                                         // 35
            } else {                                                                              // 36
                isSelected = option === value;                                                    // 37
            }                                                                                     // 38
                                                                                                  //
            return isSelected ? "selected" : "";                                                  // 40
        }                                                                                         // 41
                                                                                                  //
        return isOptionSelected;                                                                  // 21
    }(),                                                                                          // 21
    options: function () {                                                                        // 42
        function options() {                                                                      // 21
            var data = Template.currentData();                                                    // 43
            return data.selectOptions;                                                            // 44
        }                                                                                         // 45
                                                                                                  //
        return options;                                                                           // 21
    }()                                                                                           // 21
});                                                                                               // 21
                                                                                                  //
Template.afSelectable.events({                                                                    // 48
    'click .selectable-option': function () {                                                     // 49
        function clickSelectableOption(e, t) {                                                    // 48
            var target = $(e.target),                                                             // 50
                isMultiple = t && t.data && t.data.atts && t.data.atts.multiple,                  // 50
                isSelected = target.hasClass('selected'),                                         // 50
                numSelected = t.findAll('.selected.selectable-option').length,                    // 50
                min = t.data.atts.min || Number.MIN_SAFE_INTEGER,                                 // 50
                max = t.data.atts.max || Number.MAX_SAFE_INTEGER;                                 // 50
                                                                                                  //
            if (isMultiple) {                                                                     // 57
                if (min < numSelected && isSelected || numSelected < max && !isSelected) {        // 58
                    target.toggleClass('selected');                                               // 59
                }                                                                                 // 60
            } else {                                                                              // 61
                target.toggleClass('selected');                                                   // 62
                target.siblings().removeClass('selected');                                        // 63
            }                                                                                     // 64
        }                                                                                         // 65
                                                                                                  //
        return clickSelectableOption;                                                             // 48
    }()                                                                                           // 48
});                                                                                               // 48
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json",".html",".css"]});
require("./node_modules/meteor/muqube:autoform-selectable/template.autoform-selectable.js");
require("./node_modules/meteor/muqube:autoform-selectable/autoform-selectable.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['muqube:autoform-selectable'] = {};

})();
