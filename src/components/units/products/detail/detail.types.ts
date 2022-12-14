import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export type IBaskets = Array<
  Pick<IBoard, "contents" | "title" | "_id" | "writer">
>;
