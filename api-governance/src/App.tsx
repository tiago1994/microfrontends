import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Catalog } from "./Catalog";
import Governance from "./Governance";

import "./index.css";

function Layout() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(12 67 149)",
          padding: 20,
          fontSize: 20,
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        Exemplo de layout (api-governance)
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(12 67 149)",
            padding: 20,
            fontSize: 16,
            width: 250,
            height: "calc(100vh - 103px)",
            color: "#FFFFFF",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
            }}
          >
            <Link
              to={"/"}
              style={{
                marginTop: 10,
                marginBottom: 10,
                textDecoration: "none",
                color: "#FFF",
              }}
            >
              Api Governance
            </Link>
            <Link
              to={"/catalog"}
              style={{
                marginTop: 10,
                marginBottom: 10,
                textDecoration: "none",
                color: "#FFF",
              }}
            >
              Catalog
            </Link>
          </nav>
        </div>
        <div style={{ padding: 20, width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Governance />} />
        <Route path="catalog" element={<Catalog />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
