import '../../styles/LandingPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import {StayOffer, FlightOffer} from '../../components/Offer.jsx';
import Footer from '../../components/Footer.jsx';
import {Box, ASubBox} from '../../components/Box.jsx';
import axios from 'axios';

function LandingPage() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4001/flights');
                setData(response.data);
            } catch (error) {
                setError('Erro');
            } finally {
                setIsPending(false);
            }
        };

        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        origem: '',
        destino: '',
        partida: '',
        volta: '',
        passageiros: '',
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
                                name="partida"
                                value={formData.partida}
                                onChange={handleChange}
                                placeholder='Partida'
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
                    </div>
                </div>
                <button type="submit" className='defaultButton'>Procurar passagens</button>
            </Box>
            </form>
            <h1 id='package'>Pacotes de Viagens</h1>
            <div id='sale'>
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {console.log(data)}
                {data && data.map(item => {
                    if(item.left > 0) {
                        return (
                        <FlightOffer key={"LP"+item.slug} endpoint={"flights/"+item.slug} type="flight" {...item}/>
                        )
                    }
                    return null;
                })}
            </div>
            <Footer/>
        </>
    )
}

export default LandingPage
