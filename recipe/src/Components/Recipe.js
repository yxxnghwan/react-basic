// recipe-app/src/Components/Recipe.js
import React from "react"
import Instructions from "./Instructions"

const Recipe = ({name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredient, index) =>
                <li key={index}>{ingredient.name} {ingredient.amount} {ingredient.measurement}</li>
            )}
        </ul>

        <Instructions steps={steps}></Instructions>
  
    </section>


export default Recipe
