const server = require('./src/app.js');
//serve
  server.listen( process.env.PORT || 4001, () => {
    console.log('%s listening at 4001'); // eslint-disable-line no-console
  });
