import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardDetail(props) {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
    refetchQueries: [
      {
        query: FETCH_BOARD,
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

  return (
    <BoardDetailUI
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
}
