import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from "../../../Images/logos/google.png";
import auth from '../../../utilities/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../shared/Loading/Loading';

const Register = ({ setNotFoundPage }) => {
    setNotFoundPage(false);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])

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
        console.log(email, password);

        await createUserWithEmailAndPassword(email, password);

        event.target.reset();

    }

    // registering with google 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if(user || googleUser){
        console.log(from);
        navigate(from, { replace: true });
        console.log('this line did work');
    }
    if (loading || googleLoading) {
        return (<Loading></Loading>)
    }

    let commonError = '';
    if (error || googleError) {
        commonError = error || googleError;
    }
    return (
        <div className='loginPage mt-4 mb-5 pb-5'>
            {error || googleError ?
                <h3 className='text-center text-danger'>error : {commonError.message}</h3> : ""
            }
            <h2 className='text-center my-3'> We welcome <span className='customRed'> you with all </span> our heart</h2>
            <h5 className='text-center mt-5 mb-4'>Register please</h5>

            <div className='d-flex justify-content-center'>
                <form className='loginForm' onSubmit={handleFormSubmit}>
                    <label className='d-block '>email </label>
                    <input className='mb-3' type="email" name="email" placeholder='email' required />
                    <label className='d-block'>password </label>
                    <input className='mb-3' type="text" name="password" placeholder='password' required />
                    <br />
                    <input className="form-check-input me-3" type="checkbox" required /><label className='text-primary'>I accept all terms</label>

                    <input className='submitBtn btn  text-black mx-auto d-block mt-4' type="submit" value='Register' />
                </form>
            </div>

            <div className='GoogleBtnDiv'>
                <p>continue with <button onClick={handleGoogleSignIn} className='border-0'><img src={googleImg} alt="google" /><span className='fs-5 fw-bold'> Google</span></button></p>
            </div>

            <p className='text-center'>Already have an account?  <Link className='ps-2' to='/login'>Login </Link></p>
        </div>
    );
};

export default Register;