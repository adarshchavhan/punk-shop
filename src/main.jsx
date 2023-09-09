import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store.js";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalSyle.jsx";

const theme = {
  colors: {
    dark: "#101010",
    light: "#f9f9f9",
    shadow: "#efefef",
    white: "#fff",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
