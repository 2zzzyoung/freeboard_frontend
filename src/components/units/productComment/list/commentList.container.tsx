import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  errorModal,
  successModal,
} from "../../../commons/modal/modal-function";
import CommentListUI from "./commentList.presenter";
import { DELETE_COMMENT } from "./commentList.queries";

const CommentList = ({ el }) => {
  const [isRecomment, setIsRecomment] = useState(false);
  const [isUpdateComment, setIsUpdateComment] = useState(false);
  const [commentId, setCommentId] = useState("");

  const [deleteComment] = useMutation(DELETE_COMMENT);

  const onClickToggleRecomment = (commentId) => () => {
    setIsRecomment((prev) => !prev);
    setCommentId(commentId);
  };

  const onClickToggleUpdateBtn = (commentId) => () => {
    setIsUpdateComment((prev) => !prev);
    setCommentId(commentId);
  };

  const onClickDeleteComment = (commentId) => async () => {
    try {
      await deleteComment({
        variables: {
          useditemQuestionId: commentId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("댓글이 삭제되었습니다.");
    } catch (error) {
      errorModal(error.message);
    }
  };

  return (
    <CommentListUI
      onClickDeleteComment={onClickDeleteComment}
      isRecomment={isRecomment}
      onClickToggleRecomment={onClickToggleRecomment}
      commentId={commentId}
      isUpdateComment={isUpdateComment}
      el={el}
      onClickToggleUpdateBtn={onClickToggleUpdateBtn}
      setIsUpdateComment={setIsUpdateComment}
    />
  );
};

export default CommentList;
