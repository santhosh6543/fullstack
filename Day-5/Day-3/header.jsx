import { Link } from 'react-router-dom';
import '../assets/header.css'
const Header=()=> {
    return (
        <div className="app-header">
            <div className="logo">
                <h1>AQUAVOYAGE</h1>
            </div>
            <nav className="nav-links">
                <ul>
                <li><Link to='/'><a>Login/Register</a></Link></li>
                    <li><Link to='/profile'><a>Profile</a></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
