import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, image, prepTime, cookTime } = recipe;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime} min | Tillagning : {cookTime} min
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
