import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  UPDATE_BOARD,
} from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { successModal } from "../../../commons/modal/modal-function";

export default function BoardDetail(props) {
  const router = useRouter();
  // 댓글
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    refetchQueries: [
      {
        query: FETCH_BOARD,
        variables: { boardId: router.query.boardId },
      },
    ],
  });

  console.log(data);

  const onClickList = async () => {
    router.push("/boards");
  };

  const onClickEdit = async () => {
    router.push(`/boards/${data?.updateBoard._id}/edit`);
  };

  const onClickDelete = async () => {
    const result = await deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    successModal("삭제가 완료되었습니다.");
    router.push("/boards");
  };

  const onClickLikeBoard = () => {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDislikeBoard = () => {
    onClickDislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickCommentSubmit = async () => {
    if (!writer || !password || !contents) {
      successModal("모두 작성해주세요.");
    } else {
      try {
        await createBoardComment({
          variables: {
            boardId: router.query.id,
            createBoardCommentInput: {
              writer,
              contents,
            },
          },
          refetchQueries: [
            {
              query: FETCH_COMMENT,
              variables: {
                boardId: router.query.id,
              },
            },
          ],
        });
        setWriter("");
        setPassword("");
        setContents("");
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const onClickCommentEdit = () => {};
  const onClickCommentDelete = () => {};

  return (
    <BoardDetailUI
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickLikeBoard={onClickLikeBoard}
      onClickDislikeBoard={onClickDislikeBoard}
      onClickCommentSubmit={onClickCommentSubmit}
      onClickCommentEdit={onClickCommentEdit}
      onClickCommentDelete={onClickCommentDelete}
      data={data}
    />
  );
}
