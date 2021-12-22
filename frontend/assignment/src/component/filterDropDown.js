import React from 'react';

function FilterDropDown(props){

    return(
    <>
        <label id="dropdown-basic" style={{margin:'2rem 0.5rem 2rem 2rem', fontSize:'10px'}}> {props.name}</label>
        <select style={{padding:'0.2rem', fontSize:'10px' , backgroundColor:'#6c757d',color:'#fff', borderColor: '#6c757d', borderRadius:'5px' }}>{props.data}</select>
    </>    
    )
}

export default FilterDropDown;

