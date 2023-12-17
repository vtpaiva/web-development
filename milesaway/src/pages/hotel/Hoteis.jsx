import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';
import Header from '../../components/Header';
import { StayOffer } from '../../components/Offer';
import Footer from '../../components/Footer';

function Hoteis() {
    const { user } = useUser();
    const [flights, setFlights] = useState([]);
    const [stays, setStays] = useState([]);
    const [isPendingFlights, setIsPendingFlights] = useState(true);
    const [isPendingStays, setIsPendingStays] = useState(true);
    const [errorFlights, setErrorFlights] = useState(null);
    const [errorStays, setErrorStays] = useState(null);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await axios.get('http://localhost:4001/flights');
                setFlights(response.data);
            } catch (error) {
                setErrorFlights(error.message || 'An error occurred while fetching flight data.');
            } finally {
                setIsPendingFlights(false);
            }
        };

        const fetchStays = async () => {
            try {
                const response = await axios.get('http://localhost:4001/stays');
                setStays(response.data);
            } catch (error) {
                setErrorStays(error.message || 'An error occurred while fetching stay data.');
            } finally {
                setIsPendingStays(false);
            }
        };

        fetchFlights();
        fetchStays();
    }, []);

    const filterCities = () => {
        const filter = {};
        let num = 0;

        if (flights) {
            for (let i = 0; i < flights.length; ++i) {
                const slug = flights[i].slug;
                const cartItem = user.cartFlights.find(([cartSlug]) => cartSlug === slug);

                if (cartItem) {
                    filter[flights[i].destination] = true;
                    ++num;
                }
            }
        }

        return { filter, num };
    };

    const { filter, num } = filterCities();

    return (
        <>
        <Header />
        <h1 id='package'>Pacotes de hospedagem</h1>
        <div id='sale'>
        {errorStays && <p>{errorStays}</p>}
        {isPendingStays && <p>Loading...</p>}
        {stays &&
                stays.map((item) => {
                    if (filter[item.city]) {
                        return (
                            <StayOffer
                            key={"H" + item.slug}
                            endpoint={`stays/${item.slug}`}
                            {...item}
                            />
                        );
                    }
                    return null;
                })}
        {num === 0 && <p className="whiteText">Nao ha hoteis disponiveis para os destinos de suas viagens</p>}
        </div>
        <Footer />
        </>
    );
}

export default Hoteis;

