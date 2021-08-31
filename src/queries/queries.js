import { gql } from '@apollo/client';

export const GET_REPOS_TOTAL_COUNT = gql`
  query($userLogin: String!){
    user(login: $userLogin) {
      id
      repositories{
        totalCount
      }
    }
  }
`;

export const GET_USER_DATA = gql`
  query ($userLogin: String!, $totalCount: Int!){
    user(login: $userLogin){
      id
      avatarUrl
      url
      name
      login
      bio
      followers{
        totalCount
      }
      following{
        totalCount
      }
      starredRepositories{
        totalCount
      }
      repositories(first: $totalCount){
        nodes{
          stargazerCount
        }
      }
      company
      companyHTML
      location
      email
      twitterUsername
      websiteUrl
    }
  }
`;

export const GET_USER_REPOS_DATA = gql`
  query($userLogin: String!, $totalCount: Int!, $field: String!, $direction: String!){
    user(login: $userLogin){
      id
      repositories(first:$totalCount, orderBy: {field: $field, direction: $direction}){
        totalCount
        nodes{
          id
          name
          url
          description
          updatedAt
          createdAt
          isPrivate
          stargazerCount
        }
      }
    }
  }
`;