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
            <h3>Kontakta mig</h3>
            <p>
              Har du ett recept du rekommenderar mig att testa? Eller är det
              något recept som saknar ingrediens? Hör gärna av dig! Det kan vara
              allt från recept till tankar kring hemsidan till ett enkelt hej.
            </p>
            <p>
              Min tanke kring denna del sida är inte att jag har en förväntning
              om att aktivt få meddelanden inskickade. Eftersom jag utvecklade
              denna hemsida i ett lärande syfte handlade det mer om kunskapen
              kring hur man skapar den funktionaliteten framför hur relevant det
              faktiskt är för just denna sida. Därför väljer jag att ha kvar
              denna sida som resultat av min lärdom och som potentiellt redskap
              för vidare lärning.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mrgveaqw"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">ditt namn</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">din email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">meddelande</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                skicka
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>ta en titt!</h5>
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
