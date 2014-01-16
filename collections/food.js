Food = new Meteor.Collection('food');

Food.allow({
	insert: function(userId, doc) {
		// only allow adding food if user is logged in
		return !! userId;
	}
});
