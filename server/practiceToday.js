Meteor.publish('myStreaks', function(){

var currentUser = this.userId;
return Streaks.find({});



});

Meteor.methods({
'addStreaks':function (addNumber){
var currentUser = Meteor.user();

Streaks.upsert({
  owner:currentUser,

},{$inc: {streaks:1}});

},



})
