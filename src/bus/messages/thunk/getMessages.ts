// Core
import { gql } from '@apollo/client';

// Schema
export const GET_MESSAGES = gql`
  query getMessages {
    messages {
      id
      text
      username
      updatedAt
      createdAt
    }
  }
`;
