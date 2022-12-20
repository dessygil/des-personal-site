import React, {useEffect, useState} from 'react';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import "./portfolio.css";


export default function Portfolio() {

  useEffect(() => {
    console.log(10);
  },[]);


  return (
    <div className="portfolio">
      <h2 className="numbered-heading">
        Portfolio
      </h2>

    </div>
  )
}

export async function getStaticProps(props){
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return(
    props:{

    }
  );

}
