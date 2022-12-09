import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = () => {
    void router.push("/login");
  };

  const onClickMoveToJoin = () => {
    void router.push("/join");
  };

  return (
    <>
      <LayoutHeaderUI
        onClickLogo={onClickLogo}
        onClickMoveToLogin={onClickMoveToLogin}
        onClickMoveToJoin={onClickMoveToJoin}
      />
    </>
  );
}
