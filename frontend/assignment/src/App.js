import  React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Building from './page/building'
import Detail from './page/details'
import Home from './page/home'
import Location from './page/location'
import Error from './component/error';
//import Filter from './component/filter'
function App(props) {
  return (
     <div>     
      <Routes>
        
         <Route index path='/vip/home' element={<Home />} />
         <Route index path='/vip/building' element={<Building />} />
         <Route index path='/vip/building/:apartment_id/detail' element={<Detail />} />
         <Route index path='/vip/location' element={<Location />} />
         <Route index path="/" element={<Navigate to ='/vip/home'/>} />
         <Route path="*" element={< Error/> />
      </Routes>
     
     
     </div>
  );
}

export default App;