import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {

    return (
       true ? <Outlet/> :  <Navigate to={'/sign-up'} />
    );
};