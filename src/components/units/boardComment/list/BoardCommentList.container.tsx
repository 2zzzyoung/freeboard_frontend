import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { errorModal } from "../../../commons/modal/modal-function";
import { FETCH_BOARD_COMMENTS } from "../../board/detail/BoardDetail.queries";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList() {
  const router = useRouter();

  if (typeof router.query.boardId !== "string") {
    errorModal("올바르지 않은 게시글 아이디입니다.");
    void router.push("/");
    return <></>;
  }

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardCommentListUI data={data} />;
}
