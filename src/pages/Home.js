import { Link, Navigate, useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('token');
        navigate("/login")
    };
    return (
        <>
            <div style={{ textAlign: 'center', flex: 1 }}>
                <div>
                    <button onClick={handleClick}>SIGN OUT</button>
                </div>
            </div>
        </>
    )
}

export default Home;