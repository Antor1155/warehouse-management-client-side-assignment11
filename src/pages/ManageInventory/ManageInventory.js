import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import "./ManageInventory.css"

const ManageInventory = ({ setNotFoundPage }) => {
    setNotFoundPage(false);

    const [allProducts, setAllProducts] = useState([]);
    const [deleted, setDeleted] = useState({})

    // getting all product to manage 
    useEffect(() => {
        fetch("https://calm-erin-dibbler-cap.cyclic.app/manageAll")
            .then(res => res.json())
            .then(data => setAllProducts(data))
        document.body.style = 'background:rgb(106 140 112)';
    }, [, deleted])


    // deleting item form database and ui 
    const handleDelete = id => {

        const confirm = window.confirm("really want to delete", id);
        if (confirm) {
            fetch(`https://calm-erin-dibbler-cap.cyclic.app/deleteItem/${id}`,{
                method:'delete'
            })
                .then(res => res.json())
                .then(data => setDeleted(data));
        }

    }
    if(!allProducts.length){
        return(<Loading></Loading>)
    }

    return (
        <div className='manageInvetory text-center'>
            <h2 className=' mt-4'> Manage <span className='customRed'>all {allProducts?.length}</span> products</h2>
            <table className='tinyIntevtoryTable mt-5'>
                <tbody>
                    <tr className='headerRow'>
                        <th> </th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Amount</th>
                        <th> </th>
                    </tr>
                    {allProducts.map(product =>
                        <tr key={product._id}>
                            <td> <img src={product.image} alt="product" /></td>
                            <td className='customRed'>{product.name}</td>
                            <td>{product.description}</td>
                            <td>$ {product.price}</td>
                            <td>{product.supplierName}</td>
                            <td>{product.quantity}</td>
                            <td> <button onClick={() => handleDelete(product._id)} className='customButton px-3'> Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Link to="/additems">
                <button className='btn btn-info px-5 my-5'>Add Items</button>
            </Link>
            {/* <div className='gradientDivFromWhite'></div> */}
        </div>
    );
};

export default ManageInventory;