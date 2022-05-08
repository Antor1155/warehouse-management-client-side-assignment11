import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../../utilities/firebase.init';
import Loading from '../../shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Graphs from '../Graphs/Graphs';
import Management from '../Management/Management';
import TinyInventory from '../TinyInventory/TinyInventory';

const Homepage = (props) => {
    if (props.setNotFoundPage) {
        props.setNotFoundPage(false);
    }

    const [products, setproducts] = useState([]);
    useEffect(() => {
        document.body.style = 'background:black;';
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setproducts(data));

    }, [])

    // setting for password reset 
    const notify = () => toast.success("password reset mail send");

    const [user] = useAuthState(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    function handlePasswordReset() {
        sendPasswordResetEmail(user.email);
        notify();
    }

    return (
        <div className='homepage'>
            {user? <button onClick={handlePasswordReset} className='passwordResetButton'> reset password</button>:''}
            <Toaster></Toaster>
            <Banner></Banner>
            {products.length==0 ? <Loading></Loading>: <TinyInventory products={products}></TinyInventory>}
            
            <Graphs products={products}></Graphs>
            <Management></Management>
        </div>
    );
};

export default Homepage;