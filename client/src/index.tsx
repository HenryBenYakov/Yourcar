import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { App } from "./App";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./app/graphql";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>
);
