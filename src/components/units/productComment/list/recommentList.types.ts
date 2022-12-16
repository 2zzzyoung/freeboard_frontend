import { IQuery } from "../../../../commons/types/generated/types";

export interface IRecommentListUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
  onLoadMore: () => void;
}
