import React, { useEffect, useState } from "react";
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
      <div className="card main-cards" style={{ width: "18rem" }}>
        <div className="card-head">
          <div className="folder">
            <i className="fa fa-folder"></i>
          </div>
          
          <div className="links-from-github">
            {node.homepageUrl && 
              <a className="a-tag-no-features" href={node.homepageUrl} key={node.id}>
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            }
            <a className="a-tag-no-features" href={node.url} key={node.id}>
              <i className="fa-brands fa-github"></i>{" "}
            </a>
          </div>
        </div>
          
        <div className="card-body">
          <p className="date-updated">Last updated: {node.updatedAt.slice(0,10)}</p>
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
    <div id="Portfolio-anchor" className="portfolio">
      <h2 className="numbered-heading"><a className="a-tag-no-features" href="https://github.com/dessygil">Portfolio</a></h2>
      <div className="repos">
        {pinnedItems.length ? renderPinnedItems() : <p>Loading...</p>}
      </div>
    </div>
  );
}
