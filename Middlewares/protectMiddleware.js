const jwt = require('jsonwebtoken')

const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.get("cookie").slice(4)
  console.log(token)
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      req.user = await prisma.user.findFirst({
        where: {
          email: decoded.email,
        },

      });
      next();
    } catch (err) {
      res.status(401);
      throw new Error(`Not Authorized, Invalid Token`);
    }
  } else {
    res.status(401);
    throw new Error(`Not Authorized, No Token`);
  }
});

const adminProtect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.get("cookie").slice(4)

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await prisma.user.findFirst({
        where: {
          email: decoded.email,
        },

      });
      if (req.user.isAdmin) {
        console.log(req.user)
        next();
      } else {
        res.status(401);
        throw new Error(`Not Authorized`);
      }
    } catch (err) {
      res.status(401);
      throw new Error(`Not Authorized , Admin Access Only`);
    }
  } else {
    res.status(401);
    throw new Error(`Not Authorized, Only Admin`);
  }
});
module.exports = { adminProtect, protect }