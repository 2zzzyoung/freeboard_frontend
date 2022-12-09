import * as S from "./list.styles";
import ItemBox from "../../../commons/ItemBox";
import { IProductListUIProps } from "./list.types";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <S.Title>상품목록</S.Title>
          <S.Register onClick={props.onClickMoveWrite}>상품 등록</S.Register>
        </S.TitleContainer>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.infiniteFun}
          hasMore={true || false}
        >
          <S.ItemWrapper>
            {props.data?.fetchUseditems.map((el) => {
              return (
                <ItemBox
                  el={el}
                  key={el._id}
                  onClick={props.onClickMoveDetail}
                />
              );
            })}
          </S.ItemWrapper>
        </InfiniteScroll>
      </S.Container>
    </S.Wrapper>
  );
}
