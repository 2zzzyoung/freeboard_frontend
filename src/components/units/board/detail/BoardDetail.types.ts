import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickList: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickLikeBoard: () => void;
  onClickDislikeBoard: () => void;
}
