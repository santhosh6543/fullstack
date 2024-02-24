import { Link } from 'react-router-dom';
import '../assets/header1.css'
const Header1=()=> {
    return (
        <div className="app-header1">
            <div className="logo1">
                <h1>AQUAVOYAGE</h1>
            </div>
            <nav className="nav-links1">
                <ul>
                    <li className='j1'>My Profile</li>
                    {/* <Link to="/homepage"><li className='j2'>Home</li></Link> */}
                </ul>
            </nav>
        </div>
    );
}

export default Header1;
