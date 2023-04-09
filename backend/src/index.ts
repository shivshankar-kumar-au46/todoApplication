import express, {Request, Response} from 'express';
import {router} from "./routes/routes";
import connects from './config/db';
const app = express();
const PORT = 4011;
import cors from "cors";


app.use(cors())
app.use(express.json());
app.use('/', router);



app.listen(PORT, () : void => {
    console.log('server is started on port', PORT)
    connects()
})