import { getDate } from "../../../../commons/libraries/utils";
import Pagination from "../../../commons/paginations/pagination.container";
import Searchbar from "../../../commons/searchbar/searchbar.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.TopListWrapper>
        <S.BestWrapper></S.BestWrapper>
      </S.TopListWrapper>
      <S.SearchContainer>
        <S.SearchBox>
          <S.SearchImg src="/search.png" />
          <Searchbar
            refetch={props.refetch}
            refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.SearchBox>
        {/* <S.SearchBtn>검색하기</S.SearchBtn> */}
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
            <S.ColumnTitle id={el._id} onClick={props.onClickBoardDetail}>
              {el.title
                .replaceAll(props.keyword, `@#$${props.keyword}@#$`)
                .split("@#$")
                .map((el) => (
                  <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </S.TextToken>
                ))}
            </S.ColumnTitle>
            <S.ColumnWriter>{el.writer}</S.ColumnWriter>
            <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
          </S.Row>
        ))}
      </S.ListWrapper>
      <S.BottomContainer>
        <S.Page>
          <Pagination refetch={props.refetch} count={props.count} />
        </S.Page>

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
