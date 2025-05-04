import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./portfolio.css";
import Card from "../shared/Card";

export default function Portfolio() {
  const [pinnedItems, setPinnedItems] = useState([]);

  const baseUrl = "https://api.github.com/graphql";

  const httpLink = createHttpLink({
    uri: baseUrl,
  });

  // Using environment variable from .env.development
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

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    if (!client) return;
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
                      homepageUrl
                      stargazerCount
                      url
                      updatedAt
                      repositoryTopics(last: 10) {
                        edges {
                          node {
                            topic {
                              name
                            }
                          }
                        }
                      }
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
    return node.repositoryTopics.edges
      .slice(0, 4)
      .map((node) => <li className="topic">{node.node.topic.name}</li>);
  };

  const renderPinnedItems = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pinnedItems.map((repo) => (
          <Card
            key={repo.id}
            title={repo.name}
            description={repo.description}
            date={repo.updatedAt.slice(0, 10)}
            topRightLinks={
              <>
                {repo.homepageUrl && (
                  <a className="a-tag-no-features" href={repo.homepageUrl}>
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                )}
                <a className="a-tag-no-features" href={repo.url}>
                  <i className="fa-brands fa-github"></i>
                </a>
              </>
            }
            topics={repo.repositoryTopics.edges.slice(0, 4).map(edge => edge.node.topic.name)}
            url={repo.url}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="Portfolio-anchor" className="portfolio" aria-label="Portfolio Projects">
      <h2 className="numbered-heading"><a className="a-tag-no-features" href="https://github.com/dessygil" aria-label="View GitHub Profile">Portfolio</a></h2>
      <div className="repos" role="list" aria-label="Project List">
        {pinnedItems.length ? renderPinnedItems() : <p role="status">Loading projects...</p>}
      </div>
    </section>
  );
}
