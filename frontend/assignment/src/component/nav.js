import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap'
function Navigation(props) {
    return (
        <div>
    <Navbar expand = 'md' bg="dark" variant="dark">
    <Container>
         <Navbar.Brand>Home</Navbar.Brand>
         <Nav className="me-auto">
         <Nav.Link ><Link to = '/vip/building'>Building</Link></Nav.Link>
         <Nav.Link ><Link to = '/vip/location'>Location</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
}

export default Navigation;