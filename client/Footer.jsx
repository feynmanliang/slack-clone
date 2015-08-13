Footer = React.createClass({
  propTypes: {
    channel: React.PropTypes.string.isRequired
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
