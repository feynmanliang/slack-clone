Meteor.startup(function() {
  Factory.define('message', Messages, {
    text: function() { return Fake.sentence(); },
    timestamp: Date.now(),
    channel: 'general'
  });
  Factory.define('channel', Messages, {
    name: function() { return Fake.word(); },
  });

  Messages.remove({});
  if (Messages.find({}).count() === 0) {
    _(10).times(function() {
      Factory.create('message');
    });
  }

  Channels.remove({});
  if (Channels.find({}).count() === 0) {
    Channels.insert({
      name: "general"
    });
    _(2).times(function() {
      Factory.create('channel');
    });
  }
});
