import './App.css';
import Timer from './Components/Timer'
import StartButton from './Components/StartButton';
import PauseButton from './Components/PauseButton';
import SettingsButton from './Components/Settings';

function App() {
  return (
    <div className="App">
      <Timer/>
        <div>
          <StartButton/>
          <PauseButton/>
        </div>
        <div>
          <SettingsButton/>
        </div>
        <div>

        </div>
    </div>
    
   
  );
}

export default App;
