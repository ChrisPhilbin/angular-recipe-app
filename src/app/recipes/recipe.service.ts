import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model"

export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("First recipe", "This is a test", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505", [new Ingredient("bread", 1)]),
        new Recipe("Second recipe", "This is a test", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505", [new Ingredient("mustard", 1)])
      ];

      getRecipes() {
          return this.recipes.slice(); //return new array which is a copy of the array from within this service.
      }

      getRecipeById(id: number): Recipe {
        return this.recipes[id];
      }
    
};