const router = require("express").Router();
const Job = require("../models/Job");


//Create new post
router.post("/", async (req, res) => {
    const newJob = new Job(req.body);

    try {
        const savedJob = await newJob.save();
        res.status(200).json(savedJob);
    } catch (err) {
        res.status(500).json(err);
    };
});

//Update post

router.put("/:id", async (req, res) => {

    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedJob);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete post
router.delete("/:id", async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        await job.delete()
        res.status(200).json("Post had been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get post
router.get("/:id", async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json(job);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all posts
router.get("/", async (req, res) => {
    try {
        allJobs = await Job.find();
        res.status(200).json(allJobs);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
