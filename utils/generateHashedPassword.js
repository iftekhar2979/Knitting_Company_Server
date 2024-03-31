const bcrypt=require('bcryptjs')

 const generateHashedPassword = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

 const compareHashPassword = async (password, dbPassword) => {
  const validating = await bcrypt.compareSync(password, dbPassword);
  if (validating) return true;
};
module.exports={generateHashedPassword,compareHashPassword}