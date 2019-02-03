import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() { 
    let arr = ["Madina", "Baghdad", "Marehra", "Bareli"]
    return (
      <div>
        <h2>My First React Try!!</h2>
        <ul>
          <li>{arr[2]}</li>

          {arr.map(function(value, index){
            return <li key={index}>{index}) {value}</li>
          })}
          </ul>        
      </div>
    );
  }
}

export default App;