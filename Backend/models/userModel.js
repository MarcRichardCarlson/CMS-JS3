const User = require('../schemas/userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth');
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
/*Register a new user*/

exports.registerUser = (req, res) => {
   const {email, password} = req.body;

   const hashedPassword = bcrypt.hashSync(password, 10);
   const user = new User({email, password: hashedPassword});

   user.save().then(() => {
       const token = jwt.sign({
           email: user.email,
           userId: user._id
       }, secretKey);
       res.status(201).json({message: "User created", token});
   }).catch((err) => {
       console.log(err.message);
       res.status(500).json({message: "Could not create user"});
   });
};

/*Login*/

exports.loginUser = (req, res) => {
   const { email, password} = req.body

   if(!email || !password ) {
      return res.status(400).json({
         message:'Entar all fields'
      })
   }

   User.findOne({ email })
   .then(user => {

      if(!user) {
         return res.status(401).json({
            message:'Field not entered correctly'
         })
      }

      bcrypt.compare(password, user.password, (err, result) => {
         if(err) {
            return res.status(500).json({
               message:'Decrypting error'
            })
         }

         if(!result) {
            return res.status(401).json({
               message:'Field not entered correctly'
            })
         }

         res.status(200).json({ token: auth.generateToken(user)})
      })
   })   
}

// Get users

exports.getUsers = (req,res) => {

   User.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({message: 'Could not get users'})
    })

}