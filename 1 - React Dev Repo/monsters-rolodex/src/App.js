import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      /* Today we are going to learn first about SPA or (S)ingle (P)age (A)pplications */
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => { 
        return { monsters: users }
      },
      () => {
        console.log(this.state);
      }
      ));
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
