import '../../styles/SignIn.css'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import {Box, SubBox} from '../../components/Box.jsx'

function SignIn() { 
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
                <button className='defaultButton'>Enviar</button>
            </Box>

            <Box name = 'Precisa de ajuda?' display = 'block'>
                <div className='centerBox'>
                    <span>Tire suas dúvidas por telefone</span>
                    <SubBox>
                        <label htmlFor="telefone">Telefone</label>
                        <input type='tel' name="telefone" id="telefone" />
                    </SubBox>
                </div>
                <button className='defaultButton'>Enviar</button>
            </Box>
        <Footer/>
    </>
    )
}

export default SignIn
