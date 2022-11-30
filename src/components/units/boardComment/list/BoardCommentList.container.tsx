import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { successModal } from "../../../commons/modal/modal-function";
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

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const CmtPassword = prompt("비밀번호를 입력하세요.");
    try {
      console.log(event.currentTarget.id);
      await deleteBoardComment({
        variables: {
          password: CmtPassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId, page: 1 },
          },
        ],
      });
      successModal("댓글이 삭제 되었습니다.");
    } catch (error) {
      alert("댓글 삭제 실패");
      // if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentListUI
      el={props.el}
      isEdit={isEdit}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
}
