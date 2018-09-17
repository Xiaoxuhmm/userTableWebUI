import express from 'express';

import serverRenderer from './middleware/renderer';
import {preloadAll} from 'react-loadable';

const PORT = 3003;
const path = require('path');

// initialize the application and create the routes
const app = express();
const router = express.Router();

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
router.use('*', serverRenderer);

app.use(router);

// start the app

preloadAll().then(()=>{
  app.listen(PORT, (error) => {
      if (error) {
          return console.log('something bad happened', error);
      }
      console.log("listening on " + PORT + "...");
  });
});
