import React from "react"
import { useParams } from "react-router"
import styled from 'styled-components'
import characters from '../characterData'

const CharacterDetails = ({character}) => {
    let {characterId} = useParams()
    const thisCharacter = characters.find(char => char.id === +characterId)

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
    
`

export default CharacterDetails