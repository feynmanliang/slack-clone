Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      channelName: Session.get('channel')
    };
  },
  render() {
    return (
      <div className="channel-header">
        <h1 className="ui dividing header channel-header_name">
          <span className="channel-header_prefix">#</span>
          {this.data.channelName}
        </h1>
      </div>
    );
  }
});
