import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.MainWrapper>
          <S.TitleContainer>
            <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
          </S.TitleContainer>
          <S.TopInputContainer>
            <S.WriterContainer>
              <S.Name>작성자</S.Name>
              <S.Input1
                type="text"
                placeholder="이름을 적어주세요."
                onChange={props.onChangeWriter}
                defaultValue={props.data?.fetchBoard.writer || ""}
              ></S.Input1>
              <S.Error>{props.writerError}</S.Error>
            </S.WriterContainer>
            <S.PasswordContainer>
              <S.Name>비밀번호</S.Name>
              <S.Input1
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePassword}
              ></S.Input1>
              <S.Error>{props.passwordError}</S.Error>
            </S.PasswordContainer>
          </S.TopInputContainer>
          <S.TitleWrapper>
            <S.Name>제목</S.Name>
            <S.Input2
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title || ""}
            ></S.Input2>
            <S.Error>{props.titleError}</S.Error>
          </S.TitleWrapper>
          <S.MiddleContainer>
            <S.Middle>
              <S.Name>내용</S.Name>
              <S.Input3
                placeholder="내용을 작성해주세요."
                onChange={props.onChangeContents}
                style={{ paddingBottom: "440px" }}
                defaultValue={props.data?.fetchBoard.contents || ""}
              ></S.Input3>
              <S.Error>{props.contentsError}</S.Error>
            </S.Middle>
            <S.Middle2>
              <S.Name>주소</S.Name>
              <S.Input4></S.Input4>
              <S.ZipBtn>우편번호 검색</S.ZipBtn>
            </S.Middle2>
            <S.Address1>
              <S.Input2></S.Input2>
            </S.Address1>
            <S.Address2>
              <S.Input2></S.Input2>
            </S.Address2>
            <S.Youtube>
              <S.Name>유튜브</S.Name>
              <S.Input2
                type="text"
                placeholder="링크를 복사해주세요."
              ></S.Input2>
            </S.Youtube>
          </S.MiddleContainer>
          <S.BottomWrapper>
            <S.Pick>
              <S.Name>사진 첨부</S.Name>
              <S.Box>
                <S.UploadBtn style={{ color: "#4F4F4F" }}>
                  <p>+</p>
                  <p>Upload</p>
                </S.UploadBtn>
                <S.UploadBtn style={{ color: "#4F4F4F" }}>
                  <p>+</p>
                  <p>Upload</p>
                </S.UploadBtn>
                <S.UploadBtn style={{ color: "#4F4F4F" }}>
                  <p>+</p>
                  <p>Upload</p>
                </S.UploadBtn>
              </S.Box>
            </S.Pick>
            <S.Name>메인 설정</S.Name>
            <S.Box2>
              <div>
                <input
                  type="radio"
                  name="dd"
                  style={{
                    accentColor: "#ffd600",
                    width: "18px",
                    height: "18px",
                  }}
                />
                유튜브
              </div>
              <div>
                <input
                  type="radio"
                  name="dd"
                  style={{
                    accentColor: "#ffd600",
                    width: "18px",
                    height: "18px",
                  }}
                />{" "}
                사진
              </div>
            </S.Box2>
          </S.BottomWrapper>
          <S.EnrollBtn
            onClick={props.isEdit ? props.onClickEdit : props.onClickEnroll}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.EnrollBtn>
        </S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
