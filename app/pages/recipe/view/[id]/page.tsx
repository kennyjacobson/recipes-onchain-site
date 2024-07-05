"use client"; // This file is a client-side file
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { RecipeData } from '../../../../../types/recipeTypes';
import RecipeDisplay from '@/components/RecipeDisplay';





export default function Recipe({ params: { id }, }: { params: { id: string }; }) {
    console.log("id", id);

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


  
    return (
        <Box sx={{mt:2, mb:2}}>
            <RecipeDisplay recipe={recipe} />
        </Box>
    );
}