import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import DeveloperPortal from "./DeveloperPortal";
import { Catalog } from "catalog/Catalog";

import "./index.css";

function Layout() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#6F2CDC",
          padding: 20,
          fontSize: 20,
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        Exemplo de layout (developer-portal)
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            backgroundColor: "#6F2CDC",
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
              Developer Portal
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
        <Route index element={<DeveloperPortal />} />
        <Route
          path="catalog"
          element={<Catalog produto={"developer-portal"} />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
