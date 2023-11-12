import Footer from './Footer'
import Header from './Header'
import {Box, SubBox} from './Box'
import './styles/Offer.css'
import { Link } from 'react-router-dom'
import {Offer, FlightOffer} from './Offer'
import useFetch from './useFetch';

function OffersDisplay() {
    let { data: dataF, isPending: isPendingF, error: errorF } = useFetch('http://localhost:4000/flights');
    let { data: dataS, isPending: isPendingS, error: errorS } = useFetch('http://localhost:4000/stays');
    return (
        <>
            <Header/>
                <div id='flightOffers'>
                    {errorF && <p>{errorF}</p>}
                    {isPendingF && <p>Loading...</p>}
                    {dataF && dataF.map(item => (
                        <FlightOffer key={"OD"+item.id} endpoint={"flights/"+item.id} checked={item.checked} image={item.image} price={item.price} from={item.from} to={item.to} depart={item.depart} return={item.return} airline={item.airline}/>
                    ))}
                </div>
                <h1 id='flightHead'>Ofertas especiais</h1>
                <div id='flightSale'>
                    {errorS && <p>{errorS}</p>}
                    {isPendingS && <p>Loading...</p>}
                    {dataS && dataS.map(item => (
                        <Offer key={"OD"+item.id} endpoint={"stays/"+item.id} checked={item.checked} image={item.image} price={item.price}/>
                    ))}
                </div>
            <Footer/>
        </>
    )
}

export default OffersDisplay
