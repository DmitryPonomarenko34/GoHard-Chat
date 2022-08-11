import { gql } from '@apollo/client';

export const REFRESH_AUTH = gql`
  query RefreshAuth($refreshAuthId: String!) {
    refreshAuth(id: $refreshAuthId) {
      id
      username
    }
  }
`;
