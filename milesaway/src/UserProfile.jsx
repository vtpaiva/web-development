import Footer from './Footer'
import Header from './Header'
import {Box, SubBox} from './Box'
import './styles/Profile.css'
import { Link } from 'react-router-dom'
import { useFetch, useFetchPut } from './useFetch.jsx'
import { useEffect, useState } from 'react'

function UserProfile() {
    const { data, isPending, error } = useFetch('http://localhost:4000/accounts');
    const [ userType, setUserType ] = useState("login");
    const [ userName, setUserName ] = useState("");
    const [ tempUserName, setTempUserName ] = useState("");

    useEffect(() => {
        if(data) {
            for(let i = 0; i < data.length; ++i) {
                if(data[i].name === userName) {
                    console.log(data[i].type, userName, data[i].name);
                    setUserType(data[i].type);
                    break;
                }
            }
        }
    }, [data, userName]);

    return (
        <>
            <Header/>
        { userType === "login" &&
            <div id="loginContainer">
                <Box name = 'Fazer login' display = 'grid'>
                    <div id='changeContainer'>
                        <SubBox>
                                <label htmlFor="email">Nome:<br></br></label>
                                <input type="email" placeholder='"user" ou "admin"' onChange={(e) => setTempUserName(e.target.value)}/>
                        </SubBox>
                    </div>
                    <button id='button' onClick={() => setUserName(tempUserName)}>Submeter</button>
                </Box>
            { // Acho que por enquanto n precisa de cadastro
                /* <Box name = 'Fazer cadastro' display = 'grid'>
                    <div id='changeContainer'>
                        <SubBox>
                                <label htmlFor="email">E-mail:<br></br></label>
                                <input type="email" placeholder='Digite seu e-mail' />
                        </SubBox>
                        <SubBox>
                                <label htmlFor="confirme">Senha<br></br></label>
                                <input type="password" placeholder='Digite sua senha'/>
                        </SubBox>
                    </div>
                    <button id='button'>Submeter</button>
                </Box>
                */
            }
            </div>
        }
        { userType === "user" &&
            <>
                <div id='userPic'>
                    <img src="https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png" alt="Profile picture"/>
                </div>
                <Box>
                    <div id='options'>
                        <Link to = '/email'><SubBox>Alterar e-mail</SubBox></Link>
                        <Link to = '/password'><SubBox>Alterar senha</SubBox></Link>
                        <Link to = '/booking'> <SubBox>Minhas reservas</SubBox></Link>
        { /* <SubBox>Minhas avaliações</SubBox> */ }
                    </div>
                </Box>
            </>
        }
        { userType === "admin" &&
                <>
                <div id='userPic'>
                    <img src="https://web.icmc.usp.br/SCAPINST/fotos_pessoas/2803743.jpg" alt="Profile picture"/>
                </div>
                <Box>
                    <div id='options'>
                        <Link to = '/registerAdmin'><SubBox>Registrar Administradores</SubBox></Link>
                        <Link to = '/registerClient'><SubBox>Registrar Clientes</SubBox></Link>
                        <Link to = '/manageOffers'> <SubBox>Gerenciar ofertas</SubBox></Link>
        { /* <SubBox>Minhas avaliações</SubBox> */ }
                    </div>
                </Box>
                </>
        }
            <Footer/>
        </>
    )
}

export default UserProfile
