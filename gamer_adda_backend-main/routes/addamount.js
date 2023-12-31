require('dotenv').config();
const express = require('express');
const router = express.Router();
const Addamount = require('../models/Addamount');




// Creating user There.........
router.post('/createamount', async (req, res) => {

    const { amount, userId } = req.body
    try {
        const user = await Addamount.create({
            amount: amount,
            userId: userId,
        })
    
        res.json({user})

    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }

})


router.get('/getamount', async (req, res) => {
    try {
        // const { userId } = req.body
        const userid = req.header('userid')
        
        let find = await Addamount.find({ userId: userid });
        res.send(find)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})

router.post('/updateamount', async (req, res) => {
    try {
        const { id,amount } = req.body
      
        let update = await Addamount.findByIdAndUpdate(id,{amount:amount});
        res.json({update})
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})







module.exports = router