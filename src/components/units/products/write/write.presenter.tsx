import { IProductWriteUIProps } from "./writer.types";
import * as S from "./write.styles";
import dynamic from "next/dynamic";
import DaumPostcodeEmbed from "react-daum-postcode";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal visible={true} onCancel={props.onClickHandleCancel}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.MainForm
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickEdit)
            : props.handleSubmit(props.onSubmitWrite)
        }
      >
        <S.MainWrapper>
          <S.ProductInfoWrapper>
            <S.ProductInfo>상품이미지</S.ProductInfo>
            <S.LabelContainer>
              {new Array(3).fill(1).map((_, index) => {
                return (
                  <>
                    {props.imgUrl[index] ? (
                      <S.ImgBtn
                        style={{
                          backgroundImage: `url(https://storage.googleapis.com/${props.imgUrl[
                            index
                          ].replaceAll(" ", "%20")})`,
                          backgroundColor: "#fff",
                          backgroundSize: "cover",
                        }}
                        key={index}
                        htmlFor={`file${index}`}
                      >
                        +
                        <S.ImgInput
                          type="file"
                          id={`file${index}`}
                          onChange={props.onChangeFile(index)}
                        />
                      </S.ImgBtn>
                    ) : (
                      <S.ImgBtn key={index} htmlFor={`file${index}`}>
                        +
                        <S.ImgInput
                          type="file"
                          id={`file${index}`}
                          onChange={props.onChangeFile(index)}
                        />
                      </S.ImgBtn>
                    )}
                  </>
                );
              })}
            </S.LabelContainer>
          </S.ProductInfoWrapper>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>상품명</S.ProductInfo>
              <S.ProductTitleInput
                type="text"
                placeholder="상품명을 입력해주세요."
                maxLength={40}
                defaultValue={props.data?.fetchUseditem.name || ""}
                {...props.register("name")}
              />
              <S.ErrorMsg>{props.formState.errors.name?.message}</S.ErrorMsg>
            </S.ProductTitleWrapper>
          </div>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>한줄요약</S.ProductInfo>
              <S.ProductTitleInput
                type="text"
                placeholder="한줄요약을 입력해주세요."
                maxLength={40}
                defaultValue={props.data?.fetchUseditem.remarks || ""}
                {...props.register("remarks")}
              />
              <S.ErrorMsg>{props.formState.errors.remarks?.message}</S.ErrorMsg>
            </S.ProductTitleWrapper>
          </div>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>태그</S.ProductInfo>
              <S.ProductTitleInput
                type="text"
                placeholder="태그를 입력해주세요."
                maxLength={40}
                defaultValue={props.data?.fetchUseditem.tags || ""}
                {...props.register("tags")}
              />
              <S.ErrorMsg>{props.formState.errors.tags?.message}</S.ErrorMsg>
            </S.ProductTitleWrapper>
          </div>
          <S.AddressWrapper>
            <S.ProductInfo>거래지역</S.ProductInfo>
            <S.AddressBtnWrapper>
              <S.BtnWrapper>
                <S.AddressBtn
                  type="button"
                  onClick={props.onClickaddressSearch}
                >
                  주소 검색
                </S.AddressBtn>
              </S.BtnWrapper>
              <S.AddressInputWrapper>
                <S.AddressInput
                  type="text"
                  readOnly
                  value={
                    props.MapAddress ||
                    props.data?.fetchUseditem.useditemAddress.address
                  }
                />
              </S.AddressInputWrapper>
            </S.AddressBtnWrapper>
          </S.AddressWrapper>
          <div>
            <S.ProductTitleWrapper>
              <S.ProductInfo>가격</S.ProductInfo>
              <S.PriceWrapper>
                <S.PriceInput
                  type="number"
                  defaultValue={props.data?.fetchUseditem.price || ""}
                  {...props.register("price")}
                />
                원{/* <S.OutLineStyle /> 배송비 포함 */}
                <S.ErrorMsg>{props.formState.errors.price?.message}</S.ErrorMsg>
              </S.PriceWrapper>
            </S.ProductTitleWrapper>
            <S.ProductTitleWrapper>
              <S.ProductInfo>상품소개</S.ProductInfo>
              <ReactQuill
                placeholder="상품 설명을 입력해주세요"
                onChange={props.onChangeContents}
                value={props.data?.fetchUseditem.contents || ""}
              />
              <S.ErrorMsg>
                {props.formState.errors.contents?.message}
              </S.ErrorMsg>
            </S.ProductTitleWrapper>
            {/* <S.ProductTitleWrapper>
              <S.ProductInfo>연관태그</S.ProductInfo>

              <S.TagInput type="text" {...props.register("tags")} />
              <S.ErrorMsg>{props.formState.errors.tags?.message}</S.ErrorMsg>
            </S.ProductTitleWrapper> */}
            <S.EnrollBtnWrapper>
              <S.EnrollBtn type="submit">
                {props.isEdit ? "상품수정" : "상품등록"}
              </S.EnrollBtn>
            </S.EnrollBtnWrapper>
          </div>
        </S.MainWrapper>
      </S.MainForm>
    </>
  );
}
