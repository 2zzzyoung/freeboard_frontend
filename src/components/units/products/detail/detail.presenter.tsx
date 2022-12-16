import DOMPurify from "dompurify";
import { useEffect } from "react";
import CommentList from "../../productComment/list/commentList.container";
import CommentWrite from "../../productComment/write/commentWrite.container";
import * as S from "./detail.styles";
import { IProductDetailUIProps } from "./detail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=67ff797434525aa2bbca4bf944af63c8";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.5445755, 127.0559695), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });

        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              map.setCenter(coords);
            }
          }
        );
      });
    };
  });

  return (
    <>
      <S.MainWrapper>
        <S.SellerInfo>
          <S.SellerName></S.SellerName>
          <S.CreateAt></S.CreateAt>
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
                <S.TextStyle>
                  <div>
                    {/* <img src="/seller.png" style={{ width: "30px" }} /> */}
                    판매자:
                  </div>
                </S.TextStyle>
                {props.data?.fetchUseditem.seller?.name}
              </S.TextContentsWrapper>
              <S.TextContentsWrapper>
                <S.TextStyle>등록날짜:</S.TextStyle>
                <div>{props.data?.fetchUseditem.createdAt.slice(0, 10)}</div>
              </S.TextContentsWrapper>
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
                {process.browser && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        String(props.data?.fetchUseditem.contents)
                      ),
                    }}
                  ></div>
                )}
              </S.TextContentsWrapper>
            </S.TitleContentsWrapper>

            <S.TextContentsWrapper>
              <S.AddressWrapper>
                <S.Address>
                  <S.TextStyle>주소:</S.TextStyle>
                  <div>
                    {props.data?.fetchUseditem.useditemAddress?.address}
                  </div>
                </S.Address>
                <S.MapContainer id="map">asd</S.MapContainer>
              </S.AddressWrapper>
            </S.TextContentsWrapper>

            <S.ButtonContainer>
              <S.Button onClick={props.onClickProductBuy}>구매하기</S.Button>
              <S.Button
                onClick={props.onClickBasket(props.data?.fetchUseditem)}
              >
                장바구니
              </S.Button>
              <S.Button onClick={props.onClickPicked}>찜하기</S.Button>
            </S.ButtonContainer>
          </S.TextWrapper>
        </S.ImgContentsWrapper>
        <S.TitleBottomWrapper></S.TitleBottomWrapper>
        <S.MutationBtnWrapper>
          <S.MutationBtn onClick={props.onClickMoveToEdit}>수정</S.MutationBtn>
          <S.MutationBtn onClick={props.onClickDelete}>삭제</S.MutationBtn>
        </S.MutationBtnWrapper>
        <S.CommentBox>
          <S.CommentTitle>댓글</S.CommentTitle>
          <CommentWrite isEdit={false} />
          {props.commentData?.fetchUseditemQuestions.map((el) => {
            return <CommentList el={el} key={el._id} />;
          })}
        </S.CommentBox>
      </S.MainWrapper>
    </>
  );
}
