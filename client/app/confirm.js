Template.confirm.onCreated( () => {

Meteor.subscribe('myStreaks');
});

Template.confirm.helpers({


});

Template.confirm.events({
'click .confirm': function(event){
  event.preventDefault();
var noStreaks = Streaks.find().count();

  Meteor.call('addStreaks');
  console.log('streaks increassed');
  Router.go('/success');
},
'click .confirmAgain': function(event){
  event.preventDefault();
var noStreaks = Streaks.find().count();

  Meteor.call('addStreaks');
  console.log('streaks increassed');

},
'click .notToday': function(event){
  event.preventDefault();

}

});
