import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";
import "antd/dist/antd.min.css";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backendclass.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
