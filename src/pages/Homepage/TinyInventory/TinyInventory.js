import React, { useEffect, useState } from 'react';
import "./TinyInventory.css"

const TinyInventory = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setproducts(data));
    }, [])
    return (
        <div className='tinyInventory '>
            <div className='gradientDivFromBlack'> </div>
            <h1 className='mt-3 mb-5 text-center'>Visualization <span className='customRed'>Of</span> Intentory</h1>
            <table className='tinyIntevtoryContainer pt-3'>
                <tr>
                    <th></th>
                    <th>name</th>
                    <th>specification</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>amount</th>
                    <th></th>
                </tr>
                {products.map(product =>
                    <tr className='datas'>
                        <td className='ps-2'> <img src={product.image} alt="product" /></td>
                        <td className=''>{product.name}</td>
                        <td className=''>{product.description}</td>
                        <td className=''>{product.price}</td>
                        <td className=''>{product.supplierName}</td>
                        <td className=''>{product.quantity}</td>
                        <td className='pe-2'> <button className='customButton '> Update</button></td>
                    </tr>)
                }
            </table>
            <div className='text-center'>
                <button className='manageInventoryBtn p-3 mt-3 text-center'><strong> Manage Inventory</strong></button>
            </div>
            <div className='gradientDivFromWhite'></div>
        </div>
    );
};

export default TinyInventory;