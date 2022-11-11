import BoardDetailUI from "./BoardDetail.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD,
  DELETE_BOARD_COMMENT,
  DISLIKE_BOARD,
  FETCH_BOARD,
  FETCH_BOARD_COMMENTS,
  LIKE_BOARD,
  UPDATE_BOARD,
  UPDATE_BOARD_COMMENT,
} from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardDetail(props) {
  const router = useRouter();
  // 댓글
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    refetchQueries: [
      {
        query: FETCH_BOARD,
        variables: { boardId: router.query.boardId },
      },
    ],
  });

  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
    refetchQueries: [
      {
        query: FETCH_BOARD_COMMENTS,
        variables: { boardId: router.query.boardId },
      },
    ],
  });

  const onClickList = async () => {
    router.push("/boards");
  };

  const onClickEdit = async () => {
    const result = await updateBoard({
      variables: myVariables,
    });

    alert(result.data.updateBoard.message);
    router.push(`/boards/${result.data.updateBoard._id}/edit`);
  };
  const onClickDelete = async () => {
    const result = await deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    alert("삭제가 완료되었습니다.");
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
      alert("모두 작성해주세요.");
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
