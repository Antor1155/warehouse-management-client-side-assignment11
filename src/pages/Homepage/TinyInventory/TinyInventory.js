import React from 'react';
import "./TinyInventory.css"

const TinyInventory = ({products}) => {
    
    return (
        <div className='tinyInventory '>
            <div className='gradientDivFromBlack'> </div>
            <h1 className='sectionStart mb-4 text-center'>Visualization <span className='customRed'>Of</span> Intentory</h1>
            <table className='tinyIntevtoryTable mt-5'>
                <tr>
                    <th> </th>
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
                        <td className='customRed'>{product.name}</td>
                        <td>{product.description}</td>
                        <td>$ {product.price}</td>
                        <td>{product.supplierName}</td>
                        <td>{product.quantity}</td>
                        <td> <button className='customButton'> Update</button></td>
                    </tr>)
                }
            </table>
            <div className='text-center '>
                <button className='manageInventoryBtn mt-4  py-2  px-2 mx-auto'><strong> Manage Inventory</strong></button>
            </div>
        </div>
    );
};

export default TinyInventory;