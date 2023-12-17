import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Box, SubBox } from '../../components/Box';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useUser } from '../../contexts/UserContext';

import UserProfile from '../profile/UserProfile';

const AuthPage = () => {
    const navigate = useNavigate();
    //const [user, setUser] = useState(null);
    const { user, login, logout, refresh } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/accounts/${email}/${password}`);
            console.log(response);

            const loggedInUser = response.data;

            login(loggedInUser);

            //navigate.goBack();

        } catch (err) {
            setError('Invalid email or password');
        }
    };

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:4001/accounts', { email, password });

            const response2 = await axios.get(`http://localhost:4001/accounts/${email}/${password}`);

            const newUser = response2.data;

            login(newUser);

            //navigate.goBack();

        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <>
        <Header />
        {user ? (
            // User is already logged in
            <div>
              {/* Display other user-related content or allow logout */}
            <UserProfile />
            </div>
          ) : (
            // User not logged in, show login/signup form
            <div>
              <Box display="block" name="Iniciar sessão">
                  <SubBox>
                    <label htmlFor="usuario">Email</label>
                    <input
                      type="email"
                      name="usuario"
                      id="usuario"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </SubBox>
                  <SubBox>
                    <label htmlFor="senha">Senha</label>
                    <input
                      type="password"
                      name="senha"
                      id="senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </SubBox>
                <button className="defaultButton" onClick={handleLogin}>
                  Enviar
                </button>
              </Box>
              <Box display="block" name="Registrar">
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
                <button className="defaultButton" onClick={handleSignup}>
                  Registrar
                </button>
              </Box>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          )}
          <Footer />
        </>
  );
};

export default AuthPage;
