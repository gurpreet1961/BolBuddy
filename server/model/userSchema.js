const mongoose = require('mongoose');
//Schema defines the structure of the embedded documents in a collection
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    messages:[{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
    }],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//We are hashing our password
userSchema.pre('save', async function (next) {

    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})
//Generating token
userSchema.methods.generateAuthToken = async function () {
    try{
        let userToken = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: userToken});
        await this.save();
        return userToken;
    }catch(err) {
        console.log(err);
        
    }
} 

//storing the Message
userSchema.methods.addMessage = async function (name, email, subject, message){
    try{
        this.messages = this.messages.concat({name, email, subject, message});
        await this.save();
        return this.messages;
    }catch(error){
        console.log(error);
        
    }
}

const User = mongoose.model('USER',userSchema);

module.exports = User;