import React from 'react';
// import logo from './logo.svg';
import './App.css';
import users from './data/users'
import Container from './components/ComponentContainer/Container'
import Card from './components/Card/Card'
import UserContent from './components/User/UserContent'

function App() {
  return (
    <div className="App">
      <p>Teste</p>
      <Container items={users} itemElement={Card} innerElement={UserContent}></Container>
    </div>
  );
}

export default App;
