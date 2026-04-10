const express = require('express')

const { 
    getAllUsers, 
    registerUser, 
    loginUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile,
    forgotPassword,
    resendOTP,
    verifyOTP,
    resetPassword
} = require('../../Controller/UserController/userController');
const { protect } = require('../../Middlewares/protectMiddleware');


const router = express.Router()

// Registration /api/users/signup
// router.route("/api/signup").post(registerUser);

// Login /api/users/signin
router.route("/api/signin").post(loginUser);

// Logout /api/users/logout
router.route("/api/logout").post(logoutUser);

// Password Reset Flow
router.route("/api/forgot-password").post(forgotPassword);
router.route("/api/resend-otp").post(resendOTP);
router.route("/api/verify-otp").post(verifyOTP);
router.route("/api/reset-password").post(resetPassword);

//Get profile
router.get("/api/profile",protect, getUserProfile);

// Update User Data
router.route("/api/profile").put(protect, updateUserProfile);

// Get All Users
router.route("/api/allusers").get(getAllUsers);
module.exports=router
