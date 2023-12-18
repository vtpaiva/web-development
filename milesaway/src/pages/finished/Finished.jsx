import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import {Box} from '../../components/Box.jsx';
import '../../styles/Finished.css';

import axios from 'axios';
import { useUser } from '../../contexts/UserContext';

const processCart = async (user, refresh) => {
  try {
    for (const [flightSlug, quantity] of user.cartFlights) {
      const flight = await axios.get(`http://localhost:4001/flights/${flightSlug}`);

      if (flight.data) {
        const updatedLeft = Math.max(flight.data.left - quantity, 0);
        await axios.put(`http://localhost:4001/flights/${flightSlug}`, { left: updatedLeft });

        user.cartFlights = user.cartFlights.filter(([slug]) => slug !== flightSlug);
      }
    }

    for (const [staySlug, quantity] of user.cartStays) {
      const stay = await axios.get(`http://localhost:4001/stays/${staySlug}`);

      if (stay.data) {
        const updatedLeft = Math.max(stay.data.left - quantity, 0);
        await axios.put(`http://localhost:4001/stays/${staySlug}`, { left: updatedLeft });

        user.cartStays = user.cartStays.filter(([slug]) => slug !== staySlug);
      }
    }

    await axios.put(`http://localhost:4001/accounts/${user.email}/${user.password}`, user);

      refresh();

  } catch (error) {
    console.error('Error processing cart:', error.message);
  }
};

function Finished() {
    const { user, refresh } = useUser();

    processCart(user, refresh);

    return (
    <>
        <Header/>
        <div id="successBox">
            <Box name="Sucesso!">
                <h1 id='sucess'>Compra concluida</h1>
            </Box>
        </div>
        <Footer/>
    </>
    )

}

export default Finished;
