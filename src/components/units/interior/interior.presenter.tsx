import * as S from "./interior.styles";

export default function InteriorUI() {
  return (
    <>
      <S.Container>
        <S.Top>22 F/W DECOVIEW CONCEPT COLLECTION</S.Top>
        <S.MainImage>
          <img src="/interior.jpg" />
        </S.MainImage>
        <S.HWrapper>
          <S.h1>Happier Moments, 행복한 일상의 순간</S.h1>
          <S.h3>
            데코뷰는 고객의 행복한 공간 실현을 위해 변화하는 라이프 스타일
            트렌드를 빠르게 캐치하여 지속가능하고 새로운 리빙 인사이트를
            제시합니다.
          </S.h3>
        </S.HWrapper>
      </S.Container>
    </>
  );
}
