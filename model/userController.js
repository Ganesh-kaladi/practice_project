const mongoose = require('mongoose')

const userDetails = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model('userdetails', userDetails)