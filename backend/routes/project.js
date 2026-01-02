const express = require('express');
const router = express.Router();
const ProjectView = require('../models/ProjectView');


//Track project View
router.post('/view', async (req,res) => {
    try{
        const {projectId, projectTitle} = req.body;

        await ProjectView.findOneAndUpdate(
            {projectId},
            {
                projectId,
                projectTitle,
            $inc:{viewCount : 1},
        lastViewed : Date.now()
              },
              {upsert : true, new:true}
        );

        re.json({
            success:true,
            message : 'Project view tracked'
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:'Failed to track view'
        });
    }
})

// Get project statistics
router.get('/stats', async (req, res) => {
  try {
    const projects = await ProjectView.find()
      .sort({ viewCount: -1 })
      .limit(10);

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch stats'
    });
  }
});

module.exports = router;