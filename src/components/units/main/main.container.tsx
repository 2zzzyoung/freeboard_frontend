import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productDatas } from "../../../commons/store";
import MainUI from "./main.presenter";

export default function Main() {
  const [productData, setProductData] = useRecoilState(productDatas);

  return (
    <>
      <MainUI />
    </>
  );
}
