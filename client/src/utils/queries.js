import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
query users { [User] }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;
