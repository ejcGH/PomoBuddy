import "./App.css";
import Timer from "./Components/Timer";

import NavigationBar from "./Components/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./Components/LogIn";

function App() {
  return (
    
       <div className="App">
      <NavigationBar />
     
      {/* <Routes>
        <Route path="/Timer" component={<Timer />} />
        <Route path="/LogIn" component={<LogInPage />} />
        <Route path="*" component={<Navigate to="/" />} />
      </Routes> */}

      </div>
   
  );
}

export default App;
