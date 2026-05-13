const jwt = require('jsonwebtoken');
const config = require('../src/config/config.js');

const generateToken = (res, email) => {
  try {
    const token = jwt.sign({ email }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRES_AT,
    });

    res.cookie(config.COOKIE_NAME, token, {
      httpOnly: true,
      secure: config.NODE_ENV === "Production",
      sameSite: config.NODE_ENV === "Production" ? "None" : "Strict",
      maxAge: config.COKKIE_AGE,
    });
    return token
  } catch (error) {
    console.log(error)  
    res.status(500);
    throw new Error(`Issue With Assiging JWT`);
  }
};
module.exports = { generateToken }
