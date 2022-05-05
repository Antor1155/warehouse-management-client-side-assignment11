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
            <h1 className='mt-3 text-center'>Visualization <span className='customRed'>Of</span> Intentory</h1>
            <table className='tinyIntevtoryContainer pt-3'>
                <tr>
                    <th> </th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Supplier</th>
                    <th>Amount</th>
                    <th> </th>
                </tr>
                {products.map(product =>
                    <tr className=''>
                        <td> <img src={product.image} alt="product" /></td>
                        <td className='customBorder'>{product.name}</td>
                        <td className='customBorder'>{product.description}</td>
                        <td className='customBorder'>{product.price}</td>
                        <td className='customBorder'>{product.supplierName}</td>
                        <td className='customBorder'>{product.quantity}</td>
                        <td> <button> Update</button></td>
                    </tr>)
                }
            </table>
            <div className='gradientDivFromWhite'></div>
        </div>
    );
};

export default TinyInventory;