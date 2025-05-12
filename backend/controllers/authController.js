import axios from "axios";
import { oauth2client } from "../config/google.js";
import UserModel from "./userModel.js";
import jwt from "jsonwebtoken";

export const googleLogin = async (req, res) => {
  try {
    //get code
    const { code } = req.body;

    //get token after the exchange the code
    const googleRes = await oauth2client.getToken(code);
    //set the token
    oauth2client.setCredentials(googleRes.tokens);
    //we call google api to get user profile
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    //extract the user inof
    const { email, name, picture } = userRes.data;

    //find the user in our db via email
    let user = await UserModel.findOne({ email });
    if (!user) {
      user = await UserModel.create({
        name,
        email,
        image: picture,
      });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });
    return res.status(200).json({
      message: "Success",
      token,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server errors",
    });
  }
};
