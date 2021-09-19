import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import axe from "react-axe";
import { Provider } from "react-redux";
import GlobalStore from "./Redux/Store/GlobalStore";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}


Sentry.init({
  dsn: "https://a175e9570e024fcbbab966dd5a2d5af6@o975338.ingest.sentry.io/5966736",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={GlobalStore}>
      <App />
    </Provider>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
