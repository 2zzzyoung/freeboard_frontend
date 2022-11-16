// import { ChangeEvent, MouseEvent } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  //   onClickDelete: (event: MouseEvent<HTMLElement>) => void;
  //   onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  //   onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}

//   export interface IBoardCommentListUIItemProps {
//     el: IBoardComment;
// }
