const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
    
        ID: {
            type: String,
            required:true
        },
        uniqueID: {
            type:Number,
            required:true

        },
        availability: {
            type : String,
            require: true
        },
        bedroom: {
            type: String,
            required:true
        },
        view: {
            type : String,
            //required:true
        },
        layout: {
            type:String,
            required:true
        },
        floor: {
            type:String,
            required:true
        },
        aptNo: {
            type:Number,
            required:true
        },
        grossm2: {
            type: String,
            required:true
        },
        netAream2: {
            type:Number,
            required:true
        },
        direction: {
            type:String,
            //required:true
        },
        blockNew: {
            type:String,
           // required:true
        },
        price: {
            type:Number,
            required:true
        },
        blockMap: {
            type:String,
           // required:true
        },
        apartment_id: {
            type:String,
            required:true
        }
    
})

const Data = mongoose.model('Data',dataSchema)

module.exports = Data;