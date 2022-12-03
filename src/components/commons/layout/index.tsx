import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBannerUI from "./banner";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}
const IS_HIDDEN = [``];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHidden = IS_HIDDEN.includes(router.asPath);
  console.log(router);
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      {!isHidden && <LayoutBannerUI />}
      <Body>{props.children}</Body>
    </>
  );
}
