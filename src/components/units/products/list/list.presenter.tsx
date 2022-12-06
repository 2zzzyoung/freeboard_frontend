import * as S from "./list.styles";
import ItemBox from "../../../commons/ItemBox";
import { IProductListUIProps } from "./list.types";

export default function ProductListUI(props: IProductListUIProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleContainer>
          <S.Title>상품목록</S.Title>
          <S.Register>상품 등록</S.Register>
        </S.TitleContainer>
        <S.ItemWrapper>
          {props.data?.fetchUseditems.map((el) => {
            return <ItemBox key={el._id} el={el} />;
          })}
        </S.ItemWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
