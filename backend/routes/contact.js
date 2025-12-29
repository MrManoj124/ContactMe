const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Analytics = require('../models/Analytics');
const rateLimit = require('../middleware/rateLimit');
const {getRequestMetaData} = require('../utils/helpers');

//Submit contact form
// router.post('/',rateLimit(3, 60000), async(req,res) => {
//     try{
//         const {name, email, subject, message} = req.body;

//         if(!name || !email || !subject ||!message){
//             return res.status(400).json({
//                 success:false,
//                 message:'All fields are required'
//             });
//         }

//         const contact = new Contact({
//             name, email, subject, message, metadata: getRequestMetaData(req)
//         });
//     await contact.save();
    }
})