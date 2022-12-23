import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productDatas } from "../../../commons/store";
import MainUI from "./main.presenter";

export default function Main() {
  const router = useRouter();
  // const [productData, setProductData] = useRecoilState(productDatas);

  const onClickList = () => {
    router.push("/products/list");
  };

  return (
    <>
      <MainUI onClickList={onClickList} />
    </>
  );
}
