import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './style.css';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';



export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignUp(e){
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if(loading){
    return <p style={{justifyContent:'center', alignItems:'center'}}>Carregando...</p>
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="workflow" />
        <span>Por favor digite suas informações de Cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input 
          type="text" 
          name="email" 
          id="email" 
          placeholder="seuemail@seuemail.com"
          onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="********"
          onChange={e => setPassword(e.target.value)}
          />
        </div>

  

       <button className="button" onClick={handleSignUp} >
        Cadastrar <img src="../../src/images/Vector.svg" alt="" />
       </button>

       <div className="footer">
        <p>Você já possui uma conta?</p>
        <Link className="createAccount" to="/">Acessar conta</Link>
       </div>
      </form>
    </div>
  )
}


