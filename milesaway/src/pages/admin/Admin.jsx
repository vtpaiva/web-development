import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {Box, SubBox} from '../../components/Box';
import { useFetch, useFetchPut } from '../../functions/useFetch.jsx';
import { StayOffer, FlightOffer } from '../../components/Offer.jsx';
import '../../styles/Admin.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

function RegisterAdmins() {
    const navigate = useNavigate();

    const { user, login, logout, refresh } = useUser();

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:4001/accounts', { email, password , admin: true});
            navigate(0);
        } catch (err) {
            setError('Criacao falhou. Tente novamente mais tarde');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4001/accounts')
                setData(response.data);
            } catch (error) {
                setError(error.message || 'Um erro ocorreu enquanto carregava os dados');
            } finally {
                setIsPending(false);
            }
        };
        fetchData();
    }, []);

    if(!user || user.admin === false) {
        navigate('/');
        return null;
    }

    return (
        <>
            <Header/>
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                <Box name = 'Administradores' display = 'grid'>
                {data && data.map(item => {
                    if(item.admin === true)
                    return (
                    <>
                    <div id='changeContainer'>
                        <SubBox>
                                <label htmlFor="email">Email:<br></br></label>
                                <input type="email" placeholder='Digite o email' value={item.email}/>
                        </SubBox>
                    </div>
                    </>
                );
                    return null;
                })}
                </Box>
              <Box display="block" name="Registrar">
                <div className="centerBox">
                  <SubBox>
                    <label htmlFor="newUsuario">Novo Email</label>
                    <input
                      type="email"
                      name="newUsuario"
                      id="newUsuario"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </SubBox>
                  <SubBox>
                    <label htmlFor="newSenha">Nova Senha</label>
                    <input
                      type="password"
                      name="newSenha"
                      id="newSenha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </SubBox>
                </div>
                <button className="defaultButton" onClick={handleSignup}>
                  Registrar
                </button>
            </Box>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Footer/>
        </>
    )

}

function RegisterClients() {
    const navigate = useNavigate();

    const { user, login, logout, refresh } = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:4001/accounts', { email, password , admin: false});
            navigate(0);
        } catch (err) {
            setError('Criacao falhou. Tente novamente mais tarde');
        }
    };

    if(!user || user.admin === false) {
        navigate('/');
        return null;
    }
    return (
        <>
            <Header/>
              <Box display="block" name="Registrar">
                <div className="centerBox">
                  <SubBox>
                    <label htmlFor="newUsuario">Novo Email</label>
                    <input
                      type="email"
                      name="newUsuario"
                      id="newUsuario"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </SubBox>
                  <SubBox>
                    <label htmlFor="newSenha">Nova Senha</label>
                    <input
                      type="password"
                      name="newSenha"
                      id="newSenha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </SubBox>
                </div>
                <button className="defaultButton" onClick={handleSignup}>
                  Registrar
                </button>
              </Box>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            <Footer/>
        </>
    )
}

