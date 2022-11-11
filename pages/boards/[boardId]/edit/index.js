import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardWritePage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  // const onClickMoveToEdit = () => {
  //   router.push(`/boards/${router.query.number}/edit`);
  // };

  return (
    <BoardWrite
      isEdit={true}
      // onClickMoveToEdit={onClickMoveToEdit}
      data={data}
    />
  );
}
