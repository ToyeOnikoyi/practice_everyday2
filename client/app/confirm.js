Template.confirm.onCreated( () => {

Meteor.subscribe('myStreaks');
var countdown = new ReactiveCountdown(24, {
  // Value substracted every tick from the current countdown value
 steps: 1,

 // Specify the countdown's interval in milliseconds
 interval: 3600,

 // Callback: Tick, called on every interval
 tick: function() {},

 // Callback: Complete, called when the countdown has reached 0
 completed: function() {},


})
countdown.start(function() {

    // do something when this is completed

});

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
if(noStreaks == 0){
    Meteor.call('addStreaks',true);

}
/*countdown.start(function(){

//Meteor.call('updateToZero');
console.log('hello');
});*/
//if(countdown.start()){
      Bert.alert('You cant do that twice in one day','success','growl-top-right');
//}

if(Streaks.checkStreakToday = false){
  Meteor.call('addStreaks',true);
}

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
