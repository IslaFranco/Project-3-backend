//Dependencies
const express = require('express');

//route object
const router = express.Router();
const stone = require('../models/stone');

//seed route
const seedData = require('../models/stoneSeed');

router.get('/seed', (req, res) => {
  stone.deleteMany({}, (error, allStones) => {
    stone.create(seedData, (error, data) => {
        res.redirect('/stones')
    })
  })
});

//Index
router.get('/', async (req, res) => {
    try {
        res.status(200).json(await stone.find({}));
    } catch (error) {
        res.status(400).json({ message: 'bad request' })
    }
});

//create
router.post('/', async (req, res) => {
    for(let key in req.body) {
        if(req.body[key] === '') {
            delete req.body[key];
        }
    }

    try {
        res.status(201).json(await stone.create(req.body))
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

//Delete
router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await stone.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
} )

module.exports = router;