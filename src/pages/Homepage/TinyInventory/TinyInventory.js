import React from 'react';
import { Link} from 'react-router-dom';
import "./TinyInventory.css";
import banner2 from "../../../Images/Background/backgroundOptional.png";


const TinyInventory = (props) => {
    let products = props.products;

    return (
        <div className='tinyInventory ' style={{
            backgroundImage: `url(${banner2})`}}>
            <h1 className='sectionStart mb-4 pt-5 text-white text-center'>Visualization <span className='customRed'>Of</span> Intentory</h1>

            <table className='tinyIntevtoryTable'>
                <tbody>
                    <tr className='headerRow '>
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
            <div className='text-center mt-4'>
                <Link to="/manageInventory">
                    <button className='manageInventoryBtn py-2  px-2 mx-auto'><strong> Manage Inventory</strong></button>
                </Link>
            </div>
        </div>
    );
};

export default TinyInventory;