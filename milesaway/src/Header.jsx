import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div id='mainHeader'>
            <div id='mainContainer'>
                <Link to='/'> <img id='logo' src="logo.png" alt="Logo" /></Link>
                <h1 id='headTitle'>MilesAway</h1>
                <div id='cornerLinks'>
                    <Link to='/profile'><img src="login.png" alt="Menu" className='cornerImg'/></Link>
                    <a href="#"><img src="menu.png" alt="Profile" className='cornerImg'/></a>
                </div>
            </div>
        </div>
    )
}

export default Header;