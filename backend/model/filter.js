const mongoose = require('mongoose');
const { Schema } = mongoose;

const filterSchema = new Schema ({
    
        prices: {
            type : Array,
            required:true
        },
        floor:{
            type : Array,
            required:true
        },
        bedroom:{
            type : Array,
            required:true
        },
       
        grossm2 :{
            type : Array,
            required:true
        }
       
    
})

const Filter = mongoose.model('Filter',filterSchema)


module.exports = Filter;