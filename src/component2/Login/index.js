// import {Component} from 'react'
// class Login extends Component {
//   state = {password: '', username: ''}
//   onPassword = e => {
//     this.setState({password: e.target.value})
//   }
//   onUsername = e => {
//     this.setState({username: e.target.value})
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <img />
//           <from onSubmit={this.onsubmitted} calssName="form">
//             <label htmlFor="username">USERNAME</label>
//             <input id="username" type="text" />
//             <label htmlFor="password">PASSWORD</label>
//             <input id="password" type="text" />
//             <button type="submit" onClick={this.onsubmitted}>
//               Login
//             </button>
//             <input type="checkbox" />
//             <label />
//           </from>
//         </div>
//       </div>
//     )
//   }
// }
// export default Login


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    // Simulate API call
    if (username === 'user' && password === 'password') {
      // Simulating JWT token storing
      localStorage.setItem('authToken', 'fake-jwt-token');
      history.push('/home');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        Show Password
      </label>
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
