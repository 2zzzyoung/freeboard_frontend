import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickBoardNew: () => void;
  onClickBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
