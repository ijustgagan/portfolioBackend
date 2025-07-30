import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.set('strictQuery', true); 
dotenv.config({ path: "./config/.env" });

const Mongo_Url = process.env.MONGO_URL;
export const connectDatabase = () => {
  mongoose.connect(Mongo_Url,)
    .then((c) => {
      console.log(`MongoDB connected to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
