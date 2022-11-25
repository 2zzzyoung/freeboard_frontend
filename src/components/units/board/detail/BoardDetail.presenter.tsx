import { Tooltip } from "antd";
import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
// import ReactPlayer from "react-player";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import BoardCommentWrite from "../../boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../boardComment/list/BoardCommentList.container";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
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
                />
                <S.WriterInfo>
                  <div style={{ fontSize: "24px", fontWeight: "500" }}>
                    {props.data?.fetchBoard?.writer}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#bdbdbd",
                    }}
                  ></div>
                </S.WriterInfo>
              </S.NameContainer>
              <S.ImageContainer>
                <img src="/link.png" />
                <Tooltip
                  placement="topRight"
                  title={`${
                    props.data?.fetchBoard.boardAddress?.address ?? ""
                  } ${
                    props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                  }`}
                >
                  <S.LocationIcon src="/location.png" />
                </Tooltip>
              </S.ImageContainer>
            </S.TopWrapper>
          </S.DD>
          <S.MiddleWrapper>
            <S.TitleContainer>{props.data?.fetchBoard?.title}</S.TitleContainer>
            <S.ContentsContainer>
              {console.log(props.data?.fetchBoard)}
              <S.PicContainer
                src={`http://storage.googleapis.com/${String(
                  props.data?.fetchBoard?.images
                )}`}
              />

              <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
              <S.VideoContainer
                url={String(props.data?.fetchBoard.youtubeUrl)}
              />

              <S.Thumbs>
                <S.IconWrapper>
                  <S.Like onClick={props.onClickLikeBoard}>
                    <img src="/like.png"></img>
                  </S.Like>
                  <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
                </S.IconWrapper>
                <S.IconWrapper>
                  <S.DisLike onClick={props.onClickDislikeBoard}>
                    <img src="/dislike.png"></img>
                  </S.DisLike>
                  <S.DislikeCount>
                    {props.data?.fetchBoard.dislikeCount}
                  </S.DislikeCount>
                </S.IconWrapper>
              </S.Thumbs>
            </S.ContentsContainer>
          </S.MiddleWrapper>
        </S.MainWrapper>
      </S.Wrapper>
      <S.Wrapper2>
        <S.CommentWrapper>
          <S.ButtonContainer>
            <S.Button style={{ paddingTop: "8px" }} onClick={props.onClickList}>
              목록으로
            </S.Button>
            <S.Button style={{ paddingTop: "8px" }} onClick={props.onClickEdit}>
              수정하기
            </S.Button>
            <S.Button
              style={{ paddingTop: "8px" }}
              onClick={props.onClickDelete}
            >
              삭제하기
            </S.Button>
          </S.ButtonContainer>
        </S.CommentWrapper>
      </S.Wrapper2>
      {console.log(props.comments)}
      <BoardCommentWrite />
      {props.comments?.fetchBoardComments.map((el: any) => {
        return <BoardCommentList key={el.id} el={el} />;
      })}
    </>
  );
}
