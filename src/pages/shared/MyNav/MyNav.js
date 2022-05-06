import React from 'react';
import { Link } from 'react-router-dom';
import "./MyNav.css";

const MyNav = () => {
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
                <Link to="/manageInventory">Manage Inventory</Link>
                <Link to="/additems">Add items</Link>
                <Link to="/myitems">My items</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default MyNav;