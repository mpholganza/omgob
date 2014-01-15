Meteor.publish('food', function() {
  return Food.find();
});

