import styles from './Login.css';
import React,{useState} from 'react';
import auth from '../firebase/config';
import {useNavigate} from 'react-router-dom';
// import {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
      .then(() => {
        navigate('/home');
        console.log('Login exitoso')
      })
      .catch((err) => console.log('error', err.message))
  }
  
  return(
    <div>
      <form onSubmit={loginUser}className={styles['login-form']}>
        <label htmlFor="">
          <span>E-mail:</span>
          <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="inputEmail">
          </input>
        </label>
        <label htmlFor="">
          <span>Contraseña:</span>
          <input type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="inputPassword">
          </input>
        </label>
        <button 
        className='btn'
        
        >Iniciar Sesion</button>

      </form>
    </div>
  )
}

export default Login;