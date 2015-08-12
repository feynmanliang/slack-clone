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
    Session.set('channel', params.channel);
  },
  name: "channel"
});
