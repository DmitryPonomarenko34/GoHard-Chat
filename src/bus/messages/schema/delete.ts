import { gql } from '@apollo/client';

export const DELETE_MESSAGE = gql`
  mutation Mutation($deleteMessageId: String!) {
    deleteMessage(id: $deleteMessageId)
  }
`;
