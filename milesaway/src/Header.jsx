import { Link } from 'react-router-dom';
import './styles/Header.css'

function Header() {
    return (
        <div id='mainHeader'>
            <div id='mainContainer'>
                <Link id="logoLink" to='/'> <img id='logo' src="logo.png" alt="Logo" /></Link>
                <div id='headTitle'>
                    <h1>MilesAway</h1>
                </div>
                <div id='cornerLinks'>
                    <Link to='/profile'><img src="login.png" alt="Menu" className='cornerImg'/></Link>
                    <Link to='/cart'><img src="cart.png" alt="Profile" className='cornerImg'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
