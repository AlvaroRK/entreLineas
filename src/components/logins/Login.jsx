import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import './login.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const { login } = useAuth();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username.trim() !== "") {
        login(username);
      }
    };
  
    return (
      <div className='loginContainer'>
        <h2 className='loginTitle'>Iniciar Sesión</h2>
        <form className='loginForm' onSubmit={handleSubmit}>
          <input
            className='loginInput'
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className='loginButton' type="submit">Ingresar</button>
        </form>
      </div>
    );
}

export default Login