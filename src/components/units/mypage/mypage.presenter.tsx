import ItemBox from "../../commons/ItemBox";
import * as S from "./mypage.styles";

export default function MyPageUI(props) {
  return (
    <S.MyPageWrapper>
      <S.Container>
        <S.MyInfo>
          {/* <S.MyImg>{props.userData?.fetchUserLoggedIn.picture}</S.MyImg> */}
          <S.MyImg></S.MyImg>
          <S.MyName>{props.userData?.fetchUserLoggedIn.name}</S.MyName>
          <S.MyPoint>
            {props.userData?.fetchUserLoggedIn.userPoint.amount} P
          </S.MyPoint>
        </S.MyInfo>
        <S.TabMenuList>
          <S.TabMenu onClick={props.onClickToBuy}>구매 리스트</S.TabMenu>
          <S.TabMenu onClick={props.onClickToSold}>판매 리스트</S.TabMenu>
          <S.TabMenu onClick={props.onClickToPick}>찜한 리스트</S.TabMenu>
        </S.TabMenuList>
        {props.boughtList && (
          <S.ItemWrapper>
            {props.boughtData?.fetchUseditemsIBought.map((el) => {
              return (
                <ItemBox
                  el={el}
                  key={el._id}
                  onClick={props.onClickMoveDetail}
                />
              );
            })}
          </S.ItemWrapper>
        )}
        {props.soldList && (
          <S.ItemWrapper>
            {props.soldData?.fetchUseditemsISold.map((el) => {
              return (
                <ItemBox
                  el={el}
                  key={el._id}
                  onClick={props.onClickMoveDetail}
                />
              );
            })}
          </S.ItemWrapper>
        )}
        {props.pickedList && (
          <S.ItemWrapper>
            {props.pickedData?.fetchUseditemsIPicked.map((el) => {
              return (
                <ItemBox
                  el={el}
                  key={el._id}
                  onClick={props.onClickMoveDetail}
                />
              );
            })}
          </S.ItemWrapper>
        )}
      </S.Container>
    </S.MyPageWrapper>
  );
}
