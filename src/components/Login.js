import styles from '../css/Login.scss';
import React,{useState} from 'react';
import { useLogin } from '../hooks/useLogin';
import myImage from '../images/Logo.png';

// import {useState} from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn, error, isPending } = useLogin();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email,password);
  }
  

  return(
    <div id='container'>
      <div id='container-img'>

        <img src={myImage} alt='logo BQ' className='imgLogo'/>
      </div>
      <div id='container-form' className= {styles['']}>
        <form onSubmit={handleSubmit}>

          <label className = 'label-1' htmlFor="inputEmail">
            <span>E-mail:</span>
            
          </label>
          <br/>
          <input 
            className='input-1'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="inputEmail">
          </input>
          <br/>
          <label htmlFor="inputPassword" className='label-2'>
            <span>Contraseña:</span>
            
          </label>
          <br/>
          <input 
            className='input-2'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="inputPassword">
          </input>
          {error && <p>{error}</p>}
          <p></p>
          <br/>
          {!isPending && <button 
          className='btn'
          >Iniciar Sesion</button>}
          {isPending && <button className='btn' disabled>Cargando</button>}

        </form>
      </div>
      
    </div>
  )
}
