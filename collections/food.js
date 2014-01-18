Food = new Meteor.Collection('food');

Food.allow({
	update: ownsDocument,
	remove: ownsDocument
});

/*Food.deny({
	update: function(userId, food, fieldNames) {
		// may only edit the following fields:
		return (_.without(fieldsNames, 'name', 'price', 'description') > 0);
	}
});*/


Meteor.methods({
	submitFood: function(foodAttributes) {
		var user = Meteor.user();
		
		// ensure the user is logged in
		if (!user) {
			throw new Meteor.Error(401, "You need to login to post new stories");
		}
		
		// ensure the food has a name
		if (!foodAttributes.name) {
			throw new Meteor.Error(422, 'Please enter a name');
		}
		
		// ensure the food has a price
		// TODO: Format price?
		if (!foodAttributes.price) {
			throw new Meteor.Error(422, 'Please enter a price');
		}

		// TODO: Check for duplicate names in the same restaurant
		
		var food = _.extend(_.pick(foodAttributes,
			'name', 'price', 'description'), {
				userId: user._id,
				author: user.username,
				submitted: new Date().getTime()
		});
		
		var foodId = Food.insert(food);
		
		return foodId;
	}
});