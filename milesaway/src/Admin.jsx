import Footer from './Footer'
import Header from './Header'
import {Box, SubBox} from './Box'
import { useFetch, useFetchPut } from './useFetch.jsx';

function Admin() {
    return (
        <>
            <Header/>
            <Box name = 'Novo administrador' display = 'grid'>
                <div id='changeContainer'>
                    <SubBox>
                            <label htmlFor="username">Nome:<br></br></label>
                            <input type="text" placeholder='Digite o username' />
                    </SubBox>
                </div>
                <button id='button'>Submeter</button>
            </Box>
            <Footer/>
        </>
    )

}

function Client() {
    return (
        <>
            <Header/>
            <Box name = 'Novo cliente' display = 'grid'>
                <div id='changeContainer'>
                    <SubBox>
                            <label htmlFor="username">Nome:<br></br></label>
                            <input type="text" placeholder='Digite o username' />
                    </SubBox>
                </div>
                <button id='button'>Submeter</button>
            </Box>
            <Footer/>
        </>
    )
}

function Offer() {
    const { data: dataF, isPending: isPendingF, error: errorF } = useFetch('http://localhost:4000/flights');
    const { data: dataS, isPending: isPendingS, error: errorS } = useFetch('http://localhost:4000/stays');
    return (
        <>
            <Header/>
                <div id='flightOffers' style={{'display' : 'flex'}}>
                    {errorF && <p>{errorF}</p>}
                    {isPendingF && <p>Loading...</p>}
                    {dataF && dataF.map(item => (
                        <></>
                    ))}
                </div>
                <h1 id='flightHead'>Ofertas especiais</h1>
                <div id='flightSale'>
                    {errorS && <p>{errorS}</p>}
                    {isPendingS && <p>Loading...</p>}
                    {dataS && dataS.map(item => (
                        <></>
                    ))}
                </div>
            <Box name = 'Alterar e-mail' display = 'grid'>
                <div id='changeContainer'>
                    <SubBox>
                            <label htmlFor="email">Novo e-mail:<br></br></label>
                            <input type="email" placeholder='Digite seu novo e-mail' />
                    </SubBox>
                    <SubBox>
                            <label htmlFor="confirme">Confirmar novo e-mail:<br></br></label>
                            <input type="email" placeholder='Confirme seu novo e-mail'/>
                    </SubBox>
                </div>
                <button id='button'>Submeter</button>
            </Box>
            <Footer/>
        </>
    )

}

export { Admin, Client, Offer };
