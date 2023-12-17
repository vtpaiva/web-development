import Footer from '../../components/Footer.jsx'
import Header from '../../components/Header.jsx'
import { Link } from 'react-router-dom';
import '../../styles/Cart.css'
import { StayOffer, FlightOffer, BotaoToggle } from '../../components/Offer.jsx';
import useFetch from '../../functions/useFetch.jsx';
import { useState, useEffect } from 'react';

import React from 'react';
import { SubBox } from '../../components/Box.jsx';

import axios from 'axios';

import { useUser } from '../../contexts/UserContext';

function Cart(props) {
    const { user } = useUser();

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
    return (
        <>
            <Header/>
                { user === null ?
                    <>
                    <p style={{color: 'red'}}>Voce precisa estar logado para acessar o carrinho</p>
                    <Link to='/login'><button className="defaultButton">Login</button></Link>
                    </>
                    :
                <div id='cartContainer'>
                    <div id='cartLeft'>
                        <h2>Voos</h2>
                        {errorF && <p>{errorF}</p>}
                        {isPendingF && <p>Loading...</p>}
                        {dataF && dataF.map(item => {
                            if(item) {
                                return (
                                    <FlightOffer key={"C"+item.slug} endpoint={"flights/"+item.slug} {...item}/>
                                )
                            }
                            return null;
                        })}
                        <h2>Hoteis</h2>
                        {errorS && <p>{errorS}</p>}
                        {isPendingS && <p>Loading...</p>}
                        {dataS && dataS.map(item => {
                            if(item) {
                                return (
                                    <StayOffer key={"C"+item.slug} endpoint={"stays/"+item.slug} {...item}/>
                                )
                            }
                            return null;
                        })}

                    </div>
                    <div id='cartRight'>
                        <div id='cartHotel'>
                            <span>Gostaria de encontrar hotéis para sua estadia?</span>
                            <Link to='/hotel'><button>Encontrar hotéis</button></Link>
                        </div>
                        <div id='cartFinish'>
                            <span>Total: R$ {total}</span>
                            <Link to='/payment'><button>Finalizar pagamento</button></Link>
                        </div>
                    </div>
                </div>
                }
            <Footer/>
        </>
    )
}

export {Cart}
