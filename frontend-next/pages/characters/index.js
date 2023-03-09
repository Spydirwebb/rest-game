import Layout from "@/components/Layout"
import { Typography, Link } from "@mui/material"
import axios from 'axios'
import { useRouter } from "next/router"

const CharactersList = ({characters}) => {
    const router = useRouter()

    const handleCharacterClick = character => {
        router.push(`/characters/${character.id}`)
    }
    return(
        <div>
            <Layout>
                <div className="list">
                    <ul>
                {characters.map(character=> (
                    <li key={character.id}><Typography variant='subtitle1' onClick={()=>handleCharacterClick(character)}>{character.name}</Typography></li>
                ))}
                </ul>
                </div>
            </Layout>
        </div>
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

export default CharactersList