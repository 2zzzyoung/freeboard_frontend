import { Fragment } from "react";
import CommentWrite from "../write/commentWrite.container";
import RecommentWrite from "../write/recommentWrite.container";
import * as S from "./commentList.styles";
import RecommentList from "./recommentList.container";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <>
      <S.CommentListBox>
        <Fragment key={props.el._id}>
          <S.CommentList>
            <S.WriterDate>
              <S.Writer>{props.el.user.name}</S.Writer>
              <S.Date>{props.el.createdAt.slice(0, 10)}</S.Date>
            </S.WriterDate>
            <S.CommentContents>{props.el.contents}</S.CommentContents>
            <S.UpdateDel>
              <S.CommentBtn
                onClick={props.onClickToggleRecomment(props.el._id)}
              >
                답글
              </S.CommentBtn>
              <S.CommentBtn
                onClick={props.onClickToggleUpdateBtn(props.el._id)}
              >
                수정
              </S.CommentBtn>
              <S.CommentBtn onClick={props.onClickDeleteComment(props.el._id)}>
                삭제
              </S.CommentBtn>
            </S.UpdateDel>
          </S.CommentList>
          {props.isRecomment && <RecommentWrite commentId={props.commentId} />}
          {props.isUpdateComment && (
            <CommentWrite
              isEdit={true}
              commentId={props.commentId}
              el={props.el}
              setIsUpdateComment={props.setIsUpdateComment}
            />
          )}
          <RecommentList commentId={props.el._id} />
        </Fragment>
      </S.CommentListBox>
    </>
  );
}
