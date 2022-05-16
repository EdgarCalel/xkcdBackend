const server = require('./src/app.js');
//server
  server.listen( process.env.PORT || 4001, () => {
    console.log('%s listening at 4001'); // eslint-disable-line no-console
  });
