import styles from '../css/Login.scss';
import React,{useState} from 'react';
import auth from '../firebase/config';
import {useNavigate} from 'react-router-dom';
import myImage from '../images/Logo.png';

// import {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [error, setError] = useState('');

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
      .then(() => {
        navigate('/orders');
        console.log('Login exitoso')
      })
      .catch((err) => {
        setError(err.message)
      })
  }
  
  console.log('setError',setError)
  return(
    <div id='container'>
      <div id='container-img'>

        <img src={myImage} alt='logo BQ'/>
      </div>
      <div id='container-form' className= {styles['']}>
        <form onSubmit={loginUser}>

          <label className = 'label-1' htmlFor="inputEmail">
            <span>E-mail:</span>
            
          </label>
          <br/>
          <input 
            className='input-1'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
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
            id="inputPassword">
          </input>
          {error && <p>{error}</p>}
          <p></p>
          <br/>
          <button 
          className='btn'
          >Iniciar Sesion</button>

        </form>
      </div>
      
    </div>
  )
}

export default Login;