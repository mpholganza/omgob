Template.foodList.helpers({
  foodList: function() {
    return Food.find({}, {sort: {submitted: -1}});
  }
});
