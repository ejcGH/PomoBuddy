import './App.css';
import Timer from './Components/Timer'
import StartButton from './Components/StartButton';

function App() {
  return (
    <div className="App">
      <Timer/>
        <div>
          <StartButton/>
        </div>
    </div>
    
   
  );
}

export default App;
