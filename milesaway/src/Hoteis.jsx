import Header from './Header.jsx'
import { Link } from 'react-router-dom';
import {Offer, FlightOffer} from './Offer.jsx';
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'

function Hoteis() {
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
                <Link to='/offers'><button class='defaultButton'>Procurar hospedagem</button></Link>
            </Box>
            <h1 id='package'>Pacotes de hospedagem</h1>
            <div id='sale'>
            <Offer image = 'hotelrj.jpg' price = '4'/>
                <Offer image = 'hotelsp.jpg' price = '8'/>
                <Offer image = 'hotelrj.jpg' price = '4'/>
                <Offer image = 'hotelsp.jpg' price = '8'/>
                <Offer image = 'hotelrj.jpg' price = '4'/>
                <Offer image = 'hotelsp.jpg' price = '8'/>
                <Offer image = 'hotelrj.jpg' price = '4'/>
                <Offer image = 'hotelsp.jpg' price = '8'/>
                <Offer image = 'hotelrj.jpg' price = '4'/>
                <Offer image = 'hotelsp.jpg' price = '8'/>
                <Offer image = 'hotelrj.jpg' price = '4'/>
                <Offer image = 'hotelsp.jpg' price = '8'/>
            </div>
            <Footer/>
        </>
    )
}

export default Hoteis