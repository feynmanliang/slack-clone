Meteor.methods({
  createOrJoinChannel: function(channelName) {
    Channels.upsert(
      { name: channelName },
      { $set : {name: channelName} }
    );
    ChannelUsers.upsert(
      { user: Meteor.userId(), channel: channelName },
      { $set : { numUnread: 0 } }
    );
  },
  newMessage: function(message) {
    // Add message to MongoDB
    message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message);

    // Update NumUnread
    console.log(message.channel);
    ChannelUsers.update(
      { channel: message.channel },
      { $inc : { numUnread: 1 } }
    );
  },
  clearNumUnread : function(channel) {
    console.log(channel);
    ChannelUsers.upsert(
      { user: Meteor.userId(), channel: channel },
      { $set: { numUnread: 0 } }
    );
  }
});
