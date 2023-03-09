import Layout from "@/components/Layout"
import { Button, FormControl, InputLabel, TextField, Typography } from "@mui/material"
import { styled } from "@mui/system"
import axios from "axios"
import { useState } from "react"
import Link from 'next/link'

const CreateCharacter = () => {
    const [name, setName] = useState('')
    const [classType, setClassType] = useState('')
    const [creationSuccess, setCreationSuccess] = useState(false)

    let character = {
        'name': name
    }

    const submitHandler = async() =>{
        console.log(name)

        const body = {
            name
        }

        const res = await axios.post(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/characters/`,body)

        console.log(res)
        setCreationSuccess(true)
    }

    const reloadHandler = () => {
        setCreationSuccess(false)
        setName('')
    }
    
    return(
        <Layout>
            <CreateCharacterStyled>
            <h1 className="title">Create a Character:</h1>
            {creationSuccess?
                <div>
                <h3><Link href={`/characters/${character.id}`}>{name}</Link> Created!</h3>
                <Typography variant='body' onClick={()=>reloadHandler()}>Create Another Character</Typography>
                <h3><Link href='/characters'>See all of the characters!</Link></h3>
            </div>
            :
            <div className="form">
                <FormControl fullWidth className="input" >
                    <TextField
                        required
                        label='Name'
                        id='name'
                        onChange={e => setName(e.target.value)}
                        value={name} />
                </FormControl>
                <FormControl fullWidth className="input">
                    <TextField
                        label='Class'
                        id='classType'
                        onChange={e => setClassType(e.target.value)}
                        value={classType} />
                </FormControl>
                <Button variant='contained' color='primary' onClick={()=>submitHandler()}>Create</Button>
            </div>
            }
        </CreateCharacterStyled>    
        </Layout>
        
    )
}

const CreateCharacterStyled = styled('CreateCharacter')({
    ".input":{
        margin: '1rem 0'
    }
})

export default CreateCharacter