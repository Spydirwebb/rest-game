import Layout from "@/components/Layout"
import { Typography, Link } from "@mui/material"
import { styled } from "@mui/system"
import axios from 'axios'
import { useRouter } from "next/router"

const CharactersList = ({characters}) => {
    const router = useRouter()

    const handleCharacterClick = character => {
        router.push(`/characters/${character.id}`)
    }
    return(
        <Layout>
        <CharacterListStyled>
            <div className="list">
                <ul>
                    {characters.map(character=> (
                        <li key={character.id}><Typography variant='h5' onClick={()=>handleCharacterClick(character)} className='character'><span className="character-name">{character.name}</span> <span className="character-level">Lv.{character.level}</span></Typography></li>
                    ))}
                </ul>
            </div>
            <Link variant='subtitle1' href='/characters/new/'>+ Create a new character</Link>
        </CharacterListStyled>
        </Layout>
    )
}

export async function getServerSideProps() {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/characters`)
  
    console.log(data)
    return {
      props: {
        characters: data
      }
    }
  }

const CharacterListStyled = styled('CharacterList')({
    '.character':{
        color:'red',
        cursor: 'pointer',
        marginTop: ".5rem",
        minWidth: '2rem',
        
    },
    '.character-level':{
        fontSize: '60%'
    }
})

export default CharactersList