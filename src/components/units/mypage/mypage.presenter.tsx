export default function MyPageUI() {
  return (
    <MyPageWrapper>
      <MyInfoContainer>
        <MyInfo>
          <MyInfoTop>
            <MyProfile>
              <MyImg></MyImg>
              <MyName>ㅇㅇㅇ</MyName>
              <ProfilePicBtn>사진등록</ProfilePicBtn>
            </MyProfile>
          </MyInfoTop>
          <MyInfoMiddle>
            <PointContainer>
              <PointCharge>
                <MyPoint>나의 포인트</MyPoint>
                <PointChargeBtn>포인트충전</PointChargeBtn>
              </PointCharge>
            </PointContainer>
            <ProductContainer>
              <SellProduct>판매중인 상품</SellProduct>
              <BuyProduct>구매한 상품</BuyProduct>
              <PickProduct>찜한 상품</PickProduct>
            </ProductContainer>
          </MyInfoMiddle>
          <MyInfoBottom>
            <MyPageBtn>등록</MyPageBtn>
          </MyInfoBottom>
        </MyInfo>
      </MyInfoContainer>
    </MyPageWrapper>
  );
}
