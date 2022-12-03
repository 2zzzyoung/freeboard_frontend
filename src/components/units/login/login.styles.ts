import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 600px;
  /* height: 1410px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const ShopName = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 60px;
`;

export const KakaoBtn = styled.div`
  margin-top: 12px;
  padding: 0 0 0 20px;
  width: 460px;
  height: 60px;
  line-height: 60px;
  width: 300px;
  background-color: #fee500;
  font-size: 15px;
  font-weight: bold;
  color: #111;
  background-image: url("/images/kakao.svg");
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

export const MemberId = styled.div`
  width: 450px;
  height: 50px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

export const MemberPw = styled.div`
  width: 450px;
  height: 50px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;

export const LoginBtn = styled.button`
  width: 460px;
  height: 45px;
  background-color: #31363d;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

export const KaKaoText = styled.button``;

export const UtilMenu = styled.div`
  width: 460px;
  height: 17px;
  float: inherit;
  display: block;
  margin: 24px 0 0;
  border: none;
`;

export const FindId = styled.button`
  width: 60px;
  height: 15px;
  color: #e1e1e1;
  background-color: #ffffff;
  font-size: 12px;
  border: none;
  cursor: pointer;
`;

export const FindPw = styled.button`
  width: 60px;
  height: 15px;
  color: #e1e1e1;
  background-color: #ffffff;
  font-size: 12px;
  border: none;
  display: inline-block;
  cursor: pointer;
`;

export const JoinBtn = styled.button`
  width: 60px;
  height: 15px;
  color: #e1e1e1;
  background-color: #ffffff;
  font-size: 12px;
  border: none;
  cursor: pointer;
`;
