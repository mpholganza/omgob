Template.foodEdit.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var currentFoodId = this._id;
		
		var foodProperties = {
			name: $(e.target).find('[name=name]').val(),
			price: $(e.target).find('[name=price]').val(),
			description: $(e.target).find('[name=description]').val()
		};
		
		Food.update(currentFoodId, {$set: foodProperties}, function(error) {
			if (error) {
				// display error
				alert(error.reason);
			} else {
				Router.go('foodPage', {_id: currentFoodId});
			}
		});
	},
	'click .delete': function(e) {
		e.preventDefault();
		
		if (confirm("Delete this post?")) {
			var currentFoodId = this._id;
			Food.remove(currentFoodId);
			Router.go('foodList');
		}
	}
});
