
const {PrismaClient}=require('@prisma/client')
const prisma = new PrismaClient()

const {generateToken }=require('../../utils/generateToken.js')
const {compareHashPassword, generateHashedPassword, }=require('../../utils/generateHashedPassword.js')
const asyncHandler=require('express-async-handler')


// Registration
const registerUser = asyncHandler(async (req, res) => {
    const {email, password } = req.body;
    console.log(req.body)
    // Check Inputs
    if ( !email || !password) throw new Error(`Provide All User Details`);
  
    // Check Exicting User
    const existingUser = await prisma.user.findFirst({
        where: {
            email: email,
        },

    });
if (existingUser) throw new Error(`User Already Exists`);
  
    // Register New User
    const hashedPassword = await generateHashedPassword(password);
    console.log(hashedPassword)
    const newUser = await prisma.user.create({
        data:{email,password:hashedPassword}
     });
    if (newUser) {
      generateToken(res, newUser._id);
      res.status(201).json({
        _id: newUser._id,
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
    
    if (!email || !password) throw new Error(`Provide Valid User Details`);
  
    // User Data Check
    const validUser = await prisma.user.findFirst({
        where: {
           email:email,
        },

    });
    console.log(validUser.email)
    if (!validUser) throw new Error(`Invalid User Details`);
    const validPassword = await compareHashPassword(password, validUser.password);
    if (validUser && validPassword) {
      generateToken(res, validUser.email);
      const data = {
        email: validUser.email,
        isAdmin: validUser.isAdmin,
      };
      res.status(200).json({
        data,
        message: `Login Successfull`,
      });
    } else {
      res.status(400).send({message:"Invalid User Information"});
      throw new Error(`Invalid User Details`);
    }
  });
  
  // Logout
   const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: `User Logged Out ☹️` });
  });
  
  // Get User Data
  const getUserProfile = asyncHandler(async (req, res) => {
    console.log(req.user)
   try{ 
    const data = {
      email: req.user.email,
        isAdmin: req.user.isAdmin,
    };
    res.status(200).json({ data });
  }catch(error){
    res.status(401).send({message:"UnAuthorized User"})
  }
  });
  
  // Update User Data
   const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await userModel.findById(req.user._id);
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
        _id: updatedUser._id,
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
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            },

        });
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error);
    }
}
const getAllUsers = async (req, res) => {
    try {
        const companiesWithBuyers = await prisma.user.findMany({});
        res.status(200).send(companiesWithBuyers);
    } catch (error) {
        res.status(404).send(error);
    }
}
const createUser=async(req,res)=>{
    const body=req.body
    try {
        const newUser = await prisma.user.create({
           data:body
        });
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
        const updatedUser = await prisma.user.update({
            where:{
                id:id
            },
            data: updatedBody
        });
        return res.status(200).send({isUpdated:true,updatedUser});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isUpdated:false, error:error.message});
    }
    
}
const removeUser=async(req,res)=>{
    const id=parseFloat(req.params.id)
    
    try {
        const removeUser = await prisma.user.delete({
            where:{
                id:id
            },
           
        });
        return res.status(200).send({isDeleted:true, removeUser});
    } catch (error) {
        console.log(error)
        return res.status(400).send({isDeleted:false ,error:error.message});
    }
    
}
module.exports={getAllUsers,updateUserProfile,getUserProfile,logoutUser,loginUser,registerUser}