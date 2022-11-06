const express = require('express');  //We are taking express files/modules
const app = express();                //Aquiring the properties in app variable
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})  //Including the path of file config.env
require('./db/connection');
const cookieParser = require('cookie-parser');
app.use(express.json()); //It is a middle so that our app can understand json formatted document
// const User = require('./model/userSchema');

//linked our routes files
app.use(cookieParser());
app.use(require('./router/auth'));


const PORT = process.env.PORT;


// app.get('/about' ,(req, res) => {
//    res.send('Hello about World from Express');
//    console.log('This is about');
// });

// app.get('/contact', (req, res) => {
//    res.send('Hello contact World from Express');
// });

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
    
})
