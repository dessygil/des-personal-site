import React, { useEffect, useState, useMemo } from "react";
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

  const token = process.env.REACT_APP_GITHUB_TOKEN;
  
  const authLink = setContext((_, { headers }) => {
    if (!token) {
      console.error('GitHub token is missing');
      return headers;
    }
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const client = useMemo(() => new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  }), [authLink, httpLink]);

  useEffect(() => {
    if (!client) return;
    client.query({
        query: gql`
          {
            viewer {
              login
              repository(name: "des-personal-site") {
                id
                url
                stargazerCount
                updatedAt
              }
            }
          }
        `,
      })
      .then((response) => {
        setPersonalSite(response.data.viewer.repository);
      });
  }, []);

  const renderFooter = () => {
    return (
      <a className="footer-link" href={personalSite.url}>
        <p className="footer-text">
          Designed & Built By Desmond Gilmour
          <br/>
          Wesbite Last Update: {personalSite.updatedAt.slice(0,10)}
          <br/>
          <i className="fa-regular fa-star"></i> {personalSite.stargazerCount}
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
