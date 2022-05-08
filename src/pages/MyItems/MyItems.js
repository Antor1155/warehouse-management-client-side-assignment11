import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
import "./MyItems.css"

const MyItems = ({setNotFoundPage}) => {
    setNotFoundPage(false);

    const [deleted, setDeleted] = useState({})

    const [user] =useAuthState(auth);

    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';

        fetch(`http://localhost:5000/myItem?email=${user?.email}`)
            .then(res =>res.json())
            .then(data => setAllProducts(data))
    }, [user, deleted])

    // handling delete items 
    
    const handleDelete=(id) =>{
        const confirm = window.confirm("really want to delete", id);
        if (confirm) {
            fetch(`http://localhost:5000/deleteItem/${id}`,{
                method:'delete'
            })
                .then(res => res.json())
                .then(data => setDeleted(data));
        }
    }

    return (
        <div className='myItems text-center mt-5'>
            <h2>All <span className='customRed'> {allProducts.length}</span> items added by user</h2>
            <h4><span className='customRed'>user:</span> {user?.email} </h4>

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
                        <tr key={product._id}>
                            <td> <img src={product.image} alt="product" /></td>
                            <td className='customRed'>{product.name}</td>
                            <td>{product.description}</td>
                            <td>$ {product.price}</td>
                            <td>{product.supplierName}</td>
                            <td>{product.quantity}</td>
                            <td> <button onClick={()=>handleDelete(product._id)} className='customButton px-3'> Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;