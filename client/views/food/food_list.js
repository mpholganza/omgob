Template.foodList.helpers({
  foodList: function() {
    return Food.find();
  }
});
