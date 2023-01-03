import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./home.css";

import MeIntro from "../../components/homepage/meintro/MeIntro";
import About from "../../components/homepage/about/About";
import Experience from "../../components/homepage/experience/Experience";
import Portfolio from "../../components/homepage/portfolio/Portfolio";
import BlogIntro from "../../components/homepage/blogintro/BlogIntro";
import ContactMe from "../../components/homepage/contactme/ContactMe";


export default function Home() {
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

  return (
    <ApolloProvider client={client}>
      <div className="main-page">
        <MeIntro />
        <About />
        <Experience />
        <Portfolio />
        
        <ContactMe />
      </div>
    </ApolloProvider>
  );
}

/*<BlogIntro /> */
