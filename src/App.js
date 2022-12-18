import React from "react";
import "./App.css";
import "./Settings.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./Components/LogInPage";
import CreateAccount from "./Components/CreateAccount";
import Faq from "./Components/Faq";
import Dashboard from "./Components/Dashboard";
import { LoginAuthProvider } from "./Components/LoginAuth";
import { useLoginAuth } from "./Components/LoginAuth";
import Timer from "./Components/Timer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123"
  // }

  // const [user, setUser] = useState({ name: "", email: "" })
  // const [error, setError] = useState("")

  // const Login = details => {
  //   console.log(details)
  // }

  // const Logout = () => {
  //   console.log("Logout")
  // }

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Timer />} />
          <Route path="/Login/*" element={<LogInPage />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
