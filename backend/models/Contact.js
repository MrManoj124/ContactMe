const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
        trim:true,
        minlength:[2, 'Name must be at least 2 characters'],
        maxlength:[100, 'Name must be less than 100 characters']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        trim:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    subject:{
        type:String,
        required:[true, 'Message is required'],
        trim:true,
        maxlength:[200, 'Subject must be less than 200 characters'],
    },
    message:{
        type:String,
        required:[true, 'Message is required'],
        trim:true,
        minlength:[10, 'Message must be at least 10 characters'],
        maxlength:[2000, 'Message must be less than 2000 characters'],
    },
    status:{
        type:String,
        enum:['unread','read','replied'],
        default:'unread'
    },
    metadata:{
        ipAddress:String,
        userAgent:String
    }
},{
    
})