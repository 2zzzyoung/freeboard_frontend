import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ProductListUI from "./list.presenter";
import { FETCH_USED_ITEMS } from "./list.queries";

export default function ProductList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  console.log(data);

  const onClickMoveDetail = (event: any) => {
    void router.push(`/products/detail/${event.currentTarget.productId}`);
  };

  const onClickMoveWrite = (event: MouseEvent<HTMLDivElement>) => {
    void router.push("/products/write");
  };

  const infiniteFun = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <>
      <ProductListUI
        data={data}
        onClickMoveDetail={onClickMoveDetail}
        onClickMoveWrite={onClickMoveWrite}
        infiniteFun={infiniteFun}
      />
    </>
  );
}
