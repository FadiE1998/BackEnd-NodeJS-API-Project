const {postMessage} = require('../models/postMessage')
const mongoose = require('mongoose')

const getPost = async (req, res) =>{
    try {
        const posts = await postMessage.find({}, {__v: 0})
        
        
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }
}

const createPost = async (req, res) =>{
    
    try {
        const post = new postMessage(req.body)
        const result = await post.save()
        res.send(result)

    } catch (error) {
        res.send(error.message)
    }
}

const getUniquePost = async (req, res, next) => {
    
    const id = req.params.postId
    postMessage.findById(id)
    
    try {
        const post = await postMessage.findById(id)
        res.send(post)

    } catch (error) {
        res.send(error.message)
    }
    
}

const deletePost = async (req, res, next) => {

    const id = req.params.postId

    try {
        const result = await postMessage.findByIdAndDelete(id)
        res.send(result)

    } catch (error) {
        
        res.send(error.message)
    }

}

const updatePost = async (req, res, next) => {

    try {
        const id = req.params.postId
        const update = req.body

        const result = await postMessage.findByIdAndUpdate(id, update, {new: true})

        res.status(200).json(result)

         
    } catch (error) {
        res.status(400).json({message: error.message})
    }
 
}

module.exports = {getPost, createPost, getUniquePost, deletePost, updatePost}

