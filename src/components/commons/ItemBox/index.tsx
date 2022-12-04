import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 24%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
  border: 1px solid #eee;
`;
export const ItemInfo = styled.div``;

export const ItemTitle = styled.h2``;

export const ItemPrice = styled.p``;

export const ItemPick = styled.p``;

export default function ItemBox(props: any) {
  return (
    <Wrapper>
      <ImageContainer
        style={{
          backgroundImage: props.el.images[0]
            ? `url(http://storage.googleapis.com/${props.el.images[0]})`
            : `url(/cat.png)`,
        }}
      ></ImageContainer>
      <ItemInfo>
        <ItemTitle>{props.el.name}</ItemTitle>
        <ItemPrice>{props.el.price}</ItemPrice>
        <ItemPick>찜 {props.el.pickedCount}</ItemPick>
      </ItemInfo>
    </Wrapper>
  );
}
