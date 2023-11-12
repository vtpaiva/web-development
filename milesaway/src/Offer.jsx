import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Offer.css'
import { useFetchPut } from './useFetch.jsx';

function BotaoToggle(props) {
    const [ checked, setChecked ] = useState(props.checked);
    useFetchPut("http://localhost:4000/" + props.endpoint, {"checked": checked});
  
    const alternarBotao = () => {
        setChecked(!checked);
    };
  
    return (
      <button className={checked ? 'remove' : 'add'} onClick={alternarBotao}>
        {checked ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </button>
    );
  }

function FlightOffer(props) {
    return (
        <>
            <div className='flightContainer'>
                <div className='flightData'>
                    <span>Origem: {props.from}</span>
                    <span>Destino: {props.to}</span>
                    <span>Ida: {props.depart}</span>
                    <span>Volta: {props.return}</span>
                    <span className='flightCompany'>{props.airline}</span>
                </div>
                <div className='flightButton'>
                    <BotaoToggle checked={props.checked} endpoint={props.endpoint}/>
                </div>
            </div>
        </>
    )
}

function Offer(props) {
    return (
        <div className='offerPanel'>
            <img src= {props.image} alt="City" />
            <div className='offerBottom'>
                <span>R$ {props.price}</span>
                <BotaoToggle checked={props.checked} endpoint={props.endpoint}/>
            </div>
        </div>
    )
}

export {FlightOffer, Offer}
