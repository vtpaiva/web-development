import './Header.css'

function Header() {
    return (
        <div id='mainHeader'>
            <div id='mainContainer'>
                <a href="#"><img id='logo' src="logo.png" alt="Logo" /></a>
                <h1 id='headTitle'>MilesAway</h1>
                <div id='cornerLinks'>
                    <a href="#"><img src="login.png" alt="Menu" className='cornerImg'/></a>
                    <a href="#"><img src="menu.png" alt="Profile" className='cornerImg'/></a>
                </div>
            </div>
        </div>
    )
}

export default Header;