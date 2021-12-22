import   React from 'react';
import  {Card} from 'react-bootstrap'
import  {ListGroup} from  'react-bootstrap'
function DetailCart(props) {
    return (
        <>          
    <Card style={{ maxWidth: '60%', margin :'3rem auto' } }  >
        <Card.Header>Apartment Deatils</Card.Header>

        <ListGroup variant="flush" style={{fontSize : '10px'}}>
            <ListGroup.Item>Availability - {props.availability}</ListGroup.Item> 
            <ListGroup.Item>ApartmentNo - {props.aptNo}</ListGroup.Item>
            <ListGroup.Item>Price - {props.price}</ListGroup.Item>
            <ListGroup.Item>Bedrooms - {props.bedroom}</ListGroup.Item>
            <ListGroup.Item>BlockMap -{props.blockMap}</ListGroup.Item>
            <ListGroup.Item>Block - {props.blockNew}</ListGroup.Item>
            <ListGroup.Item>Direction -{props.direction}</ListGroup.Item>
            <ListGroup.Item>Floor - {props.floor}</ListGroup.Item>
            <ListGroup.Item>SquareMeter - {props.grossm2}</ListGroup.Item>
            <ListGroup.Item>Layout - {props.layout}</ListGroup.Item>
            <ListGroup.Item>Area - {props.netAream2}</ListGroup.Item>
       </ListGroup>
    </Card>

        </>
    );
}

export default DetailCart;
