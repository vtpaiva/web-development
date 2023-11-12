import Header from './Header.jsx'
import { Link } from 'react-router-dom';
import {Offer, FlightOffer} from './Offer.jsx';
import Footer from './Footer.jsx';
import {Box, SubBox} from './Box.jsx';
import useFetch from './useFetch.jsx';

function Hoteis() {
    const { data, isPending, error } = useFetch('http://localhost:4000/stays');
    return (
        <>
            <Header/>
            <Box name = 'Hotéis' display = 'block'>
                <div className='innerBox'>
                    <SubBox>
                        <label htmlFor="local">Localidade:<br></br></label>
                        <input type="text" placeholder='Localidade'/>
                    </SubBox>
                    <SubBox>
                        <label htmlFor="arrive">Chegada:<br></br></label>
                        <input type="date" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="departure">Partida:<br></br></label>
                        <input type="date" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="people">Pessoas:<br></br></label>
                        <input type="number" placeholder='Pessoas'/>
                    </SubBox>
                </div>
                <Link to='/offers'><button className='defaultButton'>Procurar hospedagem</button></Link>
            </Box>
            <h1 id='package'>Pacotes de hospedagem</h1>
            <div id='sale'>
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {data && data.map(item => (
                    <Offer key={"H"+item.id} endpoint={"stays/"+item.id} checked={item.checked} image={item.image} price={item.price}/>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default Hoteis
