import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ManageInventory.css"

const ManageInventory = ({ setNotFoundPage }) => {
    setNotFoundPage(false);

    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
            .then(res =>res.json())
            .then(data => setAllProducts(data))
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])
    return (
        <div className='manageInvetory text-center'>
            <h2 className=' mt-5'> Manage <span className='customRed'>all {allProducts?.length}</span> products</h2>
            <table className='tinyIntevtoryTable mt-5'>
                <tbody>
                    <tr>
                        <th> </th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Amount</th>
                        <th> </th>
                    </tr>
                    {allProducts.map(product =>
                        <tr key={product.id}>
                            <td> <img src={product.image} alt="product" /></td>
                            <td className='customRed'>{product.name}</td>
                            <td>{product.description}</td>
                            <td>$ {product.price}</td>
                            <td>{product.supplierName}</td>
                            <td>{product.quantity}</td>
                            <td> <button className='customButton px-3'> Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Link to="/additems">
                <button className='btn btn-primary px-5 my-5'>Add Items</button>
            </Link>
            {/* <div className='gradientDivFromWhite'></div> */}
        </div>
    );
};

export default ManageInventory;