var require = meteorInstall({"lib":{"router.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// lib/router.js                                                            //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Router.configure({                                                          // 1
  layoutTemplate: 'layout'                                                  // 2
                                                                            //
});                                                                         // 1
                                                                            //
Router.route('/', {                                                         // 6
  name: 'homeIndex'                                                         // 7
                                                                            //
});                                                                         // 6
                                                                            //
Router.route('/confirm', {                                                  // 12
  name: 'confirm'                                                           // 13
                                                                            //
});                                                                         // 12
                                                                            //
/*onBeforeAction: function(){                                               //
  var currentUser = Meteor.userId();                                        //
  if(countdown.start())                                                     //
    {                                                                       //
    //    this.render('practiceToday');                                     //
                                                                            //
    }else{                                                                  //
      this.next();                                                          //
         }                                                                  //
}*/                                                                         //
Router.route('/noConfirm', {                                                // 27
  name: 'noConfirm'                                                         // 28
                                                                            //
});                                                                         // 27
                                                                            //
Router.route('/oops', {                                                     // 33
  name: 'oops'                                                              // 34
                                                                            //
});                                                                         // 33
                                                                            //
Router.route('/dayOffTaken', {                                              // 39
  name: 'dayOffTaken'                                                       // 40
                                                                            //
});                                                                         // 39
                                                                            //
Router.route('/practiceToday', {                                            // 46
  name: 'practiceToday'                                                     // 47
                                                                            //
});                                                                         // 46
                                                                            //
Router.route('/success', {                                                  // 52
  name: 'success'                                                           // 53
                                                                            //
});                                                                         // 52
                                                                            //
Router.route('/settings', {                                                 // 60
  name: 'settings'                                                          // 61
                                                                            //
});                                                                         // 60
//////////////////////////////////////////////////////////////////////////////

}},"api":{"collections":{"slider.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// api/collections/slider.js                                                //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Collection = new Mongo.Collection('collection');                            // 1
                                                                            //
Collection.attachSchema(new SimpleSchema({                                  // 3
  slider: {                                                                 // 4
    type: Number,                                                           // 5
    max: 150,                                                               // 6
    min: 30,                                                                // 7
    autoform: {                                                             // 8
      type: "noUiSlider",                                                   // 9
      step: 10,                                                             // 10
      noUiSlider_pipsOptions: {                                             // 11
        mode: 'steps',                                                      // 12
        density: 5                                                          // 13
      }                                                                     // 11
    }                                                                       // 8
  }                                                                         // 4
}));                                                                        // 3
//////////////////////////////////////////////////////////////////////////////

},"streaks.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// api/collections/streaks.js                                               //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Streaks = new Mongo.Collection('streaks');                                  // 1
//////////////////////////////////////////////////////////////////////////////

},"success.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// api/collections/success.js                                               //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
                                                                            //
//////////////////////////////////////////////////////////////////////////////

}}},"server":{"practiceToday.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/practiceToday.js                                                  //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Meteor.publish('myStreaks', function () {                                   // 1
                                                                            //
  var currentUser = this.userId;                                            // 3
  return Streaks.find({});                                                  // 4
});                                                                         // 8
                                                                            //
Meteor.methods({                                                            // 10
  'addStreaks': function addStreaks(flag) {                                 // 11
    var currentUser = Meteor.user();                                        // 12
                                                                            //
    Streaks.upsert({                                                        // 14
      owner: currentUser,                                                   // 15
      checkStreakToday: flag                                                // 16
    }, { $inc: { streaks: 1 } });                                           // 14
  },                                                                        // 19
  'updateToZero': function updateToZero() {                                 // 20
                                                                            //
    Streaks.update({}, { $set: { streaks: 0, checkStreakToday: false } });  // 22
  }                                                                         // 23
                                                                            //
});                                                                         // 10
//////////////////////////////////////////////////////////////////////////////

},"social-config.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/social-config.js                                                  //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
ServiceConfiguration.configurations.remove({                                // 1
    service: 'facebook'                                                     // 2
});                                                                         // 1
                                                                            //
ServiceConfiguration.configurations.insert({                                // 5
    service: 'facebook',                                                    // 6
    appId: '817353958364527',                                               // 7
    secret: 'adfb2c08cbac6840f5c201f815f4f7ad'                              // 8
});                                                                         // 5
//////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {                                                // 3
  // code to run on server at startup                                       //
                                                                            //
});                                                                         // 6
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/router.js");
require("./api/collections/slider.js");
require("./api/collections/streaks.js");
require("./api/collections/success.js");
require("./server/practiceToday.js");
require("./server/social-config.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
