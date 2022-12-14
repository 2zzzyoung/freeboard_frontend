import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  PointText,
  Wrapper,
} from "./LayoutHeader.styles";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { accessTokenState } from "../../../../store";
import { useRecoilState } from "recoil";

export default function LayoutHeaderUI(props: any) {
  const [accessToken] = useRecoilState(accessTokenState);

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
                {props.userData?.fetchUserLoggedIn.userPoint.amount}포인트
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
            <InnerButton onClick={props.onClickMoveToLogin}>
              로그아웃
            </InnerButton>
          ) : (
            <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          )}

          <InnerButton>최근 본 상품</InnerButton>
          <InnerButton>
            <ShoppingCartOutlined />
          </InnerButton>
          <InnerButton>고객센터</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
