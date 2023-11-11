import './styles/LandingPage.css'
import Header from './Header.jsx'
import Offer from './Offer.jsx';
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'

import './styles/Payment.css'

function Item(props) {
    return (
        <div className='payOfferContainer'>
            <span>{props.destiny}</span>
            <span>R$ {props.price}</span>
        </div>
    )
}

function Payment() {
    return (
        <>
            <Header/>

            <div id='paymentContainer'>
                <div id='paymentLeft'>
                    <Box display = 'block' name = 'Dados de pagamento'>
                        <div style={{'display' : 'flex', 'backgroundColor' : 'transparent'}}>
                            <SubBox>
                                    <label htmlFor="name">Nome:</label>
                                    <input type="text" />
                            </SubBox>

                            <SubBox>
                                    <label htmlFor="surname">Sobrenome:</label>
                                    <input type="text" />
                            </SubBox>
                        </div>

                        <div style={{'display' : 'flex', 'backgroundColor' : 'transparent'}}>
                            <SubBox>
                                    <label htmlFor="doc">Documento:</label>
                                    <input type="text" />
                            </SubBox>

                            <SubBox>
                                    <label htmlFor="birth">Nascimento:</label>
                                    <input type="text" />
                            </SubBox>
                        </div>

                        <SubBox>
                                <label htmlFor="credit">Cartão de crédito:</label>
                                <input type="text" />
                        </SubBox>

                        <div style={{'display' : 'flex', 'backgroundColor' : 'transparent'}}>
                            <SubBox margin = '15px'>
                                    <label htmlFor="val">Validade:</label>
                                    <input type="date" />
                            </SubBox>

                            <SubBox>
                                    <label htmlFor="cvv">CVV:</label>
                                    <input type="text" />
                            </SubBox>
                        </div>
                    </Box>
                </div>

                <div id='paymentRight'>
                    <Box name = 'Finalizar compra' display = 'block'>
                        <Item destiny = 'São Paulo' price = '4'/>
                        <Item destiny = 'Rio de Janeiro' price = '4'/>
                        <Item destiny = 'Curitiba' price = '4'/>
                        <button id='finishButton'>Finalizar compra</button>
                    </Box>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export {Payment, Item}