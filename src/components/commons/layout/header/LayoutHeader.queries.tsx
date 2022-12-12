import { gql } from "@apollo/client";

export const POINT_CHARGE = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      # balance
      # status
      # statusDetail
      # useditem
      # user {
      #   _id
      #   email
      #   name
      #   picture
      #     userPoint {
      #       _id
      #       amount
      #       createdAt
      #     }
      #     createdAt
      # }
      createdAt
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
