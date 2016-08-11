Template.confirm.onCreated( () => {

Meteor.subscribe('myStreaks');
var countdown = new ReactiveCountdown(24, {
  // Value substracted every tick from the current countdown value
 steps: 1,

 // Specify the countdown's interval in milliseconds
 interval: 3600000,

 // Callback: Tick, called on every interval
 tick: function() {},

 // Callback: Complete, called when the countdown has reached 0
 completed: function() {},


})

});

Template.confirm.helpers({

getCountdown () {

  return countdown.get();
}

});

Template.confirm.events({
'click .confirm': function(event){
  event.preventDefault();
var noStreaks = Streaks.find().count();
countdown.start(function(){


});
  Meteor.call('addStreaks');


  console.log('streaks increassed');
  Router.go('/success');
},

'click .confirmAgain': function(event){
  event.preventDefault();
var noStreaks = Streaks.find().count();

  Meteor.call('addStreaks');
  console.log('streaks increassed');
  Router.go('/');
},


});
