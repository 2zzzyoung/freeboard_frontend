import {
  BasketNum,
  InnerButton,
  InnerLogo,
  InnerWrapper,
  PointText,
  Wrapper,
} from "./LayoutHeader.styles";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { accessTokenState, refetch } from "../../../../store";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

export default function LayoutHeaderUI(props: any) {
  const [accessToken] = useRecoilState(accessTokenState);
  const [basketNum, setBasketNum] = useState(0);
  const [refetchNum] = useRecoilState(refetch);

  useEffect(() => {
    const basketProductData = JSON.parse(localStorage.getItem("baskets"));
    setBasketNum(basketProductData?.length);

    console.log(basketProductData);
  }, [refetchNum]);

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>
          <img src="/logo.png" />
        </InnerLogo>
        <div>
          {accessToken ? (
            <>
              <InnerButton style={{ cursor: "default" }}>
                {props.userData?.fetchUserLoggedIn.userPoint.amount} 포인트
              </InnerButton>
              <InnerButton onClick={props.onClickPointCharge}>
                포인트 충전
              </InnerButton>
              <InnerButton onClick={props.onClickMoveToMypage}>
                마이페이지
              </InnerButton>
            </>
          ) : (
            <InnerButton onClick={props.onClickMoveToJoin}>
              회원가입
            </InnerButton>
          )}
          {accessToken ? (
            <InnerButton onClick={props.onClickLogout}>로그아웃</InnerButton>
          ) : (
            <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          )}

          {/* <InnerButton>최근 본 상품</InnerButton> */}
          <InnerButton>
            <ShoppingCartOutlined />
            <BasketNum>{basketNum}</BasketNum>
          </InnerButton>
          {/* <InnerButton>고객센터</InnerButton> */}
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
