const Data = require('./model/data')
const Filter = require('./model/filter')
const filterData = require('./data/test_fliter_options (3) (1).json')
const fileData = require('./data/test_units_data (4) (1).json')

const SeedDB = async ()=>{
        await Data.insertMany(fileData)
        await Filter.insertMany(filterData)
        .then(()=>{
            console.log('Data Seeded')
        })    
        .catch((err)=>{
            console.log("error while seeding DB")
            console.log(err)
        })
}

module.exports = SeedDB;

