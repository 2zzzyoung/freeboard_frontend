import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();

  const [endDate, setEndDate] = useState("");
  const [startDate, setStateDate] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const { data } = useQuery(FETCH_BOARDS);
  //   const { data } = useQuery(FETCH_BOARDS_COUNT);

  const onClickBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      onClickBoardNew={onClickBoardNew}
      onClickBoardDetail={onClickBoardDetail}
      //   refetch={refetch}
      data={data}
    />
  );
}
