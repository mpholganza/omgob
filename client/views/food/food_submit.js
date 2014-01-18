Template.foodSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var food = {
			name: $(e.target).find('[name=name]').val(),
			price: $(e.target).find('[name=price]').val(),
			description: $(e.target).find('[name=description]').val()
		};
		
		Meteor.call('submitFood', food, function(error, id) {
			if (error) {
				return alert(error.reason)
			}
			
			Router.go('foodPage', {_id: id});
		});
	}
});