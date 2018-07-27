// import third party modules...
import * as express from 'express';
import * as bodyParser from 'body-parser';

// import application specific modules...
import { HelloRouter } from './routes/helloRouter';

const PORT = 3000;
const app: express.Application = express();

// express server configuration...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// configuring the application specific routes...
app.use('/hello', HelloRouter);

// starting the actual server...
app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`);
})
