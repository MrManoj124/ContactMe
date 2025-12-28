const mongoose=require('mongoose');
const { applyTimestamps } = require('./Contact');

const analyticsSchema = new mongoose.Schema({
    eventType:{
        type:String,
        required:true,
        enum:['page_view','project_view', 'contact_submit','resume_download','social_click'],   
    },
    eventData:{
        type:mongoose.Schema.Types.Mixed
    },
    sessionInfo:{
        ipAddress:String,
        userAgent:String
    },
    timestamp:{
        type:Date,
        default:Date.now
    },
});

