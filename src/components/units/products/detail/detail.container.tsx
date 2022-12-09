import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { errorModal } from "../../../commons/modal/modal-function";
import ProductDetailUI from "./detail.presenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./detail.queries";

export default function ProductDetail() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });
  console.log(data);

  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  //   console.log(data?.fetchUseditem.useditemAddress?.lat);
  // useEffect(() => {
  //   localStorage.setItem("basket", JSON.stringify([router.query.id]));
  //   const baskets = JSON.parse(localStorage.getItem("basket") ?? "[]"); // basket에 있는 값을 배열로 받음
  //   const setArr = [...new Set(baskets.map(JSON.stringify))].map(JSON.parse);

  //   if (setArr.length > 5) {
  //     setArr.shift();
  //   }
  //   setArr.push(router.query.id);

  //   localStorage.setItem("basket", JSON.stringify(setArr));
  //   console.log(setArr);
  // }, []);

  const onClickDelete = () => {
    try {
      void deleteUsedItem({
        variables: { useditemId: String(router.query.productId) },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
    void router.push("/products/list");
  };

  const onClickMoveToEdit = () => {
    void router.push(`/products/${router.query.productId}/edit`);
  };

  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
