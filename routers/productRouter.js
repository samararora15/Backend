const express = require('express');
const Model = require('../models/productModel')

const router = express.Router();

router.post('/add',(req,res) =>{
    console.log(req.body);
    // res.send('response from product add');

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getall',(req,res) =>{
    // res.send('response from product getall');

    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyname/:name',(req,res) =>{
    console.log(req.params.model);
    // res.send('response from user getbyemail');

    Model.find({model: req.params.name})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyid/:id',(req,res) =>{
    // res.send('response from product getbyid');

    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id',(req,res) =>{
    // res.send('response from product update');
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.delete('/delete/:id',(req,res) =>{
    // res.send('response from product delete');
    Model.findByIdAndDelete(req.params.id, {new : true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;