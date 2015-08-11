Meteor.startup(function() {
  Factory.define('message', Messages, {
    text: function() { return Fake.sentence(); },
    timestamp: function() { return Date.now(); }
  });

  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  }
});
