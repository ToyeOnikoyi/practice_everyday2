Router.configure ({
  layoutTemplate : 'layout',

});

Router.route('/', {
name: 'homeIndex',


})

Router.route('/confirm', {
name: 'confirm',

/*onBeforeAction: function(){
  var currentUser = Meteor.userId();
  if(countdown.start())
    {
    //    this.render('practiceToday');

    }else{
      this.next();
         }
}*/
});

Router.route('/noConfirm', {
name: 'noConfirm',


});

Router.route('/oops', {
name: 'oops',


});

Router.route('/dayOffTaken', {
name: 'dayOffTaken',


});


Router.route('/practiceToday', {
name: 'practiceToday',


});

Router.route('/success', {
name: 'success',


});



Router.route('/settings', {
name: 'settings',


});
