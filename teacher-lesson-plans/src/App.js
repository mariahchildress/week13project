import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const adminUser = {
    email: 'mariahchildress@gmail.com',
    password: 'lessonplans'
  }

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log('Logged In');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Details do not match.');
      setError('Details do not match.');
    }
  }

  const Logout = () => {
    setUser({name: '', email: ''});
  }
  
  return (
    <div className="App">
      {(user.email != '') ? (
        <div className="welcome">
          <h3>Welcome, <span>{user.name}</span></h3>
          <button onClick="Logout">Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
      <Navbar />
    </div>
  );
}

export default App;
