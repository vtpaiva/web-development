import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OffersDisplay from './pages/offers/OffersDisplay'
import LandingPage from './pages/index/index'
import Login from './pages/login/Login'
import UserProfile from './pages/profile/UserProfile'
//import AdministratorProfile from './pages/profile/AdministratorProfile'
import Hoteis from './pages/hotel/Hoteis'
//import Booking from './pages/Booking'
import {Cart, CartOffer} from './pages/cart/Cart'
import {Payment, Item} from './pages/payment/Payment'
import Finished from './pages/finished/Finished'
import {Password} from './pages/change/Change'
import { RegisterAdmins, RegisterClients, ManageOffers } from './pages/admin/Admin'

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/hotel" element={<Hoteis/>}/>
            <Route path="/profile" element={<UserProfile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/offers" element={<OffersDisplay/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/finished" element={<Finished/>}/>
            <Route path="/password" element={<Password/>}/>
            <Route path='/registerAdmin' element={<RegisterAdmins/>}/>
            <Route path='/registerClient' element={<RegisterClients/>}/>
            <Route path='/manageOffers' element={<ManageOffers/>}/>
            </Routes>
        </Router>
    )
}

export default App
