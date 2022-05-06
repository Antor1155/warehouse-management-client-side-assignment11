import React, { useEffect } from 'react';
import "./ManageInventory.css"

const ManageInventory = ({setNotFoundPage}) => {
    setNotFoundPage(false);
    useEffect(()=>{
        document.body.style = 'background:white;';
    },[])
    return (
        <div className='manageInvetory'>
            
            
        </div>
    );
};

export default ManageInventory;