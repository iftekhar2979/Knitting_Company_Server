const jwt=require('jsonwebtoken')

 const generateToken = (res, email) => {
  console.log(email)
  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  console.log(token,'from toekn')
  console.log(process.env.NODE_ENV)
    res.cookie("jwt", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV==="Production",
      sameSite: process.env.NODE_ENV==="Production"?"None":"Strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    res.status(500);
    throw new Error(`Issue With Assiging JWT`);
  }
};
module.exports={generateToken}