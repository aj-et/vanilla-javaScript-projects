import { Component } from 'react';

import './App.css';

// When creating an app, focus on functionality first then style.

class App extends Component {
  // Constructor runs first
  constructor() {
    super();

    this.state = {
      /* Today we are going to learn first about SPA or (S)ingle (P)age (A)pplications */
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  }

  // componentDidMount runs third
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => { 
        return { monsters: users };
      },
      () => {
        // console.log(this.state);
      }
      ));
  }

  // Render runs second then re-renders in fourth place
  render() {
    console.log('render');

    // Always filter from the full list. go to state 'searchField'
    const filteredMonsters = this.state.monsters.filter((monster) => { return monster.name.toLocaleLowerCase().includes(this.state.searchField); 
    });


    return (
      <div className='App'>
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event) => {
            // console.log({startingArray: this.state.monsters});
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            }
            // , () => {console.log({endingArray: this.state.monsters});}
            );
          }} />

        { filteredMonsters.map((monster) => { 
          /* What is map()
          
          Google states that map() relies on immutability. Big advantage of map(), is that it creates new array. 
          
          Example:

          const myArray = [1,2,3,4]
          myArray.map(el => el + 1)  The array 'el' will be [2,3,4,5] but 'myArray' will still be [1,2,3,4]
          */
            return (<div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>);
        })}
      </div>
    );
  }
}

export default App;
