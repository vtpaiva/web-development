import Footer from './Footer'
import Header from './Header'
import {Box, SubBox} from './Box'
import { useFetch, useFetchPut } from './useFetch.jsx';
import { Offer, FlightOffer } from './Offer.jsx';
import './styles/Admin.css';
import { useState } from 'react';

function RegisterAdmins() {
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

function RegisterClients() {
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

function Settings(props) {
    const [ showPopup, setShowPopup ] = useState(false);
    function renderSwitch() {
        switch(props.type) {
            case "flight":
                return (
                    <div className="editOptions">
                        <label htmlFor="from">from</label>
                        <input type="text" name="from" id="from" value={props.item.from}/>
                        <label htmlFor="to">to</label>
                        <input type="text" name="to" id="to" value={props.item.to}/>
                        <label htmlFor="depart">depart</label>
                        <input type="text" name="depart" id="depart" value={props.item.depart}/>
                        <label htmlFor="return">return</label>
                        <input type="text" name="return" id="return" value={props.item.return}/>
                        <label htmlFor="airline">airline</label>
                        <input type="text" name="airline" id="airline" value={props.item.airline}/>
                        <label htmlFor="image">image</label>
                        <input type="text" name="image" id="image" value={props.item.image}/>
                        <label htmlFor="price">price</label>
                        <input type="text" name="price" id="price" value={props.item.price}/>
                    </div>
                )
            case "stay":
                return (
                    <div className="editOptions">
                        <label htmlFor="city">city</label>
                        <input type="text" name="city" id="city" value={props.item.city}/>
                        <label htmlFor="checkIn">checkIn</label>
                        <input type="text" name="checkIn" id="checkIn" value={props.item.checkIn}/>
                        <label htmlFor="checkOut">checkOut</label>
                        <input type="text" name="checkOut" id="checkOut" value={props.item.checkOut}/>
                        <label htmlFor="image">image</label>
                        <input type="text" name="image" id="image" value={props.item.image}/>
                        <label htmlFor="price">price</label>
                        <input type="text" name="price" id="price" value={props.item.price}/>
                    </div>
                )
            default:
                return null;
        }
    }

    return (
        <>
            <div className="popupContainer">
            <span onClick={() => setShowPopup(!showPopup)}>{showPopup ? "Salvar" : "Editar"}</span>
                { showPopup &&
                <div className="popup">
                    <Box>
                        {renderSwitch()}
                    </Box>
                </div>
                }
            </div>
        </>
    )
}

function ManageOffers() {
    const { data: dataF, isPending: isPendingF, error: errorF } = useFetch('http://localhost:4000/flights');
    const { data: dataS, isPending: isPendingS, error: errorS } = useFetch('http://localhost:4000/stays');
    return (
        <>
            <Header/>
                <div class='editOffers'>
                    {errorF && <p>{errorF}</p>}
                    {isPendingF && <p>Loading...</p>}
                    {dataF && dataF.map(item => (
                        <>
                        <Settings type="flight" item={item} />
                        <FlightOffer key={"OD"+item.id} endpoint={"flights/"+item.id} checked={item.checked} image={item.image} price={item.price} from={item.from} to={item.to} depart={item.depart} return={item.return} airline={item.airline}/>
                        </>
                    ))}
                </div>
                <h1 class='editHead'>Ofertas especiais</h1>
                <div class='editOffers'>
                    {errorS && <p>{errorS}</p>}
                    {isPendingS && <p>Loading...</p>}
                    {dataS && dataS.map(item => (
                        <>
                        <Settings type="stay" item={item} />
                        <Offer key={"OD"+item.id} endpoint={"stays/"+item.id} checked={item.checked} image={item.image} price={item.price}/>
                        </>
                    ))}
                </div>
            <Footer/>
        </>
    )

}

export { RegisterAdmins, RegisterClients, ManageOffers };
