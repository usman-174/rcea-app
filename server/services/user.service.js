const bcrypt = require('bcryptjs')
const ApiError = require('../utils/ApiError')


const comparePassword = (password, userPassword) => {
  const passwordCheck = bcrypt.compareSync(password, userPassword)
  if (!passwordCheck) throw new ApiError(401, 'Invalid password')
  return true
}

module.exports = {
 
  comparePassword,
}
