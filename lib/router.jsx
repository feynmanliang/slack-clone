FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {
    redirect('/general');
  }]
});

FlowRouter.route('/:channel', {
  subscriptions: function(params, queryParams) {
    this.register('channelMessages', Meteor.subscribe('messages', params.channel));
  },
  action: function(params, queryParams) {
    React.render(<App channel={params.channel} />, document.body);
  },
  name: "channel"
});
