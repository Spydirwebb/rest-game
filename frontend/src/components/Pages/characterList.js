import { Link } from 'react-router-dom';

const CharacterList = ({characters}) => {
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