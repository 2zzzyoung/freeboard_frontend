import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  FETCH_BOARD_COMMENTS,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  errorModal,
  successModal,
} from "../../../commons/modal/modal-function";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useEffect } from "react";

export default function BoardDetail() {
  const router = useRouter();
  // if (typeof router.query.boardId !== "string") {
  //   errorModal("올바르지 않은 게시글 아이디입니다.");
  //   void router.push("/");
  //   return <></>;
  // }

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, { variables: { boardId: String(router.query.boardId) } });

  useEffect(() => {
    void refetch();
  }, [data]);

  const onClickList = () => {
    void router.push("/boards");
  };

  const onClickEdit = () => {
    if (typeof router.query.boardId !== "string") return;
    void router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    if (typeof router.query.boardId !== "string") return;
    await deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    successModal("삭제가 완료되었습니다.");
    void router.push("/boards");
  };

  const onClickLikeBoard = async () => {
    if (typeof router.query.boardId !== "string") return;
    await likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDislikeBoard = async () => {
    if (typeof router.query.boardId !== "string") return;
    await dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const { data: comments } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
      page: 1,
    },
  });

  // const onClickCommentSubmit = async () => {
  //   if (!writer || !password || !contents) {
  //     successModal("모두 작성해주세요.");
  //   } else {
  //     try {
  //       await createBoardComment({
  //         variables: {
  //           boardId: router.query.id,
  //           createBoardCommentInput: {
  //             writer,
  //             contents,
  //           },
  //         },
  //         refetchQueries: [
  //           {
  //             query: FETCH_COMMENT,
  //             variables: {
  //               boardId: router.query.id,
  //             },
  //           },
  //         ],
  //       });
  //       setWriter("");
  //       setPassword("");
  //       setContents("");
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   }
  // };
  // const onClickCommentEdit = () => {};
  // const onClickCommentDelete = () => {};

  return (
    <BoardDetailUI
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickLikeBoard={onClickLikeBoard}
      onClickDislikeBoard={onClickDislikeBoard}
      data={data}
      comments={comments}
    />
  );
}
