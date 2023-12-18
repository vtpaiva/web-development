import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FlightOffer, StayOffer } from '../../components/Offer';
import axios from 'axios';

function OffersDisplay() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const origem = searchParams.get('origem') || '';
  const destino = searchParams.get('destino') || '';
  const partida = searchParams.get('partida') || '';
  const volta = searchParams.get('volta') || '';
  const passageiros = searchParams.get('passageiros') || '';

  const [dataF, setDataF] = useState(null);
  const [isPendingF, setIsPendingF] = useState(true);
  const [errorF, setErrorF] = useState(null);

  const [dataS, setDataS] = useState(null);
  const [isPendingS, setIsPendingS] = useState(true);
  const [errorS, setErrorS] = useState(null);

  useEffect(() => {
    const fetchDataF = async () => {
      try {
        const response = await axios.get('http://localhost:4001/flights');
        setDataF(response.data);
      } catch (error) {
        setErrorF(error.message || 'An error occurred while fetching flight data.');
      } finally {
        setIsPendingF(false);
      }
    };

    const fetchDataS = async () => {
      try {
        const response = await axios.get('http://localhost:4001/stays');
        setDataS(response.data);
      } catch (error) {
        setErrorS(error.message || 'An error occurred while fetching stay data.');
      } finally {
        setIsPendingS(false);
      }
    };

    fetchDataF();
    fetchDataS();
  }, []);

  function convertDateToISO(date) {
      return new Date(date).toISOString().substring(0, 10);
  }

  const filteredFlights = dataF
    ? dataF.filter((item) => {
        return (
          (!origem || item.origin === origem) &&
          (!destino || item.destination === destino) &&
          (!partida || convertDateToISO(item.departure) === partida) &&
          (!volta || convertDateToISO(item.arrival) === volta) &&
          (!passageiros || item.left >= passageiros)
        );
      })
    : [];

  return (
    <>
      <Header />
      <h1 id="flightHead">Ofertas especiais</h1>
      <div id="flightOffers" style={{ display: 'flex' }}>
        {errorF && <p>{errorF}</p>}
        {isPendingF && <p>Loading...</p>}
        {filteredFlights.map((item) => (
          <FlightOffer key={`OD${item.id}`} endpoint={`flights/${item.id}`} {...item} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default OffersDisplay;
