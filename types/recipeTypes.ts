// types/recipeTypes.ts

export interface RecipeData {
    name: string;
    description: string;
    image: string;
    external_url: string;
    attributes: Attribute[];
    recipe: {
      servings?: number;
      prep_time?: string;
      cook_time?: string;
      total_time?: string;
      original_recipe_url?: string;
      ingredients: Ingredient[];
      instructions: string[];
      nutrition_facts: NutritionFacts;
      notes?: string[];
    };
  }
  
  export interface Attribute {
    trait_type: string;
    value: string;
  }
  
  export interface Ingredient {
    amount: number;
    unit_type: string;
    ingredient: string;
  }

  export interface NutritionFacts {
    calories: string;
    carbohydrates: string;
    protein: string;
    fat: string;
    saturated_fat?: string;
    sodium?: string;
    potassium?: string;
    fiber?: string;
    sugar?: string;
    vitamin_a?: string;
    calcium?: string;
    iron?: string;
  }
