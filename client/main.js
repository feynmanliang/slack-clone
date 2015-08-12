Template.registerHelper("usernameFromId", function(userId) {
  var user = Meteor.users.findOne({_id: userId});
  if (typeof user === "undefined") {
    return "Anonymous";
  } else {
    return user.emails[0].address;
  }
});

Template.registerHelper("formatTime", function(timestamp) {
  return moment(timestamp).format("h:mm A");
});

Template.header.helpers({
  channelName: function() {
    return Session.get('channel');
  }
});

Template.messages.helpers({
  messages: Messages.find({}, {sort: { timestamp: 1 }})
});

Template.footer.onRendered(function() {
  $('.message-history').scrollTop($('.message-history')[0].scrollHeight); // scroll to bottom
  Messages.find({}).observe({
    added: function() {
      $('.message-history').animate({ scrollTop : $('.message-history')[0].scrollHeight}, 200); // scroll to bottom
    }
  })
});

Template.footer.events({
  'keypress textarea': function(event) {
    var messageText = $('.input-box_text').val();
    if (!!messageText && event.charCode == 13) { // pressed Return
      event.stopPropagation();
      Meteor.call('newMessage', { text: messageText });
      $('.input-box_text').val('');
      return false;
    }
  }
});

Template.navbar.helpers({
  channels: function() {
    return Channels.find();
  }
});

Template.channel.helpers({
  active: function() {
    if (Session.get('channel') === this.name) {
      return 'active';
    } else {
      return '';
    }
  }
});
