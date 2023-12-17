import '../../styles/Change.css'
import '../../styles/Offer.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Box, SubBox} from '../../components/Box'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'

function Password() {
  const navigate = useNavigate();
  const { user, refresh } = useUser();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Senhas nao coincidem');
      return;
    }

    try {
      await axios.put(`http://localhost:4001/accounts/${user.email}/${user.password}`, {
        password: newPassword,
      });

      user.password = newPassword;
      refresh();

      alert('Senha mudada com sucesso');
    } catch (error) {
      console.error('Error changing password:', error.message);
      alert('Erro ao mudar a senha. Tente novamente mais tarde');
    }
  };

  return (
    <>
      <Header />
      <Box name="Alterar senha" display="grid">
        <form id="formPass" onSubmit={changePassword}>
          <div id="changeContainer">
            <SubBox>
              <label htmlFor="email">
                Nova senha:
                <br />
              </label>
              <input
                type="password"
                placeholder="Digite sua nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </SubBox>
            <SubBox>
              <label htmlFor="confirme">
                Confirmar nova senha:
                <br />
              </label>
              <input
                type="password"
                placeholder="Confirme sua nova senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </SubBox>
          </div>
          <button type="submit" id="button" form="formPass">
            Submeter
          </button>
        </form>
      </Box>
      <Footer />
    </>
  );
}

export { Password };
