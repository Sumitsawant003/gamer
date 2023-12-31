require('dotenv').config();
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');



// Creating user There.........
router.post('/createexp', async (req, res) => {

    const { pdfUrl, userId, summary } = req.body
    try {
        const user = await Event.create({
            userId: userId,
            pdfUrl: pdfUrl,
            summary: summary
        })
        res.json({ user })
    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }
})

router.post('/expupdate', async (req, res) => {
    const { id, summary,pdfUrl } = req.body
    if (!id) {
        return res.status(400).json({ errors: 'Email already exited.' });
    }
    try {
        let update = await Event.findByIdAndUpdate({ _id:id }, { summary: summary, pdfUrl: pdfUrl });
        res.send(update)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})

router.get('/getexp', async (req, res) => {
    try {
        const userid = req.header('userid')
        let find = await Event.find({ userId: userid });
        res.send(find)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})



module.exports = router