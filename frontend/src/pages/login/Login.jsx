import { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
    } else {
      // Lógica de login aqui
      console.log('Login realizado com sucesso!');
      setError('');
    }
  };

  return (
    <div className="login-container">
    <img src="./public/assets/logo.png" alt="" />
      <h1>Login</h1>

      <div>
        <label htmlFor="username">Usuário:</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

      <div>
        <label htmlFor="password">Senha:</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;