import './styles/LandingPage.css'
import { Link } from 'react-router-dom';
import Header from './Header.jsx'
import {Offer, FlightOffer} from './Offer.jsx';
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'

function LandingPage() {
    return (
            <>      
            <Header/>
            <Box name = 'Passagens aéreas' display = 'block'>
                <div className='innerBox'>
                    <SubBox>
                        <label htmlFor="origem">Origem:</label>
                        <input type="text" placeholder='Origem'/>
                    </SubBox>
                    <SubBox>
                        <label htmlFor="destino">Destino:</label>
                        <input type="text" placeholder='Destino'/>
                    </SubBox>
                    <SubBox>
                        <label htmlFor="partida">Partida:</label>
                        <input type="date" placeholder='Partida'/>
                    </SubBox>
                    <SubBox>
                        <label htmlFor="volta">Volta:</label>
                        <input type="date" placeholder='Volta'/>
                    </SubBox>
                    <SubBox>
                        <label htmlFor="passageiros">Passageiros:</label>
                        <input type="number" placeholder='Passageiros'/>
                    </SubBox>
                    <SubBox>
                        <label htmlFor="bagagem">Bagagem:</label>
                        <input type="number" placeholder='Bagagem'/>
                    </SubBox>
                </div>
                <Link to = '/offers'><button class='defaultButton'>Procurar passagens</button></Link>
            </Box>
            <h1 id='package'>Pacotes de Viagens</h1>
            <div id='sale'>
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

export default LandingPage