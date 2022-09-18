import express from "express";
import path from "path";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(cors());

app.get( "/", (req, res ) => {
  res.send( "Hello world!" );
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});