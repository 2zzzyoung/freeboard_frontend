import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../store";
import { errorModal } from "../modal/modal-function";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      errorModal("로그인 후 이용 가능합니다.");
      void router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
