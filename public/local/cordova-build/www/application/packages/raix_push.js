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
var Push, initPushUpdates, _matchToken, checkClientSecurity, _replaceToken, _removeToken;

var require = meteorInstall({"node_modules":{"meteor":{"raix:push":{"lib":{"client":{"cordova.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/raix_push/lib/client/cordova.js                                                                  //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                      //
                                                                                                             //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                             //
                                                                                                             //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                //
                                                                                                             //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                       //
                                                                                                             //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                  //
                                                                                                             //
var _inherits3 = _interopRequireDefault(_inherits2);                                                         //
                                                                                                             //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }            //
                                                                                                             //
/* global device: false */                                                                                   //
/* global PushNotification: false */                                                                         //
var getService = function getService() {                                                                     // 3
  if (/android/i.test(device.platform)) {                                                                    // 4
    return 'gcm';                                                                                            // 5
  } else if (/ios/i.test(device.platform)) {                                                                 // 6
    return 'apn';                                                                                            // 7
  } else if (/win/i.test(device.platform)) {                                                                 // 8
    return 'mpns';                                                                                           // 9
  }                                                                                                          // 10
                                                                                                             //
  return 'unknown';                                                                                          // 12
};                                                                                                           // 13
                                                                                                             //
/**                                                                                                          //
 * https://github.com/phonegap/phonegap-plugin-push#pushnotificationinitoptions                              //
 */                                                                                                          //
                                                                                                             //
var PushHandle = function (_EventState) {                                                                    //
  (0, _inherits3['default'])(PushHandle, _EventState);                                                       //
                                                                                                             //
  function PushHandle() {                                                                                    // 19
    (0, _classCallCheck3['default'])(this, PushHandle);                                                      // 19
                                                                                                             //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _EventState.call(this));                   // 19
                                                                                                             //
    _this.configured = false;                                                                                // 21
    _this.debug = false;                                                                                     // 22
    _this.token = null;                                                                                      // 23
    return _this;                                                                                            // 19
  }                                                                                                          // 24
                                                                                                             //
  PushHandle.prototype.log = function log() {                                                                //
    if (this.debug) {                                                                                        // 26
      var _console;                                                                                          // 26
                                                                                                             //
      (_console = console).log.apply(_console, arguments);                                                   // 27
    }                                                                                                        // 28
  };                                                                                                         // 29
                                                                                                             //
  PushHandle.prototype.setBadge = function setBadge(count) {                                                 //
    var _this2 = this;                                                                                       // 30
                                                                                                             //
    this.once('ready', function () {                                                                         // 31
      if (/ios/i.test(device.platform)) {                                                                    // 32
        _this2.log('Push.setBadge:', count);                                                                 // 33
        // xxx: at the moment only supported on iOS                                                          //
        _this2.push.setApplicationIconBadgeNumber(function () {                                              // 35
          _this2.log('Push.setBadge: was set to', count);                                                    // 36
        }, function (e) {                                                                                    // 37
          _this2.emit('error', {                                                                             // 38
            type: getService() + '.cordova',                                                                 // 39
            error: 'Push.setBadge Error: ' + e.message                                                       // 40
          });                                                                                                // 38
        }, count);                                                                                           // 42
      }                                                                                                      // 44
    });                                                                                                      // 45
  };                                                                                                         // 46
                                                                                                             //
  PushHandle.prototype.unregister = function unregister(successHandler, errorHandler) {                      //
    if (this.push) {                                                                                         // 48
      this.push.unregister(successHandler, errorHandler);                                                    // 49
    } else {                                                                                                 // 50
      errorHandler(new Error('Push.unregister, Error: "Push not configured"'));                              // 51
    }                                                                                                        // 52
  };                                                                                                         // 53
                                                                                                             //
  PushHandle.prototype.Configure = function Configure() {                                                    //
    var _this3 = this,                                                                                       // 54
        _arguments = arguments;                                                                              // 54
                                                                                                             //
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];                   // 54
                                                                                                             //
                                                                                                             //
    if (!this.configured) {                                                                                  // 56
      this.log('Push.Configure:', options);                                                                  // 57
                                                                                                             //
      this.configured = true;                                                                                // 59
                                                                                                             //
      Meteor.startup(function () {                                                                           // 61
                                                                                                             //
        if (typeof PushNotification !== 'undefined') {                                                       // 63
                                                                                                             //
          _this3.push = PushNotification.init(options);                                                      // 65
                                                                                                             //
          _this3.push.on('registration', function (data) {                                                   // 67
                                                                                                             //
            // xxx: we need to check that the token has changed before emitting                              //
            // a new token state - sometimes this event is triggered twice                                   //
            if (data && data.registrationId && _this3.token !== data.registrationId) {                       // 71
              var _token;                                                                                    // 71
                                                                                                             //
              _this3.token = data.registrationId;                                                            // 72
                                                                                                             //
              var token = (_token = {}, _token[getService()] = data.registrationId, _token);                 // 74
              _this3.log('Push.Token:', token);                                                              // 77
              _this3.emitState('token', token);                                                              // 78
            }                                                                                                // 79
                                                                                                             //
            _this3.emitState.apply(_this3, ['registration'].concat(Array.prototype.slice.call(_arguments)));
          });                                                                                                // 82
                                                                                                             //
          _this3.push.on('notification', function (data) {                                                   // 84
            _this3.log('Push.Notification:', data);                                                          // 85
            // xxx: check ejson support on "additionalData" json object                                      //
                                                                                                             //
            if (data.additionalData.ejson) {                                                                 // 88
              if (data.additionalData.ejson === '' + data.additionalData.ejson) {                            // 89
                try {                                                                                        // 90
                  data.payload = EJSON.parse(data.additionalData.ejson);                                     // 91
                  _this3.log('Push.Parsed.EJSON.Payload:', data.payload);                                    // 92
                } catch (err) {                                                                              // 93
                  _this3.log('Push.Parsed.EJSON.Payload.Error', err.message, data.payload);                  // 94
                }                                                                                            // 95
              } else {                                                                                       // 96
                data.payload = EJSON.fromJSONValue(data.additionalData.ejson);                               // 97
                _this3.log('Push.EJSON.Payload:', data.payload);                                             // 98
              }                                                                                              // 99
            }                                                                                                // 100
                                                                                                             //
            // Emit alert event - this requires the app to be in forground                                   //
            if (data.message && data.additionalData.foreground) {                                            // 103
              _this3.emit('alert', data);                                                                    // 104
            }                                                                                                // 105
                                                                                                             //
            // Emit sound event                                                                              //
            if (data.sound) {                                                                                // 108
              _this3.emit('sound', data);                                                                    // 109
            }                                                                                                // 110
                                                                                                             //
            // Emit badge event                                                                              //
            if (typeof data.count !== 'undefined') {                                                         // 113
              _this3.log('Push.SettingBadge:', data.count);                                                  // 114
              _this3.setBadge(data.count);                                                                   // 115
              _this3.emit('badge', data);                                                                    // 116
            }                                                                                                // 117
                                                                                                             //
            if (data.additionalData.foreground) {                                                            // 119
              _this3.log('Push.Message: Got message while app is open:', data);                              // 120
              _this3.emit('message', data);                                                                  // 121
            } else {                                                                                         // 122
              _this3.log('Push.Startup: Got message while app was closed/in background:', data);             // 123
              _this3.emitState('startup', data);                                                             // 124
            }                                                                                                // 125
                                                                                                             //
            _this3.emitState();                                                                              // 127
          });                                                                                                // 128
                                                                                                             //
          _this3.push.on('error', function (e) {                                                             // 130
            _this3.log('Push.Error:', e);                                                                    // 131
            _this3.emit('error', {                                                                           // 132
              type: getService() + '.cordova',                                                               // 133
              error: e.message                                                                               // 134
            });                                                                                              // 132
          });                                                                                                // 136
                                                                                                             //
          _this3.emitState('ready');                                                                         // 138
        }                                                                                                    // 139
      });                                                                                                    // 141
                                                                                                             //
      initPushUpdates(options.appName);                                                                      // 143
    } else {                                                                                                 // 144
      this.log('Push.Error: "Push.Configure may only be called once"');                                      // 145
      throw new Error('Push.Configure may only be called once');                                             // 146
    }                                                                                                        // 147
  };                                                                                                         // 148
                                                                                                             //
  return PushHandle;                                                                                         //
}(EventState);                                                                                               //
                                                                                                             //
Push = new PushHandle();                                                                                     // 151
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"client.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/raix_push/lib/client/client.js                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// Namespaced storage key                                                                                    //
var localStorageKey = '_raix:push_token';                                                                    // 2
                                                                                                             //
// If we are using the accounts system then add the userId to appCollection                                  //
// and monitor for logout                                                                                    //
var addUserId = !!Package['accounts-base'];                                                                  // 6
                                                                                                             //
/*                                                                                                           //
  1. Check if id is already set in localstorage                                                              //
  2. If not then create an app id                                                                            //
  3. Refresh the apn/gcm push token for this app                                                             //
*/                                                                                                           //
                                                                                                             //
var loadLocalstorage = function loadLocalstorage() {                                                         // 14
  var data = {};                                                                                             // 15
                                                                                                             //
  try {                                                                                                      // 17
    // Get the stored object from local storage                                                              //
    data = JSON.parse(localStorage.getItem(localStorageKey));                                                // 19
  } catch (err) {                                                                                            // 21
    // XXX: Error using the local storage                                                                    //
  }                                                                                                          // 23
                                                                                                             //
  return {                                                                                                   // 25
    // Use a new id if not set                                                                               //
    id: data && data.id || Random.id(),                                                                      // 27
    // Set empty metadata object if nothing loaded                                                           //
    metadata: data && data.metadata || {},                                                                   // 29
    // Set default token                                                                                     //
    token: null                                                                                              // 31
  };                                                                                                         // 25
};                                                                                                           // 33
                                                                                                             //
var saveLocalstorage = function saveLocalstorage(data) {                                                     // 35
  try {                                                                                                      // 36
    // Try setting the id                                                                                    //
    localStorage.setItem(localStorageKey, JSON.stringify(data));                                             // 38
  } catch (err) {                                                                                            // 39
    // XXX: storage error                                                                                    //
  }                                                                                                          // 41
};                                                                                                           // 42
                                                                                                             //
// Set stored object                                                                                         //
var stored = loadLocalstorage();                                                                             // 45
// Reactive id                                                                                               //
var idDep = new Tracker.Dependency();                                                                        // 47
var stateDep = new Tracker.Dependency();                                                                     // 48
                                                                                                             //
// Its either set by localStorage or random                                                                  //
idDep.changed();                                                                                             // 51
                                                                                                             //
var _setEnabled = function _setEnabled(state) {                                                              // 53
  if (stored.enabled !== state) {                                                                            // 54
    stored.enabled = state;                                                                                  // 55
    // Save the stored object                                                                                //
    saveLocalstorage(stored);                                                                                // 57
    stateDep.changed();                                                                                      // 58
  }                                                                                                          // 59
};                                                                                                           // 60
                                                                                                             //
Push.id = function () {                                                                                      // 62
  idDep.depend();                                                                                            // 63
  return stored.id;                                                                                          // 64
};                                                                                                           // 65
                                                                                                             //
Push.enabled = function (state) {                                                                            // 67
  if (stored) {                                                                                              // 68
    if (typeof state === 'undefined') {                                                                      // 69
      // Act as a getter                                                                                     //
      stateDep.depend();                                                                                     // 71
      return stored.enabled !== false;                                                                       // 72
    } else {                                                                                                 // 73
      check(state, Boolean);                                                                                 // 74
      if (state !== stored.enabled && stored.id) {                                                           // 75
        // Latency compensation                                                                              //
        _setEnabled(state);                                                                                  // 77
        // Update server                                                                                     //
        Meteor.call('raix:push-enable', {                                                                    // 79
          id: stored.id,                                                                                     // 80
          enabled: state                                                                                     // 81
        }, function (err, found) {                                                                           // 79
          if (err || !found) {                                                                               // 83
            // On error or missing app item, revert                                                          //
            _setEnabled(!state);                                                                             // 85
          }                                                                                                  // 86
        });                                                                                                  // 87
      }                                                                                                      // 88
    }                                                                                                        // 89
  }                                                                                                          // 90
};                                                                                                           // 91
                                                                                                             //
Push.setUser = function () {                                                                                 // 93
  // Let the server update the userId on the id                                                              //
  Meteor.call('raix:push-setuser', stored.id);                                                               // 95
};                                                                                                           // 96
                                                                                                             //
Push.setMetadata = function (data) {                                                                         // 98
  stored.metadata = data;                                                                                    // 99
  saveLocalstorage(stored);                                                                                  // 100
  // Set the metadata on the server collection if we have a token, otherwise                                 //
  // we should only set the metadata in localstorage                                                         //
  if (stored.token) {                                                                                        // 103
    // Update the metadata                                                                                   //
    Meteor.call('raix:push-metadata', {                                                                      // 105
      id: stored.id,                                                                                         // 106
      metadata: stored.metadata                                                                              // 107
    });                                                                                                      // 105
  }                                                                                                          // 109
};                                                                                                           // 110
                                                                                                             //
// Report token to the server                                                                                //
var reportTokenToServer = function reportTokenToServer(token, appName) {                                     // 113
  // Store the token                                                                                         //
  stored.token = token;                                                                                      // 115
                                                                                                             //
  // Set the data object                                                                                     //
  var data = {                                                                                               // 118
    id: stored.id,                                                                                           // 119
    token: token,                                                                                            // 120
    appName: appName,                                                                                        // 121
    userId: addUserId ? Meteor.userId() : null,                                                              // 122
    metadata: stored.metadata                                                                                // 123
  };                                                                                                         // 118
                                                                                                             //
  // token.gcm or token.apn                                                                                  //
  Meteor.call('raix:push-update', data, function (err, result) {                                             // 127
    if (!err && result) {                                                                                    // 128
      // The result is the id - The server may update this if it finds a                                     //
      // match for an old install                                                                            //
      if (stored.id !== result._id) {                                                                        // 131
        // The server did match the push token for this device                                               //
        stored.id = result._id;                                                                              // 133
        // Save the stored object                                                                            //
        saveLocalstorage(stored);                                                                            // 135
        // The id has changed.                                                                               //
        idDep.changed();                                                                                     // 137
      }                                                                                                      // 138
                                                                                                             //
      // Make sure enabled is also updated to keep in sync                                                   //
      if (typeof result.enabled !== 'undefined') {                                                           // 141
        _setEnabled(result.enabled);                                                                         // 142
      }                                                                                                      // 143
    }                                                                                                        // 144
  });                                                                                                        // 145
};                                                                                                           // 146
                                                                                                             //
initPushUpdates = function initPushUpdates(appName) {                                                        // 148
  Meteor.startup(function () {                                                                               // 149
    // Start listening for tokens                                                                            //
    Push.on('token', function (token) {                                                                      // 151
      if (Push.debug) {                                                                                      // 152
        console.log('Got token:', token);                                                                    // 153
      }                                                                                                      // 154
      // The app should be ready, lets call in                                                               //
      reportTokenToServer(token, appName || 'main');                                                         // 156
    });                                                                                                      // 157
                                                                                                             //
    // Start listening for user updates if accounts package is added                                         //
    if (addUserId) {                                                                                         // 160
      Tracker.autorun(function () {                                                                          // 161
        // Depend on the userId                                                                              //
        Meteor.userId();                                                                                     // 163
        // Dont run this the first time, its already done in the reportTokenToServer                         //
        if (!this.firstRun) {                                                                                // 165
          // Update the userId                                                                               //
          Push.setUser();                                                                                    // 167
        }                                                                                                    // 168
      });                                                                                                    // 169
    }                                                                                                        // 170
  });                                                                                                        // 171
};                                                                                                           // 172
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"common":{"notifications.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/raix_push/lib/common/notifications.js                                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// Notifications collection                                                                                  //
Push.notifications = new Mongo.Collection('_raix_push_notifications');                                       // 2
                                                                                                             //
// This is a general function to validate that the data added to notifications                               //
// is in the correct format. If not this function will throw errors                                          //
var _validateDocument = function _validateDocument(notification) {                                           // 6
                                                                                                             //
  // Check the general notification                                                                          //
  check(notification, {                                                                                      // 9
    from: String,                                                                                            // 10
    title: String,                                                                                           // 11
    text: String,                                                                                            // 12
    badge: Match.Optional(Number),                                                                           // 13
    sound: Match.Optional(String),                                                                           // 14
    notId: Match.Optional(Match.Integer),                                                                    // 15
    apn: Match.Optional({                                                                                    // 16
      from: Match.Optional(String),                                                                          // 17
      title: Match.Optional(String),                                                                         // 18
      text: Match.Optional(String),                                                                          // 19
      badge: Match.Optional(Number),                                                                         // 20
      sound: Match.Optional(String),                                                                         // 21
      notId: Match.Optional(Match.Integer)                                                                   // 22
    }),                                                                                                      // 16
    gcm: Match.Optional({                                                                                    // 24
      from: Match.Optional(String),                                                                          // 25
      title: Match.Optional(String),                                                                         // 26
      text: Match.Optional(String),                                                                          // 27
      badge: Match.Optional(Number),                                                                         // 28
      sound: Match.Optional(String),                                                                         // 29
      notId: Match.Optional(Match.Integer)                                                                   // 30
    }),                                                                                                      // 24
    query: Match.Optional(String),                                                                           // 32
    token: Match.Optional(_matchToken),                                                                      // 33
    tokens: Match.Optional([_matchToken]),                                                                   // 34
    payload: Match.Optional(Object),                                                                         // 35
    delayUntil: Match.Optional(Date),                                                                        // 36
    createdAt: Date,                                                                                         // 37
    createdBy: Match.OneOf(String, null)                                                                     // 38
  });                                                                                                        // 9
                                                                                                             //
  // Make sure a token selector or query have been set                                                       //
  if (!notification.token && !notification.tokens && !notification.query) {                                  // 42
    throw new Error('No token selector or query found');                                                     // 43
  }                                                                                                          // 44
                                                                                                             //
  // If tokens array is set it should not be empty                                                           //
  if (notification.tokens && !notification.tokens.length) {                                                  // 47
    throw new Error('No tokens in array');                                                                   // 48
  }                                                                                                          // 49
};                                                                                                           // 50
                                                                                                             //
Push.send = function (options) {                                                                             // 52
  // If on the client we set the user id - on the server we need an option                                   //
  // set or we default to "<SERVER>" as the creator of the notification                                      //
  // If current user not set see if we can set it to the logged in user                                      //
  // this will only run on the client if Meteor.userId is available                                          //
  var currentUser = Meteor.isClient && Meteor.userId && Meteor.userId() || Meteor.isServer && (options.createdBy || '<SERVER>') || null;
                                                                                                             //
  // Rig the notification object                                                                             //
  var notification = _.extend({                                                                              // 61
    createdAt: new Date(),                                                                                   // 62
    createdBy: currentUser                                                                                   // 63
  }, _.pick(options, 'from', 'title', 'text'));                                                              // 61
                                                                                                             //
  // Add extra                                                                                               //
  _.extend(notification, _.pick(options, 'payload', 'badge', 'sound', 'notId', 'delayUntil'));               // 67
                                                                                                             //
  if (Match.test(options.apn, Object)) {                                                                     // 69
    notification.apn = _.pick(options.apn, 'from', 'title', 'text', 'badge', 'sound', 'notId');              // 70
  }                                                                                                          // 71
                                                                                                             //
  if (Match.test(options.gcm, Object)) {                                                                     // 73
    notification.gcm = _.pick(options.gcm, 'from', 'title', 'text', 'badge', 'sound', 'notId');              // 74
  }                                                                                                          // 75
                                                                                                             //
  // Set one token selector, this can be token, array of tokens or query                                     //
  if (options.query) {                                                                                       // 78
    // Set query to the json string version fixing #43 and #39                                               //
    notification.query = JSON.stringify(options.query);                                                      // 80
  } else if (options.token) {                                                                                // 81
    // Set token                                                                                             //
    notification.token = options.token;                                                                      // 83
  } else if (options.tokens) {                                                                               // 84
    // Set tokens                                                                                            //
    notification.tokens = options.tokens;                                                                    // 86
  }                                                                                                          // 87
                                                                                                             //
  // Validate the notification                                                                               //
  _validateDocument(notification);                                                                           // 90
                                                                                                             //
  // Try to add the notification to send, we return an id to keep track                                      //
  return Push.notifications.insert(notification);                                                            // 93
};                                                                                                           // 94
                                                                                                             //
Push.allow = function (rules) {                                                                              // 96
  if (rules.send) {                                                                                          // 97
    Push.notifications.allow({                                                                               // 98
      'insert': function insert(userId, notification) {                                                      // 99
        // Validate the notification                                                                         //
        _validateDocument(notification);                                                                     // 101
        // Set the user defined "send" rules                                                                 //
        return rules.send.apply(this, [userId, notification]);                                               // 103
      }                                                                                                      // 104
    });                                                                                                      // 98
  }                                                                                                          // 106
};                                                                                                           // 107
                                                                                                             //
Push.deny = function (rules) {                                                                               // 109
  if (rules.send) {                                                                                          // 110
    Push.notifications.deny({                                                                                // 111
      'insert': function insert(userId, notification) {                                                      // 112
        // Validate the notification                                                                         //
        _validateDocument(notification);                                                                     // 114
        // Set the user defined "send" rules                                                                 //
        return rules.send.apply(this, [userId, notification]);                                               // 116
      }                                                                                                      // 117
    });                                                                                                      // 111
  }                                                                                                          // 119
};                                                                                                           // 120
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/raix:push/lib/client/cordova.js");
require("./node_modules/meteor/raix:push/lib/common/notifications.js");
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
