Meteor.subscribe('allUsernames');
Meteor.subscribe('channels');

Template.messages.onCreated(function() {
  Tracker.autorun(function() {
    this.subscribe('messages', Session.get('channel'));
  }.bind(this));
});
