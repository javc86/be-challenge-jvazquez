import path from "path";
import * as dotenv from 'dotenv';
import Server from "./Server";

try {
  dotenv.config({
    path: path.resolve(__dirname, '../../../../../.env')
  });

  new Server(process.env.PORT || '3000').listen();
} catch (error) {
  console.log('Error ==>', error);
}