const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send('Test route is working');
});

//add job via post

router.post('/add', async(req, res) => {
    let { nome, description, company, location, salary, email } = req.body;

    //insert
    try {
        const job = await Job.create({
            nome,
            description,
            company,
            location,
            salary,
            email
        });
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: 'Failed to create job' });
    }
});

module.exports = router;