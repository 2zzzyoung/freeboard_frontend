import * as S from "./main.styles";

export default function MainUI() {
  return (
    <>
      <S.Container>
        <S.MainPage>
          <S.Image>
            <img src="/5.png" style={{ width: "1900px" }} />
          </S.Image>
          <S.BestProduct></S.BestProduct>
        </S.MainPage>
      </S.Container>
    </>
  );
}
