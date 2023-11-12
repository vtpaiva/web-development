import Footer from './Footer.jsx'
import Header from './Header.jsx'
import { Link } from 'react-router-dom';
import './styles/Cart.css'
import { Offer, FlightOffer } from './Offer.jsx';
import useFetch from './useFetch.jsx';
import { useState, useEffect } from 'react';

import React from 'react';

function CartOffer(props) {
    return (
        <div className='offerContainer'>
            <img src={props.image} alt="" />
            <div className='offerDesc'>
                <span>R$ {props.price}</span>
                <div className='quantityButton'>
                    <button>-</button>
                    <div className='quantity'>{props.quantity}</div>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

function Cart(props) {
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
                <div id='cartContainer'>
                    <div id='cartLeft'>
                        <h2>Voos</h2>
                        {errorF && <p>{errorF}</p>}
                        {isPendingF && <p>Loading...</p>}
                        {dataF && dataF.map(item => {
                            if(item.checked === true) {
                                return (
                                    <FlightOffer key={"C"+item.id} endpoint={"flights/"+item.id} checked={item.checked} image={item.image} price={item.price} from={item.from} to={item.to} depart={item.depart} return={item.return} airline={item.airline}/>
                                )
                            }
                            return null;
                        })}
                        <h2>Hoteis</h2>
                        {errorS && <p>{errorS}</p>}
                        {isPendingS && <p>Loading...</p>}
                        {dataS && dataS.map(item => {
                            if(item.checked === true) {
                                return (
                                    <Offer key={"C"+item.id} endpoint={"stays/"+item.id} checked={item.checked} image={item.image} price={item.price}/>
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
            <Footer/>
        </>
    )
}

export {Cart, CartOffer}
