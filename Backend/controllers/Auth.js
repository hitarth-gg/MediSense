const User = require("../models/user");
// const { options } = require("../routes/user");
require("dotenv").config();




//signup route handler
exports.signup = async (req, res) => {
  try {
    //get data
    const { name, email, password, role } = req.body;
    //check if user already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "Email is already in use",
      });
    }

    //create entry for User
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      success: false,
      message: "User cannot be registered, please try again later",
    });
  }
};

//login
exports.login = async (req, res) => {
  try {
    //data fetch
    const { email, password } = req.body;
    //validation on email and password
    if (!email || !password || email.length === 0 || password.length===0) {
      return res.status(200).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    //check for registered user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "User does not exist",
      });
    } else {
      if (user.password === password) {
        return res.status(200).json({
          success: true,
          message: "User Logged in Successfully",
          details: {user},

          // user details excluding password : LATER
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Incorrect Password",
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      success: false,
      message: "User cannot be logged in, please try again later",
    });
  }
};
