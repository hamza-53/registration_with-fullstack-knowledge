import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('access_token');

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Hamza's Software</div>
            <div className="navbar-links">
                {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;