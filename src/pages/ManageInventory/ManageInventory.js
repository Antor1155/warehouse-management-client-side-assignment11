import React from 'react';
import useData from '../../customHooks/fetchingAllData/useData';
import TinyInventory from '../Homepage/TinyInventory/TinyInventory';
import "./ManageInventory.css"

const ManageInventory = ({setNotFoundPage}) => {
    setNotFoundPage(false);
    const [products, setProducts]=useData()
    return (
        <div className='manageInvetory'>
            
            <TinyInventory products={products}></TinyInventory>
        </div>
    );
};

export default ManageInventory;