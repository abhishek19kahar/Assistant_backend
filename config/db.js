// import mongoose from "mongoose";
// import dotenv from "dotenv"

// dotenv.config();
// const mongo_url = process.env.MongoDB_URL;

// const connectDB=async () =>{
//     try{
//          await mongoose.connect(mongo_url);
//             console.log("MongoDB Connected....!");
//     } catch(error){
//           console.log(error);
//     }
    
// }

// export default connectDB;


// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const mongo_url = process.env.MongoDB_URL;

// const connectDB=async () =>{
//     try{
//          await mongoose.connect(mongo_url);
//             console.log("MongoDB Connected....!");
//     } catch(error){
//           console.log(error);
//     }
// };

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongo_url = process.env.MongoDB_URL;

const connectDB = async () => {
    try {
        console.log("🔄 Attempting MongoDB connection...");
        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // Time out after 10s if DB is unreachable
        });
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB connection failed:");
        console.error(error.message);
    }
};

export default connectDB;

