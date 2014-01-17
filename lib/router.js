Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('food'); }
});

Router.map(function() {
  this.route('foodList', {path: '/'});
  this.route('foodPage', {
    path: '/food/:_id',
		data: function () { return Food.findOne(this.params._id); }
  });
	this.route('foodSubmit', {
		path: '/submitFood'
	});
});

var requireLogin = function() {
	if (!Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied');
		}
		this.stop();
	}
}

Router.before(requireLogin, {only: 'foodSubmit'});
