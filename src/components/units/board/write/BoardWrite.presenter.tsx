import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  console.log(props.data?.fetchBoard);
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
                defaultValue={props.data?.fetchBoard.writer ?? ""}
                disabled={props.isEdit ? true : false}
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
            {console.log(props.data?.fetchBoard)}
            <S.Input2
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title}
            ></S.Input2>
            <S.Error>{props.titleError}</S.Error>
          </S.TitleWrapper>
          <S.MiddleContainer>
            <S.Middle>
              <S.Name>내용</S.Name>
              <S.BoardContents
                placeholder="내용을 작성해주세요."
                onChange={props.onChangeContents}
                style={{ height: "440px" }}
                defaultValue={props.data?.fetchBoard.contents ?? ""}
              ></S.BoardContents>
              <S.Error>{props.contentsError}</S.Error>
            </S.Middle>
            <S.Middle2>
              <S.Name>주소</S.Name>
              <S.Zipcode
                placeholder="07250"
                readOnly
                value={
                  props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
                }
              />
              <S.ZipBtn onClick={props.onClickAddressSearch}>
                우편번호 검색
              </S.ZipBtn>
            </S.Middle2>
            {/* <S.Address1 /> */}
            {/* <S.Address1
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }
            /> */}
            <S.Address2>
              <S.Input2
                value={
                  props.address || props.data?.fetchBoard.boardAddress?.address
                }
                disabled
              />
              <S.Input2
                defaultValue={
                  props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }
                onChange={props.onChangeAddressDetail}
              />
            </S.Address2>
            <S.Youtube>
              <S.Name>유튜브</S.Name>
              <S.Input2
                type="text"
                placeholder="링크를 복사해주세요."
                onChange={props.onChangeYoutubeUrl}
                defaultValue={props.data?.fetchBoard.youtubeUrl}
              />
            </S.Youtube>
          </S.MiddleContainer>
          <S.BottomWrapper>
            <S.Pick>
              <S.Name>사진 첨부</S.Name>
              <S.Box>
                {console.log(props.fileUrls)}
                {props.fileUrls ? (
                  <label htmlFor="file01">
                    <S.ImageBg
                      onChange={props.onChangeFile}
                      src={`http://storage.googleapis.com/${props.fileUrls}`}
                    />
                  </label>
                ) : (
                  <S.UploadBtn
                    style={{
                      color: "#4F4F4F",
                    }}
                    htmlFor="file01"
                  >
                    <p>+</p>
                    <p>Upload</p>
                  </S.UploadBtn>
                )}
              </S.Box>
              <input
                type="file"
                id="file01"
                style={{ display: "none" }}
                onChange={props.onChangeFile}
              />
            </S.Pick>
            {/* <S.Name>메인 설정</S.Name>
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
            </S.Box2> */}
          </S.BottomWrapper>
          <S.EnrollBtn
            onClick={props.isEdit ? props.onClickEdit : props.onClickEnroll}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.EnrollBtn>
        </S.MainWrapper>
        {props.isOpen && (
          <Modal
            open={true}
            onOk={props.onToggleModal}
            onCancel={props.onToggleModal}
          >
            <DaumPostcodeEmbed onComplete={props.handleComplete} />
          </Modal>
        )}
      </S.Wrapper>
    </>
  );
}
