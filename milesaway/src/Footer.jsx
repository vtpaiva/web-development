import {Box, SubBox} from './Box.jsx'

import './Footer.css'

function Footer() {
    return (
        <footer id='footerContainer'>
            <div>
                <span>
                    <h2>Sobre</h2>
                    <p>Companhia aérea fundada em 2023.</p>
                </span>

                <section class="mediaIcons">
                    <figure>
                    <a href="#"><img src="logoFacebook.png" alt="Facebook"/></a>
                    <a href="#"><img src="logoInstagram.jpg" alt="Instagram"/></a>
                    <a href="#"><img src="logoTwitter.png" alt="Twitter"/></a>
                        <figcaption>Social Media</figcaption>
                    </figure>
                </section>
            </div>
            <Box name = 'Receber ofertas por e-mail' display = 'block'>
                    <SubBox>
                        <label htmlFor="email">E-mail: </label>
                        <input type="email" name="email" placeholder='Seu melhor e-mail' />
                    </SubBox>
                    <button class='defaultButton'>Inscrever-se</button>
                </Box>
        </footer>
    )
}

export default Footer