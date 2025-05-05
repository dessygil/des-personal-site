import React, { useEffect, useState } from "react";
import CardShell from "../shared/CardShell";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./portfolio.css";

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
    return pinnedItems.map((node) => (
      <CardShell key={node.id}>
        <div className="card-body">
          <div className="card-head">
            <div className="folder">
              <i className="fa fa-folder"></i>
            </div>
            <div className="links-from-github">
              {node.homepageUrl && 
                <a className="a-tag-no-features" href={node.homepageUrl} key={node.id}>
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              }
              <a className="a-tag-no-features" href={node.url} key={node.id}>
                <i className="fa-brands fa-github"></i>{" "}
              </a>
            </div>
          </div>
          <p className="date-updated">Last updated: {node.updatedAt.slice(0,10)}</p>
          <h5 className="card-title my-card-title" key={node.id}>
            {node.name}
          </h5>
          <p className="card-text my-card-text" key={node.id}>
            {node.description}
          </p>
          <ul className="topics topics-container">{renderRepoTopics(node)}</ul>
        </div>
      </CardShell>
    ));
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
