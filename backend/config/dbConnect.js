import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`database connected to ${con.connection.name}`);
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
};

export default dbConnection;
