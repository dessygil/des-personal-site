
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseUrl = "https://api.github.com/graphql";

  const httpLink = createHttpLink({
    uri: baseUrl,
  });

  const token = process.env.REACT_APP_GITHUB_TOKEN;

  const authLink = setContext((_, { headers }) => {
    if (!token) {
      console.error('GitHub token is missing');
      return { headers };
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top box-shadow" role="navigation" aria-label="Main navigation">
      <a className="home-page-logo-link" href="/" aria-label="Home">
        <h2 className="site-logo">DG</h2>
      </a>
      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`top-right ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul className="top-list" role="menubar">
          <li className="top-list-items" role="none">
            <a className="top-list-item-tag" href="#About-anchor" role="menuitem" aria-label="About section" onClick={toggleMenu}>
              01. About
            </a>
          </li>
          <li className="top-list-items" role="none">
            <a className="top-list-item-tag" href="#Experience-anchor" role="menuitem" aria-label="Experience section" onClick={toggleMenu}>
              02. Experience
            </a>
          </li>
          <li className="top-list-items" role="none">
            <a className="top-list-item-tag" href="#Portfolio-anchor" role="menuitem" aria-label="Portfolio section" onClick={toggleMenu}>
              03. Portfolio
            </a>
          </li>
          <li className="top-list-items" role="none">
            <a className="top-list-item-tag" href="#Blog-anchor" role="menuitem" aria-label="Blog section" onClick={toggleMenu}>
              04. Blog
            </a>
          </li>
          <li className="top-list-items-resume" role="none">
            <button className="button-56" aria-label="Download Resume">
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
    </nav>
  );
}
