import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import About from "about/About";
import Users from "users/Users";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

function Layout() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#EEEEEE",
          padding: 20,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Exemplo de layout (host)
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            backgroundColor: "#F5F5F5",
            padding: 20,
            fontSize: 16,
            width: 250,
            height: "calc(100vh - 103px)",
          }}
        >
          <div style={{ fontSize: 20 }}>Sidebar (host)</div>
          <nav
            style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
          >
            <Link
              to={"/"}
              style={{
                marginTop: 10,
                marginBottom: 10,
                textDecoration: "none",
                color: "gray",
              }}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              style={{
                marginTop: 10,
                marginBottom: 10,
                textDecoration: "none",
                color: "gray",
              }}
            >
              About
            </Link>
            <Link
              to={"/users"}
              style={{
                marginTop: 10,
                marginBottom: 10,
                textDecoration: "none",
                color: "gray",
              }}
            >
              Users
            </Link>
          </nav>
        </div>
        <div style={{ padding: 20 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      <h2>Home (host)</h2>
      <ul>
        {dados.map((todo: any) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

function AboutPage() {
  return <About />;
}

function UsersPage() {
  return <Users />;
}

ReactDOM.render(<App />, document.getElementById("app"));
