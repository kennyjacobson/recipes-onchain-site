import { NextResponse, NextRequest } from "next/server";

const testData = {
    "name": "Crispy Air Fryer Tofu",
    "description": "This crispy air fryer tofu is a delicious and easy way to prepare tofu. It's perfect for adding to salads, stir-fries, or eating on its own as a snack.",
    "image": "https://nfts-dataw.s3.amazonaws.com/recipes-onchain/images/1.png",
    "external_url": "https://www.recipesonchain.xyz/recipes/1",
    "attritbutes": [
        {
            "trait_type": "Diet",
            "value": "Vegan"
        },
        {
            "trait_type": "Cuisine",
            "value": "Asian"
        },
        {
            "trait_type": "Cooking Method",
            "value": "Air Fryer"
        }
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
};

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    console.log(params.id);

    //fetch data from external source
    const response = await fetch(`https://nfts-dataw.s3.amazonaws.com/recipes-onchain/metadata/${params.id}.json`);
    const data = await response.json();
    return NextResponse.json(data);
    // return NextResponse.json(response);
}