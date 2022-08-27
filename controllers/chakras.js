//dependencies
const express = require('express');

//route object
const chakraRouter = express.Router();
const chakra = require('../models/chakra');

//seed route
const chakraData = require('../models/chakraSeed');

chakraRouter.get('/chakra', (req,res) => {
    chakra.deleteMany({}, (error, allChakras) => {})
    chakra.create(chakraData, (error, data) => {
        res.redirect('/chakras')
    })
})

//index route
chakraRouter.get('/', async (req, res) => {
    try {
        res.status(200).json(await chakra.find({}));
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//create
chakraRouter.post('/', async (req, res) => {
    for(let key in req.body) {
        if(req.body[key] === '') {
            delete req.body[key];
        }
    }

    try {
        res.status(201).json(await chakra.create(req.body))
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
});

//Delete
chakraRouter.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await chakra.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json({ message: 'bad request' });
    }
} )

module.exports = chakraRouter;