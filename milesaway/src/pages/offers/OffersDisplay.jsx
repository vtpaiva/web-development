import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FlightOffer, StayOffer } from '../../components/Offer';
import useFetch from '../../functions/useFetch';

function OffersDisplay() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Recupera os dados da URL
    const origem = searchParams.get('origem') || '';
    const destino = searchParams.get('destino') || '';
    const partida = searchParams.get('partida') || '';
    const volta = searchParams.get('volta') || '';
    const passageiros = searchParams.get('passageiros') || '';
    const bagagem = searchParams.get('bagagem') || '';

    // Use o hook useFetch ou outra lógica para obter os dados dos voos e estadias
    const { data: dataF, isPending: isPendingF, error: errorF } = useFetch('http://localhost:4000/flights');
    const { data: dataS, isPending: isPendingS, error: errorS } = useFetch('http://localhost:4000/stays');

    // Filtra os voos com base nos parâmetros da consulta
    const filteredFlights = dataF ? dataF.filter(item => {
        return (
            (!origem || item.from === origem) &&
            (!destino || item.to === destino) &&
            (!partida || item.depart === partida) &&
            (!volta || item.return === volta)
        );
    }) : [];

    return (
        <>
            <Header />
            <div id='flightOffers' style={{'display' : 'flex'}}>
                {errorF && <p>{errorF}</p>}
                {isPendingF && <p>Loading...</p>}
                {filteredFlights.map(item => (
                    <FlightOffer
                        key={`OD${item.id}`}
                        endpoint={`flights/${item.id}`}
                        {...item}
                    />
                ))}
            </div>
            <h1 id='flightHead'>Ofertas especiais</h1>
            <div id='flightSale'>
                {errorS && <p>{errorS}</p>}
                {isPendingS && <p>Loading...</p>}
                {dataS && dataS.map(item => (
                    <StayOffer
                        key={`OD${item.id}`} 
                        endpoint={`stays/${item.id}`}
                        {...item}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default OffersDisplay;
