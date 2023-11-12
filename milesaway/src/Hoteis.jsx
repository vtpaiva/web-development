import Header from './Header.jsx'
import { Link } from 'react-router-dom';
import {Offer, FlightOffer} from './Offer.jsx';
import Footer from './Footer.jsx';
import {Box, SubBox} from './Box.jsx';
import useFetch from './useFetch.jsx';

function Hoteis() {
    const { data: dataF, isPending: isPendingF, error: errorF } = useFetch('http://localhost:4000/flights');
    const { data, isPending, error } = useFetch('http://localhost:4000/stays');
    let filter = {};
    let num = 0;
    if(dataF)
        for(let i = 0; i < dataF.length; ++i) {
            if(dataF[i].checked) {
                filter[dataF[i].to] = true;
                ++num;
            }
        }
    return (
        <>
            <Header/>
            <h1 id='package'>Pacotes de hospedagem</h1>
            <div id='sale'>
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {dataF && data && data.map(item => {
                    if(filter[item.city])
                        return (
                        <Offer key={"H"+item.id} endpoint={"stays/"+item.id} checked={item.checked} image={item.image} price={item.price}/>
                        )
                    return null;
                })}
                {num === 0 && <p className="whiteText">Nao ha hoteis disponiveis para os destinos de suas viagens</p>}
            </div>
            <Footer/>
        </>
    )
}

export default Hoteis
