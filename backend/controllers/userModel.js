import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
   
},{ timestamps: true });

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
