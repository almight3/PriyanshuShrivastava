// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
// import FilterDropDown from './filterDropDown'

// function Filter(props) {
// const [price,setPrice] = useState([])
// const [floor,setFloor] = useState([])
// const [bedroom,setBedroom] = useState([])
// const [grossm2,setGrossm2] = useState([])
// useEffect(()=>{
// async function filterData(){
//      const request = await axios.get('/vip/building/filter')
//      setPrice(request.data[0].prices)
//      setFloor(request.data[0].floor)
//      setBedroom(request.data[0].bedroom)
//      setGrossm2(request.data[0].grossm2)
//      return request
//  }
// filterData();

// },[])
// console.log(price)

// const priceList = price.map((price)=>{
//         return(
//             <option>{price}</option>
//           )
        
// })
// const floorList = floor.map((floor)=>{
//     return(
//         <option>{floor}</option>
//       )
    
// })
// const bedroomList = bedroom.map((bedroom)=>{
//     return(
//         <option>{bedroom}</option>
//       )
    
// })

// const grossm2List = grossm2.map((grossm2)=>{
         
//     return(
//       <option>{grossm2}</option>
//     )
  
// })
// function filterThroughPrice(e){
// console.log(e.target.value)

// }


// return (
//         <div>


//           <FilterDropDown 
//           data = {priceList}
//           name = "Price"
//           />
//           <FilterDropDown 
//           data = {floorList}
//           name = "Floor"
//           />
//           <FilterDropDown 
//           data = {bedroomList}
//           name = "Bedroom"
//           />
//           <FilterDropDown 
//           data = {grossm2List}
//           name = "Grossm2"
//           />
//         </div>
//     );
// }

// export default Filter;