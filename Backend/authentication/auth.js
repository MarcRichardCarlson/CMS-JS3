const jwt = require('jsonwebtoken');
require('dotenv').config()

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  return jwt.sign({ _id: user._id}, secretKey, { expiresIn: '720h' })
}


exports.verifyToken = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1]; /*Spliting up bearer and token*/
    req.userData = jwt.verify(token, secretKey) /*Auto sends the payload with req.userdata*/
    next()
  } 
  catch {
    return res.status(401).json({
      message: 'Access denied, You need to login first'
    })
  }

}