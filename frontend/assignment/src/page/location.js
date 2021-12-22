import React from 'react';
import LocationNav from '../component/locationnav'
import ProductCart from '../component/productcart'
import Footer from '../component/footer'
function Location(props) {
    return (
        <div>
           <LocationNav />
           <ProductCart />
           <Footer />
        </div>
    );
}

export default Location;