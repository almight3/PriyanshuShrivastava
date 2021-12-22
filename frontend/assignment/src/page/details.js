import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import DetailCart from '../component/detailCart'
function Detail(props) {

const [detail,setDetail] = useState([])
const {apartment_id} = useParams();
useEffect(()=>{
    axios.get(`/vip/building/${apartment_id}/detail`)
    .then((res)=>{
        console.log(res)
        setDetail(res.data)
    })

},[apartment_id])



const detailList = detail.map((data)=>{
     return(
         <DetailCart 
           key = {data.uniqueID}
           apartment_id = {data.apartment_id}
           aptNo        = {data.aptNo}
           availability = {data.availability}
           bedroom   = {data.bedroom}
           blockMap  = {data.blockMap}
           blockNew = {data.blockNew}
           direction = {data.direction}
           floor    = {data.floor} 
           grossm2 = {data.grossm2}
           layout = {data.layout}
           netAream2 = {data.netAream2}
           price  = {data.price}
            
         
         />
     )
})



    return (
        <div>
            {detailList}
        </div>
    );
}

export default Detail;

