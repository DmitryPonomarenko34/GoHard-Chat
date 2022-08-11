// Core
import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($username: String!, $text: String!) {
    createMessage(username: $username, text: $text) {
      id
      text
      username
      createdAt
      updatedAt
    }
}
`;
