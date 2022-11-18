import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      onClickBoardNew={onClickBoardNew}
      onClickBoardDetail={onClickBoardDetail}
      data={data}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
