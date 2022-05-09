import { signOut } from 'firebase/auth';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../../utilities/firebase.init';
import "./MyNav.css";

const MyNav = () => {
    const [user] = useAuthState(auth);
    const HandleSignOut = () => {
        signOut(auth);
    }

     // setting for password reset 
     const notify = () => toast.success("password reset mail send");
     const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
     function handlePasswordReset() {
         sendPasswordResetEmail(user.email);
         notify();
     }
 
    return (
        <div className='myNav mx-auto'>
            <div>
                <Link to='/home' >
                    <h3 className=''><span className='me-3 customRed'>F</span>oo<span className='ms-3 customRed'>D</span></h3>
                </Link>
            </div>

            <div className='navlinks'>
                <Link to="/home">Home</Link>
                <Link to="/blogs">Blog</Link>
                {user ? <>
                    <Link to="/manageInventory">Manage Inventory</Link>
                    <Link to="/additems">Add items</Link>
                    <Link to="/myitems">My items</Link>
                </> : ''}
                {user ? <button className='signOutBtn' onClick={HandleSignOut}>SignOut</button> : <Link to="/login">Login</Link>}
            </div>

            {user? <button onClick={handlePasswordReset} className='passwordResetButton'> reset password</button>:''}
            <Toaster></Toaster>

           

        </div>
    );
};

export default MyNav;