//Import Mongoose
const mongoose = require('mongoose');

//Schema
const ProviderSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true
        },
        vatNumber: {
            type: String,
            required: true
        },
        vatNumber: {
            type: String,
            required: true
        },
        servicesProvided: {
            type: String, //Not sure about this one, will have to revisit it.
            required: true
        },
        numberTechniciansAvailable: {
            type: Number,
            required: true
        },
        inspectionFee: {
            type: Boolean,
            required: true,
            default: true
        },
        contactName: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        contactEmail: {
            type: String,
            required: true
        },
        contactLocation: {
            type: String,
            required: true
        },
        addressLine1: {
            type: String,
            required: true
        },
        addressLine2: {
            type: String,
            required: true
        },
        addressLine3: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: false
        },
        zipCode: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        showTracking: {
            type: Boolean,
            required: true
        }
        
      
    }
)

//Model
const ProviderModel = new mongoose.model('service_providers', ProviderSchema);
//Export
module.exports = ProviderModel;