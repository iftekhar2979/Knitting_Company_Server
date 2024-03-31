const express = require('express')

const { getAllUsers, registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile } = require('../../Controller/UserController/userController');
const { protect } = require('../../Middlewares/protectMiddleware');


const router = express.Router()

// Registration /api/users/signup
router.route("/signup").post(protect,registerUser);

// Login /api/users/signin
router.route("/signin").post(loginUser);

// Logout /api/users/logout
router.route("/logout").post(logoutUser);

//Get profile
router.get("/profile",protect, getUserProfile);

// Update User Data
router.route("/profile").put(protect, updateUserProfile);

// Get All Users
router.route("/allusers").get(getAllUsers);
module.exports=router
