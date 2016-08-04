Template.homeIndex.onCreated( function helloOnCreated()  {


  this.counter = new ReactiveVar(0);

});

Template.homeIndex.helpers({

  counter () {
      return Template.instance().counter.get();

  }

})


Template.homeIndex.events({

  'click .btn-facebook':function(event){
    event.preventDefault();
    Meteor.loginWithFacebook(function(err){
      if(!err) {
          Router.go('/');
               }
      });
   },

   'click .logout': function(event) {
      event.preventDefault();
      Meteor.logout();
   },

   'click .oneAM':function(event,instance){
     event.preventDefault();
     instance.counter.set("1:00");
   },
   'click .twoAM':function(event,instance){
     event.preventDefault();
     instance.counter.set("2:00");
   },
   'click .threeAM':function(event,instance){
     event.preventDefault();
     instance.counter.set("3:00");
   },
   'click .fourAM':function(event,instance){
     event.preventDefault();
     instance.counter.set("4:00");
   },
   'click .fiveAM':function(event,instance){
     event.preventDefault();
     instance.counter.set("5:00");
   },
   'click .sixAM':function(event,instance){
     event.preventDefault();
     instance.counter.set("6:00");
   },
   'click .sevenAM':function(event,instance){
     event.preventDefault();
     instance.counter.set("7:00");
   },
   'click .eightAM':function(event,instance){
     event.preventDefault();
     instance.counter.set("8:00");
   },


});
