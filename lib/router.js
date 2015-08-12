FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {
    redirect('/general');
  }]
});

FlowRouter.route('/:channel', {
  action: function(params, queryParams) {
    Session.set('channel', params.channel);
  },
  name: "channel"
});
