import * as S from "./recommentList.styles";

export default function RecommentListUI({ data }) {
  return (
    <>
      <S.CommentListBox>
        {data?.fetchUseditemQuestionAnswers.map((el) => {
          return (
            <S.CommentList key={el._id}>
              <S.WriterDate>
                <S.Writer>{el.user.name}</S.Writer>
                <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
              </S.WriterDate>
              <S.CommentContents>{el.contents}</S.CommentContents>
              <S.UpdateDel>
                <S.CommentBtn>수정</S.CommentBtn>
                <S.CommentBtn>삭제</S.CommentBtn>
              </S.UpdateDel>
            </S.CommentList>
          );
        })}
      </S.CommentListBox>
    </>
  );
}
