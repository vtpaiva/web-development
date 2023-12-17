import {Box, ASubBox} from './Box.jsx'

import '../styles/Footer.css'

function Footer() {
    return (
        <footer id='footerContainer'>
            <div>
                <span>
                    <h2>Sobre</h2>
                    <p>Companhia aérea fundada em 2023.</p>
                </span>

                <section className="mediaIcons">
                    <figure>
                    <a href="#"><img src="logoFacebook.png" alt="Facebook"/></a>
                    <a href="#"><img src="logoInstagram.png" alt="Instagram"/></a>
                    <a href="#"><img src="logoTwitter.png" alt="Twitter"/></a>
                        <figcaption>Social Media</figcaption>
                    </figure>
                </section>
            </div>
            <Box name = 'Receber ofertas por e-mail' display = 'block'>
                    <ASubBox>
                        <label htmlFor="email">E-mail: </label>
                        <input type="email" name="email" placeholder='Seu melhor e-mail' />
                    </ASubBox>
                    <button className='defaultButton'>Inscrever-se</button>
                </Box>
        </footer>
    )
}

export default Footer
