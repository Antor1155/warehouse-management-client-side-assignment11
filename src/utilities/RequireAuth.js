import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
import Loading from '../pages/shared/Loading/Loading';
import auth from './firebase.init';
import getJwt from './getJwt';
import "./RequireAuth.css"

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const notify = () => toast.success('Email verification send', { duration: 2000 });

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // sending email verification 
    async function handleSendingEmailVerification() {
        await sendEmailVerification();
        notify();
    }

    if (user) {
        if (!user.emailVerified) {
            return (<div className='emailVerification my-5 text-center p text-white'>
                <Toaster></Toaster>
                <h2>your email is <span className='customRed fs-1'><strong >not</strong> </span> verified.....</h2>
                <p>please verify email and <span className='text-danger fs-3'>reload the page</span>......</p>
                <p className='text-primary'>A mail is send to your email address</p>
                <p>Didn't get mail ?? <button onClick={handleSendingEmailVerification} className='btn btn-primary'>resend</button></p>


                <div className='text-center'>
                    <p className='text-warning'>Or signout and use demo account</p>
                    <p><span className='text-warning'>Email: </span>md.antor1155job@gmail.com</p>
                    <p><span className='text-warning'>password: </span>tttt89*</p>
                </div>
            </div>)
        }

    }



    let token = window.localStorage.getItem("accessToken");
    if (!token) {
        getJwt(user.email);
    }

    return children;
};

export default RequireAuth;