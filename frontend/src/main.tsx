// import third-party modules
import React from "react";
import ReactDOM from "react-dom/client";
// import local modules
import Router from "@/router";

function App() {
  // return
  return <Router />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
