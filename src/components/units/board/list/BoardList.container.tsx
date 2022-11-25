import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardList() {
  const [keyword, setKeyword] = useState("");

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
    void router.push("/boards/new");
  };

  const onClickBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      onClickBoardNew={onClickBoardNew}
      onClickBoardDetail={onClickBoardDetail}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      refetchBoardsCount={refetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
