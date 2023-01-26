// import { Component } from 'react'; Functional component dont need this

import { useState, useEffect } from 'react'; // This is a hook

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// THIS IS THE APP FUNCTIONAL COMPONENT
// Functional component runs like a normal JS
// No lifecyle
// We use hooks that creates impure functions
// impure functions produce side effects

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  // const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => { 
      return monster.name.toLocaleLowerCase().includes(searchField); 
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // const onTitleChange = (event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   setTitle(searchFieldString);
  // };

  return(
    <div className='App'>
      <h1 className='app-title'> Monsters Rolodex {/*{title} */}</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters' 
      />
      <br />
      {/* <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='set title' 
      /> */}

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// THIS IS THE APP CLASS

// // When creating an app, focus on functionality first then style.

// // Component governs a piece of UI
// class App extends Component {
//   // Constructor runs first
//   constructor() {
//     super();

//     this.state = {
//       /* Today we are going to learn first about SPA or (S)ingle (P)age (A)pplications */
//       monsters: [],
//       searchField: ''
//     };
//     // console.log('constructor');
//   }

//   // componentDidMount runs third
//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(() => { 
//           return { monsters: users };
//         })
//       );
//   }

//   // This will only initialize once
//   // This makes app a bit faster 
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   // Render runs second then re-renders in fourth place
//   render() {
//     // console.log('render from AppJS');

//     // Destructuring Es6. this makes code readable
//     const { monsters, searchField} = this.state;
//     const { onSearchChange } = this;

//     // Always filter from the full list. go to state 'searchField'
//     const filteredMonsters = monsters.filter((monster) => { 
//       return monster.name.toLocaleLowerCase().includes(searchField); 
//     });


//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>

//       <SearchBox
//         className='monsters-search-box'
//         onChangeHandler={onSearchChange}
//         placeholder='search monsters' 
//       />

//         {/* { filteredMonsters.map((monster) => { 
//           >> What is map()
          
//           >> Google states that map() relies on immutability. Big advantage of map(), is that it creates new array. 
          
//           >> Example:

//           >> const myArray = [1,2,3,4]
//           >> myArray.map(el => el + 1)  The array 'el' will be [2,3,4,5] but 'myArray' will still be [1,2,3,4]

//             return (<div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>);
//         })} */}
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
