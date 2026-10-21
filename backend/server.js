import dotenv from "dotenv";
import express from "express";
import emailroute from './routes/emailroute.js';
import createmail from "./config/emailconfig.js";
import cors from "cors";
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port=process.env.PORT;
app.use("/api",emailroute);
createmail();
app.listen((port),()=>{
       console.log("Server running on port:3000");
})