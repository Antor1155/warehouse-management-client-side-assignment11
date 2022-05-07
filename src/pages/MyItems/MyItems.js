import React, { useEffect, useState } from 'react';
import "./MyItems.css"

const MyItems = ({setNotFoundPage}) => {
    setNotFoundPage(false);

    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch("fakeData.json")
            .then(res =>res.json())
            .then(data => setAllProducts(data))
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])


    return (
        <div className='myItems text-center mt-5'>
            <h2>All <span className='customRed'> {allProducts.length}</span> items added by user</h2>
            <h4><span className='customRed'>user:</span>  'user name'</h4>

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
        </div>
    );
};

export default MyItems;