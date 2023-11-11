import React, { useState } from 'react';
import './Offer.css'

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

export default Offer