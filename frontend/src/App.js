import {useEffect, useState} from 'react'
import axios from 'axios'

import './App.css';

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(()=> {
    getCharacters()
  })

  const getCharacters = async() => {
    await axios
    .get('https://8000-spydirwebb-restgame-9ccxoscwimp.ws-us67.gitpod.io/characters/')
    //.then(res => console.log(res))
    //.then(res => console.log(res.data))
    .then(res => setCharacters(res.data))
  }

  const listCharacters = () => {
    return characters.map(character => {
        return <li key={character.id}>{character.name}</li>
      })
    }

  return (
    <div className="App">
      <h1>Character List</h1>
      <ul>{listCharacters()}</ul>
    </div>
  );
}

export default App;
