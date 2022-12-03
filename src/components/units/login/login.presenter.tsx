import * as S from "./login.styles";

const LoginWriteUI = ({
  onChangeEmail,
  onChangePassword,
  onClickLogin,
  onClickJoin,
}: any) => {
  return (
    <>
      <S.Wrapper>
        <S.ShopName>DECOVIEW</S.ShopName>
        <br></br>
        이메일:{" "}
        <input
          type="text"
          id="member_id"
          placeholder="아이디"
          onChange={onChangeEmail}
        ></input>
        비밀번호:{" "}
        <input
          type="password"
          id="member_password"
          placeholder="비밀번호"
          onChange={onChangePassword}
        ></input>
        <br></br>
        <S.LoginBtn onClick={onClickLogin}>회원 로그인</S.LoginBtn>
        <br></br>
        <S.UtilMenu>
          <S.FindId>아이디 찾기</S.FindId>
          <S.FindPw>비밀번호 찾기</S.FindPw>
          <S.JoinBtn onClick={onClickJoin}>가입하기</S.JoinBtn>
        </S.UtilMenu>
      </S.Wrapper>
    </>
  );
};

export default LoginWriteUI;
