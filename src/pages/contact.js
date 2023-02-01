import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Contact me</h3>
            <p>
              Hot chicken flannel man braid migas subway tile JOMO pinterest
              labore blog pug in enamel pin yuccie. Culpa banh mi put a bird on
              it, pour-over est ascot flannel bodega boys man bun cred tonx jean
              shorts migas franzen asymmetrical.
            </p>
            <p>
              Tattooed venmo tilde, knausgaard sus hammock umami JOMO iPhone
              narwhal tonx unicorn. Hell of forage retro palo santo banjo vegan
              +1.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mrgveaqw"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default Contact;
