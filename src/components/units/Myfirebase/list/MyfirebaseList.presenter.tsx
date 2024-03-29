import { v4 as uuidv4 } from "uuid";

export default function MyfirebaseListUI(props: IMyfirebaseListUIProps) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>제목</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
        <S.ColumnHeaderTitle>작성자</S.ColumnHeaderTitle>
      </S.Row>
      {props.dataBoards?.map((el: any, index: number) => {
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnBasic>{el.title}</S.ColumnBasic>
          <S.ColumnHeaderTitle>{el.contents}</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>{el.writer}</S.ColumnHeaderTitle>
        </S.Row>;
      })}
      <S.Button onClick={props.onClickMoveToBoardNew}>
        <S.PencilIcon src="/images/board/list/write.png" />
        게시물 등록하기
      </S.Button>
    </S.Wrapper>
  );
}
