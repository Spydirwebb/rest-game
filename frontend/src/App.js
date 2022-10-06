import {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'

import './App.css';
import CharacterDetails from './components/characterDetails';
import PageWrapper from './components/pagewrapper';
import Home from './components/Pages/home'
import CharacterList from './components/Pages/characterList'
import StaticCharacters from './characterData';

function App() {
  const [characters, setCharacters] = useState([])
  const [seeDetails, setSeeDetails] = useState(false)
  let activeCharacter;

  const toggleDetails = () => {
    if(seeDetails){
      setSeeDetails(false)
    } else {
      setSeeDetails(true)
    }
  }

  ///get characters from From API
  /*
  useEffect(()=> {
    getCharacters()
  },[])

  const getCharacters = async() => {
    await axios
    .get('https://8000-spydirwebb-restgame-9ccxoscwimp.ws-us67.gitpod.io/characters/')
    //.then(res => console.log(res))
    //.then(res => console.log(res.data))
    .then(res => setCharacters(res.data))
  }
  */

  ////From File
  useEffect(() => {
    setCharacters(StaticCharacters)
  },[])
   

  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path='/' element={<Home />} exact={true}/>
          <Route path='/characters' element={<CharacterList characters={characters} activeCharacter={activeCharacter}/>} />
          <Route path='/characters/:characterId' element={<CharacterDetails />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
