import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Wrapper,
  MainWrapper,
  DD,
  TopWrapper,
  NameContainer,
  ImageContainer,
  WriterInfo,
  MiddleWrapper,
  TitleContainer,
  ContentsContainer,
  PicContainer,
  Contents,
  VideoContainer,
  Wrapper2,
  CommentWrapper,
  ButtonContainer,
  Button,
  CommentTitle,
  InputWrapper,
  WriterInput,
  CommentContents,
  CommentButton,
  Star,
  Like,
  DisLike,
  Thumbs,
  D,
} from "../../../../styles/emotion2";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function BoardDetailUI() {
  // const [writer, setWriter] = useState("")
  // const [title, setTitle] = useState("")
  // const [contents, setContents] = useState("")

  //   const onClickMoveToList = () => {};
  //   const onClickEdit = () => {};
  //   const onClickDelete = () => {};
  const router = useRouter();
  console.log(router.query.number);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      <Wrapper>
        <MainWrapper>
          <DD>
            <TopWrapper>
              <NameContainer>
                <img
                  src="/Writer.png"
                  style={{ width: "46px", height: "46px" }}
                ></img>
                <WriterInfo>
                  <div style={{ fontSize: "24px", fontWeight: "500" }}>
                    {data?.fetchBoard.writer}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#bdbdbd",
                    }}
                  >
                    Date
                  </div>
                </WriterInfo>
              </NameContainer>
              <ImageContainer>
                <img src="/link.png" />
                <img src="/location.png" />
              </ImageContainer>
            </TopWrapper>
          </DD>
          <MiddleWrapper>
            <TitleContainer>{data?.fetchBoard.title}</TitleContainer>
            <ContentsContainer>
              <PicContainer></PicContainer>
              <Contents>{data?.fetchBoard.Contents}</Contents>
              <VideoContainer>
                <div
                  style={{
                    width: "486px",
                    height: "240px",
                    backgroundColor: "#f2f2f2",
                  }}
                ></div>
              </VideoContainer>
              <Thumbs>
                <Like>
                  <img src="/like.png"></img>
                </Like>
                <DisLike>
                  <img src="/dislike.png"></img>
                </DisLike>
              </Thumbs>
            </ContentsContainer>
          </MiddleWrapper>
          {/* <BottomWrapper></BottomWrapper> */}
        </MainWrapper>
      </Wrapper>
      <Wrapper2>
        <CommentWrapper>
          <ButtonContainer>
            <Button style={{ paddingTop: "8px" }}>목록으로</Button>
            <Button style={{ paddingTop: "8px" }}>수정하기</Button>
            {/* <Button>삭제하기</Button> */}
          </ButtonContainer>
          <CommentTitle>
            <img src="/review.png" style={{ width: "20px", height: "20px" }} />
            <div style={{ fontSize: "16px", fontWeight: "600" }}>댓글</div>
          </CommentTitle>
          <InputWrapper>
            <WriterInput
              placeholder="작성자"
              style={{ paddingLeft: "10px", fontWeight: "500" }}
              l
            ></WriterInput>
            <WriterInput
              placeholder="비밀번호"
              style={{ paddingLeft: "10px", fontWeight: "500" }}
            ></WriterInput>
            <Star></Star>
          </InputWrapper>
          <CommentContents
            placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            style={{ padding: "0px 0px 100px 15px" }}
          ></CommentContents>
          <D>
            <CommentButton>등록하기</CommentButton>
          </D>

          {/* <WriterComment>
            <EditButton></EditButton>
            <DeleteButton></DeleteButton>
          </WriterComment> */}
        </CommentWrapper>
      </Wrapper2>
    </>
  );
}
