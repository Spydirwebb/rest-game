import React from "react"

const CharacterDetails = ({character}) => {
    return (
        <div>
            <p>Level: {character.level}</p>
        </div>
    )
}

export default CharacterDetails