import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import { successModal } from "../../modal/modal-function";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import {
  FETCH_USER_LOGGED_IN,
  LOGOUT_USER,
  POINT_CHARGE,
} from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();

  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogo = () => {
    void router.push("/boards");
  };

  const onClickMoveToLogin = () => {
    void router.push("/login");
  };

  const onClickMoveToJoin = () => {
    void router.push("/join");
  };
  const onClickMoveToMypage = () => {
    void router.push("/mypage");
  };

  const onClickLogout = async () => {
    await logoutUser();
    router.reload();
    successModal("로그아웃 되었습니다.");
  };

  const [pointCharge] = useMutation(POINT_CHARGE);

  const onClickPointCharge = (data: any) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: `포인트 충전`,
        amount: 100,
        buyer_email: "sss@sss.com",
        buyer_name: "테스트",
        buyer_tel: "010-1234-1234",
      },
      async (rsp: any) => {
        // callback

        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          await pointCharge({
            variables: {
              impUid: rsp.imp_uid,
            },
            update(cache) {
              cache.modify({
                fields: () => {},
              });
            },
          });
          alert("충전에 성공하였습니다.");
        } else {
          // 결제 실패 시 로직,
          alert("충전이 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <LayoutHeaderUI
        onClickLogo={onClickLogo}
        onClickMoveToLogin={onClickMoveToLogin}
        onClickMoveToJoin={onClickMoveToJoin}
        onClickLogout={onClickLogout}
        onClickPointCharge={onClickPointCharge}
        onClickMoveToMypage={onClickMoveToMypage}
        userData={userData}
      />
    </>
  );
}
