import { useEffect } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
import Loading from '../pages/shared/Loading/Loading';
import auth from './firebase.init';

const RequireAuth = ({ children}) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const notify = () => toast.success('Email verification send',{duration:2000});

    useEffect(() => {
        document.body.style = 'background:rgb(240, 238, 238)';
    }, [])

    if(loading){
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // sending email verification 
    async function handleSendingEmailVerification (){    
        await sendEmailVerification();
        notify();
    }

    if(user){
        if(!user.emailVerified){
            return (<div className='emailVerification my-5 text-center p'>
                    <Toaster></Toaster>
                    <h2>your email is <span className='customRed fs-1'><strong >not</strong> </span> verified.....</h2>
                    <p>please verify email and <span className='text-danger fs-3'>reload the page</span>......</p>
                    <p className='text-primary'>A mail is send to your email address</p>
                    <p>Didn't get mail ?? <button onClick={handleSendingEmailVerification} className='btn btn-primary'>resend</button></p>
                    
            </div>)
        }
    }

    return children;
};

export default RequireAuth;