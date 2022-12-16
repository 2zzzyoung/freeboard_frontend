import JoinWriteUI from "./join.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./join.queries";
import { errorModal } from "../../commons/modal/modal-function";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";

export default function JoinWrite() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  // const [picture, setPicture] = useState("");

  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePassword2 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickSubmit = async () => {
    if (email && password && password2 && name) {
      if (email.includes("@")) {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
              name,
            },
          },
        });
        alert("회원가입이 완료되었습니다.");
        void router.push("/login");
      } else {
        errorModal("이메일 형식을 확인해주세요.");
      }
    } else {
      errorModal("빈칸을 채워주세요.");
    }
  };
  console.log(email, password, password2, name);
  return (
    <JoinWriteUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePassword2={onChangePassword2}
      onChangeName={onChangeName}
      onClickSubmit={onClickSubmit}
    />
  );
}
