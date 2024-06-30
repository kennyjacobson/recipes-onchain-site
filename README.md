
# Recipes Onchain

[Recipes Onchain](https://recipesonchain.xyz/) is an NFT+ project that stores recipes on the blockchain. The project extends the ERC1155 standard to include recipe data in the metadata. 

The project also includes a frontend that allows users to view and submit recipes. But because the recipes are stored on the blockchain, anyone can build their own frontend to interact with the recipes.

## Why?
- I just got sick of that horrible recipe sites that are full of ads and popups and unwanted videos and SEO optimized content. I just want to see the recipe and the ingredients and the steps. That's it.

- Recipes have always been and also automatically in the public domain. It just makes sense to have them on the blockchain where they can exist forever and be accessed by anyone.

- Like others, I want to eat more healthy and anything that can help with meal planning and nutrition is a good thing.

- Dieticians and trainers may want to create their own frontend to display the recipes in a way that is more useful to them and their clients.

## Extending the ERC1155 metadata standard

In addition to the standard ERC1155 metadata fields (name, description, image, external_url, attributes), the Recipes Onchain project includes a `recipe` field that contains the recipe data. 

 The `recipe` field includes the following fields:
- `servings`: The number of servings the recipe makes.
- `prep_time`: The time it takes to prepare the recipe.
- `cook_time`: The time it takes to cook the recipe.
- `total_time`: The total time it takes to make the recipe.
- `original_recipe_url`: The URL of the original recipe.
- `ingredients`: An array of ingredients that includes the amount, unit type, and ingredient.
- `instructions`: An array of instructions.
- `nutrition_facts`: The nutrition facts of the recipe.
- `notes`: An array of notes.

Here is a sample metadata json for a recipe:

```json
{
    "name": "Crispy Air Fryer Tofu",
    "description": "This crispy air fryer tofu is a delicious and easy way to prepare tofu. It's perfect for adding to salads, stir-fries, or eating on its own as a snack.",
    "image": "https://nfts-dataw.s3.amazonaws.com/recipes-onchain/images/1.png",
    "external_url": "https://recipesonchain.xyz/pages/recipe/view/1",
    "attritbutes": [{"trait_type": "Diet","value": "Vegan"},
        {"trait_type": "Cuisine","value": "Asian"},
        {"trait_type": "Cooking Method","value": "Air Fryer"},
        {"trait_type": "Total Time","value": 40},
        {"trait_type": "Servings","value": 4},
        {"trait_type": "Calories","value": 110}
    ],
    "recipe": {
        "servings": 4,
        "prep_time": "30 minutes",
        "cook_time": "10 minutes",
        "total_time": "40 minutes",
        "original_recipe_url": "https://jessicainthekitchen.com/how-to-make-crispy-air-fryer-tofu/",
        "ingredients": [
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "1 lb block of extra firm tofu, pressed for 30 minutes then cut into 1” cubes, (16 oz.)"
            },
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "1 teaspoon garlic powder"
            },
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "½ teaspoon onion powder"
            },
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "1 teaspoon paprika"
            },
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "½ teaspoon sea salt"
            },
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "2 teaspoons cornstarch"
            },
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "½ tablespoon light soy sauce, or liquid aminos"
            },
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "½ teaspoon sesame oil or any oil"
            },
            {
                "amount": 0,
                "unit_type": "none",
                "ingredient": "¼ teaspoon ground black pepper"
            }
        ],
        "instructions": [
            "In a medium size bowl place the pressed and cubed tofu. Add in liquid aminos and toss to coat.",
            "Add in all of the other seasoning ingredients including the oil and toss to thoroughly combine.",
            "Place in your air fryer in a single row, so that all the tofu has a little bit of space around each piece.",
            "Set your air fryer to 400°F. Cook for 10 minutes, shaking the basket after 5 minutes, then continuing to cook.",
            "Remove after tofu is cooked. Allow to cool for a few minutes then serve. Enjoy!"
        ],
        "nutrition_facts": {
            "calories": "110 kcal",
            "carbohydrates": "5g",
            "protein": "11g",
            "fat": "6g",
            "saturated_fat": "1g",
            "sodium": "416mg",
            "potassium": "20mg",
            "fiber": "1g",
            "sugar": "1g",
            "vitamin_a": "246IU",
            "calcium": "142mg",
            "iron": "1mg"
        },
        "notes": [
            "Make sure you’re not buying silken tofu! That will yield the wrong texture and will break apart if you try and press it.",
            "If you have a smaller air fryer, you’re going to want to split this into two batches because you definitely don’t want your tofu to be crowded. Give them enough space. In my smaller air fryer, I need two batches.",
            "I’m sure all air fryers are different, so be sure to see if your tofu may need an extra 5 minutes. Mine was perfect after 10 minutes!"
        ]
    }
}
```





