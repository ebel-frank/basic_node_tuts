const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobScehema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Job = mongoose.model('Job', jobScehema)

module.exports = Job


