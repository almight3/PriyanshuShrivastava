import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../component/cart'
//import Filter from '../component/filter'
import './building.css'
function Building(props) {

const [data, setData] = useState([])
const [price,setPrice] = useState([])
const [floor,setFloor] = useState([])
const [bedroom,setBedroom] = useState([])
const [grossm2,setGrossm2] = useState([])
useEffect( ()=>{
       axios.get('/vip/building')
        .then(res => {
            console.log(res)
            setData(res.data)
        })

},[setData])
useEffect(()=>{
    async function filterData(){
         const request = await axios.get('/vip/building/filter')
         setPrice(request.data[0].prices)
         setFloor(request.data[0].floor)
         setBedroom(request.data[0].bedroom)
         setGrossm2(request.data[0].grossm2)
         return request
     }
    filterData();
    
},[])

useEffect(()=>{

})
const priceList = price.map((price)=>{
        return(<option>{price}</option>)
})
const floorList = floor.map((floor)=>{
    return(<option>{floor}</option>)
})
const bedroomList = bedroom.map((bedroom)=>{
    return(<option>{bedroom}</option>)
})
const grossm2List = grossm2.map((grossm2)=>{
    return(<option>{grossm2}</option>)
})

function onPriceChangeHandler(e){
    const price = e.target.value;
    const priceFilter = data.filter((obj)=>{
        if(obj.floor.startsWith(price))
        console.log(obj)
        return true;
    })
   return priceFilter ;
}
function onFloorChangeHandler(e){
    const floor = e.target.value;
    const floorFilter = data.filter((obj)=>{
        if(obj.floor.startsWith(floor))
        console.log(obj)
        return true;
    })
  return floorFilter;  
}


function onBedroomChangeHandler(e){
    const bedroom = e.target.value;
    const bedroomFilter = data.filter((obj)=>{
        if(obj.floor.startsWith(bedroom))
        console.log(obj)
        return true;
    })
  return bedroomFilter;  
}
function onGrossm2ChangeHandler(e){
    const grossm2 = e.target.value;
    const grossm2Filter = data.filter((obj)=>{
        if(obj.floor.startsWith(grossm2))
        console.log(obj)
        return true;
    })
 return  grossm2Filter  
}

return (

        <>
        <label  className='building-label'>Price</label>
        <select className='building-filter' onChange={onPriceChangeHandler}>{priceList}</select>
        <label  className='building-label' >Floor</label>
        <select className='building-filter'onChange={onFloorChangeHandler}>{floorList}</select>
        <label  lassName='building-label'>Bedroom</label>
        <select className='building-filter'onChange={onBedroomChangeHandler}>{bedroomList}</select>
        <label  className='building-label'>Grossm2</label>
        <select className='building-filter'onChange={onGrossm2ChangeHandler}>{grossm2List}</select>
        {data.map((data)=>{
         return(
        <Cart 
         key = {data.uniqueID}
         availability = {data.availability}
         apartment_id = {data.apartment_id}
         aptNo        = {data.aptNo  }
         bedroom      = {data.bedroom  }
         blockMap    = {data.blockMap }
         blockNew    = {data.blockNew  }
         direction   = {data.direction  }
         floor       = {data.floor }
         grossm2     = {data.grossm2 }
         layout      = {data.layout }
         netAream2   = {data.netAream2  }
         price       = {data.price }
         uniqueID    = {data.uniqueID  }
         view         = {data.view}
        />
    )
})}

        </>
    );
}

export default Building;