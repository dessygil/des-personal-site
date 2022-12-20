import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./portfolio.css";



export default function Portfolio({ pinnedItems }) {
  
  
  const [data, setData] = useState({})
  
  const baseUrl = "https://api.github.com/graphql";

  const httpLink = createHttpLink({
    uri: baseUrl,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${"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"}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        {
          viewer {
            login
          }
          user(login: "dessygil") {
            id
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on Repository {
                    name
                    createdAt
                    description
                    repositoryTopics(last: 10) {
                      edges {
                        node {
                          topic {
                            name
                          }
                        }
                      }
                    }
                    stargazerCount
                    url
                  }
                }
              }
            }
          }
        }
      `,
    })
    .then((result) => console.log(result));

  useEffect(() => {
    console.log(fetch);
  }, []);

  return (
    <div className="portfolio">
      <h2 className="numbered-heading">Portfolio</h2>
    </div>
  );
}
