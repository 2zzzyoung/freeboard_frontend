import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };

  // const onClickMenuBoard = () => {
  //   void router.push("/boards");
  // };

  // const onClickMenuProductList = () => {
  //   void router.push("/products/list");
  // };

  // const onClickMenuMypage = () => {
  //   void router.push("/mypage");
  // };

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
