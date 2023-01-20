import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {name: 'Linda', id:'1'},
        {name: 'Frank', id:'2'},
        {name: 'Jacky', id:'3'},
        {name: 'Andrei', id:'4'},
      ]
      
    };
  }

  render() {
    return <div className="App">
        { 
          this.state.monsters.map((monster) => { 
          /* What is map()
          
          Google states that map() relies on immutability. Big advantage of map(), is that it creates new array. 
          
          Example:

          const myArray = [1,2,3,4]
          myArray.map(el => el + 1)  The array 'el' will be [2,3,4,5] but 'myArray' will still be [1,2,3,4]
          */
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>;
        })}
      </div>
  }
}

export default App;
