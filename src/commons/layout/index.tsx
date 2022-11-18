import LayoutBanner from "./banner/LayoutBanner.container";
// import LayoutHeader from "./header/LayoutHeader.container";
// import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  Childeren: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      {/* <LayoutHeader /> */}
      <LayoutBanner />
      {/* <LayoutNavigation /> */}
      <Body>
        <Component {...pageProps} />
      </Body>
    </>
  );
}
