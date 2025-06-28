import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectdb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully!");
    }catch (error){
        console.log("Error connecting to MongoDB", error);
        process.exit(1) //exit with failure
    }
}