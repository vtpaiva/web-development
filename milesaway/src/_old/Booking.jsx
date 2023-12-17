import Footer from './Footer'
import Header from './Header'
import {Box, SubBox} from './Box.jsx'

function Booking() {
    return (
        <>
            <Header/>
                <Box name = 'Código de reserva' display = 'block'>
                    <SubBox>
                        <label htmlFor="book">Código</label>
                        <input type="text" placeholder='Insira o código da reserva' />
                    </SubBox>
                    <button className='defaultButton'>Procurar reserva</button>
                </Box>
            <Footer/>
        </>
    )
}

export default Booking
