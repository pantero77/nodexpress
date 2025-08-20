const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send('Test route is working');
});

//add job via post

router.post('/add', async(req, res) => {
    let { nome, description, company, salary, email, new_job } = req.body;

    try {
        await Job.create({
            nome,
            company,
            description,
            salary,
            email,
            new_job
        });
        res.send('Job created successfully');
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to create job' });
    }
});

module.exports = router;