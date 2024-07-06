import express from "express";
const app = express();
import cors from 'cors';
import 'dotenv/config'
// import errorMiddleware from './middleware/Error.js'
import bodyParser from 'body-parser';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// Route imports

import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
// const _dirname = dirname(_filename);s


app.get('/',(req,res)=>{
    res.send("Hello World");
})
// app.use(errorMiddleware)

export default app