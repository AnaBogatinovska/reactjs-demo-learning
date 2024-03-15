import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const AuthProtectedRoute = () => {
    const token = localStorage.getItem('token');
    return (
       !token ? <Outlet/> :  <Navigate to={'/home'} />
    );
};