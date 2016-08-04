Template.practiceToday.onCreated( () => {

Meteor.subscribe('myStreaks');
});

Template.practiceToday.helpers({
streak () {

    return Streaks.find({});
}

});

Template.practiceToday.events({
'click .thumbUp': function(event){
  event.preventDefault();
var noStreaks = Streaks.find().count();

  Meteor.call('addStreaks');
  console.log('streaks increassed');
  Router.go('/confirm');
},
'click .notToday': function(event){
  event.preventDefault();

}

});
