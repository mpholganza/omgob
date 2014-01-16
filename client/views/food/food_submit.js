Template.foodSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var food = {
			name: $(e.target).find('[name=name]').val(),
			price: $(e.target).find('[name=price]').val(),
			description: $(e.target).find('[name=description]').val()
		}
		
		food._id = Food.insert(food);
		Router.go('foodPage', food);
	}
});