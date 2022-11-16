import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/utils/utils";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.TopListWrapper>
        <S.BestWrapper></S.BestWrapper>
      </S.TopListWrapper>
      <S.SearchContainer>
        <S.SearchBox>
          <S.SearchImg src="/search.png" />
          <S.SearchInput
            type="text"
            placeholder="제목을 검색해주세요."
          ></S.SearchInput>
        </S.SearchBox>
        <S.SearchDate></S.SearchDate>
        <S.SearchBtn>검색하기</S.SearchBtn>
      </S.SearchContainer>
      <S.ListWrapper>
        <S.Row style={{ fontSize: "18px", fontWeight: "500" }}>
          <S.ColumnNumber>번호</S.ColumnNumber>
          <S.ColumnTitle>제목</S.ColumnTitle>
          <S.ColumnWriter>작성자</S.ColumnWriter>
          <S.ColumnDate>날짜</S.ColumnDate>
        </S.Row>
        {props.data?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <S.ColumnNumber>{10 - index}</S.ColumnNumber>
            <S.ColumnTitle id={el._id} onClick={onClickBoardDetail}>
              {el.title}
            </S.ColumnTitle>
            <S.ColumnWriter>{el.writer}</S.ColumnWriter>
            <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
          </S.Row>
        ))}
      </S.ListWrapper>
      <S.BottomContainer>
        <S.Page>{"< >"}</S.Page>
        {/* 페이지네이션 */}
        <S.ButtonWrapper>
          <S.ButtonImage>
            <img src="/write.png"></img>
          </S.ButtonImage>
          <S.Button onClick={props.onClickBoardNew}>게시물 등록</S.Button>
        </S.ButtonWrapper>
      </S.BottomContainer>
    </S.Wrapper>
  );
}
