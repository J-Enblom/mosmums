import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import SEO from "../components/SEO";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);
  return (
    <Layout>
      <SEO title="Taggar" />
      <main className="page">
        <section classnamme="tags-list">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const tagSlug = slugify(text, { lower: true });
            return (
              <Link to={`/tags/${tagSlug}`} key={index} classname="tag">
                <h5>{text}</h5>
                <p>{value} recipes</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
