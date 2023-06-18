import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import "./Inventory.css";

const Inventory = ({ setNotFoundPage }) => {
    setNotFoundPage(false);
    const { id } = useParams();

    // getting single item from database 
    const [product, setProduct] = useState({});
    const [responseOnUpdate, setResponseOnUpdate] = useState({});

     // setting background color of boady
     useEffect(() => {
        document.body.style = 'background:rgb(145 158 77)';
    })

    useEffect(() => {
        fetch(`https://calm-erin-dibbler-cap.cyclic.app/singleItem/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [, responseOnUpdate])

    // updating the item 
    const handleDeliver = () => {
        fetch(`https://calm-erin-dibbler-cap.cyclic.app/singleItem/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ quantity: productQuantity - 1 })
        })
            .then(res => res.json())
            .then(data => setResponseOnUpdate(data));

    }


    // handeling restock form 
    const handleResockForm =(e) =>{
        e.preventDefault();
        const restockNumber = e.target.restockNumber.value;
        e.target.reset();
        fetch(`https://calm-erin-dibbler-cap.cyclic.app/singleItem/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ quantity: productQuantity + parseInt(restockNumber) })
        })
            .then(res => res.json())
            .then(data => setResponseOnUpdate(data));
    }

    let productQuantity = product?.quantity;

    if(!product.name){
        return(<Loading></Loading>)
    }
    return (
        <div className='container inventory text-white'>
            <h2 className='text-center'>--Update and manage the product--</h2>
            <div className='d-md-flex justify-content-around align-items-center my-5 pb-3'>
                <img className='d-block productDetailImg' src={product?.image} alt="product" />
                <div>
                    <p><strong> Name: </strong> {product?.name}</p>
                    <p><strong> Price: </strong> <span className='customRed'>$ </span>{product?.price}</p>
                    <p><strong> Description: </strong> {product?.description}</p>
                    <p><strong> Supplier Name: </strong> {product?.supplierName}</p>
                    <p><strong> ID: </strong> {product?._id}</p>
                    <p><strong> Quantity:</strong> {product?.quantity}</p>
                    <p>
                        <strong>stock: </strong>
                        <span className={`d-inline fs-4 fw-bold ${productQuantity ? 'text-success' : 'text-danger'}`}>{productQuantity ? 'available' : 'stock out'}</span>
                    </p>

                    {productQuantity ?
                        <button onClick={handleDeliver} className='customButton bg-success px-3 mt-2 disabled'>Deliver</button> :
                        <p>--- product <span className='customRed'> stock </span> please---</p>
                    }
                </div>
            </div>

            {/* restock form below  */}
            <div className='restockSection text-center mx-auto my-5 py-5'>
                <h4 className='mb-4'>product <span className='customRed'>Restock</span> here..</h4>
                <form onSubmit={handleResockForm} >
                    <input type="number" min="0" name='restockNumber' required/>
                    <input className='btn  btn-success ms-3' type="submit" />
                </form>
            </div>
            <div className='text-center pb-5 mb-5'>
                <Link to="/manageInventory">
                    <button className='manageInventoryBtn py-2  px-2 mx-auto'><strong> Manage all Inventory</strong></button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;