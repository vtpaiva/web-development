import Footer from './Footer'
import Header from './Header'
import {Box, SubBox} from './Box'
import './styles/Offer.css'
import { Link } from 'react-router-dom'
import {Offer, FlightOffer} from './Offer'

function OffersDisplay() {
    return (
        <>
            <Header/>
                <div id='flightOffers'>
                    <FlightOffer origin = 'Rio de Janeiro' destiny = 'São Paulo' departure = '15/07' back = '09/08' company = 'Gol'/>
                    <FlightOffer origin = 'Rio de Janeiro' destiny = 'São Paulo' departure = '15/07' back = '09/08' company = 'Gol'/>
                    <FlightOffer origin = 'Rio de Janeiro' destiny = 'São Paulo' departure = '15/07' back = '09/08' company = 'Gol'/>
                    <FlightOffer origin = 'Rio de Janeiro' destiny = 'São Paulo' departure = '15/07' back = '09/08' company = 'Gol'/>
                    <FlightOffer origin = 'Rio de Janeiro' destiny = 'São Paulo' departure = '15/07' back = '09/08' company = 'Gol'/>
                </div>
                <h1 id='flightHead'>Ofertas especiais</h1>
                <div id='flightSale'>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                    <Offer image = 'rj.jpg' price = '4'/>
                    <Offer image = 'pr.jpg' price = '8'/>
                </div>
            <Footer/>
        </>
    )
}

export default OffersDisplay