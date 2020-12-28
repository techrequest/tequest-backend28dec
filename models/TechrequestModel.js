//Import Mongoose
const mongoose = require('mongoose');

//Schema
const TechrequestSchema = new mongoose.Schema(
    {
        jobTitle: {
            type: String,
            required: true
        },
        jobDescription: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: false
        },
        jobCity: {
            type: String,
            required: true
        },
        addressLine1: {
            type: String,
            required: true
        },
        amount: {
            type: Number, 
            required: true
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

        moreDetails: {
            type: String,
            required: true
        }
        
      
    }
)

//Model
const TechrequestModel = new mongoose.model('tech_requests', TechrequestSchema);
//Export
module.exports = TechrequestModel;