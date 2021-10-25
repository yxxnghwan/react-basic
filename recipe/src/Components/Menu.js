// recipe-app/src/Components/Menu.js
import React from 'react';
import Recipe from './Recipe';
import '.././stylesheets/Menu.css';

const Menu = (props) => {
    return (
            <article>
                <header>
                    <h1>맛있는 조리법</h1>
                </header>
                <div className="recipes">
                    { 
                      props.recipes.map((recipe, index) =>
                        <Recipe {...recipe}
                                key={index}
                        />)
                    }
                </div>
            </article>
    )
};

export default Menu