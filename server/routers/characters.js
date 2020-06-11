const express = require('express')
const Characters = require('../models/characters')

const router = new express.Router()

router.post('/createCharacter', async (req, res) => {

    const characters = await Characters.find({}).sort({sortNum: -1}).limit(1)
    const sortNum = characters[0].sortNum + 1

    const newCharacter = new Characters({...req.body, sortNum})

    try {

        await newCharacter.save()
        res.status(201).send('character added')

    } catch(error) {

        res.status(400).send(error)

    }

})

router.get('/readAllCharacters', async (req, res) => {

    try {

        const characters = await Characters.find({})
        res.status(200).send(characters)

    } catch(error) {

        res.status(500).send(error)

    }

})
router.get('/readSortNum', async (req, res) => {

    try {

        const characters = await Characters.find({}).sort({sortNum: -1}).limit(1)
        const sortNum = characters[0].sortNum
        res.send({sortNum})

    } catch(error) {

        res.status(500).send(error)

    }

})

module.exports = router