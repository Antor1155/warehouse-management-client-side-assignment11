import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../utilities/firebase.init';
import './AddItem.css'

const AddItem = ({ setNotFoundPage }) => {
    setNotFoundPage(false);

    const [result, setResult] = useState([]);
    const [user] = useAuthState(auth);

    // handling toast 
    const notify = () => toast.success('Successfully created!');


    // handling adding new user 
    const handleSubmit = (event) => {
        event.preventDefault();

        const product = {
            addedBy: user.email,
            image: event.target.image.value,
            name: event.target.name.value,
            price: parseInt(event.target.price.value),
            description: event.target.description.value,
            supplierName: event.target.supplierName.value,
            quantity: parseInt(event.target.quantity.value)
        }

        fetch('https://calm-erin-dibbler-cap.cyclic.app/addItem', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => setResult(data));

        notify();
        event.target.reset();

    }
    return (
        <div className='addItems text-center mx-auto pt-2 pb-4'>
            <h2 className='my-3 text-white'>please add <span className='customRed'>Items Of</span>  your choice</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='ImageUrl' name='image' required />
                <input type="text" placeholder='product name' name='name' required />
                <input type="number" placeholder='price' min='0' name='price' required />
                {/* <input type="text-area" placeholder='short description' name='description'/> */}
                <textarea placeholder='short description' name='description' required></textarea>
                <input type="text" placeholder='supplierName' name='supplierName' required />
                <input type="number" placeholder='quantity' min='1' name='quantity' required />
                <input className='submitBtn bg-info px-3 my-3' type="submit" style={{ width: "12rem", opacity: ".9" }} />
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddItem;