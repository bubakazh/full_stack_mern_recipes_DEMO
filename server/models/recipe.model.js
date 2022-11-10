const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name cannot be left blank."],
        minLength:[2, "Name must be at least 2 characters."]
    },
    dateMade:{
        type:Date,
        required:[true, "Please select a date for when this recipe was made."]
    },
    under30Minutes:{
        type:Boolean,
        // required:true
    }
}, {timestamps:true});

const Recipe = mongoose.model('Recipe', RecipeSchema)
module.exports = Recipe;