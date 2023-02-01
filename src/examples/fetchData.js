import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        person {
          age
          name
        }
        complexData {
          name
          age
        }
        simpleData
        title
      }
    }
  }
`;

const FetchData = () => {
  const data = useStaticQuery(getData);
  return (
    <div>
      <h2>Author : {data.site.info.author}</h2>
    </div>
  );
};

export default FetchData;
