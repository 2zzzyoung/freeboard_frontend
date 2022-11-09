import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BoardDetail() {
  // const [writer, setWriter] = useState("")
  // const [title, setTitle] = useState("")
  // const [contents, setContents] = useState("")

  //   const onClickMoveToList = () => {};
  //   const onClickEdit = () => {};
  //   const onClickDelete = () => {};
  const router = useRouter();
  console.log(router.query.number);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickSubmit = async () => {
    const result = await createBoard({});
  };
  const onClickEdit = async () => {
    const result = await updateBoard({});
  };
  const onClickDelete = async () => {
    const result = await DELETE_BOARD({});
  };

  return <BoardDetailUI />;
}
