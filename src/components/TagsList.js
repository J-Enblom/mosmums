import React from "react";
import setupTags from "../utils/setupTags";
import { Link } from "gatsby";
import slugify from "slugify";

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes);
  return (
    <div className="tag-container">
      <h4>Kategorier</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          const tagSlug = slugify(text, { lower: true });
          return (
            <Link to={`/tags/${tagSlug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
