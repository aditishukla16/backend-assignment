import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const interval = setInterval(() => {
      setToken(localStorage.getItem("token"));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Backend Assignment UI</h1>

      {!token ? (
        <>
          <div className="card">
            <Register />
          </div>

          <div className="card">
            <Login />
          </div>
        </>
      ) : (
        <div className="card">
          <Dashboard />
        </div>
      )}
    </div>
  );
}

export default App;