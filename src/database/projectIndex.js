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


const Project = require('./models/project');
//methods
app.post('/add',async (req, res) => {
    const project = new Project(req.body);

    try {
        await project.save();
        res.status(201).json({
            status:'Success',
            data: project
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
        const project = await Project.find();

        res.status(200).json({
            status: "success",
            data: project
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
        const project = await Project.findById(req.params.id);

        if (req.body.hasOwnProperty("pName")){ project.pName = req.body.pName;}
        if (req.body.hasOwnProperty("days")){  project.days = req.body.days;}
        if (req.body.hasOwnProperty("date")){   project.date = req.body.date;}
        if (req.body.hasOwnProperty("photo")){   project.photo = req.body.photo;}
        if (req.body.hasOwnProperty("type")){  project.type = req.body.type;}
        if (req.body.hasOwnProperty("best")){ project.best = req.body.best;}
        if (req.body.hasOwnProperty("link")){   project.link = req.body.link;}

        const p1 = await project.save();
        res.json(p1);

    }catch (err){
        res.send("Error");
    }
});

app.delete('/:id', async (req,res) => {
    await Project.findByIdAndDelete(req.params.id);
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

app.listen(7778, () => {
    console.log(`Server Started at 7778`);
});