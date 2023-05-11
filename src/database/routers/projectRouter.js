const express = require("express");
const router  = express.Router();


const Project = require('../models/project');

router.post('/',async (req, res) => {
    const oneProjectCard = new Project(req.body);
    try {
        await oneProjectCard.save();
        res.status(201).json({
            status:'Success',
            data:{
                worker: oneProjectCard
            }
        });
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message: "Something go wrong" + err
        });
    }
})