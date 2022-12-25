import { useRouter } from "next/router";
import { useEffect } from "react";
import { errorModal } from "../modal/modal-function";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      errorModal("로그인 후 이용 가능합니다!!");
      void router.push("/login");
    }
  }, []);
}
