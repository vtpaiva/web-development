import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx'
import Offer from './Offer';
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'
import LandingPage from './LandingPage'
import SingIn from './SingIn'
import SingUp from './SingUp.jsx'
import UserProfile from './UserProfile.jsx'
import AdministratorProfile from './AdministratorProfile'
import Hoteis from './Hoteis'
import Booking from './Booking'
import {Cart, CartOffer} from './Cart.jsx'
import {Payment, Item} from './Payment.jsx'

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage/>}/>   
            <Route path="/profile" element={<UserProfile/>}/>   
            <Route path="/adm-profile" element={<AdministratorProfile/>}/>   
            <Route path="/cart" element={<Cart/>}/>   
            <Route path="/payment" element={<Payment/>}/>   
            <Route path="/singin" element={<SingIn/>}/>   
            <Route path="/singup" element={<SingUp/>}/>   
            <Route path="/hotels" element={<Hoteis/>}/>   
            <Route path="/booking" element={<Booking/>}/>   
            </Routes>
        </Router>
    )
}

export default App