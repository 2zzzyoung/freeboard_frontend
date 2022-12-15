import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  IBoard,
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { refetch } from "../../../../store";
import {
  errorModal,
  successModal,
} from "../../../commons/modal/modal-function";
import ProductDetailUI from "./detail.presenter";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  PRODUCT_BUY,
  TOGGLE_USED_ITEM_PICK,
} from "./detail.queries";
import { IBaskets } from "./detail.types";

export default function ProductDetail() {
  const [, setRefetchNum] = useRecoilState(refetch);

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

  const [productBuy] = useMutation(PRODUCT_BUY);

  const [productPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const onClickProductBuy = async () => {
    try {
      await productBuy({
        variables: {
          useritemId: router.query.productId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });

      successModal("구매가 완료되었습니다.");
      void router.push("/mypage");
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
      void router.push("/products/list");
    }
  };

  const onClickBasket = (basket: IBoard) => () => {
    console.log(basket);

    // 1. 기존 장바구니 가져오기
    const baskets: IBaskets = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // 3. 해당 장바구니에 담기
    const { __typename, ...newBasket } = basket;
    console.log(newBasket);
    baskets.push(newBasket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    alert("장바구니에 담겼습니다.");
    setRefetchNum((prev) => prev + 1);
  };

  const onClickPicked = async () => {
    try {
      await productPick({
        variables: {
          useditemId: router.query.productId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("찜이 완료되었습니다.");
      void router.push("/mypage");
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
      void router.push("/products/list");
    }
  };

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

  const onClickDelete = async () => {
    try {
      await deleteUsedItem({
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
      onClickProductBuy={onClickProductBuy}
      onClickBasket={onClickBasket}
      onClickPicked={onClickPicked}
    />
  );
}
