import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";
import "react-circular-progressbar/dist/styles.css";
import SettingsModal from "./Settings";
import SettingsContext from "./SettingsContext";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";

const Timer = () => {
  const settings = useContext(SettingsContext);
  const [openModal, setOpenModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [studyMinutes, setStudyMinutes] = useState(20);
  const [breakMinutes, setBreakMinutes] = useState(10);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [session, setSession] = useState("study");

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const sessionRef = useRef(session);

  const switchSession = () => {
    const nextSession = sessionRef.current === "study" ? "break" : "study";
    
    const nextSeconds =
      (nextSession === "study"
        ? settings.studyMinutes
        : settings.breakMinutes) * 60;
   
    setSession(nextSession);
    sessionRef.current = nextSession;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  };

  const countdown = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  const initTimer = () => {
    secondsLeftRef.current = settings.studyMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    initTimer()
    
    const timerInterval = setInterval(() => {
      // console.log(isPausedRef, secondsLeftRef)
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchSession();
      }
      countdown();
    }, 1000);

    return () => clearInterval(timerInterval)
  }, [settings]);

  const totalSeconds =
    session === "study"
      ? settings.studyMinutes * 60
      : settings.breakMinutes * 60;


  const percentage = Math.round((studyMinutes / totalSeconds) * 100);

  console.log(percentage);
  const minutes = Math.floor(secondsLeftRef.current / 60);
  console.log(minutes);
  let seconds = secondsLeft % 60;
  console.log(seconds);
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <main>
      <SettingsContext.Provider
        value={{
          studyMinutes,
          breakMinutes,
          setStudyMinutes,
          setBreakMinutes,
        }}
      >
        <CircularProgressbar
          value={percentage}
          maxValue={1}
          text={minutes + ":" + seconds}
          
        />
        <div>
          {isPaused ? 
            <PlayButton
              onClick={() => {
                console.log("hi")
                setIsPaused(false);
                isPausedRef.current = false;
                
              }}
            />
           : 
            <PauseButton
              onClick={() => {
                setIsPaused(true);
                isPausedRef.current = true;
              }}
            />
          }
        </div>
        <div>
          {/* Settings button */}
          <button
            className="with-text openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5  0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>
            Settings
          </button>
          {openModal && <SettingsModal closeModal={setOpenModal} />}
        </div>
      </SettingsContext.Provider>
    </main>
  );
};

export default Timer;
