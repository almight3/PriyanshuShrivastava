const express = require('express');
const router = express.Router();
const Data = require('../model/data')
const Filter = require('../model/filter')
//fetching data 

router.get('/vip/building', async (req,res)=>{
    try{
        const  data = await Data.find({})
        res.send(data) 
    }
    catch(err){
      res.send("error while fetching data ")
      res.send(err)   

    }
})

// fetching buildings details
router.get('/vip/building/:id/detail', async (req,res)=>{
    try{
     
        const  data = await Data.find({apartment_id:req.params.id})
        res.send(data) 
    }
    catch(err){
      res.send("error while fetching data ")
      res.send(err)   

    }
})

// fetching building from their locations
router.get('/vip/location', async (req,res)=>{
    res.send('location route')
})

//fetching filter data 

router.get('/vip/building/filter', async (req,res)=>{
    try{
        const  dataFilter = await Filter.find()
        res.send(dataFilter) 
       //console.log(dataFilter)
    }
    catch(err){
      res.send("error while fetching data ")
      res.send(err)   

    }
})
module.exports = router;