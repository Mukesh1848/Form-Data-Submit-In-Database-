import express from 'express'
const app = express();
const port = process.env.PORT || "3000"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
import {join} from 'path';
import connectDB from './db/connectdb.js';
// import bodyParser from 'body-parser';
import web from './routes/web.js';
// import { brotliDecompressSync } from 'zlib';

// database connection 
connectDB(DATABASE_URL);

// set template engine 
app.set("view engine" , "ejs");

// for createing ustudent list 
// app.use(express.json())
app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({extended:false}));

// load routes 
app.use('/student',web);

// static files 
app.use("/student",express.static(join(process.cwd(),"public")));
app.use("/student/edit",express.static(join(process.cwd(),"public")));

app.listen(port,()=>{
        console.log(`server is running at the port of http://localhost:${port}`);
})