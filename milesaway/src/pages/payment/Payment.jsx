import '../../styles/LandingPage.css'
import Header from '../../components/Header.jsx'
import Offer from '../../components/Offer.jsx';
import Footer from '../../components/Footer.jsx'
import {Box, SubBox} from '../../components/Box.jsx'
import { useFetch } from '../../functions/useFetch.jsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Payment.css'

function Item(props) {
    return (
        <div className='payOfferContainer'>
            <span>{props.destiny}</span>
            <span>R$ {props.price}</span>
        </div>
    )
}

function Payment() {
    let { data: dataF, isPending: isPendingF, error: errorF } = useFetch('http://localhost:4000/flights');
    let { data: dataS, isPending: isPendingS, error: errorS } = useFetch('http://localhost:4000/stays');
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if(dataS && dataF) {
            let total = 0;
            dataF.map(item => {
                if(item.checked === true)
                    total += item.price;
                return null;
            });
            dataS.map(item => {
                if(item.checked === true)
                    total += item.price;
                return null;
            });
            setTotal(total);
        }
    }, [dataF, dataS]);
    return (
        <>
            <Header/>

            <div id='paymentContainer'>
                <div id='paymentLeft'>
                    <Box display = 'grid' name = 'Dados de pagamento'>
                        <div style={{'display' : 'flex', 'backgroundColor' : 'transparent'}}>
                            <div className='dataContainer'>
                                <SubBox>
                                        <label htmlFor="name">Nome:</label>
                                        <input type="text" />
                                </SubBox>

                                <SubBox>
                                        <label htmlFor="surname">Sobrenome:</label>
                                        <input type="text" />
                                </SubBox>
                            </div>

                            <div className='dataContainer'>
                                <SubBox>
                                        <label htmlFor="doc">Documento:</label>
                                        <input type="text" />
                                </SubBox>

                                <SubBox>
                                        <label htmlFor="birth">Nascimento:</label>
                                        <input type="date" />
                                </SubBox>
                            </div>
                        </div>

                        <div className='dataContainer'>
                        <SubBox>
                                <label htmlFor="credit">Cartão de crédito:</label>
                                <input type="text" />
                        </SubBox>
                        </div>
                        <div style={{'display' : 'flex', 'backgroundColor' : 'transparent'}}>
                            <SubBox>
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
                    <Box name='Finalizar compra' display="block">
                        <h2 id = "fly">Voos</h2>
                        {errorF && <p>{errorF}</p>}
                        {isPendingF && <p>Loading...</p>}
                        {dataF && dataF.map(item => {
                            if(item.checked === true)
                                return (
                                <Item className = 'flightBuy' destiny={item.to} price={item.price}/>
                                )
                            return null;
                        })}
                        <br/>
                        <h2 id='hotel'>Hoteis</h2>
                        {errorS && <p>{errorS}</p>}
                        {isPendingS && <p>Loading...</p>}
                        {dataS && dataS.map(item => {
                            if(item.checked === true)
                                return (
                                <Item destiny={item.city} price={item.price}/>
                                )
                            return null;
                        })}
                        <br/>
                        <fieldset id='total'>
                            <h1>Total: R$ {total}</h1>
                        </fieldset>
                        <Link to="/finished"> <button id='finishButton'>Finalizar compra</button> </Link>
                    </Box>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export {Payment, Item}
