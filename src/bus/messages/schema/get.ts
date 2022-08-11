// Core
import { gql } from '@apollo/client';

// Schema
export const GET_MESSAGES = gql`
  query GetMessages {
    getMessages {
      id
      text
      username
      updatedAt
      createdAt
    }
  }
`;
