var app = require('../../server/server');

module.exports = function(Event) {
  Event.observe('after save', (ctx, next) => {
    return app.models.Event.find({})
    .then(events => {
      console.log('Event retrieved');
      next();
    });
    // Without the return works
    // app.models.Event.find({})
    // .then(events => {
    //   console.log('Event retrieved');
    //   next();
    // });
  });

  Event.afterRemote('create', (ctx, instance, next) => {
    setTimeout(() => {
      console.log('After remote create executed');
      next();
    }, 500);
  });
};
