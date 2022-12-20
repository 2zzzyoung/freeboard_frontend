import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  errorModal,
  successModal,
} from "../../../commons/modal/modal-function";
import CommentWriteUI from "./commentWrite.presenter";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./commentWrite.queries";

const CommentWrite = ({ isEdit, commentId, el, setIsUpdateComment }) => {
  const [comment, setComment] = useState("");

  const router = useRouter();

  const onChangeComment = (event) => {
    setComment(event?.target.value);
  };

  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);

  const onClickCommentSubmit = async () => {
    try {
      await createComment({
        variables: {
          createUseditemQuestionInput: {
            contents: comment,
          },
          useditemId: router.query.productId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("댓글이 등록되었습니다.");
      setComment("");
    } catch (error) {
      errorModal(error.message);
    }
  };

  const onClickCommentUpdate = async () => {
    try {
      await updateComment({
        variables: {
          updateUseditemQuestionInput: {
            contents: comment || el.contents,
          },
          useditemQuestionId: commentId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("수정이 완료되었습니다.");
      setIsUpdateComment(false);
    } catch (error) {
      errorModal(error.message);
    }
  };
  // 댓글 대댓글 입력 후 내용 "" 안됨

  return (
    <CommentWriteUI
      onChangeComment={onChangeComment}
      onClickCommentSubmit={onClickCommentSubmit}
      comment={comment}
      isEdit={isEdit}
      onClickCommentUpdate={onClickCommentUpdate}
      el={el}
    />
  );
};

export default CommentWrite;
