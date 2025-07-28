import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const mongo_url = process.env.MongoDB_URL;

const connectDB=async () =>{
    try{
         await mongoose.connect(mongo_url);
            console.log("MongoDB Connected....!");
    } catch(error){
          console.log(error);
    }
    
}

export default connectDB;