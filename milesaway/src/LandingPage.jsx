import './LandingPage.css'
import Header from './Header.jsx'
import Offer from './Offer.jsx';
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'

function LandingPage() {
    return (
        <>      
            <>      
            <Header/>
            <Box name = 'Passagens aéreas' display = 'block'>
                <div className='innerBox'>
                    <SubBox>
                        <label htmlFor="origem">Origem</label>
                        <input type="text" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="destino">Destino:</label>
                        <input type="text" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="partida">Partida:</label>
                        <input type="date" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="volta">Volta:</label>
                        <input type="date" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="passageiros">Passageiros:</label>
                        <input type="number" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="bagagem">Bagagem:</label>
                        <input type="number" />
                    </SubBox>
                </div>
                <button class='defaultButton'>Inscrever-se</button>
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
        </>
    )
}

export default LandingPage