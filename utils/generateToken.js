const jwt = require('jsonwebtoken');
const config = require('../src/config/config.js');

const generateToken = (res, email) => {
  try {
    const token = jwt.sign({ email }, config.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("jwt", token, {
      httpOnly: config.NODE_ENV === "Production",
      secure: config.NODE_ENV === "Production",
      sameSite: config.NODE_ENV === "Production" ? "None" : "Strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return token
  } catch (error) {
    res.status(500);
    throw new Error(`Issue With Assiging JWT`);
  }
};
module.exports = { generateToken }