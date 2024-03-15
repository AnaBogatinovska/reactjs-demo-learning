import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.setItem('token', 'access');
        navigate("/home")
    };
    return (
        <>
            <div style={{ textAlign: 'center', flex: 1 }}>
                <div>
                    <button onClick={handleClick}>LOGIN</button>
                </div>
                <Link to="sign-up">Sign Up</Link>
            </div>
        </>
    );
}

export default Login;