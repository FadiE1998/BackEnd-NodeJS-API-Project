const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
const postRoutes = require('./routes/posts.js')

const app = express()

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION = 'mongodb+srv://fadi1998:fadi1998@cluster0.bvm6k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)