import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import authRouter from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.routes.js';
import geminiResponse from './gemini.js';

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
  origin: "https://virtualassistant-drab.vercel.app", 
  credentials: true               
}));

app.use(express.json());          
app.use(cookieParser());          


app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

 // to check gemini api is wor
// app.get("/",async (req,res)=>{
//   let prompt = req.query.prompt
//   let data = await geminiResponse(prompt)
//   res.json(data)
// })

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectDB();
});
