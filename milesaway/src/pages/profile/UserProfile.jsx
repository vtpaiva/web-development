import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Box, SubBox} from '../../components/Box'
import '../../styles/Profile.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const { user, login, logout, refresh } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }


    return (
        <>
            <Header/>
        { user === null && 
                <p style={{color: 'red'}}>
                Usuario nao logado
                </p>
        }
        { user && user.admin === false &&
            <>
                <div id='userPic'>
                    <img src="https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png" alt="Profile picture"/>
                </div>
                <Box>
                    <div id='options'>
                        <Link to = '/password'><SubBox>Alterar senha</SubBox></Link>
                    </div>
                    <div id='options'>
              <button onClick={handleLogout}>
                <SubBox>Logout</SubBox>
              </button>
                    </div>
                </Box>
            </>
        }
        { user && user.admin === true &&
                <>
                <div id='userPic'>
                    <img src="https://web.icmc.usp.br/SCAPINST/fotos_pessoas/2803743.jpg" alt="Profile picture"/>
                </div>
                <Box>
                    <div id='options'>
                        <Link to = '/registerAdmin'><SubBox>Registrar Administradores</SubBox></Link>
                        <Link to = '/registerClient'><SubBox>Registrar Clientes</SubBox></Link>
                        <Link to = '/manageOffers'> <SubBox>Gerenciar ofertas</SubBox></Link>
                    </div>
                </Box>
                </>
        }
        </>
    )
}

export default UserProfile
