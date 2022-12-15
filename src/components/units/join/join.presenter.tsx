import * as S from "./join.styles";

const JoinWriteUI = (props: any) => {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>회원가입</h1>
      <S.LineContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <h3 style={{ fontSize: "16px" }}>기본정보</h3>
          <h3 style={{ fontSize: "11px" }}>
            <span style={{ color: "red" }}>*</span>
            필수입력사항
          </h3>
        </div>
      </S.LineContainer>
      <S.MainContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <S.UserInfo>
            <span
              style={{
                display: "flex",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  width: "112px",
                  height: "79px",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "15px",
                }}
              >
                이메일<span style={{ color: "red" }}>*</span>
              </div>
              <S.InputBox onChange={props.onChangeEmail} />
            </span>
            <span
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "112px",
                  height: "79px",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "15px",
                }}
              >
                이름<span style={{ color: "red" }}>*</span>
              </div>
              <S.InputBox onChange={props.onChangeName} />
            </span>
            <span style={{ display: "flex" }}>
              <div
                style={{
                  width: "112px",
                  height: "79px",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "15px",
                }}
              >
                비밀번호<span style={{ color: "red" }}>*</span>
              </div>
              <S.InputBox onChange={props.onChangePassword} />
            </span>
            <span style={{ display: "flex" }}>
              <div
                style={{
                  width: "112px",
                  height: "79px",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "15px",
                }}
              >
                비밀번호 확인<span style={{ color: "red" }}>*</span>
              </div>
              <S.InputBox onChange={props.onChangePassword2} />
            </span>
          </S.UserInfo>
        </div>
      </S.MainContainer>
      <S.BtnWrapper>
        <S.JoinBtn onClick={props.onClickSubmit}>회원가입</S.JoinBtn>
      </S.BtnWrapper>
    </>
  );
};

export default JoinWriteUI;
