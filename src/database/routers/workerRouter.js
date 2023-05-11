const express = require("express");
const router  = express.Router();


const Worker = require('../models/worker');

router.post('/',async (req, res) => {
    const oneWorkerCard = new Worker(req.body);
    try {
        await oneWorkerCard.save();
        res.status(201).json({
            status:'Success',
            data:{
                worker: oneWorkerCard
            }
        });
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message: "Something go wrong" + err
        });
    }
})