const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name: String,
    topic: String,
    message: String,
})

const postMessage = mongoose.model('postMessage', postSchema)

module.exports = {postMessage}