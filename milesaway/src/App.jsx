import './App.css'
import Header from './Header.jsx'
import Offer from './Offer.jsx';
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'
import LandingPage from './LandingPage';
import SingIn from './SingIn';
import SingUp from './SingUp.jsx'
import UserProfile from './UserProfile.jsx'
import AdministratorProfile from './AdministratorProfile';
import Hoteis from './Hoteis';
import Booking from './Booking'

function App() {
    return (
        <>      
            {/*Página principal
                <LandingPage/>
            */}
            
            {/*Página de login
                <SingIn/>
            */}
            
            {/*Página de cadastro
                <SingUp/>
            */}

            {/*Perfil de usuário normal
                <LandingPage/>
            */}

            {/*Perfil de administrador
                <LandingPage/>
            */}

            {/*Busca de Hoteis
                <LandingPage/>
            */}

            {/*Página de verificação de reserva
                <LandingPage/>
            */}
        </>
    )
}

export default App