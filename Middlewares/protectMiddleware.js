const jwt = require('jsonwebtoken')
const config = require('../src/config/config.js');

const asyncHandler = require('express-async-handler');
const db = require('../models');

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.[config.COOKIE_NAME]

  if (token) {
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET);
      const user = await db.User.findOne({
        where: {
          email: decoded.email,
        },

      });
      if (!user) {
        res.status(401);
        throw new Error(`Not Authorized, User not found`);
      }
      req.user = user
      next();
    } catch (err) {
      res.status(401);
      throw new Error(err.message || `Not Authorized, Invalid Token`);
    }
  } else {
    res.status(401);
    throw new Error(`Not Authorized, No Token`);
  }
});

const adminProtect = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.[config.COOKIE_NAME]

  if (token) {
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET);
      const user = await db.User.findOne({
        where: {
          email: decoded.email,
        },

      });
      if (!user) {
        res.status(401);
        throw new Error(`Not Authorized, User not found`);
      }
      if (!user.isAdmin) {
        res.status(401);
        throw new Error(`Not Authorized, Admin Access Only`);
      }
      req.user = user
      next();
    } catch (err) {
      res.status(401);
      throw new Error(err.message || `Not Authorized, Invalid Token`);
    }
  } else {
    res.status(401);
    throw new Error(`Not Authorized, No Token`);
  }
});
module.exports = { adminProtect, protect }
