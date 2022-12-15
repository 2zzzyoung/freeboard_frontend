import { useQuery } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import MyPageUI from "./mypage.presenter";
import {
  BOUGHT_PRODUCT,
  FETCH_USER_LOGGED_IN,
  PICKED_PRODUCT,
  SOLD_PRODUCT,
} from "./mypage.queries";

export default function MyPage() {
  const [boughtList, setBoughtList] = useState(true);
  const [soldList, setSoldList] = useState(false);
  const [pickedList, setPickedList] = useState(false);

  const { data: boughtData } =
    useQuery<Pick<IQuery, "fetchUseditemsIBought">>(BOUGHT_PRODUCT);
  const { data: soldData } =
    useQuery<Pick<IQuery, "fetchUseditemsISold">>(SOLD_PRODUCT);
  const { data: pickedData } = useQuery<Pick<IQuery, "fetchUseditemsIPicked">>(
    PICKED_PRODUCT,
    {
      variables: {
        page: 1,
        search: "",
      },
    }
  );

  console.log(pickedData);

  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  console.log(userData);

  const onClickToBuy = () => {
    setBoughtList(true);
    setSoldList(false);
    setPickedList(false);
  };
  const onClickToSold = () => {
    setBoughtList(false);
    setSoldList(true);
    setPickedList(false);
  };
  const onClickToPick = () => {
    setBoughtList(false);
    setSoldList(false);
    setPickedList(true);
  };

  return (
    <MyPageUI
      boughtData={boughtData}
      boughtList={boughtList}
      soldList={soldList}
      pickedList={pickedList}
      soldData={soldData}
      pickedData={pickedData}
      onClickToBuy={onClickToBuy}
      onClickToSold={onClickToSold}
      onClickToPick={onClickToPick}
      userData={userData}
    />
  );
}
