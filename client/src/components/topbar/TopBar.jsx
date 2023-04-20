import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./topbar.css";
import resume from "./DesmondGilmourResume.pdf";

export default function TopBar() {

  const [downloadableResume, setDownloadableResume] = useState();

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
          }
          repository(name: "resume", owner: "dessygil") {
            id
            releases(first: 1) {
              edges {
                node {
                  id
                  releaseAssets(first: 1) {
                    edges {
                      node {
                        downloadUrl
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
        setDownloadableResume(response.data.repository.releases.edges[0].node.releaseAssets.edges[0].node.downloadUrl);
      });
  }, []);
  
  return (
    <div className="top box-shadow">
      <a className="home-page-logo-link " href="/">
        <h2 className="site-logo">DG</h2>
      </a>
      <div className="top-right">
        <ul className="top-list">
          <li className="top-list-items">
            <a className="top-list-item-tag" href="#About-anchor">
              01. About
            </a>
          </li>
          <li className="top-list-items">
            <a className="top-list-item-tag" href="#Experience-anchor">
              02. Experience
            </a>
          </li>
          <li className="top-list-items">
            <a className="top-list-item-tag" href="#Portfolio-anchor">
              03. Portfolio
            </a>
          </li>
          <li className="top-list-items">
            <a className="top-list-item-tag" href="#Blog-anchor">
              04. Blog
            </a>
          </li>
          <li className="top-list-items-resume">
            <button className="button-56" role="button">
              <a
                className="no-features"
                href={downloadableResume}
                download="DesmondGilmourResume.pdf"
                role="to-download-pdf"
              >
                Resume
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
