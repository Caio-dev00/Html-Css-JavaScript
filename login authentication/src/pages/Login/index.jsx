import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo.svg';
import './style.css';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

export default function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSingIn(e){
    e.preventDefault();
    signInWithEmailAndPassword(email, password);

  }

  if(loading){
    return <p style={{justifyContent:'center', alignItems:'center'}}>Carregando...</p>
  }

  if(user){
    return console.log(user);
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="workflow" />
        <span>Digite suas informações de Log-in</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input 
          type="text" 
          name="email" 
          id="email" 
          placeholder="seuemail@seuemail.com" 
          onChange={(e) => setEmail(e.target.value)}
  
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
          type="password" 
          name="password" 
          id="password" 
          placeholder="********" 
          onChange={(e) => setPassword(e.target.value)}
  
          />
        </div>

       <a href="">Esqueci minha senha</a>

       <button className="button" onClick={handleSingIn}>
        Entrar <img src="../../src/images/Vector.svg" alt="" />
       </button>

       <div className="footer">
        <p>Você não possui uma conta?</p>
        <Link to="/register">Criar uma conta</Link>
       </div>
      </form>
    </div>
  )
}


