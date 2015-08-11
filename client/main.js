Template.messages.helpers({
  messages: Messages.find({})
});

Template.footer.events({
  'keypress textarea': function(event) {
    if (event.charCode == 13) { // pressed Return
      event.stopPropagation();
      $('.message-history').append('<div class="ui raised segment message"><div class="message_header"><img class="ui avatar image message_profile-pic" src="/Avatar-blank.jpg"><h3 class="message_username"> scotch <span class="ui label message_timestamp">1:31 AM</span> </h3> <i class="empty star icon message_star"></i> </div> <span class="message_content">'
                                   + $('.input-box_text').val() + '</span> </div>');
      $('.input-box_text').val("");
      return false;
    }
  }
});
