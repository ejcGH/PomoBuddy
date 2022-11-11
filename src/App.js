import React from "react";
import "./App.css";
import "./Settings.css";

import NavigationBar from "./Components/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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

      <div className="App">
        <NavigationBar />
 
      </div>

  );
}

export default App;
