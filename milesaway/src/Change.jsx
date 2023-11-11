import './styles/Change.css'
import Footer from './Footer'
import Header from './Header'
import {Box, SubBox} from './Box'
import './styles/Offer.css'
import { Link } from 'react-router-dom'
import {Offer, FlightOffer} from './Offer'

function Email() {
    return (
        <>
            <Header/>
            <Box name = 'Alterar e-mail' display = 'grid'>
                <div id='changeContainer'>
                    <SubBox>
                            <label htmlFor="email">Novo e-mail:<br></br></label>
                            <input type="email" placeholder='Digite seu novo e-mail' />
                    </SubBox>
                    <SubBox>
                            <label htmlFor="confirme">Confirmar novo e-mail:<br></br></label>
                            <input type="email" placeholder='Confirme seu novo e-mail'/>
                    </SubBox>
                </div>
                <button id='button'>Submeter</button>
            </Box>
            <Footer/>
        </>
    )
}

function Password() {
    return (
        <>
        <Header/>
            <Box name = 'Alterar senha' display = 'grid'>
                <div id='changeContainer'>
                <SubBox>
                        <label htmlFor="email">Nova senha:<br></br></label>
                        <input type="password" placeholder='Digite sua nova senha'/>
                </SubBox>
                <SubBox>
                        <label htmlFor="confirme">Confirmar nova senha:<br></br></label>
                        <input type="password" placeholder='Confirme sua nova senha' />
                </SubBox>
                </div>
                <button id='button'>Submeter</button>
            </Box>
        <Footer/>
        </>
    )
}

export {Email, Password}