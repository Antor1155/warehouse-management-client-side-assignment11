import React, { useEffect } from 'react';
import './AddItem.css'

const AddItem = ({setNotFoundPage}) => {
    setNotFoundPage(false);
    useEffect(()=>{
        document.body.style = 'background:rgb(240, 238, 238)';
    },[])
    const handleSubmit=(event)=>{
        event.preventDefault();
        event.target.reset();
        
        window.alert( "working");

    }
        return (
        <div className='addItems text-center mx-auto pt-2 pb-4'>
            <h2 className='my-3'>please add <span className='customRed'>Items Of</span>  your choice</h2>
           <form onSubmit={handleSubmit}>
               <input type="text" placeholder='ImageUrl' name='image' required/>
               <input type="text" placeholder='product name' name='name'/>
               <input type="number" placeholder='price' name='price'/>
               {/* <input type="text-area" placeholder='short description' name='description'/> */}
               <textarea placeholder='short description' name='description'></textarea>
               <input type="text" placeholder='supplierName' name='supplierName'/>
               <input type="number" placeholder='quantity' name='quantity'/>
               <input className='submitBtn px-3' type="submit" style={{width:"12rem"}}/>
           </form>
        </div>
    );
};

export default AddItem;