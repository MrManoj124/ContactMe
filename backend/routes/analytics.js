const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');
const Contact = require('../models/Contact');
const {getRequestMetadata} = require('../utils/helpers');

//Track Analytics Event
router.post('/',async (req,res) => {
    try{
        const {eventType, eventData} = req.body;

        await Analytics.create({
            eventType,
            eventData:eventData || {},
            sessionInfo : getRequestMetadata(req)
        });

        res.json({
            success : true,
            message : 'Event tracked'
        });
    }
    catch(error){
        res.status(500).json({
            success : false,
            message : 'Failed to track event'
        });
    }
});

