import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  
  useEffect(()=> {
    getCharacters()
  },[])

  const getCharacters = async() => {
    await axios
    .get('https://8000-spydirwebb-restgame-9ccxoscwimp.ws-us70.gitpod.io/characters')
    //.then(res => console.log(res))
    //.then(res => console.log(res.data))
    .then(res => setCharacters(res.data))
  }

  //map through list of characters and create list
    
     const listCharacters = () => {
      return characters.map(character => {
          return (
              <li key={character.id} ><Link to={`/characters/${character.id}`}>{character.name}</Link></li>
          )
        })
      }
   
    
    return(
        <div>
            <h1>Character List</h1>
            <ul>{listCharacters()}</ul>
        </div>
    )
}

export default CharacterList