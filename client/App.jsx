App = React.createClass({
  propTypes: {
    channel: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return {};
  },
  render() {
    return (
      <div className="full height">
        <Navbar channel={this.props.channel} />
        <div className="main ui container">
          <Header channel={this.props.channel} />
          <LoginButtons />
          <MessageHistory />
          <Footer />
        </div>
      </div>
    );
  }
});
