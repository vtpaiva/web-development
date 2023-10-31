import Footer from './Footer'
import Header from './Header'
import {Box, SubBox} from './Box'
import './Profile.css'

function UserProfile() {
    return (
        <>
            <Header/>
                <div id='userPic'>
                    <img src="https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png" alt="Profile picture"/>
                </div>
                <Box>
                    <div id='options'>
                        <SubBox>Alterar e-mail</SubBox>
                        <SubBox>Alterar senha</SubBox>
                        <SubBox>Minhas reservas</SubBox>
                        <SubBox>Minhas avaliações</SubBox>
                    </div>
                </Box>
            <Footer/>
        </>
    )
}

export default UserProfile