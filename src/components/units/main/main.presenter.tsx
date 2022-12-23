import * as S from "./main.styles";

export default function MainUI(props) {
  return (
    <>
      <S.Container>
        <S.MainPage>
          <S.Image onClick={props.onClickList}>
            <img src="/5.png" style={{ width: "1900px" }} />
          </S.Image>
          <S.BestProduct></S.BestProduct>
        </S.MainPage>
      </S.Container>
    </>
  );
}
