const express = require('express');
const router = express.Router();
const TechrequestModel = require('../models/TechrequestModel.js');

router.post(
    '/add',
    (req, res) => {

        const formData = {  
            jobTitle: req.body.jobTitle ,
            jobDescription: req.body.jobDescription ,
            country: req.body.country,
            state: req.body.state,
            jobCity: req.body.jobCity,
            addressLine1:req.body.addressLine1,
            amount: req.body.amount ,
            contactName: req.body.contactName,
            contactNumber: req.body.contactNumber,
            contactEmail: req.body.contactEmail,
            moreDetails: req.body.moreDetails
                          

        };

        const newTechrequest = new TechrequestModel(formData);

        newTechrequest
        .save()
        .then(
            (document) => {
                res.send(document)
            }
        )
        .catch(
            (error) => {
                console.log('error', error);
                res.send({'error': error})
            }
        )
    }
)

router.post(
    '/update',
    (req, res) => {
       
        const formData = {  
            jobTitle: req.body.jobTitle ,
            jobDescription: req.body.jobDescription ,
            country: req.body.country,
            state: req.body.state,
            jobCity: req.body.jobCity,
            addressLine1:req.body.addressLine1,
            amount: req.body.amount ,
            contactName: req.body.contactName,
            contactNumber: req.body.contactNumber,
            contactEmail: req.body.contactEmail,
            moreDetails: req.body.moreDetails
                          

        };

        const filter = {jobTitle: formData.jobTitle};
        const options = {upsert : false};
        const updateDoc = {
            $set:{
                jobDescription: formData.jobDescription,
                country: formData.country,
                state: formData.state,
                jobCity: formData.jobCity,
                addressLine1:formData.addressLine1,
                amount: formData.amount,
                contactName: formData.contactName,
                contactNumber: formData.contactNumber,
                contactEmail: formData.contactEmail,
                moreDetails: formData.moreDetails
            }
        }

        TechrequestModel
         .updateOne( filter, updateDoc, options)
         .then(
             (document) =>{
                 res.send(document)
             }
         )
         .catch(
             (error) => {
                 if(error){
                     console.log(error)
                 }
                 else
                 {
                     console.log(document)
                 }
             }
         )
            

    }
)


router.get(
    '/',
    (req, res) => {
        TechrequestModel
        .find()
        .then(
            (document) => {
                res.send(document);
            }
        )
        .catch(
            (error) => {
                console.log('error', error);
            }
        )
    }
)
module.exports = router;