import { gql } from "@apollo/client";

export const GET_PINNED_REPOS = gql
`
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
`
