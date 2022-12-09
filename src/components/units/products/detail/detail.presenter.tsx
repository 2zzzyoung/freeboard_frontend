import DOMPurify from "dompurify";
import * as S from "./detail.styles";
import { IProductDetailUIProps } from "./detail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <>
      <S.MainWrapper>
        <S.SellerInfo>
          <div>
            {/* <img src="/images/seller.png" /> */}
            <div> {props.data?.fetchUseditem.seller?.name}</div>
            <S.CreateAt>
              {props.data?.fetchUseditem.createdAt.slice(0, 10)}
            </S.CreateAt>
          </div>
          <div>
            {/* <img src="/images/board/link.png" />
            <img src="/images/board/location.png" /> */}
          </div>
        </S.SellerInfo>
        <S.ImgContentsWrapper>
          <S.ImgWrapper>
            {props.data?.fetchUseditem.images?.map((el) => {
              return el ? (
                <img
                  src={`https://storage.googleapis.com/${el}`}
                  alt="상품 이미지"
                />
              ) : (
                <div></div>
              );
            })}
          </S.ImgWrapper>

          <S.TextWrapper>
            <S.TitleMainWrapper>
              <S.titleWrapper>
                {props.data ? props.data?.fetchUseditem.name : "로딩중"}
              </S.titleWrapper>
              <S.PriceWrapper>
                {props.data?.fetchUseditem.price}원
              </S.PriceWrapper>
            </S.TitleMainWrapper>
            <S.TitleContentsWrapper>
              <S.TextContentsWrapper>
                <S.TextStyle>한줄요약:</S.TextStyle>
                <div>
                  {props.data ? props.data.fetchUseditem.remarks : "로딩"}
                </div>
              </S.TextContentsWrapper>
              <S.TextContentsWrapper>
                <S.TextStyle>찜개수:</S.TextStyle>
                <div>{props.data?.fetchUseditem.pickedCount}</div>
              </S.TextContentsWrapper>

              <S.TextContentsWrapper>
                <S.TextStyle>상품정보:</S.TextStyle>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      String(props.data?.fetchUseditem.contents)
                    ),
                  }}
                ></div>
              </S.TextContentsWrapper>
            </S.TitleContentsWrapper>
            <S.TextContentsWrapper>
              <S.TextStyle>주소:</S.TextStyle>
              <div>{props.data?.fetchUseditem.useditemAddress?.address}</div>
            </S.TextContentsWrapper>
          </S.TextWrapper>
        </S.ImgContentsWrapper>

        <S.TitleBottomWrapper>
          <S.ImgWrapper>{/* <KakaoMap /> */}</S.ImgWrapper>
          <S.TextWrapper></S.TextWrapper>
        </S.TitleBottomWrapper>
        <S.MutationBtnWrapper>
          <S.MutationBtn onClick={props.onClickMoveToEdit}>수정</S.MutationBtn>
          <S.MutationBtn onClick={props.onClickDelete}>삭제</S.MutationBtn>
        </S.MutationBtnWrapper>
      </S.MainWrapper>
    </>
  );
}
