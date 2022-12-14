import * as S from "./list.styles";
import ItemBox from "../../../commons/ItemBox";
import { IProductListUIProps } from "./list.types";
import InfiniteScroll from "react-infinite-scroller";
import { url } from "inspector";

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
                  onClick={props.onClickMoveDetail(el)}
                />
              );
            })}
          </S.ItemWrapper>
        </InfiniteScroll>
      </S.Container>
      <S.LookProductList>
        <S.LookProductListTitle>최근 본 상품</S.LookProductListTitle>
        <S.LookProductImgBox>
          {props.lookProductData?.map((el) => {
            return (
              <S.LookProductImg
                key={el._id}
                style={{
                  backgroundImage: el.images[0]
                    ? `url(https://storage.googleapis.com/${el.images[0].replaceAll(
                        " ",
                        "%20"
                      )})`
                    : `url(/cat.png)`,
                }}
              ></S.LookProductImg>
            );
          })}
        </S.LookProductImgBox>
      </S.LookProductList>
    </S.Wrapper>
  );
}
