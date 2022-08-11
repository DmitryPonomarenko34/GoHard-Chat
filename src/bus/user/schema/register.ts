import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
 mutation RegistrUser($username: String!) {
    registrUser(username: $username) {
       id
       username
    }
  }
`;

