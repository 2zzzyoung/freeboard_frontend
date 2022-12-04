import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ProductListUI from "./list.presenter";
import { FETCH_USED_ITEMS } from "./list.queries";

export default function ProductList() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  console.log(data);

  return <ProductListUI data={data} />;
}
