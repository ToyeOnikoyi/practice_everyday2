(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var Platform, IonActionSheet, IonBackdrop, IonHeaderBar, IonKeyboard, IonLoading, IonModal, IonNavigation, IonPopover, IonPopup, IonSideMenu;



/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteoric:ionic'] = {}, {
  Platform: Platform,
  IonActionSheet: IonActionSheet,
  IonBackdrop: IonBackdrop,
  IonHeaderBar: IonHeaderBar,
  IonKeyboard: IonKeyboard,
  IonLoading: IonLoading,
  IonModal: IonModal,
  IonNavigation: IonNavigation,
  IonPopover: IonPopover,
  IonPopup: IonPopup,
  IonSideMenu: IonSideMenu
});

})();
