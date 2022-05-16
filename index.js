const server = require('./src/app.js');

  server.listen( 4001, () => {
    console.log('%s listening at 4001'); // eslint-disable-line no-console
  });
