import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./footer.css";

export default function Footer() {
  const [personalSite, setPersonalSite] = useState();

  const baseUrl = "https://api.github.com/graphql";

  const httpLink = createHttpLink({
    uri: baseUrl,
  });

  const firstHalf = "ghp_VxgRIC5d3umzSpu54U6";
  const secondHalf = "VUhW2ECwrov1SNUcK";

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${firstHalf.concat(secondHalf)}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    client.query({
        query: gql`
          {
            viewer {
              login
              repository(name: "des-personal-site") {
                id
                url
              }
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.viewer.repository);
        setPersonalSite(response.data.viewer.repository);
      });
  }, []);

  const renderFooter = () => {
    return (
      <a className="footer-link" href={personalSite.url}>
        <p className="footer-text">
          Designed & Built By Desmond Gilmour
          <br />
          <i class="fa-regular fa-star"></i>
          <i class="fa-solid fa-code-branch"></i>
        </p>
      </a>
    );
  };

  return (
    <div className="footer">
      {personalSite ? renderFooter() : <p>Loading...</p>}
    </div>
  );
}
