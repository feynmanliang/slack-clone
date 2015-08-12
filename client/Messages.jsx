MessageHistory = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      messages: Messages.find({}, {sort: { timestamp: 1 }}).fetch()
    };
  },
  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} />
    });
  },
  render() {
    return (
      <div className="message-history">
        {this.renderMessages()}
      </div>
    );
  }
});

Message = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },
  usernameFromId() {
    var user = Meteor.users.findOne({_id: this.props.message.user});
    if (typeof user === "undefined") {
      return "Anonymous";
    } else {
      return user.emails[0].address;
    }
  },
  formatTime() {
    return moment(this.props.message.timestamp).format("h:mm A");
  },
  render() {
    return (
      <div className="ui raised segment message">
        <div className="message_header">
          <img className="ui avatar image message_profile-pic" src="/Avatar-blank.jpg"></img>
          <h3 className="message_username">
            {this.usernameFromId()}
            <span className="ui label message_timestamp">{this.formatTime()}</span>
          </h3>
          <i className="empty star icon message_star"></i>
        </div>
        <span className="message_content">{this.props.message.text}</span>
      </div>
    );
  }
});
