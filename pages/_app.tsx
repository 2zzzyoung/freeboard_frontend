import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import ApolloSetting from "../src/components/commons/apollo";
import "antd/dist/antd.css";
// import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </>
    </ApolloSetting>
  );
}

export default MyApp;
