import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper>
          <S.WriterImg src="/Writer.png" />
          <S.CommentWrapper>
            <S.WriterWrapper>
              <S.Writer>{el?.writer}</S.Writer>
            </S.WriterWrapper>
            <S.Contents>{el.contents}</S.Contents>
          </S.CommentWrapper>
          <S.EditWrapper>
            <S.UpdateIcon onClick={props.onClickUpdate} src="" />
            <S.DeleteIcon onClick={props.onClickDelete} src="" />
          </S.EditWrapper>
          <S.Date>{getDate(el?.createdAt)}</S.Date>
        </S.Wrapper>
      ))}
    </>
  );
}
