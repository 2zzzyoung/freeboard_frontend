import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  MainWrapper,
  Title,
  TitleContainer,
  Wrapper,
  TopInputContainer,
  WriterContainer,
  Name,
  PasswordContainer,
  Input1,
  TitleWrapper,
  Input2,
  MiddleContainer,
  Middle,
  Middle2,
  Input3,
  Input4,
  ZipBtn,
  Address1,
  Address2,
  Youtube,
  Pick,
  BottomWrapper,
  UploadBtn,
  Box,
  Box2,
  EnrollBtn,
  Error,
} from "../../../styles/emotion";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function BoardWriteUI() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [youtube, setYoutube] = useState("");
  const [file, setFile] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [EnrollConfirm, setEnrollConfirm] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickEnroll = async () => {
    // if (!writer) {
    //   setWriterError("작성자를 입력해주세요.");
    // }
    // if (!password) {
    //   setPasswordError("비밀번호를 입력해주세요.");
    // }
    // if (!title) {
    //   setTitleError("제목을 입력해주세요.");
    // }
    // if (!contents) {
    //   setContentsError("내용을 입력해주세요.");
    // }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            },
          },
        });
        alert("게시글 등록이 완료되었습니다.");
        console.log(result);
        console.log(result.data.createBoard.number);
        router.push(`/boards/new/${result.data?.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  return (
    <>
      <Wrapper>
        <MainWrapper>
          <TitleContainer>
            <Title>게시물 등록</Title>
          </TitleContainer>
          <TopInputContainer>
            <WriterContainer>
              <Name>작성자</Name>
              <Input1
                type="text"
                placeholder="이름을 적어주세요."
                onChange={onChangeWriter}
              ></Input1>
              <Error>{writerError}</Error>
            </WriterContainer>
            <PasswordContainer>
              <Name>비밀번호</Name>
              <Input1
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={onChangePassword}
              ></Input1>
              <Error>{passwordError}</Error>
            </PasswordContainer>
          </TopInputContainer>
          <TitleWrapper>
            <Name>제목</Name>
            <Input2
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={onChangeTitle}
            ></Input2>
            <Error>{titleError}</Error>
          </TitleWrapper>
          <MiddleContainer>
            <Middle>
              <Name>내용</Name>
              <Input3
                placeholder="내용을 작성해주세요."
                onChange={onChangeContents}
                style={{ paddingBottom: "440px" }}
              ></Input3>
              <Error>{contentsError}</Error>
            </Middle>
            <Middle2>
              <Name>주소</Name>
              <Input4></Input4>
              <ZipBtn>우편번호 검색</ZipBtn>
            </Middle2>
            <Address1>
              <Input2></Input2>
            </Address1>
            <Address2>
              <Input2></Input2>
            </Address2>
            <Youtube>
              <Name>유튜브</Name>
              <Input2 type="text" placeholder="링크를 복사해주세요."></Input2>
            </Youtube>
          </MiddleContainer>
          <BottomWrapper>
            <Pick>
              <Name>사진 첨부</Name>
              <Box>
                <UploadBtn style={{ color: "#4F4F4F" }}>
                  <p>+</p>
                  <p>Upload</p>
                </UploadBtn>
                <UploadBtn style={{ color: "#4F4F4F" }}>
                  <p>+</p>
                  <p>Upload</p>
                </UploadBtn>
                <UploadBtn style={{ color: "#4F4F4F" }}>
                  <p>+</p>
                  <p>Upload</p>
                </UploadBtn>
              </Box>
            </Pick>
            <Name>메인 설정</Name>
            <Box2>
              <div>
                <input
                  type="radio"
                  name="dd"
                  style={{
                    accentColor: "#ffd600",
                    width: "18px",
                    height: "18px",
                  }}
                />
                유튜브
              </div>
              <div>
                <input
                  type="radio"
                  name="dd"
                  style={{
                    accentColor: "#ffd600",
                    width: "18px",
                    height: "18px",
                  }}
                />{" "}
                사진
              </div>
            </Box2>
          </BottomWrapper>
          <EnrollBtn onClick={onClickEnroll}>등록하기</EnrollBtn>
        </MainWrapper>
      </Wrapper>
    </>
  );
}
