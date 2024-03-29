import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from "../../../Images/logos/google.png";
import auth from '../../../utilities/firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading/Loading';

const Register = ({ setNotFoundPage }) => {
    setNotFoundPage(false);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [sendEmailVerification] = useSendEmailVerification(auth);

     // setting background color of boady
     useEffect(() => {
        document.body.style = 'background:rgb(106 140 112)';
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // register with email and password  
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);

        // sending email verification 
        await sendEmailVerification();

        event.target.reset();

    }

    // registering with google 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if(user || googleUser){
        
        navigate(from, { replace: true });
    }
    if (loading || googleLoading) {
        return (<Loading></Loading>)
    }

    let commonError = '';
    if (error || googleError) {
        commonError = error || googleError;
    }
    return (
        <div className='loginPage mt-4 mb-5 pb-5 text-white'>
            {error || googleError ?
                <h3 className='text-center text-danger'>error : {commonError.message}</h3> : ""
            }
            <h2 className='text-center my-2'> We welcome <span className='customRed'> you with all </span> our heart</h2>
            <h5 className='text-center mt-4 mb-4'>Register please</h5>

            <div className='d-flex justify-content-center'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                    <label className='d-block '>email </label>
                    <input className='mb-3' type="email" name="email" placeholder='email' required />
                    <label className='d-block'>password </label>
                    <input className='mb-3' type="text" name="password" placeholder='password' required />
                    <br />
                    <input className="form-check-input me-3" type="checkbox" required /><label className='text-info'>I accept all terms</label>

                    <input className='btn btn-info  text-black mx-auto d-block mt-4' type="submit" value='Register' />
                </form>
            </div>

            <div className='GoogleBtnDiv'>
                <p>continue with <button onClick={handleGoogleSignIn} className='border-0'><img src={googleImg} alt="google" /><span className='fs-5 fw-bold'> Google</span></button></p>
            </div>

            <p className='text-center'>Already have an account?  <Link className='ps-2 text-warning' to='/login'>Login </Link></p>

            <div className='text-center'>
                <p className='text-success'>Can use demo account to login</p>
                <p><span className='text-warning'>Email: </span>md.antor1155job@gmail.com</p>
                <p><span className='text-warning'>password: </span>tttt89*</p>
            </div>
        </div>
    );
};

export default Register;