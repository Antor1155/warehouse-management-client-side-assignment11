import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/shared/Loading/Loading';
import auth from './firebase.init';

const RequireAuth = ({ children}) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(loading){
        return <Loading></Loading>
    }

    return children;
};

export default RequireAuth;