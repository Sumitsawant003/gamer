require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Creating user There.........
router.post('/createuser', async (req, res) => {

    const { username, email, phone, password, birthdate, country, whois } = req.body
    try {
        let findemail = await User.findOne({ email: email });
        let findusername = await User.findOne({ username: username });

        if (findemail) {
            return res.status(400).json({ errors: 'Email already exited.' });
        }
        if (findusername) {
            return res.status(400).json({ errors: 'Username already exited.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);

        const user = await User.create({
            username: username,
            email: email,
            phone: phone,
            password: hashPass,
            birthdate: birthdate,
            country: country,
            whois: whois,
            details: []
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        res.json({authToken})

    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }

})

router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body
        let find = await User.findOne({ email: email });
        if (!find) {
            return res.status(400).json({ errors: 'Email New' });
        }
        const passwordCompare = await bcrypt.compare(password, find.password);
        if (!passwordCompare) {
            return res.status(400).json({ errors: 'password incorrect..' });
        }
        const data = {
            user: {
                id: find.id
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        res.json({ authToken })
    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }

})


router.get('/getuser', async (req, res) => {
    try {
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).send({ error: 'Invalid token' })
        }
        const data = jwt.verify(token, process.env.JWT_SECRET)
        userId = data.user.id;
        const user = await User.findById(data.user.id).select('-password')
        res.send(user)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})

router.get('/getsponsor', async (req, res) => {
    try {
       
        const user = await User.find({whois: "sponsor"}).select('-password')
        res.send(user)

    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})

router.get('/getgamers', async (req, res) => {
    try {
       
        const user = await User.find({whois: "gamer"}).select('-password')
        res.send(user)

    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})







module.exports = router