import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import "./TinyInventory.css";


const TinyInventory = (props) => {
    let products = props.products;
    let children = props.children;

    return (
        <div className='tinyInventory '>
            <div className='gradientDivFromBlack'> </div>
            <h1 className='sectionStart mb-4 text-center'>Visualization <span className='customRed'>Of</span> Intentory</h1>
            {children ? children : ""}
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
                    {products.map(product =>
                        <tr key={product._id}>
                            <td> <img src={product.image} alt="product" /></td>
                            <td className='customRed'>{product.name}</td>
                            <td>{product.description}</td>
                            <td>$ {product.price}</td>
                            <td>{product.supplierName}</td>
                            <td>{product.quantity}</td>
                            <td><Link to={`/inventory/${product._id}`}> <button className='updateButton px-2'> Update</button></Link></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className='text-center '>
                <Link to="/manageInventory">
                    <button className='manageInventoryBtn mt-4  py-2  px-2 mx-auto'><strong> Manage Inventory</strong></button>
                </Link>
            </div>
        </div>
    );
};

export default TinyInventory;