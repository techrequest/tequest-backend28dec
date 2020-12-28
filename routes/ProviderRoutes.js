const express = require('express');
const router = express.Router();
const ProviderModel = require('../models/ProviderModel.js');

router.get(
    '/',
    (req, res) => {
        ProviderModel
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


router.post(
    '/',
    (req, res) => {
       
        const formData = {            
            companyName: req.body.companyName,
            vatNumber: req.body.vatNumber,
            servicesProvided: req.body.servicesProvided,
            numberTechniciansAvailable: req.body.numberTechniciansAvailable,
            inspectionFee: req.body.inspectionFee,            
            contactName: req.body.contactName,
            contactNumber: req.body.contactNumber,
            contactEmail: req.body.contactEmail,
            contactLocation: req.body.contactLocation,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            addressLine3: req.body.addressLine3,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            country: req.body.country,
            showTracking: req.body.showTracking
        };

        const newProvider = new ProviderModel(formData);

        newProvider
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

module.exports = router;