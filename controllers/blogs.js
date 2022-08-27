//Dependencies
const express = require('express');

//route object
const blogRouter = express.Router();
const blog = require('../models/blog');

//seed route
const blogData = require('../models/blogSeed');

blogRouter.get('/blog', (req, res) => {
    blog.deleteMany({}, (error, allBlogs) => {
      blog.create(blogData, (error, data) => {
          res.redirect('/blogs')
      })
    })
  });

//Index
blogRouter.get('/', async (req, res) => {
    try {
        res.status(200).json(await blog.find({}));
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//create
blogRouter.post('/', async (req, res) => {
    for(let key in req.body) {
        if(req.body[key] === '') {
            delete req.body[key];
        }
    }

    try {
        res.status(201).json(await blog.create(req.body))
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

//Delete
blogRouter.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await blog.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
} )

module.exports = blogRouter;