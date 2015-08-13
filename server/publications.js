Meteor.publish('messages', function(channel) {
  return Messages.find({channel: channel});
});

Meteor.publish('allUsernames', function() {
  return Meteor.users.find({}, {fields: {
    "username": true
  }});
});

Meteor.publish('channels', function() {
  return Channels.find();
});

Meteor.publish('allChannelUsers', function() {
  return ChannelUsers.find({});
});
