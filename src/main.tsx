import React from "react";
import ReactDOM from "react-dom/client";

import { AppProviders, GlobalStyle } from "@/global";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppProviders>
            <GlobalStyle />
            <App />
        </AppProviders>
    </React.StrictMode>
);
