import "../styles/globals.css";
import { AppProps } from "next/app";
// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"; //module 요즘
// const { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"; // commonjs 옛날
import ApolloSetting from "../src/components/commons/apollo";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";

function MyApp({ Component }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}

export default MyApp;
