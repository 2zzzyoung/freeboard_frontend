import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardDetailUI({
  data,
  onClickLikeBoard,
  onClickDislikeBoard,
  onClickList,
  onClickEdit,
  onClickDelete,
}) {
  return (
    <>
      <S.Wrapper>
        <S.MainWrapper>
          <S.DD>
            <S.TopWrapper>
              <S.NameContainer>
                <img
                  src="/Writer.png"
                  style={{ width: "46px", height: "46px" }}
                ></img>
                <S.WriterInfo>
                  <div style={{ fontSize: "24px", fontWeight: "500" }}>
                    {data?.fetchBoard?.writer}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#bdbdbd",
                    }}
                  >
                    {getDate(data?.fetchBoard?.createAt)}
                  </div>
                </S.WriterInfo>
              </S.NameContainer>
              <S.ImageContainer>
                <img src="/link.png" />
                <img src="/location.png" />
              </S.ImageContainer>
            </S.TopWrapper>
          </S.DD>
          <S.MiddleWrapper>
            <S.TitleContainer>{data?.fetchBoard?.title}</S.TitleContainer>
            <S.ContentsContainer>
              <S.PicContainer></S.PicContainer>
              <S.Contents>{data?.fetchBoard?.Contents}</S.Contents>
              <S.VideoContainer>
                <div
                  style={{
                    width: "486px",
                    height: "240px",
                    backgroundColor: "#f2f2f2",
                  }}
                ></div>
              </S.VideoContainer>
              <S.Thumbs>
                <S.Like onClick={onClickLikeBoard}>
                  <img src="/like.png"></img>
                </S.Like>
                <S.DisLike onClick={onClickDislikeBoard}>
                  <img src="/dislike.png"></img>
                </S.DisLike>
              </S.Thumbs>
            </S.ContentsContainer>
          </S.MiddleWrapper>
          {/* <BottomWrapper></BottomWrapper> */}
        </S.MainWrapper>
      </S.Wrapper>
      <S.Wrapper2>
        <S.CommentWrapper>
          <S.ButtonContainer>
            <S.Button style={{ paddingTop: "8px" }} onClick={onClickList}>
              목록으로
            </S.Button>
            <S.Button style={{ paddingTop: "8px" }} onClick={onClickEdit}>
              수정하기
            </S.Button>
            <S.Button style={{ paddingTop: "8px" }} onClick={onClickDelete}>
              삭제하기
            </S.Button>
            {/* <Button>삭제하기</Button> */}
          </S.ButtonContainer>
          <S.CommentTitle>
            <img src="/review.png" style={{ width: "20px", height: "20px" }} />
            <div style={{ fontSize: "16px", fontWeight: "600" }}>댓글</div>
          </S.CommentTitle>
          <S.InputWrapper>
            <S.WriterInput
              placeholder="작성자"
              style={{ paddingLeft: "10px", fontWeight: "500" }}
              l
            ></S.WriterInput>
            <S.WriterInput
              placeholder="비밀번호"
              style={{ paddingLeft: "10px", fontWeight: "500" }}
            ></S.WriterInput>
            <S.Star></S.Star>
          </S.InputWrapper>
          <S.CommentContents
            placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            style={{ padding: "0px 0px 100px 15px" }}
          ></S.CommentContents>
          <S.D>
            <S.CommentButton>등록하기</S.CommentButton>
          </S.D>

          {/* <WriterComment>
            <EditButton></EditButton>
            <DeleteButton></DeleteButton>
          </WriterComment> */}
        </S.CommentWrapper>
      </S.Wrapper2>
    </>
  );
}
