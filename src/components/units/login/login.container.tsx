import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";

import LoginWriteUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { errorModal, successModal } from "../../commons/modal/modal-function";

const LoginWrite = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      if (email && password) {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        if (result.data === null && result === undefined) return;
        const accessToken = result.data?.loginUser.accessToken;

        setAccessToken(String(accessToken));
        successModal("로그인되었습니다.");
        void router.push("/products/list");
        // console.log(accessToken);

        //     if (!accessToken) {
        //       Modal.error({
        //         content: "로그인에 실패했습니다. 다시 시도해 주세요.",
        //       });
        //       return;
        //     }
      }
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return (
    <LoginWriteUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
};
export default LoginWrite;
