const express = require('express');
const Model = require('../models/userModel')

const router = express.Router();

router.post('/add',(req,res) =>{
    console.log(req.body);
    // res.send('response from user add');

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall',(req,res) =>{
    // res.send('response from user getall');

    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// : denotes URL parameter
router.get('/getbyemail/:email',(req,res) =>{
    console.log(req.params.email);
    // res.send('response from user getbyemail');

    Model.findOne({email: req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyid/:id',(req,res) =>{
    // res.send('response from user getbyid');

    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//put is used for update
router.put('/update/:id',(req,res) =>{
    // res.send('response from user update');
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.delete('/delete/:id',(req,res) =>{
    // res.send('response from user delete');
    Model.findByIdAndDelete(req.params.id, {new : true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.post('/authenticate',(req,res) =>{
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(400).json({message : 'login failed'});
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;