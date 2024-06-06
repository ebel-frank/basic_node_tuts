const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const app = require('express')()
const Job = require('./models/job')
const PORT = 5000

// connect to mongodb
const dbUrl = "mongodb+srv://elitejobagent:hK9IC7x9toUSh55b@elitejob-cluster.xzgm2qi.mongodb.net/elite-job?retryWrites=true&w=majority&appName=eliteJob-Cluster";
mongoose.connect(dbUrl)
    .then((result) => {
        console.log("Connected to DB")
        app.listen(5000)
    })
    .catch((err) => console.log(`Error: ${err}`))

// API Endpoints
app.get('/jobs', (req, res) => {
    Job.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err);
        })
})

app.get('/job/:id', (req, res) => {
    Job.findById(req.params.id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err);
        })
})

app.get('/add-job', (req, res) => {
    const job = new Job({
        id: '0',
        title: 'My second elite job post',
        description: 'I want to buy a new iphone'
    })
    job.save()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err);
        })
})

// (154.68.200.46
// user: frankcebeledike
// pass: tNGMmAamgCbdu2rp
// user: elitejobagent
// pass: hK9IC7x9toUSh55b

// MongoClient.connect(dbUrl, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });