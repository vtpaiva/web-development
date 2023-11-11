import './styles/SingIn.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'

function SingIn() { 
    return (
        <>      
        <Header/>
            <Box display = 'block' name = 'Iniciar sessão'>
                <div className='centerBox'>
                    <SubBox>
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" id="usuario" />
                    </SubBox>
                    <SubBox>
                        <label htmlFor="senha">Senha</label>
                        <input type='password' name="senha" id="senha" />
                    </SubBox>
                </div>
                <button class='defaultButton'>Enviar</button>
            </Box>

            <Box name = 'Precisa de ajuda?' display = 'block'>
                <div className='centerBox'>
                    <span>Tire suas dúvidas por telefone</span>
                    <SubBox>
                        <label htmlFor="telefone">Telefone</label>
                        <input type='tel' name="telefone" id="telefone" />
                    </SubBox>
                </div>
                <button class='defaultButton'>Enviar</button>
            </Box>
        <Footer/>
    </>
    )
}

export default SingIn