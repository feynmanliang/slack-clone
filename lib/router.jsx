FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {
    redirect('/general');
  }]
});

FlowRouter.route('/:channel', {
  subscriptions: function(params, queryParams) {
    this.register('allUsernames', Meteor.subscribe('allUsernames'));
    this.register('channelMessages', Meteor.subscribe('messages', params.channel));
    this.register('channelUsers', Meteor.subscribe('allChannelUsers', params.channel));
  },
  action: function(params, queryParams) {
    React.render(<App channel={params.channel} />, document.body);
  },
  name: "channel"
});
