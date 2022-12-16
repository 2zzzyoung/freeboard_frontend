import * as S from "./commentWrite.styles";

export default function CommentWriteUI(props: ICommentWriterUIpProps) {
  return (
    <>
      {console.log(props.el)}
      <S.CommentWriteBox>
        <S.CommentTextarea
          placeholder="댓글을 입력해주세요."
          onChange={props.onChangeComment}
          value={props.comment || props.el?.contents}
        />
        <S.CommentSubmit
          onClick={
            props.isEdit
              ? props.onClickCommentUpdate
              : props.onClickCommentSubmit
          }
        >
          {props.isEdit ? "수정" : "등록"}
        </S.CommentSubmit>
      </S.CommentWriteBox>
    </>
  );
}
