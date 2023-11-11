import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Offer.css'

function BotaoToggle() {
    const [classeBotao, setClasseBotao] = useState('add');
    const [textoBotao, setTextoBotao] = useState('Adicionar ao carrinho');
  
    const alternarBotao = () => {
      setClasseBotao(classeBotao === 'add' ? 'remove' : 'add');
  
      setTextoBotao(textoBotao === 'Adicionar ao carrinho' ? 'Remover do carrinho' : 'Adicionar ao carrinho');
    };
  
    return (
      <button className={classeBotao} onClick={alternarBotao}>
        {textoBotao}
      </button>
    );
  }

function FlightOffer(props) {
    return (
        <>
            <div className='flightContainer'>
                <div className='flightData'>
                    <span>Origem: {props.origin}</span>
                    <span>Destino: {props.destiny}</span>
                    <span>Ida: {props.departure}</span>
                    <span>Volta: {props.back}</span>
                    <span className='flightCompany'>{props.company}</span>
                </div>
                <div className='flightButton'>
                    <Link to = '/cart'><button>Adicionar ao carrinho</button></Link>
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
                <BotaoToggle/>
            </div>
        </div>
    )
}

export {FlightOffer, Offer}