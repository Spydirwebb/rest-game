import Layout from "@/components/Layout";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";



const Character = () => {
    const character = {
        id: 1,
        name : "John",
        level : 1,
        nextLevelExp : 100,
        currentExp : 0,
        maxHealth : 10,
        currentHealth : 10,
        maxMana : 10,
        currentMana : 10, 
        attack : 10,
        defense : 0,
    }
    
    return (
        <Layout>
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

export default Character