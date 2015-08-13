Footer = React.createClass({
  propTypes: {
    channel: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    $('.message-history').scrollTop($('.message-history')[0].scrollHeight); // scroll to bottom
    Messages.find({}).observe({
      added: function() {
        $('.message-history').animate({ scrollTop : $('.message-history')[0].scrollHeight}, 200); // scroll to bottom
      }
    })
  },
  handleKeyPress(event) {
    const textInput = React.findDOMNode(this.refs.textInput)
    const messageText = textInput.value;
    if (!!textInput && event.charCode == 13) { // pressed Return
      event.preventDefault();
      Meteor.call('newMessage', { text: messageText, channel: this.props.channel });
      textInput.value = "";
    }
  },
  render() {
    return (
      <div className="footer">
        <div className="ui form input-box">
          <div className="field">
            <textarea rows="1" ref="textInput" onKeyPress={this.handleKeyPress}></textarea>
          </div>
        </div>
      </div>
    );
  }
});
