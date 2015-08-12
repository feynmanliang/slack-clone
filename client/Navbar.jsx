Navbar = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      channels: Channels.find({}).fetch()
    };
  },
  renderChannels() {
    return this.data.channels.map((channel) => {
      return <Channel key={channel._id} channel={channel} />
    });
  },
  render() {
    return (
      <div className="ui vertical inverted menu fixed" id="sidebar">
        <div className="item">
          <b className="team-menu">scotch</b>
        </div>
        <div className="item listings_channels">
          <div className="header listings_header">Channels</div>
          <div className="menu channel_list">
            {this.renderChannels()}
          </div>
        </div>
        <div className="item listings_direct-messages">
          <div className="header">Direct Messages</div>
        </div>
        <div className="item user-menu">
          <img className="ui avatar image user-menu_profile-pic" src="/Avatar-blank.jpg"></img>
          <span className="user-menu_username">danyll</span>
          <span className="connection_status">
            <button className="circular ui icon green button"></button>
          </span>
        </div>
      </div>
    );
  }
});

Channel = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      channel: Session.get('channel')
    };
  },
  propTypes: {
    channel: React.PropTypes.object.isRequired
  },
  active() {
    if (this.data.channel === this.props.channel.name) {
      return 'active';
    } else {
      return '';
    }
  },
  render() {
    return (
      <a className={"teal item channel " + this.active()} href={"/" + this.props.channel.name}>
        <span className="prefix">#</span>
        <span className="channel-name">{this.props.channel.name}</span>
        <span className="ui teal pointing left label unread">0</span>
      </a>
    )
  }
});