function Settings(props) {
    const navigate = useNavigate();

    const [ showPopup, setShowPopup ] = useState(false);

    const [updatedData, setUpdatedData] = useState({});

    const handleInputChange = (field, value) => {
        setUpdatedData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSave = async () => {
        try {
            // Make a PUT request to update the data on the server
            await axios.put(`http://localhost:4001/${props.type}s/${props.item.slug}`, updatedData);

            // Close the popup after successful update
            setShowPopup(false);

            navigate(0);
        } catch (error) {
            console.error('Error updating data:', error.message);
            // Handle the error, e.g., display an error message to the user
        }
    };
    function renderSwitch() {
        switch(props.type) {
            case "flight":
                return (
                    <div className="editOptions">
                      <label htmlFor="origin">origin</label>
                      <input
                        type="text"
                        name="origin"
                        id="origin"
                        value={updatedData.origin || props.item.origin}
                        onChange={(e) => handleInputChange('origin', e.target.value)}
                      />
                      <label htmlFor="destination">destination</label>
                      <input
                        type="text"
                        name="destination"
                        id="destination"
                        value={updatedData.destination || props.item.destination}
                        onChange={(e) => handleInputChange('destination', e.target.value)}
                      />
                      <label htmlFor="departure">departure</label>
                      <input
                        type="text"
                        name="departure"
                        id="departure"
                        value={updatedData.departure || props.item.departure}
                        onChange={(e) => handleInputChange('departure', e.target.value)}
                      />
                      <label htmlFor="arrival">arrival</label>
                      <input
                        type="text"
                        name="arrival"
                        id="arrival"
                        value={updatedData.arrival || props.item.arrival}
                        onChange={(e) => handleInputChange('arrival', e.target.value)}
                      />
                      <label htmlFor="airline">airline</label>
                      <input
                        type="text"
                        name="airline"
                        id="airline"
                        value={updatedData.airline || props.item.airline}
                        onChange={(e) => handleInputChange('airline', e.target.value)}
                      />
                      <label htmlFor="image">image</label>
                      <input
                        type="text"
                        name="image"
                        id="image"
                        value={updatedData.image || props.item.image}
                        onChange={(e) => handleInputChange('image', e.target.value)}
                      />
                      <label htmlFor="price">price</label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        value={updatedData.price || props.item.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                      />
                      <label htmlFor="left">left</label>
                      <input
                        type="text"
                        name="left"
                        id="left"
                        value={updatedData.left || props.item.left}
                        onChange={(e) => handleInputChange('left', e.target.value)}
                      />
                    </div>
                )
            case "stay":
                return (
                    <div className="editOptions">
                      <label htmlFor="city">city</label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            value={updatedData.city || props.item.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                          />
                          <label htmlFor="checkIn">checkIn</label>
                          <input
                            type="text"
                            name="checkIn"
                            id="checkIn"
                            value={updatedData.checkIn || props.item.checkIn}
                            onChange={(e) => handleInputChange('checkIn', e.target.value)}
                          />
                          <label htmlFor="checkOut">checkOut</label>
                          <input
                            type="text"
                            name="checkOut"
                            id="checkOut"
                            value={updatedData.checkOut || props.item.checkOut}
                            onChange={(e) => handleInputChange('checkOut', e.target.value)}
                          />
                          <label htmlFor="image">image</label>
                          <input
                            type="text"
                            name="image"
                            id="image"
                            value={updatedData.image || props.item.image}
                            onChange={(e) => handleInputChange('image', e.target.value)}
                          />
                          <label htmlFor="price">price</label>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            value={updatedData.price || props.item.price}
                            onChange={(e) => handleInputChange('price', e.target.value)}
                          />
                          <label htmlFor="establishment">establishment</label>
                          <input
                            type="text"
                            name="establishment"
                            id="establishment"
                            value={updatedData.establishment || props.item.establishment}
                            onChange={(e) => handleInputChange('establishment', e.target.value)}
                          />
                          <label htmlFor="left">left</label>
                          <input
                            type="text"
                            name="left"
                            id="left"
                            value={updatedData.left || props.item.left}
                            onChange={(e) => handleInputChange('left', e.target.value)}
                          />
                        </div>
                    )
            default:
                return null;
        }
    }


    return (
        <>
            <div className="popupContainer">
            <span onClick={() => setShowPopup(!showPopup)}>{showPopup ? "Cancelar" : "Editar"}</span>
                { showPopup &&
                <div className="popup">
                    <Box>
                        {renderSwitch()}
                    </Box>
                    <div className="popupContainer">
                        <span onClick={handleSave}>Salvar</span>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

function ManageOffers() {
    const navigate = useNavigate();

    const { user, login, logout, refresh } = useUser();

    const [error, setError] = useState(null);

    const [dataF, setDataF] = useState([]);
    const [isPendingF, setIsPendingF] = useState(true);
    const [errorF, setErrorF] = useState(null);
    const [dataS, setDataS] = useState([]);
    const [isPendingS, setIsPendingS] = useState(true);
    const [errorS, setErrorS] = useState(null);
    useEffect(() => {
        const fetchDataF = async () => {
            try {
                const response = await axios.get('http://localhost:4001/flights')
                setDataF(response.data);
            } catch (error) {
                setErrorF(error.message || 'Um erro ocorreu enquanto carregava os dados');
            } finally {
                setIsPendingF(false);
            }
        };
        const fetchDataS = async () => {
            try {
                const response = await axios.get('http://localhost:4001/stays')
                setDataS(response.data);
            } catch (error) {
                setErrorS(error.message || 'Um erro ocorreu enquanto carregava os dados');
            } finally {
                setIsPendingS(false);
            }
        };

        fetchDataF();
        fetchDataS();
    }, []);

    if(!user || user.admin === false) {
        navigate('/');
        return null;
    }
    return (
        <>
            <Header/>
                <h1 class='editHead'>Ofertas de voo</h1>
                <div className='editOffers' style={{'display' : 'flex', 'flexWrap' : 'wrap'}}>
                    {errorF && <p>{errorF}</p>}
                    {isPendingF && <p>Loading...</p>}
                    {dataF && dataF.map(item => (
                        <>
                        <div>
                        <Settings type="flight" item={item} />
                        <FlightOffer key={"OD"+item.slug} endpoint={"flights/"+item.slug} {...item}/>
                        </div>
                        </>
                    ))}
                </div>
                <h1 className='editHead'>Ofertas de estadia</h1>
                <div className='editOffers' style={{'display' : 'flex', 'flexWrap' : 'wrap'}}>
                    {errorS && <p>{errorS}</p>}
                    {isPendingS && <p>Loading...</p>}
                    {dataS && dataS.map(item => (
                        <>
                        <div>
                        <Settings type="stay" item={item} />
                        <StayOffer key={"OD"+item.slug} endpoint={"stays/"+item.slug} {...item}/>
                        </div>
                        </>
                    ))}
                </div>
            <Footer/>
        </>
    )

}

export { RegisterAdmins, RegisterClients, ManageOffers };
