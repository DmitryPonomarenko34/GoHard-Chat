import { gql } from '@apollo/client';

export const CHANGE_MESSAGE = gql`
  mutation UpdateMessage($updateMessageId: String!, $text: String!) {
    updateMessage(id: $updateMessageId, text: $text) {
      id
      text
      username
      createdAt
      updatedAt
    }
}
`;
