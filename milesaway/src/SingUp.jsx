import './styles/SingIn.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {Box, SubBox} from './Box.jsx'

function SingUp() { 
    return (
        <>      
        <Header/>
            <div id='singupGrid'>
                <div id='singupLeft'>
                    <Box display = 'block' name = 'Cadastre-se'>
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
                </div>
                <div id='singupRight'>
                    <h1>Bem-vindo a MilesAway - Sua Janela para o Mundo!</h1>
                    <p>1. <strong>Busca Rápida e Fácil:</strong> Utilize nossa ferramenta de pesquisa intuitiva para encontrar as melhores
                        opções de voos, trens, ônibus ou cruzeiros para o seu destino. Basta inserir origem, destino e datas de viagem, e
                        nós cuidamos do resto.</p>
                        <p>2. <strong>Ofertas Especiais:</strong> Fique de olho em nossas ofertas e promoções exclusivas para economizar ainda
                        mais em sua próxima aventura. Explore destinos populares a preços irresistíveis.</p>
                        <p>3. <strong>Reservas Simples:</strong> Reservar suas passagens nunca foi tão simples. Com apenas alguns cliques, você
                        pode garantir seu lugar a bordo e receber a confirmação instantaneamente.</p>
                        <p>4. <strong>Informações de Viagem:</strong> Mantenha-se informado sobre detalhes importantes da sua jornada. Fornecemos
                        informações atualizadas sobre horários, portões de embarque, política de bagagem e muito mais.</p>
                        <p>5. <strong>Suporte 24/7:</strong> Nossa equipe de atendimento ao cliente está disponível 24 horas por dia, 7 dias por
                        semana, para responder a todas as suas perguntas e auxiliar com qualquer problema que possa surgir.</p>
                    </div>
            </div>
        <Footer/>
    </>
    )
}

export default SingUp