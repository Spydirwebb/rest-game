import CharacterDetails from '../characterDetails';
import { characters as StaticCharacters} from '../../character.ts';
import { Link } from 'react-router-dom';

const CharacterList = ({characters, activeCharacter}) => {
    //map through list of characters and create list
    
    const setActiveCharacter = (e)=>{
      activeCharacter = e.target.value
    }

     const listCharacters = () => {
      return characters.map(character => {
          return (
            <div>
              <li key={character.id} onClick={setActiveCharacter}><Link to='/character/:id'>{character.name}</Link></li>
            </div>
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