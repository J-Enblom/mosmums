import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Syftet med denna hemsida</h2>
            <p>
              Som visualiserat i denna bild är "the chef" en man som är glad i
              sin bekanta miljö. Trotts detta tycker han om att utforska och
              skapade därmed denna hemsida.
            </p>
            <p>
              Syftet med hemsidan är att kombinera min hobby för programmering
              med min mer nyfunna hobby för matlagning. Därför är detta den
              första hemsida jag skapat på min fritid och siktar på att
              vidareutveckla för att kunna lära mig på egen hand. Samtidigt
              funkar hemsidan som ett sätt för mig i min resa mot att bli en
              bättre matlagare att logga mina gjorda recept som minnen samt
              förhoppningsvis kunna se min progression. Det är alltså inte mitt
              mål att ta professionella bilder eller lära andra laga mat utan
              min egna resa som du såklart är välkommen att ta del av.
            </p>
          </article>
          <StaticImage
            src="../assets/images/test.jpeg"
            alt="The chef"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Titta in mina favoriter</h5>
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

export default About;
