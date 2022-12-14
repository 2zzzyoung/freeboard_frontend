import { gql } from "graphql-request";

export const POINT_CHARGE = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      createdAt
    }
  }
`;

export const BOUGHT_PRODUCT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
      }
      seller {
        _id
        email
        name
        picture
        createdAt
      }
      soldAt
      createdAt
    }
  }
`;

export const PICKED_PRODUCT = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
      }
      seller {
        _id
        email
        name
        picture
        createdAt
      }
      soldAt
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      email
      name
      picture
      createdAt
    }
  }
`;
