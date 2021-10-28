import logo from './logo.svg';
import './App.css';
import React from 'react'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar', 'Ir ao mercado', 'Lavar roupa']

class App extends React.Component {
 render() { 
   return (
    <ul>{tasks.map(task => Task(task))}</ul>
  );
 }
}

export default App;
