Footer = React.createClass({
  componentDidMount() {
    $('.message-history').scrollTop($('.message-history')[0].scrollHeight); // scroll to bottom
    Messages.find({}).observe({
      added: function() {
        $('.message-history').animate({ scrollTop : $('.message-history')[0].scrollHeight}, 200); // scroll to bottom
      }
    })
  },
  handleKeyPress(event) {
    var messageText = $('.input-box_text').val();
    if (!!messageText && event.charCode == 13) { // pressed Return
      event.preventDefault();
      Meteor.call('newMessage', { text: messageText, channel: Session.get('channel') });
      $('.input-box_text').val('');
    }
  },
  render() {
    return (
      <div className="footer">
        <div className="ui form input-box">
          <div className="field">
            <textarea rows="1" className="input-box_text" onKeyPress={this.handleKeyPress}></textarea>
          </div>
        </div>
      </div>
    );
  }
});
