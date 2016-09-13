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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Random = Package.random.Random;
var EventState = Package['raix:eventstate'].EventState;
var check = Package.check.check;
var Match = Package.check.Match;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Push, _matchToken, checkClientSecurity, initPushUpdates, _replaceToken, _removeToken;

var require = meteorInstall({"node_modules":{"meteor":{"raix:push":{"lib":{"common":{"main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/raix_push/lib/common/main.js                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
// The push object is an event emitter                                                                        //
Push = new EventState();                                                                                      // 2
                                                                                                              //
// This is the match pattern for tokens                                                                       //
_matchToken = Match.OneOf({ apn: String }, { gcm: String });                                                  // 5
                                                                                                              //
// Client-side security warnings, used to check options                                                       //
checkClientSecurity = function checkClientSecurity(options) {                                                 // 9
                                                                                                              //
  // Warn if certificates or keys are added here on client. We dont allow the                                 //
  // user to do this for security reasons.                                                                    //
  if (options.apn && options.apn.certData) {                                                                  // 13
    throw new Error('Push.init: Dont add your APN certificate in client code!');                              // 14
  }                                                                                                           // 15
                                                                                                              //
  if (options.apn && options.apn.keyData) {                                                                   // 17
    throw new Error('Push.init: Dont add your APN key in client code!');                                      // 18
  }                                                                                                           // 19
                                                                                                              //
  if (options.apn && options.apn.passphrase) {                                                                // 21
    throw new Error('Push.init: Dont add your APN passphrase in client code!');                               // 22
  }                                                                                                           // 23
                                                                                                              //
  if (options.gcm && options.gcm.apiKey) {                                                                    // 25
    throw new Error('Push.init: Dont add your GCM api key in client code!');                                  // 26
  }                                                                                                           // 27
};                                                                                                            // 28
                                                                                                              //
// DEPRECATED                                                                                                 //
Push.init = function () {                                                                                     // 31
  console.warn('Push.init have been deprecated in favor of "config.push.json" please migrate');               // 32
};                                                                                                            // 33
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/raix_push/lib/common/notifications.js                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
// Notifications collection                                                                                   //
Push.notifications = new Mongo.Collection('_raix_push_notifications');                                        // 2
                                                                                                              //
// This is a general function to validate that the data added to notifications                                //
// is in the correct format. If not this function will throw errors                                           //
var _validateDocument = function _validateDocument(notification) {                                            // 6
                                                                                                              //
  // Check the general notification                                                                           //
  check(notification, {                                                                                       // 9
    from: String,                                                                                             // 10
    title: String,                                                                                            // 11
    text: String,                                                                                             // 12
    badge: Match.Optional(Number),                                                                            // 13
    sound: Match.Optional(String),                                                                            // 14
    notId: Match.Optional(Match.Integer),                                                                     // 15
    apn: Match.Optional({                                                                                     // 16
      from: Match.Optional(String),                                                                           // 17
      title: Match.Optional(String),                                                                          // 18
      text: Match.Optional(String),                                                                           // 19
      badge: Match.Optional(Number),                                                                          // 20
      sound: Match.Optional(String),                                                                          // 21
      notId: Match.Optional(Match.Integer)                                                                    // 22
    }),                                                                                                       // 16
    gcm: Match.Optional({                                                                                     // 24
      from: Match.Optional(String),                                                                           // 25
      title: Match.Optional(String),                                                                          // 26
      text: Match.Optional(String),                                                                           // 27
      badge: Match.Optional(Number),                                                                          // 28
      sound: Match.Optional(String),                                                                          // 29
      notId: Match.Optional(Match.Integer)                                                                    // 30
    }),                                                                                                       // 24
    query: Match.Optional(String),                                                                            // 32
    token: Match.Optional(_matchToken),                                                                       // 33
    tokens: Match.Optional([_matchToken]),                                                                    // 34
    payload: Match.Optional(Object),                                                                          // 35
    delayUntil: Match.Optional(Date),                                                                         // 36
    createdAt: Date,                                                                                          // 37
    createdBy: Match.OneOf(String, null)                                                                      // 38
  });                                                                                                         // 9
                                                                                                              //
  // Make sure a token selector or query have been set                                                        //
  if (!notification.token && !notification.tokens && !notification.query) {                                   // 42
    throw new Error('No token selector or query found');                                                      // 43
  }                                                                                                           // 44
                                                                                                              //
  // If tokens array is set it should not be empty                                                            //
  if (notification.tokens && !notification.tokens.length) {                                                   // 47
    throw new Error('No tokens in array');                                                                    // 48
  }                                                                                                           // 49
};                                                                                                            // 50
                                                                                                              //
Push.send = function (options) {                                                                              // 52
  // If on the client we set the user id - on the server we need an option                                    //
  // set or we default to "<SERVER>" as the creator of the notification                                       //
  // If current user not set see if we can set it to the logged in user                                       //
  // this will only run on the client if Meteor.userId is available                                           //
  var currentUser = Meteor.isClient && Meteor.userId && Meteor.userId() || Meteor.isServer && (options.createdBy || '<SERVER>') || null;
                                                                                                              //
  // Rig the notification object                                                                              //
  var notification = _.extend({                                                                               // 61
    createdAt: new Date(),                                                                                    // 62
    createdBy: currentUser                                                                                    // 63
  }, _.pick(options, 'from', 'title', 'text'));                                                               // 61
                                                                                                              //
  // Add extra                                                                                                //
  _.extend(notification, _.pick(options, 'payload', 'badge', 'sound', 'notId', 'delayUntil'));                // 67
                                                                                                              //
  if (Match.test(options.apn, Object)) {                                                                      // 69
    notification.apn = _.pick(options.apn, 'from', 'title', 'text', 'badge', 'sound', 'notId');               // 70
  }                                                                                                           // 71
                                                                                                              //
  if (Match.test(options.gcm, Object)) {                                                                      // 73
    notification.gcm = _.pick(options.gcm, 'from', 'title', 'text', 'badge', 'sound', 'notId');               // 74
  }                                                                                                           // 75
                                                                                                              //
  // Set one token selector, this can be token, array of tokens or query                                      //
  if (options.query) {                                                                                        // 78
    // Set query to the json string version fixing #43 and #39                                                //
    notification.query = JSON.stringify(options.query);                                                       // 80
  } else if (options.token) {                                                                                 // 81
    // Set token                                                                                              //
    notification.token = options.token;                                                                       // 83
  } else if (options.tokens) {                                                                                // 84
    // Set tokens                                                                                             //
    notification.tokens = options.tokens;                                                                     // 86
  }                                                                                                           // 87
                                                                                                              //
  // Validate the notification                                                                                //
  _validateDocument(notification);                                                                            // 90
                                                                                                              //
  // Try to add the notification to send, we return an id to keep track                                       //
  return Push.notifications.insert(notification);                                                             // 93
};                                                                                                            // 94
                                                                                                              //
Push.allow = function (rules) {                                                                               // 96
  if (rules.send) {                                                                                           // 97
    Push.notifications.allow({                                                                                // 98
      'insert': function () {                                                                                 // 99
        function insert(userId, notification) {                                                               // 99
          // Validate the notification                                                                        //
          _validateDocument(notification);                                                                    // 101
          // Set the user defined "send" rules                                                                //
          return rules.send.apply(this, [userId, notification]);                                              // 103
        }                                                                                                     // 104
                                                                                                              //
        return insert;                                                                                        // 99
      }()                                                                                                     // 99
    });                                                                                                       // 98
  }                                                                                                           // 106
};                                                                                                            // 107
                                                                                                              //
Push.deny = function (rules) {                                                                                // 109
  if (rules.send) {                                                                                           // 110
    Push.notifications.deny({                                                                                 // 111
      'insert': function () {                                                                                 // 112
        function insert(userId, notification) {                                                               // 112
          // Validate the notification                                                                        //
          _validateDocument(notification);                                                                    // 114
          // Set the user defined "send" rules                                                                //
          return rules.send.apply(this, [userId, notification]);                                              // 116
        }                                                                                                     // 117
                                                                                                              //
        return insert;                                                                                        // 112
      }()                                                                                                     // 112
    });                                                                                                       // 111
  }                                                                                                           // 119
};                                                                                                            // 120
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"browser.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/raix_push/lib/client/browser.js                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
/* global chrome: false */                                                                                    //
var onNotification = function onNotification(notification) {                                                  // 2
  // alert('onNotification' + JSON.stringify(notification));                                                  //
                                                                                                              //
  // Emit alert event - this requires the app to be in forground                                              //
  if (notification.message && notification.foreground) {                                                      // 6
    Push.emit('alert', notification);                                                                         // 7
  }                                                                                                           // 8
                                                                                                              //
  // Emit sound event                                                                                         //
  if (notification.sound) {                                                                                   // 11
    Push.emit('sound', notification);                                                                         // 12
  }                                                                                                           // 13
                                                                                                              //
  // Emit badge event                                                                                         //
  if (notification.badge) {                                                                                   // 16
    Push.emit('badge', notification);                                                                         // 17
  }                                                                                                           // 18
                                                                                                              //
  // If within thres                                                                                          //
  if (notification.open) {                                                                                    // 21
    Push.emit('startup', notification);                                                                       // 22
  } else {                                                                                                    // 23
    Push.emit('message', notification);                                                                       // 24
  }                                                                                                           // 25
};                                                                                                            // 26
                                                                                                              //
Push.setBadge = function () /* count */{                                                                      // 28
  // XXX: Not implemented                                                                                     //
};                                                                                                            // 30
                                                                                                              //
var isConfigured = false;                                                                                     // 32
                                                                                                              //
Push.Configure = function (options) {                                                                         // 34
  var self = this;                                                                                            // 35
                                                                                                              //
  options = options || {};                                                                                    // 37
                                                                                                              //
  // check(options, {                                                                                         //
  //   gcm: Match.Optional(Match.ObjectIncluding({                                                            //
  //     projectNumber: String                                                                                //
  //   })),                                                                                                   //
  //   apn: Match.Optional(Match.ObjectIncluding({                                                            //
  //     webServiceUrl: String,                                                                               //
  //     websitePushId: String                                                                                //
  //   })),                                                                                                   //
  // });                                                                                                      //
                                                                                                              //
  // Block multiple calls                                                                                     //
  if (isConfigured) {                                                                                         // 50
    throw new Error('Push.Configure should not be called more than once!');                                   // 51
  }                                                                                                           // 52
                                                                                                              //
  isConfigured = true;                                                                                        // 54
                                                                                                              //
  // Add debug info                                                                                           //
  if (Push.debug) {                                                                                           // 57
    console.log('Push.Configure', options);                                                                   // 58
  }                                                                                                           // 59
                                                                                                              //
  // Client-side security warnings                                                                            //
  checkClientSecurity(options);                                                                               // 62
                                                                                                              //
  // Start token updates                                                                                      //
  initPushUpdates(options.appName);                                                                           // 65
                                                                                                              //
  // Add support for the raix:iframe push solution Deprecate this at some                                     //
  // point mid aug 2015                                                                                       //
  if (options.iframe) {                                                                                       // 69
                                                                                                              //
    var coldstart = true;                                                                                     // 71
    var startupTime = new Date();                                                                             // 72
    var startupThreshold = 1000; // ms                                                                        // 73
                                                                                                              //
    var _atStartup = function _atStartup() {                                                                  // 75
      // If startup time is less than startupThreshold ago then lets say this is                              //
      // at startup.                                                                                          //
      return new Date() - startupTime < startupThreshold;                                                     // 78
    };                                                                                                        // 79
                                                                                                              //
    var _parsePayload = function _parsePayload(value) {                                                       // 81
      // Android actually parses payload into an object - this is not the case with                           //
      // iOS (here is it just a string)                                                                       //
      if (value !== '' + value) {                                                                             // 84
        value = JSON.stringify(value);                                                                        // 85
      }                                                                                                       // 86
                                                                                                              //
      // Run the string through ejson                                                                         //
      try {                                                                                                   // 89
        return EJSON.parse(value);                                                                            // 90
      } catch (err) {                                                                                         // 91
        return { error: err };                                                                                // 92
      }                                                                                                       // 93
    };                                                                                                        // 94
                                                                                                              //
    // Rig iframe event listeners                                                                             //
    options.iframe.addEventListener('deviceready', function () {                                              // 97
                                                                                                              //
      // Maintain properties                                                                                  //
                                                                                                              //
      // At initial startup set startup time                                                                  //
      startupTime = new Date();                                                                               // 102
                                                                                                              //
      // Update flag if app coldstart                                                                         //
      options.iframe.addEventListener("pause", function () {                                                  // 105
        coldstart = false;                                                                                    // 106
      }, false);                                                                                              // 107
                                                                                                              //
      options.iframe.addEventListener('resume', function () {                                                 // 109
        // Reset startup time at resume                                                                       //
        startupTime = new Date();                                                                             // 111
      });                                                                                                     // 112
                                                                                                              //
      // EO Maintain properties                                                                               //
                                                                                                              //
      options.iframe.addEventListener('pushLaunch', function (e) {                                            // 116
                                                                                                              //
        if (e.event === 'message') {                                                                          // 118
          // Android event                                                                                    //
                                                                                                              //
          var sound = e.soundname || e.payload.sound;                                                         // 121
                                                                                                              //
          // Only prefix sound if actual text found                                                           //
          if (sound && sound.length) {                                                                        // 124
            sound = '/android_asset/www/' + sound;                                                            // 125
          }                                                                                                   // 126
                                                                                                              //
          // XXX: Investigate if we need more defaults                                                        //
          var unifiedMessage = {                                                                              // 129
            message: e.payload.message || e.msg || '',                                                        // 130
            sound: sound,                                                                                     // 131
            badge: e.payload.msgcnt,                                                                          // 132
            // Coldstart on android is a bit inconsistent - its only set when the                             //
            // notification opens the app                                                                     //
            coldstart: e.coldstart === Boolean(e.coldstart) ? e.coldstart : coldstart,                        // 135
            background: !e.foreground,                                                                        // 136
            foreground: !!e.foreground,                                                                       // 137
            // open: _atStartup(),  // This is the iOS implementation                                         //
            open: e.coldstart === Boolean(e.coldstart), // If set true / false its an open event              // 139
            type: 'gcm.cordova'                                                                               // 140
          };                                                                                                  // 129
                                                                                                              //
          // If payload.ejson this is an object - we hand it over to parsePayload,                            //
          // parsePayload will do the convertion for us                                                       //
          if (e.payload.ejson) {                                                                              // 145
            unifiedMessage.payload = _parsePayload(e.payload.ejson);                                          // 146
          }                                                                                                   // 147
                                                                                                              //
          // Trigger notification                                                                             //
          onNotification(unifiedMessage);                                                                     // 150
        } else {                                                                                              // 152
          // iOS event                                                                                        //
          var sound = e.sound; // jshint ignore: line                                                         // 154
                                                                                                              //
          // Only prefix sound if actual text found                                                           //
          if (sound && sound.length) {                                                                        // 157
            sound = '' + sound;                                                                               // 158
          }                                                                                                   // 159
                                                                                                              //
          // XXX: Investigate if we need more defaults                                                        //
          var unifiedMessage = { // jshint ignore: line                                                       // 162
            message: e.alert,                                                                                 // 163
            sound: sound,                                                                                     // 164
            badge: e.badge,                                                                                   // 165
            coldstart: coldstart,                                                                             // 166
            background: !e.foreground,                                                                        // 167
            foreground: !!e.foreground,                                                                       // 168
            open: _atStartup(),                                                                               // 169
            type: 'apn.cordova'                                                                               // 170
          };                                                                                                  // 162
                                                                                                              //
          // E.ejson should be a string - we send it directly to payload                                      //
          if (e.ejson) {                                                                                      // 174
            unifiedMessage.payload = _parsePayload(e.ejson);                                                  // 175
          }                                                                                                   // 176
                                                                                                              //
          // Trigger notification                                                                             //
          onNotification(unifiedMessage);                                                                     // 179
        }                                                                                                     // 181
      });                                                                                                     // 183
                                                                                                              //
      options.iframe.addEventListener('pushSuccess', function (evt) {                                         // 186
        // Reformat into new event                                                                            //
        self.emit('register', evt.success);                                                                   // 188
      });                                                                                                     // 189
                                                                                                              //
      options.iframe.addEventListener('pushToken', function (evt) {                                           // 191
        if (evt.androidToken) {                                                                               // 192
          // Format the android token                                                                         //
          Push.emitState('token', { gcm: evt.androidToken });                                                 // 194
        } else if (evt.iosToken) {                                                                            // 195
          // Format the ios token                                                                             //
          Push.emitState('token', { apn: evt.iosToken });                                                     // 197
        }                                                                                                     // 198
      });                                                                                                     // 199
                                                                                                              //
      options.iframe.addEventListener('pushError', function (evt) {                                           // 201
        Push.emit('error', { type: 'cordova.browser', error: evt.error || evt });                             // 202
      });                                                                                                     // 203
    });                                                                                                       // 205
  } // EO options iframe                                                                                      // 206
                                                                                                              //
  if (typeof chrome !== 'undefined' && chrome.gcm) {                                                          // 208
    // chrome.gcm api is supported!                                                                           //
    // https://developer.chrome.com/extensions/gcm                                                            //
                                                                                                              //
    // Set max message size                                                                                   //
    // chrome.gcm.MAX_MESSAGE_SIZE = 4096;                                                                    //
                                                                                                              //
    if (options.gcm.projectNumber) {                                                                          // 215
      chrome.gcm.register(options.gcm.projectNumber, function (token) {                                       // 216
        if (token) {                                                                                          // 217
          self.emitState('token', { gcm: token });                                                            // 218
        } else {                                                                                              // 219
          // Error                                                                                            //
          self.emit('error', { type: 'gcm.browser', error: 'Access denied' });                                // 221
        }                                                                                                     // 222
      });                                                                                                     // 223
    }                                                                                                         // 224
  } else if ('safari' in window && 'pushNotification' in window.safari) {                                     // 226
    // https://developer.apple.com/library/mac/documentation/NetworkingInternet/Conceptual/NotificationProgrammingGuideForWebsites/PushNotifications/PushNotifications.html#//apple_ref/doc/uid/TP40013225-CH3-SW1
                                                                                                              //
    if (options.apn) {                                                                                        // 229
                                                                                                              //
      Meteor.startup(function () {                                                                            // 231
        // Ensure that the user can receive Safari Push Notifications.                                        //
        var permissionData = window.safari.pushNotification.permission(options.apn.websitePushId);            // 233
        checkRemotePermission(permissionData);                                                                // 234
      });                                                                                                     // 235
                                                                                                              //
      var checkRemotePermission = function checkRemotePermission(permissionData) {                            // 237
        if (permissionData.permission === 'default') {                                                        // 238
          // This is a new web service URL and its validity is unknown.                                       //
          window.safari.pushNotification.requestPermission(options.apn.webServiceUrl, // The web service URL.
          options.apn.websitePushId, // The Website Push ID.                                                  // 242
          {}, // Data that you choose to send to your server to help you identify the user.                   // 243
          checkRemotePermission // The callback function.                                                     // 244
          );                                                                                                  // 240
        } else if (permissionData.permission === 'denied') {                                                  // 246
            // alert('denied');                                                                               //
            // The user said no.                                                                              //
            self.emit('error', { type: 'apn.browser', error: 'Access denied' });                              // 250
          } else if (permissionData.permission === 'granted') {                                               // 251
            // alert('granted');                                                                              //
            // The web service URL is a valid push provider, and the user said yes.                           //
            // permissionData.deviceToken is now available to use.                                            //
            self.emitState('token', { apn: permissionData.deviceToken });                                     // 256
          }                                                                                                   // 257
      };                                                                                                      // 258
    }                                                                                                         // 260
  } else if (navigator && navigator.push && navigator.push.register && navigator.mozSetMessageHandler) {      // 263
    var channel;                                                                                              // 263
    var pushEndpoint;                                                                                         // 263
                                                                                                              //
    (function () {                                                                                            // 263
      var setupAppRegistrations = function setupAppRegistrations() {                                          // 263
        // jshint ignore: line                                                                                //
        // Issue a register() call                                                                            //
        // to register to listen for a notification,                                                          //
        // you simply call push.register                                                                      //
        // Here, we'll register a channel for "email" updates.                                                //
        // Channels can be for anything the app would like to get notifications for.                          //
        var requestAccess = navigator.push.register();                                                        // 282
                                                                                                              //
        requestAccess.onsuccess = function (e) {                                                              // 284
          // Store the endpoint                                                                               //
          pushEndpoint = e.target.result;                                                                     // 286
                                                                                                              //
          self.emitState('token', {                                                                           // 288
            SimplePush: {                                                                                     // 289
              channel: channel,                                                                               // 290
              endPoint: pushEndpoint                                                                          // 291
            }                                                                                                 // 289
          });                                                                                                 // 288
        };                                                                                                    // 294
      };                                                                                                      // 296
                                                                                                              //
      // Once we've registered, the AppServer can send version pings to the EndPoint.                         //
      // This will trigger a 'push' message to be sent to this handler.                                       //
                                                                                                              //
                                                                                                              //
      // check navigator.mozPush should be enough?                                                            //
      // https://wiki.mozilla.org/WebAPI/SimplePush                                                           //
                                                                                                              //
      channel = 'push';                                                                                       // 267
                                                                                                              //
      // Store the pushEndpoint                                                                               //
                                                                                                              //
      Meteor.startup(function () {                                                                            // 272
        setupAppRegistrations();                                                                              // 273
      });                                                                                                     // 274
                                                                                                              //
      navigator.mozSetMessageHandler('push', function (message) {                                             // 300
        if (message.pushEndpoint === pushEndpoint) {                                                          // 301
          // Did we launch or were we already running?                                                        //
          self.emit('startup', message);                                                                      // 303
        }                                                                                                     // 304
      });                                                                                                     // 305
                                                                                                              //
      // // to unregister, you simply call..                                                                  //
      // AppFramework.addEventListener('user-logout', function() {                                            //
      //   navigator.push.unregister(pushEndpoint);                                                           //
      // });                                                                                                  //
                                                                                                              //
      // error recovery mechanism                                                                             //
      // will be called very rarely, but application                                                          //
      // should register again when it is called                                                              //
      navigator.mozSetMessageHandler('register', function () /* e */{                                         // 315
        setupAppRegistrations();                                                                              // 316
      });                                                                                                     // 317
    })();                                                                                                     // 263
  }                                                                                                           // 321
};                                                                                                            // 323
                                                                                                              //
/*                                                                                                            //
TODO:                                                                                                         //
                                                                                                              //
add event listener api                                                                                        //
                                                                                                              //
*/                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/raix_push/lib/client/client.js                                                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
// Namespaced storage key                                                                                     //
var localStorageKey = '_raix:push_token';                                                                     // 2
                                                                                                              //
// If we are using the accounts system then add the userId to appCollection                                   //
// and monitor for logout                                                                                     //
var addUserId = !!Package['accounts-base'];                                                                   // 6
                                                                                                              //
/*                                                                                                            //
  1. Check if id is already set in localstorage                                                               //
  2. If not then create an app id                                                                             //
  3. Refresh the apn/gcm push token for this app                                                              //
*/                                                                                                            //
                                                                                                              //
var loadLocalstorage = function loadLocalstorage() {                                                          // 14
  var data = {};                                                                                              // 15
                                                                                                              //
  try {                                                                                                       // 17
    // Get the stored object from local storage                                                               //
    data = JSON.parse(localStorage.getItem(localStorageKey));                                                 // 19
  } catch (err) {                                                                                             // 21
    // XXX: Error using the local storage                                                                     //
  }                                                                                                           // 23
                                                                                                              //
  return {                                                                                                    // 25
    // Use a new id if not set                                                                                //
    id: data && data.id || Random.id(),                                                                       // 27
    // Set empty metadata object if nothing loaded                                                            //
    metadata: data && data.metadata || {},                                                                    // 29
    // Set default token                                                                                      //
    token: null                                                                                               // 31
  };                                                                                                          // 25
};                                                                                                            // 33
                                                                                                              //
var saveLocalstorage = function saveLocalstorage(data) {                                                      // 35
  try {                                                                                                       // 36
    // Try setting the id                                                                                     //
    localStorage.setItem(localStorageKey, JSON.stringify(data));                                              // 38
  } catch (err) {                                                                                             // 39
    // XXX: storage error                                                                                     //
  }                                                                                                           // 41
};                                                                                                            // 42
                                                                                                              //
// Set stored object                                                                                          //
var stored = loadLocalstorage();                                                                              // 45
// Reactive id                                                                                                //
var idDep = new Tracker.Dependency();                                                                         // 47
var stateDep = new Tracker.Dependency();                                                                      // 48
                                                                                                              //
// Its either set by localStorage or random                                                                   //
idDep.changed();                                                                                              // 51
                                                                                                              //
var _setEnabled = function _setEnabled(state) {                                                               // 53
  if (stored.enabled !== state) {                                                                             // 54
    stored.enabled = state;                                                                                   // 55
    // Save the stored object                                                                                 //
    saveLocalstorage(stored);                                                                                 // 57
    stateDep.changed();                                                                                       // 58
  }                                                                                                           // 59
};                                                                                                            // 60
                                                                                                              //
Push.id = function () {                                                                                       // 62
  idDep.depend();                                                                                             // 63
  return stored.id;                                                                                           // 64
};                                                                                                            // 65
                                                                                                              //
Push.enabled = function (state) {                                                                             // 67
  if (stored) {                                                                                               // 68
    if (typeof state === 'undefined') {                                                                       // 69
      // Act as a getter                                                                                      //
      stateDep.depend();                                                                                      // 71
      return stored.enabled !== false;                                                                        // 72
    } else {                                                                                                  // 73
      check(state, Boolean);                                                                                  // 74
      if (state !== stored.enabled && stored.id) {                                                            // 75
        // Latency compensation                                                                               //
        _setEnabled(state);                                                                                   // 77
        // Update server                                                                                      //
        Meteor.call('raix:push-enable', {                                                                     // 79
          id: stored.id,                                                                                      // 80
          enabled: state                                                                                      // 81
        }, function (err, found) {                                                                            // 79
          if (err || !found) {                                                                                // 83
            // On error or missing app item, revert                                                           //
            _setEnabled(!state);                                                                              // 85
          }                                                                                                   // 86
        });                                                                                                   // 87
      }                                                                                                       // 88
    }                                                                                                         // 89
  }                                                                                                           // 90
};                                                                                                            // 91
                                                                                                              //
Push.setUser = function () {                                                                                  // 93
  // Let the server update the userId on the id                                                               //
  Meteor.call('raix:push-setuser', stored.id);                                                                // 95
};                                                                                                            // 96
                                                                                                              //
Push.setMetadata = function (data) {                                                                          // 98
  stored.metadata = data;                                                                                     // 99
  saveLocalstorage(stored);                                                                                   // 100
  // Set the metadata on the server collection if we have a token, otherwise                                  //
  // we should only set the metadata in localstorage                                                          //
  if (stored.token) {                                                                                         // 103
    // Update the metadata                                                                                    //
    Meteor.call('raix:push-metadata', {                                                                       // 105
      id: stored.id,                                                                                          // 106
      metadata: stored.metadata                                                                               // 107
    });                                                                                                       // 105
  }                                                                                                           // 109
};                                                                                                            // 110
                                                                                                              //
// Report token to the server                                                                                 //
var reportTokenToServer = function reportTokenToServer(token, appName) {                                      // 113
  // Store the token                                                                                          //
  stored.token = token;                                                                                       // 115
                                                                                                              //
  // Set the data object                                                                                      //
  var data = {                                                                                                // 118
    id: stored.id,                                                                                            // 119
    token: token,                                                                                             // 120
    appName: appName,                                                                                         // 121
    userId: addUserId ? Meteor.userId() : null,                                                               // 122
    metadata: stored.metadata                                                                                 // 123
  };                                                                                                          // 118
                                                                                                              //
  // token.gcm or token.apn                                                                                   //
  Meteor.call('raix:push-update', data, function (err, result) {                                              // 127
    if (!err && result) {                                                                                     // 128
      // The result is the id - The server may update this if it finds a                                      //
      // match for an old install                                                                             //
      if (stored.id !== result._id) {                                                                         // 131
        // The server did match the push token for this device                                                //
        stored.id = result._id;                                                                               // 133
        // Save the stored object                                                                             //
        saveLocalstorage(stored);                                                                             // 135
        // The id has changed.                                                                                //
        idDep.changed();                                                                                      // 137
      }                                                                                                       // 138
                                                                                                              //
      // Make sure enabled is also updated to keep in sync                                                    //
      if (typeof result.enabled !== 'undefined') {                                                            // 141
        _setEnabled(result.enabled);                                                                          // 142
      }                                                                                                       // 143
    }                                                                                                         // 144
  });                                                                                                         // 145
};                                                                                                            // 146
                                                                                                              //
initPushUpdates = function initPushUpdates(appName) {                                                         // 148
  Meteor.startup(function () {                                                                                // 149
    // Start listening for tokens                                                                             //
    Push.on('token', function (token) {                                                                       // 151
      if (Push.debug) {                                                                                       // 152
        console.log('Got token:', token);                                                                     // 153
      }                                                                                                       // 154
      // The app should be ready, lets call in                                                                //
      reportTokenToServer(token, appName || 'main');                                                          // 156
    });                                                                                                       // 157
                                                                                                              //
    // Start listening for user updates if accounts package is added                                          //
    if (addUserId) {                                                                                          // 160
      Tracker.autorun(function () {                                                                           // 161
        // Depend on the userId                                                                               //
        Meteor.userId();                                                                                      // 163
        // Dont run this the first time, its already done in the reportTokenToServer                          //
        if (!this.firstRun) {                                                                                 // 165
          // Update the userId                                                                                //
          Push.setUser();                                                                                     // 167
        }                                                                                                     // 168
      });                                                                                                     // 169
    }                                                                                                         // 170
  });                                                                                                         // 171
};                                                                                                            // 172
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/raix:push/lib/common/main.js");
require("./node_modules/meteor/raix:push/lib/common/notifications.js");
require("./node_modules/meteor/raix:push/lib/client/browser.js");
require("./node_modules/meteor/raix:push/lib/client/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['raix:push'] = {}, {
  Push: Push,
  _matchToken: _matchToken,
  checkClientSecurity: checkClientSecurity,
  initPushUpdates: initPushUpdates,
  _replaceToken: _replaceToken,
  _removeToken: _removeToken
});

})();
