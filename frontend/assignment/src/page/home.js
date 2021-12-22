import React from 'react';
import Nav from '../component/nav'
import ProductCart from '../component/productcart'
import Footer from '../component/footer'
function Home(props) {
    return (
        <div>
           <Nav />
           <ProductCart />
           <Footer />
        </div>
    );
}

export default Home;