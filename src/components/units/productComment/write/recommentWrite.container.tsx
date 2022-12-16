import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  errorModal,
  successModal,
} from "../../../commons/modal/modal-function";
import RecommentWriteUI from "./recommentWrite.presenter";
import { CREATE_RECOMMENT } from "./recommentWrite.queries";

export default function RecommentWrite({ commentId }) {
  const [recomment, setRecomment] = useState("");

  const onChangeRecomment = (event) => {
    setRecomment(event.target.value);
  };

  const [createRecomment] = useMutation(CREATE_RECOMMENT);

  const onClickRecommentSumbit = async () => {
    try {
      await createRecomment({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: recomment,
          },
          useditemQuestionId: commentId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("답글이 등록되었습니다.");
      setRecomment("");
    } catch (error) {
      errorModal(error.message);
    }
  };

  return (
    <RecommentWriteUI
      onChangeRecomment={onChangeRecomment}
      recomment={recomment}
      onClickRecommentSumbit={onClickRecommentSumbit}
    />
  );
}
