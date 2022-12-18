import React from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";

const SettingsModal = ({ closeModal }) => {
  const settings = useContext(SettingsContext);

  return (
    
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="modalCloseX" onClick={() => closeModal(false)}> X </button>
        <div className="title">
          <h1>Timer Settings</h1>
        </div>
        <div className="body">
          <h4>study: {settings.studyMinutes}:00</h4>
          <ReactSlider
            className={"slider"}
            thumbClassName={"thumb"}
            trackClassName={"track"}
            value={settings.studyMinutes}
            onChange={(newValue) => settings.setStudyMinutes(newValue)}
            min={1}
            max={60}
          />
          <h4>break: {settings.breakMinutes}:00</h4>
          <ReactSlider
            className={"slider2"}
            thumbClassName={"thumb2"}
            trackClassName={"track2"}
            value={settings.breakMinutes}
            onChange={(newValue) => settings.setBreakMinutes(newValue)}
            min={1}
            max={20}
          />
        </div>
        <div className="footer">
          <button className="modalContinue" onClick={() => closeModal(false)}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
