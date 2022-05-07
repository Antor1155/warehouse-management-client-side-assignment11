import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Inventory.css";

const Inventory = ({ setNotFoundPage }) => {
    setNotFoundPage(false);
    const { id } = useParams();

    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/fakeData.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])

    let product = allProducts.find(data => data.id === id);

    let productQuantity = product?.quantity;
    return (
        <div className='container inventory'>
            <div className='d-flex justify-content-around align-items-center my-5 pb-3'>
                <img className='productDetailImg' src={product?.image} alt="product" />
                <div>
                    <p><strong> Name: </strong> {product?.name}</p>
                    <p><strong> Price: </strong> <span className='customRed'>$ </span>{product?.price}</p>
                    <p><strong> Description: </strong> {product?.description}</p>
                    <p><strong> Supplier Name: </strong> {product?.supplierName}</p>
                    <p><strong> ID: </strong> {product?.id}</p>
                    <p><strong> Quantity:</strong> {product?.quantity}</p>
                    <p>
                        <strong>stock: </strong>
                        <h5 className={`d-inline ${productQuantity ? 'text-success' : 'text-danger'}`}>{productQuantity ? 'available' : 'stock out'}</h5>
                    </p>

                    {productQuantity ?
                        <button className='customButton bg-success px-3 mt-2 disabled'>Deliver</button> :
                        <p>--- product <span className='customRed'> stock </span> please---</p>
                    }
                </div>
            </div>

            <div className='restockSection text-center mx-auto my-5 py-5'>
                <h4 className='mb-4'>product <span className='customRed'>Restock</span> here..</h4>
                <form >
                    <input type="number" />
                    <input className='btn  btn-success ms-3' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default Inventory;