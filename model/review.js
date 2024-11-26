const mongoose = require('mongoose')

const reviewModel = new mongoose.Schema({
    taskprovider:{
        type:String,
        require:true
    },
    taskworker:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('review', reviewModel)