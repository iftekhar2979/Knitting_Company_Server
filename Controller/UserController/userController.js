const db = require('../../models/index.js');
const { generateToken } = require('../../utils/generateToken.js')
const { compareHashPassword, generateHashedPassword, } = require('../../utils/generateHashedPassword.js')
const asyncHandler = require('express-async-handler')
const { sendEmail } = require('../../utils/mail.js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../../src/config/config.js');
const { Op } = require('sequelize');

// Registration
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check Inputs
  if (!email || !password) {
    res.status(400);
    throw new Error(`Provide All User Details`);
  }

  // Check Exicting User
  const existingUser = await db.User.findOne({
    where: {
      email: email,
    },

  });

  if (existingUser) {
    res.status(400);
    throw new Error(`User Already Exists`);
  }

  // Register New User
  const hashedPassword = await generateHashedPassword(password);

  const newUser = await db.User.create({
    email, password: hashedPassword 
  });
  if (newUser) {
    generateToken(res, newUser.email);
    res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      message: `Registration Successfull`,
    });
  } else {
    res.status(400);
    throw new Error(`Invalid User Data`);
  }
});
  
  // Login
   const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // Check Inputs
    
    if (!email || !password) {
      res.status(400);
      throw new Error(`Provide Valid User Details`);
    }
  
    // User Data Check
    const validUser = await db.User.findOne({
        where: {
           email:email,
        },

    });
    if (!validUser) {
      return res.status(400).send({ message: "Invalid User Information" });
    }
    const validPassword = await compareHashPassword(password, validUser.password);
    if (validUser && validPassword) {
      const token = generateToken(res, validUser.email);
      const data = {
        email: validUser.email,
        isAdmin: validUser.isAdmin,
        token
      };
      res.status(200).json({
        data,
        message: `Login Successfull`,
      });
    } else {
      return res.status(400).send({message:"Invalid User Information"});
    }
  });
  
  // Logout
   const logoutUser = asyncHandler(async (req, res) => {
    res.cookie(config.COOKIE_NAME, "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: `User Logged Out ☹️` });
  });
  
  // Get User Data
  const getUserProfile = asyncHandler(async (req, res) => {
   
   try{ 
    const data = {
      id:req.user.id,
      userName:req.user.name,
      email: req.user.email,
        isAdmin: req.user.isAdmin,
    };
    // io.emit("connect",data)
    res.status(200).json({ data });
  }catch(error){
    res.status(401).send({message:"UnAuthorized User"})
  }
  });
  
  // Update User Data
   const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await db.User.findByPk(req.user.id);
    // Check User
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      // Updating Details
      if (req.body.password) {
        user.password = await generateHashedPassword(req.body.password);
      }
      const updatedUser = await user.save();
      const data = {
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: user.isAdmin,
      };
      res.status(200).json({
        data,
        message: "User Profile Updated",
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  });
  

const getSingleUser = async (req, res) => {
    const userId =parseFloat(req.params.id)
    try {
        const user = await db.User.findOne({
            where: {
                id: userId,
            },

        });
        if (!user) {
          return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
}
const getAllUsers = async (req, res) => {
    try {
        const companiesWithBuyers = await db.User.findAll({});
        res.status(200).send(companiesWithBuyers);
    } catch (error) {
        res.status(404).send(error);
    }
}
const createUser=async(req,res)=>{
    const body=req.body
    try {
        if (body.password) {
          body.password = await generateHashedPassword(body.password);
        }
        const newUser = await db.User.create(body);
       return res.status(200).send(newUser);
    } catch (error) {
        console.log(error)
        return  res.status(400).send(error.message);
    }
}
const updateUser = async (req, res) => {
    const id=parseFloat(req.params.id)
    const updatedBody = req.body
    try {
        const user = await db.User.findByPk(id);
        if (!user) {
            return res.status(404).send({isUpdated:false, error:'User not found'});
        }
        if (updatedBody.password) {
          updatedBody.password = await generateHashedPassword(updatedBody.password);
        }
        const [updatedRowsCount, updatedUsers] = await db.User.update(updatedBody, {
            where:{
                id:id
            },
            returning: true
        });
        const updatedUser = updatedUsers ? updatedUsers[0] : await db.User.findByPk(id);
        return res.status(200).send({isUpdated:true,updatedUser});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isUpdated:false, error:error.message});
    }
    
}
const removeUser=async(req,res)=>{
    const id=parseFloat(req.params.id)
    
    try {
        const deletedUser = await db.User.findByPk(id);
        if (!deletedUser) {
            return res.status(404).send({isDeleted:false ,error:'User not found'});
        }
        await db.User.destroy({
            where:{
                id:id
            },
           
        });
        return res.status(200).send({isDeleted:true, removeUser: deletedUser});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isDeleted:false ,error:error.message});
    }
    
}
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error("Please provide your email");
  }

  const user = await db.User.findOne({ where: { email } });
  if (!user) {
    res.status(404);
    throw new Error("User not found with this email");
  }

  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
  await db.PasswordOTP.destroy({ where: { email } });
  await db.PasswordOTP.create({
     email, otp, expiresAt ,
  });

  await sendEmail({
    to: email,
    subject: "Your OTP for Password Reset",
    text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    html: `<h3>Your OTP is <b>${otp}</b></h3><p>It will expire in 10 minutes.</p>`,
  });

  res.status(200).json({ message: "OTP sent to your email" });
});

const resendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error("Please provide your email");
  }

  const user = await db.User.findOne({ where: { email } });
  if (!user) {
    res.status(404);
    throw new Error("User not found with this email");
  }

  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await db.PasswordOTP.destroy({ where: { email } });
  await db.PasswordOTP.create({
     email, otp, expiresAt ,
  });

  await sendEmail({
    to: email,
    subject: "Your Resent OTP for Password Reset",
    text: `Your new OTP is ${otp}. It will expire in 10 minutes.`,
    html: `<h3>Your new OTP is <b>${otp}</b></h3><p>It will expire in 10 minutes.</p>`,
  });

  res.status(200).json({ message: "OTP resent successfully" });
});

const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    res.status(400);
    throw new Error("Please provide email and OTP");
  }

  const otpRecord = await db.PasswordOTP.findOne({
    where: { 
      email, 
      otp, 
      expiresAt: { [Op.gt]: new Date() } 
    },
  });

  if (!otpRecord) {
    res.status(400);
    throw new Error("Invalid or expired OTP");
  }

  // Generate a temporary reset token (JWT)
  const resetToken = jwt.sign({ email }, config.JWT_SECRET, { expiresIn: '15m' });

  res.status(200).json({ message: "OTP verified successfully", resetToken });
});

const resetPassword = asyncHandler(async (req, res) => {
  const { resetToken, newPassword } = req.body;
  if (!resetToken || !newPassword) {
    res.status(400);
    throw new Error("Please provide reset token and new password");
  }

  try {
    const decoded = jwt.verify(resetToken, config.JWT_SECRET);
    const email = decoded.email;

    const hashedPassword = await generateHashedPassword(newPassword);
    await db.User.update(
      { password: hashedPassword },
      { where: { email } },
    );

    // Delete the OTP record after successful reset
    await db.PasswordOTP.destroy({ where: { email } });

    res.status(200).json({ message: "Password reset successful" });
  } catch (err) {
    res.status(400);
    throw new Error("Invalid or expired reset token");
  }
});

module.exports = { 
  getAllUsers, 
  updateUserProfile, 
  getUserProfile, 
  logoutUser, 
  loginUser, 
  registerUser, 
  forgotPassword, 
  resendOTP, 
  verifyOTP, 
  resetPassword 
  , getSingleUser
  , createUser
  , updateUser
  , removeUser
}

