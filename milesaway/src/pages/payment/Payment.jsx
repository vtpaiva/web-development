import '../../styles/LandingPage.css'
import Header from '../../components/Header.jsx'
import Offer from '../../components/Offer.jsx';
import Footer from '../../components/Footer.jsx'
import {Box, SubBox} from '../../components/Box.jsx'
import { useFetch } from '../../functions/useFetch.jsx';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useUser } from '../../contexts/UserContext';

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
    const navigate = useNavigate();

    const { user, login, logout, refresh } = useUser();

    const [dataF, setDataF] = useState([]);
    const [isPendingF, setIsPendingF] = useState(true);
    const [errorF, setErrorF] = useState(null);

    const [dataS, setDataS] = useState([]);
    const [isPendingS, setIsPendingS] = useState(true);
    const [errorS, setErrorS] = useState(null);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchDataF = async () => {
            try {
                // Fetch details for flights in the user's cart
                const promises = user.cartFlights.map((cartItem) =>
                    axios.get(`http://localhost:4001/flights/${cartItem[0]}`)
                );

                const responses = await Promise.all(promises);
                const flightData = responses.map((response) => response.data);
                setDataF(flightData);
            } catch (error) {
                setErrorF(error.message || 'An error occurred while fetching flight data.');
            } finally {
                setIsPendingF(false);
            }
        };

        const fetchDataS = async () => {
            try {
                // Fetch details for stays in the user's cart
                const promises = user.cartStays.map((cartItem) =>
                    axios.get(`http://localhost:4001/stays/${cartItem[0]}`)
                );

                const responses = await Promise.all(promises);
                const stayData = responses.map((response) => response.data);
                setDataS(stayData);
            } catch (error) {
                setErrorS(error.message || 'An error occurred while fetching stay data.');
            } finally {
                setIsPendingS(false);
            }
        };

        fetchDataF();
        fetchDataS();
    }, [user]);

    useEffect(() => {
        if (dataS.length > 0 || dataF.length > 0) {
            //console.log(dataF, dataS, user);
            let total = 0;

            // Calculate total for flights
            dataF.forEach((flight, index) => {
                const cartItem = user.cartFlights[index];
                if (cartItem && flight && cartItem[1] > 0) {
                    total += flight.price * cartItem[1];
                }
            });

            // Calculate total for stays
            dataS.forEach((stay, index) => {
                const cartItem = user.cartStays[index];
                if (cartItem && cartItem[1] > 0) {
                    total += stay.price * cartItem[1];
                }
            });

            setTotal(total);
        }
    }, [dataF, dataS, user]);

    function successRedirect() {
        navigate("/finished");
    }

    return (
        <>
            <Header/>

            <div id='paymentContainer'>
                <div id='paymentLeft'>
                    <Box display = 'grid' name = 'Dados de pagamento'>
                    <form id="formInfo" onSubmit={successRedirect}>
                        <div style={{'display' : 'flex', 'backgroundColor' : 'transparent'}}>
                            <div className='dataContainer'>
                                <SubBox>
                                        <label htmlFor="name">Nome:</label>
                                        <input type="text" required/>
                                </SubBox>

                                <SubBox>
                                        <label htmlFor="surname">Sobrenome:</label>
                                        <input type="text" required/>
                                </SubBox>
                            </div>

                            <div className='dataContainer'>
                                <SubBox>
                                        <label htmlFor="doc">Documento:</label>
                                        <input type="tel" pattern="[0-9\s]{0,19}" required/>
                                </SubBox>

                                <SubBox>
                                        <label htmlFor="birth">Nascimento:</label>
                                        <input type="date" required/>
                                </SubBox>
                            </div>
                        </div>

                        <div className='dataContainer'>
                        <SubBox>
                                <label htmlFor="credit">Cartão de crédito:</label>
                                <input type="tel" pattern="[0-9\s]{0,19}" required/>
                        </SubBox>
                        </div>
                        <div style={{'display' : 'flex', 'backgroundColor' : 'transparent'}}>
                            <SubBox>
                                    <label htmlFor="val">Validade:</label>
                                    <input type="date" required/>
                            </SubBox>

                            <SubBox>
                                    <label htmlFor="cvv">CVV:</label>
                                    <input type="tel" pattern="[0-9\s]{0,19}" required/>
                            </SubBox>
                        </div>
                    </form>
                    </Box>
                </div>

                <div id='paymentRight'>
                    <Box name='Finalizar compra' display="block">
                        <h2 id = "fly">Voos</h2>
                        {errorF && <p>{errorF}</p>}
                        {isPendingF && <p>Loading...</p>}
                        {dataF && dataF.map((item, index) => {
                                return (
                                <Item className='flightBuy' destiny={item.destination} price={item.price*user.cartFlights[index][1]}/>
                                )
                        })}
                        <br/>
                        <h2 id='hotel'>Hoteis</h2>
                        {errorS && <p>{errorS}</p>}
                        {isPendingS && <p>Loading...</p>}
                        {dataS && dataS.map((item, index) => {
                                return (
                                <Item destiny={item.city} price={item.price*user.cartStays[index][1]}/>
                                )
                        })}
                        <br/>
                        <fieldset id='total'>
                            <h1>Total: R$ {total}</h1>
                        </fieldset>
        <button type="submit" id="finishButton" form="formInfo" >
                         Finalizar compra
        </button>
                    </Box>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export {Payment, Item}
