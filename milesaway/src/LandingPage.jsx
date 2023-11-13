import './styles/LandingPage.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import {Cart, CartOffer} from './Cart.jsx'
import {Offer, FlightOffer} from './Offer.jsx';
import Footer from './Footer.jsx';
import {Box, ASubBox} from './Box.jsx';
import useFetch from './useFetch.jsx';

function LandingPage() {
    const {data, isPending, error} = useFetch('http://localhost:4000/flights');

    const [formData, setFormData] = useState({
        origem: '',
        destino: '',
        partida: '',
        volta: '',
        passageiros: '',
        bagagem: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const queryString = new URLSearchParams(formData).toString();
        navigate(`/offers?${queryString}`);
    };
    
    return (
            <>      
            <Header/>
            <form onSubmit={handleSubmit}>
            <Box name = 'Passagens aéreas' display = 'block'>
                <div className='innerBox'>
                <div style={{'display' : 'grid', 'backgroundColor' : 'transparent'}}>
                        <ASubBox>
                            <label htmlFor="origem">Origem:</label>
                            <input type="text"
                                name="origem"
                                value={formData.origem}
                                onChange={handleChange} 
                                placeholder='Origem'
                                required/>
                        </ASubBox>
                        <ASubBox>
                            <label htmlFor="destino">Destino:</label>
                            <input type="text"
                                name="destino"
                                value={formData.destino}
                                onChange={handleChange} 
                                placeholder='Destino'
                                required/>
                        </ASubBox>
                    </div>
                    <div style={{'display' : 'grid', 'backgroundColor' : 'transparent'}}>
                        <ASubBox>
                            <label htmlFor="partida">Partida:</label>
                            <input type="date"
                                name="ida"
                                value={formData.ida}
                                onChange={handleChange} 
                                placeholder='Ida'
                                required/>
                        </ASubBox>
                        <ASubBox>
                            <label htmlFor="volta">Volta:</label>
                            <input type="date"
                                name="volta"
                                value={formData.volta}
                                onChange={handleChange} 
                                placeholder='Volta'
                                required/>
                        </ASubBox>
                    </div>
                    <div style={{'display' : 'grid', 'backgroundColor' : 'transparent'}}>
                        <ASubBox>
                            <label htmlFor="passageiros">Passageiros:</label>
                            <input type="number"
                                name="passageiros"
                                value={formData.passageiros}
                                onChange={handleChange} 
                                placeholder='Passageiros'
                                required/>
                        </ASubBox>
                        <ASubBox>
                            <label htmlFor="bagagem">Bagagem:</label>
                            <input type="number"
                                name="bagagem"
                                value={formData.bagagem}
                                onChange={handleChange} 
                                placeholder='Bagagem'
                                required/>
                        </ASubBox>
                    </div>
                </div>
                <button type="submit" className='defaultButton'>Procurar passagens</button>
            </Box>
            </form>
            <h1 id='package'>Pacotes de Viagens</h1>
            <div id='sale'>
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {data && data.map(item => (
                    <CartOffer key={"LP"+item.id} endpoint={"flights/"+item.id} checked={item.checked} image={item.image} price={item.price} from={item.from} to={item.to} depart={item.depart} return={item.return} airline={item.airline}/>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default LandingPage
