Meteor.methods({
  newMessage: function(message) {
    message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message);
  },
  updateVisited: function(channel) {
    ChannelUsers.upsert(
      { user: Meteor.userId(), channel: channel },
      { $set: { lastVisited: Date.now() }}
    );
  }
});
