import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  errorModal,
  successModal,
} from "../../../commons/modal/modal-function";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // const [youtubeUrl, setYoutubeUrl] = useState("");
  // const [likeCount, setLikeCount] = useState(0);
  // const [dislikeCount, setDislikeCount] = useState(0);
  // const [image, setImage] = useState(["", "", ""]);
  // const [boardAddress, setBoardAddress] = "";

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  // const [EnrollConfirm, setEnrollConfirm] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { data } = useQuery<Pick<IQeury, "fetchBoard">>(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  })

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickEnroll = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        setIsModalOpen(true);
        successModal("게시글 등록이 완료되었습니다.");
        console.log(result.data?.createBoard._id);
        await router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        errorModal(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    const myVariables: IMyvariables = {
      boardId: String(router.query._id),
      updateBoardInput: {},
    }
    if (

    ){}

  };
  return (
    <BoardWriteUI
      onClickEnroll={onClickEnroll}
      onClickEdit={onClickEdit}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isModalOpen={isModalOpen}
    />
  );
}
