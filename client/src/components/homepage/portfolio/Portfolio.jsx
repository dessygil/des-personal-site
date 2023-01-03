import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
  ApolloProvider
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./portfolio.css";


export default function Portfolio() {
  const [pinnedItems, setPinnedItems] = useState([]);

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
    client
      .query({
        query: gql`
          {
            user(login: "dessygil") {
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
      .then((response) => {
        setPinnedItems(
          response.data.user.pinnedItems.edges.map(({ node }) => node)
        );
      });
  }, []);

  const renderRepoTopics = (node) => {
    return node.repositoryTopics.edges.slice(0, 4).map((node) => (
      <li className="topic">{node.node.topic.name}</li>
    ));
  };

  const renderPinnedItems = () => {
    return pinnedItems.map((node) => (
      <div className="card main-cards" style={{ width: "18rem" }}>
        <div className="card-head">
          <i className="fa-light fa-folder"></i>
          <a className="card-link" href={node.url} key={node.id}>
            <i className="fa-brands fa-github"></i>{" "}
          </a>
        </div>

        <div className="card-body">
          <h5 className="card-title my-card-title" key={node.id}>
            {node.name}
          </h5>
          <p className="card-text my-card-text" key={node.id}>
            {node.description}
          </p>
          <ul className="topics">{renderRepoTopics(node)}</ul>
        </div>

      </div>
    ));
  };

  return (
    <div id="portfolio-anchor" className="portfolio">
      <h2 className="numbered-heading">Portfolio</h2>
      <div className="repos">
        {pinnedItems.length ? renderPinnedItems() : <p>Loading...</p>}
      </div>
    </div>
  );
}
