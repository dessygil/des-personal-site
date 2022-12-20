import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./portfolio.css";

export default function Portfolio({ pinnedItems }) {
  const gitHubGraphQlSearch = `
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
  `;

  useEffect(() => {
    console.log(10);
    console.log("pinnedItems", pinnedItems);
  }, []);

  return (
    <div className="portfolio">
      <h2 className="numbered-heading">Portfolio</h2>
    </div>
  );
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  console.log("I am here");
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql``,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: {
      pinnedItems,
    },
  };
}
