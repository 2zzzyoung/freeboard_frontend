import { useQuery } from "@apollo/client";
import RecommentListUI from "./recommentList.presenter";
import { FETCH_RECOMMENTS } from "./recommentList.queries";

export default function RecommentList({ commentId }) {
  const { data } = useQuery(FETCH_RECOMMENTS, {
    variables: {
      page: 1,
      useditemQuestionId: commentId,
    },
  });

  return <RecommentListUI data={data} />;
}
