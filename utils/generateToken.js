const jwt=require('jsonwebtoken')

 const generateToken = (res, email) => {
  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
   
    res.cookie("jwt", token, {
      httpOnly: process.env.NODE_ENV==="Production",
      secure: process.env.NODE_ENV==="Production",
      sameSite: process.env.NODE_ENV==="Production"?"None":"Strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return token
  } catch (error) {
    res.status(500);
    throw new Error(`Issue With Assiging JWT`);
  }
};
module.exports={generateToken}