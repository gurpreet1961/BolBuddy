const mongoose = require('mongoose');
const DB = process.env.DATABASE;


mongoose.connect(DB, {
    useNewUrlParser: true,      //These four lines are written to avoid deprecation warning
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
 }).then(() => {
    console.log('Connection successfull');
    
 }).catch((err) => console.log(err));