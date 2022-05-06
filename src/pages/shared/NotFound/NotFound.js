import React, { useEffect } from 'react';
import "./NotFound.css"
import notfound from "../../../Images/notfound/notfound.jpg"
import { Link } from 'react-router-dom';

const NotFound = () => {
    useEffect(() => {
        document.querySelector(".footer").style.display = "none";
        document.querySelector(".myNav").style.display = "none";
    }, [])


    return (
        <div className='nothignFound'>
            <Link to='/home' >
                <h3><span className='me-3 customRed'>F</span>oo<span className='ms-3 customRed'>D</span></h3>
            </Link>
            <img className='errorImg' src={notfound} alt="nothing found" />
        </div>
    );
};

export default NotFound;