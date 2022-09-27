import {useEffect, useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'

import './App.css';
import CharacterDetails from './components/characterDetails';

function App() {
  const [characters, setCharacters] = useState([])
  const [seeDetails, setSeeDetails] = useState(false)

  useEffect(()=> {
    getCharacters()
  })

  const toggleDetails = () => {
    if(seeDetails){
      setSeeDetails(false)
    } else {
      setSeeDetails(true)
    }
  }

  const getCharacters = async() => {
    await axios
    .get('https://8000-spydirwebb-restgame-9ccxoscwimp.ws-us67.gitpod.io/characters/')
    //.then(res => console.log(res))
    //.then(res => console.log(res.data))
    .then(res => setCharacters(res.data))
  }

  const listCharacters = () => {
    return characters.map(character => {
        return (
          <div>
            <li key={character.id}>{character.name}<span className='dropdown'><button onClick={() => {toggleDetails()} }>v</button></span></li>
            {seeDetails ? <CharacterDetails character={character} /> : "" }
          </div>
        )
      })
    }

  return (
    <div>
      <h1>Character List</h1>
      <ul>{listCharacters()}</ul>
    </div>
  );
}

export default App;
