import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap'
function LocationNavigation(props) {
    return (
        <div>
    <Navbar expand = 'md' bg="dark" variant="dark">
    <Container>
         <Navbar.Brand style={{textAlign:"center"}}>Location</Navbar.Brand>
         <Nav className="me-auto">
         
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
}

export default LocationNavigation;