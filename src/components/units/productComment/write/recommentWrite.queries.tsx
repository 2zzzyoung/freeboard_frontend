import { gql } from "@apollo/client";

export const CREATE_RECOMMENT = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;
