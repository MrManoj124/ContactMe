//ProjectView.js file
const mongoose = require('mongoose');

const projectViewSchema=new mongoose.Schema({
    projectId:{
        type:String,
        required:true
    },
    projectTitle:{
        type:String,
        required:true,
    },
    viewCount:{
        type:Number,
        default:1,
    },
    lastViewed:{
        type:Date,
        default:Date.now
    },
});

projectViewSchema.index({projectId:1});
 
module.exports = mongoose.model('ProjectView', projectViewSchema);