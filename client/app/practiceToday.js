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

  Router.go('/confirm');
},
'click .notToday': function(event){
  event.preventDefault();
Router.go('/noConfirm');
}

});
