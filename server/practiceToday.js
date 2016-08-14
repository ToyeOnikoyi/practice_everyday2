Meteor.publish('myStreaks', function(){

var currentUser = this.userId;
return Streaks.find({});



});

Meteor.methods({
'addStreaks':function (flag){
var currentUser = Meteor.user();

Streaks.upsert({
  owner:currentUser,
  checkStreakToday: flag,
},{$inc: {streaks:1}});

},
'updateToZero':function(){

  Streaks.update({},{$set: {streaks:0, checkStreakToday:false}});
}


})
