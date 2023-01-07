const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: false,
        },
        company: {
            type: String,
            required: true,
            unique: false,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        url: {
            type: String,
            required: true,
        },
        duties: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Job", JobSchema)

// I will comment in a sample so new info can be added to the database using postman 
