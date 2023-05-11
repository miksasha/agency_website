const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const {MONGO_URI} = require("./setupMongodb");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology:true,
}).then(() => console.log("Data base is connected!"))
    .catch(err => console.log(err));


const Worker = require('./models/worker');
//methods
app.post('/add',async (req, res) => {
    const worker = new Worker(req.body);

    try {
        await worker.save();
        res.status(201).json({
            status:'Success',
            data:{
                workerCard: worker
            }
        });
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message: "Something go wrong" + err
        });
    }
});

app.get('/', async (req,res) => {
    try {
        const worker = await Worker.find();

        res.status(200).json({
            status: "success",
            data: {
                workerCard: worker
            }
        });
    }catch(err){
        res.status(500).json({
            status: "failed",
            message: "Something go wrong" + err
        });
    }
});

app.put("/put/:id", async (req,res)=>{
    try{
        const worker = await Worker.findById(req.params.id);

        if (req.body.hasOwnProperty("id")){ worker.id = req.body.id;}
        if (req.body.hasOwnProperty("wName")){  worker.wName = req.body.wName;}
        if (req.body.hasOwnProperty("wSurname")){   worker.wSurname = req.body.wSurname;}
        if (req.body.hasOwnProperty("position")){   worker.position = req.body.position;}
        if (req.body.hasOwnProperty("textComment")){    worker.textComment = req.body.textComment;}
        if (req.body.hasOwnProperty("photo_big_Name")){ worker.photo_big_Name = req.body.photo_big_Name;}
        if (req.body.hasOwnProperty("photo_small_Name")){   worker.photo_small_Name = req.body.photo_small_Name;}
        if (req.body.hasOwnProperty("color")){  worker.color = req.body.color;}
        if (req.body.hasOwnProperty("isChosen")){   worker.isChosen = req.body.isChosen;}

        const w1 = await worker.save();
        res.json(w1);

    }catch (err){
        res.send("Error");
    }
});

app.delete('/:id', async (req,res) => {
    await Worker.findByIdAndDelete(req.params.id);
    try {
        res.status(204).json({
            status: "success",
            data: {
            }
        });
    }catch(err){
        res.status(500).json({
            status : "failed",
            message : err
        });
    }
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(7777, () => {
    console.log(`Server Started at 7777`);
});