import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonPanel from './components/ButtonPanel';
import DataDisplay from './components/DataDisplay';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    } 
  }

  componentDidMount() {
    axios('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState({ players: res.data })
      })
      .catch(err => console.error('You have an error', err))      
  }

  render() {
    return(
      <div className="App">
        <Navbar />
        {this.state.players.map( player => {
          return (
            <div className="players" key={player.id}>
              <h3>{player.name}</h3>
              <p>Country: {player.country}</p>
              <p>Searches: {player.searches}</p>
            </div>
          )
        })}
      </div>
    )
  }
}


export default App;
