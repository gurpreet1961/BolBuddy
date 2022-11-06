const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/connection');
const User = require("../model/userSchema");
const authenticate = require('../middleware/authenticate');

router.get('/', (req, res) => {
    res.send('Hello World from Server router.js');
 });

//  using promises
//  router.post('/register', (req, res) => {
//      const {name, email, phone, work, password, cpassword} = req.body; //Destructuring

//      if(!name || !email || !phone || !work || !password || !cpassword){
//          res.status(422).json({error: "All fields are required"});
//         }
//         User.findOne({email: email}) //Checking if user is alreadu registered or not It returns a promise 
//         .then((userExist) => {
//             if(userExist){
//              return res.status(422).json({error: "Email already Exists"});
//          }
//          const user = new User({name, email, phone, work, password, cpassword})

//          user.save().then(() =>{
//              res.status(201).json({message: "user registered successfully"})
//             }).catch((err) => {
//              res.status(500).json({message: "Failed to register"})

//          })
//      }).catch(err => {console.log(err); });
    
//  });

//using async await
router.post('/register', async (req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body; //Destructuring
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "All fields are required"});
    } else if(password != cpassword){
        return res.status(422).json({error: "Your password and confirmation password do not match"});
    }
    try{
        const userExist = await User.findOne({email: email}) //Checking if user is alreadu registered or not It returns a promise 
        if(userExist){
            return res.status(422).json({error: "Email already Exists"});
        }

          const user = new User({name, email, phone, work, password, cpassword});
            //password hashing  in userSchema.js

           await user.save();

           return res.status(201).json({message: "user registered successfully"})
    
        } catch(err) { console.log(err); }
    });

router.post('/signin', async (req, res) => {

    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({error: "All fields are required"});
    }
    try{
            const userLogin = await User.findOne({email:email});
            let isMatch = null;
            let token;
            if(userLogin){
                 isMatch = await bcrypt.compare(password, userLogin.password);
                 
                  token = await userLogin.generateAuthToken();
                // console.log(token);

                 res.cookie("jwtoken", token, {expires: new Date(Date.now() + 25892000000), httpOnly:true
                    
                });
                 
            }else {
                return res.status(400).json({message: "User does not exist"});
            }
            if(isMatch){
                return res.status(201).json({message: "User logined successfully"})
            } else {
                return res.status(400).json({message: "Invalid credentials"});
            }
    } catch(err){console.log(err)};
});

//about us page
router.get('/about', authenticate ,(req, res) => {
    res.send(req.rootUser);
 });
 //contact us page data
router.get('/getdata', authenticate ,(req, res) => {
    res.send(req.rootUser);
 });
 //contact us page
 router.post('/contact', authenticate , async (req, res) => {
    try{
        const {name, email, subject, message} = req.body;
        if(!name || !email || !subject || !message){
            return res.json({error: "All fields are required"});
        }
        const userContact = await User.findOne({_id: req.userID});
        if(userContact){
            const userMessage = await userContact.addMessage(name, email, subject, message);
            await userContact.save();
            res.status(201).json({message:"Message send successfully"})
        }
    }catch(error){
        console.log(error);       
    }
});

//Logout page
router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send("Logout Successfully");
 });
    
module.exports = router;