import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductListUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
}
