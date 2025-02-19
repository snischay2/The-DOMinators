const router = require('express').Router();
const Contact = require('../models/contact');

router.post("/post", async (req, res) => {
    try {
        const {name, phonenumber, emailid, anymessage} = req.body;
        const newContact = new Contact({name, phonenumber, emailid, anymessage});
        await newContact.save().then(() => {
            res.status(200).json({message: "Data Saved Successfully"});
        }, (error) => {
            res.status(400).json({message: "Data not saved"});
        });
    } catch (error) {
        res.status(400).json({message: "Technical Error Ocurred"});
    }

    

});

module.exports = router;