import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
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
            <InnerButton onClick={props.onClickMoveToJoin}>
              마이페이지
            </InnerButton>
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
