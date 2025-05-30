import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FirebaseServices } from "./services/firebase.ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

FirebaseServices.initializateServices();

root.render(
  <React.StrictMode>
    <Suspense fallback={<>Loading...</>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
