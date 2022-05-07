import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import googleImg from "../../../Images/logos/google.png"

const Login = ({ setNotFoundPage }) => {
    setNotFoundPage(false);
    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])

    const handleFormSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        event.target.reset();

    }

    return (
        <div className='loginPage mt-4 mb-5 pb-5'>
            <h2 className='text-center my-3'>Welcome Back</h2>
            <div className='d-flex justify-content-center'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                    <label className='d-block '>email </label>
                    <input className='mb-2' type="text" name="email" placeholder='email' required />
                    <label className='d-block'>password </label>
                    <input className type="text" name="password" placeholder='password' required />
                    <br />
                    <input className='submitBtn btn mx-auto d-block' type="submit" value='Login' />
                </form>
            </div>
            <div className='GoogleBtnDiv'>
                <p>continue with <button className='border-0'><img src={googleImg} alt="google" /><span className='fs-5 fw-bold'> Google</span></button></p>
            </div>

            <p className='text-center'>new to the side? <Link to='/register'>Register </Link></p>
        </div>
    );
};

export default Login;