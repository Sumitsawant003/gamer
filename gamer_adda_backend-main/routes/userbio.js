require('dotenv').config();
const express = require('express');
const router = express.Router();
const Userbio = require('../models/Userbio');




// Creating user There.........
router.post('/createbio', async (req, res) => {

    const { userBio, userId } = req.body
    try {

        let find = await Userbio.findOne({ userId: userId });
        if (!find) {
            const user = await Userbio.create({
                userBio: userBio,
                userId: userId,
            })
        
            res.json({user})
        }else{
           
            let update = await Userbio.findByIdAndUpdate({_id:find._id},{userBio:userBio});
            res.send(update)
        }
       

    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }

})


router.get('/getbio', async (req, res) => {
    try {
        
        const userid = req.header('userid')
        
        let find = await Userbio.find({ userId: userid });
        res.send(find)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})

// router.post('/updateamount', async (req, res) => {
//     try {
//         const { id,amount } = req.body
      
//         let update = await Addamount.findByIdAndUpdate(id,{amount:amount});
//         res.json({update})
//     } catch (error) {
//         console.error(error.massage);
//         res.status(500).send('interenal some Error are occuring.');
//     }
// })







module.exports = router