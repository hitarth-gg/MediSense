const Form = require("../models/Form");
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
    if (!email || !password || email.length === 0 || password.length === 0) {
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
          details: { user },

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

/* ------------------------------------------------------ */

exports.form = async (req, res) => {
  try {
    //data fetch
    const { name } = req.body;
    if (!name || name.length === 0) {
      return res.status(200).json({
        success: false,
        message: "Incorrect Name",
      });
    }

    //check for registered user
    let user = await Form.findOne({ name });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "Name does not exist",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Details of the user retrieved successfully",
        details: { user },
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      success: false,
      message: "Error From Form Schema, please try again later",
    });
  }
};

/* ------------------------------------------------------ */
exports.formpush = async (req, res) => {
  try {
    //get data
    const {
      name,
      age,
      sex,
      pastHistory,
      durationOfSymptoms,
      physicalExamination,
      presentCase,
      remarks,
      status,
    } = req.body;

    //check if user already exist
    // const existingUser = await Form.findOne({ name });

    // if (existingUser) {
    //   return res.status(200).json({
    //     success: false,
    //     message: "Form: Name is already in use",
    //   });
    // }

    //create entry for User
    const form = await Form.create({
      name,
      age,
      sex,
      pastHistory,
      durationOfSymptoms,
      physicalExamination,
      presentCase,
      remarks,
      status,
    });

    return res.status(200).json({
      success: true,
      message: "Form Created Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      success: false,
      message: "Form cannot be registered, please try again later",
    });
  }
};

// to get all the forms
exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    return res.status(200).json({
      success: true,
      message: "Forms retrieved successfully",
      details: { forms },
    });
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      success: false,
      message: "Forms cannot be retrieved, please try again later",
    });
  }
};
