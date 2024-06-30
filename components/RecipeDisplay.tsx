// a componet that takes in a recipe and displays it
// the recipe structure is defined in types/recipeTypes.ts

import { Container, Typography, Avatar, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { RecipeData } from '../types/recipeTypes';

export default function RecipeDisplay({ recipe }: { recipe: RecipeData | null }) {
    console.log("recipe", recipe);


    if (!recipe) return <p>Loading...</p>;

    return (
        <Container>
            {/* <img style={{height:}} src={recipe.image} alt={recipe.name} /> */}
            <Avatar sx={{height:100, width:100}}  src={recipe.image} alt={recipe.name} />
            <Typography variant="h4" component="h1" gutterBottom>
                {recipe.name}
            </Typography>
            <Typography variant='body1' gutterBottom>
                <a href={recipe.recipe.original_recipe_url} target="_blank" rel="noreferrer">Original Recipe Link ({recipe.recipe.original_recipe_url})</a>
            </Typography>
            
            <Typography variant="body2" gutterBottom>
                yeild: {recipe.recipe.servings} servings
            </Typography>
            <Typography variant="body2" gutterBottom>
                prep time: {recipe.recipe.prep_time}
            </Typography>
            <Typography variant="body2" gutterBottom>
                cook time: {recipe.recipe.cook_time}
            </Typography>
            <Typography variant="body2" gutterBottom>
                total time: {recipe.recipe.total_time}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {recipe.description}
            </Typography>
            {/* Display other recipe details here */}
            <Divider sx={{mt:2, border: 1}} />
            <Typography sx={{mt:2}} variant="h6" gutterBottom>
                Ingredients
            </Typography>
            <ul>
                {recipe.recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.ingredient}
                    </li>
                ))}
            </ul>
            <Typography sx={{mt:2}} variant="h6" gutterBottom>
                Instructions
            </Typography>
            <ol>
                {recipe.recipe.instructions.map((instruction, index) => (
                    <li key={index}>
                        {instruction}
                    </li>
                ))} 
            </ol>
            <Divider sx={{mt:2, border: 1}} />

            <Typography sx={{mt:2}} variant="h6" gutterBottom>
                Nutrition Facts
            </Typography>
            <ul>
                <li>Calories: {recipe.recipe.nutrition_facts?.calories}</li>
                <li>Carbohydrates: {recipe.recipe.nutrition_facts?.carbohydrates}</li>
                <li>Protein: {recipe.recipe.nutrition_facts?.protein}</li>
                <li>Fat: {recipe.recipe.nutrition_facts?.fat}</li>
                <li>Saturated Fat: {recipe.recipe.nutrition_facts?.saturated_fat}</li>
                <li>Sodium: {recipe.recipe.nutrition_facts?.sodium}</li>
                <li>Potassium: {recipe.recipe.nutrition_facts?.potassium}</li>
                <li>Fiber: {recipe.recipe.nutrition_facts?.fiber}</li>
                <li>Sugar: {recipe.recipe.nutrition_facts?.sugar}</li>
                <li>Vitamin A: {recipe.recipe.nutrition_facts?.vitamin_a}</li>
                <li>Calcium: {recipe.recipe.nutrition_facts?.calcium}</li>
                <li>Iron: {recipe.recipe.nutrition_facts?.iron}</li>
            </ul>
        </Container>
    );
}