const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Analytics = require('../models/Analytics');
const rateLimit = require('../middleware/rateLimit');
const {getRequestMetaData} = require('../utils/helpers');

//Submit contact form
router.post('/',rateLimit(3, 60000), async(req,res) => {
    try{
        const {name, email, subject, message} = req.body;

        if(!name || !email || !subject ||!message){
            return res.status(400).json({
                success:false,
                message:'All fields are required'
            });
        }

        const contact = new Contact({
            name, email, subject, message, metadata: getRequestMetaData(req)
        });
    await contact.save();

    //Log analytics
    await Analytics.create({
        eventType:'contact_submit',
        sessionInfo:getRequestMetadata(req)
    });

    res.status(201).json({
        success:true,
        message:'Message sent successfully!',
        data:{id:contact._id}
    });
    }
    catch(error){
        console.error('Contact submission error : ', error);
        res.status(500).json({
            success:false,
            message:'Failed to send message'
        });
    }
});


// Get all contacts (Admin)
router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    
    const query = status ? { status } : {};
    const skip = (page - 1) * limit;

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});


// Update contact status
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update contact'
    });
  }
});


module.exports = router;