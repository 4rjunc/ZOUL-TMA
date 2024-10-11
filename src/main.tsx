import "./patch-local-storage-for-github-pages";

import "@telegram-apps/telegram-ui/dist/styles.css";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import { AppRoot } from "@telegram-apps/telegram-ui";
import "./index.scss";
import eruda from "eruda";

eruda.init();

render(
  <StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </StrictMode>,
  document.getElementById("root") as HTMLElement,
);
