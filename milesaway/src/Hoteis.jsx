import Header from './Header.jsx'
import Offer from './Offer.jsx';
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'

function Hoteis() {
    return (
        <>      
            <Header/>
            <Box name = 'Hotéis' display = 'block'>
                <div className='innerBox'>
                    <SubBox>
                        <label htmlFor="local">Localidade</label>
                        <input type="text" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="arrive">Chegada</label>
                        <input type="date" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="departure">Partida</label>
                        <input type="date" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="people">Pessoas</label>
                        <input type="number" />
                    </SubBox>
                </div>
                <button class='defaultButton'>Procurar hospedagem</button>
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