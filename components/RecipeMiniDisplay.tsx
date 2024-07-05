import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { RecipeData } from '../types/recipeTypes';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const TITLE_MAX_LENGTH = 38;
const DESCRIPTION_MAX_LENGTH = 120;

const LoadingSkeleton = () => {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2}>
                    <Skeleton variant="rectangular"  height={200} />
                    <Skeleton variant="text" height={60} />
                    <Skeleton variant="text" height={60} />
                
                </Stack>
                <Button sx={{ mt: 2 }} variant="contained" disabled>
                    View Recipe
                </Button>
            </CardContent>
        </Card>
    );
}


export default function RecipeMiniDisplay({ id }: { id: string }) {
    const [recipe, setRecipe] = useState<RecipeData | null>(null);

    useEffect(() => {
        console.log("inside useeffect id", id);
        if (id) {
            fetch(`/api/recipe/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("made it here", data.name);
                    setRecipe(data)
                });
        }
    }, []);

    if (!recipe) return <LoadingSkeleton />;

    return (
        <Card>
            <CardMedia
                sx={{ height: 200 }}
                component="img"

                image={recipe.image}
                alt={recipe.name}
            />
            <CardContent>
                <Typography sx={{ height: 70 }} variant="h6" component="h2">

                    {recipe.name.length > TITLE_MAX_LENGTH ? `${recipe.name.substring(0, TITLE_MAX_LENGTH)}...` : recipe.name}
                </Typography>
                <Typography sx={{ height: 80 }} variant="body2" color="text.secondary">
                    {recipe.description.length > DESCRIPTION_MAX_LENGTH ? `${recipe.description.substring(0, DESCRIPTION_MAX_LENGTH)}...` : recipe.description}
                </Typography>
                <Button sx={{ mt: 2 }} variant="contained" href={`/pages/recipe/view/${id}`}>
                    View Recipe
                </Button>
            </CardContent>
        </Card>
    );
}
