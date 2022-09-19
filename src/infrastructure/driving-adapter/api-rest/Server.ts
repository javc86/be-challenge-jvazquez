import express, { Express } from 'express';
import cors from 'cors';
import routes from './routes';

class Server {
  private readonly _port: string;
  private readonly _app: Express;

  constructor(port: string) {
    this._port = port;
    this._app = express();
    this._app.use(cors());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: false }));
    this._app.use('/api', routes);
  }

  listen(): void {
    this._app.listen(this._port, () => {
      console.log(`Server running at http://localhost:${this._port}`)
    });
  } 
}

export default Server;