import { useState } from "react"
import { Link } from 'react-router-dom';
import styled from "styled-components"
import axios from "axios";


const CreateACharacter = () => {
    const [name, setName] = useState('')
    const [creationSuccess, setCreationSuccess] = useState(false)
    
    let character = {
        'name': name
    }
    
    const postCharacter = async(name) => {
        await axios
        .post(process.env.REACT_APP_DB_CHARACTERS,
            {'name': name }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        character.name = name
        postCharacter(name)
        setCreationSuccess(true)
    }
    const handleChange = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    
    const handleReload=() => {
        setCreationSuccess(false)
        setName("")
    }
    return (
        <StyledCreateACharacter>
            <h1>Create a Character:</h1>
            {creationSuccess ? 
                <div>
                    <h3><Link to={`/characters/${character.id}`}>{name}</Link> Created!</h3>
                    <a onClick={handleReload}>Create Another Character</a>
                    <h3><Link to='/characters'>See all of the characters!</Link></h3>
                </div>
                : 
                <form onSubmit={handleSubmit}>
                    <label>
                        Name: <input type='text' value={name} onChange={handleChange}/>
                    </label>
                    <input type='submit' />
                </form>
            }
        </StyledCreateACharacter>
    )
}

const StyledCreateACharacter = styled.div`

`

export default CreateACharacter