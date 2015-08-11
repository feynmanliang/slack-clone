Meteor.subscribe('messages');
Meteor.subscribe('allUsernames');
Meteor.subscribe('channels');

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

Template.messages.helpers({
  messages: Messages.find({}, {sort: { timestamp: 1 }})
});

Template.footer.onRendered(function() {
  $('.message-history').scrollTop($('.message-history')[0].scrollHeight); // scroll to bottom
});

Template.footer.events({
  'keypress textarea': function(event) {
    var messageText = $('.input-box_text').val();
    if (!!messageText && event.charCode == 13) { // pressed Return
      event.stopPropagation();
      Meteor.call('newMessage', { text: messageText });
      $('.input-box_text').val('');
      $('.message-history').animate({ scrollTop : $('.message-history')[0].scrollHeight}, 200); // scroll to bottom
      return false;
    }
  }
});
