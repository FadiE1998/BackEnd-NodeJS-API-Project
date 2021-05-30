const express = require('express');
const router = express.Router()
const app = express()
const { getPost, createPost, getUniquePost, deletePost, updatePost } = require('../controllers/posts')

router.get('/', getPost) // Get all posts

router.post('/', createPost) // Create a post

router.get('/:postId', getUniquePost) // Get a specific post by id

router.delete('/:postId', deletePost) // Delete a specific post

router.patch('/postId', updatePost) // Update a specific post



module.exports = router