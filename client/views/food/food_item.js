Template.foodItem.helpers({
	ownFood: function() {
		return this.userId === Meteor.userId();
	}
});