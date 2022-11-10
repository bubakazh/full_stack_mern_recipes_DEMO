const RecipeController = require("../controllers/recipe.controller")

module.exports = app => {
    // create
    app.post("/api/recipes", RecipeController.createRecipe)

    // read all
    app.get("/api/recipes", RecipeController.allRecipes)

    // read one
    app.get("/api/recipes/:recipe_id", RecipeController.oneRecipe)

    // update
    app.put("/api/recipes/:recipe_id", RecipeController.updateRecipe)

    // delete
    app.delete("/api/recipes/:recipe_id", RecipeController.deleteRecipe)

    // app.get("/api/test")
}