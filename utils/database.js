import mongoose from "mongoose";

let isConnected = false; //track connection status

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
      });
      isConnected = true;
    } catch (error) {
      console.log(error);
    }
  }
};
