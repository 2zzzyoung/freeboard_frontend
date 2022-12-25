import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IBoard,
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { refetch } from "../../../../store";
import { IBaskets } from "../detail/detail.types";
import ProductListUI from "./list.presenter";
import { FETCH_USED_ITEMS } from "./list.queries";

export default function ProductList() {
  const [refetchNum, setRefetchNum] = useRecoilState(refetch);
  const [lookProductData, setLookProductData] = useState([]);

  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  useEffect(() => {
    const result = JSON.parse(sessionStorage.getItem("baskets"));
    setLookProductData(result);
  }, [refetchNum]);

  const onClickMoveDetail = (basket: IBoard) => (event: any) => {
    router.push(`/products/${basket._id}`);
    console.log(basket);
    // 1. 기존 장바구니 가져오기
    const baskets: IBaskets = JSON.parse(
      sessionStorage.getItem("baskets") ?? "[]"
    );
    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      return;
    }
    if (baskets.length > 3) {
      baskets.pop();
    }
    // 3. 해당 장바구니에 담기
    const { __typename, ...newBasket } = basket;
    console.log(newBasket);
    baskets.unshift(newBasket);
    sessionStorage.setItem("baskets", JSON.stringify(baskets));
    setRefetchNum((prev) => prev + 1);
  };

  const onClickMoveWrite = (event: MouseEvent<HTMLDivElement>) => {
    void router.push("/products/write");
  };

  const infiniteFunc = () => {
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
        infiniteFunc={infiniteFunc}
        lookProductData={lookProductData}
      />
    </>
  );
}
