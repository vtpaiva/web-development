import './styles/LandingPage.css';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import {Offer, FlightOffer} from './Offer.jsx';
import Footer from './Footer.jsx';
import {Box, ASubBox} from './Box.jsx';
import useFetch from './useFetch.jsx';

function LandingPage() {
    const {data, isPending, error} = useFetch('http://localhost:4000/flights');
    return (
            <>      
            <Header/>
            <Box name = 'Passagens aéreas' display = 'block'>
                <div className='innerBox'>
                    <div style={{'display' : 'grid', 'backgroundColor' : 'transparent'}}>
                        <ASubBox>
                            <label htmlFor="origem">Origem:</label>
                            <input type="text" placeholder='Origem'/>
                        </ASubBox>
                        <ASubBox>
                            <label htmlFor="destino">Destino:</label>
                            <input type="text" placeholder='Destino'/>
                        </ASubBox>
                    </div>
                    <div style={{'display' : 'grid', 'backgroundColor' : 'transparent'}}>
                        <ASubBox>
                            <label htmlFor="partida">Partida:</label>
                            <input type="date" placeholder='Partida'/>
                        </ASubBox>
                        <ASubBox>
                            <label htmlFor="volta">Volta:</label>
                            <input type="date" placeholder='Volta'/>
                        </ASubBox>
                    </div>
                    <div style={{'display' : 'grid', 'backgroundColor' : 'transparent'}}>
                        <ASubBox>
                            <label htmlFor="passageiros">Passageiros:</label>
                            <input type="number" placeholder='Passageiros'/>
                        </ASubBox>
                        <ASubBox>
                            <label htmlFor="bagagem">Bagagem:</label>
                            <input type="number" placeholder='Bagagem'/>
                        </ASubBox>
                    </div>
                </div>
                <Link to = '/offers'><button className='defaultButton'>Procurar passagens</button></Link>
            </Box>
            <h1 id='package'>Pacotes de Viagens</h1>
            <div id='sale'>
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {data && data.map(item => (
                    <FlightOffer key={"LP"+item.id} endpoint={"flights/"+item.id} checked={item.checked} image={item.image} price={item.price} from={item.from} to={item.to} depart={item.depart} return={item.return} airline={item.airline}/>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default LandingPage
