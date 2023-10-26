const express = require("express");

const router = express.Router();

const recipecontroller = require("../controller/recipeController");

// Get Routes

router.get("/", recipecontroller.homepage);

router.get("/categories", recipecontroller.explore_categories);

router.get("/categories/:id", recipecontroller.explore_categoriesById);

router.get("/recipe/:id", recipecontroller.explore_recipe);

router.get("/explore", recipecontroller.exploreLatest);

router.get("/random", recipecontroller.randomRecipe);

router.get("/submit-recipe", recipecontroller.submitRecipe);



// Post routes

router.post("/search", recipecontroller.searchRecipe);

router.post("/submit-recipe", recipecontroller.submitRecipeonPost);

module.exports = router;
