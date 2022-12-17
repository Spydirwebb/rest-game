import {useState, useEffect} from "react"
import { useParams } from "react-router"
import styled from 'styled-components'
import axios from 'axios'

const CharacterDetails = () => {
    let {characterId} = useParams()
    const [thisCharacter, setThisCharacter] = useState({})


    useEffect(()=> {
        getCharacter()
      },[])
    
      const getCharacter = async() => {
        await axios
        .get(`${process.env.REACT_APP_DB_CHARACTERS}${characterId}`)
        .then(res => setThisCharacter(res.data))
      }

    return (
        <StyledCharacterDetails>
            <section className="character-identifiers">
                <h3 className="character-name">Name: {thisCharacter.name}<span className="character-level">Lvl: {thisCharacter.level}</span></h3>
            </section>
            <section className="character-details">
                <h2 className="character-health">Health: {thisCharacter.currentHealth}/<span className="character-maxValue">{thisCharacter.maxHealth}</span></h2>
                <h2 className="character-mana">Mana: {thisCharacter.currentMana}/<span className="character-maxValue">{thisCharacter.maxMana}</span></h2>
                <h2 className="character-attack">Attack: {thisCharacter.attack}</h2>
                <h2 className="character-defense">Defense: {thisCharacter.defense}</h2>
                <h2 className="character-exp">Experience: {thisCharacter.currentExp}/<span className="character-maxValue">{thisCharacter.nextLevelExp}</span></h2>
            </section>
            <p className="delete">DELETE THIS CHARACTER</p>
        </StyledCharacterDetails>
    )
}

const StyledCharacterDetails = styled.div`
.character-identifiers {
    width: 50%;
    border: solid 1px red;
    .character-name {
        border: solid 1px blue;
        position: absolute;
        float: bottom;
    }
    .character-level {
        margin-left: 1rem;
    }
}
.character-details {
    width: 50%;
    margin-left: 50%;
}

.delete {
    font-size: .7rem;
    color: red;
    font-weight: bold;
    border: 3px solid red;
    width: fit-content;
}
    
`

export default CharacterDetails