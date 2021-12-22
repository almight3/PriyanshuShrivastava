import React from 'react';
import {Card,Button} from 'react-bootstrap'
import {ListGroup} from  'react-bootstrap'
import {Link} from 'react-router-dom'
function Cart(props) {
    return (
        <>          
    <Card style={{ width: '15rem' , margin : '2rem 2rem 2rem 4rem ' , display : 'inline-block' , border: ' 1px solid black ' , padding :'1 rem'} }  >
        <ListGroup variant="flush" style={{fontSize : '10px'}}>
            <ListGroup.Item>Availability - {props.availability}</ListGroup.Item> 
            <ListGroup.Item>ApartmentNo - {props.aptNo}</ListGroup.Item>
            <ListGroup.Item>Price - {props.price}</ListGroup.Item>
       </ListGroup>
        <Link to = {`/vip/building/${props.apartment_id}/detail`} >
           <Button variant="secondary"  style ={{margin:'0.5rem', padding:'3px 8px ' , fontSize:'10px', }}>Details</Button>
        </Link>


   </Card>

        </>
    );
}

export default Cart;