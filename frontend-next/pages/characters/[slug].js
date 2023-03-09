import Layout from "@/components/Layout";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from 'axios'
import Link from 'next/link'


const Character = ({character}) => {
    
    return (
        <Layout>
            <Link href="/characters">Back to characters</Link>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography variant='h3'>{character.name}</Typography>
                    <h3>This is the character sprite</h3>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className="card">
                        <Box>
                            <CardContent>
                                <Typography variant="subtitle1">Health: {character.currentHealth}/<span className="character-maxValue">{character.maxHealth}</span></Typography>
                                <Typography variant="subtitle1">Mana: {character.currentMana}/<span className="character-maxValue">{character.maxMana}</span></Typography>
                                <Typography variant="subtitle1">Attack: {character.attack}</Typography>
                                <Typography variant="subtitle1">Defense: {character.defense}</Typography>
                                <Typography variant="subtitle1">Exp: {character.currentExp}/<span className="character-maxValue">{character.nextLevelExp}</span></Typography>

                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export async function getServerSideProps({query: {slug}}) {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/characters/${slug}`)
  
    console.log(data)
    return {
      props: {
        character: data
      }
    }
  }

export default Character