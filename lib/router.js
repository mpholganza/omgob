Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('food'); }
});

Router.map(function() {
  this.route('foodList', {path: '/'});
});

