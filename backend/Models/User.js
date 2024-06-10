const mongoose = require('mongoose');

// Define the user schema
const userModel = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    jobId: { type: String, required: true },
    startDate: { type: String, required: true },
    closeDate: { type: String, required: true },
    location: { type: String, required: true },
    department: { type: String, required: true },
    qualification: { type: String, required: true },
    salary: { type: String, required: true },
    jobDescription: { type: String, required: true },
    reviewerFName: { type: String, required: true },
    reviewerLName: { type: String, required: true },
    reviewDate: { type: String, required: true },
    approveFName: { type: String, required: true },
    approveLName: { type: String, required: true },
    approvalDate: { type: String, required: true }
}, { timestamps: true });

// Create and export the User model
const User = mongoose.model('userSchema', userModel);
module.exports = User;
