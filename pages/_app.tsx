import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import ApolloSetting from "../src/components/commons/apollo";
import "antd/dist/antd.css";
// import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
