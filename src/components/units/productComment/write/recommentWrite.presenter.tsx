import * as S from "./recommentWrite.styles";

export default function RecommentWriteUI(props: IRecommentWriteUIProps) {
  return (
    <>
      <S.CommentWriteBox>
        <S.CommentTextarea
          placeholder="댓글을 입력해주세요."
          onChange={props.onChangeRecomment}
          value={props.recomment}
        />
        <S.CommentSubmit onClick={props.onClickRecommentSumbit}>
          등록
        </S.CommentSubmit>
      </S.CommentWriteBox>
    </>
  );
}
