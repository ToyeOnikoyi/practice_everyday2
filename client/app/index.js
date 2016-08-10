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
   //buttons for clock to set time of practice
   'click .oneAM':function(event,instance){
     event.preventDefault();
     instance.counter.set(moment("1:00","h:mm").format("hh:mm "));
   },
   'click .twoAM':function(event,instance){
     event.preventDefault();
     instance.counter.set(moment("2:00","h:mm").format("hh:mm "));
   },
   'click .threeAM':function(event,instance){
     event.preventDefault();
     instance.counter.set(moment("3:00","h:mm").format("hh:mm "));
   },
   'click .fourAM':function(event,instance){
     event.preventDefault();
     instance.counter.set(moment("4:00","h:mm").format("hh:mm "));
   },
   'click .fiveAM':function(event,instance){
     event.preventDefault();
     instance.counter.set(moment("5:00","h:mm").format("hh:mm "));
   },
   'click .sixAM':function(event,instance){
     event.preventDefault();
     instance.counter.set(moment("6:00","h:mm").format("hh:mm "));
   },
   'click .sevenAM':function(event,instance){
     event.preventDefault();
     instance.counter.set(moment("7:00","h:mm").format("hh:mm "));
   },
   'click .eightAM':function(event,instance){
     event.preventDefault();
     instance.counter.set(moment("8:00","h:mm").format("hh:mm "));
   },

   'click .confirmPracticeTime':function(event,instance){
     event.preventDefault();
     console.log("you have confirmed your practice time at "
      + instance.counter.get()+ "set push notification here")
Bert.alert('you have confirmed your practice time at ' +  instance.counter.get(),'success','growl-top-right');

   }


});
