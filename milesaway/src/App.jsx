import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OffersDisplay from './OffersDisplay.jsx'
import LandingPage from './LandingPage'
import SingIn from './SingIn'
import SingUp from './SingUp.jsx'
import UserProfile from './UserProfile.jsx'
import AdministratorProfile from './AdministratorProfile'
import Hoteis from './Hoteis'
import Booking from './Booking'
import {Cart, CartOffer} from './Cart.jsx'
import {Payment, Item} from './Payment.jsx'
import {Password, Email} from './Change.jsx'

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage/>}/>   
            <Route path="/hotel" element={<Hoteis/>}/>   
            <Route path="/profile" element={<UserProfile/>}/>   
            <Route path="/admprofile" element={<AdministratorProfile/>}/>   
            <Route path="/booking" element={<Booking/>}/>   
            <Route path="/singin" element={<SingIn/>}/>   
            <Route path="/singup" element={<SingUp/>}/>   
            <Route path="/offers" element={<OffersDisplay/>}/>   
            <Route path="/cart" element={<Cart/>}/>   
            <Route path="/payment" element={<Payment/>}/>   
            <Route path="/cart" element={<Cart/>}/>   
            <Route path="/password" element={<Password/>}/>   
            <Route path="/email" element={<Email/>}/>   
            </Routes>
        </Router>
    )
}

export default App