import React from 'react';
//import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
function Footer(props) {
    return (
        <div>
    <Navbar expand = 'md' bg="dark" variant="dark" sticky="bottom" style={{positon:'relative'}}>
          <p style={{width:'25rem', color:'white', fontSize:"15px", margin:"auto"}} > Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </Navbar>
    </div>
    );
}

export default Footer;