import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {name: 'Linda'},
        {name: 'Frank'},
        {name: 'Jacky'},
        {name: 'Andrei'}
      ]
      
    };
  }

  render() {
    return <div className="App">
        { 
          this.state.monsters.map((monster) => { // What is the difference of map with forEach?
          // Google states that map(), unlike forEach(), relies on immutability. That means that I can only use map() on unchangeable data in the array.
            return <h1>{monster.name}</h1>;
        })}
      </div>
  }
}

export default App;
