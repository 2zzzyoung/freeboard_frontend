import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList(props) {
  const [isEdit, setIsEdit] = useState(false);
  // const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const router = useRouter();
  // if (typeof router.query.boardId !== "string") {
  //   alert("올바르지 않은 게시글 아이디입니다.");
  //   void router.push("/");
  //   return <></>;
  // }

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const CmtPassword = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: CmtPassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      onLoadMore={onLoadMore}
      el={props.el}
      isEdit={isEdit}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
}
